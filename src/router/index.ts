import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/components/Login.vue';
import Inicial from '@/views/components/Home.vue';
import Ofertas from '@/views/Ofertas.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: Ofertas,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
