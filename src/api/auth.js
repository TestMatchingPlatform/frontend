// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

// Tester 회원가입 API
function testerRegister(userData) {
  return instance.post('/testers', userData);
}

// Tester 로그인 API
function testerLogin(userData) {
  return instance.post('testers/login', userData);
}

export { testerRegister, testerLogin };
