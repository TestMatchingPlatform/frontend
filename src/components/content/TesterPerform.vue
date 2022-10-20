<template>
  <v-row>
    <v-col
      v-for="performTester in performTesters.performDTOList"
      :key="performTester.id"
      cols="12"
    >
      <v-row align="center">
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
        completeTesterIdDTOList: this.performId,
      };
      console.log(request);
      const response = await completeTesters(this.testId, request);
      console.log(response.data);
      await this.$router.push(`makers/${this.$store.state.UserID}/tests`);
    },
  },
};
</script>

<style scoped></style>
