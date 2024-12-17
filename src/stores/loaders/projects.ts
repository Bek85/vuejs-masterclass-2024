import type { Projects } from '@/utils/projectsQueries';
import { projectsQuery } from '@/utils/projectsQueries';

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null);

  const fetchProjects = async () => {
    if (projects.value?.length) return;

    const { data, error, status } = await projectsQuery;

    if (error) useErrorStore().setError({ error, customCode: status });

    projects.value = data;
  };

  return {
    projects,
    fetchProjects,
  };
});
