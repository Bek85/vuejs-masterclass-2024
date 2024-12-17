import type { Projects } from '@/utils/projectsQueries';
import { projectsQuery } from '@/utils/projectsQueries';
import { useMemoize } from '@vueuse/core';

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null);

  const loadProjects = useMemoize(async (key: string) => await projectsQuery);

  const fetchProjects = async () => {
    const { data, error, status } = await loadProjects('projects');

    if (error) useErrorStore().setError({ error, customCode: status });

    projects.value = data;
  };

  return {
    projects,
    fetchProjects,
  };
});
