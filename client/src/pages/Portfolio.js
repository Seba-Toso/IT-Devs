import React from 'react';
import './Porfolio.css';



const Portfolio = () =>{

  return(
      <div className='Products-items'>
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
      </div>
  )
    
};

export default Portfolio;