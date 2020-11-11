import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import EventManager from '@/views/EventManager/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: EventManager
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
