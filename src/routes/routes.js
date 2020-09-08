import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RoutesWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {

  const { signed } = store.getState().auth;

  if(!signed && isPrivate) {
    return <Redirect to="/singIn" />
  }

  if(signed && !isPrivate) {
    return <Redirect to="/" />
  }

  return (
    <Route
      {...rest}
      component={Component}
    />
  )
}

