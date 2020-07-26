import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <h1>M i n e r v a</h1>
    <div className='options'>
      <Link className='option' to='/about'>
        About
      </Link>
    </div>
  </div>
);

export default Header;
