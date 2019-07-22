import axios from 'axios';

const baseUrl = () => {
  return process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : '/api';
};

const headers = {
  'Content-Type': 'application/json',
};

export const getUsers = () => {
  return axios.get(`${baseUrl()}/user`);
};

export const getUserById = userId => {
  return axios.get(`${baseUrl()}/user/${userId}`);
};

export const insertUser = user => {
  return axios.post(`${baseUrl()}/user`, user, headers);
};

export const updateUser = user => {
  return axios.put(`${baseUrl()}/user/${user.id}`, user, headers);
};

export const deleteUser = userId => {
  return axios.delete(`${baseUrl()}/user/${userId}`);
};
