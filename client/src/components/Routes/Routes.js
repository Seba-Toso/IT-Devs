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
import ClientsList from '../Backend/ClientsList';
import Admin from '../../pages/Admin';
import ProtectedRoute from '../Backend/ProtectedRoute';


const Routes = ({isDark}) => {
    //Nav Logo hanlding

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
    }, [ handleScroll, setIsVisible ]);


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

    function renderNavBar() {
        return(
            <div>
                <Router isDark={isDark}>
                    <header className="App-header">  
                        <nav className='navBar'>
                            <div className='logo'>
                                {
                                    isVisible && <React.Fragment> 
            
                                        <img src='assets/logoCircle.png' height={'80%'} className='logoCircle' alt="logo"/>
                                        <h2 className='logoText'>IT-Devs</h2>
            
                                    </React.Fragment>
                                }
                            </div>
            
                            
                            <div className='links smallNav' onClick={showMenu} >
                                <IoMenu style={{fontSize: '30px', color:'rgb(63, 114, 190)'}}/> 
                                <div id='linksMenu' style={{top: menu}}>
                                    <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                                    <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                                    <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                                    <NavLink className='link' activeClassName="selected" to="/quienes">Conocenos</NavLink>
                                    <NavLink className='link' activeClassName="selected" to="/presupuesto">Presupuesta</NavLink>
                                    <NavLink className='link' activeClassName="selected" exact to="/"><IoHome className='homeSvg'/></NavLink>
                                </div>
                            </div>
                            
                            <div className='links largeNav'>
                                <NavLink className='link' activeClassName="selected" to="/servicios">Servicios</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/tecnologias">Tecnologías</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/portfolio">Portfolio</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/quienes">Conocenos</NavLink>
                                <NavLink className='link' activeClassName="selected" to="/presupuesto">Presupuesta</NavLink>
                                <NavLink className='link' activeClassName="selected" exact to="/"><IoHome/></NavLink>
                            </div>
                            
                        </nav>
                    </header>
                    
                    <Switch >
                        <Route exact path="/">
                            <Home isDark={isDark}/>
                        </Route>
                        <Route path="/presupuesto" component={ Estimate } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/tecnologias" component={ Tecnologias } />
                        <Route path="/quienes">
                            <Quienes isDark={isDark}/>
                        </Route>
                        <Route path="/servicios" component={ Servicios } />
                        <Route path="/admin" component={ Admin } />
                        <ProtectedRoute path="/backoffice" component={ ClientsList } />
                        <Route path="" component={ NotFound } />           
                    </Switch>
                </Router>
            </div>
        );
        
    }

    return (
        <div>{  renderNavBar() }</div>
    )
}

export default Routes;

