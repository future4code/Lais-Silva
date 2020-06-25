import React from 'react';

import like from '../images/like.png'
import dislike from '../images/dislike.png'

import { Image, InfoContainer, FirstInfo, SecondText, IconsContainer, Icons } from './style';

const ProfileCard = (props) => {
    return (
        <div>
            <InfoContainer>
                <Image src={props.photo}></Image>
                <FirstInfo>
                    <p><b>{props.name}</b>, {props.age}</p>
                </FirstInfo>
                <SecondText>{props.bio}</SecondText>
            </InfoContainer>    
            <IconsContainer>
                <Icons src={like} onClick={props.dislikeProfile} />
                <Icons src={dislike} onClick={props.likeProfile} />
            </IconsContainer>
        </div>
    )
}
export default ProfileCard