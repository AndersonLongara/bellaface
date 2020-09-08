import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import SingIn from '../pages/SingIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/singin" component={SingIn} />
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
      <Route path="" component={() => <h1 style={{color: "#fff",
        display: 'flex', fontSize: '100px', height: '100vh',
        justifyContent: 'center', alignItems: 'center' }}>404</h1>}
      />
    </Switch>
  );
}
