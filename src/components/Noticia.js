import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoticiaWrapper = styled.div`

    h2{
        line-height: 60px;
    }

`;

const Noticia = ( post ) => {

    const { id, url, title, author, date, content, username, extract } = post;

    return (
        <NoticiaWrapper className="noticia mb-10">
            <div className="h2">
                <Link to={`./${url}`} ><h2 className="noticia__title text-title">{title}</h2></Link>
                    <p className="noticia__date mb-5"><span>{author}</span> <span>{date}</span></p> 
            </div>
            <div className="noticia__content">
                { extract }
            </div>
        </NoticiaWrapper>
    )

}

export default Noticia;

