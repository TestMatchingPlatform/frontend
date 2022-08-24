<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TesterMatchingPlatform
        <span v-if="isTesterLogin">by {{ $store.state.TesterNickname }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isTesterLogin">
        <a href="javascript:" @click="logoutTester" class="logout-button">
          Logout
        </a>
      </template>
      <!--      <template v-else-if="isMakerLogin">-->
      <!--        -->
      <!--      </template>-->
      <template v-else>
        <router-link to="/tester">Tester로 시작하기</router-link>
        <router-link to="/maker">Maker로 시작하기</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isTesterLogin() {
      return this.$store.getters.isTesterLogin;
    },
    logoLink() {
      return this.$store.getters.isTesterLogin ? '/main' : '/login/tester';
    },
  },
  methods: {
    logoutTester() {
      this.$store.commit('clearTesterNickname');
      this.$store.commit('clearToken');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}
</style>
