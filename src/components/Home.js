import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrappperHome = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: auto;

    .intro {
        width: 100vw;
        padding: 0 40px;
    }

    h1{
        @media(min-width: 20em) {
            font-size: 1.2em;
            margin-bottom: 0px;
        }
        @media(min-width: 40em) {
            font-size: 2em;
            margin-bottom: 20px;
        }

    }
    h2{
        
        @media(min-width: 20em) {
            font-size: 2.1rem;
            line-height: 1em;
        }
        @media(min-width: 40em) {
            font-size: 4em;
            line-height: .2rem;
        }
        position: relative;
        font-size: 4em;
        width: auto;
        display: inline-block;
        &:before{
            content: '';
            border: 1px solid #A9B8CA;
            position: absolute;
            top: 57%;
            left: -30px;
            @media(min-width: 20em) {
                width: 15px;
                left: -20px;
            }
            @media(min-width: 40em) {
                width: 20px;
                left: -30px;
            }
        }
        &:after{
            content: '';
            border: 1px solid #A9B8CA;
            position: absolute;
            top: 50%;
            right: -30px;
            
            @media(min-width: 20em) {
                width: 15px;
                right: -20px;
            }
            @media(min-width: 40em) {
                width: 20px;
                right: -30px;
            }
        }
    }
    
    .intro__mas{
        font-size: .8em;
        position: absolute;
        right: 0px;
        bottom: 0px;
        @media(min-width: 20em) {
            font-size: .3em;
            bottom: -20px;
        }
        @media(min-width: 40em) {
            font-size: .2em;
            bottom: -33px;
        }
    }
    .intro__dev{
        font-size: .8em;
        position: absolute;
        left: 0px;
        @media(min-width: 20em) {
            font-size: .3em;
            bottom: -20px;
        }
        @media(min-width: 40em) {
            font-size: .2em;
            bottom: -33px;
        }
        
    }

`;

const Home = () => {
    
    return(
        
        <WrappperHome>
            <div className="container font-global intro">
                <h1>Mi nombre:</h1>
                <h2>Manuel Villagordo
                <small className="intro__mas"><Link to="/quien-soy">Saber más</Link></small>
                <small className="intro__dev"><Link to="/que-hago">desarrollador web</Link></small>
                </h2>
            </div>
        </WrappperHome>
    )
}

export default Home;