import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 43rem;
`;

const Imagen = styled.image`
    img{
        
        width: 130px;
        height: 130px;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 50%;
        margin: 0 auto 10px auto;
    }

`;

const Face = 'face-manu';


const QuienSoy = () => {
    return (
        <Wrapper className="container font-global">
            <Imagen className="text-center"> <img src={`./assets/${Face}.jpg`} className="text-center shadow border-solid border-4 mb-4 border-fit-dark-400" alt="Mi" /></Imagen>
            <div className="notas">
                <p>Mi nombre es Manuel, vivo en Orihuela, Alicante desde hace unos 14 años junto Veronica, mi mujer desde hace 13, mas o menos ;).
                </p>
                <p>Mi experiencia laboral, he trabajo como <strong className="text-fit-dark-400">Delineante</strong>, fue mi primera opción y me gané la vida así durante 10 años de vida en las que aprendí mucho y
                y conocí a muy buena gente. Mucha con la cual todavía tengo relación.</p>
                <p></p>
            </div>
        </Wrapper>
    )
}

export default QuienSoy;