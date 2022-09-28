<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="text-h3">테스터 회원가입 페이지 입니다.</span>
      </v-col>
      <v-col cols="6">
        <v-btn @click="userType = 'tester'">Tester로 회원가입하기</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn @click="userType = 'maker'">Maker로 회원가입하기</v-btn>
      </v-col>

      <v-col cols="12">
        <v-form
          ref="form"
          v-if="userType === 'tester'"
          v-model="valid"
          lazy-validation
        >
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
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="PasswordConfirm"
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
          <v-textarea
            v-model="introMessage"
            label="introMessage"
            :rules="introMessageRules"
          ></v-textarea>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-form>
      </v-col>

      <v-col cols="12">
        <v-form
          ref="form"
          v-if="userType === 'maker'"
          v-model="valid"
          lazy-validation
        >
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
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="PasswordConfirm"
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
          <v-text-field
            v-model="company"
            :rules="companyRules"
            label="company"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { testerRegister } from '@/api/auth';

export default {
  name: 'RegisterView',
  data() {
    return {
      userType: '',
      valid: true,
      email: '',
      emailRules: [
        v => !!v || '이메일은 꼭 입력해야 합니다.',
        v => /.+@.+\..+/.test(v) || '이메일 형식으로 작성해주세요',
      ],
      password: '',
      passwordRules: [v => !!v || '비밀번호를 꼭 입력해야 합니다.'],
      passwordConfirm: '',
      passwordConfirmRules: [
        this.passwordConfirm === this.password ||
          '비밀번호와 확인하느 코드가 다릅니다.',
      ],
      nickname: '',
      nicknameRules: [v => !!v || '닉네임을 꼭 입력해야 합니다.'],
      phoneNumber: '',
      phoneNumberRules: [v => !!v || '휴대전화를 꼭 입력해야 합니다.'],
      introMessage: '',
      introMessageRules: [v => !!v || '자기소개를 꼭 작성해야 합니다.'],
      company: '',
      companyRules: [v => !!v || '회사 정보를 꼭 입력해야 합니다.'],
    };
  },
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
