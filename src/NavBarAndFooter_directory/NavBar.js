import React from 'react'
import './Bars.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {


    return(
        <ul className="nav-bar">

            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li>Home</li>
            </NavLink>
            <NavLink to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li>About</li>
            </NavLink>
            <NavLink to="/projects" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li>Projects</li>
            </NavLink>
            <NavLink to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li>Contact</li>
            </NavLink>
           

        </ul>
    )
}

export default NavBar