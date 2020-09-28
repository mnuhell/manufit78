import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { LoginWithEmailPassword } from '../actions/auth';

const FormLogin = styled.div`

    display:flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    form{
        min-width: 20em;
    }

`;

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'm.villagordovera@gmail.com',
        password: 1234
    });

    const { email, password } = formValues;

    const handleSubmitLogin = e => {
        e.preventDefault();

        dispatch( LoginWithEmailPassword(email, password) )

    }

    return (
        <FormLogin className="container form-login">
            
            <form className="font-culum" onSubmit={ handleSubmitLogin }>
                <div className="form-login-title text-center mb-4 uppercase">
                    <p>Login</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-fit-dark-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" type="email" placeholder="Email" name="email" value={email}
                    onChange={handleInputChange} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-fit-dark-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" type="password" placeholder="******************"
                    name="password" onChange={handleInputChange} value={ password } />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-fit-white-100 text-fit-dark-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Entrar
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/register">
                        Registrate
                    </a>   
                </div>
            </form>
        </FormLogin>
    )
}

export default LoginScreen;