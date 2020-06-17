import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components';

const MatchContainer = styled.div`
  display: flex;
` 

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin: 10px;
`


function App() {
  
  const [ likes, setLikes ] = useState([])

  const getLikes = () => {
    axios
    .get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/matches`)
    .then(response => {
      setLikes(response.data.matches)
    })
    .catch(err => {
      alert(err)
    })
  }

  useEffect(() => {
    getLikes()
  }, [])
  
  return (
    <div>
      {likes.map(like => {
        return  <MatchContainer>
            <Image src={like.photo} />
            <p>{like.name}</p>  
          </MatchContainer>
     })}
    </div>
  );
}

export default App;
