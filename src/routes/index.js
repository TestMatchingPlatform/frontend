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
      path: '/point',
      component: () => import('@/views/MyPointView'),
    },
    {
      path: '/makers/:id/tests',
      component: () => import('@/views/MyTestView'),
    },
    {
      path: '/testers/:id/tests',
      component: () => import('@/views/MyApplyView'),
    },
    {
      path: '/tests/form',
      component: () => import('@/views/CreateTestView'),
    },
    {
      path: '/tests/find',
      component: () => import('@/views/FindTestView'),
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
