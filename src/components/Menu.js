import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from './actions/auth';

const MenuContainer = styled.nav`
    
    .li-menu{
        display: inherit;
        vertical-align: middle;
        a{
            font-size: .75rem;
            svg{
                font-size: 1.4em;
            }
        }
    }

    .login{
        position: relative;
        text-align: center;
        font-size: .8em;

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
        <MenuContainer className="font-culum text-dark-fit-500 text-right menu uppercase">
            <ul className="ul-menu flex justify-end gap-5 sm:flex-no-wrap">
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
                        <Link to="/auth/logout" onClick={ handleLogout } title={ name } > <FaRegUserCircle /> </Link>
                    </li> : 
                    <li className="li-menu">
                        <Link to="/auth/login" title="Haz loguin" onClick={ handleLogout }
                        
                        > <FaRegUserCircle /> </Link>
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