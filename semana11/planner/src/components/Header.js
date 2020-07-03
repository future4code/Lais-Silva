import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lais"

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    margin: 10px;
    text-align: center;
`
const Select = styled.select`
    margin: 10px;
    text-align: center;
`
const Button = styled.button`
    margin: 10px;
    text-align: center;
    background-color: salmon;
`
const Header = (props) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")

    const handleInputChange = (event) => {
        setText(event.target.value)
    }
    const handleDayChange = (event) => {
        setDay(event.target.value)
    }

    const createTask = () => {
        const body = {
            text: text,
            day: day
        }
        axios
            .post(`${baseUrl}`, body)
            .then(() => {
                props.getTasks()
                setText("")
            })
    }

    return (
        <HeaderStyle>
            <h1>planner</h1>
            <Input
                type="text"
                placeholder="create an task"
                value={text}
                onChange={handleInputChange}
            />
            <Select
                value={day}
                onChange={handleDayChange}
            >
                <option value="">Choose a day</option>
                <option data-testid="monday" value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                
            </Select>
            <Button data-testid={"create-task"} onClick={createTask}>add task</Button>
        </HeaderStyle>
    )
}

export default Header