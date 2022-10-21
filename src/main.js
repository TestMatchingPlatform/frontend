import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import VuetifyDialog from 'vuetify-dialog';
import vuetify from './plugins/vuetify';

Vue.use(VuetifyDialog);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
