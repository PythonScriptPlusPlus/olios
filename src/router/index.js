import Vue from 'vue';
import VueRouter from 'vue-router';
import Items from '../views/items.vue';
import Home from '../views/mainPage.vue';
import Search from '../views/searchPage.vue';
import ShopCart from '../views/shoppingCart.vue';
import DnF from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main Page',
    component: Home,
  },
  {
    path: '/shopcart',
    name: 'Shopping cart',
    component: ShopCart,
  },
  {
    path: '/items',
    name: 'Items',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Items,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: DnF,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
