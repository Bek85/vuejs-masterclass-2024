<script setup lang="ts">
import type { AppError } from '@/types/Error';

defineProps<{
  error: AppError;
}>();
</script>
<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
    <h1 class="error__code">{{ error.code || error.status }}</h1>
    <p class="error__code" v-if="error.code">Status Code: {{ error.status }}</p>
    <p class="error__msg">{{ error.message }}</p>
    <p class="error__hint" v-if="error.hint">{{ error.hint }}</p>
    <p class="error__details" v-if="error.details">{{ error.details }}</p>
    <div class="error-footer">
      <p class="error-footer__text">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button class="max-w-36"> Back to homepage </Button>
      </RouterLink>
    </div>
  </div>
</template>
