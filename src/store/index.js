import Vue from 'vue';
import Vuex from 'vuex';
import {
  saveSessionToCookie,
  saveTesterToCookie,
  saveMakerToCookie,
  getSessionFromCookie,
  getTesterFromCookie,
  getMakerFromCookie,
} from '@/utils/cookies';
import { testerLogin, makerLogin } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    TesterNickname: '',
    MakerNickname: '',
    JSESSIONID: '',
  },
  getters: {
    isTesterLogin(state) {
      return state.TesterNickname !== '';
    },
    isMakerLogin(state) {
      return state.MakerNickname !== '';
    },
    isSessionExist(state) {
      return state.JSESSIONID !== '';
    },
  },
  mutations: {
    setTesterNickname(state, username) {
      state.TesterNickname = username;
    },
    setMakerNickname(state, username) {
      state.MakerNickname = username;
    },
    setSession(state, JSESSIONID) {
      state.JSESSIONID = JSESSIONID;
    },
    clearTesterNickname(state) {
      state.TesterNickname = '';
    },
    clearMakerNickname(state) {
      state.MakerNickname = '';
    },
    clearSession(state) {
      state.JSESSIONID = '';
    },
  },
  actions: {
    async TesterLogin({ commit }, userData) {
      const { data } = await testerLogin(userData);
      commit('setTesterNickname', data.nickname);
      // ..?
      // commit('setSession');
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
