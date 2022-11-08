<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="1 / 1" :width="250"> </v-img>
    <v-card-text class="text-subtitle-1">
      <v-row>
        <v-col cols="12">
          {{ completePeriodTest.makerNickname }} /
          {{ completePeriodTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          <div
            class="text-subtitle-1 font-weight-bold align-baseline"
            style="
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            "
          >
            <span class="text-subtitle-1">제목:</span>
            {{ completePeriodTest.title }}
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">Reward Point:</span>
            {{ completePeriodTest.reward }}P
          </div>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col
          cols="4"
          class="grey lighten-1 text-center font-weight-bold text--primary"
        >
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
      if (this.completePeriodTest.state === 'Write Review') {
        await this.$dialog.error({
          title: '중복 리뷰 작성 방지',
          text: '이미 리뷰를 작성하셨습니다.',
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
