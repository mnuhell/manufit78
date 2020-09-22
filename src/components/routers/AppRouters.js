import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminScreen from '../AdminScreen';
import PageRoutes from './PageRoutes';
import AuthRoutes from './AuthRoutes';
import LoginRoute from './LoginRoute';


  const AppRouters = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Switch>
          <PublicRoute 
              path="/"
              component={ PageRoutes }
              isAuthenticated={isLoggedIn}
            />

            <PrivateRoute 
              path="/admin" component={AdminScreen} isAuthenticated={isLoggedIn}
              />

            <LoginRoute 
             path="/auth"
              component={ AuthRoutes }
              isAuthenticated={isLoggedIn}
            />
        </Switch>
    )
  }

  export default AppRouters;