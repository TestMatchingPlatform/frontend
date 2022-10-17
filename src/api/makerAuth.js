import { instance } from '@/api/index';

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
