import PropTypes from 'prop-types';
import React from 'react';
/**
 * Main view port component.
 *
 * @param {Main.propTypes} props - Props
 * @return {React.StatelessComponent} Component
 */
const Main = ({ children }) => <div>{children}</div>;

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: '',
};

export default Main;
