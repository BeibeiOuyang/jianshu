import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}

export default Routes;
