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
import { createMakerReview } from '@/api/testerAuth';

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
      starPoint: 0,
    };
  },
  methods: {
    async performEvent() {
      const request = {
        starPoint: this.starPoint,
        comment: this.comment,
      };
      const res = await this.$dialog.warning({
        text: '한번 리뷰를 작성하면, 다시는 수정할 수 없습니다. 정말 이렇게 진행할까요?',
        title: '경고',
        actions: {
          false: 'No',
          true: {
            color: 'green',
            text: '진행하겠습니다.',
          },
        },
      });
      if (res) {
        createMakerReview(this.id, request)
          .then(async response => {
            console.log(response);
            await this.$router.push(
              `/testers/${this.$store.state.UserID}/tests`,
            );
          })
          .catch(async response => {
            console.log(response);
            await this.$dialog.error({
              title: 'Maker에 대한 리뷰 작성 실패',
              // text: 'Backend 오류',
              text: response.response.data.message[0],
            });
          });
      }
    },
  },
};
</script>

<style scoped></style>
