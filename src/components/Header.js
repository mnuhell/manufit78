import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';


const HeaderContent = styled.header`
    
`;

const Header = () => {

    return (
        <HeaderContent className="header py-3 px-3 bg-fit-white-300 text-fit-dark-500">
            <div className="container grid grid-cols-2">
                <Logo />
                <Menu />
            </div>
        </HeaderContent>
    )
}

export default Header;