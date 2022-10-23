<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="16 / 9" :width="250"> </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          {{ simpleTest.makerNickname }} / {{ simpleTest.company }}</v-col
        >
        <v-col cols="12" class="text--primary">
          title : {{ simpleTest.title }}
        </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ simpleTest.reward }}p
        </v-col>
        <v-col cols="12" class="text--primary">
          신청/모집 인원 : {{ simpleTest.apply }}/{{
            simpleTest.participantCapacity
          }}
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          D-{{ simpleTest.deadlineRemain }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { getImage } from '@/api/noAuth';

export default {
  name: 'SimpleTest',
  props: {
    simpleTest: {
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
      this.symbolImageRoot = getImage(this.simpleTest.symbolImageRoot);
    },
    routeTestView() {
      console.log(this.simpleTest.id);
      this.$router.push(`/test/${this.simpleTest.id}/state/require`);
    },
  },
  created() {
    // this.insertMockValue();
    this.makeImageGetURL();
  },
};
</script>

<style scoped></style>
