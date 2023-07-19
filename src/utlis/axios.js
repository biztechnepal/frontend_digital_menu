import axios from 'axios';
import { HOST_API } from './config';
const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error.response;
    if (response.status === 413) {
      alert('File Size Is Too Large');
    }
    // if (response.status === 400) {
    //   window.location.href = '/menu/error';
    // }
    // return error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use((config) => {
  //   config.headers.Authorization = `${window.localStorage.getItem('accessToken')}`;
  return config;
});
export default axiosInstance;
