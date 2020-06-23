import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
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
    `
    const Logo = styled.h4`
    padding-left: 60px;
    `
    const Linha = styled.div`
    width: 100vw;
    height: 0px;
    left: 41px;
    top: 107px;
    border: 1px solid #C9C9C9;
    `
    return (
    <div>
        <NavBar>
            <Logo>labeX</Logo>
            <NavBarIcons>
                <Icons onClick={goToHomePage}>Home</Icons>
                <Icons onClick={goToTripsPage}>Viagens</Icons>
                <Icons onClick={goToLoginPage}>Login</Icons>
            </NavBarIcons>
        </NavBar>
        <Linha />
    </div>
)
}

export default NavBar