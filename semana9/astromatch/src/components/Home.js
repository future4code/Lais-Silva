import React, { useState , useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import like from '../images/like.png'
import dislike from '../images/dislike.png'

const Image = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 100px;
    margin-top: 10px;
    display: block;
    margin: 20px auto 20px auto; 
`
const FirstInfo = styled.p`
    text-align: center;
    font-weight: bold;
`
const SecondText = styled.p`
    text-align: center;
    margin: 20px;
    font-size: smaller;
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
`
const Icons = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`


const Home = props => {
    
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
      
    const likeProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/choose-person`, body)
        .then(() => {
            getProfile()
            alert("Deu like! Boa sorte ;)") 
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
            alert("Dislike... e tudo bem!") 
            getProfile()
        })
        .catch(err =>{ 
            console.log(err)
        })
    }

    return (
        profile ? (<div className="home">
            <Image src={profile.photo}></Image>
            <FirstInfo>
                <p>{profile.name}, {profile.age}</p>
            </FirstInfo>
            <SecondText>{profile.bio}</SecondText>
            <IconsContainer>
                <Icons src={dislike} onClick={likeProfile} />
                <Icons src={like} onClick={dislikeProfile} />
            </IconsContainer>
        </div>) :
        (<SecondText>Carregando...</SecondText>)
  );
}

export default Home;
