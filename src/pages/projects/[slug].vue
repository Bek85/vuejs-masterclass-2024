<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

// Define the type for route.params
interface RouteParamsWithSlug {
  slug: string;
}

// Cast route.params to the defined type
const params = route.params as RouteParamsWithSlug;

</script>
<template>
  <h1>Single Project {{ params.slug }}</h1>
  <br />
  <RouterLink to="/projects">Back to Projects</RouterLink>
</template>
<style scoped></style>
