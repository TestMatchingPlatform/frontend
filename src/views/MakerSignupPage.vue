<template>
  <div>
    <h1>메이커 회원가입 페이지 입니다.</h1>
    <div class="form-container">
      <MakerSignupForm></MakerSignupForm>
    </div>
  </div>
</template>

<script>
import MakerSignupForm from '@/components/form/MakerSignupForm';

export default {
  name: 'MakerSignupPage.vue',
  components: {
    MakerSignupForm,
  },
};
</script>

<style scoped></style>
