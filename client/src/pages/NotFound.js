import React from 'react';
import { GiBrokenBone } from "react-icons/gi";
import { RiEmotionSadFill } from "react-icons/ri";

import './Css/NotFound.css';

const NotFound = () =>{
    return(
        <div className="NotFound">
            <div className='sloganContainer Error'>
                  <h1 className='sloganText One'>OH NO!!! <RiEmotionSadFill fontSize='55px'/></h1>
                  <h1 className='sloganText Two'>404</h1>
                  <h1 className='sloganText Three'>ERROR</h1>
            </div>
            <div className='section errorMessage'>
                <h1><GiBrokenBone fontSize='55px' color='rgb(63, 114, 190)'/><br/>Algo no estuvo bueno y no salió como lo planeamos.</h1>
                    <small>Este error pudo deberse a algún dato mal escrito, se buscó algo que no existe o nuestro servidor no pudo procesar tu solicitud</small>
                    <div className='errorHints'>
                    <div>
                        <h4>PROYECTOS</h4>
                        <p>Visita la sección de portfolio para ver algunos de nuestros trabajos ya realizados</p>
                    </div>
                    <div>
                        <h4>PRESUPUESTA</h4>
                        <p>Si tienes un proyecto en mente vas a poder realizar una estimación del costo y contactarte con nosotros.</p>
                    </div>
                    <div>
                        <h4>CONOCENOS</h4>
                        <p>Conoce quienes integramos este proyecto de IT-Devs y cómo trabajamos</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;


