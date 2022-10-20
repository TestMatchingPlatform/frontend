<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ approvePeriodTest.makerNickname }} /
          {{ approvePeriodTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ approvePeriodTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ approvePeriodTest.reward }}p
        </v-col>
        <v-col cols="12" class="text--primary">
          신청/모집 인원 : {{ approvePeriodTest.apply }}/{{
            approvePeriodTest.participantCapacity
          }}
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          {{ approvePeriodTest.state }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/auth';

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
    routeTestView() {
      console.log(this.approvePeriodTest.id);
      this.$router.push(`/test/${this.approvePeriodTest.id}/state/approve`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
