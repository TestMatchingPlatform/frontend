<template>
  <v-container>
    <v-row justify="center" style="padding-top: 100px">
      <v-col cols="3">
        <v-btn @click="userType = 'tester'">Tester로 회원가입하기</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn @click="userType = 'maker'">Maker로 회원가입하기</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6" v-if="userType === 'tester'">
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
            회원가입하기
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> 초기화 </v-btn>
        </v-form>
      </v-col>

      <v-col cols="6" v-if="userType === 'maker'">
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
            회원가입하기
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> 초기화하기 </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { makerRegister } from '@/api/visitor';
import { testerRegister } from '@/api/visitor';
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
        v =>
          this.password === this.passwordConfirm ||
          '비밀번호, 비밀번호 확인에 작성한 내용이 다릅니다.',
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

        // execute API
        if (this.userType === 'maker') {
          const request = {
            email: this.email,
            password: this.password,
            nickname: this.nickname,
            phoneNumber: this.phoneNumber,
            company: this.company,
          };
          console.log(request);
          console.log('\n');
          const { data } = await makerRegister(request);
          console.log(data);
        } else if (this.userType === 'tester') {
          const request = {
            email: this.email,
            password: this.password,
            nickname: this.nickname,
            phoneNumber: this.phoneNumber,
            introMessage: this.introMessage,
          };
          console.log(request);
          console.log('\n');
          const { data } = await testerRegister(request);
          console.log(data);
        }
        await this.$router.push('/main');
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
