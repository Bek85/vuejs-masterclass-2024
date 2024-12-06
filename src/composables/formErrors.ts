import type { LoginForm } from '@/types/AuthForm';
import type { AuthError } from '@supabase/supabase-js';

export const useFormErrors = () => {
  const serverError = ref('');
  const realtimeErrors = ref();

  const handleServerError = (error: AuthError) => {
    serverError.value =
      error?.message === 'Invalid login credentials' ? 'Invalid email or password' : error.message;
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
