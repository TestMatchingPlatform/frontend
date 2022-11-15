import { testerAuthInstance } from '@/api/index';

function findDeadlineTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/tests/deadline`);
}

function findCreatedTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/tests/created`);
}

function findSearchTests(testerId, keyword) {
  return testerAuthInstance.get(`/${testerId}/tests?title=${keyword}`);
}

function testerRegister(userData) {
  return testerAuthInstance.post('/register', userData);
}

function testerLogin(userData) {
  return testerAuthInstance.post('/login', userData);
}

function showPointFromTester(testerId) {
  return testerAuthInstance.get(`/${testerId}/exchange`);
}

function findApplyTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/apply`);
}

function applyTest(testerId, testData) {
  return testerAuthInstance.post(`/${testerId}/apply`, testData);
}

function cancelApplyTest(testerId, testId) {
  return testerAuthInstance.delete(`/${testerId}/apply/${testId}`);
}

function findApplyInformationId(testerId, testId) {
  return testerAuthInstance.get(`/${testerId}/tests/${testId}`);
}

function createMakerReview(applyId, makerReviewData) {
  console.log(applyId);
  return testerAuthInstance.post(`/apply/${applyId}/review`, makerReviewData);
}

function changeAccountNumber(testerId, accountData) {
  return testerAuthInstance.patch(`/${testerId}/account`, accountData);
}

function changePointToCash(testerId, pointData) {
  return testerAuthInstance.post(`/${testerId}/exchange/point`, pointData);
}

export {
  testerLogin,
  testerRegister,
  applyTest,
  cancelApplyTest,
  findApplyTests,
  showPointFromTester,
  findApplyInformationId,
  createMakerReview,
  findDeadlineTests,
  findCreatedTests,
  findSearchTests,
  changeAccountNumber,
  changePointToCash,
};
