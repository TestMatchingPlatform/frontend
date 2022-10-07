<template>
  <v-container>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="blue"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card class="pa-5">
          <v-row>
            <v-col
              v-for="simpleTest in item.component"
              :key="simpleTest.id"
              cols="3"
            >
              <SimpleTest
                :simpleTest="simpleTest"
                @refresh="fetchDeadLineTests"
              ></SimpleTest>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import SimpleTest from '@/components/SimpleTest';
import { findDeadLineTests } from '@/api/auth';

export default {
  name: 'MyApplyView',
  components: { SimpleTest },
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
    async fetchDeadLineTests() {
      const deadLineTestsData = await findDeadLineTests();
      console.log(deadLineTestsData.data);
      this.items[0].component = deadLineTestsData.data;
      this.items[1].component = deadLineTestsData.data;
      this.items[2].component = deadLineTestsData.data;
    },
  },
  created() {
    this.fetchDeadLineTests();
  },
};
</script>

<style scoped></style>
