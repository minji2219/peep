import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
      ...config.headers,
    },
  });
  return instance;
};
const TEST_BASE_URL = `https://26fa-1-249-62-29.ngrok-free.app/`;
// const DEPLOY_BASE_URL = `https://port-0-peep-qxz2eltwz9onl.sel5.cloudtype.app/`;
const BASE_URL = TEST_BASE_URL;

export const fetchInstance = initInstance({
  baseURL: BASE_URL,
});

export const fetchAuthInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer `,
  },
});

fetchAuthInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
