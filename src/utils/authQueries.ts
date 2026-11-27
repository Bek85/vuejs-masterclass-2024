import { supabase } from '@/lib/supabaseClient';
import type { LoginForm, RegisterForm } from '@/types/AuthForm';

// Every auth action returns the same shape: `{ error }`, where error is null on success.

export const register = async (formData: RegisterForm) => {
  // The profile row is created by the `on_auth_user_created` database trigger,
  // in the same transaction as the user, from this metadata.
  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        username: formData.username,
        full_name: `${formData.firstName} ${formData.lastName}`,
      },
    },
  });

  return { error };
};

export const login = async (formData: LoginForm) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  return { error };
};

// Sends the browser to Google; Supabase brings it back to the app signed in.
// The profile row is created by the same database trigger as email sign-ups.
export const loginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });

  return { error };
};

export const profileQuery = async ({ column, value }: { column: string; value: string }) => {
  return await supabase.from('profiles').select('*').eq(column, value).single();
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  return { error };
};
