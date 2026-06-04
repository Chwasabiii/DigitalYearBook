-- Simple Supabase table schema for DigitalYearBook
--
-- Login/sign-up accounts are stored by Supabase Auth in auth.users.
-- This table only stores extra profile details for your yearbook app.
--
-- Use this version if sign-up shows:
-- "Database error saving new user"
--
-- Important:
-- This version does NOT create an auth.users trigger, so it will not block sign-up.

create extension if not exists pgcrypto;

-- EMERGENCY FIX:
-- Remove the old trigger/function that can cause:
-- "Database error saving new user"
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop function if exists handle_new_user();

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  username text,
  course text default 'Undeclared',
  batch text,
  initials text,
  badge text,
  badge_class text,
  profile_badge_class text,
  code text,
  avatar_url text,
  quote text,
  hobbies text[],
  achievements text[],
  memories text[],
  socials text,
  message text,
  highlighted boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table public.profiles add column if not exists username text;

-- Remove older constraints/indexes that may block sign-up profile saving.
alter table public.profiles drop constraint if exists profiles_username_key;
drop index if exists public.profiles_username_unique_idx;

create unique index if not exists profiles_user_id_unique_idx
  on public.profiles(user_id)
  where user_id is not null;

create index if not exists profiles_course_idx on public.profiles(course);
create index if not exists profiles_batch_idx on public.profiles(batch);

-- Keep updated_at fresh when a profile is edited.
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_updated_at on public.profiles;

create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute procedure public.update_updated_at_column();

-- Row level security.
alter table public.profiles enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
