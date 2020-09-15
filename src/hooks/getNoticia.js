import { Posts } from '../../src/components/api/posts';


const getNoticia = ( url ) => {

    return Posts.filter( post => post.url === url)
}

export default getNoticia;