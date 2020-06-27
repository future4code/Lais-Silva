import React, { useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom'

import NavBar from './NavBar'

import { Form, ActualPage, Inputs, Label, Button } from './styled'

const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);
    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    return { form, onChange }
}

const FormPage = () => {

    const { id } = useParams()

    const { form, onChange } = useForm({ name: "", age: "", profession: "", country: "", applicationText: "" })

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        submitForm()
    }
    const submitForm = () => {
        Axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips/${id}/apply`, form)
            .then(response => {
                console.log(response)
                alert(response.data.message)
            })
            .catch(e => {
                console.log(e)
            })
    }


    return (
        <Form onSubmit={handleSubmit}>
            <NavBar />
            <ActualPage>formulário de candidatura</ActualPage>
            <Inputs>
                <Label>nome</Label>
                <input
                    required
                    name="name"
                    value={form.name}
                    type="text"
                    pattern="[A-Za-z ]{3,}"
                    title="No mínimo 3 letras!"
                    onChange={handleInputChange} />
                <Label>idade</Label>
                <input
                    required
                    name="age"
                    value={form.age}
                    type="number"
                    min="18"
                    onChange={handleInputChange} />
                <Label>profissão</Label>
                <input
                    required
                    name="profession"
                    value={form.profession}
                    type="text"
                    pattern="[A-Za-z ]{10,}"
                    title="No mínimo 10 caracteres!"
                    onChange={handleInputChange} />
                <Label>país</Label>
                <input
                    required
                    name="country"
                    value={form.country}
                    onChange={handleInputChange} />
                <Label>por que você é um bom candidate?</Label>
                <input
                    required
                    name="applicationText"
                    value={form.text}
                    pattern="[A-Za-z ]{30,}"
                    title="No mínimo 30 caracteres!"
                    onChange={handleInputChange} />
                <Button type="submit">CANDIDATAR</Button>
            </Inputs>
        </Form>
    )
}

export default FormPage