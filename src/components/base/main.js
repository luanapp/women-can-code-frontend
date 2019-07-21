import './main.scss';

import PropTypes from 'prop-types';
import React from 'react';
import UserList from '../user/list';

/**
 * Main view port component.
 *
 * @param {Main.propTypes} props - Props
 * @return {React.StatelessComponent} Component
 */
const Main = ({ parentBem }) => (
  <div className={parentBem('main')}>
    <UserList />
  </div>
);

Main.propTypes = {
  parentBem: PropTypes.func.isRequired,
};

export default Main;
