<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="1 / 1" :width="250"></v-img>
    <v-card-text class="text-subtitle-1">
      <v-row>
        <v-col cols="12">
          {{ progressPeriodTest.makerNickname }} /
          {{ progressPeriodTest.company }}
        </v-col>
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
            {{ progressPeriodTest.title }}
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">Reward Point:</span>
            {{ progressPeriodTest.reward }}P
          </div>
        </v-col>
        <v-col cols="6"></v-col>
        <v-col
          cols="6"
          class="yellow lighten-3 text-center font-weight-bold text--primary"
        >
          {{ progressPeriodTest.state }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'progressPeriodTest',
  props: {
    progressPeriodTest: {
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
      this.symbolImageRoot = getImage(this.progressPeriodTest.symbolImageRoot);
    },
    async routeTestView() {
      console.log(this.progressPeriodTest.id);
      if (this.progressPeriodTest.state === '전원 수행완료') {
        await this.$dialog.error({
          title: '중복 선정 방지',
          text: '이미 완료처리를 진행하셨습니다.',
        });
      } else {
        await this.$router.push(
          `/test/${this.progressPeriodTest.id}/state/progress`,
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
