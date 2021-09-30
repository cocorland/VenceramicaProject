import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.jsx';
import visualizador from './components/visualizador';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/ver" component={visualizador}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
