<template>
  <v-container>
    <div class="text-h3 ma-5">Test 생성하기</div>
    <v-divider></v-divider>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="6">
          <v-file-input
            v-model="representImage"
            @change="fileInput"
            accept="image/*"
            label="File input"
          ></v-file-input>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="title" label="제목" required></v-text-field>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="recruitmentTimeStart"
                label="지원시작 시점"
                @click="changeRecruitmentTimeStart"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="recruitmentTimeLimit"
                label="지원종료 시점"
                @click="changeRecruitmentTimeLimit"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="durationTimeStart"
                label="수행시작 시점"
                @click="changeDurationTimeStart"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="durationTimeLimit"
                label="수행종료 시점"
                @click="changeDurationTimeLimit"
                required
              ></v-text-field>
            </v-col>
            <v-overlay absolute="absolute" :value="overlay"
              ><v-date-picker
                v-model="picker"
                reactive="reactive"
              ></v-date-picker>
              <v-btn color="fail" @click="overlay = false"> 닫기 </v-btn>
              <v-btn color="success" @click="changeDate"> 적용하기 </v-btn>
            </v-overlay>
          </v-row>
          <v-text-field
            v-model="participantCapacity"
            label="모집 인원"
            required
          ></v-text-field>
          <v-text-field
            v-model="reward"
            label="지급 포인트"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
          <div class="text-h3 ma-5">상세 설명</div>
          <v-textarea
            v-model="content"
            label="상세 설명"
            auto-grow
          ></v-textarea>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            생성하기
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> 초기화하기 </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'CreateTestView',
  data() {
    return {
      title: '',
      recruitmentTimeStart: '',
      recruitmentTimeLimit: '',
      durationTimeStart: '',
      durationTimeLimit: '',
      participantCapacity: 0,
      reward: 0,
      content: '',
      representImage: [],
      overlay: '',
      dateState: '',
      picker: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    fileInput(file) {
      this.introPicture = file;
    },

    changeRecruitmentTimeStart() {
      this.overlay = true;
      this.dateState = 'recruitmentTimeStart';
    },
    changeRecruitmentTimeLimit() {
      this.overlay = true;
      this.dateState = 'recruitmentTimeLimit';
    },
    changeDurationTimeStart() {
      this.overlay = true;
      this.dateState = 'durationTimeStart';
    },
    changeDurationTimeLimit() {
      this.overlay = true;
      this.dateState = 'durationTimeLimit';
    },
    changeDate() {
      switch (this.dateState) {
        case 'recruitmentTimeStart':
          this.recruitmentTimeStart = this.picker;
          break;
        case 'recruitmentTimeLimit':
          this.recruitmentTimeLimit = this.picker;
          break;
        case 'durationTimeStart':
          this.durationTimeStart = this.picker;
          break;
        case 'durationTimeLimit':
          this.durationTimeLimit = this.picker;
          break;
      }
      this.overlay = false;
    },
  },
};
</script>

<style scoped></style>
