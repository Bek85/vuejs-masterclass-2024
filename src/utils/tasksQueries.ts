import { supabase } from '@/lib/supabaseClient';
import type { Tables } from '@root/database/types/database.types';

export interface TaskWithProject extends Tables<'tasks'> {
  projects: {
    id: number;
    name: string;
    slug: string;
    description: string;
  };
}

export type TasksWithProjects = TaskWithProject[];

export const tasksWithProjectsQuery = supabase.from('tasks').select(`*, projects(id, name, slug)`);
