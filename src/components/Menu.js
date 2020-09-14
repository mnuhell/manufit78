import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
    ul{
        li{
            

        }
    }
`;


const Menu = () => {

    return (
        <MenuContainer className="font-global text-dark-fit-500 text-right menu uppercase text-xs">
            <ul className="flex justify-end gap-5 sm:flex-no-wrap">
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/quien-soy"> Quien soy </Link>
                </li>
                <li>
                    <Link to="/que-hago"> Que hago </Link>
                </li>
                <li>
                    <Link to="/noticias"> Noticias </Link>
                </li>
            </ul>
        </MenuContainer>
    )
}

export default Menu;