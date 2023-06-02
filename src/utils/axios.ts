import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'https://6368-212-253-220-90.ngrok-free.app'
      : 'http://localhost:3000/',
});

export default axiosInstance;
