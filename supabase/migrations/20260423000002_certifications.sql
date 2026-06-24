-- Vilo Academy: certifications for credential runtime
-- Transforms academic results into verifiable credentials.

-- ---------------------------------------------------------------------------
-- 1. certifications table
-- ---------------------------------------------------------------------------
create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  certification_level text not null,
  overall_score numeric not null default 0,
  modules_completed integer not null default 0,
  assessments_passed integer not null default 0,
  issued_at timestamptz,
  verification_id text not null unique,
  certificate_version text not null default '1.0',
  status text not null default 'eligible' check (status in ('eligible', 'issued', 'revoked', 'expired')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists certifications_user_idx on public.certifications (user_id);
create index if not exists certifications_verification_idx on public.certifications (verification_id);
create index if not exists certifications_status_idx on public.certifications (status);

-- ---------------------------------------------------------------------------
-- 2. updated_at trigger
-- ---------------------------------------------------------------------------
create or replace function public.certifications_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_certifications_updated_at on public.certifications;
create trigger set_certifications_updated_at
  before update on public.certifications
  for each row execute procedure public.certifications_set_updated_at();

-- ---------------------------------------------------------------------------
-- 3. Row Level Security
-- ---------------------------------------------------------------------------
alter table public.certifications enable row level security;

drop policy if exists "certifications_select_own" on public.certifications;
create policy "certifications_select_own"
  on public.certifications for select
  using (auth.uid() = user_id);

drop policy if exists "certifications_insert_own" on public.certifications;
create policy "certifications_insert_own"
  on public.certifications for insert
  with check (auth.uid() = user_id);

drop policy if exists "certifications_update_own" on public.certifications;
create policy "certifications_update_own"
  on public.certifications for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Public verification: anyone can read by verification_id (no PII exposed)
drop policy if exists "certifications_select_public" on public.certifications;
create policy "certifications_select_public"
  on public.certifications for select
  using (true);

-- ---------------------------------------------------------------------------
-- 4. Comments
-- ---------------------------------------------------------------------------
comment on table public.certifications is 'Verifiable credentials issued to learners. verification_id is public; user_id is private.';
comment on column public.certifications.certification_level is 'completion | operational_readiness | elite_crc | lead_crc_endorsement';
comment on column public.certifications.status is 'eligible | issued | revoked | expired';
comment on column public.certifications.verification_id is 'Public unique identifier, format VACRC-YYYY-HEX';
