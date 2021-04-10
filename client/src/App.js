import React, { useEffect, useState } from 'react';
import Loader from '../src/components/Loader/Loader';
import Store from './context/initialState';
import Routes from './components/Routes/Routes'
import Footer from './components/Footer/Foot'
import Darkmode from 'darkmode-js'

import './App.css';

const options = {
  bottom: '65%', // default: '32px'
  right: '2.5rem', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();



const App = () => {
    const [isDark, setIsDark] = useState(darkmode.isActivated())
    
    useEffect(()=>{
      darkmode.button.addEventListener('click', () => {
        console.log('clicked');
        let darkmodeActive = darkmode.isActivated()
        console.log('darkmodeActive', darkmodeActive);
        setIsDark(darkmodeActive)
      })
      console.log('isDark App', isDark);
    },[setIsDark])

    return (
     <Store>
      <div className="App">   
        <Loader/>
        <Routes isDark={isDark}/>
        <Footer/>
      </div>
     </Store>
    );
  
}

export default App;
