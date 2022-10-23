<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ progressPeriodTest.makerNickname }} /
          {{ progressPeriodTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ progressPeriodTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ progressPeriodTest.reward }}p
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
    routeTestView() {
      console.log(this.progressPeriodTest.id);
      this.$router.push(`/test/${this.progressPeriodTest.id}/state/progress`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
