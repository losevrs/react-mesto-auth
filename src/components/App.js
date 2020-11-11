import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute'
import MainPage from './MainPage';
import Header from './Header';
import Login from './forms/Login';
import Register from './forms/Register';

import { tokenGet, tokenSet } from '../utils/token';
import { getUser, signUp, signIn } from '../utils/yapApi';

export default () => {

  const [authData, setAuthData] = useState({ _id: '', email: '' });
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const [showInfo, setShowInfo] = useState(false);
  const [successInfo, setSuccessInfo] = useState(false);

  const onCloseInfo = (url) => {
    setShowInfo(false);
    if (successInfo) {
      history.push(url);
    }
  }

  const handleTokenCheck = () => {
    const token = tokenGet();
    if (!token) {
      history.push('/sign-in');
      return;
    }

    getUser(token)
      .then((res) => {
        if (res) {
          const authData = {
            _id: res.data._id,
            email: res.data.email
          }
          setAuthData(authData);
          setLoggedIn(true);
          history.push('/')
        }
      });
  }

  const onSubmitLogin = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        tokenSet(res.token);
        setLoggedIn(true);
        history.push('/')
      })
      .catch((error) => {
        setSuccessInfo(false);
        setShowInfo(true);
        console.log(error);
      });

    return;
  }

  const onSubmitRegister = ({ email, password }) => {
    signUp(email, password)
      .then((res) => {
        if (res) {
          const authData = {
            _id: res.data._id,
            email: res.data.email
          }
          setAuthData(authData);
          setSuccessInfo(true);
          setShowInfo(true);
        }
      })
      .catch((error) => {
        setSuccessInfo(false);
        setShowInfo(true);
        console.log(error);
      })
  }

  useEffect(() => {
    handleTokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='page'>
      <Header
        userEmail={authData.email} />
      <Switch>
        <Route path='/sign-in'>
          <Login
            onSubmit={onSubmitLogin}
            showInfo={showInfo}
            success={successInfo}
            onCloseInfo={() => onCloseInfo('/')}
          />
        </Route>
        <Route path='/sign-up'>
          <Register
            onSubmit={onSubmitRegister}
            showInfo={showInfo}
            success={successInfo}
            onCloseInfo={() => onCloseInfo('/sign-in')}
          />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} component={MainPage} />
      </Switch>
    </div>
  );
}
