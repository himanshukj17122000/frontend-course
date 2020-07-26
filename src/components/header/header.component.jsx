import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='header-title'>
    <h1>Minerva. 💡🧠📚</h1>
    </div>
    <div className='options'>
      <Link className='option' to='/about'>
        <h2>
        About
        </h2>
      </Link>
    </div>
  </div>
);

export default Header;
