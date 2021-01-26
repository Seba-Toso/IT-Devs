import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { IoHome } from "react-icons/io5";

import './NavBar.css';

const NavBar = () => {

    //Nav Logo hanlding
    const [isVisible, setIsVisile] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        if(scrollPosition >= 700){
            setIsVisile(true)
        }
        if(scrollPosition < 700){
            setIsVisile(false)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, setIsVisile]);



    return (
        <nav className='navBar'>
            <div className='logo'>
               {isVisible && <img src='http://imgfz.com/i/Lfg5X6w.jpeg' height={'80%'} />}
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