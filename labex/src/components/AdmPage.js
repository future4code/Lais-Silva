import React from 'react'
import { useHistory } from 'react-router-dom'
import { AdmPageStyle, ActualPage, ButtonContainer, Button, Logout } from './styled'

import NavBar from './NavBar'

const AdmPage = () => {
    
    const history = useHistory();
    const logout = () => {
        window.localStorage.clear();
        history.push("/");
    };

    const goToAdmTrips = () => {
        history.push("/adm-trip");
    };
    const goToAdmCreate = () => {
        history.push("/adm-createtrip");
    };

    return (
        <AdmPageStyle>
            <NavBar />
            <ActualPage>gerenciar</ActualPage>
            <ButtonContainer>
                <Button onClick={goToAdmTrips}>VER VIAGENS</Button>
                <Button onClick={goToAdmCreate}>CRIAR VIAGEM</Button>  
            </ButtonContainer>
            <Logout onClick={logout}>LOGOUT</Logout>
        </AdmPageStyle>
    )
}

export default AdmPage