import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `{  Platform.OS === 'android'
   ? 'https://63df-212-253-202-103.ngrok-free.app'
   : 'http://localhost:3000/'}`,
});

export default axiosInstance;
