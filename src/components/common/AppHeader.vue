<template>
  <header>
    <router-link to="/main" class="logo"> TIL</router-link>
    <div class="navigations">
      <router-link to="/login/tester">Tester 로그인</router-link>
      <router-link to="/login/maker">Maker 로그인</router-link>
      <router-link to="/signup/tester">Tester 회원가입</router-link>
      <router-link to="/signup/maker">Maker 회원가입</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}
</style>
