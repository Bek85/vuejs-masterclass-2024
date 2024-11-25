export const useErrorStore = defineStore('error-store', () => {
  const error = ref(false);

  const setError = () => {
    error.value = true;
  };

  return { error, setError };
});
