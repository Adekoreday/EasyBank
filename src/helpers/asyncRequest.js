import axios from 'axios';
import {getFromStorage} from './storage';

const asyncRequest = async (method, url, data) => {
  axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers.common.Authorization = `Bearer ${getFromStorage('token')}`;
  const response = await axios({
    method,
    url,
    data
  });
  return response;
};

export default asyncRequest;