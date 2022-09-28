<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="text-h2 ma-5"> Login View</span>
      </v-col>
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-radio-group v-model="userType" column>
            <v-radio label="Tester" color="primary" value="tester"> </v-radio>
            <v-radio label="Maker" color="primary" value="maker"> </v-radio>
          </v-radio-group>
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
      // try {
      //   console.log('method execute');
      //   // 이름을 백엔드에서 받기 편하도록 만들어서 전송
      //   const userData = {
      //     email: this.email,
      //     password: this.password,
      //   };
      //   console.log(userData);
      //   // execute API
      //   const data = await this.$store.dispatch('TesterLogin', userData);
      //   console.log(data);
      //
      //   await this.$router.push('/start/tester');
      // } catch (error) {
      //   console.log(error);
      // }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped></style>
