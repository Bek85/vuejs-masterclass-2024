-- OAuth providers such as Google don't send a username, so the profile trigger
-- must derive one. Email/password sign-ups keep their current behaviour: the
-- username they chose is used as-is, and a taken username still fails sign-up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  chosen_username text := nullif(meta ->> 'username', '');
  base_username text;
  candidate text;
begin
  if chosen_username is not null then
    candidate := chosen_username;
  else
    -- e.g. "Jane.Doe+work@gmail.com" -> "janedoework", then "janedoework_3f2a" if taken
    base_username := regexp_replace(lower(split_part(coalesce(new.email, ''), '@', 1)), '[^a-z0-9_]', '', 'g');
    if base_username = '' then
      base_username := 'user';
    end if;

    candidate := base_username;
    while exists (select 1 from public.profiles where username = candidate) loop
      candidate := base_username || '_' || substr(md5(random()::text), 1, 4);
    end loop;
  end if;

  insert into public.profiles (id, username, full_name, avatar_url)
  values (
    new.id,
    candidate,
    -- Google sends both full_name and name; fall back to the username
    coalesce(nullif(meta ->> 'full_name', ''), nullif(meta ->> 'name', ''), candidate),
    coalesce(meta ->> 'avatar_url', meta ->> 'picture')
  );

  return new;
end;
$$;
