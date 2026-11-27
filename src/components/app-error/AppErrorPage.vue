<script setup lang="ts">
const router = useRouter();

const errorStore = useErrorStore();

const ErrorTemplate = import.meta.env.DEV
  ? defineAsyncComponent(() => import('./AppErrorDev.vue'))
  : defineAsyncComponent(() => import('./AppErrorProd.vue'));

router.afterEach(() => {
  errorStore.clearError();
  usePageStore().pageTitle = '';
});
</script>
<template>
  <section class="error">
    <ErrorTemplate v-if="errorStore.activeError" :error="errorStore.activeError" />
  </section>
</template>
<style scoped>
.error {
  @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}

:deep(.error__icon) {
  @apply text-7xl text-destructive;
}

:deep(.error__code) {
  @apply font-extrabold text-7xl text-secondary;
}

:deep(.error__msg) {
  @apply text-3xl font-extrabold text-primary;
}

:deep(.error-footer) {
  @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}

:deep(.error-footer__text) {
  @apply text-lg text-muted-foreground;
}

:deep(p) {
  @apply my-2;
}
</style>
