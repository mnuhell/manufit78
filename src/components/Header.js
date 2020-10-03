import React from 'react';
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

const Pub = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    top: 100px;
    right: 0;
    padding: 5px;
    background-color: rgb(0 0 0);
    width: 250px;
    height: 150px;
    text-align: center;
    font-size: .8em;
    z-index: 9999;

`;

const Header = () => {

    return (
        <>
        <Pub className="pub">Página en desarrollo con React y firebase. Puede registrarte, loguearte. se irán añadiendo mas detalles. Si quieres contribuir manda correo a manufit78@gmail.com</Pub>
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