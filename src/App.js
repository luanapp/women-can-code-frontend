import Header from './components/base/header';
import LoadingBar from 'react-redux-loading-bar';
import Main from './components/base/main';
import React from 'react';
import { block } from 'bem-cn';

const blockClassName = block('app-root');

const App = () => {
  return (
    <div className={blockClassName()}>
      <Header parentBem={blockClassName}>
        <LoadingBar scope="header" />
      </Header>
      <Main parentBem={blockClassName} />
    </div>
  );
};

export default App;
