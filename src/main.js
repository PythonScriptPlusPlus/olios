import Vue from 'vue';
import 'normalize.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// components
import OlInput from './components/gui/OlInput.vue';

Vue.config.productionTip = false;

Vue.component('OlInput', OlInput);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
