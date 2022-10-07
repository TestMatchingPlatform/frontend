<template>
  <v-app>
    <!--    뷰티파이 상단 코드 부분-->
    <AppHeader></AppHeader>

    <v-main>
      <router-view></router-view>
    </v-main>

    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {},
  created() {
    // this.$router.push('/');
    this.$router.push('/testers/1/tests');
  },
};
</script>
