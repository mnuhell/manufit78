import React from 'react';
import styled from 'styled-components';

const NoticiaWrapper = styled.div`

    h2{
        line-height: 60px;
    }

`;

const Noticia = ( post ) => {

    const { title, author, date, content, username, extract } = post;

    return (
        <NoticiaWrapper className="noticia mb-10">
            <div className="h2">
                <h2 className="noticia__title text-title">{title}</h2>
                    <p className="noticia__date mb-5"><span>{author}</span> <span>{date}</span></p> 
            </div>
            <div className="noticia__content">
                { extract }
            </div>
        </NoticiaWrapper>
    )

}

export default Noticia;

