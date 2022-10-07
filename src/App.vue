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
import AppFooter from '@/components/common/AppFooter';
import AppHeader from '@/components/common/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {},
  created() {
    this.$router.push('/');
  },
};
</script>
