import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
    
    return (
        <header className="header bg-fit-dark-900 py-5">
            <div className="container grid grid-cols-2">
                <Logo />
                <Menu />
            </div>
        </header>
    )
}

export default Header;