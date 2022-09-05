import store from '@/store/index';

export function setInterceptors(instance) {
  // 요청하기 전, 미리 JSESSIONID를 쿠키에서 꺼내서 request header에 반영
  instance.interceptors.request.use(
    function (config) {
      config.headers.JSESSIONID = store.state.sessionId;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  // 반환되는 값을 미리 가공
  instance.interceptors.response.use(
    function (response) {
      if (response.headers['set-cookie'] != null) {
        console.log(response.headers['set-cookie']);
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
}
