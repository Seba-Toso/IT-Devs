import React, { Component } from 'react';
import Loader from '../src/components/Loader/Loader';
import Store from './context/initialState';
import Routes from './components/Routes/Routes'
import Footer from './components/Footer/Foot'

import './App.css';



class App extends Component {
  render() {
    return (
     <Store>
      <div className="App">   
        <Loader/>
        <Routes/>
        <Footer/>
      </div>
     </Store>
    );
  }
}

export default App;
