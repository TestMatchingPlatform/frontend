<template>
  <v-container>
    <h1>MakerMainPage</h1>
    <MakerHeader></MakerHeader>
    <router-view></router-view>
  </v-container>
</template>

<script>
import MakerHeader from '@/components/common/MakerHeader';
export default {
  name: 'MakerMain',
  components: { MakerHeader },
};
</script>

<style scoped></style>
