import Vue from 'vue';
import App from './App.vue';

import router from '@/routes/index';
import store from '@/store/index';

import Vuetify from 'vuetify';

import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import VueMarkdown from 'vue-markdown/src/VueMarkdown';
import 'prismjs/themes/prism.css';

Vue.component('vue-markdown', VueMarkdown);
Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: '#56c1a8',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 5000,
    },
    scrollBarWidth: 16,
  },
});
Vue.config.productionTip = false;

Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
