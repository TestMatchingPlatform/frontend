<template>
  <v-app>
    <!--    뷰티파이 상단 코드 부분-->
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Project Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <span class="text-md-h4 cyan--text">Tester Matching Platform</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="mainPageClear" target="_blank" text>
        <span class="mr-2">초기 화면으로 돌아가기</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <TesterMainPage v-if="isTester"></TesterMainPage>
        <MakerMainPage v-else-if="isMaker"></MakerMainPage>
        <AdminMainPage v-else-if="isAdmin"></AdminMainPage>
        <MainForm v-else v-on:choiceUserType="convertView"></MainForm>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainForm from '@/components/form/MainForm';
import TesterMainPage from '@/views/TesterMainPage';
import MakerMainPage from '@/views/MakerMainPage';
import AdminMainPage from '@/views/AdminMainPage';
import { deleteCookie } from '@/utils/cookies';
export default {
  name: 'App',
  components: {
    MainForm,
    TesterMainPage,
    MakerMainPage,
    AdminMainPage,
  },
  computed: {
    isTester() {
      return this.userType === 'tester';
    },
    isMaker() {
      return this.userType === 'maker';
    },
    isAdmin() {
      return this.userType === 'admin';
    },
  },
  data: function () {
    return {
      userType: '',
    };
  },
  methods: {
    mainPageClear() {
      this.$store.commit('clearUserType');
      this.$store.commit('clearNickname');
      this.$store.commit('clearToken');
      this.$store.commit('clearUserID');
      deleteCookie('user_type');
      deleteCookie('nickname');
      deleteCookie('user_id');
      deleteCookie('jwt_token');
      this.clearUser();
    },
    convertView() {
      this.userType = this.$store.state.UserType;
    },
    clearUser() {
      this.userType = '';
    },
  },
};
</script>
