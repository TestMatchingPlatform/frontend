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
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <div>
          <label for="phone_number">phone_number: </label>
          <input id="phone_number" type="text" v-model="phone_number" />
        </div>
        <div>
          <label for="prefer_category_name">prefer_category_name: </label>
          <select id="prefer_category_name" v-model="prefer_category_id">
            <option value="1">게임테스트</option>
            <option value="2">트래픽테스트</option>
            <option value="3">동작 API 테스트</option>
          </select>
        </div>
        <div>
          <label for="intro_message">intro_message: </label>
          <input id="intro_message" type="text" v-model="intro_message" />
        </div>
        <div>
          <label for="intro_picture">intro_picture: </label>
          <input
            id="intro_picture"
            type="file"
            ref="intro_picture"
            accept="image/*"
            v-on:change="fileSelect()"
          />
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
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { testerRegister } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      email: '',
      password: '',
      nickname: '',
      phone_number: '',
      prefer_category_id: '',
      intro_message: '',
      intro_picture: '',

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
      console.log(this.email);
      return (
        this.email &&
        this.password &&
        this.nickname &&
        this.phone_number &&
        this.intro_picture
      );
    },
  },
  methods: {
    async submitForm() {
      console.log('method execute');
      // 이름을 백엔드에서 받기 편하도록 만들어서 전송
      const userData = new FormData();
      userData.append('email', this.email);
      userData.append('password', this.password);
      userData.append('nickname', this.nickname);
      userData.append('phoneNumber', this.phone_number);
      userData.append('preferCategoryId', this.prefer_category_id);
      userData.append('introMessage', this.intro_message);
      userData.append('introPicture', this.intro_picture);
      // test FormData
      for (let key of userData.entries()) {
        console.log(`${key}`);
      }
      // execute API
      const { data } = await testerRegister(userData);
      console.log(data.nickname);
      this.logMessage = 'Tester로 가입 성공';
      this.initForm();
    },

    fileSelect() {
      console.log(this.$refs);
      this.intro_picture = this.$refs.intro_picture.files[0];
    },

    initForm() {
      this.email = '';
      this.password = '';
      this.nickname = '';
      this.phone_number = '';
      this.prefer_category_id = '';
      this.intro_message = '';
      this.intro_picture = '';
    },
  },
};
</script>

<style scoped></style>
