// 로그인, 회원 가입, 회원탈퇴
import { instance } from './index';

function findCounts() {
  console.log('execute');
  return instance.get('/counts');
}

function findDeadLineTests() {
  return instance.get('/tests/fast_deadline');
}

function findPopularTests() {
  return instance.get('/tests/many_apply');
}

function findDetailTest(testId) {
  return instance.get('/tests/', {
    params: {
      test_id: testId,
    },
  });
}

// tester

function testerRegister(userData) {
  return instance.post('testers/register', userData);
}

function testerLogin(userData) {
  return instance.post('testers/login', userData);
}

function findTests() {
  return instance.get('/tests');
}

function showPointFromTester(testerId) {
  return instance.get(`/testers/${testerId}/exchange`);
}

function findApplyTests(testerId) {
  return instance.get(`/testers/${testerId}/apply`);
}

function applyTest(testerId, testData) {
  return instance.post(`/testers/${testerId}/apply`, testData);
}

function findApplyInformationId(testerId, testId) {
  return instance.get(`/testers/${testerId}/tests/${testId}`);
}

function createMakerReview(applyId, makerReviewData) {
  return instance.post(`/testers/apply/${applyId}/review`, makerReviewData);
}

// maker
function makerRegister(userData) {
  return instance.post('makers/register', userData);
}

function makerLogin(userData) {
  return instance.post('makers/login', userData);
}

function showPointFromMaker(makerId) {
  return instance.get(`/makers/${makerId}/exchange`);
}

function createTest(makerId, testData) {
  return instance.post(`/makers/${makerId}/tests`, testData);
}

function updateTest(makerId, testId, testData) {
  return instance.patch(`/makers/${makerId}/tests/${testId}`, testData);
}

function findMyTests(makerId) {
  return instance.get(`/makers/${makerId}/tests`);
}

function findApplyTesters(testId) {
  return instance.get(`/makers/tests/${testId}/apply`);
}

function findPerformTesters(testId) {
  return instance.get(`/makers/tests/${testId}/perform`);
}

function approveTesters(testId, approveData) {
  return instance.post(`/makers/tests/${testId}/perform`, approveData);
}

function completeTesters(testId, completeData) {
  return instance.post(`/makers/tests/${testId}/complete`, completeData);
}

function findCompleteTesters(testId) {
  return instance.get(`/makers/tests/${testId}/perform/review`);
}

function reviewTesters(makerId, reviewData) {
  return instance.post(`/makers/${makerId}/tests/perform/review`, reviewData);
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
  findApplyTests,
  findMyTests,
  getImage,
  testerRegister,
  applyTest,
  testerLogin,
  findTests,
  showPointFromTester,
  showPointFromMaker,
  makerRegister,
  makerLogin,
  createTest,
  updateTest,
  findApplyTesters,
  approveTesters,
  findPerformTesters,
  completeTesters,
  findCompleteTesters,
  findApplyInformationId,
  reviewTesters,
  createMakerReview,
};
