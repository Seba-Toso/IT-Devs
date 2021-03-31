import React from 'react';
import './Css/NotFound.css';

const NotFound = () =>{
    return(
        <div className="NotFound">
            <div className='sloganContainer Error'>
                  <h1 className='sloganText One'>ERROR 404</h1>
                  <h1 className='sloganText Two'>PASARON</h1>
                  <h1 className='sloganText Three'>COSAS...</h1>
            </div>
            <div className='section errorMessage'>
                <h1>Uff... Algo no estuvo bueno y no salió como lo planeamos.</h1>
                <p>Te recomendamos visitar nuestra sección de <i>PROYECTOS</i> para ver nuestros trabajos.</p>
                <p>Si tienes un proyecto en mente, visita <i>PRESUPUESTA</i> para realizar una estimación del costo y contactarte con nosotros.</p>
            </div>
        </div>
    )
};

export default NotFound;


