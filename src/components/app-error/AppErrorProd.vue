<script setup lang="ts">
import type { AppError } from '@/types/Error';

const props = defineProps<{
  error: AppError;
}>();

// Production never shows database internals: only custom messages and "not found".
const shown = computed(() => {
  if (props.error.isCustom) return { code: props.error.status, msg: props.error.message };
  if (props.error.status === 404) {
    return { code: 404, msg: 'The page you are looking for does not exist.' };
  }
  return { code: 500, msg: 'Oops! Something went wrong!' };
});
</script>
<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
    <h1 class="error__code">{{ shown.code }}</h1>
    <p class="error__msg">{{ shown.msg }}</p>
    <div class="error-footer">
      <p class="error-footer__text">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button class="max-w-36"> Back to homepage </Button>
      </RouterLink>
    </div>
  </div>
</template>
