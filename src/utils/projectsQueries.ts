import { supabase } from '@/lib/supabaseClient';
import type { QueryData } from '@supabase/supabase-js';

export const projectsQuery = supabase.from('projects').select();

export type projects = QueryData<typeof projectsQuery>;
