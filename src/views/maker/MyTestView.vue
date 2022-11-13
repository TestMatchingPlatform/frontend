<template>
  <v-container>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item.title">
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.title">
        <v-card class="pa-5" v-if="item.title === '신청기간의 Test'">
          <v-row>
            <v-col
              v-for="applyPeriodTest in item.component"
              :key="applyPeriodTest.id"
              cols="3"
            >
              <ApplyPeriodTest
                :applyPeriodTest="applyPeriodTest"
                @refresh="fetchMyTests"
              ></ApplyPeriodTest>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          class="pa-5"
          v-if="item.title === '신청기간 후 수행인원 선발이 필요한 Test'"
        >
          <v-row>
            <v-col
              v-for="approvePeriodTest in item.component"
              :key="approvePeriodTest.id"
              cols="3"
            >
              <ApprovePeriodTest
                :approvePeriodTest="approvePeriodTest"
                @refresh="fetchMyTests"
              ></ApprovePeriodTest>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5" v-if="item.title === '진행중인 Test'">
          <v-row>
            <v-col
              v-for="progressPeriodTest in item.component"
              :key="progressPeriodTest.id"
              cols="3"
            >
              <ProgressPeriodTest
                :progressPeriodTest="progressPeriodTest"
                @refresh="fetchMyTests"
              ></ProgressPeriodTest>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5" v-if="item.title === '완료한 Test'">
          <v-row>
            <v-col
              v-for="completePeriodTest in item.component"
              :key="completePeriodTest.id"
              cols="3"
            >
              <CompletePeriodTest
                :completePeriodTest="completePeriodTest"
                @refresh="fetchMyTests"
              ></CompletePeriodTest>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { findMyTests } from '@/api/makerAuth';

import ApprovePeriodTest from '@/components/test/maker/ApprovePeriodTest';
import ProgressPeriodTest from '@/components/test/maker/ProgressPeriodTest';
import CompletePeriodTest from '@/components/test/maker/CompletePeriodTest';
import ApplyPeriodTest from '@/components/test/maker/ApplyPeriodTest';

export default {
  name: 'MyTestView',
  components: {
    ApplyPeriodTest,
    CompletePeriodTest,
    ProgressPeriodTest,
    ApprovePeriodTest,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          title: '신청기간의 Test',
          component: [],
        },
        {
          title: '신청기간 후 수행인원 선발이 필요한 Test',
          component: [],
        },
        {
          title: '진행중인 Test',
          component: [],
        },
        {
          title: '완료한 Test',
          component: [],
        },
      ],
    };
  },
  methods: {
    async fetchMyTests() {
      const myTests = await findMyTests(this.$store.state.UserID);
      console.log(myTests.data);
      const myTestsData = myTests.data;
      this.items[0].component = myTestsData.applyPeriodTestList;
      this.items[1].component = myTestsData.approvePeriodTestList;
      this.items[2].component = myTestsData.progressPeriodTestList;
      this.items[3].component = myTestsData.completePeriodTestList;
    },
  },
  created() {
    this.fetchMyTests();
  },
};
</script>

<style scoped></style>
