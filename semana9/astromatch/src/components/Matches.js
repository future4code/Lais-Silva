import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { MatchContainer, MatchImage } from './style';

function Matches () {
  
  const [ likes, setLikes ] = useState([])

  useEffect(() => {
    axios
    .get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/matches`)
    .then(response => {
      setLikes(response.data.matches)
    })
    .catch(err => {
      alert(err)
    })
  }, [])
  
  return (
    <div>
      {likes.map(like => {
        return  <MatchContainer>
            <MatchImage src={like.photo} />
            <p>{like.name}</p>  
          </MatchContainer>
     })}
    </div>
  );
}

export default Matches;
