import React from 'react';
import logo from '../images/header/logo.svg';

export default (props) => {
  return (
    <header className='header' >
      <img className='header__logo'
        src={logo}
        alt='Логотип' />
      <div className='header__children'>
        {props.children}
      </div>
    </header>
  );
}
