import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Home from './components/Home'
import Matches from './components/Matches'

import matches from './images/matches.png'
import reset from './images/reset.svg'


const HomeContaier = styled.div`
  width: 20vw;
  height: 65vh;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), rgba(237, 186, 255, 0.53);
  border: 1px solid #000000;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Icons = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 20px;
`

function App() {
  
  const  [ page, setPage ] = useState('home')

  const changePage = () => {
    if (page === 'home') {
      setPage('matches')
    } else {
      setPage('home')
    }
  }

  const resetProfiles = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/clear`)
    .then(() =>
      alert("Lista resetada com sucesso"))
    .catch(err =>{
      alert(err)
    })
  }

  const actualPage = page === 'home' ? (<Home /> ) : (<Matches />)

  return (
      <HomeContaier>
        <ButtonContainer>
          <Icons src={reset} onClick={resetProfiles} />  
          <Icons src={matches} onClick={changePage} />
        </ButtonContainer>  
        {actualPage}
      </HomeContaier>
  );
}

export default App;
