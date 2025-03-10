import {PATH} from '@routes/path';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import getDeviceId from '@utils/getDeviceId';
import {useNavigate} from 'react-router-dom';

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
// const TEST_BASE_URL = `https://a0bf-125-136-11-232.ngrok-free.app/`;
const DEPLOY_BASE_URL = `https://port-0-peep-qxz2eltwz9onl.sel5.cloudtype.app/`;
const BASE_URL = DEPLOY_BASE_URL;

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

fetchAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error?.status === 403 && error?.code === 'ERR_BAD_REQUEST') {
      // 토큰 유효기간 만료 에러가 발생하면

      try {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refreshToken');
        const token = await fetchInstance.post('auth/refresh', '', {
          headers: {
            'refresh-token': `Bearer ${refreshToken}`,
            'Device-Id': getDeviceId(),
          },
        });

        if (token) {
          localStorage.setItem('accessToken', token.data.accessToken);
          localStorage.setItem('refreshToken', token.data.refreshToken);

          return fetchAuthInstance.request(originalRequest);
        }
        // 토큰 발급이 성공적으로 되면 access token을 업데이트하고 기존 api요청을 다시 보낸다.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        const navigate = useNavigate();
        alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
        navigate(PATH.login);
      }
      // 만약 발급이 실패하였으면 refresh token도 만료가 되었음으로 로그인을 다시 해야한다.
    }

    return Promise.reject(error);
  }
);
