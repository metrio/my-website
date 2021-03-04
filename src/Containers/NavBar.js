import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="nav-bar">

            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
            <NavLink to="/experience">
                <li>Experience</li>
            </NavLink>
            <NavLink to="/contact">
                <li>Contact</li>
            </NavLink>
           

        </ul>
    )
}

export default NavBar