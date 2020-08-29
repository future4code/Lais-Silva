import React, { useState } from 'react'
import {PageStyle, ActualPage, Inputs, Button, BackButton} from  './styled'
import axios from 'axios'

import NavBar from './NavBar'

    const useForm = initialValues => {
        const [form, setForm] = useState(initialValues);
        const onChange = (name, value) => {
            const newForm = {...form, [name]: value}
            setForm(newForm)
        }
        return {form, onChange}
    }
const FormPage = () => {

    const {form, onChange} = useForm({name:"", planet: "", date:"", description:"", durationInDays:""})
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        onChange(name, value)
    }

    const createTrip = () => {

        const token = window.localStorage.getItem('token')
        
        const axiosConfig = {
            headers : {auth: token}
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips", form , axiosConfig)
            .then(response => {
                console.log(response)
                console.log(form)
            })
            .catch(e => {
                console.log(e)
            })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createTrip()
    }

    return (
        <PageStyle>
            <NavBar />
            <ActualPage>formulário de candidatura</ActualPage>
            <Inputs onSubmit={handleSubmit}>
                <p>título da viagem</p>
                <input 
                required
                name="name"
                value={form.name} 
                pattern="{5,}"
                onChange={handleInputChange}/>
                <p>planeta</p>
                <select 
                required
                name="planet"
                value={form.planet} 
                onChange={handleInputChange}>
                    <option
                        key=""
                        value="">
                    </option>
                    <option
                        key="Mercúrio"
                        value="Mercúrio">
                            Mercúrio
                    </option>
                    <option
                        key="Vênus"
                        value="Vênus">
                            Vênus
                    </option>
                    <option
                        key="Marte"
                        value="Marte">
                            Marte
                    </option>
                    <option
                        key="Júpiter"
                        value="Júpiter">
                            Júpiter
                    </option>
                    <option
                        key="Saturno"
                        value="Saturno">
                            Saturno
                    </option>
                    <option
                        key="Urano"
                        value="Urano">
                            Urano
                    </option>
                    <option
                        key="Netuno"
                        value="Netuno">
                            Netuno
                    </option>
                </select>
                <p>date</p>
                <input 
                required
                name="date"
                value={form.date} 
                type="date" 
                onChange={handleInputChange}/>
                <p>descrição</p>
                <input 
                required
                name="description"
                value={form.description} 
                pattern="{30,}"
                onChange={handleInputChange}/>
                <p>duração em dias</p>
                <input 
                name="durationInDays"
                value={form.durationInDays} 
                type="number" 
                min="50"
                onChange={handleInputChange}/>
                <Button>CRIAR VIAGEM</Button> 
            </Inputs>   
            <BackButton>VOLTAR</BackButton> 
        </PageStyle>
    )
}

export default FormPage