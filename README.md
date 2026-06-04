# DigitalYearBook
A school Project

## Supabase Table

This project uses Supabase auth and an optional `profiles` table for yearbook data.

> Important: Supabase Auth is separate from the `profiles` table.
> Signing up and logging in uses Supabase Auth directly, so you do not need
> to create `profiles` just to authenticate users.

### Create the table in Supabase

1. Open your Supabase project dashboard.
2. Go to `SQL Editor`.
3. Create a new query and paste the full SQL from `supabase-table.sql`.
4. Run the query.

That will create a `profiles` table with:
- `id` - UUID primary key
- `user_id` - links to Supabase auth user
- `name`, `course`, `batch`, `badge`, `quote`, `socials`, `message`
- `hobbies`, `achievements`, `memories` stored as text arrays
- `avatar_url` for profile photo
- `highlighted` for featured profiles
- `created_at` / `updated_at` timestamps

### Signup profile storage

If you want the signup page to save the new user's name and username into Supabase, you should create the `profiles` table first.
The app can sign up users with Supabase Auth without `profiles`, but the optional table is required if you want to store the signup metadata for later yearbook use.

### Important note

The frontend app cannot create Supabase tables at runtime. You must create the table from the dashboard or the Supabase CLI using an admin/service role key.

