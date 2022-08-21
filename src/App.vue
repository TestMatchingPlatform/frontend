<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <AppHeader></AppHeader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
