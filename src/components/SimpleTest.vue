<template>
  <v-card @click="routeTestView">
    <v-img :src="symbol_image_root" :aspect-ratio="16 / 9" :width="250">
    </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="12"> {{ maker_nickname }} / {{ company }}</v-col>
        <v-col cols="12" class="text--primary"> title : {{ title }} </v-col>
        <v-col cols="12" class="text--primary">
          지급 Point : {{ reward }}p
        </v-col>
        <v-col cols="12" class="text--primary">
          신청/모집 인원 : {{ apply }}/{{ participant_capacity }}
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4" class="grey lighten-1 text-center text--primary">
          D-{{ deadline_remain }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SimpleTest',
  data() {
    return {
      id: null,
      title: '',
      maker_nickname: '',
      company: '',
      deadline_remain: null,
      reward: null,
      apply: null,
      participant_capacity: null,
      symbol_image_root: '',
    };
  },
  methods: {
    insertMockValue() {
      this.id = 1;
      this.title = '제목입니다';
      this.maker_nickname = 'Maker국준';
      this.company = 'Kkuk Company';
      this.deadline_remain = 10;
      this.reward = 5000;
      this.apply = 15;
      this.participant_capacity = 100;
      this.symbol_image_root =
        'https://cdn.vuetifyjs.com/images/parallax/material.jpg';
    },
    routeTestView() {
      this.$router.push(`/test/${this.id}`);
    },
  },
  created() {
    this.insertMockValue();
  },
};
</script>

<style scoped></style>
