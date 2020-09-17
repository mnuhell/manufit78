import React from 'react';
import Noticia from './Noticia';
import { Posts } from './api/posts';
import NoticiasWrap from './styled/NoticiasWrap';

const Noticias = () => {

    return (
        <NoticiasWrap className="container font-global wrapper__noticias pt-32">
            <div className="noticias">      
                { 
                    Posts.map( post => (
                            <Noticia key={post.id} {...post } /> 
                        ))
                }
            </div>
        </NoticiasWrap>
        
    )
}

export default Noticias;