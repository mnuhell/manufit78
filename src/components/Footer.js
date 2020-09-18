import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: .7rem;
`;



const Footer = () => {

    return (
        <ContainerFooter>
            <footer className="py-2 text-center font-global bg-fit-white-300 text-fit-dark-500 shadow">
                <p><a href="" >Descarga mi CV</a></p>
                
            </footer>
        </ContainerFooter>
    )
}

export default Footer;