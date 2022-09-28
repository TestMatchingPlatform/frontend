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
      path: '/main',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/tester',
      component: () => import('@/views/TesterMainPage.vue'),
    },
    {
      path: '/maker',
      component: () => import('@/views/MakerMainPage.vue'),
    },
    {
      path: '/login/tester',
      component: () => import('@/views/tester/before-auth/TesterLoginPage.vue'),
    },
    {
      path: '/login/maker',
      component: () => import('@/views/maker/MakerLoginPage.vue'),
    },
    {
      path: '/signup/tester',
      component: () =>
        import('@/views/tester/before-auth/TesterSignupPage.vue'),
    },
    {
      path: '/signup/maker',
      component: () => import('@/views/maker/MakerSignupPage.vue'),
    },
    {
      path: '/start/tester',
      component: () => import('@/views/tester/TesterStartPage.vue'),
    },
    {
      path: '/testers/:id',
      component: () => import('@/views/tester/after-auth/TesterInfoPage.vue'),
    },
    {
      path: '/info/tester',
      component: () => import('@/views/tester/after-auth/TesterInfoPage.vue'),
    },
    {
      path: '/apply/quests',
      component: () =>
        import('@/views/tester/after-auth/TesterFindQuestPage.vue'),
    },
    {
      path: '/quests/:id',
      component: () => import('@/views/tester/after-auth/QuestPage.vue'),
    },
    {
      path: '/apply/:id',
      component: () => import('@/views/tester/after-auth/ApplyPage.vue'),
    },
    {
      path: '/testers/apply/quests',
      component: () => import('@/views/tester/after-auth/TesterApplyQuestPage'),
    },
    {
      path: '/*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

export default router;
