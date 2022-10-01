// import Vue from 'vue';
// import Vuex from 'vuex';
//
// import { testerLogin, makerLogin } from '@/api/auth';
// import {
//   getAuthToCookie,
//   getUserIdToCookie,
//   getUserNicknameToCookie,
//   getUserTypeToCookie,
//   saveAuthToCookie,
//   saveUserIdToCookie,
//   saveUserNicknameToCookie,
//   saveUserTypeToCookie,
// } from '@/utils/cookies';
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   state: {
//     UserType: getUserTypeToCookie() || '',
//     Nickname: getUserNicknameToCookie() || '',
//     UserID: getUserIdToCookie() || null,
//     Token: getAuthToCookie() || '',
//   },
//   getters: {
//     isUserType(state) {
//       return state.UserType !== '';
//     },
//     isNickname(state) {
//       return state.Nickname !== '';
//     },
//     isTokenExist(state) {
//       return state.Token !== '';
//     },
//     isUserID(state) {
//       return state.UserID !== null;
//     },
//   },
//   mutations: {
//     setUserType(state, userType) {
//       state.UserType = userType;
//     },
//     setNickname(state, username) {
//       state.Nickname = username;
//     },
//     setToken(state, JSESSIONID) {
//       state.Token = JSESSIONID;
//     },
//     setUserID(state, id) {
//       state.UserID = id;
//     },
//     clearUserType(state) {
//       state.UserType = '';
//     },
//     clearNickname(state) {
//       state.Nickname = '';
//     },
//     clearToken(state) {
//       state.Token = '';
//     },
//     clearUserID(state, id) {
//       state.UserID = id;
//     },
//   },
//   actions: {
//     async TesterLogin({ commit }, userData) {
//       const { data } = await testerLogin(userData);
//       commit('setNickname', data.nickname);
//       commit('setUserType', 'tester');
//       commit('setUserID', data.id);
//       const splitToken = data.token.split(' ');
//       commit('setToken', splitToken[1]);
//       saveUserIdToCookie(data.id);
//       saveUserTypeToCookie('tester');
//       saveUserNicknameToCookie(data.nickname);
//       saveAuthToCookie(splitToken[1]);
//       return data;
//     },
//     async MakerLogin({ commit }, userData) {
//       const { data } = await makerLogin(userData);
//       commit('setMakerNickname', data.nickname);
//       console.log('store/index.js' + data);
//       console.log(data);
//       return data;
//     },
//     async UserTypeChoice({ commit }, userData) {
//       const data = userData;
//       commit('setUserType', data);
//       console.log(data);
//     },
//   },
// });
