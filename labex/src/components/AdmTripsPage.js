import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import NavBar from './NavBar'

const AdmListTripsPage = () => {

    const ListTrips = styled.div`
        font-family: 'Allerta', sans-serif;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
        color: white;
    `
    const ActualPage = styled.h2`
        margin-left: 4vw;
    `
    const Trips = styled.div`
        margin-left: 8vw;
        font-size: small;
        width: 30vw;
    `
    const Button = styled.button`
        font-family: 'Allerta', sans-serif;
        color: white;
        width: 264px;
        height: 31px;
        background: rgba(171, 31, 31, 0.93);
        border-radius: 100px;
        margin-left: 8vw;
        :hover{
            background: #A84700;
        }
    `

    const [ trips , setTrips ] = useState([])

    const getTrips = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips")
        .then((response => {
            setTrips(response.data.trips)
        }))
        .catch(e => {
            console.log(e)
        })
    }
    
    useEffect(() => {
        getTrips()
    }, [])

    const history = useHistory();
    const goBack = () => {
        history.push("/adm")
    }
    return (
        <ListTrips>
            <NavBar />
            <ActualPage>viagens disponíveis</ActualPage>
            <Trips>
                {trips.length === 0 ? (<p>Carregando...</p>)
                :
                (trips.map(trip => <div>
                            <p><b>{trip.name}</b> - {trip.date} - {trip.planet} - {trip.durationInDays} dias</p>
                            <p>{trip.description}</p>
                            <hr />
                            </div>))}
            </Trips>
            <Button onClick={goBack} >Voltar</Button>
        </ListTrips>
    )
}

export default AdmListTripsPage