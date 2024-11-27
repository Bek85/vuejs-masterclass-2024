<script setup lang="ts">

import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/tasksQueries';
import { tasksColumns } from '@/utils/tableColumns/tasksColumns';

usePageStore().pageTitle = 'My Tasks';

const tasks = ref<TasksWithProjects | null>(null);

const fetchTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery;

  if (error) useErrorStore().setError({ error, customCode: status });

  tasks.value = data;
}

await fetchTasks();




</script>
<template>
  <DataTable v-if="tasks" :columns="tasksColumns" :data="tasks" />
</template>
<style scoped></style>
