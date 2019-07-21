import Header from './components/base/header';
import Main from './components/base/main';
import React from 'react';
import { block } from 'bem-cn';

const blockClassName = block('app-root');

const App = () => {
  return (
    <div className={blockClassName()}>
      <Header parentBem={blockClassName} />
      <Main parentBem={blockClassName} />
    </div>
  );
};

export default App;
