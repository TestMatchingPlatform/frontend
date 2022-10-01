// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

// Tester 회원가입 API
function makerRegister(userData) {
  return instance.post('makers/register', userData);
}
function findCounts() {
  console.log('execute');
  return instance.get('/counts');
}
function findDeadLineTests() {
  return instance.get('/tests/fast_deadline');
}
function findPopularTests() {
  return instance.get('tests/many_apply');
}
// 직접적으로 API를 호출하지는 않지만 Get 요청 URL을 만들어줌
function getImage(fileName) {
  const url = process.env.VUE_APP_API_URL + 'api/image/' + fileName;
  console.log(url);
  return url;
}

// // Tester 로그인 API
// function testerLogin(userData) {
//   const response = instance.post('testers/login', userData);
//   console.log(response);
//   console.log('auth Test execute');
//   return response;
// }
//
// // Tester 정보 API
// function testerInformation(userData) {
//   const url = 'testers/' + userData;
//   return instance.get(url);
// }
//
// // Tester 프로필 사진을 가져오는 API URL 반환
// function getTesterProfileImage(profileURL) {
//   const url = process.env.VUE_APP_API_URL + 'api/profile/' + profileURL;
//   console.log(url);
//   return url;
// }
//
// // Quest List 정보를 가져오는 API
// function fetchQuestList() {
//   return instance.get('quests');
// }
//
// // Quest 정보를 가져오는 API
// function fetchQuest(questId) {
//   return instance.get('quests/quest', { params: { quest_id: questId } });
// }
//
// // Quest Apply 하는 API
// function applyQuest(testerId, submitInformation) {
//   const url = 'testers/' + testerId + '/apply';
//   return instance.post(url, submitInformation);
// }
//
// // Tester의 Apply Quest 가져오는 API
// function fetchApplyQuestFromTesterId(testerId) {
//   const url = 'testers/' + testerId + '/apply';
//   return instance.get(url);
// }
//
// // Apply Id 를 이용해서 Apply 정보를 가져오는 API
// function fetchApplyQuest(applyId) {
//   const url = 'apply/' + applyId;
//   return instance.get(url);
// }
//
// // Maker 로그인 API
// function makerRegister(userData) {
//   return instance.post('/accounts/questMakers/signup', userData);
// }
//
// // Maker 회원가입 API
// function makerLogin(userData) {
//   return instance.post('/accounts/questMaker/login', userData);
// }

export {
  makerRegister,
  findCounts,
  findDeadLineTests,
  findPopularTests,
  getImage,
};
