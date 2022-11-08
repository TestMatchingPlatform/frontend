<template>
  <v-container>
    <v-row class="ma-5 pa-3">
      <v-col cols="2">
        <v-card class="grey lighten-2 text-h4 text-center" v-if="isApply"
          >D-{{ deadLine }}
        </v-card>
        <v-card class="grey lighten-2 text-h4 text-center" v-else
          >{{ state }}
        </v-card>
      </v-col>
      <v-col cols="10">
        <div class="text-h4">{{ title }}</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-5 pa-3">
      <v-col cols="6">
        <v-img :src="symbolImageURL" :aspect-ratio="1 / 1" :width="500"></v-img>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="3">
            <div>주최/주관</div>
          </v-col>
          <v-col cols="9">
            <div>{{ makerNickname }} / {{ company }}</div>
          </v-col>
          <v-col cols="3">
            <div>지원기간</div>
          </v-col>
          <v-col cols="9">
            <div>{{ recruitmentTimeStart }} ~ {{ recruitmentTimeLimit }}</div>
          </v-col>
          <v-col cols="3">
            <div>지급 포인트</div>
          </v-col>
          <v-col cols="9">
            <div>{{ reward }}P</div>
          </v-col>
          <v-col cols="3">
            <div>활동 기간</div>
          </v-col>
          <v-col cols="9">
            <div>{{ durationTimeStart }} ~ {{ durationTimeLimit }}</div>
          </v-col>
          <v-col cols="3">
            <div>신청/모집인원</div>
          </v-col>
          <v-col cols="9">
            <div>{{ apply }} / {{ participantCapacity }}</div>
          </v-col>
        </v-row>

        <v-col cols="6">
          <v-btn class="primary" v-if="isApply" @click="testerApply"
            >신청하기</v-btn
          >
          <v-btn class="primary" v-else-if="isTesterApply">신청 취소하기</v-btn>
          <v-btn class="primary" v-else-if="isTesterApprove"> 미구현 </v-btn>
          <v-btn
            class="primary"
            v-else-if="isTesterComplete"
            @click="showReviewMaker"
            >리뷰 작성하기</v-btn
          >
          <v-btn class="primary" v-else-if="isMakerApply" @click="makerTestFix"
            >수정하기</v-btn
          >
          <v-btn
            class="primary"
            v-else-if="isMakerApprove"
            @click="showApplyTesters"
            >테스터 선정하기</v-btn
          >
          <v-btn
            class="primary"
            v-else-if="isMakerProgress"
            @click="showPerformTesters"
            >테스터 수행인원 정보보기 + 완료 처리하기</v-btn
          >
          <v-btn
            class="primary"
            v-else-if="isMakerComplete"
            @click="showReviewTesters"
            >테스터 리뷰 작성하기</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
    <v-col cols="12" v-if="this.contentState === ''">
      <v-divider></v-divider>
      <div class="text-h3 ma-5">상세 설명</div>
      <div>{{ content }}</div>
    </v-col>
    <v-col cols="12" v-else-if="this.contentState === 'approve'">
      <v-divider></v-divider>
      <div class="text-h3 ma-5">신청자 명단</div>
      <TesterApprove :applyTesters="applyTesters" :testId="id"></TesterApprove>
    </v-col>
    <v-col cols="12" v-else-if="this.contentState === 'perform'">
      <v-divider></v-divider>
      <div class="text-h3 ma-5">수행인원 명단</div>
      <TesterPerform
        :performTesters="performTesters"
        :testId="id"
      ></TesterPerform>
    </v-col>
    <v-col cols="12" v-else-if="this.contentState === 'reviewFromMaker'">
      <v-divider></v-divider>
      <div class="text-h3 ma-5">수행인원 명단</div>
      <TesterReview :completeTesters="completeTesters"></TesterReview>
    </v-col>
    <v-col cols="12" v-else-if="this.contentState === 'reviewFromTester'">
      <v-divider></v-divider>
      <div class="text-h3 ma-5">Maker Review 작성</div>
      <MakerReview :id="applyInformationId"></MakerReview>
    </v-col>
  </v-container>
</template>

<script>
import { findDetailTest, getImage } from '@/api/noAuth';

import {
  findApplyTesters,
  findPerformTesters,
  findCompleteTesters,
} from '@/api/makerAuth';

import { applyTest, findApplyInformationId } from '@/api/testerAuth';

import TesterApprove from '@/components/content/TesterApprove';
import TesterPerform from '@/components/content/TesterPerform';
import TesterReview from '@/components/content/TesterReview';
import MakerReview from '@/components/content/MakerReview';

export default {
  name: 'TestView',
  components: { TesterReview, TesterPerform, TesterApprove, MakerReview },
  data() {
    return {
      id: '',
      deadLine: 0,
      title: '',
      makerNickname: '',
      company: '',
      recruitmentTimeStart: '',
      recruitmentTimeLimit: '',
      durationTimeStart: '',
      durationTimeLimit: '',
      participantCapacity: 0,
      apply: 0,
      reward: 0,
      content: '',
      symbolImageURL: '',
      state: '',
      contentState: '',
      applyTesters: [],
      performTesters: [],
      completeTesters: [],
      applyInformationId: '',
    };
  },
  methods: {
    async insertValue() {
      const testId = this.$route.params.id;
      this.state = this.$route.params.state;

      console.log(testId);
      const detailTest = await findDetailTest(testId);
      console.log(detailTest);
      const detailTestData = detailTest.data;
      console.log(detailTestData);
      this.id = detailTestData.id;
      this.deadLine = detailTestData.deadLine;
      this.title = detailTestData.title;
      this.makerNickname = detailTestData.makerNickname;
      this.company = detailTestData.company;
      this.recruitmentTimeStart = detailTestData.recruitmentTimeStart;
      this.recruitmentTimeLimit = detailTestData.recruitmentTimeLimit;
      this.durationTimeStart = detailTestData.durationTimeStart;
      this.durationTimeLimit = detailTestData.durationTimeLimit;
      this.reward = detailTestData.reward;
      this.participantCapacity = detailTestData.participantCapacity;
      this.apply = detailTestData.apply;
      console.log(this.apply);
      this.content = detailTestData.content;
      this.symbolImageURL = getImage(detailTestData.symbolImageRoot);
    },
    async testerApply() {
      const testData = {
        testId: this.id,
      };
      const applyResponse = await applyTest(this.$store.state.UserID, testData);
      const applyResponseData = applyResponse.data;
      console.log(applyResponseData);
      await this.$router.push(`/testers/${this.$store.state.UserID}/tests`);
    },
    async makerTestFix() {
      await this.$router.push(`/tests/${this.id}/fix`);
    },
    async showApplyTesters() {
      const applyTestersResponse = await findApplyTesters(this.id);
      console.log(applyTestersResponse.data);
      this.applyTesters = applyTestersResponse.data;
      this.contentState = 'approve';
    },
    async showPerformTesters() {
      const performTesterResponse = await findPerformTesters(this.id);
      console.log(performTesterResponse.data);
      this.performTesters = performTesterResponse.data;
      this.contentState = 'perform';
    },
    async showReviewTesters() {
      const completeTesterResponse = await findCompleteTesters(this.id);
      console.log(completeTesterResponse.data);
      this.completeTesters = completeTesterResponse.data;
      this.contentState = 'reviewFromMaker';
    },
    async showReviewMaker() {
      const applyInformationResponse = await findApplyInformationId(
        this.$store.state.UserID,
        this.id,
      );
      console.log(applyInformationResponse.data);
      this.applyInformationId = applyInformationResponse.data;
      this.contentState = 'reviewFromTester';
    },
  },
  created() {
    this.insertValue();
  },
  computed: {
    isApply() {
      return (
        this.$store.state.UserType === 'tester' && this.state === 'require'
      );
    },
    isTesterApply() {
      return this.$store.state.UserType === 'tester' && this.state === 'apply';
    },
    isTesterApprove() {
      return (
        this.$store.state.UserType === 'tester' && this.state === 'approve'
      );
    },
    isTesterComplete() {
      return (
        this.$store.state.UserType === 'tester' && this.state === 'complete'
      );
    },
    isMakerApply() {
      return this.$store.state.UserType === 'maker' && this.state === 'apply';
    },
    isMakerApprove() {
      return this.$store.state.UserType === 'maker' && this.state === 'approve';
    },
    isMakerProgress() {
      return (
        this.$store.state.UserType === 'maker' && this.state === 'progress'
      );
    },
    isMakerComplete() {
      return (
        this.$store.state.UserType === 'maker' && this.state === 'complete'
      );
    },
  },
};
</script>

<style scoped></style>
