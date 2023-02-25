import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/creator',
      name: 'creator',
      component: ()=>import('../views/creator/home.vue')
    }

  ],
});

export default router;
