import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from './NavBar'
const AdmPageStyle = styled.div`
        font-family: 'Allerta', sans-serif;
        color: white;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
`
const ActualPage = styled.h2`
    margin-left: 4vw;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
        font-family: 'Allerta', sans-serif;
        color: white;
        width: 264px;
        height: 31px;
        background: rgba(171, 31, 31, 0.93);
        border-radius: 100px;
        margin: 4vh 0px 4vh 8vw;
`
    const Logout = styled.button`
        font-family: 'Allerta', sans-serif;
        color: white;
        width: 264px;
        height: 31px;
        background: rgba(171, 31, 31, 0.93);
        border-radius: 100px;
        margin-top: 12vh;
        margin-left: 8vw;
    `
const AdmPage = () => {
    
    const history = useHistory();
    const logout = () => {
        window.localStorage.clear();
        history.push("/");
    };

    const goToAdmTrips = () => {
        history.push("/adm-trip");
    };
    const goToAdmDetails = () => {
        history.push("/adm-details");
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
                    <Button onClick={goToAdmDetails}>VER CANDIDATURAS</Button>
            </ButtonContainer>
            <Logout onClick={logout}>LOGOUT</Logout>
        </AdmPageStyle>
    )
}

export default AdmPage