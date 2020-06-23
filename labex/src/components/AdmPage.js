import React from 'react';
import NavBar from './NavBar'

import styled from 'styled-components'

const AdmPage = () => {

    const AdmPage = styled.div`
        color: white;
        background-color: #69868C;
        width: 100vw;
        height: 100vh;
    `
    const ButtonContainer = styled.div`
        display: flex;
        flex-direction: column;
    `
    const Button = styled.button`
        color: white;
        width: 264px;
        height: 31px;
        background: rgba(171, 31, 31, 0.93);
        border-radius: 100px;
    `
    return (
        <AdmPage>
            <NavBar />
                <h2>gerenciar</h2>
                <ButtonContainer>
                <Button>VER VIAGENS</Button>
                <Button>VER CANDIDATURAS</Button>
                <Button>CRIAR VIAGEM</Button>
            </ButtonContainer>
        </AdmPage>
    )
}

export default AdmPage