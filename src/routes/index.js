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
      path: '/about',
      component: () => import('@/views/noauth/AboutView'),
    },
    {
      path: '/how',
      component: () => import('@/views/noauth/HowWorkView'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/test/:id',
      component: () => import('@/views/TestView'),
    },
    {
      path: '/test/:id/state/:state',
      component: () => import('@/views/TestView'),
    },
    {
      path: '/point',
      component: () => import('@/views/MyPointView'),
    },
    {
      path: '/makers/:id/tests',
      component: () => import('@/views/maker/MyTestView'),
    },
    {
      path: '/testers/:id/tests',
      component: () => import('@/views/tester/MyApplyView'),
    },
    {
      path: '/tests/form',
      component: () => import('@/views/maker/CreateTestView'),
    },
    {
      path: '/tests/:id/fix',
      component: () => import('@/views/maker/FixTestView'),
    },
    {
      path: '/tests/find',
      component: () => import('@/views/tester/FindTestView'),
    },
    {
      path: '/tests/:id',
      component: () => import('@/views/TestView'),
    },
    {
      path: '/*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
