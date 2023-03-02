import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/home.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/errorpage/notfound.vue')
    },
    {
      path: '/creator',
      name: 'Creator',
      redirect: '/creator/home',
    },
    {
      path: '/creator/home',
      name: 'CreatorHome',
      component: () => import('../views/creator/home.vue'),
      children:[
        {
          path:'articles',
          name:'articlesManage',
          component: () => import('../views/creator/contentManage/article.vue')
        },
        {
          path:'column',
          name:'columnManage',
          component: () => import('../views/creator/contentManage/column.vue')
        }
      ]
    },
    {
      path: '/editor',
      name: 'EditorIndex',
      component: () => import('../views/editor/index.vue'),
      children: [
        {
          path: 'new',
          name: 'EditorNew',
          component: () => import('../views/editor/editor.vue'),
        }, {
          path: 'drafts/:draftId',
          name: 'EditorDraft',
          component: () => import('../views/editor/editor.vue'),
        }
      ]
    }
  ],
});

export default router;
