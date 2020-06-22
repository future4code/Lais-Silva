import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { HomeContainer , ButtonContainer , IconsApp , Logo } from './components/style';

import Profiles from './components/Profiles'
import Matches from './components/Matches'

import matches from './images/matches.png'
import reset from './images/reset.svg'
import logo from './images/logo.png'

function App() {
  
  const  [ page, setPage ] = useState('profiles')

  const changePage = () => {
    if (page === 'profiles') {
      setPage('matches')
    } else {
      setPage('profiles')
    }
  }
  
  const [ profile, setProfile ] = useState()
    
  const getProfile = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/person`)
    .then(response => {
      setProfile(response.data.profile)
    })
    .catch (err => {
      alert(err)
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const resetProfiles = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/clear`)
    .then(() =>
      getProfile(),
      alert("Lista resetada com sucesso"))
    .catch(err =>{
      alert(err)
    })
  }

  const actualPage = page === 'profiles' ? (<Profiles profile={profile} getProfile={getProfile}  /> ) : (<Matches />)

  return (
      <HomeContainer>
        <ButtonContainer>
          <IconsApp src={reset} onClick={resetProfiles} />  
          <Logo src={logo} />
          <IconsApp src={matches} onClick={changePage} />
        </ButtonContainer>  
        {actualPage}
      </HomeContainer>
  );
}

export default App;
