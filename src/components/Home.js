import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrappperHome = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: auto;
    h1{
        font-size: 2.5rem;
        line-height: .2rem;
    }
    h2{
        position: relative;
        font-size: 4rem;
        width: auto;
        display: inline-block;
    }
    h3{
        font-size: 1.5rem;
        margin-top: -25px;
        width: auto;
    }
    .intro__mas{
        font-size: .8rem;
        position: absolute;
        right: 0px;
        bottom: 5px;
    }

`;

const Home = () => {

    return(
        
        <WrappperHome>
            <div className="container font-global intro">
                <h1>Hola!</h1>
                <h2>Manuel Villagordo
                <small className="intro__mas"><Link to="/quien-soy">Saber más</Link></small>
                </h2>
                <h3 className="text-fit-white-200">Desarrollador Web</h3>
            </div>
        </WrappperHome>
    )
}

export default Home;