<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ completePeriodTest.makerNickname }} /
          {{ completePeriodTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ completePeriodTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ completePeriodTest.reward }}p
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          {{ completePeriodTest.state }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'completePeriodTest',
  props: {
    completePeriodTest: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      symbolImageRoot: '',
    };
  },

  methods: {
    insertMockValue() {
      this.symbolImageRoot =
        'https://cdn.vuetifyjs.com/images/parallax/material.jpg';
    },
    makeImageGetURL() {
      this.symbolImageRoot = getImage(this.completePeriodTest.symbolImageRoot);
    },
    async routeTestView() {
      if (this.completePeriodTest.state === 'write Review') {
        await this.$dialog.error({
          title: '중복 리뷰 작성 방지',
          text: '이미 리뷰를 선정하셨습니다.',
        });
      } else {
        await this.$router.push(
          `/test/${this.completePeriodTest.id}/state/complete`,
        );
      }
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
