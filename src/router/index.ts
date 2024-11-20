import { h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProject.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: {
        render() {
          return h('div', 'Not Found');
        },
        displayName: 'NotFound',
      },
    },
  ],
});

export default router;
