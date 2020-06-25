import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import NavBar from './NavBar'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello"
const Login = styled.div`
        font-family: 'Allerta', sans-serif;
        color: white;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        `
    const ActualPage = styled.h2`
        margin-left: 4vw;
    `
    const Form = styled.div` 
        font-size: small;
        padding-left: 10vw;
        display: block;
    `
    const Button = styled.button`
        font-family: 'Allerta', sans-serif;
        color: white;
        width: 150px;
        height: 31px;
        background: rgba(171, 31, 31, 0.93);
        border-radius: 100px;
        margin-left: 10vw;
        margin-top: 2vw;
    `
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
            <Form>
                <p>email</p>
                <input value={email} onChange={handleEmailUpdate} />
                <p>senha</p>
                <input value={password} onChange={handlePasswordUpdate} />
            </Form>
            <Button onClick={goToAdmPage}>login</Button>
        </Login>
    )
}

export default LoginPage