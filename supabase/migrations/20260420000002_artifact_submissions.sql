-- Vilo Academy: structured artifact evidence submissions for VILO OS workspace

create table if not exists public.artifact_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.perfiles (id) on delete cascade,
  study_id text not null,
  artifact_id text not null,
  template_id text not null,
  status text not null default 'draft' check (status in ('draft', 'submitted', 'reviewed', 'needs_revision')),
  field_values jsonb not null default '{}'::jsonb,
  checklist_state jsonb not null default '{}'::jsonb,
  reviewer_notes text,
  submitted_at timestamptz,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, template_id)
);

create index if not exists artifact_submissions_user_idx
  on public.artifact_submissions (user_id);

create index if not exists artifact_submissions_template_idx
  on public.artifact_submissions (template_id);

create index if not exists artifact_submissions_status_idx
  on public.artifact_submissions (status);

create or replace function public.set_artifact_submissions_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  if new.status = 'submitted' and old.status is distinct from 'submitted' and new.submitted_at is null then
    new.submitted_at = now();
  end if;
  return new;
end;
$$;

drop trigger if exists set_artifact_submissions_updated_at on public.artifact_submissions;
create trigger set_artifact_submissions_updated_at
  before update on public.artifact_submissions
  for each row execute procedure public.set_artifact_submissions_updated_at();

alter table public.artifact_submissions enable row level security;

drop policy if exists "artifact_submissions_select_own" on public.artifact_submissions;
create policy "artifact_submissions_select_own"
  on public.artifact_submissions for select
  using (auth.uid() = user_id);

drop policy if exists "artifact_submissions_insert_own" on public.artifact_submissions;
create policy "artifact_submissions_insert_own"
  on public.artifact_submissions for insert
  with check (auth.uid() = user_id);

drop policy if exists "artifact_submissions_update_own" on public.artifact_submissions;
create policy "artifact_submissions_update_own"
  on public.artifact_submissions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

comment on table public.artifact_submissions is 'Learner evidence produced in the VILO OS Artifact Workspace; supports certification review.';
