<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ quitTest.makerNickname }} / {{ quitTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ quitTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ quitTest.reward }}p
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          {{ quitTest.status }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'quitTest',
  props: {
    quitTest: {
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
      this.symbolImageRoot = getImage(this.quitTest.symbolImageRoot);
    },
    routeTestView() {
      console.log(this.quitTest.id);
      this.$router.push(`/test/${this.quitTest.id}/state/complete`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
