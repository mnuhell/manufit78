import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from './actions/auth';

const MenuContainer = styled.nav`

    .ul-menu{
        display:grid;
    	grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;

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


    return (
        <MenuContainer className="font-culum text-dark-fit-500 menu uppercase">
            {/* <ul className="ul-menu">

                <li className="li-menu">
                    <Link to="/quien-soy"> Quien soy </Link>
                </li>
                <li className="li-menu">
                    <Link to="/que-hago"> Que hago </Link>
                </li>

            </ul> */}
        </MenuContainer>
    )
}

export default Menu;
