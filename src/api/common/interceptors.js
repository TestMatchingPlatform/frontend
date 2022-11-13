import store from '@/store/index';
import loginView from '@/views/LoginView';

// 요청 하기 전, 값을 미리 꺼내서 Request Header 설정해주기
export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      // config.headers.REFRESH_TOKEN = store.state.RefreshToken;
      config.headers.ACCESS_TOKEN = store.state.AccessToken;
      console.log(config.headers.ACCESS_TOKEN);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // Response 중에서 set Cookie 값이 있는 경우에는 해당 값을 Persisted state 연동한 store 에 저장
  instance.interceptors.response.use(
    function (response) {
      console.log(response);
      store.state.AccessToken = response.headers.access_token;
      // store.state.RefreshToken =

      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
}
