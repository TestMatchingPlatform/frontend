<template>
  <div>
    <template>
      <router-link to="/login/tester">Tester 로그인</router-link>
      <br />
      <router-link to="/signup/tester">Tester 회원가입</router-link>
    </template>
    <hr />
    <template>
      <router-link to="/testers/:id">Tester 정보보기</router-link>
      <br />
      <!--      굳이 tester id가 필요한가?-->
      <router-link to="/testers/:id/apply">Tester Quest 신청하기</router-link>
      <br />
      <router-link to="/testers/:id/quests"
        >Tester 신청한 Quest 관리하기</router-link
      >
      <br />
    </template>
  </div>
</template>

<script>
export default {
  name: 'TesterHeader',
};
</script>

<style scoped></style>
