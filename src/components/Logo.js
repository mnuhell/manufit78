import React from 'react';
import { Link } from 'react-router-dom';

const Imagen = '../manufit78_black.svg';

const Logo = ( ) => {
    
    return (
        <div className="logos">
            <Link to="/"><img className="logo" width="120" alt="Logo" src={Imagen} /></Link>
        </div>  
    )
}

export default Logo;