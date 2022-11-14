import { testerAuthInstance } from '@/api/index';

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

function findApplyInformationId(testerId, testId) {
  return testerAuthInstance.get(`/${testerId}/tests/${testId}`);
}

function createMakerReview(applyId, makerReviewData) {
  console.log(applyId);

  return testerAuthInstance.post(`/apply/${applyId}/review`, makerReviewData);
}

export {
  testerLogin,
  testerRegister,
  applyTest,
  findApplyTests,
  showPointFromTester,
  findApplyInformationId,
  createMakerReview,
};
