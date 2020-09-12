import React from 'react';

const Imagen = '../manufit78.svg';

const Logo = ( ) => {
    
    return (
        <div className="logos">
            <img className="logo" width="120" alt="Logo" src={Imagen} />
        </div>  
    )
}

export default Logo;