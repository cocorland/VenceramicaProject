import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.jsx';
import visualizador from './components/visualizador';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/ver" component={visualizador}/>

      </Switch>

    </BrowserRouter>
  );
}

export default Routes;
