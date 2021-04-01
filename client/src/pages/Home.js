import React from 'react';
import Contact from '../components/Contact/Contact'
import RoundButton from '../components/UI/RoundButton/RoundButton'
import * as ReactIcon from 'react-icons/io5'
import './Css/Home.css'
import Slider from '../components/UI/Slider/Slider';
import CharsTabs from '../components/UI/CharsTabs/CharsTabs'

// import Cookies from 'universal-cookie';
function test() {
    return (
        <div>
            <div className='section intro'>
            <div className='logoContainer'>
                <img src='assets/fullLogo.png' height={'400px'} alt='Logo'/>
            </div>
            <div className='sloganContainer'>
                <h1 className='sloganText One'>DESARROLLAR</h1>
                <h1 className='sloganText Two'>NUNCA FUE</h1>
                <h1 className='sloganText Three'>TAN FÁCIL.</h1>
            </div>
        </div>

        <div className='section what'>
            <h1 className='title'>¿QUÉ HACEMOS?</h1>
            <div className='InformationContainer'>
                <div className='GridSection'>
                    <h2 className='Subtitle'>Landing Pages</h2>
                    <p className='Information'>
                        Una <i style={{fontWeight:'bold'}}>landing page</i> es una página dentro de un sitio web cuyo objetivo es captar el interés de los usuarios para convertirlos en posibles clentes de tu proyecto.{<br/>}
                        Conectá con tus clientes a través de páginas modernas, directas, simples y llamativas, dándole vida a tu proyecto en Internet y potenciando tus productos y campañas de marketing enfocadas aumentar la conversión de tu negocio.
                    </p>
                </div>
                <div className='GridSection'>
                <h2 className='Subtitle'>Herramientas personalizadas</h2>
                    <p className='Information'>
                        Creá utilidades que permitan generar una gran experiencia de usuario a quienes visiten tu web. {<br/>}
                        Al aumentar la experiencia de usuario con herramientas que faciliten el acceso, la información, pagos o reservas de tu proyecto 
                        generás mayor conformidad y satisfacción en tu cliente durante la interacción con tu web.
                    </p>
                </div>
                <div className='GridSection'>
                <h2 className='Subtitle'>Sistemas de Gestión</h2>
                    <p className='Information'>
                        Un sistema de gestión es una herramienta que permite controlar, planificar, organizar y automatizar las tareas administrativas de tu proyecto.
                        Generá un sistema de gestión que otorgue una mejor experiencia en tu emprendimiento, proyecto o trabajo, lo que va a permitir tener una mejor 
                        visualización y automatización de tareas dando como resultado una productividad más eficiente.
                    </p>
                </div>
                <div className='GridSection'>
                    <h2 className='Subtitle'>Actualización y Mantenimiento</h2>
                    <p className='Information'>
                        Nos comprometemos a realizar mantenimiento de nuestras webs, actualizando servicios y funcionalidades utilizadas para crearla. {<br/>}
                        Tomamos tu proyecto web ya realizado para mantenerlo activo, actualizado, funcional y con gran performance, o también reacerlo utilizando la
                        base ya existente.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

 
const Home = () =>{
    
    const scrollBottomHandle = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

    return(
        <div className='HomeContainer'>
            <div className='ScrollBottomButton'>
                <RoundButton selectedIcon={<ReactIcon.IoMailUnreadSharp/>} onScrollTop={scrollBottomHandle}/>
            </div>

             <div>{ test() }</div>
            
            <div className='section characteristic'>
                <h1 className='title'>CARACTERÍSTICAS DE NUESTROS PROYECTOS</h1>
                <CharsTabs />
            </div>

            <div className='section projectSlider'>
                <Slider/>
            </div>
            <Contact/>
        </div>
        
    )
};

export default Home;