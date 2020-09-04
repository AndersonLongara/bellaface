import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Entrar from '../pages/Entrar';
import Inicial from '../pages/Inicial';
import Carrinho from '../pages/Carrinho';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Inicial}/>
    <Route path="/Entrar" component={Entrar}/>
    <Route path="/carrinho" component={Carrinho}/>
  </Switch>
)

export default Routes;
