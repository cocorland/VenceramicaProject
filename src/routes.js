import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from './App.jsx';
import visualizador from './components/visualizador';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/ver" component={visualizador}/>
        <Route exact path="/:directory" component={App}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
