import React from 'react';
import './Porfolio.css';

import products from '../context/initialState'

const Portfolio = () =>{
  
  const products= [
    {
      id: '1',
      image: 'http://imgfz.com/i/oVrt6KT.jpeg',
      title: 'Blog Python',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '2',
      image: 'http://imgfz.com/i/o5IHu0b.jpeg',
      title: 'E-commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '3',
      image: 'http://imgfz.com/i/WHgpPY8.jpeg',
      title: 'API REST NODE JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '4',
      image: 'http://imgfz.com/i/ojQLO6e.jpeg',
      title: 'E-commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '5',
      image: 'http://imgfz.com/i/o5IHu0b.jpeg',
      title: 'E-commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '6',
      image: 'http://imgfz.com/i/WHgpPY8.jpeg',
      title: 'API REST NODE JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '7',
      image: 'http://imgfz.com/i/ojQLO6e.jpeg',
      title: 'E-commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    }  
  ]

  return(
      <div className='Products-items'>
        <div className='section'>
          <div className='sloganContainer'>
                  <h1 className='sloganText One'>WHAT</h1>
                  <h1 className='sloganText Two'>WE</h1>
                  <h1 className='sloganText Three'>DID.</h1>
          </div>
        </div>
        <div className='section portfolioGrid'>
          {
            products.map( project => { 
              return (
                <div className='portfolioItem' key={project.id} style={{backgroundImage: `url(${project.image})`}}> 
                  <div className='projectInfo'>{project.title}</div>
                </div>
              )
            })
          }
        </div>

        {/*
        <hr/>
          <ul>
              <li><img src='http://imgfz.com/i/PmSDd1U.jpeg' id='Moda' /></li>
              <h2>Tienda de Moda</h2><span>Registro de Usuarios.</span>
              <li><img src='http://imgfz.com/i/o5IHu0b.jpeg' /></li>
              <h2>E-commerce</h2><span>Tienda con carrito de compras.</span>
              <li><img src='http://imgfz.com/i/VWsILRQ.jpeg' id='Vinos'/></li>
              <h2>E-commerce de Vinos</h2><span>Registro de Usuarios.</span>
              <li><img src='http://imgfz.com/i/ojQLO6e.jpeg'/></li>
              <h2>E-commerce</h2><span>Tienda con carrito de compras.</span>
          </ul>
        <hr/>
        */}
      </div>
  )
    
};

export default Portfolio;