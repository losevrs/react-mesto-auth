import React, { useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute'
import MainPage from './MainPage';
import Header from './Header';
import Login from './forms/Login';
import Register from './forms/Register';

export default () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  return (
    <div className='page'>
      <Switch>
        <Route path='/sign-in'>
          <Header>
            <Link className='header__link' to='/sign-up'>Регистрация</Link>
          </Header>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <Header>
            <Link className='header__link' to='/sign-in'>Вход</Link>
          </Header>
          <Register />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} component={MainPage} />
      </Switch>
    </div>
  );
}
