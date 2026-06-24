-- Vilo Academy: assessment_attempts for learner assessment submission
-- Stores learner responses and rubric-based scoring results.

-- ---------------------------------------------------------------------------
-- 1. assessment_attempts table
-- ---------------------------------------------------------------------------
create table if not exists public.assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_id text not null,
  responses jsonb not null default '{}'::jsonb,
  self_evaluation jsonb not null default '{}'::jsonb,
  rubric_breakdown jsonb not null default '{}'::jsonb,
  score numeric not null default 0,
  max_score numeric not null default 0,
  percentage numeric not null default 0,
  passed boolean not null default false,
  fail_flags jsonb not null default '[]'::jsonb,
  certification_tier text,
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists assessment_attempts_user_idx on public.assessment_attempts (user_id);
create index if not exists assessment_attempts_module_idx on public.assessment_attempts (module_id);
create index if not exists assessment_attempts_submitted_idx on public.assessment_attempts (submitted_at);

-- ---------------------------------------------------------------------------
-- 2. Row Level Security
-- ---------------------------------------------------------------------------
alter table public.assessment_attempts enable row level security;

drop policy if exists "assessment_attempts_select_own" on public.assessment_attempts;
create policy "assessment_attempts_select_own"
  on public.assessment_attempts for select
  using (auth.uid() = user_id);

drop policy if exists "assessment_attempts_insert_own" on public.assessment_attempts;
create policy "assessment_attempts_insert_own"
  on public.assessment_attempts for insert
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- 3. Comments
-- ---------------------------------------------------------------------------
comment on table public.assessment_attempts is 'Learner assessment submissions with self-evaluation and rubric scoring results.';
comment on column public.assessment_attempts.responses is 'Free-text responses to exercise deliverables, keyed by deliverableId.';
comment on column public.assessment_attempts.self_evaluation is 'Self-assigned points per rubric criterion, e.g. {"M1.C1_STOP_RULE":{"points":12,"failed":false}}';
comment on column public.assessment_attempts.rubric_breakdown is 'Full RubricEvaluationBreakdown from the curriculum scoring engine.';
comment on column public.assessment_attempts.fail_flags is 'Array of criterion IDs that triggered fail conditions.';
