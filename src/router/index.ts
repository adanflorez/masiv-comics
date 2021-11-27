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
    path: '/comic',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: Comic
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
