<template>
  <div class="contents">
    <div class="form-wrapper">
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
        <button
          :disabled="!isActiveButton"
          :class="!isActiveButton ? 'disabled' : null"
          type="submit"
          class="btn"
        >
          메이커 로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  name: 'MakerLoginForm',
  data() {
    return {
      // form values
      email: '',
      password: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
    // 필요조건 완성 시 Button 활성화
    isActiveButton() {
      return this.email && this.password;
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };
        console.log(userData);

        const { data } = await this.$store.dispatch('MakerLogin', userData);
        console.log(data);

        await this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
      this.initForm();
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped></style>
