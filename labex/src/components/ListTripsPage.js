import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ListTrips, ActualPage, Trips, Button } from './styled'

import NavBar from './NavBar'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips"

const ListTripsPage = () => {

    const [ trips , setTrips ] = useState([])

    const getTrips = () => {
        axios
        .get(baseUrl)
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
    
    const goToFormPage = (id) => {
        history.push(`/form/${id}`)
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
                    <Button onClick={() => goToFormPage(trip.id)}>CANDIDATAR</Button>
                </div>))}
            </Trips>
        </ListTrips>
    )
}

export default ListTripsPage