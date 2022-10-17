<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <div class="text-h4 primary--text">보유 포인트 현금으로 전환하기</div>
      </v-col>
      <v-col cols="4">
        <v-card class="grey lighten-1 pa-5">
          <v-card-text class="text-center text--primary"
            >보유 포인트
          </v-card-text>
          <v-card class="pa-5">
            <v-card-text class="text-center text--primary font-weight-bold"
              >{{ point }} Point
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="grey lighten-1 pa-5">
          <v-card-text class="text-center text--primary"
            >전환하고자 하는 계좌
          </v-card-text>
          <v-row>
            <v-col cols="8">
              <v-card class="pa-5">
                <v-card-text class="text-center text--primary font-weight-bold"
                  >{{ accountNumber }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-btn>계좌 등록 / 변경</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-spacer></v-spacer>
      </v-col>
      <v-col cols="12">
        <v-card class="grey lighten-1 pa-5">
          <v-card-text class="text-center text--primary">전환</v-card-text>
          <v-row>
            <v-col cols="6">
              <v-card class="pa-5">
                <v-text-field
                  v-model="changePoint"
                  :rules="changePointRules"
                  label="전환할 포인트 입력"
                  type="number"
                >
                </v-text-field>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="pa-5">
                <v-card-text class="text-center text--primary font-weight-bold"
                  >{{ getMoneyFromChangePoint }}원
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-btn class="align-center">전환하기</v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { showPointFromTester, showPointFromMaker } from '@/api/auth';

export default {
  name: 'MyPointView',
  data() {
    return {
      accountNumber: '',
      point: 0,
      changePoint: '',
      changePointRules: [
        v => !!v || '전환할 포인트를 입력해야 합니다.',
        v =>
          this.changePoint <= this.point ||
          '전환할 포인트가 가지고 있는 포인트보다 크면 안됩니다.',
        v => this.changePoint > 0 || '장난치지마세요',
      ],
    };
  },
  methods: {
    initMockValue() {
      this.accountNumber = '1234-4321-124323';
      this.point = 4500;
    },
    async initValue() {
      if (this.$store.state.UserType === 'tester') {
        const testerPoint = await showPointFromTester(this.$store.state.UserID);
        const testerPointData = testerPoint.data;
        console.log(testerPointData);
        this.accountNumber = testerPointData.accountNumber;
        this.point = testerPointData.point;
      } else if (this.$store.state.UserType === 'maker') {
        const makerPoint = await showPointFromMaker(this.$store.state.UserID);
        const makerPointData = makerPoint.data;
        console.log(makerPointData);
        this.accountNumber = makerPointData.accountNumber;
        this.point = makerPointData.point;
      }
    },
  },
  created() {
    this.initValue();
  },
  computed: {
    getMoneyFromChangePoint() {
      return this.changePoint * 0.95;
    },
  },
};
</script>

<style scoped></style>
