import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

import NavBar from './NavBar'

import { ActualPage, ListTrips, Trips, Line, Button, DecideButton} from './styled'

const Details = () => {

    const { id } = useParams()

    const token = window.localStorage.getItem('token')

    const [tripName, setTripName] = useState()
    const [applications, setApplications] = useState([])

    const getApplications = () => {
        const axiosConfig = {
            headers: { auth: token }
        }
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trip/${id}`, axiosConfig)
            .then(response => {
                setTripName(response.data.trip.name)
                setApplications(response.data.trip.candidates)
            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        getApplications()
    }, [])

    const history = useHistory()
    const goBack = () => {
        history.push("/adm-trip")
    }

    const aceptApplication = (applicationId) => {
        const axiosConfig = {
            headers: { auth: token }
        }
        const body = {
            approve: true
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips/${id}/candidates/${applicationId}/decide/`, body, axiosConfig)
            .then(() => {
                alert("Candidate aprovade!")
            })
            .catch(e => {
                console.log(e)
            })
    }
    const rejectApplication = (applicationId) => {
        const axiosConfig = {
            headers: { auth: token }
        }
        const body = {
            approve: false
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips/${id}/candidates/${applicationId}/decide/`, body, axiosConfig)
            .then(() => {
                alert("Candidate reprovade!")
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <ListTrips>
            <NavBar />
            <ActualPage>candidaturas</ActualPage>
            <Trips>
                <h3>{tripName}</h3>
                <div>
                    {applications.length === 0 ? (<p>Sem candidates.</p>)
                        :
                        (applications.map(application => {
                            return (
                                <div>
                                    <p>{application.name} - {application.age} - {application.country}</p>
                                    <p>{application.applicationText}</p>
                                    <DecideButton onClick={() => aceptApplication(application.id)}>aceitar</DecideButton>
                                    <DecideButton onClick={() => rejectApplication(application.id)}>rejeitar</DecideButton>
                                    <Line />
                                </div>
                            )
                        }
                        ))}
                </div>
                <Button onClick={goBack}>Voltar</Button>
            </Trips>
        </ListTrips>
    )
}
export default Details
