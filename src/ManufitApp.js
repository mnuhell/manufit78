import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom"; 
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/scss/styles.scss';
import Home from './components/Home';
import QuienSoy from './components/QuienSoy';
import QueHago from './components/QueHago';
import Noticias from './components/Noticias';
import styled from 'styled-components';
import NoticiaScreen from './components/NoticiaScreen';
import { createBrowserHistory } from 'history'

const Main = styled.main`

    .wrapper{
        margin: 50px 0;
        padding: 0 15px;
        height: 100vh;
    }

`;

const ManufitApp = () => {

    return (
        <Main className="text-fit-white-200">
        <Header />
        
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/quien-soy" component={QuienSoy}></Route>
                <Route exact path="/que-hago/" component={QueHago}></Route>
                <Route exact path="/noticias/" component={Noticias}></Route>
                <Route path="/noticias/:url" component={NoticiaScreen}></Route>
            </Switch>
        
        <Footer />
        </Main>
    )
}

export default ManufitApp;