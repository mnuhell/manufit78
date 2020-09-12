import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {

    return (
        <nav className="font-global text-fit-white-200 text-right">
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                    <Link to="/quien-soy"> Quien soy </Link>
                    <Link to="/que-hago"> Que hago </Link>
                    <Link to="/noticias"> Noticias </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;