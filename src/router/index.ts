import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/components/Login.vue';
import Inicial from '@/views/components/Home.vue';
import Ofertas from '@/views/components/Ofertas.vue';
import Revenda from '@/views/components/Ressel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/inicio',
    name: 'Inicial',
    component: Inicial,
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: Ofertas,
  },
  {
    path: '/revenda',
    name: 'Revenda',
    component: Revenda,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
