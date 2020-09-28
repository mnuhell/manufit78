import React, { useEffect } from 'react'; 
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import {firebase} from '../src/components/firebase/firebaseConfig';
import '../src/scss/styles.scss';
import styled from 'styled-components';
import { Provider, useDispatch } from 'react-redux';
import { store } from './components/store/store';
import AppRouters from './components/routers/AppRouters';
import { login } from './components/actions/auth';

const Main = styled.main`

    .wrapper{
        margin: 50px 0;
        padding: 0 15px;
        height: 100vh;
    }
`;

const ManufitApp = () => {

    return (
        <Provider store={ store }>
            <Main className="text-fit-white-200">
            <Header />
            
            <AppRouters />
            
            <Footer />
            </Main>
        </Provider>
    )
}

export default ManufitApp;