import React from 'react';
import logo from '../images/header/logo.svg';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import { tokenDelete } from '../utils/token';

export default (props) => {
  const history = useHistory();

  const onLogoutClick = () => {
    tokenDelete();
    history.push('/sign-in')
  }

  return (
    <header className='header' >
      <img className='header__logo'
        src={logo}
        alt='Логотип' />
      <div className='header__children'>
        <Route exact path='/'>
          <p>{props.userEmail}</p>
        </Route>
        <Switch>
          <Route path='/sign-in'>
            <Link className='header__link' to='/sign-up'>Регистрация</Link>
          </Route>
          <Route path='/sign-up'>
            <Link className='header__link' to='/sign-in'>Вход</Link>
          </Route>
          <Route exact path='/'>
            <Link className='header__link header__link_logout' to='/sign-in' onClick={onLogoutClick}>Выход</Link>
          </Route>
        </Switch>
      </div>
    </header>
  );
}
