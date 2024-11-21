<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref, h } from 'vue';
import type { Tables } from '@root/database/types/database.types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';

const tasks = ref<Tables<'tasks'>[] | null>([]);

// this needs to be anonymous function
(async () => {

  const { data, error } = await supabase.from('tasks').select('*');

  if (error) console.log(error);

  tasks.value = data;

})();

const columns: ColumnDef<Tables<'tasks'>[]>[] = [
  // ID Column
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('id')),
  },

  // Name Column
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('name')),
  },

  // Status Column
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('status')),
  },
  // Description Column
  {
    accessorKey: 'description',
    header: () => h('div', { class: 'text-left' }, 'Description'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('description')),
  },
  // Due Date Column
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('due_date')),
  },
  // Project ID Column
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project ID'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('project_id')),
  },
  // Collaborators Column
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => h('div', { class: 'text-left' }, JSON.stringify(row.getValue('collaborators'))),
  }
]




</script>
<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
<style scoped></style>
