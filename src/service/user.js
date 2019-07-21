import axios from 'axios';

const baseUrl = () => {
  return process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : '/api';
};

export const getUsers = () => {
  return axios.get(`${baseUrl()}/user`);
};

export const deleteUser = userId => {
  return axios.delete(`${baseUrl()}/user/${userId}`);
};
