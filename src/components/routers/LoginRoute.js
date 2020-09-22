import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const LoginRoute = ({
    isAuthenticated,
    component: Component,
    ...rest 
}) => {

    return (
        <Route 
            component={(props) => (
                (!isAuthenticated)
                ? <Component { ...props } /> : <Redirect to="/auth/login" />
            )}
        />
    )
}

export default LoginRoute;