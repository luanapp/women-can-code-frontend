import PropTypes from 'prop-types';
import React from 'react';

/**
 * Header component.
 *
 * @param {Header.propTypes} props - Props
 * @return {React.StatelessComponent} Component
 */
const Header = ({ parentBem }) => (
  <header className={parentBem('header')}>
    <p className={parentBem({ text: 'top' })} />
  </header>
);

Header.propTypes = {
  parentBem: PropTypes.func.isRequired,
};

export default Header;
