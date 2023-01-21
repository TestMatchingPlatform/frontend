import { testerAuthInstance } from '@/api/index';

function findDeadlineTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/missions/deadline`);
}

function findCreatedTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/missions/created`);
}

function findPopularTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/missions/popular`);
}

function findSearchTests(testerId, keyword) {
  return testerAuthInstance.get(`/${testerId}/missions?title=${keyword}`);
}

function showPointFromTester(testerId) {
  return testerAuthInstance.get(`/${testerId}/exchange`);
}

function findApplyTests(testerId) {
  return testerAuthInstance.get(`/${testerId}/apply`);
}

function applyTest(testerId, missionId, testData) {
  return testerAuthInstance.post(
    `/${testerId}/missions/${missionId}/apply`,
    testData,
  );
}

function cancelApplyTest(testerId, missionId) {
  return testerAuthInstance.delete(`/${testerId}/missions/${missionId}/apply`);
}

function findApplyInformationId(testerId, testId) {
  return testerAuthInstance.get(`/${testerId}/missions/${testId}`);
}

function createMakerReview(applyId, makerReviewData) {
  console.log(applyId);
  return testerAuthInstance.post(`/apply/${applyId}/review`, makerReviewData);
}

function changeAccountNumberFromTester(testerId, accountData) {
  return testerAuthInstance.patch(`/${testerId}/account`, accountData);
}

function changePointToCashFromTester(testerId, pointData) {
  return testerAuthInstance.post(`/${testerId}/exchange/point`, pointData);
}

export {
  applyTest,
  cancelApplyTest,
  findApplyTests,
  findPopularTests,
  showPointFromTester,
  findApplyInformationId,
  createMakerReview,
  findDeadlineTests,
  findCreatedTests,
  findSearchTests,
  changeAccountNumberFromTester,
  changePointToCashFromTester,
};
