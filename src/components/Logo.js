import React from 'react';

const Imagen = '../manufit78_black.svg';

const Logo = ( ) => {
    
    return (
        <div className="logos">
            <img className="logo" width="120" alt="Logo" src={Imagen} />
        </div>  
    )
}

export default Logo;