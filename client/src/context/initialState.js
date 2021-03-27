import React, { useState } from 'react';    

    
    const initialState = [
      {
        id: '1',
        image: 'http://imgfz.com/i/oVrt6KT.jpeg',
        title: 'Blog Python',
        description: '#portfolio-item-1',
      },
      {
        id: '2',
        image: 'http://imgfz.com/i/o5IHu0b.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-2',
      },
      {
        id: '3',
        image: 'http://imgfz.com/i/ojQLO6e.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-3',
      },
      {
        id: '4',
        image: 'http://imgfz.com/i/fcSWA5v.png',
        title: 'Blog de noticias',
        description: '#portfolio-item-4',
      },
      {
        id: '5',
        image: 'http://imgfz.com/i/pi5ek1h.jpeg',
        title: 'Pokenet Social',
        description: '#portfolio-item-5',
      },
      {
        id: '6',
        image: 'http://imgfz.com/i/YnRc8QI.jpeg',
        title: 'Lista de Tareas Online',
        description: '#portfolio-item-6',
      },
      {
        id: '7',
        image: 'http://imgfz.com/i/zTurxg5.jpeg',
        title: 'Rick & Morty Data Finder',
        description: '#portfolio-item-7',
      }
     
    ];
  
    export const Context = React.createContext();
    
    const Store = ({ children }) => {
      const [state, setState ] = useState(initialState);
      
      return (
        <Context.Provider value= { 
            [state, setState]
           
          }>
          { children }
        </Context.Provider>
      )
    }

    export default Store
  