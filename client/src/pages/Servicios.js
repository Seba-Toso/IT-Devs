import React, { useMemo, memo } from 'react';
import * as ReactIcons from 'react-icons/md'
import { GiPlainArrow } from 'react-icons/gi'
import Card from '../components/UI/Card/Card'
import './Css/Services.css'

const Servicios = () =>{

    const services = [
        {image: <ReactIcons.MdLineStyle className='imageIcon'/> , title: 'Landing Pages', data: 'Webs de una sola página, ideales para promociones, campañas de márketing o información concreta.'},
        {image: <ReactIcons.MdLocalMall className='imageIcon'/> , title: 'Tienda Online', data: 'Desarrollamos una tienda hecha a tu medida.'},
        {image: <ReactIcons.MdWeb className='imageIcon'/> , title: 'Blogs', data: 'Creamos páginas simples y llamativas para que muestres tu propio contenido, compartas tus ideas y te des a conocer.'},
        {image: <ReactIcons.MdPieChart className='imageIcon'/> , title: 'Sistemas de Gestión', data: 'Tené el control de tu emprendimiento con una vistosa y moderna web de gestión.'},
        {image: <ReactIcons.MdSchool className='imageIcon'/> , title: 'Educactivo', data: 'Llevamos la educación al siguiente nivel. Publica contenidos de diversa índole con los que las personas puedan aprender. '},
        {image: <ReactIcons.MdNewReleases className='imageIcon'/> , title: 'Portales', data: 'Crea una web que agrupe información de diversa índole como noticias, política, tecnología o dedicados a un tema particular.'},
        {image: <ReactIcons.MdSettings className='imageIcon'/> , title: 'Mantenimiento', data: 'Revisamos el código de tu web en búsqueda de errores, bugs o elementos obsoletos.'},
        {image: <ReactIcons.MdSystemUpdateAlt className='imageIcon'/> , title: 'Actualización', data: 'Tomamos tu web, actualizamos y modernizamos su código.'}
    ]
     
    const servicesList = useMemo(() => {
        return !services.length ?  null
        :
        (
            <div className='section services'>
                {
                    services.map(service => <Card key={service.title} service={service} /> )
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
                    <span className='process'><ReactIcons.MdPhoneInTalk /><small>Recibido un mensaje nos pondremos en contacto</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdEventAvailable /><small>Agendaremos una reunión para conocer los requerimientos</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdMonetizationOn /><small>Realizaremos un presupuesto y un boceto inicial del proyecto</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdCode /><small>Aceptado el presupuesto, el equipo comienza a trabajar</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdFavorite /><small>Te enviamos los avances para conformidad</small></span>
                    <span className='arrow'><GiPlainArrow /></span>
                    <span className='process'><ReactIcons.MdPublic /><small>Subimos la página a un <strong>HOST</strong></small></span>
                </div> 
                <h2 className='faqHeader'>Preguntas Frecuentes</h2>
                <div className='FAQ'>
                    <h4 className='ask'>¿Solicitar o enviar un presupuesto me compromete a la realización de la web?</h4>
                    <p className='answer'>Si envias el presupuesto desde el estimador de costos, nos llegará automáticamente y luego nos pondremos en contacto, 
                    en caso desistir, con solo notificarnos basta para no proceder con la realización de la misma. <br/>
                    En caso de solicitarnos un presupuesto esperaremos confirmación del mismo para avanzar en el proceso de creación de la web.</p>
                    
                    <h4 className='ask'>¿Cuáles son los pasos luego de encargar un trabajo?</h4>
                    <p className='answer'>Coordinaremos un encuentro en donde nos harás saber tus necesidades y nos brindarás toda la información necesaria para que podamos diseñar un primer boceto de la web
                     y su código básico (Colores, logos, imágenes, textos o palabras clave, etc). Luego pediremos conformidad para comenzar a trabajar en la creación de la web.
                    </p>
                    
                    <h4 className='ask'>¿Puedo conocer el avance de mi web antes del resultado final?</h4>
                    <p className='answer'>Si, podemos coordinar distintos encuentros para ir corroborando el avance e ir generando feedback sobre la creación del mismo.</p>
                    
                    <h4 className='ask'>¿En cuánto tiempo voy a tener mi web disponible?</h4>
                    <p className='answer'>El tiempo de trabajo será determinado por los requerimientos que deba tener la web. Solamente podremos estimar un tiempo una vez
                    que sepamos estas necesidades.
                    </p>
                    
                    <h4 className='ask'>¿En cuánto tiempo voy a tener mi web disponible?</h4>
                    <p className='answer'>El tiempo de trabajo será determinado por los requerimientos que deba tener la web. Solamente podremos estimar un tiempo una vez
                    que sepamos estas necesidades.
                    </p>
                    
                    <h4 className='ask'>¿En qué HOST va a estar alojada mi web?</h4>
                    <p className='answer'>Trabajamos con distintos HOST nacionales e internacionales según las necesidades.
                    </p>
                    
                    <h4 className='ask'>¿Ofrecen algún tipo de garantía por mal funcionamiento?</h4>
                    <p className='answer'>Nuestros productos llegar a Hosting testeados asegurando que estan sin defectos operativos,  
                    cada avance te iremos compartiendo asegurando tu conformidad al llegar al final del proyecto y seguros que todo esta
                    correctamente como tu necesidad lo requiere.</p>

                    <h4 className='ask'>¿Cómo puedo realizar el pago?</h4>
                    <p className='answer'>Ofrecemos distintos métodos de pago digitales. Para un mayor compromiso y responsabilidad con el cliente, los
                    presupuestos y los pagos son definidos en reuniones con los mismos.</p>
                </div>
            </div>
        </div>
    )
};

export default memo(Servicios);