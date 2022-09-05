// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

// Tester 회원가입 API
function testerRegister(userData) {
  return instance.post('/testers', userData);
}

// Tester 로그인 API
function testerLogin(userData) {
  const response = instance.post('testers/login', userData);
  console.log(response);
  console.log('auth Test execute');
  return response;
}

// Tester 정보 API
function testerInformation(userData) {
  const url = 'testers/' + userData;
  const response = instance.get(url);
  console.log(response);
  return response;
}

// Tester 프로필 사진을 가져오는 API URL 반환
function getTesterProfileImage(profileURL) {
  const url = process.env.VUE_APP_API_URL + 'api/profile/' + profileURL;
  console.log(url);
  return url;
}

// Maker 로그인 API
function makerRegister(userData) {
  return instance.post('/accounts/questMakers/signup', userData);
}

// Maker 회원가입 API
function makerLogin(userData) {
  return instance.post('/accounts/questMaker/login', userData);
}

export {
  testerRegister,
  testerLogin,
  makerLogin,
  makerRegister,
  testerInformation,
  getTesterProfileImage,
};
