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

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
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
      this.$store.commit('clearToken');
    },
  },
  components: {},

  data: () => ({
    items: [
      { title: 'Login', icon: 'mdi-account', to: '/login/tester' },
      { title: 'Register', icon: 'mdi-account-badge', to: '/signup/tester' },
      { title: 'Administer', icon: 'mdi-account-cog', to: '/administer' },
    ],
    right: null,
  }),
};
</script>

<style scoped></style>
