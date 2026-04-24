/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios, {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

const apiBaseUrl = `${(import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1').replace(/\/+$/, '')}/`;

const authFetch: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

authFetch.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

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
