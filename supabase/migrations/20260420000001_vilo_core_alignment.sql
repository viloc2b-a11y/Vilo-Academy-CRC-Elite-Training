-- Vilo Academy: align perfiles/modulos with core spec + progreso_entrenamiento + audit + firmas + seeds
-- Runs after 20260420000000_initial_crc_academy.sql

-- ---------------------------------------------------------------------------
-- 1. perfiles: nombre_completo, rol, fecha_contratacion
-- ---------------------------------------------------------------------------
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'perfiles' and column_name = 'full_name'
  ) and not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'perfiles' and column_name = 'nombre_completo'
  ) then
    alter table public.perfiles rename column full_name to nombre_completo;
  end if;
end $$;

alter table public.perfiles add column if not exists fecha_contratacion date;

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'perfiles' and column_name = 'role'
  ) and not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'perfiles' and column_name = 'rol'
  ) then
    alter table public.perfiles rename column role to rol;
  end if;
end $$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.perfiles (id, email, nombre_completo)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'nombre_completo', '')
  )
  on conflict (id) do update
    set email = excluded.email,
        updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- 2. modulos: titulo, version_sop, es_critico, orden, transport flag
-- ---------------------------------------------------------------------------
alter table public.modulos add column if not exists titulo text;
alter table public.modulos add column if not exists version_sop text;
alter table public.modulos add column if not exists es_critico boolean not null default false;
alter table public.modulos add column if not exists orden smallint;
alter table public.modulos add column if not exists es_modulo_transporte boolean not null default false;

update public.modulos set orden = order_index where orden is null;
update public.modulos set version_sop = coalesce(sop_revision, content_version) where version_sop is null;
update public.modulos set titulo = coalesce(title_i18n->>'en', title_i18n->>'es', slug) where titulo is null or titulo = '';

alter table public.modulos drop constraint if exists modulos_order_index_check;
alter table public.modulos add constraint modulos_order_index_check
  check (order_index >= 1 and order_index <= 20);

insert into public.modulos (
  slug, order_index, orden, titulo, version_sop, es_critico, es_modulo_transporte,
  title_i18n, summary_i18n, content_version, is_published
)
select v.*
from (
  values
    ('mod-foundations', 1, 1, 'Foundations & CRC role', 'SOP-CRC-1.0', false, false,
      '{"en":"Foundations & CRC role","es":"Fundamentos y rol del CRC"}'::jsonb,
      '{"en":"How sites run and adding value.","es":"Cómo operan los sitios y aportar valor."}'::jsonb, '1.0.0', true),
    ('mod-gcp-ich', 2, 2, 'GCP & ICH E6(R3)', 'SOP-CRC-2.0', true, false,
      '{"en":"GCP & ICH E6(R3)","es":"GCP y ICH E6(R3)"}'::jsonb,
      '{"en":"Documentation and quality standards.","es":"Documentación y estándares de calidad."}'::jsonb, '1.0.0', true),
    ('mod-startup', 3, 3, 'Start-up & operations', 'SOP-CRC-3.0', false, false,
      '{"en":"Start-up & operations","es":"Arranque y operaciones"}'::jsonb,
      '{"en":"Systems, supplies, and coordination.","es":"Sistemas, suministros y coordinación."}'::jsonb, '1.0.0', true),
    ('mod-consent-safety', 4, 4, 'Consent & safety', 'SOP-CRC-4.0', true, false,
      '{"en":"Consent & safety","es":"Consentimiento y seguridad"}'::jsonb,
      '{"en":"Participant pathways and reporting.","es":"Rutas del participante y reportes."}'::jsonb, '1.0.0', true),
    ('mod-biospecimens-iata', 5, 5, 'Biospecimens & IATA', 'SOP-CRC-5.0', true, true,
      '{"en":"Biospecimens & IATA","es":"Muestras biológicas e IATA"}'::jsonb,
      '{"en":"Chain of custody and shipping basics.","es":"Cadena de custodia y envíos."}'::jsonb, '1.0.0', true),
    ('mod-monitoring', 6, 6, 'Monitoring readiness', 'SOP-CRC-6.0', false, false,
      '{"en":"Monitoring readiness","es":"Preparación para monitorización"}'::jsonb,
      '{"en":"Queries, professionalism, sponsor touchpoints.","es":"Consultas, profesionalismo, interacción con patrocinadores."}'::jsonb, '1.0.0', true)
) as v(slug, order_index, orden, titulo, version_sop, es_critico, es_modulo_transporte, title_i18n, summary_i18n, content_version, is_published)
where not exists (select 1 from public.modulos m where m.slug = v.slug);

-- ---------------------------------------------------------------------------
-- 3. progreso_entrenamiento
-- ---------------------------------------------------------------------------
create table if not exists public.progreso_entrenamiento (
  id uuid primary key default gen_random_uuid(),
  estudiante_id uuid not null references public.perfiles (id) on delete cascade,
  modulo_id uuid not null references public.modulos (id) on delete cascade,
  completado boolean not null default false,
  fecha_completado timestamptz,
  score numeric(6,2),
  certificado_url text,
  creado_en timestamptz not null default now(),
  actualizado_en timestamptz not null default now(),
  creado_por uuid references public.perfiles (id) on delete set null,
  actualizado_por uuid references public.perfiles (id) on delete set null,
  unique (estudiante_id, modulo_id)
);

create index if not exists progreso_entrenamiento_estudiante_idx on public.progreso_entrenamiento (estudiante_id);
create index if not exists progreso_entrenamiento_modulo_idx on public.progreso_entrenamiento (modulo_id);

create or replace function public.set_progreso_entrenamiento_timestamps()
returns trigger
language plpgsql
as $$
begin
  new.actualizado_en = now();
  return new;
end;
$$;

drop trigger if exists set_progreso_entrenamiento_updated_at on public.progreso_entrenamiento;
create trigger set_progreso_entrenamiento_updated_at
  before update on public.progreso_entrenamiento
  for each row execute procedure public.set_progreso_entrenamiento_timestamps();

-- ---------------------------------------------------------------------------
-- 4. Audit trail for progreso_entrenamiento
-- ---------------------------------------------------------------------------
create table if not exists public.progreso_entrenamiento_auditoria (
  id uuid primary key default gen_random_uuid(),
  progreso_id uuid references public.progreso_entrenamiento (id) on delete set null,
  operacion text not null check (operacion in ('INSERT', 'UPDATE', 'DELETE')),
  anterior jsonb,
  nuevo jsonb,
  ocurrido_en timestamptz not null default now(),
  origen_db text not null default current_user
);

create index if not exists pea_progreso_idx on public.progreso_entrenamiento_auditoria (progreso_id);
create index if not exists pea_ocurrido_idx on public.progreso_entrenamiento_auditoria (ocurrido_en);

create or replace function public.audit_progreso_entrenamiento_fn()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'DELETE' then
    insert into public.progreso_entrenamiento_auditoria (progreso_id, operacion, anterior, nuevo)
    values (old.id, 'DELETE', to_jsonb(old), null);
    return old;
  elsif tg_op = 'UPDATE' then
    insert into public.progreso_entrenamiento_auditoria (progreso_id, operacion, anterior, nuevo)
    values (new.id, 'UPDATE', to_jsonb(old), to_jsonb(new));
    return new;
  else
    insert into public.progreso_entrenamiento_auditoria (progreso_id, operacion, anterior, nuevo)
    values (new.id, 'INSERT', null, to_jsonb(new));
    return new;
  end if;
end;
$$;

drop trigger if exists trg_audit_progreso_entrenamiento on public.progreso_entrenamiento;
create trigger trg_audit_progreso_entrenamiento
  after insert or update or delete on public.progreso_entrenamiento
  for each row execute procedure public.audit_progreso_entrenamiento_fn();

-- ---------------------------------------------------------------------------
-- 5. firmas_digitales extensions
-- ---------------------------------------------------------------------------
alter table public.firmas_digitales add column if not exists progreso_id uuid references public.progreso_entrenamiento (id) on delete set null;
alter table public.firmas_digitales add column if not exists hash_validacion text;

update public.firmas_digitales set hash_validacion = confirmation_phrase_hash where hash_validacion is null and confirmation_phrase_hash is not null;

alter table public.firmas_digitales add column if not exists ip_address text;
update public.firmas_digitales set ip_address = host(ip) where ip is not null and ip_address is null;

-- ---------------------------------------------------------------------------
-- 6. Retention: 2 years when transport module training completed (idempotent)
-- ---------------------------------------------------------------------------
create or replace function public.retention_from_progreso_transporte()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_transport boolean;
begin
  if tg_op = 'DELETE' then
    return old;
  end if;
  if new.completado is not true then
    return new;
  end if;
  select coalesce(m.es_modulo_transporte, false) into v_transport
  from public.modulos m where m.id = new.modulo_id;
  if not v_transport then
    return new;
  end if;
  if exists (
    select 1 from public.registros_retencion r
    where r.source_table = 'progreso_entrenamiento' and r.source_id = new.id
  ) then
    return new;
  end if;
  insert into public.registros_retencion (
    user_id, record_type, source_table, source_id, retention_until, legal_basis
  ) values (
    new.estudiante_id,
    'lab_transport_training',
    'progreso_entrenamiento',
    new.id,
    now() + interval '2 years',
    'Minimum 2-year retention for laboratory transport / IATA-related training (policy).'
  );
  return new;
end;
$$;

drop trigger if exists trg_retencion_progreso_transporte on public.progreso_entrenamiento;
create trigger trg_retencion_progreso_transporte
  after insert or update of completado, modulo_id on public.progreso_entrenamiento
  for each row execute procedure public.retention_from_progreso_transporte();

-- ---------------------------------------------------------------------------
-- 7. documentos_esenciales: seed 52 placeholders
-- ---------------------------------------------------------------------------
insert into public.documentos_esenciales (code, section_ref, title_i18n, category, sort_order)
select
  'ICH-' || lpad(s.n::text, 2, '0'),
  'E6(R3) essential doc #' || s.n::text,
  jsonb_build_object(
    'en', 'ICH-GCP essential document ' || s.n::text,
    'es', 'Documento esencial ICH-GCP ' || s.n::text
  ),
  'ICH-GCP',
  s.n
from generate_series(1, 52) as s(n)
on conflict (code) do nothing;

-- ---------------------------------------------------------------------------
-- 8. RLS
-- ---------------------------------------------------------------------------
alter table public.progreso_entrenamiento enable row level security;
alter table public.progreso_entrenamiento_auditoria enable row level security;

drop policy if exists "pe_select_own" on public.progreso_entrenamiento;
create policy "pe_select_own"
  on public.progreso_entrenamiento for select
  using (auth.uid() = estudiante_id);

drop policy if exists "pe_insert_own" on public.progreso_entrenamiento;
create policy "pe_insert_own"
  on public.progreso_entrenamiento for insert
  with check (auth.uid() = estudiante_id);

drop policy if exists "pe_update_own" on public.progreso_entrenamiento;
create policy "pe_update_own"
  on public.progreso_entrenamiento for update
  using (auth.uid() = estudiante_id)
  with check (auth.uid() = estudiante_id);

drop policy if exists "pe_delete_own" on public.progreso_entrenamiento;
create policy "pe_delete_own"
  on public.progreso_entrenamiento for delete
  using (auth.uid() = estudiante_id);

drop policy if exists "pea_select_own" on public.progreso_entrenamiento_auditoria;
create policy "pea_select_own"
  on public.progreso_entrenamiento_auditoria for select
  using (
    exists (
      select 1 from public.progreso_entrenamiento p
      where p.id = progreso_entrenamiento_auditoria.progreso_id
        and p.estudiante_id = auth.uid()
    )
  );

drop policy if exists "firmas_select_own" on public.firmas_digitales;
create policy "firmas_select_own"
  on public.firmas_digitales for select
  using (
    auth.uid() = user_id
    or (
      progreso_id is not null
      and exists (
        select 1 from public.progreso_entrenamiento p
        where p.id = firmas_digitales.progreso_id
          and p.estudiante_id = auth.uid()
      )
    )
  );

drop policy if exists "firmas_insert_own" on public.firmas_digitales;
create policy "firmas_insert_own"
  on public.firmas_digitales for insert
  with check (
    auth.uid() = user_id
    and (
      progreso_id is null
      or exists (
        select 1 from public.progreso_entrenamiento p
        where p.id = firmas_digitales.progreso_id
          and p.estudiante_id = auth.uid()
      )
    )
  );

comment on table public.progreso_entrenamiento is 'Core per-module training progress; audited via progreso_entrenamiento_auditoria.';
comment on table public.progreso_entrenamiento_auditoria is 'Immutable-style audit log for progreso_entrenamiento (DB-level trigger).';
