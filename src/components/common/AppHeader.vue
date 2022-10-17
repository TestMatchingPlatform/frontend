<template>
  <v-app-bar app color="secondary" height="100px" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Project Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="60"
      />

      <span class="text-md-h4 cyan--text">Tester Matching Platform</span>
    </div>

    <template v-if="getStoreUserType === 'tester'">
      <v-spacer></v-spacer>
      <v-btn @click="routeFindTest">Test 찾아보기</v-btn>
      <v-btn @click="routeApplyTest">내가 신청한 Test 관리하기</v-btn>
      <v-btn @click="routePoint">Point 교환하기</v-btn>
      <v-spacer></v-spacer>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          alt="John"
        />
      </v-avatar>
      <v-btn>
        {{ getStoreNickname }}
      </v-btn>
    </template>

    <template v-else-if="getStoreUserType === 'maker'">
      <v-spacer></v-spacer>
      <v-btn @click="routeCreatedTest">Test 생성하기</v-btn>
      <v-btn @click="routeMadeTest">내가 생성한 Test 관리하기</v-btn>
      <v-btn @click="routePoint">Point 교환하기</v-btn>
      <v-spacer></v-spacer>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          alt="John"
        />
      </v-avatar>
      <v-btn>
        {{ getStoreNickname }}
      </v-btn>
    </template>

    <template v-else>
      <v-spacer></v-spacer>
      <v-btn>About</v-btn>
      <v-btn>How Work?</v-btn>
      <v-btn>Donate</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="routeLogin">Login</v-btn>
      <v-btn @click="routeRegister">Signup</v-btn>
    </template>
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
  },
};
</script>

<style scoped></style>
