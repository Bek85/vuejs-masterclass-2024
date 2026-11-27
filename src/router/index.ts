import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  await authStore.getSession();

  const isAuthPage = ['/login', '/register'].includes(to.path);

  // Returning a path redirects this navigation; returning nothing lets it continue.
  if (!authStore.user && !isAuthPage) return '/login';

  if (authStore.user && isAuthPage) return '/';
});

export default router;
