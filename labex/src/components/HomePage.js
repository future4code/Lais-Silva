import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import NavBar from './NavBar'

const HomePage = () => {
    const history = useHistory();
    
    const goToTripsPage = () => {
        history.push("/list-trips")
    }

    const Home = styled.div`
    color: white;
    background-color: #69868C;
    width: 100vw;
    height: 100vh;
    `
    const CTA = styled.div`
    position: absolute;
    width: 651px;
    height: 311px;
    left: 600px;
    top: 200px;
    `
    
    const Button = styled.button`
    color: white;
    width: 264px;
    height: 31px;
    background: rgba(171, 31, 31, 0.93);
    border-radius: 100px;
    `
    return (
    <Home>
        <NavBar />
            <CTA>
                <h4>Encontre as melhores viagens espaciais</h4>
                <Button onClick={goToTripsPage}>Viagens</Button>
            </CTA>
    </Home>
)
}

export default HomePage