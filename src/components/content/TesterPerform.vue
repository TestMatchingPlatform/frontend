<template>
  <v-row>
    <v-col col="12">
      <v-row align="center" class="teal--text font-weight-bold">
        <v-col cols="2">수행 Check Box</v-col>
        <v-col cols="2">Nickname</v-col>
        <v-col cols="3">개인 전화</v-col>
        <v-col cols="3">이메일</v-col>
        <v-col cols="2">수행 상태</v-col>
      </v-row>
    </v-col>
    <v-col
      v-for="performTester in performTesters"
      :key="performTester.id"
      cols="12"
    >
      <v-row align="center" class="font-weight-bold">
        <v-col cols="2">
          <v-checkbox v-model="performId" :value="performTester.id" dense>
          </v-checkbox>
        </v-col>
        <v-col cols="2">{{ performTester.nickname }}</v-col>
        <v-col cols="3">{{ performTester.phoneNumber }} </v-col
        ><v-col cols="3">{{ performTester.email }}</v-col>
        <v-col cols="2">{{ performTester.status }}</v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-btn @click="performEvent">완료하기</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { completeTesters } from '@/api/makerAuth';

export default {
  name: 'TesterPerform',
  props: {
    performTesters: {
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
      performId: [],
    };
  },
  methods: {
    async performEvent() {
      const request = {
        approveTestIdList: this.performId,
      };
      console.log(request);

      completeTesters(this.testId, request)
        .then(async response => {
          console.log(response.data);
          await this.$router.push(`/makers/${this.$store.state.UserID}/tests`);
        })
        .catch(async response => {
          console.log(response);
          const res = await this.$dialog.error({
            title: '중복된 완료처리',
            text: response.response.data.message[0],
          });
        });
    },
  },
};
</script>

<style scoped></style>
