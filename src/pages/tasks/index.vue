<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref, h } from 'vue';
import type { Tables } from '@root/database/types/database.types';
import type { ColumnDef } from '@tanstack/vue-table';
import DataTable from '@/components/ui/data-table/DataTable.vue';
interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },

]

const columns: ColumnDef<Payment>[] = [
  // ID Column
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
  },

  // Email Column
  {
    accessorKey: 'email',
    header: () => h('div', { class: 'text-left' }, 'Email'),
  },

  // Status Column
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
  },
  // Amount Column
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-left' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-left font-medium' }, formatted)
    },
  }
]


const tasks = ref<Tables<'tasks'>[] | null>([]);

// this needs to be anonymous function
(async () => {

  const { data, error } = await supabase.from('tasks').select('*');

  if (error) console.log(error);

  tasks.value = data;

})();


</script>
<template>
  <DataTable :columns="columns" :data="payments" />
</template>
<style scoped></style>
