import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Users from './pages/Users'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
};