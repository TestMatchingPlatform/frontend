<template>
  <v-navigation-drawer app>
    <template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Tester </v-list-item-title>
          <v-list-item-subtitle> Tester Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav v-if="!isTesterLogin">
        <v-list-item
          v-for="item in beforeLoginItems"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense nav v-if="isTesterLogin">
        <v-btn @click="logoutTester" target="_blank" text>
          <span class="mr-2">로그아웃하기</span>
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-list-item
          v-for="item in afterLoginItems"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isTesterLogin() {
      return this.$store.getters.isTesterLogin;
    },
  },
  methods: {
    logoutTester() {
      this.$store.commit('clearTesterNickname');
      this.$router.push('/login/tester');
    },
  },
  components: {},

  data: () => ({
    beforeLoginItems: [
      { title: '로그인', icon: 'mdi-account', to: '/login/tester' },
      { title: '회원가입', icon: 'mdi-account-badge', to: '/signup/tester' },
    ],
    afterLoginItems: [
      { title: '내 정보 보기', icon: 'mdi-account', to: '/info/tester' },
      { title: '퀘스트 신청하기', icon: 'mdi-account', to: '/apply/quests' },
      {
        title: '내가 신청한 퀘스트 보기',
        icon: 'mdi-account',
        to: '/quests/apply/tester',
      },
    ],
    right: null,
  }),
};
</script>

<style scoped></style>
