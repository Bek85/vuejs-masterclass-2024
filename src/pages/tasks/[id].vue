<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

// Define the type for route.params
interface RouteParamsWithId {
  id: string;
}

// Cast route.params to the defined type
const params = route.params as RouteParamsWithId;
</script>
<template>
  <h1>Single Task {{ params.id }}</h1>
</template>
<style scoped></style>
