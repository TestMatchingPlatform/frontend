<template>
  <v-container>
    <v-card class="pa-5 grey lighten-3">
      <v-form ref="form">
        <v-row align="center">
          <v-col cols="4">
            <v-text-field
              v-model="questName"
              label="Quest 검색하기"
              hint="퀘스트 이름을 검색하세요"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn>조회</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-select
            v-model="sort"
            :items="sortItems"
            item-text="state"
            item-value="value"
            label="정렬방식 변경"
            @change="changeSort"
            persistent-hint
            return-object
            dense
            outlined
          ></v-select>
        </v-row>
      </v-form>
    </v-card>
    <v-card class="pa-5">
      <v-row>
        <v-col v-for="simpleTest in tests" :key="simpleTest.id" cols="3">
          <SimpleTest
            :simpleTest="simpleTest"
            @refresh="initMockValue"
          ></SimpleTest>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { findDeadLineTests, findPopularTests } from '@/api/auth';
import SimpleTest from '@/components/SimpleTest';

export default {
  name: 'FindTestView',
  components: {
    SimpleTest,
  },
  data() {
    return {
      tests: [],
      questName: '',
      sortItems: [
        {
          state: '마감기간 순 정렬',
          value: 'deadLine',
        },
        {
          state: '인기 순 정렬',
          value: 'popular',
        },
        {
          state: '생성날짜 순 정렬',
          value: 'created',
        },
      ],
      sort: { state: 'created', value: '생성날짜 순 정렬' },
    };
  },
  methods: {
    async initMockValue() {
      const mockData = await findDeadLineTests();
      console.log(mockData.data);
      this.tests = mockData.data;
    },
    async changeSort() {
      console.log('event occur');
      switch (this.sort.value) {
        case 'popular':
          const mockData1 = await findPopularTests();
          console.log(mockData1.data);
          this.tests = mockData1.data;
          break;
        case 'deadLine':
          const mockData2 = await findDeadLineTests();
          console.log(mockData2.data);
          this.tests = mockData2.data;
          break;
      }
    },
  },
  created() {
    this.initMockValue();
  },
};
</script>

<style scoped></style>
