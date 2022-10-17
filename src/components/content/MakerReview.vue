<template>
  <v-row>
    <v-col cols="4">
      <v-rating
        v-model="starPoint"
        background-color="indigo lighten-3"
        color="indigo"
        size="30"
      ></v-rating>
    </v-col>
    <v-col cols="8">
      <v-text-field v-model="comment" label="Comment" clearable></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn @click="performEvent">리뷰 작성하기</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { createMakerReview } from '@/api/auth';

export default {
  name: 'MakerReview',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comment: '',
      starPoint: '',
    };
  },
  methods: {
    async performEvent() {
      const request = {
        starPoint: this.starPoint,
        comment: this.comment,
      };
      const response = await createMakerReview(this.id, request);
      console.log(response.data);
      await this.$router.push(`/testers/${this.$store.state.UserID}/tests`);
    },
  },
};
</script>

<style scoped></style>
