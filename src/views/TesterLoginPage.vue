<template>
  <div>
    <h1>테스터 로그인 페이지입니다.</h1>
    <div class="form-container">
      <TesterLoginForm></TesterLoginForm>
    </div>
  </div>
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
