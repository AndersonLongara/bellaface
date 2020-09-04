import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';
import GLobalStyle from './styles/global';

const  App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GLobalStyle />
  </BrowserRouter>
);


export default App;
