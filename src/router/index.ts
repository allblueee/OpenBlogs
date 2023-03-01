import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('../views/home/home.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ()=>import('../views/errorpage/notfound.vue')
    },
    {
      path: '/creator',
      name: 'Creator',
      redirect: '/creator/home',
    },
    {
      path: '/creator/home',
      name: 'CreatorHome',
      component: () => import('../views/creator/home.vue')
    },
    {
      path: '/editor/drafts/:draftId',
      name:'Editor',
      component: ()=>import('../views/editor/editor.vue')
    }
  ],
});

export default router;
