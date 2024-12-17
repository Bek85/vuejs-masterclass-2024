<script setup lang="ts">

// import { useToast } from '@/components/ui/toast';
import { projectsColumns } from '@/utils/tableColumns/projectsColumns';
import { useProjectsStore } from '@/stores/loaders/projects';

usePageStore().pageTitle = 'Projects';

const projectsLoader = useProjectsStore();
const { projects } = storeToRefs(projectsLoader);

const { fetchProjects } = projectsLoader;

await fetchProjects();

// const { toast } = useToast();

// toast({
//   title: 'Hello',
//   description: 'This is a toast',
//   variant: 'info',
//   position: 'top-right',

// });




</script>
<template>
  <DataTable v-if="projects" :columns="projectsColumns" :data="projects" />
  <Toaster position="top-right" />
</template>
<style scoped></style>
