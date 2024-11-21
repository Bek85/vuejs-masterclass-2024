<script setup lang="ts">
import AuthLayout from '@/components/Layout/main/AuthLayout.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <AuthLayout>
    <RouterView />
  </AuthLayout>
</template>
