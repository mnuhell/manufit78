import React from 'react';
import styled from 'styled-components';

const QueHagoContainer = styled.div`
    margin-top: 70px;
    display: grid;
    @media(min-width: 20em) {
        grid-template-columns: 100%;
        width: 100%;
    }

    @media(min-width: 57em) {
        grid-template-columns: repeat(2, 65% 35%);
        max-width: 55em;
    }
    
    grid-gap: 20px;
    height: 100vh;
    

`;

const LeftColumn = styled.div`
    ${'' /* background-color: #26283B; */}
    padding: 20px;
    border-right: 1px solid #6A6B7B;
    .cab{
        margin-bottom: 2em;
    }
    .nombre{
        position: relative;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 700;
            .profesion{
            font-size: .3em;
            margin-top: 10px;
            position: absolute;
            right: 7px;
            bottom: -6px;
        }
    }
    .description{
        margin-top: 1.5em;
        font-size: .8em;
        line-height: 1.3em;
    }
    .expe__title{
        font-size: 1.5em;
        font-weight: 700;
        margin-bottom: .4em
    }
    .expe__case-unit{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 2em;
    }
    .expe__case-place{
        font-size: .7em;
        margin-top: -3px;
    }
`;

const RightColumn = styled.div`

    .contacto__title{
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
    }
    ${'' /* background-color: #6A6B7B; */}
    padding: 20px;
`;


const QueHago = () => {

    return (
        <QueHagoContainer className="que-hago container font-culum">
        <LeftColumn className="">    
           
            <div className="cab">
                <p className="nombre inline"> Manuell Villagordo Vera <small className="profesion">Desarrollador web</small></p>
                <p className="description"> Con mas de 10 años de experiencia en tecnologías web relizando proyectos ecommerce en las plataformas mas conocidas (Magento, Prestashop y Woocomerce) con PHP. Ahora, aprendiendo y desarrolando proyectos en Javascript con React, Vue y Node.</p>
            </div>
            
            <div className="expe">
                <h2 className="expe__title"> Experiencia </h2>
                <div className="expe__case">
                <div className="expe__case-unit">
                    <div className="expe__case-date">
                        Junio 2019 - Mayo 2019
                        <div className="expe__case-place ">
                            Barcelona, España
                        </div>
                        
                    </div>
                    <div className="expe__case-work">
                        Programador Magento
                    </div>
                </div>
                <div className="expe__case-unit">
                    <div className="expe__case-date">
                        Junio 2019 - Mayo 2019
                        <div className="expe__case-place ">
                            Barcelona, España
                        </div>
                        
                    </div>
                    <div className="expe__case-work">
                        Programador Magento
                    </div>
                </div>
                </div>
            </div>
            
        </LeftColumn>

        <RightColumn className="">
            <div className="contacto">
                <h2 className="contacto__title"> Contácto</h2>
            </div>
        </RightColumn>    
            
        </QueHagoContainer>
    )
}

export default QueHago;