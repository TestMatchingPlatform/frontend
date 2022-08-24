<template>
  <div class="main">
    <h1>MakerMain</h1>
    <MakerHeader></MakerHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MakerHeader from '@/components/common/MakerHeader';
export default {
  name: 'MakerMain',
  components: { MakerHeader },
};
</script>

<style scoped></style>
