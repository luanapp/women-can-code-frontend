import axios from 'axios';

const baseUrl = () => {
  return process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : '/api';
};

export const getUsers = () => {
  return axios.get(`${baseUrl()}/user`);
};
