<template>
  <v-container>
    <h1>TesterMain</h1>
    <TesterHeader></TesterHeader>
    <router-view></router-view>
  </v-container>
</template>

<script>
import TesterHeader from '@/components/common/TesterHeader';
export default {
  name: 'TesterMain',
  components: { TesterHeader },
};
</script>

<style scoped></style>
