<template>
  <v-container>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="blue"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item.title">
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.title">
        <v-card class="pa-5" v-if="item.title === '신청한 Test'">
          <v-row>
            <v-col
              v-for="applyTest in item.component"
              :key="applyTest.id"
              cols="3"
            >
              <ApplyTest
                :applyTest="applyTest"
                @refresh="fetchApplyTests"
              ></ApplyTest>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5" v-if="item.title === '선정된 Test'">
          <v-row>
            <v-col
              v-for="approveTest in item.component"
              :key="approveTest.id"
              cols="3"
            >
              <ApproveTest
                :approveTest="approveTest"
                @refresh="fetchApplyTests"
              ></ApproveTest>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5" v-if="item.title === '완료한 Test'">
          <v-row>
            <v-col
              v-for="quitTest in item.component"
              :key="quitTest.id"
              cols="3"
            >
              <QuitTest
                :quitTest="quitTest"
                @refresh="fetchApplyTests"
              ></QuitTest>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { findApplyTests } from '@/api/auth';
import ApproveTest from '@/components/test/ApproveTest';
import QuitTest from '@/components/test/QuitTest';
import ApplyTest from '@/components/test/ApplyTest';

export default {
  name: 'MyApplyView',
  components: { QuitTest, ApproveTest, ApplyTest },
  data() {
    return {
      tab: null,
      items: [
        {
          title: '신청한 Test',
          component: [],
        },
        {
          title: '선정된 Test',
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
    async fetchMockTests() {
      const deadLineTestsData = await findDeadLineTests();
      console.log(deadLineTestsData.data);
      this.items[0].component = deadLineTestsData.data;
      this.items[1].component = deadLineTestsData.data;
      this.items[2].component = deadLineTestsData.data;
    },
    async fetchApplyTests() {
      const applyTests = await findApplyTests(this.$store.state.UserID);
      console.log(applyTests.data);
      const applyTestsData = applyTests.data;
      this.items[0].component = applyTestsData.applyTestListResponseList;
      this.items[1].component = applyTestsData.approveTestListResponseList;
      this.items[2].component = applyTestsData.quitTestListResponseList;
    },
  },
  created() {
    // this.fetchMockTests();
    this.fetchApplyTests();
  },
};
</script>

<style scoped></style>
