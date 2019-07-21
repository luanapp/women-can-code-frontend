import PropTypes from 'prop-types';
import React from 'react';
import UserComponent from '../user';

/**
 * Main view port component.
 *
 * @param {Main.propTypes} props - Props
 * @return {React.StatelessComponent} Component
 */
const Main = ({ parentBem }) => (
  <div className={parentBem('main')}>
    <UserComponent />
  </div>
);

Main.propTypes = {
  parentBem: PropTypes.func.isRequired,
};

export default Main;
