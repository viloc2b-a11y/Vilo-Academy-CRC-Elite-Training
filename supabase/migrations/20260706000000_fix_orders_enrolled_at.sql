-- Vilo Academy: fix enrolled_at semantics on orders
-- enrolled_at should reflect actual enrollment date (when status transitions to active/confirmed),
-- not order creation time.

-- 1. Remove the default so new rows don't auto-set enrolled_at
alter table public.orders
  alter column enrolled_at drop default;

-- 2. Update existing rows: set enrolled_at to NULL for non-enrolled statuses
update public.orders
  set enrolled_at = null
  where status not in ('confirmed', 'active');

-- 3. Trigger: set enrolled_at when status transitions to confirmed or active
create or replace function public.orders_set_enrolled_at()
returns trigger
language plpgsql
as $$
begin
  -- Only set enrolled_at on transition to confirmed/active, and only if not already set
  if new.status in ('confirmed', 'active') and old.status not in ('confirmed', 'active') then
    new.enrolled_at = coalesce(new.enrolled_at, now());
  end if;
  return new;
end;
$$;

drop trigger if exists trg_orders_enrolled_at on public.orders;
create trigger trg_orders_enrolled_at
  before update on public.orders
  for each row execute procedure public.orders_set_enrolled_at();
