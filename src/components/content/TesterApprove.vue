<template>
  <v-row>
    <v-col v-for="applyTester in applyTesters" :key="applyTester.id" cols="6">
      <v-row align="center">
        <v-col cols="2">
          <v-checkbox v-model="approveId" :value="applyTester.id" dense>
          </v-checkbox>
        </v-col>
        <v-col cols="2" class="text-h6">
          {{ applyTester.nickname }}
        </v-col>
        <v-col cols="2" class="font-weight-bold">
          {{ applyTester.status }}
        </v-col>
        <v-col cols="6">
          <v-btn color="success" @click="changeOverlay(applyTester)" dense>
            이전 정보보기
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-btn @click="approveEvent">선정하기</v-btn>
    </v-col>

    <v-overlay :value="overlay" :opacity="0.8">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="3">
            <div>Title</div>
          </v-col>
          <v-col cols="3">
            <div>평점</div>
          </v-col>
          <v-col cols="6">
            <div>리뷰 내용</div>
          </v-col>
          <v-col
            v-for="beforeTest in approveTester.beforeMissions"
            :key="beforeTest.title"
            cols="12"
          >
            <v-card class="grey darken-3 pa-1" outlined>
              <v-row justify="center" align="center">
                <v-col cols="3">
                  <div>
                    {{ beforeTest.title }}
                  </div>
                </v-col>
                <v-col cols="3">
                  <div>
                    <v-rating
                      background-color="grey lighten-1"
                      color="green"
                      length="5"
                      readonly
                      size="20"
                      :value="beforeTest.starPoint"
                    ></v-rating>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    {{ beforeTest.comment }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-btn color="success" @click="overlay = false"> 닫기 </v-btn>
        </v-row>
      </v-container>
    </v-overlay>
  </v-row>
</template>

<script>
import { approveTesters } from '@/api/makerAuth';

export default {
  name: 'TesterApprove',
  props: {
    applyTesters: {
      type: Object,
      required: true,
    },
    testId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      approveId: [],
      approveTester: {},
      overlay: false,
    };
  },
  methods: {
    async approveEvent() {
      const request = {
        approveTesterIdList: this.approveId,
      };
      console.log(request);
      const res = await this.$dialog.warning({
        text: '한번 승인절차를 거친 이후에는 수정할 수 없습니다. 정말 이렇게 선정할까요?',
        title: '경고',
        actions: {
          false: 'No',
          true: {
            color: 'green',
            text: '진행하겠습니다.',
          },
        },
      });
      if (res === true) {
        const response = await approveTesters(this.testId, request);
        console.log(response.data);
        await this.$router.push(`/makers/${this.$store.state.UserID}/tests`);
      }
    },
    changeOverlay(approveTester) {
      this.overlay = true;
      this.approveTester = approveTester;
      console.log(approveTester);
    },
  },
};
</script>

<style scoped></style>
