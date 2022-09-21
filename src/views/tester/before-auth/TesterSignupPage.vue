<template>
  <v-container>
    <span class="text-md-h2">테스터 회원가입 페이지 입니다.</span>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :counter="10"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="nickname"
        :rules="nicknameRules"
        label="Nickname"
        required
      ></v-text-field>

      <v-text-field
        v-model="phoneNumber"
        :rules="phoneNumberRules"
        label="phoneNumber"
        required
      ></v-text-field>

      <v-select
        v-model="preferCategory"
        :hint="`${preferCategory.state}, ${preferCategory.index}`"
        :items="preferCategoryItems"
        item-text="state"
        item-value="index"
        :rules="preferCategoryRules"
        label="preferCategory"
        persistent-hint
        return-object
        required
      ></v-select>

      <v-file-input
        v-model="introPicture"
        :rules="introPictureRules"
        @change="fileInput"
        accept="image/*"
        label="File input"
      ></v-file-input>

      <v-text-field
        v-model="introMessage"
        :rules="introMessageRules"
        label="introMessage"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { testerRegister } from '@/api/auth';

export default {
  data() {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [v => !!v || 'Password is required'],
      nickname: '',
      nicknameRules: [v => !!v || 'Nickname is required'],
      phoneNumber: '',
      phoneNumberRules: [v => !!v || 'Phone Number is required'],
      preferCategory: { state: 'Game Test', index: 1 },
      preferCategoryItems: [
        { state: 'Game Test', index: 1 },
        { state: 'Traffic Test', index: 2 },
        { state: 'Function Test', index: 3 },
      ],
      preferCategoryRules: [v => !!v || 'Prefer Category is required'],
      introPicture: [],
      introPictureRules: [v => !!v || 'Profile Image is required'],
      introMessage: '',
      introMessageRules: [v => !!v || 'Introduction Message is required'],
    };
  },

  computed: {},

  methods: {
    async validate() {
      this.$refs.form.validate();
      try {
        console.log('method execute');
        // 이름을 백엔드에서 받기 편하도록 만들어서 전송
        const userData = new FormData();
        userData.append('email', this.email);
        userData.append('password', this.password);
        userData.append('nickname', this.nickname);
        userData.append('phoneNumber', this.phoneNumber);
        userData.append('preferCategoryId', this.preferCategory.index);
        userData.append('introMessage', this.introMessage);
        userData.append('introPicture', this.introPicture);
        // test FormData
        for (let key of userData.entries()) {
          console.log(`${key}`);
        }
        // execute API
        const { data } = await testerRegister(userData);
        console.log(data.id);
        await this.$router.push('/login/tester');
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    fileInput(file) {
      this.introPicture = file;
    },
  },
};
</script>

<style scoped></style>
