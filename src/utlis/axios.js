import axios from 'axios';
import { HOST_API } from './config';
// config

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

axiosInstance.interceptors.request.use((config) => {
//   config.headers.Authorization = `${window.localStorage.getItem('accessToken')}`;
  return config;
});
export default axiosInstance;
