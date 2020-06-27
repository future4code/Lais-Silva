import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBarStyle , NavBarIcons, Icons, Logo, Line } from './styled'

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

    return (
    <div>
        <NavBarStyle>
            <Logo>labeX</Logo>
            <NavBarIcons>
                <Icons onClick={goToHomePage}>home</Icons>
                <Icons onClick={goToTripsPage}>viagens</Icons>
                <Icons onClick={goToLoginPage}>login</Icons>
            </NavBarIcons>
        </NavBarStyle>
        <Line />
    </div>
)
}

export default NavBar