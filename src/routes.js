import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import React from 'react';

export default () => {
  return (
    <Router>
      <Route component={App} path="/" />
    </Router>
  );
};
