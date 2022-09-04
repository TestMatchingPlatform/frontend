<template>
  <v-container>
    <span class="text-md-h2">테스터 회원가입 페이지 입니다.</span>
    <TesterSignupForm></TesterSignupForm>
  </v-container>
</template>

<script>
import TesterSignupForm from '@/components/form/TesterSignupForm';

export default {
  components: {
    TesterSignupForm,
  },
};
</script>

<style scoped></style>
