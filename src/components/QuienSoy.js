import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 43rem;
    margin-top: 70px;
    .notas__intro{
        padding: 0 20px;
        p{
            margin-bottom: 10px;
            line-height: 1.2rem;
        }
    }

`;

const Imagen = styled.image`

    
        img{
            width: 130px;
            height: 130px;
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 50%;
            margin: 0 auto 50px auto;
            background-size: cover;
            background-position: center;
    
        }
        
`;

const Face = 'face-manu';


const QuienSoy = () => {
    return (
        <Wrapper className="container font-global notas">
            
            <div className="notas__intro">
            {/* <Video>
                <video preload>
                    <source src={`./assets/${Face}.mov`} type="video/mp4" />
                    Tu navegador no soporta la etiqueta HTML5 video.
                </video>
            </Video> */}
                <Imagen className="text-center"> <img src={`./assets/${Face}.jpg`} className="text-center shadow border-solid border-4 mb-4 border-fit-white-300" alt="Mi" /></Imagen>
                <p>Mi nombre es Manuel, vivo en Orihuela, Alicante desde hace unos 14 años junto a <span className="italic">Veronica</span>, mi mujer desde hace 13 y con <span className="italic">Hannibal</span> que esta con nosotros desde el 2012 ;).</p>
                <p>Aficciones tengo muchas, a parte de disfrutar de la familia y amigos también práctico durante 6 días a la semana algún deporte, por ejemplo:</p>

                    <p className="pb-0 pt-4 italic">Entramiento funcional, Padel, Running...</p>
               

                <p className=" pt-4">Mi experiencia laboral a groso modo, sin entrar en detalles para no aburrir ;)</p>
                <p>He trabajado como <strong className="text-fit-dark-400">Delineante</strong> desde el 1999 al 2008, fue mi primera opción y me gané la vida así durante 10 años de vida en las que aprendí mucho y
                conocí a muy buena gente. Mucha con la cual todavía tengo relación.</p>
                <p>Con eso vino la crisis del 2008, la que hizo mucho daño a la construcción. Fué en ese momento que deje la empresa en la que estaba para seguir formandome y estudiar un <span className="italic">Ciclo de Grado Superior en Progamación</span> y adentrarme en un mundo que, 
                a día de hoy no me deja dormir por el continuo aprendizaje.</p>
                <p>Después de 9 años mas de mi vida como autónomo desarrollando aplicaciones web para distintos sectores y pelear con clientes. decidí pasarme a la empresa privada.</p>
                <p> <strong>Telfy</strong> fue la que aposto por mi, y en la que estoy trabajando actualmente como desarrolador php y gestión de una ISP.</p>
                <p>Si quieres saber en lo que estoy ahora y las técnologias con las que estoy trasteando te invito que pasas por aquí <Link to="/que-hago" className="text-fit-dark-200 underline">Que hago</Link></p>
                
                <div className="Redes">

                </div>

            </div>
        </Wrapper>
    )
}

export default QuienSoy;