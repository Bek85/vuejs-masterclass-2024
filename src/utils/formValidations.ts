export const validateEmail = (email: string) => {
  const trimmedEmail = email.trim();
  if (!trimmedEmail) return [];

  const errors = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmailFormat = emailRegex.test(trimmedEmail);
  if (!isValidEmailFormat) errors.push('Invalid email');

  return errors;
};

export const validatePassword = (password: string) => {
  if (!password) return [];

  const errors = [];

  if (password.length <= 5) errors.push('Password must be at least 6 characters long');

  // if (!password.includes('@')) errors.push('Password must contain an @ symbol');

  return errors;
};
