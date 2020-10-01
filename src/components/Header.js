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

const Header = () => {

    return (
        <HeaderContent className="header py-3 px-3 bg-fit-white-300 text-fit-dark-500">
            <div className="container header__content">
                <Logo />
                <Menu />
            </div>
        </HeaderContent>
    )
}

export default Header;