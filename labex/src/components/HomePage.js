import React from 'react';
import { useHistory } from 'react-router-dom';

import { Home, CTA, Button } from './styled'

import NavBar from './NavBar'

const HomePage = () => {
    const history = useHistory();
    
    const goToTripsPage = () => {
        history.push("/list-trips")
    }
    
    return (
    <Home>
        <NavBar />
            <CTA>
                <h4>Encontre as melhores viagens espaciais</h4>
                <Button onClick={goToTripsPage}>VER VIAGENS</Button>
            </CTA>
    </Home>
)
}

export default HomePage