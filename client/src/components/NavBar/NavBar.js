import React from 'react'
import {NavLink} from 'react-router-dom'
import { IoHome } from "react-icons/io5";

import './NavBar.css';

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div className='logo'>
                <h1 className='logoTxt'> Jr-DevProject</h1>
            </div>
            <div className='links'>
                <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                <NavLink className='link' activeClassName="selected" to="/quienes">Quienes</NavLink>
                <NavLink className='link' activeClassName="selected" to="/about">About</NavLink>
                <NavLink className='link' activeClassName="selected" exact to="/"><IoHome/></NavLink>
            </div> 
        </nav>
    )
}

export default NavBar