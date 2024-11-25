<script setup lang="ts">

import { tasksWithProjectsQuery, type tasksWithProjects } from '@/utils/tasksQueries';
import { tasksColumns } from '@/utils/tableColumns/tasksColumns';

usePageStore().pageTitle = 'My Tasks';

const tasks = ref<tasksWithProjects | null>(null);

const fetchTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery;

  if (error) console.log(error)

  tasks.value = data
}

await fetchTasks();


</script>
<template>
  <DataTable v-if="tasks" :columns="tasksColumns" :data="tasks" />
</template>
<style scoped></style>
