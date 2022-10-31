<template>
  <v-container style="padding-top: 100px">
    <v-row justify="center">
      <v-col cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-radio-group v-model="userType" column>
            <v-radio label="Tester" color="primary" value="tester"> </v-radio>
            <v-radio label="Maker" color="primary" value="maker"> </v-radio>
          </v-radio-group>
          <v-text-field
            v-model="email"
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

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            로그인
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> 초기화 </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      valid: true,
      userType: '',
      password: '',
      passwordRules: [v => !!v || 'Password is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  computed: {},
  methods: {
    async validate() {
      this.$refs.form.validate();
      if (this.userType === 'maker') {
        const request = {
          email: this.email,
          password: this.password,
        };
        console.log(request);

        this.$store
          .dispatch('MakerLogin', request)
          .then(async response => {
            console.log(response);
            console.log('성공');
            await this.$router.push('/main');
          })
          .catch(async response => {
            console.log(response);
            const res = await this.$dialog.error({
              text: '해당하는 Maker를 찾을 수 없습니다.',
              title: '로그인 실패',
            });
            console.log(res);
          });
      } else if (this.userType === 'tester') {
        const request = {
          email: this.email,
          password: this.password,
        };
        console.log(request);

        this.$store
          .dispatch('TesterLogin', request)
          .then(async response => {
            console.log(response);
            await this.$router.push('/main');
          })
          .catch(async response => {
            console.log(response);
            const res = await this.$dialog.error({
              text: '해당하는 Tester를 찾을 수 없습니다.',
              title: '로그인 실패',
            });
          });
        console.log(data);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped></style>
