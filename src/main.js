import Vue from 'vue';
import 'normalize.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// components
import OlInput from './components/gui/OlInput.vue';
import LeftMenu from './components/LeftMenu.vue';
import RightMenu from './components/RightMenu.vue';

Vue.config.productionTip = false;

Vue.component('OlInput', OlInput);
Vue.component('LeftMenu', LeftMenu);
Vue.component('RightMenu', RightMenu);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
