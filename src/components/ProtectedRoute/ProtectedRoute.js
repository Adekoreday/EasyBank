import React from 'react';
import Route from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({component: Component, ...data}) => {
    
    <Route
    {...data}
    render={() => ()}
    />
}

export default ProtectedRoute;