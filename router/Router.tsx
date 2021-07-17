import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router';

const Home = loadable(() => import('@pages/Home'));
const Login = loadable(() => import('@pages/Login'));

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Router;
