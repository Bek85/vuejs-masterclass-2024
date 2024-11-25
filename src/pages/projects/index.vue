<script setup lang="ts">

import { useToast } from '@/components/ui/toast';
import { projectsQuery, type projects } from '@/utils/projectsQueries';
import { projectsColumns } from '@/utils/tableColumns/projectsColumns';

usePageStore().pageTitle = 'Projects';

const { toast } = useToast();

toast({
  title: 'Hello',
  description: 'This is a toast',
  variant: 'info',
  position: 'top-right',

});

const projects = ref<projects | null>(null);


const fetchProjects = async () => {

  const { data, error } = await projectsQuery;

  if (error) console.log(error);

  projects.value = data;

}

await fetchProjects();


</script>
<template>
  <DataTable v-if="projects" :columns="projectsColumns" :data="projects" />
  <Toaster position="top-right" />
</template>
<style scoped></style>
