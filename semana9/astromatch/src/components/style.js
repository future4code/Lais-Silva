import styled from 'styled-components';

//APP
export const HomeContainer = styled.div`
  width: 20vw;
  height: 70vh;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), rgba(237, 186, 255, 0.53);
  border: 0.5px solid black;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto !important;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
export const IconsApp = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 20px;
      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`
export const Logo = styled.img`
  width: 80px;
  height: 40px; 
`
//PROFILES
export const SecondText = styled.p`
    text-align: center;
    margin: 20px;
    font-size: x-small;
`
//PROFILECARD
export const Image = styled.img`
    width: 110px;
    height: 140px;
    border: 0.3px solid black;
    margin-top: 10px;
    display: block;
    margin: 20px auto 20px auto; 
    -webkit-box-shadow: 0px 3px 34px -3px rgba(255,171,171,1);
    -moz-box-shadow: 0px 3px 34px -3px rgba(255,171,171,1);
    box-shadow: 0px 3px 34px -3px rgba(255,171,171,1);
`
export const InfoContainer = styled.div`
    height: 200px;
    margin-top: 30px;
`
export const FirstInfo = styled.p`
    text-align: center;
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 50px;
    margin-top: 50px
`
export const Icons = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`
//MATCHES
export const MatchContainer = styled.div`
  display: flex;
  font-size: small;
  align-items: center;
` 

export const MatchImage = styled.img`
  width: 40px;
  height: 40px;
  border: solid 0.5px black;
  border-radius: 30px;
  margin: 10px;
`
