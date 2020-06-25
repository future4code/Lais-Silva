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
        display: block;
    `
const FormPage = () => {
    
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    
    const handleUpdateName = (event) => {
        setName(event.target.value)
    }
    const handleUpdatePlanet = (event) => {
        setPlanet(event.target.value)
    }
    const handleUpdateDate = (event) => {
        setDate(event.target.value)
    }
    const handleUpdateDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleUpdateDuration = (event) => {
        setDuration(event.target.value)
    }

    return (
    <Form>
        <NavBar />
        <ActualPage>formulário de candidatura</ActualPage>
        <Inputs>
            <p>título da viagem</p>
            <input value={name} onChange={handleUpdateName}/>
            <p>planeta</p>
            <input value={planet} onChange={handleUpdatePlanet}/>
            <p>date</p>
            <input value={date} type="date" onChange={handleUpdateDate}/>
            <p>descrição</p>
            <input value={description} onChange={handleUpdateDescription}/>
            <p>duração em dias</p>
            <input value={duration} type="number" onChange={handleUpdateDuration}/>
        </Inputs>   
        <Button>CRIAR VIAGEM</Button> 
        <Button>VOLTAR</Button> 
    </Form>
    )
}

export default FormPage