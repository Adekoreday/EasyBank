import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({component: Component, ...data}) => {
    const isAuth = useSelector(state => state.user.isAuth);
  return(  <Route
    {...data}
    render={(props) => (
        isAuth === true ? <Component {...props}/> : <Redirect to={{pathname: '/'}}/>
    )}
    />);
}

export default withRouter(ProtectedRoute);