import LoadingBar from 'react-redux-loading-bar';
import React from 'react';

/**
 * Header component.
 *
 * @param {Header.propTypes} props - Props
 * @return {React.StatelessComponent} Component
 */
const Header = () => (
  <header>
    <p />
    <LoadingBar scope="header" />
  </header>
);

export default Header;
