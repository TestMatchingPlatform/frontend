import { makerAuthInstance } from '@/api/index';

// maker

function showPointFromMaker(makerId) {
  return makerAuthInstance.get(`/${makerId}/exchange`);
}

function createTest(makerId, testData) {
  return makerAuthInstance.post(`/${makerId}/missions`, testData);
}

function updateTest(makerId, testId, testData) {
  return makerAuthInstance.patch(`/${makerId}/missions/${testId}`, testData);
}

function updateTestExceptImage(makerId, testId, testData) {
  return makerAuthInstance.patch(
    `/${makerId}/missions/${testId}/no_image`,
    testData,
  );
}

function findMyTests(makerId) {
  return makerAuthInstance.get(`/${makerId}/missions`);
}

function findApplyTesters(testId) {
  return makerAuthInstance.get(`/missions/${testId}/apply`);
}

function findPerformTesters(testId) {
  return makerAuthInstance.get(`/missions/${testId}/perform`);
}

function approveTesters(testId, approveData) {
  return makerAuthInstance.post(`/missions/${testId}/perform`, approveData);
}

function completeTesters(testId, completeData) {
  return makerAuthInstance.post(`/missions/${testId}/complete`, completeData);
}

function findCompleteTesters(testId) {
  return makerAuthInstance.get(`/missions/${testId}/perform/review`);
}

function createReviewTesters(makerId, reviewData) {
  return makerAuthInstance.post(
    `/${makerId}/missions/perform/review`,
    reviewData,
  );
}

function changeAccountNumberFromMaker(makerId, accountData) {
  return makerAuthInstance.patch(`/${makerId}/account`, accountData);
}

function changePointToCashFromMaker(makerId, pointData) {
  return makerAuthInstance.post(`/${makerId}/exchange/point`, pointData);
}

function changeCashToPointFromMaker(makerId, cashData) {
  return makerAuthInstance.post(`/${makerId}/exchange/cash`, cashData);
}

export {
  showPointFromMaker,
  createTest,
  updateTest,
  updateTestExceptImage,
  findMyTests,
  findApplyTesters,
  findPerformTesters,
  approveTesters,
  completeTesters,
  findCompleteTesters,
  createReviewTesters,
  changeAccountNumberFromMaker,
  changeCashToPointFromMaker,
  changePointToCashFromMaker,
};
