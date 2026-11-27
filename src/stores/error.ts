import type { AppError } from '@/types/Error';
import { toAppError, type ReportableError } from '@/utils/appError';

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | AppError>(null);
  const isCustomError = computed(() => activeError.value?.isCustom ?? false);

  const setError = ({ error, customCode }: { error: ReportableError; customCode?: number }) => {
    activeError.value = toAppError(error, customCode);
  };

  const clearError = () => {
    activeError.value = null;
  };

  return { activeError, setError, isCustomError, clearError };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot));
}
