import React from 'react';
import useForm from '../hooks/useForm';
import validator from 'validator';

import styled from 'styled-components';

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

    const [ formValues, handleInputChange, reset ] = useForm();

    const { email, username, password, repeatPassword } = formValues;


    const handleInputregister = (e) => {
        e.preventDefault();
        
        if(!formValid()) {
            console.log('Formulario coprrecto')
        }
    }

    
    const formValid = () => {

        if(username.trim().lenght == 0) {
            console.log("Username is required"); 
            return false;
        } else if ( !validator.isEmail(email)) {
            console.log("Email is not valid");
            return false;
        } else if( password != repeatPassword) {
            console.log("Password are no same");
            return true
        }

        return true;
    }

    return (
        <FormRegister>
        <form className="font-culum" onSubmit={ handleInputregister }>
                <div className="form-login-title text-center mb-4 uppercase">
                    <p>Registro</p>
                </div>
                <div className="mb-4">
                    <div className="error">Hola mundo</div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-fit-dark-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" type="email" placeholder="Email" name="email"
                    onChange={handleInputChange} />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Username
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-fit-dark-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" type="username" placeholder="username" name="username"
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
                    name="repetPassword" onChange={handleInputChange} />
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