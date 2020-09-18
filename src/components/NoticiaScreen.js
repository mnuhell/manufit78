import React from 'react';
import getNoticia from '../hooks/getNoticia';
import { useParams } from "react-router-dom";
import NoticiasWrap from './styled/NoticiasWrap';


const NoticiaScreen = () => {

    const { url } = useParams();
    const { id, link, title, author, date, content, username, extract } = getNoticia(url)[0];
    
    return (    
        <NoticiasWrap className="container noticia mb-10 font-global">
            <div className="h2">
                <h2 className="noticia__title text-title">{title}</h2>
                    <p className="noticia__date mb-5"><span>{author}</span> <span>{date}</span></p> 
            </div>
            <div className="noticia__content">
                { content }
            </div>
        </NoticiasWrap>
    )
}

export default NoticiaScreen;