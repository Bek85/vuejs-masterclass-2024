<script setup lang="ts">

import { useToast } from '@/components/ui/toast';
import { projectsQuery, type Projects } from '@/utils/projectsQueries';
import { projectsColumns } from '@/utils/tableColumns/projectsColumns';

usePageStore().pageTitle = 'Projects';

const { toast } = useToast();

toast({
  title: 'Hello',
  description: 'This is a toast',
  variant: 'info',
  position: 'top-right',

});

const projects = ref<Projects | null>(null);


const fetchProjects = async () => {

  const { data, error, status } = await projectsQuery;

  if (error) useErrorStore().setError({ error, customCode: status });

  projects.value = data;

}

await fetchProjects();


</script>
<template>
  <DataTable v-if="projects" :columns="projectsColumns" :data="projects" />
  <Toaster position="top-right" />
</template>
<style scoped></style>
