import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const token = useSelector((state) => state.userReducer.token)
    return (
        <Route {...rest} render={props => (
            token && restricted ?
                <Redirect to="/users/current" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;