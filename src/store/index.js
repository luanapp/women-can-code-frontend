import { applyMiddleware, createStore } from 'redux';

import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default createStore(
  rootReducer,
  applyMiddleware(
    loadingBarMiddleware({
      promiseTypeSuffixes: ['REQUESTED', 'SUCCESS', 'ERROR'],
    }),
    thunk
  )
);
