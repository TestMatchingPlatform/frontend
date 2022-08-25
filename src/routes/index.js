import Vue from 'vue';
import VueRouter from 'vue-router';

// Router 구성만 만들고 내용은 미작성함.
// 작성한 내용은 로그인 회원가입, 조회밖에 없음.

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/tester',
      component: () => import('@/views/TesterMain.vue'),
    },
    {
      path: '/maker',
      component: () => import('@/views/MakerMain.vue'),
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
      path: '/testers/:id',
      component: () => import('@/views/TesterInfoPage.vue'),
    },
    {
      path: '/testers/:id/apply',
      component: () => import('@/views/TesterApplyQuestPage'),
    },
    {
      path: '/testers/:id/quests',
      component: () => import('@/views/TesterMyQuestPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

export default router;
