import Vue from 'vue';
import Vuex from 'vuex';

import { testerLogin, makerLogin } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    UserType: '',
    TesterNickname: '',
    MakerNickname: '',
    UserID: null,
    Token: '',
  },
  getters: {
    isUserType(state) {
      return state.UserType !== '';
    },
    isTesterLogin(state) {
      return state.TesterNickname !== '';
    },
    isMakerLogin(state) {
      return state.MakerNickname !== '';
    },
    isTokenExist(state) {
      return state.Token !== '';
    },
    isUserID(state) {
      return state.UserID !== null;
    },
  },
  mutations: {
    setUserType(state, userType) {
      state.UserType = userType;
    },
    setTesterNickname(state, username) {
      state.TesterNickname = username;
    },
    setMakerNickname(state, username) {
      state.MakerNickname = username;
    },
    setToken(state, JSESSIONID) {
      state.Token = JSESSIONID;
    },
    setUserID(state, id) {
      state.UserID = id;
    },
    clearUserType(state) {
      state.UserType = '';
    },
    clearTesterNickname(state) {
      state.TesterNickname = '';
    },
    clearMakerNickname(state) {
      state.MakerNickname = '';
    },
    clearToken(state) {
      state.Token = '';
    },
    clearUserID(state, id) {
      state.UserID = id;
    },
  },
  actions: {
    async TesterLogin({ commit }, userData) {
      const { data } = await testerLogin(userData);
      commit('setTesterNickname', data.nickname);
      commit('setUserID', data.id);
      let splitToken = data.token.split(' ');
      commit('setToken', splitToken[1]);
      return data;
    },
    async MakerLogin({ commit }, userData) {
      const { data } = await makerLogin(userData);
      commit('setMakerNickname', data.nickname);
      console.log('store/index.js' + data);
      console.log(data);
      return data;
    },
    async UserTypeChoice({ commit }, userData) {
      const data = userData;
      commit('setUserType', data);
      console.log(data);
    },
  },
});
