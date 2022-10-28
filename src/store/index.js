import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { makerLogin } from '@/api/makerAuth';
import { testerLogin } from '@/api/testerAuth';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    UserType: '',
    Nickname: '',
    UserID: '',
    // RefreshToken: '',
    AccessToken: '',
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
    // isRefreshToken(state) {
    //   return state.RefreshToken !== '';
    // },
    isAccessToken(state) {
      return state.AccessToken !== '';
    },
  },
  mutations: {
    setUserType(state, userType) {
      state.UserType = userType;
    },
    setNickname(state, username) {
      state.Nickname = username;
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
    clearUserID(state) {
      state.UserID = '';
    },
    clearAccessToken(state) {
      state.AccessToken = '';
    },
    // clearRefreshToken(state) {
    //   state.RefreshToken = '';
    // },
  },
  actions: {
    async TesterLogin({ commit }, userData) {
      const { data } = await testerLogin(userData);
      console.log(data);
      commit('setNickname', data.nickname);
      commit('setUserType', 'tester');
      commit('setUserID', data.id);
      return data;
    },
    async MakerLogin({ commit }, userData) {
      const { data } = await makerLogin(userData);
      console.log(data);
      commit('setNickname', data.nickname);
      commit('setUserType', 'maker');
      commit('setUserID', data.id);
      return data;
    },
    async Logout({ commit }) {
      commit('clearUserType');
      commit('clearNickname');
      commit('clearUserID');
      commit('clearAccessToken');
      // commit('clearRefreshToken');
    },
  },
});
