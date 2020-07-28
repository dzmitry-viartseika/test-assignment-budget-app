import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import accounts from '../views/accounts.vue';
import budgets from '../views/budgets.vue';
import addAccount from '../components/addAccount.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts',
    name: 'Home',
    component: accounts,
  },
  {
    path: '/create',
    name: 'Home',
    component: addAccount,
  },
  {
    path: '/budgets',
    name: 'Home',
    component: budgets,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
