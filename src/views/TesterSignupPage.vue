<template>
  <div>
    <h1>테스터 회원가입 페이지입니다.</h1>
    <div class="form-container">
      <TesterSignupForm></TesterSignupForm>
    </div>
  </div>
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
