-- Vilo Academy: module_progress for learner progress tracking
-- Simpler, direct table that references curriculum module IDs (M1-M17) as text.
-- Does NOT depend on public.modulos; curriculum source of truth is @/curriculum-engine.

-- ---------------------------------------------------------------------------
-- 1. module_progress table
-- ---------------------------------------------------------------------------
create table if not exists public.module_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_id text not null,
  status text not null default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  started_at timestamptz,
  completed_at timestamptz,
  last_viewed_at timestamptz default now(),
  progress_percent integer not null default 0 check (progress_percent >= 0 and progress_percent <= 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, module_id)
);

create index if not exists module_progress_user_idx on public.module_progress (user_id);
create index if not exists module_progress_module_idx on public.module_progress (module_id);
create index if not exists module_progress_status_idx on public.module_progress (status);

-- ---------------------------------------------------------------------------
-- 2. updated_at trigger
-- ---------------------------------------------------------------------------
create or replace function public.module_progress_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_module_progress_updated_at on public.module_progress;
create trigger set_module_progress_updated_at
  before update on public.module_progress
  for each row execute procedure public.module_progress_set_updated_at();

-- ---------------------------------------------------------------------------
-- 3. Row Level Security
-- ---------------------------------------------------------------------------
alter table public.module_progress enable row level security;

drop policy if exists "module_progress_select_own" on public.module_progress;
create policy "module_progress_select_own"
  on public.module_progress for select
  using (auth.uid() = user_id);

drop policy if exists "module_progress_insert_own" on public.module_progress;
create policy "module_progress_insert_own"
  on public.module_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "module_progress_update_own" on public.module_progress;
create policy "module_progress_update_own"
  on public.module_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 4. Comments
-- ---------------------------------------------------------------------------
comment on table public.module_progress is 'Per-learner progress for each curriculum module (M1-M17). module_id references the curriculum-engine source of truth, not the public.modulos table.';
comment on column public.module_progress.status is 'not_started | in_progress | completed';
comment on column public.module_progress.progress_percent is '0-100; set to 100 when completed.';
