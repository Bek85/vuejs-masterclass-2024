export const usePageStore = defineStore('page-store', () => {
  const pageTitle = ref('Page Title');

  return {
    pageTitle,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}
