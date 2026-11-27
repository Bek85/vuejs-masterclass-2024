import type { Projects } from '@/utils/projectsQueries';
import { projectsQuery } from '@/utils/projectsQueries';
import { useMemoize } from '@vueuse/core';

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null);

  // Remembers the first response for each key, so later visits skip the network.
  const loadProjects = useMemoize(async (key: string) => await projectsQuery);

  // Stale-while-revalidate, step 2: the page already shows the cached (maybe stale)
  // data, so ask the database again in the background and compare.
  const validateCache = () => {
    if (!projects.value?.length) return;

    // Awaiting a Supabase query sends a NEW request every time, even when the
    // query object is reused, so this always gets fresh rows.
    projectsQuery.then(({ data, error }) => {
      if (error) return;

      if (JSON.stringify(projects.value) === JSON.stringify(data)) {
        console.log('[projects] cache is fresh');
        return;
      }

      // The cache is stale: forget it, so the next visit loads fresh data...
      console.log('[projects] cache is stale, showing fresh data');
      loadProjects.delete('projects');

      // ...and put the fresh rows on screen now. The page reads `projects` through
      // storeToRefs, so Vue re-renders the table as soon as this ref changes.
      if (data) projects.value = data;
    });
  };

  // Stale-while-revalidate, step 1: answer instantly from the cache, then revalidate.
  const fetchProjects = async () => {
    const { data, error, status } = await loadProjects('projects');

    if (error) useErrorStore().setError({ error, customCode: status });

    if (data) projects.value = data;

    validateCache();
  };

  return {
    projects,
    fetchProjects,
  };
});
