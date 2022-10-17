<template>
  <v-row>
    <v-col
      v-for="applyTester in applyTesters.applyDTOList"
      :key="applyTester.id"
      cols="6"
    >
      <v-row align="center">
        <v-col cols="2">
          <v-checkbox v-model="approveId" :value="applyTester.id" dense>
          </v-checkbox>
        </v-col>
        <v-col cols="2">
          {{ applyTester.nickname }}
        </v-col>
        <v-col cols="2">
          {{ applyTester.status }}
        </v-col>
        <v-col cols="6">
          <v-btn color="success" @click="overlay = !overlay" dense>
            이전 정보보기
          </v-btn>
        </v-col>

        <v-overlay :value="overlay">
          <v-col
            v-for="beforeTest in applyTester.beforeTests"
            :key="beforeTest.title"
            dense
            cols="12"
          >
            <v-row>
              <v-col cols="3">
                {{ beforeTest.title }}
              </v-col>
              <v-col cols="2">
                {{ beforeTest.starPoint }}
              </v-col>
              <v-col cols="7">
                {{ beforeTest.comment }}
              </v-col>
            </v-row>
          </v-col>
          <v-btn color="success" @click="overlay = false"> 닫기 </v-btn>
        </v-overlay>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-btn @click="approveEvent">선정하기</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { approveTesters } from '@/api/auth';

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
      overlay: false,
    };
  },
  methods: {
    async approveEvent() {
      const request = {
        approveTesterList: this.approveId,
      };
      console.log(request);
      const response = await approveTesters(this.testId, request);
      console.log(response.data);
      await this.$router.push(`/makers/${this.$store.state.UserID}/tests`);
    },
  },
};
</script>

<style scoped></style>
