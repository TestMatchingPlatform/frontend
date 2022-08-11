import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes/index';

const app = createApp(App);

// router 사용을 명시
app.use(router).mount('#app');
