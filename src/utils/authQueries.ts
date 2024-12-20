import { supabase } from '@/lib/supabaseClient';
import type { LoginForm, RegisterForm } from '@/types/AuthForm';

export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return console.error(error);
  }

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: `${formData.firstName} ${formData.lastName}`,
    });

    if (error) {
      console.error(error);
    }
  }

  return true;
};

export const login = async (formData: LoginForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return { error };
  }
};

export const profileQuery = async ({ column, value }: { column: string; value: string }) => {
  return await supabase.from('profiles').select('*').eq(column, value).single();
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) return console.log(error);

  return true;
};
