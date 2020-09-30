import React, { useState, useEffect } from 'react';
import { Switch } from "react-router-dom";
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

    const [ checking, setCheking ] = useState( true );
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged( ( user ) => {            
            if( user?.uid ) {
                dispatch( login(user.uid, user.displayName) )
                setIsLoggedIn(true)
            } else {
              setIsLoggedIn(false)
            }

            setCheking( false )
            
            
        })
        
    }, [ dispatch, setIsLoggedIn, setCheking]);

    console.log(checking);
    if( checking ) {
      return (
        <h1>Espere</h1>
      )
    }

    return (
        <Switch>
          

            <PrivateRoute 
              path="/admin" component={AdminScreen}
              />

            <LoginRoute 
              path="/auth"
              component={ AuthRoutes }
            
            />

            <PublicRoute 
              path="/"
              component={ PageRoutes }
              
            />    
        </Switch>
    )
  }

  export default AppRouters;