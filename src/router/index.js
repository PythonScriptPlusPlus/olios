import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SearchPage from '../views/SearchPage.vue';
import ShopCart from '../views/ShoppingCart.vue';
import Page404 from '../views/Page404.vue';
import GUI from '../views/GuiPage.vue';
import Product from '../views/Products.vue';
import ProductCard from '../views/ProductCard.vue';

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
	},
	{
		path: '/productCard',
		name: 'ProductsCard',
		component: ProductCard,
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
