import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
    .li-menu{
        a{
            font-size: .9rem;
        }
    }
`;


const Menu = () => {

    return (
        <MenuContainer className="font-global text-dark-fit-500 text-right menu uppercase">
            <ul className="ul-menu flex justify-end gap-5 sm:flex-no-wrap">
                <li className="li-menu">
                    <Link to="/"> Home </Link>
                </li>
                <li className="li-menu">
                    <Link to="/quien-soy"> Quien soy </Link>
                </li>
                <li className="li-menu">
                    <Link to="/que-hago"> Que hago </Link>
                </li>
                <li className="li-menu">
                    <Link to="/noticias"> Noticias </Link>
                </li>
            </ul>
        </MenuContainer>
    )
}

export default Menu;