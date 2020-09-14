import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;



const Footer = () => {

    return (
        <ContainerFooter>
            <footer className="py-2 text-center">
                <p className="text-fit-dark-500">todos los derechos reservados</p>
            </footer>
        </ContainerFooter>
    )
}

export default Footer;