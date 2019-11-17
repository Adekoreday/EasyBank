import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/auth/auth';
import User from './components/user/user';
import NotFound from './components/NotFound/NotFound';
import Home from './containers/home/home';
import UserDashboard from './components/UserDashboard/UserDashboard';


const Router = () => (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/user" exact component={User} />
      <Route path="/home" exact component={Home}/>
      <Route path="/profile" exact component={UserDashboard} />
      <Route component={NotFound} />
    </Switch>
);
export default Router;
