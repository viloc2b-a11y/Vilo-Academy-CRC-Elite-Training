-- Vilo Academy: orders and enrollment for monetization MVP

-- ---------------------------------------------------------------------------
-- 1. pricing_plans (seed data, mapped from curriculum levels)
-- ---------------------------------------------------------------------------
create table if not exists public.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  plan_id text not null unique,
  name_i18n jsonb not null default '{}'::jsonb,
  description_i18n jsonb not null default '{}'::jsonb,
  price_cents integer not null,
  currency text not null default 'usd',
  certification_level text,
  features jsonb not null default '[]'::jsonb,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 2. orders (learner enrollments)
-- ---------------------------------------------------------------------------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  plan_id text not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'active', 'expired', 'cancelled')),
  amount_cents integer not null default 0,
  currency text not null default 'usd',
  payment_method text,
  payment_ref text,
  pilot_cohort boolean not null default false,
  enrolled_at timestamptz default now(),
  activated_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_user_idx on public.orders (user_id);
create index if not exists orders_status_idx on public.orders (status);

-- ---------------------------------------------------------------------------
-- 3. updated_at trigger
-- ---------------------------------------------------------------------------
create or replace function public.orders_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_orders_updated_at on public.orders;
create trigger set_orders_updated_at
  before update on public.orders
  for each row execute procedure public.orders_set_updated_at();

-- ---------------------------------------------------------------------------
-- 4. Row Level Security
-- ---------------------------------------------------------------------------
alter table public.pricing_plans enable row level security;
alter table public.orders enable row level security;

-- Pricing plans: public read, admin write
drop policy if exists "pricing_plans_select_public" on public.pricing_plans;
create policy "pricing_plans_select_public"
  on public.pricing_plans for select
  using (is_active = true);

-- Orders: own rows only
drop policy if exists "orders_select_own" on public.orders;
create policy "orders_select_own"
  on public.orders for select
  using (auth.uid() = user_id);

drop policy if exists "orders_insert_own" on public.orders;
create policy "orders_insert_own"
  on public.orders for insert
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 5. Seed pricing plans
-- ---------------------------------------------------------------------------
insert into public.pricing_plans (plan_id, name_i18n, description_i18n, price_cents, currency, certification_level, features, sort_order)
values
  (
    'crc_foundations',
    '{"en":"CRC Foundations","es":"Fundamentos CRC"}',
    '{"en":"Core CRC training for new coordinators. Includes modules M1-M8, assessments, and completion certificate.','"es":"Formación CRC esencial para coordinadores nuevos. Incluye módulos M1-M8, evaluaciones y certificado de finalización."}',
    29900, 'usd', 'operational_readiness',
    '["8 core modules (M1-M8)","Bilingual (EN/ES)","Self-paced learning","Module assessments","Completion certificate","Verification ID"]'::jsonb,
    1
  ),
  (
    'crc_professional',
    '{"en":"CRC Professional","es":"CRC Profesional"}',
    '{"en":"Full CRC Elite training. All 15 modules, capstone OSCE, assessments, and Elite CRC certification.','"es":"Formación CRC Elite completa. Los 15 módulos, capstone OSCE, evaluaciones y certificación Elite CRC."}',
    59900, 'usd', 'elite_crc',
    '["All 15 modules (M1-M15)","Capstone OSCE (6 stations)","Bilingual (EN/ES)","Self-paced learning","Module assessments","Elite CRC certificate","Verification ID","Employer verification"]'::jsonb,
    2
  ),
  (
    'crc_elite_plus',
    '{"en":"CRC Elite Plus","es":"CRC Elite Plus"}',
    '{"en":"Full CRC Elite + lead endorsement. All modules, capstone, crisis command (M17), and Lead CRC endorsement.','"es":"CRC Elite completo + endoso lead. Todos los módulos, capstone, comando de crisis (M17) y endoso Lead CRC."}',
    99900, 'usd', 'lead_crc_endorsement',
    '["All 17 modules (M1-M17)","Capstone OSCE + crisis command","Bilingual (EN/ES)","Self-paced learning","All assessments","Elite CRC certificate","Lead CRC endorsement","Verification ID","Employer verification","Priority support"]'::jsonb,
    3
  )
on conflict (plan_id) do nothing;

-- ---------------------------------------------------------------------------
-- 6. Comments
-- ---------------------------------------------------------------------------
comment on table public.orders is 'Learner enrollments and payment records. Supports pilot cohort (no payment) and paid plans.';
comment on table public.pricing_plans is 'Available pricing tiers mapped to certification levels.';
