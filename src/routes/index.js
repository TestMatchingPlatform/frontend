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
      component: () => import('@/views/TesterMainPage.vue'),
    },
    {
      path: '/maker',
      component: () => import('@/views/MakerMainPage.vue'),
    },
    {
      path: '/login/tester',
      component: () => import('@/views/tester/TesterLoginPage.vue'),
    },
    {
      path: '/login/maker',
      component: () => import('@/views/maker/MakerLoginPage.vue'),
    },
    {
      path: '/signup/tester',
      component: () => import('@/views/tester/TesterSignupPage.vue'),
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
      component: () => import('@/views/tester/TesterInfoPage.vue'),
    },
    {
      path: '/info/tester',
      component: () => import('@/views/tester/TesterInfoPage.vue'),
    },
    {
      path: '/apply/quests',
      component: () => import('@/views/tester/TesterFindQuestPage.vue'),
    },
    {
      path: '/quests/:id/',
      component: () => import('@/views/QuestPage.vue'),
    },
    {
      path: '/testers/:id/quests',
      component: () => import('@/views/tester/TesterMyQuestPage'),
    },
    {
      path: '/*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

export default router;
