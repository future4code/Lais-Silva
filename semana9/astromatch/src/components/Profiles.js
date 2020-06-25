import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProfileCard from './ProfileCard'

import { SecondText } from './style';

const Profiles = props => {

    const [ profile, setProfile ] = useState(props.profile)

    useEffect(() => {
        setProfile(props.profile)
    }, [props.profile])

    const likeProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/choose-person`, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const dislikeProfile = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/choose-person`, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err =>{ 
            console.log(err)
        })
    }

    return (
        profile ? ( <ProfileCard 
            photo={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            dislikeProfile={dislikeProfile}
            likeProfile={likeProfile}
         />) :
        (<SecondText>Carregando...</SecondText>)
  );
}

export default Profiles;
