import { GET_USERS_ERROR, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../constants/users';

import { getUsers as getUserService } from '../service/user';

export const getUsers = () => {
  return dispatch => {
    dispatch({ type: GET_USERS_REQUESTED });

    getUserService()
      .then(response => {
        dispatch({ type: GET_USERS_SUCCESS, users: response.data });
      })
      .catch(error => {
        dispatch({ type: GET_USERS_ERROR, error });
      });
  };
};
