-- Vilo Academy: CRC Elite Training — initial schema
-- Supabase / PostgreSQL — audit-oriented for 21 CFR Part 11 style traceability

-- ---------------------------------------------------------------------------
-- Extensions
-- ---------------------------------------------------------------------------
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
do $$ begin
  create type public.user_role as enum ('student', 'instructor', 'admin');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.progress_item_type as enum (
    'video_view',
    'quiz_attempt',
    'quiz_pass',
    'lesson_complete',
    'document_ack',
    'module_complete',
    'lab_transport_training'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.signature_kind as enum (
    'attestation',
    'certificate_ich_gcp',
    'certificate_iata',
    'certificate_dot',
    'other'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.document_student_status as enum (
    'not_started',
    'in_progress',
    'completed',
    'verified'
  );
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type public.retention_record_type as enum ('lab_transport_training');
exception
  when duplicate_object then null;
end $$;

-- ---------------------------------------------------------------------------
-- Profiles (perfiles)
-- ---------------------------------------------------------------------------
create table if not exists public.perfiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  role public.user_role not null default 'student',
  preferred_locale text not null default 'en' check (preferred_locale in ('en', 'es')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists perfiles_role_idx on public.perfiles (role);

-- Auto-provision profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.perfiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do update
    set email = excluded.email,
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Modules (modulos) — 15 CRC curriculum modules + SOP/version linkage
-- ---------------------------------------------------------------------------
create table if not exists public.modulos (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  order_index smallint not null check (order_index >= 1 and order_index <= 15),
  title_i18n jsonb not null default '{}'::jsonb,
  summary_i18n jsonb not null default '{}'::jsonb,
  sop_code text,
  sop_revision text,
  content_version text not null default '1.0.0',
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (slug, content_version)
);

create index if not exists modulos_order_idx on public.modulos (order_index);
create index if not exists modulos_published_idx on public.modulos (is_published);

-- ---------------------------------------------------------------------------
-- ICH-GCP essential documents catalog (52 items — seed separately)
-- ---------------------------------------------------------------------------
create table if not exists public.documentos_esenciales (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  section_ref text,
  title_i18n jsonb not null default '{}'::jsonb,
  category text,
  sort_order smallint not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists documentos_esenciales_sort_idx on public.documentos_esenciales (sort_order);

-- ---------------------------------------------------------------------------
-- Student progress (progreso_estudiante) — aggregate / milestone rows
-- ---------------------------------------------------------------------------
create table if not exists public.progreso_estudiante (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.perfiles (id) on delete cascade,
  modulo_id uuid references public.modulos (id) on delete set null,
  item_type public.progress_item_type not null,
  status text not null default 'completed',
  score_percent numeric(5,2),
  attempt_count integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists progreso_estudiante_user_idx on public.progreso_estudiante (user_id);
create index if not exists progreso_estudiante_modulo_idx on public.progreso_estudiante (modulo_id);
create index if not exists progreso_estudiante_type_idx on public.progreso_estudiante (item_type);

-- ---------------------------------------------------------------------------
-- Per-document progress for the 52 ICH-GCP essentials
-- ---------------------------------------------------------------------------
create table if not exists public.progreso_documentos_ich (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.perfiles (id) on delete cascade,
  documento_id uuid not null references public.documentos_esenciales (id) on delete cascade,
  status public.document_student_status not null default 'not_started',
  notes text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, documento_id)
);

create index if not exists progreso_doc_user_idx on public.progreso_documentos_ich (user_id);

-- ---------------------------------------------------------------------------
-- Digital signatures (firmas_digitales)
-- ---------------------------------------------------------------------------
create table if not exists public.firmas_digitales (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.perfiles (id) on delete cascade,
  modulo_id uuid references public.modulos (id) on delete set null,
  kind public.signature_kind not null,
  legal_attestation_version text not null default '1.0',
  signer_printed_name text not null,
  signer_title text,
  confirmation_phrase_hash text,
  identity_verified_at timestamptz not null default now(),
  ip inet,
  user_agent text,
  certificate_ref text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists firmas_user_idx on public.firmas_digitales (user_id);
create index if not exists firmas_kind_idx on public.firmas_digitales (kind);

-- ---------------------------------------------------------------------------
-- Immutable audit trail (Part 11 oriented) — append-only from app/RPC
-- ---------------------------------------------------------------------------
create table if not exists public.auditoria_acciones (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.perfiles (id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  payload jsonb not null default '{}'::jsonb,
  ip inet,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists auditoria_user_idx on public.auditoria_acciones (user_id);
create index if not exists auditoria_created_idx on public.auditoria_acciones (created_at);
create index if not exists auditoria_entity_idx on public.auditoria_acciones (entity_type, entity_id);

-- ---------------------------------------------------------------------------
-- Legal retention markers (e.g. lab transport training ≥ 2 years)
-- ---------------------------------------------------------------------------
create table if not exists public.registros_retencion (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.perfiles (id) on delete cascade,
  record_type public.retention_record_type not null,
  source_table text not null,
  source_id uuid not null,
  retention_until timestamptz not null,
  legal_basis text,
  created_at timestamptz not null default now()
);

create index if not exists retencion_user_idx on public.registros_retencion (user_id);
create index if not exists retencion_until_idx on public.registros_retencion (retention_until);

-- ---------------------------------------------------------------------------
-- RPC: append audit row (client-safe: forces user_id = auth.uid())
-- ---------------------------------------------------------------------------
create or replace function public.append_audit(
  p_action text,
  p_entity_type text,
  p_entity_id uuid,
  p_payload jsonb,
  p_ip text,
  p_user_agent text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_ip inet;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  begin
    v_ip := p_ip::inet;
  exception when others then
    v_ip := null;
  end;

  insert into public.auditoria_acciones (
    user_id, action, entity_type, entity_id, payload, ip, user_agent
  ) values (
    auth.uid(), p_action, p_entity_type, p_entity_id,
    coalesce(p_payload, '{}'::jsonb), v_ip, p_user_agent
  )
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.append_audit(text, text, uuid, jsonb, text, text) from public;
grant execute on function public.append_audit(text, text, uuid, jsonb, text, text) to authenticated;

-- ---------------------------------------------------------------------------
-- RPC: register 2-year retention for lab transport training completion
-- ---------------------------------------------------------------------------
create or replace function public.register_lab_transport_retention(p_source_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;

  insert into public.registros_retencion (
    user_id,
    record_type,
    source_table,
    source_id,
    retention_until,
    legal_basis
  ) values (
    auth.uid(),
    'lab_transport_training',
    'progreso_estudiante',
    p_source_id,
    now() + interval '2 years',
    'Minimum 2-year retention for lab transport training records (operational policy).'
  )
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.register_lab_transport_retention(uuid) from public;
grant execute on function public.register_lab_transport_retention(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- updated_at helper
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_perfiles_updated_at on public.perfiles;
create trigger set_perfiles_updated_at
  before update on public.perfiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_modulos_updated_at on public.modulos;
create trigger set_modulos_updated_at
  before update on public.modulos
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_progreso_estudiante_updated_at on public.progreso_estudiante;
create trigger set_progreso_estudiante_updated_at
  before update on public.progreso_estudiante
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_progreso_doc_updated_at on public.progreso_documentos_ich;
create trigger set_progreso_doc_updated_at
  before update on public.progreso_documentos_ich
  for each row execute procedure public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.perfiles enable row level security;
alter table public.modulos enable row level security;
alter table public.documentos_esenciales enable row level security;
alter table public.progreso_estudiante enable row level security;
alter table public.progreso_documentos_ich enable row level security;
alter table public.firmas_digitales enable row level security;
alter table public.auditoria_acciones enable row level security;
alter table public.registros_retencion enable row level security;

-- Profiles
drop policy if exists "perfiles_select_own" on public.perfiles;
create policy "perfiles_select_own"
  on public.perfiles for select
  using (auth.uid() = id);

drop policy if exists "perfiles_update_own" on public.perfiles;
create policy "perfiles_update_own"
  on public.perfiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "perfiles_insert_own" on public.perfiles;
create policy "perfiles_insert_own"
  on public.perfiles for insert
  with check (auth.uid() = id);

-- Published modules readable by authenticated users
drop policy if exists "modulos_select_auth" on public.modulos;
create policy "modulos_select_auth"
  on public.modulos for select
  to authenticated
  using (is_published = true);

-- Essential documents catalog
drop policy if exists "documentos_select_auth" on public.documentos_esenciales;
create policy "documentos_select_auth"
  on public.documentos_esenciales for select
  to authenticated
  using (is_active = true);

-- Student progress
drop policy if exists "progreso_select_own" on public.progreso_estudiante;
create policy "progreso_select_own"
  on public.progreso_estudiante for select
  using (auth.uid() = user_id);

drop policy if exists "progreso_insert_own" on public.progreso_estudiante;
create policy "progreso_insert_own"
  on public.progreso_estudiante for insert
  with check (auth.uid() = user_id);

drop policy if exists "progreso_update_own" on public.progreso_estudiante;
create policy "progreso_update_own"
  on public.progreso_estudiante for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ICH document progress
drop policy if exists "progreso_doc_select_own" on public.progreso_documentos_ich;
create policy "progreso_doc_select_own"
  on public.progreso_documentos_ich for select
  using (auth.uid() = user_id);

drop policy if exists "progreso_doc_insert_own" on public.progreso_documentos_ich;
create policy "progreso_doc_insert_own"
  on public.progreso_documentos_ich for insert
  with check (auth.uid() = user_id);

drop policy if exists "progreso_doc_update_own" on public.progreso_documentos_ich;
create policy "progreso_doc_update_own"
  on public.progreso_documentos_ich for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Digital signatures
drop policy if exists "firmas_select_own" on public.firmas_digitales;
create policy "firmas_select_own"
  on public.firmas_digitales for select
  using (auth.uid() = user_id);

drop policy if exists "firmas_insert_own" on public.firmas_digitales;
create policy "firmas_insert_own"
  on public.firmas_digitales for insert
  with check (auth.uid() = user_id);

-- Audit: read own rows; inserts should use append_audit (no direct insert policy)
drop policy if exists "auditoria_select_own" on public.auditoria_acciones;
create policy "auditoria_select_own"
  on public.auditoria_acciones for select
  using (auth.uid() = user_id);

-- Retention registry
drop policy if exists "retencion_select_own" on public.registros_retencion;
create policy "retencion_select_own"
  on public.registros_retencion for select
  using (auth.uid() = user_id);

-- Service role (n8n / Edge Functions) bypasses RLS by default when using service key.

comment on table public.auditoria_acciones is 'Append-only audit trail; prefer public.append_audit from the app.';
comment on table public.registros_retencion is 'Legal retention markers; lab transport default 2 years via register_lab_transport_retention.';
comment on table public.modulos is 'CRC course modules; sop_code/sop_revision/content_version tie curriculum to controlled SOPs.';

-- ---------------------------------------------------------------------------
-- n8n / automation ingress (service role writes; no end-user policies)
-- ---------------------------------------------------------------------------
create table if not exists public.eventos_n8n (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  source text not null default 'n8n',
  payload jsonb not null default '{}'::jsonb,
  received_at timestamptz not null default now()
);

create index if not exists eventos_n8n_type_idx on public.eventos_n8n (event_type);
create index if not exists eventos_n8n_received_idx on public.eventos_n8n (received_at);

alter table public.eventos_n8n enable row level security;
-- Intentionally no policies: authenticated users cannot read/write; service role bypasses RLS.
