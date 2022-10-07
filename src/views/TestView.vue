<template>
  <v-container>
    <v-row class="ma-5 pa-3">
      <v-col cols="2">
        <v-card class="grey lighten-2 text-h4 text-center"
          >D-{{ deadLine }}</v-card
        ></v-col
      >
      <v-col cols="10">
        <div class="text-h4">{{ title }}</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-5 pa-3">
      <v-col cols="6">
        <v-img
          src="https://picsum.photos/510/300?random"
          :aspect-ratio="16 / 9"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="3">
            <div>주최/주관</div>
          </v-col>
          <v-col cols="9">
            <div>{{ testerNickname }} / {{ company }}</div>
          </v-col>
          <v-col cols="3">
            <div>지원기간</div>
          </v-col>
          <v-col cols="9">
            <div>{{ recruitmentTimeStart }} ~ {{ recruitmentTimeLimit }}</div>
          </v-col>
          <v-col cols="3">
            <div>지급 포인트</div>
          </v-col>
          <v-col cols="9">
            <div>{{ reward }}P</div>
          </v-col>
          <v-col cols="3">
            <div>활동 기간</div>
          </v-col>
          <v-col cols="9">
            <div>{{ durationTimeStart }} ~ {{ durationTimeLimit }}</div>
          </v-col>
          <v-col cols="3">
            <div>신청/모집인원</div>
          </v-col>
          <v-col cols="9">
            <div>{{ applyCount }} / {{ participantCapacity }}</div>
          </v-col>
        </v-row>
        <v-col cols="6">
          <v-btn class="primary">신청하기</v-btn>
        </v-col>
      </v-col>

      <v-col cols="12">
        <v-divider></v-divider>
        <div class="text-h3 ma-5">상세 설명</div>
        <div>{{ content }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TestView',
  data() {
    return {
      id: 0,
      deadLine: 0,
      title: '',
      testerNickname: '',
      company: '',
      recruitmentTimeStart: '',
      recruitmentTimeLimit: '',
      durationTimeStart: '',
      durationTimeLimit: '',
      participantCapacity: 0,
      applyCount: 0,
      reward: 0,
      content: '',
    };
  },
  methods: {
    insertMockValue() {
      this.id = this.$route.params.id;
      this.deadLine = 23;
      this.title = 'DOR 게임 하이라이트 영상 녹화 베타테스터 모집';
      this.testerNickname = 'Kukjun';
      this.company = 'KukjunCompany';
      this.recruitmentTimeStart = '2022-10-01';
      this.recruitmentTimeLimit = '2022-11-01';
      this.durationTimeStart = '2022-12-01';
      this.durationTimeLimit = '2022-12-30';
      this.reward = 5000;
      this.participantCapacity = 100;
      this.applyCount = 58;
      this.content =
        '"크아아아아"\n' +
        '드래곤중에서도 최강의 투명드래곤이 울부짓었다\n' +
        '투명드래곤은 졸라짱쎄서 드래곤중에서 최강이엇다\n' +
        '신이나 마족도 이겼따 다덤벼도 이겼따 투명드래곤은\n' +
        '새상에서 하나였다 어쨌든 걔가 울부짓었다\n' +
        '"으악 제기랄 도망가자"\n' +
        '발록들이 도망갔다 투명드래곤이 짱이었따\n' +
        '그래서 발록들은 도망간 것이다' +
        '투명드래곤은 심심햇다\n' +
        '그래서 신을죽이기로 햇다\n' +
        '그래서 신들은 비상이걸렸따\n' +
        '"투명드래곤이 쳐들어온대"\n' +
        '"그래 싸우자"\n' +
        '하지만 투명드래곤은 투명드래곤이라서 투명했따\n' +
        '그래서 안보여서 신들은결국 다 죽고말았따\n' +
        '투명드래곤은 이새계가심심해서 다른새계로\n' +
        '가기로하였따';
    },
  },
  created() {
    this.insertMockValue();
  },
};
</script>

<style scoped></style>
