<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types/database.types';

const projects = ref<Tables<'projects'>[] | null>([]);

// this needs to be anonymous function
(async () => {

  const { data, error } = await supabase.from('projects').select('*');

  if (error) console.log(error);

  projects.value = data;

})();


</script>
<template>
  <h1>Projects Page</h1>
  <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink :to="{ name: '/projects/[id]', params: { id: '1' } }">Go to Project 1</RouterLink>
  <ul>
    <li v-for="project in projects" :key="project.id"> {{ project.name }} </li>
  </ul>
</template>
<style scoped></style>
