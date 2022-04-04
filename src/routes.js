import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from './App.jsx';
import visualizador from './components/visualizador';

function Routes() {
  //const rutaIIS=""; //Pruebas
  const rutaIIS="/OMNIPAGE";  //Produccion
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={rutaIIS+"/ver"} component={visualizador}/>
        <Route exact path={rutaIIS} component={App}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
