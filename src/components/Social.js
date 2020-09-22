import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div` 
    display:flex;
    justify-content: left;
    padding: 30px 0;

`;


const Social = () => {

    return (
        <SocialContainer className="Social">
            <a className="instagram">Instagram</a>
            <a className="twitter">Twitter</a>
        </SocialContainer>
    )
}

export default Social;