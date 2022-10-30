import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/home';
import Detail from './containers/detail';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail/:id" component={Detail} />
      <Redirect to='/' />
    </Switch>
    // <BrowserRouter>
    //   <div>
    //     <Route path="/" component={Home} exact />
    //     <Route path="/detail/:id" component={Detail} />
    //     <Redirect to='/' />
    //   </div>
    // </BrowserRouter>
  );
}

export default Routes;
