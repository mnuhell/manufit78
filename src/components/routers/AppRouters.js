import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminScreen from '../AdminScreen';
import PageRoutes from './PageRoutes';
import AuthRoutes from './AuthRoutes';
import LoginRoute from './LoginRoute';
import { useDispatch } from 'react-redux';
import {firebase} from '../firebase/firebaseConfig';
import { login } from '../actions/auth';


  const AppRouters = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged( ( user ) => {            
            if( user?.uid ) {
                dispatch( login(user.uid, user.displayName) )
                
            }
        })
        
    }, [])

    return (
        <Switch>
          

            <PrivateRoute 
              path="/admin" component={AdminScreen} isAuthenticated={isLoggedIn}
              />

            <LoginRoute 
              path="/auth"
              component={ AuthRoutes }
              isAuthenticated={isLoggedIn}
            />

            <PublicRoute 
              path="/"
              component={ PageRoutes }
              isAuthenticated={isLoggedIn}
            />    
        </Switch>
    )
  }

  export default AppRouters;