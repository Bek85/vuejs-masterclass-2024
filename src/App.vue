<script setup lang="ts">
import AuthLayout from '@/components/layout/main/AuthLayout.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <AuthLayout>
    <RouterView />
  </AuthLayout>
</template>
