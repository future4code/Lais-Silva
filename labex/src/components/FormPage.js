import React, { useState } from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
const Form = styled.div`
        font-family: 'Allerta', sans-serif;
        color: white;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
    `
    const ActualPage = styled.h2`
        margin-left: 4vw;
    `
    const Inputs = styled.div` 
        font-size: small;
        padding-left: 10vw;
        padding-top: 1vw;
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
const FormPage = () => {
    
    const [ name, setName] = useState("")
    const [ age, setAge] = useState("")
    const [ profession, setProfession] = useState("")
    const [ country, setCountry] = useState("")
    const [ applicationText, setApplicationText] = useState("")
    
    const handleUpdateName = (event) => {
        setName(event.target.value)
    }
    const handleUpdateAge = (event) => {
        setAge(event.target.value)
    }
    const handleUpdateProfession = (event) => {
        setProfession(event.target.value)
    }
    const handleUpdateCountry = (event) => {
        setCountry(event.target.value)
    }
    const handleUpdateApplicationText = (event) => {
        setApplicationText(event.target.value)
    }

    return (
    <Form>
        <NavBar />
        <ActualPage>formulário de candidatura</ActualPage>
        <Inputs>
            <p>nome</p>
            <input value={name} onChange={handleUpdateName}/>
            <p>idade</p>
            <input value={age} onChange={handleUpdateAge}/>
            <p>profissão</p>
            <input value={profession} onChange={handleUpdateProfession}/>
            <p>país</p>
            <input value={country} onChange={handleUpdateCountry}/>
            <p>por que você é um bom candidate?</p>
            <input value={applicationText} onChange={handleUpdateApplicationText}/>
        </Inputs>   
        <Button>CANDIDATAR</Button> 
    </Form>
    )
}

export default FormPage