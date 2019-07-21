import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
);
