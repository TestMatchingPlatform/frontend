import { instanceForAuth } from '@/api/index';

function testerLogin(userData) {
  return instanceForAuth.post('/visitor/testers/login', userData);
}

function makerLogin(userData) {
  return instanceForAuth.post('/visitor/makers/login', userData);
}

export { testerLogin, makerLogin };
