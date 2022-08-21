<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">email: </label>
          <input id="email" type="text" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="confirmPassword">confirm password: </label>
          <input id="confirmPassword" type="text" v-model="confirmPassword" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <div>
          <label for="phoneNumber">phone number: </label>
          <input id="phoneNumber" type="text" v-model="phoneNumber" />
        </div>
        <button
          :disabled="!isActiveButton"
          :class="!isActiveButton ? 'disabled' : null"
          type="submit"
          class="btn"
        >
          테스터 회원가입
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
export default {
  name: 'MakerSignupForm',
  data() {
    return {
      // form values
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      phoneNumber: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
    isActiveButton() {
      console.log(this.email);
      return (
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.nickname &&
        this.phoneNumber
      );
    },
  },
};
</script>

<style scoped></style>
