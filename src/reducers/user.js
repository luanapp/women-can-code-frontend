import { GET_USERS_ERROR, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../constants/users';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return requestLoadingState(state);
    case GET_USERS_SUCCESS:
      console.log('###', action.users);
      return requestSuccessState(state, { users: action.users });
    case GET_USERS_ERROR:
      return requestErrorState(state, { error: action.error });
    default:
      return state;
  }
};

/**
 * Fill the state with the default properties when in a loading state
 * @param {Object} state - State
 */
const requestLoadingState = state => {
  return {
    ...state,
  };
};

/**
 * Fill the state with the default properties when in a success load state
 * @param {Object} state - State
 * @param {Object} newProps - New properties to add to the state
 */
const requestSuccessState = (state, newProps) => {
  return {
    ...state,
    ...newProps,
  };
};

/**
 * Fill the state with the default properties when in a error load state
 * @param {Object} state - State
 * @param {Object} error - Error properties to add to the state
 */
const requestErrorState = (state, error) => {
  return {
    ...state,
    ...error,
  };
};
