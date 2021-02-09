import React, { Component } from 'react';
import Loader from '../src/components/UI/Loader/Loader';
import './App.css';

import Routes from './components/Routes/Routes'
import Footer from './components/Footer/Foot'



class App extends Component {
  render() {
    return (
     
      <div className="App">   
        <Loader/>
        <Routes/>
        <Footer/>
      </div>
     
    );
  }
}

export default App;
