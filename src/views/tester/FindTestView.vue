<template>
  <v-container>
    <v-card class="pa-5 grey lighten-3">
      <v-form ref="form">
        <v-row align="center">
          <v-col cols="4">
            <v-text-field
              v-model="keyword"
              label="Quest 검색하기"
              hint="퀘스트 이름을 검색하세요"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn @click="searchTests">조회</v-btn>
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
import {
  findDeadlineTests,
  findCreatedTests,
  findSearchTests,
  findPopularTests,
} from '@/api/testerAuth';
import SimpleTest from '@/components/test/SimpleTest';

export default {
  name: 'FindTestView',
  components: {
    SimpleTest,
  },
  data() {
    return {
      tests: [],
      keyword: '',
      sortItems: [
        {
          state: '마감기간 순 정렬',
          value: 'deadline',
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
      sort: { state: 'deadline', value: '마감기간 순 정렬' },
    };
  },
  methods: {
    async initMockValue() {
      const deadlineTests = await findDeadlineTests(this.$store.state.UserID);
      console.log(deadlineTests.data);
      this.tests = deadlineTests.data.dtoList;
    },
    async searchTests() {
      console.log('searching event occur');
      const searchingTests = await findSearchTests(
        this.$store.state.UserID,
        this.keyword,
      );
      console.log(searchingTests.data);
      this.tests = searchingTests.data;
    },
    async changeSort() {
      console.log('event occur');
      switch (this.sort.value) {
        case 'popular':
          const popularTests = await findPopularTests(this.$store.state.UserID);
          console.log(popularTests.data);
          this.tests = popularTests.data;
          break;
        case 'deadline':
          const deadlineTests = await findDeadlineTests(
            this.$store.state.UserID,
          );
          console.log(deadlineTests.data);
          this.tests = deadlineTests.data;
          break;
        case 'created':
          const createdTests = await findCreatedTests(this.$store.state.UserID);
          console.log(createdTests.data);
          this.tests = createdTests.data;
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
