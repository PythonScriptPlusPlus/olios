import Vue from 'vue';
import VueRouter from 'vue-router';
import Items from '../views/ItemsPage.vue';
import MainPage from '../views/MainPage.vue';
import SearchPage from '../views/SearchPage.vue';
import ShopCart from '../views/ShoppingCart.vue';
import Page404 from '../views/Page404.vue';
import GUI from '../views/GuiPage.vue';
import Product from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Main Page',
		component: MainPage,
	},
	{
		path: '/shopcart',
		name: 'Shopping cart',
		component: ShopCart,
	},
	{
		path: '/items',
		name: 'Items',
		component: Items,
	},
	{
		path: '/search',
		name: 'Search',
		component: SearchPage,
	},
	{
		path: '*',
		name: 'PageNotFound',
		component: Page404,
	},
	{
		path: '/gui',
		name: 'GUI',
		component: GUI,
	},
	{
		path: '/products',
		name: 'Products',
		component: Product,
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
