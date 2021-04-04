import React, { useMemo, memo } from 'react';
import * as ReactIcons from 'react-icons/md'
import { GiPlainArrow } from 'react-icons/gi'
import Card from '../components/UI/Card/Card'
import './Css/Services.css'

const Servicios = () =>{

    const services = [
        {image: <ReactIcons.MdLineStyle className='imageIcon'/> , title: 'Landing Pages', data: 'Webs de una sola página, ideales para promociones, campañas de márketing o información concreta.'},
        {image: <ReactIcons.MdLocalMall className='imageIcon'/> , title: 'Tienda Online', data: 'Tiendas personalizadas y amoldadas a tu marca, tus productos y tu estilo.'},
        {image: <ReactIcons.MdWeb className='imageIcon'/> , title: 'Blogs', data: 'Páginas simples para mostrar contenido propio, compartir tus ideas personales, darte a conocer.'},
        {image: <ReactIcons.MdPieChart className='imageIcon'/> , title: 'Sistemas de Gestión', data: 'Tené el control de tu emprendimiento con una vistosa y moderna web de gestión.'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'Mantenimiento', data: 'Confiá tu web a nuestras manos para revisarlo, actualizarlo y mantenerlo activo.'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'Nuevo Servicio', data: 'Tarjeta de prueba a completar con otros servicios ofrecidos'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'Otro Servicio', data: 'Tarjeta de prueba a completar con otros servicios ofrecidos'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'y un Servicio mas', data: 'Tarjeta de prueba a completar con otros servicios ofrecidos'}
    ]
     
    const servicesList = useMemo(() => {
        if( !services.length ) return null

        return (

            <div className='section services'>
                {
                    services.map(service => { return <Card key={service.title} service={service} /> })
                }
               
            </div>
        )
    }, [ services ])



    return(
        <div>
            <div className='section intro'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>QUÉ</h1>
                    <h1 className='sloganText Two'>PODEMOS</h1>
                    <h1 className='sloganText Three'>OFRECERTE.</h1>
                </div>
            </div>
            { servicesList }
            <div className='section whatelse'>
                <h2 className='title'>¿CÓMO LO LLEVAMOS ADELANTE?</h2>
                <div className='processContainer'>
                    <span className='process'><ReactIcons.MdPhoneInTalk /><small>Nos ponemos en contacto</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdEventAvailable /><small>Agendamos una reunión</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdCode /><small>El equipo comienza a trabajar</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdFavorite /><small>Te enviamos los avances para conformidad</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdPublic /><small>Subimos la página a un <strong>HOST</strong></small></span>
                </div> 
                <h2 className='subtitle faqHeader'>F.A.Q</h2>
                <div className='FAQ'>
                    <h4 className='ask'>¿Ésto es una pregunta?</h4>
                    <p className='answer'>Ésto es una respuesta a la pregunta de arriba</p>
                    <h4 className='ask'>¿Ésto es una pregunta?</h4>
                    <p className='answer'>Ésto es una respuesta a la pregunta de arriba</p>
                    <h4 className='ask'>¿Ésto es una pregunta?</h4>
                    <p className='answer'>Ésto es una respuesta a la pregunta de arriba</p>
                    <h4 className='ask'>¿Ésto es una pregunta?</h4>
                    <p className='answer'>Ésto es una respuesta a la pregunta de arriba</p>
                </div>
            </div>
        </div>
    )
};

export default memo(Servicios);