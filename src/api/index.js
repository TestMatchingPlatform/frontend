import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    withCredentials: true,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
