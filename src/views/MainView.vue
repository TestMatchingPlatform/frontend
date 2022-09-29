<template>
  <v-container>
    <div class="pa-10">
      <v-row>
        <v-col cols="12">
          <span class="text-h3"
            >Tester Matching Platform에 오신것을 환영합니다.</span
          >
        </v-col>
        <v-col cols="8">
          <span
            >Tester Matching Platform에서 한번에 여러 테스트 공모에 참여하고,
            현금처럼 사용할 수 있는 보상을 받아보세요.
          </span>
        </v-col>
        <v-col cols="4">
          <v-btn @click="routeRegisterToTester"> Tester로 시작하기</v-btn>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-5">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">마감임박 Test</div>
              </v-col>
              <v-col v-for="n in 4" :key="n" cols="6">
                <SimpleTest></SimpleTest>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-5">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">인기있는 Test</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="n in 4" :key="n" cols="6">
                <SimpleTest></SimpleTest>
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
        <v-col cols="8">
          <span
            >간편하고 효율적으로 Tester들을 모으고 기능들을 시험해보세요
          </span>
        </v-col>
        <v-col cols="4">
          <v-btn @click="routeRegisterToMaker"> Maker로 시작하기</v-btn>
        </v-col>
      </v-row>
      <v-card class="pa-3">
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
import SimpleTest from '@/components/SimpleTest';
export default {
  name: 'MainView',
  components: { SimpleTest },
  data() {
    return {
      testerCount: 0,
      makerCount: 0,
      continueTestCount: 0,
      completeTestCount: 0,
    };
  },
  methods: {
    routeRegisterToTester() {
      this.$router.push('/register');
    },
    routeRegisterToMaker() {
      this.$router.push('/register');
    },
    initMockValue() {
      this.testerCount = 100;
      this.makerCount = 50;
      this.continueTestCount = 20;
      this.completeTestCount = 5;
    },
  },
  created() {
    this.initMockValue();
  },
};
</script>

<style scoped></style>
