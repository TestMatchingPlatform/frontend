<template>
  <v-container style="padding-top: 50px">
    <div class="pa-10">
      <v-row>
        <v-col cols="12">
          <div class="text-center text-h3">
            <span class="font-weight-bold">게임</span><span>부터 </span>
            <span class="font-weight-bold">어플리케이션 서비스</span
            ><span
              >까지 <br />
              모든 TEST 신청은
            </span>
            <span class="font-weight-bold">BM</span><span>으로</span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card class="pa-5 elevation-0">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">마감임박 Test</div>
              </v-col>
              <v-col
                v-for="simpleTest in deadLineTests"
                :key="simpleTest.id"
                cols="6"
              >
                <SimpleTest
                  :simpleTest="simpleTest"
                  @refresh="fetchDeadLineTests"
                ></SimpleTest>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-5 elevation-0">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">인기있는 Test</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-for="simpleTest in popularTests"
                :key="simpleTest.id"
                cols="6"
              >
                <SimpleTest
                  :simpleTest="simpleTest"
                  @refresh="fetchPopularTests"
                ></SimpleTest>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="pa-10">
      <v-row>
        <v-col cols="12">
          <span class="text-h3">혹시 Test를 제작하고자 하시나요?</span>
        </v-col>
        <v-col cols="12">
          <span
            >간편하고 효율적으로 Tester들을 모으고 기능들을 시험해보세요.
          </span>
        </v-col>
      </v-row>
      <v-card class="pa-3 elevation-0">
        <v-row>
          <v-col cols="6">
            <v-card>
              <div class="text-h5 pa-5">등록된 Tester의 수</div>
              <div class="text-h3 text-center ma-5">{{ testerCount }}명</div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <div class="text-h5 pa-5">등록된 Maker의 수</div>
              <div class="text-h3 text-center ma-5">{{ makerCount }}명</div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <div class="text-h5 pa-5">신청중인 Test 개수</div>
              <div class="text-h3 text-center ma-5">
                {{ continueTestCount }}개
              </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <div class="text-h5 pa-5">완료한 Test 개수</div>
              <div class="text-h3 text-center ma-5">
                {{ completeTestCount }}개
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import SimpleTest from '@/components/test/SimpleTest';
import { findCounts, findDeadLineTests, findPopularTests } from '@/api/noAuth';

export default {
  name: 'MainView',
  components: { SimpleTest },
  data() {
    return {
      testerCount: 0,
      makerCount: 0,
      continueTestCount: 0,
      completeTestCount: 0,
      deadLineTests: [],
      popularTests: [],
    };
  },
  methods: {
    async initValue() {
      const counts = await findCounts();
      console.log(counts.data);
      this.testerCount = counts.data.testerCount;
      this.makerCount = counts.data.makerCount;
      this.continueTestCount = counts.data.continueTestCount;
      this.completeTestCount = counts.data.completeTestCount;
    },
    async fetchDeadLineTests() {
      const deadLineTestsData = await findDeadLineTests();
      console.log(deadLineTestsData.data);
      this.deadLineTests = deadLineTestsData.data;
    },
    async fetchPopularTests() {
      const popularTestsData = await findPopularTests();
      console.log(popularTestsData.data);
      this.popularTests = popularTestsData.data;
    },
  },
  created() {
    this.initValue();
    this.fetchDeadLineTests();
    this.fetchPopularTests();
  },
};
</script>

<style scoped></style>
