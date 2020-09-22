import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home';
import QuienSoy from '../../components/QuienSoy';
import QueHago from '../../components/QueHago';
import Noticias from '../../components/Noticias';
import NoticiaScreen from '../../components/NoticiaScreen';

const PageRoutes = () => {


    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/quien-soy" component={QuienSoy}></Route>
            <Route path="/que-hago" component={QueHago}></Route>
            <Route path="/public/noticias" component={Noticias}></Route>
            <Route path="/noticias/:url" component={NoticiaScreen}></Route>

            <Redirect to="/" />
        </Switch>
    )
}

export default PageRoutes;