import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import styled from 'styled-components';

const dowmload = 'https://www.dropbox.com/s/1z9a7hrdxkjp174/CV-MANUEL.pdf?dl=0';

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
                <p>Deploy with <a href="https://vercel.com" title="Vercel">Vercel</a></p>
                <small> <a href={dowmload} download="CV-Manuel.pdf">Descarga mi CV</a></small>
            </footer>
        </ContainerFooter>
    )
}

export default Footer;