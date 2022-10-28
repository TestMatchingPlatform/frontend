import store from '@/store/index';
import loginView from '@/views/LoginView';

// 요청 하기 전, 값을 미리 꺼내서 Request Header 설정해주기
export function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      // config.headers.REFRESH_TOKEN = store.state.RefreshToken;
      console.log(config.headers.ACCESS_TOKEN);
      config.headers.ACCESS_TOKEN = store.state.AccessToken;
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

      // 받아온 값들은 store 값으로 매칭해야 하는데, string[]값이 response 되므로, 이를 한번더 가공해야 합니다
      //:( 값을 가공하는 방식은 값을 직접 받아보는게 아니면 확인하기가 힘들 것 같아서 보류하겠습니다.

      // store.state.RefreshToken =
      // store.state.AccessToken =
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
}
