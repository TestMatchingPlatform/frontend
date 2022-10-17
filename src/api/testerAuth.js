import { instance } from '@/api/index';

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

export {
  testerLogin,
  testerRegister,
  applyTest,
  findApplyTests,
  findTests,
  showPointFromTester,
  findApplyInformationId,
  createMakerReview,
};
