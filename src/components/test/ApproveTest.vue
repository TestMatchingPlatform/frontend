<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ approveTest.makerNickname }} / {{ approveTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ approveTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ approveTest.reward }}p
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          {{ approveTest.status }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/auth';

export default {
  name: 'ApproveTest',
  props: {
    approveTest: {
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
      this.symbolImageRoot = getImage(this.approveTest.symbolImageRoot);
    },
    routeTestView() {
      console.log(this.approveTest.id);
      this.$router.push(`/test/${this.approveTest.id}/state/approve`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
