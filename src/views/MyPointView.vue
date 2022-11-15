<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <div class="text-h4 primary--text">보유 포인트 현금으로 전환하기</div>
      </v-col>
      <v-col cols="4">
        <v-sheet outlined color="primary" rounded>
          <v-card class="pa-5" outlined elevation="0">
            <v-card-text class="text-center text--primary text-h6"
              >보유 포인트
            </v-card-text>
            <v-card class="pa-5" outlined elevation="0">
              <v-card-text class="text-center text--primary font-weight-bold"
                >{{ point }} Point
              </v-card-text>
            </v-card>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="8">
        <v-sheet outlined color="primary" rounded>
          <v-card class="pa-5" outlined elevation="0">
            <v-card-text class="text-center text--primary text-h6"
              >등록 계좌
            </v-card-text>
            <v-row>
              <v-col cols="8">
                <v-card class="pa-5" outlined elevation="0">
                  <v-card-text
                    class="text-center text--primary font-weight-bold"
                    >{{ accountNumber }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-btn @click="changeAccount" class="secondary"
                  >계좌 등록 / 변경</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-spacer></v-spacer>
      </v-col>
      <v-col cols="12">
        <v-sheet outlined color="primary" rounded>
          <v-card class="pa-10" outlined elevation="0">
            <v-card-text class="text-center text--primary text-h5"
              >전환하기</v-card-text
            >
            <v-row justify="center">
              <v-col cols="6">
                <v-card class="pa-5" outlined elevation="0">
                  <v-text-field
                    v-model="changePoint"
                    :rules="changePointRules"
                    label="전환할 포인트를 입력해주세요."
                    type="number"
                  >
                  </v-text-field>
                </v-card>
              </v-col>

              <v-col cols="6">
                <v-card class="pa-5" outlined elevation="0">
                  <v-card-text
                    class="text-center text--primary font-weight-bold"
                    >{{ getMoneyFromChangePoint }}원
                  </v-card-text>
                </v-card>
              </v-col>
              <v-btn @click="exchangePoint" class="align-center secondary"
                >전환하기</v-btn
              >
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="12" v-if="this.$store.state.UserType === 'maker'">
        <v-sheet outlined color="primary" rounded>
          <v-card class="pa-10" outlined elevation="0">
            <v-card-text class="text-center text--primary text-h5"
              >충전하기</v-card-text
            >
            <v-row justify="center">
              <v-col cols="6">
                <v-card class="pa-5" outlined elevation="0">
                  <v-text-field
                    v-model="addPoint"
                    :rules="addPointRules"
                    label="충전할 포인트를 입력해주세요."
                    type="number"
                  >
                  </v-text-field>
                </v-card>
              </v-col>

              <v-col cols="6">
                <v-card class="pa-5" outlined elevation="0">
                  <v-card-text
                    class="text-center text--primary font-weight-bold"
                    >{{ addPoint }} Point
                  </v-card-text>
                </v-card>
              </v-col>
              <v-btn class="align-center secondary">충전하기</v-btn>
            </v-row>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { showPointFromMaker } from '@/api/makerAuth';
import {
  showPointFromTester,
  changeAccountNumber,
  changePointToCash,
} from '@/api/testerAuth';

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
        v => this.changePoint > 0 || '0보다 작으면 안됩니다.',
      ],
      addPoint: '',
      addPointRules: [v => this.addPoint > 0 || '0보다 작으면 안됩니다.'],
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
    async changeAccount() {
      const res = await this.$dialog.prompt({
        text: '계좌번호를 입력해주세요',
        title: '계좌 등록/변경',
      });
      if (res) {
        if (this.$store.state.UserType === 'tester') {
          const testerRequest = {
            account: res,
          };
          const response = await changeAccountNumber(
            this.$store.state.UserID,
            testerRequest,
          );
          this.accountNumber = res;
        }
      }
    },
    async exchangePoint() {
      const process = await this.$dialog.confirm({
        text: '정말로 전환할까요?',
        title: '포인트를 계좌로 이동',
      });
      if (process) {
        if (this.$store.state.UserType === 'tester') {
          const testerRequest = {
            point: this.changePoint,
          };
          changePointToCash(this.$store.state.UserID, testerRequest)
            .then(async response => {
              const text =
                '포인트를 성공적으로 전환했습니다. 계좌로 입금된 금액: ' +
                response.data.cash;
              await this.$dialog.notify.info(text, {
                timeout: 3000,
              });
            })
            .catch(async response => {
              console.log(response.response.data);
              const res = await this.$dialog.error({
                text: response.response.data.message[0],
                title: '포인트 전환 실패',
              });
              console.log(res);
            });
        }
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
