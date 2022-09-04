<template>
  <div>
    <h1>메이커 로그인 페이지입니다.</h1>
    <div class="form-container">
      <MakerLoginForm></MakerLoginForm>
    </div>
  </div>
</template>

<script>
import MakerLoginForm from '@/components/form/MakerLoginForm';
export default {
  name: 'MakerLoginPage',

  components: {
    MakerLoginForm,
  },
};
</script>

<style scoped></style>
