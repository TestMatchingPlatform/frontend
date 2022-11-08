<template>
  <v-row>
    <v-col
      v-for="completeTester in completeTesters.completeTesterDTOList"
      :key="completeTester.id"
      cols="12"
    >
      <v-row align="center">
        <v-col cols="2">{{ completeTester.nickname }}</v-col>
        <v-col cols="2">{{ completeTester.status }}</v-col>
        <v-col cols="2">
          <v-rating
            v-model="completeTester.starPoint"
            background-color="indigo lighten-3"
            color="indigo"
            size="20"
          ></v-rating>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="completeTester.comment"
            label="Comment"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-btn @click="performEvent">리뷰 작성하고 보상 받기</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { reviewTesters } from '@/api/makerAuth';

export default {
  name: 'TesterReview',
  props: {
    completeTesters: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async performEvent() {
      const request = {
        testerReviewDTOList: this.completeTesters.completeTesterDTOList,
      };
      console.log(request);
      reviewTesters(this.$store.state.UserID, request)
        .then(async response => {
          console.log(response.data);
          console.log('성공');
          await this.$router.push(`/makers/${this.$store.state.UserID}/tests`);
        })
        .catch(async response => {
          console.log(response);
          const res = this.$dialog.error({
            title: '리뷰 중복 처리 방지',
            text: response.response.data.message[0],
          });
        });
      console.log(response.data);
    },
  },
  // 자식 컴포넌트에서 props 속성을 받은 다음 매핑을 진행해서 객체를 생성하고 싶은데, created 속성을 이용하면
  // props 속성으로 받아오기 전에 객체를 생성해서 정보가 반영되지 않음 :(
};
</script>

<style scoped></style>
