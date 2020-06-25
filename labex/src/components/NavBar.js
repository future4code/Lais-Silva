import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {

    const history = useHistory();
    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToTripsPage = () => {
        history.push("/list-trips")
    }
    const goToHomePage = () => {
        history.push("/")
    }

    const NavBar = styled.div`
        font-family: 'Allerta', sans-serif;
        color: white;
        display: flex;
        justify-content: space-between;
        height: 45px;
    `
    const NavBarIcons = styled.div`
        display: flex;
        cursor: pointer;
    `
    const Icons = styled.p`
        padding-right: 60px;
        :hover {
            text-decoration: underline;
        }
    `
    const Logo = styled.h4`
        padding-left: 3vw;
    `
    const Line = styled.hr`
        border: 0.2px solid;
        border-style: outset;
    `
    return (
    <div>
        <NavBar>
            <Logo>labeX</Logo>
            <NavBarIcons>
                <Icons onClick={goToHomePage}>home</Icons>
                <Icons onClick={goToTripsPage}>viagens</Icons>
                <Icons onClick={goToLoginPage}>login</Icons>
            </NavBarIcons>
        </NavBar>
        <Line />
    </div>
)
}

export default NavBar