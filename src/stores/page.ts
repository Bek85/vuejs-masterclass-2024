export const usePageStore = defineStore('page-store', () => {
  const pageTitle = ref('');

  return {
    pageTitle,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}
