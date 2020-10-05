import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from './actions/auth';

const MenuContainer = styled.nav`
    
    .ul-menu{
        display:grid;
        @media (min-width: 320px) {
            grid-template-columns: repeat(3, 80px);
        }
        @media (min-width: 320px) {
            grid-template-columns: repeat(3, 160px);
        }
    
        justify-content: center;
        align-items: center;
        justify-items: flex-end;
    }
    .li-menu{
        display: inherit;
        vertical-align: middle;
        width: 100%;
        text-align: center;
        a{
            font-size: .7rem;
            svg{
                font-size: 1.4em;
                float: right;
            }
        }
    }

    .login__menu{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            padding-right: 5px;
        }
    }

    .login__icon{
        float: right;
    }

    .login__container{
        opacity: 0;
        position: absolute;
        transition: all .5s ease;
        width: 100%;
        background-color: white;
        height: 0;
        right: 0;
        a{
            display: flex;
            flex-direction: row;
            padding: 10px 0 10px 0;
            border-bottom: 1px solid #2A2C42;
        }
    }
    
    .login{
        position: relative;
        display: inline-block;
        text-align: center;

        &:hover .login__container{
            position: absolute;
            background-color: #DDE3EA;
            height: 200px;
            padding: 20px 10px 20px 10px;
            opacity: 1;
            transform: translateY(0);
            top: 10px;
            z-index: -1;
        }
            
    }
`;


const Menu = () => {

    const user = useSelector( state => state.auth); 
    const { uid, name} = user;

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }
        

    return (
        <MenuContainer className="font-culum text-dark-fit-500 menu uppercase">

            <ul className="ul-menu">
                {/* <li className="li-menu">
                    <Link to="/"> Home </Link>
                </li> */}
                <li className="li-menu">
                    <Link to="/quien-soy"> Quien soy </Link>
                </li>
                <li className="li-menu">
                    <Link to="/que-hago"> Que hago </Link>
                </li>
                {
                    (uid) ? 
                    <li className="li-menu login">
                        <div className="login__menu">
                            <Link to="" title={ name } > { name } </Link>
                            <span className="login__icon"><FaRegUserCircle /></span>
                        </div>
                        <div className="login__container">
                            <Link to="/auth/logout" onClick={ handleLogout } title="logout" > Logout </Link>
                            <Link to="/admin/posts" title="ver artículos" > Artículos </Link>
                            <Link to="/admin/account" title="mi cuenta" > Mí cuenta </Link>
                        </div>
                    </li> : 
                    <li className="li-menu login__menu">
                        <Link to="/auth/login" title="Haz loguin" onClick={ handleLogout }
                        > Entrar </Link>
                        <span className="login__icon"><FaRegUserCircle /></span>
                    </li>
                }
                
                {/* <li className="li-menu">
                    <Link to="/noticias"> Noticias </Link>
                </li> */}
            </ul>
        </MenuContainer>
    )
}

export default Menu;