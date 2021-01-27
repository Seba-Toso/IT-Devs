import React, {useState, useEffect} from 'react'
import {NavLink, useRouteMatch } from 'react-router-dom'
import { IoHome } from "react-icons/io5";

import './NavBar.css';

const NavBar = () => {

    //Nav Logo hanlding
    const [isInHome, setIsInHome] = useState(true)
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
               {
                    isVisible && <React.Fragment> 
                        <img src='assets/logoCircle.png' height={'80%'} className='logoCircle'/>
                        <h2 className='logoText'>IT-Devs</h2>
                    </React.Fragment>
                }
            </div>
            <div className='links'>
                <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                <NavLink className='link' activeClassName="selected" to="/quienes">Quienes</NavLink>
                <NavLink className='link' activeClassName="selected" to="/about">About</NavLink>
                <NavLink className='link' activeClassName="selected" exact to="/"
                isActive={(match, location) => {
                    if (!match) {
                        setIsInHome(false)
                        return;
                    }
                    setIsInHome(true)
                    return 
                  }}
                ><IoHome/></NavLink>
            </div> 
        </nav>
    )
}

export default NavBar