import {
  DELETE_USER_ERROR,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  INSERT_USER_ERROR,
  INSERT_USER_REQUESTED,
  INSERT_USER_SUCCESS,
} from '../constants/users';
import {
  deleteUser as deleteUserService,
  getUsers as getUserService,
  insertUser as insertUserService,
} from '../service/user';

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

export const deleteUser = userId => {
  return dispatch => {
    dispatch({ type: DELETE_USER_REQUESTED });

    deleteUserService(userId)
      .then(() => {
        dispatch({ type: DELETE_USER_SUCCESS });
        dispatch(getUsers());
      })
      .catch(error => {
        dispatch({ type: DELETE_USER_ERROR, error });
      });
  };
};

export const insertUser = user => {
  return dispatch => {
    dispatch({ type: INSERT_USER_REQUESTED });

    insertUserService(user)
      .then(response => {
        dispatch({ type: INSERT_USER_SUCCESS, user: response.data });
      })
      .catch(error => {
        dispatch({ type: INSERT_USER_ERROR, error });
      });
  };
};
