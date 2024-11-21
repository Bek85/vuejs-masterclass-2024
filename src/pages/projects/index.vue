<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

// this needs to be anonymous function
(async () => {
  try {
    const { data: projects, error } = await supabase.from('projects').select('*');
    console.log(projects);
  } catch (error) {
    console.error(error);
  }
})();


</script>
<template>
  <h1>Projects Page</h1>
  <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink :to="{ name: '/projects/[id]', params: { id: '1' } }">Go to Project 1</RouterLink>
</template>
<style scoped></style>
