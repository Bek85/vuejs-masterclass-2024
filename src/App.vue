<script setup lang="ts">
const errorStore = useErrorStore();
const authStore = useAuthStore();
const route = useRoute();

onErrorCaptured((error) => {
  errorStore.setError({ error });
});

onMounted(() => {
  authStore.trackAuthChanges();
});

// Check if current route is an auth page (login/register)
const isAuthPage = computed(() => ['/login', '/register'].includes(route.path));
</script>
<template>
  <template v-if="errorStore.activeError">
    <AppErrorPage />
  </template>
  <template v-else>
    <!-- Render auth pages directly -->
    <RouterView v-if="isAuthPage" v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </RouterView>
    <!-- Wrap other pages in AuthLayout -->
    <AuthLayout v-else>
      <RouterView v-slot="{ Component, route }">
        <Suspense v-if="Component" :timeout="0">
          <Component :is="Component" :key="route.name" />
          <template #fallback>
            <span>Loading...</span>
          </template>
        </Suspense>
      </RouterView>
    </AuthLayout>
  </template>
</template>
