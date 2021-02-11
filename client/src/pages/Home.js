import React from 'react';
import Contact from '../components/Contact/Contact'
import RoundButton from '../components/UI/RoundButton/RoundButton'
import * as ReactIcon from 'react-icons/io5'
import './Home.css'
import Slider from '../components/UI/Slider/Slider';
import CharsTabs from '../components/UI/CharsTabs/CharsTabs'

// import Cookies from 'universal-cookie';
 
const Home = () =>{
    
    const scrollBottomHandle = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

    // const cookies = new Cookies();
 
    // cookies.set('myCat', 'Pacman', { path: '/' });
    // console.log(cookies.get('myCat')); // Pacman

    return(
        <div style={{'marginTop': '0'}}>
            <div className='ScrollBottomButton'>
                <RoundButton selectedIcon={<ReactIcon.IoMailUnreadSharp/>} onScrollTop={scrollBottomHandle}/>
            </div>
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
                            Conectá con tus clientes a través de páginas modernas, directas, simples, llamativas y dale vida a tu proyecto en Internet.
                            Bajo el diseño de una sola página vas a potenciar tus productos y campañas de marketing enfocadas aumentar la conversión de tu negocio. 
                        </p>
                    </div>
                    <div className='GridSection'>
                    <h2 className='Subtitle'>Herramientas personalizadas</h2>
                        <p className='Information'>
                            Aumentá la experiencia usuario con herramientas que faciliten el acceso, la información, pagos o reservas de tu proyecto. 
                        </p>
                    </div>
                    <div className='GridSection'>
                    <h2 className='Subtitle'>Sistemas de Gestión</h2>
                        <p className='Information'>
                            Creá un sistema de gestión que te permita generar una mejor experiencia ya sea en tu emprendimiento, proyecto, trabajo u otros.
                            Esto te va a permitir tener una mejor visualización y automatización de tareas.
                        </p>
                    </div>
                    <div className='GridSection'>
                        <h2 className='Subtitle'>Actualización y Mantenimiento</h2>
                        <p className='Information'>
                            Tomamos tu proyecto web para mantenerlo activo, actualizado, funcional y con gran performance.
                        </p>
                    </div>
                </div>
            </div>
            
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