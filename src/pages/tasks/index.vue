<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from '@root/database/types/database.types';


const tasks = ref<Tables<'tasks'>[] | null>([]);

// this needs to be anonymous function
(async () => {

  const { data, error } = await supabase.from('tasks').select('*');

  if (error) console.log(error);

  tasks.value = data;

})();


</script>
<template>
  <h1>Tasks Page</h1>
  <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink :to="{ name: '/tasks/[id]', params: { id: '1' } }">Go to Task 1</RouterLink>
  <ul>
    <li v-for="task in tasks" :key="task.id"> {{ task.name }} </li>
  </ul>
</template>
<style scoped></style>
