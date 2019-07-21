import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import modalReducer from '../reducers/modal';
import userReducer from '../reducers/user';

export default combineReducers({
  loadingBar: loadingBarReducer,
  user: userReducer,
  modal: modalReducer,
});
