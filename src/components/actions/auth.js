import { types } from '../types/types';
import { firebase}  from '../firebase/firebaseConfig';


export const LoginWithEmailPassword = ( email, password ) => {

    return ( dispatch ) => {

        firebase.auth().signInWithEmailAndPassword( email, password)
        .then( ( { user }) => {
            dispatch(
                login( user.uid, user.displayName)
            );
        })
        .catch( e => {
            console.log(e);
        })

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const createWithPasswordAndEmail = ( email, password, username ) => {

    return ( dispatch ) => {



        firebase.auth().createUserWithEmailAndPassword( email, password)
        .then( async({ user }) => {

            await user.updateProfile({
                displayName: username,
            })

            console.log(user);
        });
    }
}