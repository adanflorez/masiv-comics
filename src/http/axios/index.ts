// axios
import axios, { AxiosResponse } from 'axios';

const urlApi =
  process.env.NODE_ENV === 'production'
    ? 'https://xkcd.com'
    : 'http://localhost:8080';
// Create a api axios instance
const api = axios.create({
  baseURL: urlApi
});

// Set Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse<unknown, unknown>) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
