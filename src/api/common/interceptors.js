import store from '@/store/index';

// 요청 하기 전, 값을 미리 꺼내서 Request Header 설정해주기
export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      config.headers.AUTHORIZATION = store.state.AccessToken;
      console.log(config.headers.AUTHORIZATION);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Response 중에서 set Cookie 값이 있는 경우에는 해당 값을 Persisted state 연동한 store 에 저장
  instance.interceptors.response.use(
    function (response) {
      console.log(response.headers);
      store.state.AccessToken = response.headers.authorization;
      // store.state.RefreshToken =

      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
}
