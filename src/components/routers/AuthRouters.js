import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../LoginScreen';

const AuthRoutes = () => {

    return (


            <Route
            exact
            to="/auth/login"
            component={LoginScreen} />
    
    )
}

export default AuthRoutes;