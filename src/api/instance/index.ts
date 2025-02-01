import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });
  return instance;
};
// https://e6f4-125-136-11-232.ngrok-free.app/
// https://port-0-peep-qxz2eltwz9onl.sel5.cloudtype.app/
const BASE_URL = 'https://port-0-peep-qxz2eltwz9onl.sel5.cloudtype.app/';

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
