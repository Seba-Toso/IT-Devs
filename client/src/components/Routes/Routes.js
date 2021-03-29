import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoHome, IoMenu } from "react-icons/io5";

import './Routes.css';

import Home from '../../pages/Home';
import Estimate from '../..//pages/Estimate';
import Portfolio from '../../pages/Portfolio';
import Tecnologias from '../../pages/Tecnologias';
import Quienes from '../../pages/Quienes';
import Servicios from '../../pages/Servicios'
import NotFound from '../../pages/NotFound';
import Back from '../../pages/Back';

const Routes = () => {

    //Nav Logo hanlding
    const [isInHome, setIsInHome] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const [menuLinks, setMenuLinks] = useState(false)
    const [menu, setMenu] = useState('-25rem')


    //Nav Logo Effect
    useEffect(() => {

        if(!isInHome){
            setIsVisible(true)
            return
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        if(scrollPosition >= 700){
            setIsVisible(true)
        }
        else if(scrollPosition < 700){
            setIsVisible(false)
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, setIsVisible, isInHome]);


    const showMenu = () => {
        if(!menuLinks){
            setMenu('3rem')
            setMenuLinks(true)
            return
        }
        setMenu('-25rem')
        setMenuLinks(false)
        return 
    }

    return (

        <Router>
            <header className="App-header">  
                <nav className='navBar'>
                    <div className='logo'>
                        {
                            isVisible && <React.Fragment> 

                                <img src='assets/logoCircle.png' height={'80%'} className='logoCircle'  alt="logo"/>
                                <h2 className='logoText'>IT-Devs</h2>

                            </React.Fragment>
                        }
                    </div>

                    {
                        window.outerWidth < 1110 ? 
                        <div className='links' onClick={showMenu} >
                            <IoMenu style={{fontSize: '30px', color:'rgb(63, 114, 190)'}}/> 
                            <div id='linksMenu' style={{top: menu}}>
                                <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/quienes">Conocenos</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/presupuesto">Presupuesta</NavLink>
                                <NavLink className='link' activeClassName="selected" exact to="/"
                                    isActive={(match) => {
                                        if (!match) {
                                            setIsInHome(false)
                                            return;
                                        }
                                        setIsInHome(true)
                                        return 
                                    }}>
                                        <IoHome/>
                                </NavLink>
                            </div>
                        </div>
                        :
                        <div className='links'>
                            
                            
                            <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                            <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                            <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                            <NavLink className='link' activeClassName="selected" to="/quienes">Conocenos</NavLink>
                            <NavLink className='link' activeClassName="selected" to="/presupuesto">Presupuesta</NavLink>
                            <NavLink className='link' activeClassName="selected" exact to="/"
                                isActive={(match) => {
                                    if (!match) {
                                        setIsInHome(false)
                                        return;
                                    }
                                    setIsInHome(true)
                                    return 
                                }}>
                                    <IoHome/>
                            </NavLink>
                        </div>
                    }
                </nav>
            </header>
            
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/presupuesto" component={ Estimate } />
                <Route path="/portfolio" component={ Portfolio } />
                <Route path="/tecnologias" component={ Tecnologias } />
                <Route path="/quienes" component={ Quienes } />
                <Route path="/servicios" component={ Servicios } />
                <Route path="/api/test" component={ Back } />
                <Route path="" component={ NotFound } />           
            </Switch>
        </Router>

        
    )
}

export default Routes