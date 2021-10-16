import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/components/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;