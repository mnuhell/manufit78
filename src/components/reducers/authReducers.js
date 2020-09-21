import {types} from '../types/types';


const authReducers = ( state = { uid: 1234}, action) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
        return { } 

        break;

        default:
            return state;
            break;
    }
}

export default authReducers;