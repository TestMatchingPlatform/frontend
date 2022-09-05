<template>
  <v-container>
    <span class="text-h2 ma-5"> 테스터 로그인 페이지입니다. </span>
    <TesterLoginForm></TesterLoginForm>
  </v-container>
</template>

<script>
import TesterLoginForm from '@/components/form/TesterLoginForm';

export default {
  components: {
    TesterLoginForm,
  },
};
</script>

<style scoped></style>
