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

const Main = styled.main`

    .wrapper{

        padding: 0 15px;

    }

`;

const ManufitApp = () => {

    return (
        <Main className="bg-fit-white-100 ">
        <Header />
        <div className="wrapper">
            
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/quien-soy" component={QuienSoy}></Route>
                <Route exact path="/que-hago" component={QueHago}></Route>
                <Route path="/noticias/" component={Noticias}></Route>
                <Route path="/noticias/:title" component={NoticiaScreen}></Route>
            </Switch>
        </div>
        <Footer />
        </Main>
    )
}

export default ManufitApp;