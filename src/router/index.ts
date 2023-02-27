import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/home/Home.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ()=>import('../views/errorpage/notfound.vue')
    },
    {
      path: '/creator',
      name: 'creator',
      redirect: '/creator/home',
    },
    {
      path: '/creator/home',
      name: 'creator',
      component: () => import('../views/creator/home.vue')
    }

  ],
});

export default router;
