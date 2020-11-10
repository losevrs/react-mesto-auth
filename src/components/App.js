import React, { useEffect, useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute'
import MainPage from './MainPage';
import Header from './Header';
import Login from './forms/Login';
import Register from './forms/Register';

export default () => {

  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory();

  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <Register />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} component={MainPage} />
      </Switch>
    </div>
  );
}
