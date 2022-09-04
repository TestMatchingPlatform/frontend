<template>
  <v-container>
    <v-btn
      @click="startTester"
      target="_blank"
      class="ma-5"
      color="primary"
      x-large
      dark
    >
      <span class="text-md-h4 mr-2">Tester로 시작하기</span>
      <br />
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn
      @click="startMaker"
      target="_blank"
      class="ma-5"
      color="teal darken-5"
      x-large
      dark
    >
      <span class="text-md-h4 mr-2">Maker로 시작하기</span>
      <v-icon>mdi-account-badge</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      @click="startAdmin"
      target="_blank"
      class="ma-5"
      color="secondary"
      x-large
      dark
    >
      <span class="text-md-h4 mr-2">Admin으로 시작하기</span>
      <v-icon>mdi-account-cog</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'MainForm.vue',

  methods: {
    startTester() {
      const userType = 'tester';
      this.$store.dispatch('UserTypeChoice', userType);
      this.$emit('choiceUserType');
      this.$router.push('/start/tester');
    },
    startMaker() {
      const userType = 'maker';
      this.$store.dispatch('UserTypeChoice', userType);
      this.$emit('choiceUserType');
      // this.$router.push('/login/maker');
    },
    startAdmin() {
      const userType = 'admin';
      this.$store.dispatch('UserTypeChoice', userType);
      this.$emit('choiceUserType');
      // this.$router.push('/login/admin');
    },
  },
};
</script>

<style scoped></style>
