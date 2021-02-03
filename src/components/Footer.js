import React from 'react';
import styled from 'styled-components';

const dowmload = 'https://www.dropbox.com/s/xgv5dvy8p7jmr0r/CV_MANUEL.pdf?dl=0';

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
                <p>Deploy with <a href="https://vercel.com" title="Vercel">Vercel</a> | <a href={dowmload}
                download="CV-Manuel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                > - CV - </a></p>

            </footer>
        </ContainerFooter>
    )
}

export default Footer;
