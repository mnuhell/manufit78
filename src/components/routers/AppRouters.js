import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../components/Home';
import QuienSoy from '../../components/QuienSoy';
import QueHago from '../../components/QueHago';
import Noticias from '../../components/Noticias';
import NoticiaScreen from '../../components/NoticiaScreen';
import PrivateRoute from './PrivateRoute';
import AdminScreen from '../AdminScreen';
import LoginScreen from '../LoginScreen';


  const AppRouters = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/quien-soy" component={QuienSoy}></Route>
            <Route path="/que-hago" component={QueHago}></Route>
            <Route path="/noticias" component={Noticias}></Route>
            <Route path="/noticias/:url" component={NoticiaScreen}></Route>

            <PrivateRoute 
              exact path="/admin" component={AdminScreen} isAuthenticated={isLoggedIn}
            />

            <Route path="/auth/login" component={LoginScreen} />
        </Switch>
    )
  }

  export default AppRouters;