<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="1 / 1" :width="250"> </v-img>
    <v-card-text class="text-subtitle-1">
      <v-row>
        <v-col cols="12">
          {{ applyPeriodTest.makerNickname }} /
          {{ applyPeriodTest.company }}</v-col
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
            {{ applyPeriodTest.title }}
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">Reward Point:</span>
            {{ applyPeriodTest.reward }}P
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">신청/모집 인원:</span>
            {{ applyPeriodTest.apply }}/
            {{ applyPeriodTest.participantCapacity }}
          </div>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col
          cols="4"
          class="grey lighten-1 text-center text--primary font-weight-bold"
        >
          D-{{ applyPeriodTest.deadlineRemain }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'applyPeriodTest',
  props: {
    applyPeriodTest: {
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
      this.symbolImageRoot = getImage(this.applyPeriodTest.symbolImageRoot);
    },
    routeTestView() {
      console.log(this.applyPeriodTest.id);
      this.$router.push(`/test/${this.applyPeriodTest.id}/state/apply`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
