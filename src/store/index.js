import Vue from 'vue';
import Vuex from 'vuex';

import { testerLogin, makerLogin } from '@/api/auth';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    UserType: '',
    Nickname: '',
    UserID: '',
    Token: '',
  },
  getters: {
    isUserType(state) {
      return state.UserType !== '';
    },
    isNickname(state) {
      return state.Nickname !== '';
    },
    isUserID(state) {
      return state.UserID !== '';
    },
    isToken(state) {
      return state.Token !== '';
    },
  },
  mutations: {
    setUserType(state, userType) {
      state.UserType = userType;
    },
    setNickname(state, username) {
      state.Nickname = username;
    },
    setToken(state, token) {
      state.Token = token;
    },
    setUserID(state, id) {
      state.UserID = id;
    },
    clearUserType(state) {
      state.UserType = '';
    },
    clearNickname(state) {
      state.Nickname = '';
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
      console.log(data);
      commit('setNickname', data.nickname);
      commit('setUserType', 'tester');
      commit('setUserID', data.id);
      commit('setToken', data.token);
      return data;
    },
    async MakerLogin({ commit }, userData) {
      const { data } = await makerLogin(userData);
      console.log(data);
      commit('setNickname', data.nickname);
      commit('setUserType', 'maker');
      commit('setUserID', data.id);
      commit('setToken', data.token);
      return data;
    },
    async Logout({ commit }) {
      commit('clearUserType');
      commit('clearNickname');
      commit('clearUserID');
      commit('clearToken');
    },
  },
});
