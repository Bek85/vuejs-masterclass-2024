<script setup lang="ts">
defineProps<{
  errors?: string[]
}>();
</script>
<template>
  <ul v-if="errors?.length" class="text-sm text-left text-red-500">
    <li v-for="error in errors" class="list-disc" :key="error"> {{ error }} </li>
  </ul>
</template>
