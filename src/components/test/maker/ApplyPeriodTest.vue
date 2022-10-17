<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ applyPeriodTest.makerNickname }} /
          {{ applyPeriodTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ applyPeriodTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ applyPeriodTest.reward }}p
        </v-col>
        <v-col cols="12" class="text--primary">
          신청/모집 인원 : {{ applyPeriodTest.apply }}/{{
            applyPeriodTest.participantCapacity
          }}
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          D-{{ applyPeriodTest.deadlineRemain }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/auth';

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
