import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Router 구성만 만들고 내용은 미작성함.
// 작성한 내용은 로그인 회원가입, 조회밖에 없음.
const router = new VueRouter({
  mode: 'history',
  router: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login/tester',
      component: () => import('@/views/TesterLoginPage.vue'),
    },
    {
      path: '/login/maker',
      component: () => import('@/views/MakerLoginPage.vue'),
    },
    {
      path: '/signup/tester',
      component: () => import('@/views/TesterSignupPage.vue'),
    },
    {
      path: '/signup/maker',
      component: () => import('@/views/MakerSignupPage.vue'),
    },
    {
      path: '/quest',
      component: () => import('@/views/QuestListPage.vue'),
    },
    {
      path: '/quest/:id',
      component: () => import('@/views/QuestPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
