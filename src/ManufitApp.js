import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../src/components/Header';
import '../src/scss/styles.scss';
import Home from './components/Home';
import QuienSoy from './components/QuienSoy';
import QueHago from './components/QueHago';
import Noticias from './components/Noticias';

const ManufitApp = () => {

    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/quien-soy" component={QuienSoy}></Route>
            <Route exact path="/que-hago" component={QueHago}></Route>
            <Route exact path="/noticias" component={Noticias}></Route>
        </Switch>
        </>
    )
}

export default ManufitApp;