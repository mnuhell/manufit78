import React from 'react';
import { FaInstagram, FaTwitterSquare, FaLinkedin, FaReact, FaPhp, FaHtml5, FaCss3, FaGithubAlt  } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
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
        border-bottom: 1px solid #191A28;
        min-height: 9em;
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

    .skills{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(5, 1fr);
        font-size: 1.8em;
        margin-bottom: 1em;
    }

`;

const RightColumn = styled.div`
    padding: 20px;

    .contacto{
        min-height: 9em;
        border-bottom: 1px solid #191A28;
        margin-bottom: 2em;
    }
    .contacto__title{
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
        line-height: 1em;
        
    }
    .title{
        font-size: 1.5em;
    }
    .box{
        margin-bottom: 1.5em;
    }

    .social__box{
        display: grid;
        grid-template-columns: repeat(3, 10%);
        grid-gap: 1em;
        .title{
            margin-bottom: 1.5em;
        }
        .icons{
            font-size: 1.5em;
            transition: color .4s ease-in-out;
            &:hover{
                color: #98A6B6;
            }
        }
    }


    
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
                        Junio 2009 - Marzo 2015
                        <div className="expe__case-place ">
                            Orihuela, España
                        </div>
                        
                    </div>
                    <div className="expe__case-work">
                        Wordpress, Prestashop
                    </div>
                </div>
                <div className="expe__case-unit">
                    <div className="expe__case-date">
                        Junio 2015 - Mayo 2017
                        <div className="expe__case-place ">
                            Barcelona, España
                        </div>
                        
                    </div>
                    <div className="expe__case-work">
                        Ecommerce Magento 1.9
                    </div>
                </div>
                    <div className="expe__case-unit">
                        <div className="expe__case-date">
                            Junio 2017 - Mayo 2018
                            <div className="expe__case-place ">
                                Madrid, España
                            </div>
                            
                        </div>
                        <div className="expe__case-work">
                            Ecommerce Magento 2.0
                        </div>
                    </div>
                    <div className="expe__case-unit">
                        <div className="expe__case-date">
                            Diciembre 2018 - Julio 2019
                            <div className="expe__case-place ">
                                Alicante, España
                            </div>
                            
                        </div>
                        <div className="expe__case-work">
                            Web php Symfony
                        </div>
                    </div>
                    <div className="expe__case-unit">
                        <div className="expe__case-date">
                            Diciembre 2018 - actualidad
                            <div className="expe__case-place ">
                                Catral, España
                            </div>
                            
                        </div>
                        <div className="expe__case-work">
                            ISP con PHP
                        </div>
                    </div>
                    <div className="expe__case-unit">
                        <div className="expe__case-date">
                            Diciembre 2020 - actualidad
                            <div className="expe__case-place ">
                                Catral, España
                            </div>
                        </div>
                        <div className="expe__case-work">
                            <p>Proyecto personal, Laravel y Vue. Reserva clases Crossfit </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="expe">
                <h2 className="expe__title"> Skills </h2>

                <div className="expe__case-unit skills">
                    <a href="#p" title="React"><FaReact /></a>
                    <a href="#p" title="PHP"><FaPhp /></a>
                    <a href="#p" title="HTML"><FaHtml5 /></a> 
                    <a href="#p" title="CSS3"><FaCss3 /></a> 
                    <a href="#p" title="Javascript"><DiJavascript1 /></a>    
                </div>

                <h2 className="expe__title"> Cuenta Github </h2>
                <div className="expe__case-unit skills">
                    <a href="https://github.com/mnuhell" title="Github"><FaGithubAlt /></a>    
                </div>
            </div>
            
        </LeftColumn>

        <RightColumn className="">
            <div className="contacto">
                <h2 className="contacto__title"> Información de contácto</h2>
            </div>
            <div className="nacimiento box">
                <h2 className="title nacimiento__title font-bold">Fecha de nacimiento</h2>
                <p className="nacimiento__content"> 30-01-1978</p>
            </div>
            <div className="nacionalidad box">
                <h2 className="title nacionalidad__title font-bold">Nacionalidad</h2>
                <p className="nacionalidad__content"> Española</p>
            </div>
            <div className="email box">
                <h2 className="title email__title font-bold">Email</h2>
                <p className="email__content"> m.villagordovera[at]gmail.com</p>
            </div>

            <div className="social box">
                <h2 className="title direccion__title font-bold">Redes sociales</h2>
                <div className="social__box">

                    <a href="https://www.instagram.com/manuffit78/" className="icons instagram" title="instagram"><FaInstagram /></a>
                    <a href="https://twitter.com/mnuhell" className="icons twitter" title="twitter"><FaTwitterSquare /></a>
                    <a href="https://www.linkedin.com/in/manuelvillagordo/" className="icons linkedin" title="LinkedIn"><FaLinkedin /></a>

                </div>
    
            </div>
        </RightColumn>    
            
        </QueHagoContainer>
    )
}

export default QueHago;