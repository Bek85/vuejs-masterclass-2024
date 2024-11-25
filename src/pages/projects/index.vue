<script setup lang="ts">

import type { ColumnDef } from '@tanstack/vue-table';
import { RouterLink } from 'vue-router';
import { useToast } from '@/components/ui/toast';
import { projectsQuery, type projects } from '@/utils/projectsQueries';

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

const columns: ColumnDef<projects[0]>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('id')),
  },
  // Name Column
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => h(RouterLink, { to: `/projects/${row.original.slug}`, class: 'text-left font-medium hover:bg-muted block w-full' }, () => row.getValue('name')),
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('status')),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => h('div', { class: 'text-left' }, JSON.stringify(row.getValue('collaborators'))),
  }

]
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
  <Toaster position="top-right" />
</template>
<style scoped></style>
