import React from 'react';
import {
    useParams
  } from "react-router-dom";


const NoticiaScreen = () => {

    let { title } = useParams();
    
    console.log( title );
    return (    
        <h1>Noticia {title}</h1>
    )
}

export default NoticiaScreen;