import Vue from 'vue';
import Vuex from 'vuex';

import { testerLogin } from '@/api/auth';

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
  },
  mutations: {
    setTesterNickname(state, username) {
      state.TesterNickname = username;
    },
    clearTesterNickname(state) {
      state.TesterNickname = '';
    },
    setToken(state, sessionId) {
      state.sessionId = sessionId;
    },
    clearToken(state) {
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
  },
});
