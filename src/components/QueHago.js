import React from 'react';
import styled from 'styled-components';

const QueHagoContainer = styled.div`

    margin-top: 70px;
    display: flex;
    height: 100vh;

`;


const QueHago = () => {

    return (
        <QueHagoContainer className="que-hago container font-global">
            <h1>Que hago</h1>
        </QueHagoContainer>
    )
}

export default QueHago;