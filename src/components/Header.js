import React from 'react';
import logo from '../images/header/logo.svg';

export default () => {
    return (
      <header className='header' >
        <img className='header__logo'
          src={logo}
          alt='Логотип' />
      </header>
    );
}