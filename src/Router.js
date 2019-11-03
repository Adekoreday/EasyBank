import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home/home';
import Layout from './hoc/layout/layout';
import User from './components/user/user';
import NotFound from './components/NotFound/NotFound';
import UserDashboard from './components/UserDashboard/UserDashboard';

const Router = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
      <Route path="/profile" exact component={UserDashboard} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default Router;
