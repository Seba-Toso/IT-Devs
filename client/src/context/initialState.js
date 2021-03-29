import React, { useState } from 'react';  


   
    const initialState = [
      {
        id: '1',
        image: 'http://imgfz.com/i/oVrt6KT.jpeg',
        title: 'Blog Python',
        description: '#portfolio-item-1',
        body: 'Sitio diseñado con Python y Flask en base de SQL.',     
      },
      {
        id: '2',
        image: 'http://imgfz.com/i/o5IHu0b.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-2',
        body: 'Web diseñada en Front con Angular y Backend en Node - Express.'
      },
      {
        id: '3',
        image: 'http://imgfz.com/i/ojQLO6e.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-3',
        body: 'Web diseñada en Front con React y Backend en Node - Express.'

      },
      {
        id: '4',
        image: 'http://imgfz.com/i/fcSWA5v.png',
        title: 'Blog de noticias',
        description: '#portfolio-item-4',
        body: 'HTML - CSS - JavaScript Vanilla - Jquery'
      },
      {
        id: '5',
        image: 'http://imgfz.com/i/pi5ek1h.jpeg',
        title: 'Pokenet Social',
        description: '#portfolio-item-5',
        body: 'HTML - CSS - Bootstrap - ReactJs - Firebase'
      },
      {
        id: '6',
        image: 'http://imgfz.com/i/YnRc8QI.jpeg',
        title: 'Lista de Tareas Online',
        description: '#portfolio-item-6',
        body: 'HTML - CSS - JavaScript Vanilla'
      },
      {
        id: '7',
        image: 'http://imgfz.com/i/zTurxg5.jpeg',
        title: 'Rick & Morty Data Finder',
        description: '#portfolio-item-7',
        body: 'HTML - CSS - ReactJS - GraphQL - Redux'
      },
      {
        id: '8',
        image: ' http://imgfz.com/i/XV6jOyf.png',
        title: 'E-commerce',
        description: '#portfolio-item-8',
        body: 'React, JsonServer, Firebase.'
      },
      {
        id: '9',
        image: 'http://imgfz.com/i/PGAYEIt.png',
        title: 'Finance app',
        description: '#portfolio-item-9',
        body: 'React, Node, Express, MongoDB.'
      },
      {
        id: '10',
        image: ' http://imgfz.com/i/Hmf5QWy.png',
        title: 'API Rick & Morgan',
        description: '#portfolio-item-10',
        body: 'React, Hooks.'
      },
      {
        id: '11',
        image: 'http://imgfz.com/i/tOAzEjM.png',
        title: 'Full Posts Calling',
        description: '#portfolio-item-11',
        body: 'React, Axios, PlaceHolder API.'
      },

     
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
  