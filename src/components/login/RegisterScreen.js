import React from 'react';
import useForm from '../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../actions/ui';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const FormRegister = styled.div`

    display:flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    form{
        min-width: 20em;
    }

`;


const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        username: 'manufit78',
        email: 'tuemail@gmail.com',
        password: '',
        repeatPassword: ''
    });

    const { email, username, password, repeatPassword } = formValues;

    console.log(password.length)
    const handleInputRegister = (e) => {
        e.preventDefault();

        
        if( isFormValid() ) {
            console.log('Formulario correcto')
        }
    }

    
    const isFormValid = () => {

        if(username.trim().length === 0) {
            dispatch( setError('Username es requerido')); 
            return false;
        } else if ( !validator.isEmail( email )) {
            dispatch( setError("El email no es válido"));
            return false;
        } else if( password.length < 6) {
            dispatch( setError( "Son necesarios más de 6 caracteres"));
            return false;
        } else if(password != repeatPassword) {
            dispatch( setError("Las contraseñas no coinciden"));
            return false;
        }

        dispatch( removeError());

        return true;
    }

    return (
        <FormRegister>
        <form className="font-culum" onSubmit={ handleInputRegister }>
                <div className="form-login-title text-center mb-4 uppercase">
                    <p>Registro</p>
                </div>
                <div className="mb-4">
                    {
                        msgError &&
                        <div className="error shadow ">{ msgError }</div>
                    }
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-fit-dark-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" type="email" placeholder="Email" name="email" value={ email }
                    onChange={handleInputChange} />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Username
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-fit-dark-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" type="text" placeholder="username" name="username" value={username}
                    onChange={handleInputChange} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-fit-dark-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" type="password" placeholder="******************"
                    name="password" onChange={handleInputChange} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-fit-dark-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="repetPassword" type="password" placeholder="******************"
                    name="repeatPassword" onChange={handleInputChange} />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-fit-white-100 text-fit-dark-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Registrar
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/login">
                        Login
                    </a>   
                </div>
            </form>
            </FormRegister>
    )
}

export default RegisterScreen;