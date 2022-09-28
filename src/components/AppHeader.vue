<template>
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
    <v-btn>About</v-btn>
    <v-btn>How Work?</v-btn>
    <v-btn>Donate</v-btn>

    <v-spacer></v-spacer>
    <v-btn @click="routeLogin">Login</v-btn>
    <v-btn @click="routeRegister">Signup</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    routeRegister() {
      this.$router.push('/register');
    },
    routeLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped></style>
