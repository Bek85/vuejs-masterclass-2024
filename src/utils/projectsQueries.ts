import { supabase } from '@/lib/supabaseClient';
import type { QueryData } from '@supabase/supabase-js';

export const projectsQuery = supabase.from('projects').select();

// Project Query
export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select('*, tasks(id, name, status, due_date, description)')
    .eq('slug', slug)
    .single();

export type Project = QueryData<ReturnType<typeof projectQuery>>;

export type Projects = QueryData<typeof projectsQuery>;
