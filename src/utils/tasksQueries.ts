import { supabase } from '@/lib/supabaseClient';
import type { QueryData } from '@supabase/supabase-js';

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects (
    id,
    name,
    slug
  )
`);

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>;

export const taskQuery = (id: string) =>
  supabase
    .from('tasks')
    .select(
      `
  *,
  projects (
    id,
    name,
    slug
  )
`,
    )
    .eq('id', Number(id)) // route params are strings; tasks.id is a number
    .single();

export type Task = QueryData<ReturnType<typeof taskQuery>>;
