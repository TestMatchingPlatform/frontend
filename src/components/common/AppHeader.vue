<template>
  <v-app-bar app height="100" color="#FFFFFF" elevation="1">
    <v-row align-content="center">
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <div class="d-flex align-baseline fill-height" @click="routeMainView">
          <v-img
            alt="Project Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="50"
          />
          <div class="text--black text-h6 font-weight-medium">
            Beta Matching
          </div>
        </div>
      </v-col>
      <v-col cols="8" style="padding-top: 1.5em">
        <template v-if="getStoreUserType === 'tester'">
          <v-row align="center" justify="space-around">
            <v-spacer></v-spacer>
            <v-btn
              text
              class="mx-5 text-h6 font-weight-bold"
              @click="routeFindTest"
              >Test 찾아보기</v-btn
            >
            <v-btn
              text
              class="mx-5 text-h6 font-weight-bold"
              @click="routeApplyTest"
              >내가 신청한 Test 관리하기</v-btn
            >
            <v-btn
              text
              class="mx-5 text-h6 font-weight-bold"
              @click="routePoint"
              >Point 교환하기</v-btn
            >
            <v-spacer></v-spacer>
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                alt="John"
              />
            </v-avatar>
            <div class="ma-2 font-weight-bold">{{ getStoreNickname }}</div>
            <v-btn @click="logout"> Logout </v-btn>
          </v-row>
        </template>

        <template v-else-if="getStoreUserType === 'maker'">
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-btn
              text
              class="mx-5 text-subtitle-1 font-weight-bold"
              @click="routeCreatedTest"
              >Test 생성하기</v-btn
            >
            <v-btn
              text
              class="mx-5 text-subtitle-1 font-weight-bold"
              @click="routeMadeTest"
              >내가 생성한 Test 관리하기</v-btn
            >
            <v-btn
              text
              class="mx-5 text-subtitle-1 font-weight-bold"
              @click="routePoint"
              >Point 교환하기</v-btn
            >
            <v-spacer></v-spacer>
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                alt="John"
              />
            </v-avatar>
            <div class="ma-2 font-weight-bold">{{ getStoreNickname }}</div>
            <v-btn text @click="logout"> Logout </v-btn>
          </v-row>
        </template>

        <template v-else>
          <v-row align="center" justify="space-around">
            <v-spacer></v-spacer>
            <v-btn
              text
              class="mx-5 text-h6 font-weight-bold"
              @click="routeAboutView"
              >About</v-btn
            >
            <v-btn text class="mx-5 text-h6 font-weight-bold">How Work?</v-btn>
            <v-btn text class="mx-5 text-h6 font-weight-bold">Donate</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text
              class="mx-5 text-subtitle-1 font-weight-medium"
              @click="routeLogin"
              >Login</v-btn
            >
            <div class="mx-5 text-h6">|</div>
            <v-btn
              text
              class="mx-5 text-subtitle-1 font-weight-medium"
              @click="routeRegister"
              >Signup</v-btn
            >
          </v-row>
        </template>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {};
  },
  computed: {
    getStoreUserType() {
      console.log(this.$store.state.UserType);
      return this.$store.state.UserType;
    },
    getStoreNickname() {
      return this.$store.state.Nickname;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('Logout');
      await this.$router.push('/main');
    },
    routeRegister() {
      this.$router.push('/register');
    },
    routeLogin() {
      this.$router.push('/login');
    },
    routePoint() {
      this.$router.push('/point');
    },
    routeMadeTest() {
      this.$router.push(`/makers/${this.$store.state.UserID}/tests`);
    },
    routeCreatedTest() {
      this.$router.push('/tests/form');
    },
    routeFindTest() {
      this.$router.push('/tests/find');
    },
    routeApplyTest() {
      this.$router.push(`/testers/${this.$store.state.UserID}/tests`);
    },
    routeMainView() {
      this.$router.push('/main');
    },
    routeAboutView() {
      this.$router.push('/about');
    },
  },
};
</script>

<style scoped></style>
