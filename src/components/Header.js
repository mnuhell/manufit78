import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';


const HeaderContent = styled.header`
    .header__content{
        display: grid;
        @media (min-width: 320px) {
            grid-template-columns: repeat(2, 25% 75%);
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        grid-gap: 20px;
    }
`;

const Header = () => {

    return (
        <>
        <div className="pub__container">
            <div className="pub">
                <p>
                Página en desarrollo con React y firebase. Puede registrarte, loguearte. se irán añadiendo mas detalles. Si quieres contribuir manda correo a manufit78@gmail.com
                </p>
                
            </div>
            <div className="arrow"> <FaArrowRight /></div>
        </div>
        <HeaderContent className="header py-3 px-3 bg-fit-white-300 text-fit-dark-500">
            <div className="container header__content">
                <Logo />
                <Menu />
            </div>
        </HeaderContent>
        </>
    )
}

export default Header;