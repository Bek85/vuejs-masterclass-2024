<script setup lang="ts">

const { error } = storeToRefs(useErrorStore());

</script>
<template>
  <AuthLayout>
    <AppErrorPage v-if="error" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
