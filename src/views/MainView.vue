<template>
  <v-container>
    <div class="pa-10">
      <v-row>
        <v-col cols="12">
          <span class="text-h3"
            >Tester Matching Platform에 오신것을 환영합니다.</span
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <span
            >Tester Matching Platform에서 한번에 여러 테스트 공모에 참여하고,
            현금처럼 사용할 수 있는 보상을 받아보세요.
          </span>
        </v-col>
        <v-col cols="4">
          <v-btn @click="routeRegisterToTester"> Tester로 시작하기</v-btn>
        </v-col>
      </v-row>
      <v-row class="pa-3">
        <v-col cols="6">
          <v-card>
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">마감임박 Test</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="n in 4" :key="n" cols="6"
                ><v-sheet
                  color="white"
                  elevation="1"
                  height="200"
                  width="200"
                ></v-sheet
              ></v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-row>
              <v-col cols="12">
                <div class="text-h5 pa-5">인기있는 Test</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="n in 4" :key="n" cols="6"
                ><v-sheet
                  color="white"
                  elevation="1"
                  height="200"
                  width="200"
                ></v-sheet
              ></v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="pa-10">
      <v-row>
        <v-col cols="12">
          <span class="text-h3">혹시 Test를 제작하고자 하시나요?.</span>
        </v-col>
      </v-row>
      <v-row>
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
              <v-row>
                <v-col cols="12">
                  <span class="text-h5 pa-5">등록된 Tester의 수</span>
                </v-col>
              </v-row>
              <v-sheet
                color="white"
                elevation="1"
                height="150"
                width="500"
              ></v-sheet>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-row>
                <v-col cols="12">
                  <span class="text-h5 pa-5">등록된 Maker의 수</span>
                </v-col>
              </v-row>
              <v-sheet
                color="white"
                elevation="1"
                height="150"
                width="500"
              ></v-sheet>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-row>
                <v-col cols="12">
                  <span class="text-h5 pa-5">신청중인 Test 개수</span>
                </v-col>
              </v-row>
              <v-sheet
                color="white"
                elevation="1"
                height="150"
                width="500"
              ></v-sheet>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-row>
                <v-col cols="12">
                  <span class="text-h5 pa-5">완료한 Test 개수</span>
                </v-col>
              </v-row>
              <v-sheet
                color="white"
                elevation="1"
                height="150"
                width="500"
              ></v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MainView',

  methods: {
    routeRegisterToTester() {
      this.$router.push('/register');
    },
    routeRegisterToMaker() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped></style>
