import type { LoginForm } from '@/types/AuthForm';
import type { AuthError } from '@supabase/supabase-js';

type FormErrors<T> = {
  [K in keyof T]: string[];
};

export const useFormErrors = () => {
  const serverError = ref('');
  const realtimeErrors = ref<FormErrors<LoginForm>>();

  const friendlyMessages: Record<string, string> = {
    'Invalid login credentials': 'Invalid email or password',
    // Raised when the profile trigger fails, which in practice means the username is taken.
    'Database error saving new user': 'That username is already taken',
  };

  const handleServerError = (error: AuthError) => {
    serverError.value = friendlyMessages[error.message] ?? error.message;
  };

  const handleLoginForm = async (formdata: LoginForm) => {
    realtimeErrors.value = {
      email: [],
      password: [],
    };

    const { validateEmail, validatePassword } = await import('@/utils/formValidations');

    const emailErrors = validateEmail(formdata.email);
    if (emailErrors.length > 0) realtimeErrors.value.email = emailErrors;

    const passwordErrors = validatePassword(formdata.password);
    if (passwordErrors.length > 0) realtimeErrors.value.password = passwordErrors;
  };

  return { serverError, handleServerError, realtimeErrors, handleLoginForm };
};
