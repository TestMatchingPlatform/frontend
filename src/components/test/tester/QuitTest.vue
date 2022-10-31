<template>
  <v-card @click="routeTestView">
    <v-img :src="symbolImageRoot" :aspect-ratio="1 / 1" :width="250"> </v-img>
    <v-card-text class="text-subtitle-1">
      <v-row>
        <v-col cols="12">
          {{ quitTest.makerNickname }} / {{ quitTest.company }}</v-col
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
            <span class="text-subtitle-1">제목:</span> {{ quitTest.title }}
          </div>
        </v-col>
        <v-col cols="12" class="text--primary">
          <div class="font-weight-bold align-baseline">
            <span class="font-weight-medium">Reward Point:</span>
            {{ quitTest.reward }}P
          </div>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col
          cols="4"
          class="text-subtitle-2 text-center text--primary font-weight-bold"
        >
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
