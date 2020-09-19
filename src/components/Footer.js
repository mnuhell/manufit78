import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
    bottom: 0;
    position: fixed;
    width: 100%;
    font-size: .7rem;
`;

const Footer = () => {

    return (
        <ContainerFooter className="footer py-2 text-center font-global bg-fit-white-300 text-fit-dark-500 shadow">
            <footer>
                <p><a href="" >Descarga mi CV</a></p>
            </footer>
        </ContainerFooter>
    )
}

export default Footer;