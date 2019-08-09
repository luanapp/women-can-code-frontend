import { Redirect, Route, Router, Switch } from 'react-router';

import EditUser from './components/user/edit';
import Header from './components/base/header';
import Main from './components/base/main';
import React from 'react';
import UserComponent from './components/user';
import history from './history';

const renderRoute = ({ exact, component, subpath, url }) => (
  <Route key={subpath} path={`${url}${subpath}`} exact={exact} component={component} />
);

const render = components => ({ match: { url } }) => (
  <>
    {components.map(comp => {
      const { exact, component, subpath } = comp;
      return renderRoute({ exact, component, subpath, url });
    })}
  </>
);

const userRoutes = [
  { component: UserComponent, exact: true, subpath: '/' },
  { component: EditUser, exact: false, subpath: '/:userId' },
];

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/user" />} />
        <Route component={Header} />
      </Switch>
      <Main>
        <Route path="/user" render={render(userRoutes)} />
      </Main>
    </Router>
  );
};
