/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios, {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';
import { initialState } from './appContext';

const authFetch: AxiosInstance = axios.create({
  baseURL: 'https://black-belt-api.vercel.app/api/v1/',
});

authFetch.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = initialState;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authFetch;
