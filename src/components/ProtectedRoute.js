import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, ...props }) => {
  return (
    <Route>
      {() => props.loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/sign-in' />
      }
    </Route>
  )
}
