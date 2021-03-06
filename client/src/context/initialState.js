import React, { useState } from 'react';  


   
    const initialState = [
      {
        id: '1',
        image: 'http://imgfz.com/i/N1dIDAg.jpeg',
        title: 'Blog Python',
        description: '#portfolio-item-1',
        body: 'Sitio diseñado con Python y Flask en base de SQL.',     
      },
      {
        id: '2',
        image: 'http://imgfz.com/i/LHG0fn3.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-2',
        body: 'Web diseñada en Front con Angular y Backend en Node - Express.'
      },
      {
        id: '3',
        image: 'http://imgfz.com/i/eFBAsvz.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-3',
        body: 'Web diseñada en Front con React y Backend en Node - Express.'

      },
      {
        id: '4',
        image: 'http://imgfz.com/i/MPX3lLS.jpeg',
        title: 'Blog de noticias',
        description: '#portfolio-item-4',
        body: 'Realizado bajo consigna de curso y utilizando HTML, CSS, JavaScript Vanilla, Jquery'
      },
      {
        id: '5',
        image: 'http://imgfz.com/i/eGWj7oI.jpeg',
        title: 'Pokenet Social',
        description: '#portfolio-item-5',
        body: 'Red Social Pokemon. Para su construcción se utilizó HTML, CSS, Bootstrap, ReactJs, Redux y Firebase'
      },
      {
        id: '6',
        image: 'http://imgfz.com/i/Ww1CjPt.jpeg',
        title: 'Lista de Tareas Online',
        description: '#portfolio-item-6',
        body: 'Realizado como ejercitación y solución a problemas domiciliarios, utilizando HTML, CSS y JavaScript Vanilla'
      },
      {
        id: '7',
        image: 'http://imgfz.com/i/lHoiDCm.jpeg',
        title: 'Rick & Morty Data Finder',
        description: '#portfolio-item-7',
        body: 'Challenge realizado para Puzzle Accademy. Para su construcción se utilizó HTML, CSS, Bootstrap, ReactJs, Redux, GraphQl y la API de Rick and Morty'
      },
      {
        id: '8',
        image: 'http://imgfz.com/i/LuN7EgM.jpeg',
        title: 'E-commerce',
        description: '#portfolio-item-8',
        body: 'React, JsonServer, Firebase.'
      },
      {
        id: '9',
        image: 'http://imgfz.com/i/76C0aZS.jpeg',
        title: 'Finance app',
        description: '#portfolio-item-9',
        body: 'React, Node, Express, MongoDB.'
      },
      {
        id: '10',
        image: ' http://imgfz.com/i/glqOIky.jpeg',
        title: 'API Rick & Morgan',
        description: '#portfolio-item-10',
        body: 'React, Hooks.'
      },
      {
        id: '11',
        image: 'http://imgfz.com/i/NIXKlnQ.jpeg',
        title: 'Full Posts Calling',
        description: '#portfolio-item-11',
        body: 'React, Axios, PlaceHolder API.'
      },
      {
        id: '12',
        image: 'http://imgfz.com/i/sGElxV0.jpeg',
        title: 'Game Page Minesweeper.',
        description: '#portfolio-item-12',
        body: 'Minesweeper app, MERN stack.'
      },
      {
        id: '13',
        image: 'http://imgfz.com/i/vy7rhUj.jpeg',
        title: 'Video-club',
        description: '#portfolio-item-13',
        body: 'Video with React and Redux'
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
  