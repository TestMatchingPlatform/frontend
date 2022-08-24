import Vue from 'vue';
import Vuex from 'vuex';

import { testerLogin, makerLogin } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TesterNickname: '',
    MakerNickname: '',
    sessionId: '',
  },
  getters: {
    isTesterLogin(state) {
      return state.TesterNickname !== '';
    },
    isMakerLogin(state) {
      return state.MakerNickname !== '';
    },
  },
  mutations: {
    setTesterNickname(state, username) {
      state.TesterNickname = username;
    },
    setMakerNickname(state, username) {
      state.MakerNickname = username;
    },
    clearTesterNickname(state) {
      state.TesterNickname = '';
    },
    setSession(state, sessionId) {
      state.sessionId = sessionId;
    },
    clearSession(state) {
      state.token = '';
    },
  },
  actions: {
    async TesterLogin({ commit }, userData) {
      const { data } = await testerLogin(userData);
      commit('setTesterNickname', data.nickname);
      console.log('store/index.js' + data);
      console.log(data);
      // commit('setToken', data.token);
      // commit('setUsername', data.user.username);
      return data;
    },
    async MakerLogin({ commit }, userData) {
      const { data } = await makerLogin(userData);
      commit('setMakerNickname', data.nickname);
      console.log('store/index.js' + data);
      console.log(data);
      return data;
    },
  },
});
