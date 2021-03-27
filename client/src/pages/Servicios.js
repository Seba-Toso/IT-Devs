import React from 'react';
import * as ReactIcons from 'react-icons/md'
import Card from '../components/UI/Card/Card'

import './Css/Services.css'

const Servicios = () =>{

    const services = [
        {image: <ReactIcons.MdLineStyle className='imageIcon'/> , title: 'Landing Pages', data: 'Webs de una sola página, ideales para promociones, campañas de márketing o información concreta.'},
        {image: <ReactIcons.MdLocalMall className='imageIcon'/> , title: 'Tienda Online', data: 'Tiendas personalizadas y amoldadas a tu marca, tus productos y tu estilo.'},
        {image: <ReactIcons.MdWeb className='imageIcon'/> , title: 'Blogs', data: 'Páginas simples para mostrar contenido propio, compartir tus ideas personales, darte a conocer.'},
        {image: <ReactIcons.MdPieChart className='imageIcon'/> , title: 'Sistemas de Gestión', data: 'Tené el control de tu emprendimiento con una vistosa y moderna web de gestión.'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'Mantenimiento', data: 'Confiá tu web a nuestras manos para revisarlo, actualizarlo y mantenerlo activo.'},
    ]

    return(
        <div>
            <div className='section intro'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>QUE</h1>
                    <h1 className='sloganText Two'>PODEMOS</h1>
                    <h1 className='sloganText Three'>OFRECERTE.</h1>
                </div>
            </div>
            <div className='section services'>
                {
                    services.map(service => { return <Card key={service.title} service={service} /> })
                }
               
            </div>
        </div>
    )
};

export default Servicios;