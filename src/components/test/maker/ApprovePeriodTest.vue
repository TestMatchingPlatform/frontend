<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="1 / 1" :width="250"> </v-img>
    <v-card-text class="text-subtitle-1">
      <v-row>
        <v-col cols="12">
          {{ approvePeriodTest.makerNickname }} /
          {{ approvePeriodTest.company }}</v-col
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
            {{ approvePeriodTest.title }}
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">Reward Point:</span>
            {{ approvePeriodTest.reward }}P
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">신청/모집 인원:</span>
            {{ approvePeriodTest.apply }}/
            {{ approvePeriodTest.participantCapacity }}
          </div>
        </v-col>
        <v-col cols="6"></v-col>
        <v-col
          cols="6"
          class="yellow lighten-3 text-center text--primary font-weight-bold"
        >
          {{ approvePeriodTest.state }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'approvePeriodTest',
  props: {
    approvePeriodTest: {
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
      this.symbolImageRoot = getImage(this.approvePeriodTest.symbolImageRoot);
    },
    async routeTestView() {
      console.log(this.approvePeriodTest.id);
      if (this.approvePeriodTest.state === '승인') {
        await this.$dialog.error({
          title: '중복 선정 방지',
          text: '이미 Tester를 선정하셨습니다.',
        });
      } else {
        await this.$router.push(
          `/test/${this.approvePeriodTest.id}/state/approve`,
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
