import { makerAuthInstance } from '@/api/index';

// maker
function makerRegister(userData) {
  return makerAuthInstance.post('/register', userData);
}

function makerLogin(userData) {
  return makerAuthInstance.post('/login', userData);
}

function showPointFromMaker(makerId) {
  return makerAuthInstance.get(`/${makerId}/exchange`);
}

function createTest(makerId, testData) {
  return makerAuthInstance.post(`/${makerId}/tests`, testData);
}

function updateTest(makerId, testId, testData) {
  return makerAuthInstance.patch(`/${makerId}/tests/${testId}`, testData);
}

function findMyTests(makerId) {
  return makerAuthInstance.get(`/${makerId}/tests`);
}

function findApplyTesters(testId) {
  return makerAuthInstance.get(`/tests/${testId}/apply`);
}

function findPerformTesters(testId) {
  return makerAuthInstance.get(`/tests/${testId}/perform`);
}

function approveTesters(testId, approveData) {
  return makerAuthInstance.post(`/tests/${testId}/perform`, approveData);
}

function completeTesters(testId, completeData) {
  return makerAuthInstance.post(`/tests/${testId}/complete`, completeData);
}

function findCompleteTesters(testId) {
  return makerAuthInstance.get(`/tests/${testId}/perform/review`);
}

function reviewTesters(makerId, reviewData) {
  return makerAuthInstance.post(`/${makerId}/tests/perform/review`, reviewData);
}

export {
  makerRegister,
  makerLogin,
  showPointFromMaker,
  createTest,
  updateTest,
  findMyTests,
  findApplyTesters,
  findPerformTesters,
  approveTesters,
  completeTesters,
  findCompleteTesters,
  reviewTesters,
};
