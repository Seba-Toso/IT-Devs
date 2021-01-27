import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Tecnologias from './pages/Tecnologias';
import Quienes from './pages/Quienes';
import Servicios from './pages/Servicios'
import NotFound from './pages/NotFound';
import Back from './pages/Back';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Foot'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">  
            <NavBar/>
          </header>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/tecnologias" component={ Tecnologias } />
            <Route path="/quienes" component={ Quienes } />
            <Route path="/servicios" component={ Servicios } />
            <Route path="/api/test" component={ Back } />
            <Route path="" component={ NotFound } />           
          </Switch>
          <Footer/>
        </Router>
      
      </div>
    );
  }
}

export default App;
