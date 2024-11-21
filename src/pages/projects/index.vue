<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { onMounted } from 'vue';

const fetchProjects = async () => {
  try {
    const { data: projects, error } = await supabase.from('projects').select('*');
    console.log(projects);
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchProjects();
});
</script>
<template>
  <h1>Projects Page</h1>
  <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink :to="{ name: '/projects/[id]', params: { id: '1' } }">Go to Project 1</RouterLink>
</template>
<style scoped></style>
