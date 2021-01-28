import React, { Component } from 'react';
import './App.css';

import Routes from './components/Routes/Routes'
import Footer from './components/Footer/Foot'



class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
