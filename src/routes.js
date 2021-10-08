import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App.jsx';
import Album from './components/album.js';
import AlbumII from './components/albumII.js';
import visualizador from './components/visualizador';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={App}/>
      <Switch>
        <Route path="/GAF" component={Album} exact/>
        <Route path="/GAF/Nivel2" component={AlbumII}/>
        <Route path="/ver" component={visualizador}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
