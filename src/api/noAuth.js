// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

function findCounts() {
  console.log('execute');
  return instance.get('/counts');
}

function findDeadLineTests() {
  return instance.get('/missions/fast_deadline');
}

function findPopularTests() {
  return instance.get('/missions/many_apply');
}

function findDetailTest(testId) {
  return instance.get('/missions/', {
    params: {
      mission_id: testId,
    },
  });
}

function findTests() {
  return instance.get('/tests');
}

// 직접적으로 API를 호출하지는 않지만 Get 요청 URL을 만들어줌
function getImage(fileName) {
  const url = process.env.VUE_APP_API_URL + 'api/image/' + fileName;
  console.log(url);
  return url;
}

export {
  findCounts,
  findDeadLineTests,
  findPopularTests,
  findDetailTest,
  findTests,
  getImage,
};
