import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Comic from '@/views/comics/Comics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/comic/:id',
        component: Comic
      }
    ]
  },
  {
    path: '/error-404',
    name: 'Page404',
    component: () => import('@/views/error/404/Page404.vue')
  },
  {
    path: '*',
    redirect: '/error-404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
