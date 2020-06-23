import React, { useState, useEffect } from 'react';
import axios from 'axios'

import NavBar from './NavBar';

import styled from 'styled-components'

const ListTrips = styled.div`
    background-color: #69868C;
    width: 100vw;
    height: 100vh;
    color: white;
    `
const Button = styled.button`
    color: white;
    width: 264px;
    height: 31px;
    background: rgba(171, 31, 31, 0.93);
    border-radius: 100px;
`
const ListTripsPage = () => {

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

    return (
        <ListTrips>
            <NavBar />
            <h2>viagens</h2>
            {trips ? (trips.map(trip => <div>
                            <p>{trip.name} - {trip.date} - {trip.planet} - {trip.durationInDays}</p>
                            <p>{trip.description}</p>
                            <Button>CANDIDATAR</Button>
                        </div>
            ))
            : 
           (<p>Carregando...</p>)}
           
        </ListTrips>
    )
}

export default ListTripsPage