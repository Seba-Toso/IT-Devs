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
      }  
    ];
  
    export const Context = React.createContext()
    
    const Store = ({ children }) => {
      const [state, setState ] = useState(initialState)

      return (
        <Context.Provider value= { [state, setState]}>
          { children }
        </Context.Provider>
      )
    }

    export default Store
  