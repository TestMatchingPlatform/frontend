import { instanceForAuth } from '@/api/index';

function testerLogin(userData) {
  return instanceForAuth.post('/visitor/testers/login', userData);
}

function testerRegister(userData) {
  return instanceForAuth.post('/visitor/testers/register', userData);
}

function makerLogin(userData) {
  return instanceForAuth.post('/visitor/makers/login', userData);
}

function makerRegister(userData) {
  return instanceForAuth.post('/visitor/makers/register', userData);
}

export { testerLogin, makerLogin, makerRegister, testerRegister };
