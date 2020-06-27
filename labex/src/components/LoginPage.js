import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { Login, ActualPage, LoginForm, LoginButton } from './styled'
import NavBar from './NavBar'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello"

const LoginPage = () => {
    
    const [ email, setEmail ] = useState("") 
    const [ password, setPassword ] = useState("")   

    const history = useHistory();
    
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token !== null) {
            history.push('/adm')
        }
    }, [history]);

    const handleEmailUpdate = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordUpdate = (event) => {
        setPassword(event.target.value)
    }
    const goToAdmPage = () => {
        const body = {
            email: email,
            password: password
        }
        axios
        .post(`${baseUrl}/login`, body)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            history.push('/adm')
        })
        .catch(e => {
            alert("Algo deu errado")
        })
    }
    
    return (
        <Login>
            <NavBar />
            <ActualPage>login</ActualPage>
            <LoginForm>
                <p>email</p>
                <input value={email} onChange={handleEmailUpdate} />
                <p>senha</p>
                <input value={password} type="password" onChange={handlePasswordUpdate} />
                <LoginButton onClick={goToAdmPage}>login</LoginButton>
            </LoginForm>
            
        </Login>
    )
}

export default LoginPage