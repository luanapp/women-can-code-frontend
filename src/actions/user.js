import {
  DELETE_USER_ERROR,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUESTED,
  GET_USER_SUCCESS,
  SAVE_USER_ERROR,
  SAVE_USER_REQUESTED,
  SAVE_USER_SUCCESS,
} from '../constants/users';
import {
  deleteUser as deleteUserService,
  getUserById as getUserByIdService,
  getUsers as getUserService,
  insertUser as insertUserService,
  updateUser as updateUserService,
} from '../service/user';
import { isEmpty, isNil } from 'ramda';

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

export const getUserById = userId => {
  return dispatch => {
    dispatch({ type: GET_USER_REQUESTED });

    getUserByIdService(userId)
      .then(response => {
        dispatch({ type: GET_USER_SUCCESS, user: response.data });
      })
      .catch(error => {
        dispatch({ type: GET_USER_ERROR, error });
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

export const saveUser = user => {
  return dispatch => {
    const saveCall = !isNil(user.id) && !isEmpty(user.id) ? updateUserService : insertUserService;
    dispatch({ type: SAVE_USER_REQUESTED });

    saveCall(user)
      .then(response => {
        dispatch({ type: SAVE_USER_SUCCESS, user: response.data });
      })
      .catch(error => {
        dispatch({ type: SAVE_USER_ERROR, error });
      });
  };
};
