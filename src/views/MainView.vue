<template>
  <v-container>
    <div class="blank-10">
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center text-h3">
            <span class="font-weight-bold">게임</span><span>부터 </span>
            <span class="font-weight-bold">어플리케이션 서비스</span
            ><span
              >까지 <br />
              모든 TEST 신청은
            </span>
            <span class="font-weight-bold teal--text text--accent-5">BM</span
            ><span>으로</span>
          </div>
        </v-col>
        <v-col cols="5" class="blank-10">
          <v-card>
            <v-row justify="center">
              <v-col cols="8">
                <v-img src="@/assets/maker_introduce.png" class="fill-height">
                </v-img>
              </v-col>

              <v-col cols="12">
                <v-card-title class="justify-center">
                  <span class="text-h5 font-weight-bold">Maker로 시작하기</span>
                  <span class="text-h5"> 는 이런 이점이 있습니다. </span>
                </v-card-title>
                <v-card-text
                  class="text-subtitle-1 pa-3 teal--text text--accent-5"
                >
                  <v-row>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        플랫폼 내부에서 Tester를 선발하는 절차를 통해서 인력
                        낭비를 줄일 수 있습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        수행인원 선정 시, 신청 인원들의 이전 수행에 대한 리뷰를
                        확인할 수 있습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        Reward 제공을 플랫폼 내 재화로 통일하고, 그에 따라
                        리워드 지급을 간소화할 수 있습니다.
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="5" class="blank-10">
          <v-card>
            <v-row justify="center">
              <v-col cols="8">
                <v-img src="@/assets/tester_introduce.png" class="fill-height">
                </v-img>
              </v-col>
              <v-col cols="12">
                <v-card-title class="justify-center">
                  <span class="text-h5 font-weight-bold"
                    >Tester로 시작하기</span
                  >
                  <span class="text-h5"> 는 이런 이점이 있습니다. </span>
                </v-card-title>
                <v-card-text
                  class="text-subtitle-1 pa-3 teal--text text--accent-5"
                >
                  <v-row>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        테스터 모집 공모를 플랫폼 내부에서 보고 바로 신청할 수
                        있습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        테스터 모집 시, 경쟁률을 파악해서 보다 선정이 잘 될 수
                        있는 테스트를 신청할 수 있습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> done </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        플랫폼 재화인 Point를 지급 받고, 이를 현금으로 전환해서
                        자유롭게 사용할 수 있습니다.
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="blank-10">
      <v-row>
        <v-col cols="6">
          <v-card class="pa-5 elevation-0">
            <v-row>
              <v-col cols="12">
                <div class="text-h5 font-weight-bold pa-5">마감임박 Test</div>
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
                <div class="text-h5 font-weight-bold pa-5">인기있는 Test</div>
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

    <div class="blank-10">
      <v-row>
        <v-col cols="12">
          <span class="text-h3"
            >현재
            <span class="font-weight-bold teal--text text--accent-5">BM</span>을
            이용하는 사람들</span
          >
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

<style scoped>
.blank-10 {
  padding-top: 10em;
}
</style>
