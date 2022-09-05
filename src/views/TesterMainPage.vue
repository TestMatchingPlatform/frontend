<template>
  <v-container>
    <h1>TesterMainPage</h1>
    <TesterHeader></TesterHeader>
    <router-view></router-view>
  </v-container>
</template>

<script>
import TesterHeader from '@/components/common/TesterHeader';
export default {
  name: 'TesterMainPage',
  components: { TesterHeader },
};
</script>

<style scoped></style>
