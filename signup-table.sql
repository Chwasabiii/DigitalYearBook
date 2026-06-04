-- DigitalYearBook signup/profile table
--
-- Use this file in Supabase SQL Editor.
-- This table stores extra user information from your signup form.
--
-- Important:
-- Supabase Auth stores the real login account.
-- This trigger copies signup metadata into public.signup_profiles so the
-- profile row is created even when email confirmation delays the client session.

create extension if not exists pgcrypto;

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop function if exists handle_new_user();

create table if not exists public.signup_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  username text,
  email text,
  course text default 'Undeclared',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

drop index if exists public.signup_profiles_user_id_unique_idx;

create unique index signup_profiles_user_id_unique_idx
  on public.signup_profiles(user_id);

create index if not exists signup_profiles_email_idx
  on public.signup_profiles(email);

create or replace function public.handle_new_user()
returns trigger
security definer
set search_path = public
as $$
begin
  insert into public.signup_profiles (
    user_id,
    full_name,
    username,
    email,
    course
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email, 'New User'),
    nullif(new.raw_user_meta_data->>'username', ''),
    new.email,
    coalesce(nullif(new.raw_user_meta_data->>'course', ''), 'Undeclared')
  )
  on conflict (user_id) do update
    set full_name = excluded.full_name,
        username = excluded.username,
        email = excluded.email,
        course = excluded.course,
        updated_at = now();

  return new;
end;
$$ language plpgsql;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();

create or replace function public.signup_profiles_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists signup_profiles_updated_at on public.signup_profiles;

create trigger signup_profiles_updated_at
  before update on public.signup_profiles
  for each row
  execute procedure public.signup_profiles_set_updated_at();

alter table public.signup_profiles enable row level security;

drop policy if exists "Users can read own signup profile" on public.signup_profiles;
create policy "Users can read own signup profile"
  on public.signup_profiles
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own signup profile" on public.signup_profiles;
create policy "Users can insert own signup profile"
  on public.signup_profiles
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own signup profile" on public.signup_profiles;
create policy "Users can update own signup profile"
  on public.signup_profiles
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
