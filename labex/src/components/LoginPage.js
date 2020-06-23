import React from 'react';
import NavBar from './NavBar'

import { useHistory } from 'react-router-dom';

import styled from 'styled-components'

const LoginPage = () => {
    
    const history = useHistory();
    const goToAdmPage = () => {
        history.push("/admpage")
    }

    const Login = styled.div`
        color: white;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
        `

    return (
        <Login>
            <NavBar />
            <form>
                <p>nome</p>
                <input />
                <p>senha</p>
                <input />
                <button onClick={goToAdmPage}>login</button>
            </form>
        </Login>
    )
}

export default LoginPage