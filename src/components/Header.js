import React from 'react';
import logo from '../images/header/logo.svg';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';

export default (props) => {

  const onLogoutClick = (event) => {
    console.log('Тыц!');
  }

  return (
    <header className='header' >
      <img className='header__logo'
        src={logo}
        alt='Логотип' />
      <div className='header__children'>
        <Route exact path='/'>
          <p>Тут мыло будет</p>
        </Route>
        <Switch>
          <Route path='/sign-in'>
            <Link className='header__link' to='/sign-up'>Регистрация</Link>
          </Route>
          <Route path='/sign-up'>
            <Link className='header__link' to='/sign-in'>Вход</Link>
          </Route>
          <Route exact path='/'>
            <Link className='header__link header__link_logout' onClick={onLogoutClick}>Выход</Link>
          </Route>
        </Switch>
      </div>
    </header>
  );
}
