// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

// Tester 회원가입 API
function testerRegister(userData) {
  return instance.post('/testers', userData);
}

// Tester 로그인 API
async function testerLogin(userData) {
  const response = await instance.post('testers/login', userData);
  console.log(response);
  return response;
}

// Maker 로그인 API
function makerRegister(userData) {
  return instance.post('/accounts/questMakers/signup', userData);
}

// Maker 회원가입 API
function makerLogin(userData) {
  return instance.post('/accounts/questMaker/login', userData);
}

export { testerRegister, testerLogin, makerLogin, makerRegister };
