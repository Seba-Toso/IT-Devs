import React, { useState } from 'react'


import * as IconName from "react-icons/fa";
import './Quienes.css';


const QuienesSomos = () =>{

    const [selectedProfile, setSelectedProfile] = useState(null)

    return(
        <div> 
            <div className='section presentation'>
                <div className='logoContainer'>
                    <img src='assets/fullLogo.png' height={'400px'} alt='Logo'/>
                    <p>
                        IT-Devs es un emprendimiento creado, diseñado y dirigido por dos
                        desarrolladores en entorno de Stack MERN (MongoDb, Express, React y NodeJS). Nuestro objetivo principal 
                        es generar soluciones de desarrollo Web para
                        quienes quieren ingresar al mundo digital, ya sea por
                        comercios, sistemas de gestión, emprendimientos, pequeños proyectos,
                        páginas promocionales u otros.
                        Queremos ayudarte a llegar mejor a potenciales clientes, generar
                        mayores ingresos, llegar más lejos, dárte a conocer.
                        Deja que la tecnología haga todo esto por Vos.
                    </p>
                </div>
            </div>
            <div className='section intro'>
                    <div className='sloganContainer'>
                        <h1 className='sloganText One'>CONOCÉ</h1>
                        <h1 className='sloganText Two'>NUESTRO</h1>
                        <h1 className='sloganText Three'>EQUIPO.</h1>
                    </div>
            </div>
            <div className="Container projectSlider section">

                <div className='Card'  >
                    <img className='avatar' src="http://imgfz.com/i/uS40TwE.jpeg" alt="Avatar Cristian Machuca" />
                    <h2 className='avatarName'>Cristian Machuca</h2>
                    <p onClick={()=> setSelectedProfile('Cristian')}>Conoceme</p>
                    {/*<p></p>*/}
                    <div className="Links">
                        <div id="github"><a href="https://github.com/cristian1534" target="_blank"><IconName.FaGithub/></a></div>  
                        <div id="linkedin"><a href="https://www.linkedin.com/in/cristian-machuca-8883a01b2/" target="_blank"><IconName.FaLinkedin/></a></div>
                        <div id="youtube"><a href="https://www.youtube.com/channel/UCVODmr43Nj3sr3tSqeVk3iA" target="_blank"><IconName.FaYoutube/></a></div>
                    </div>
                </div>

                <div className="Card">         
                    <img className='avatar' src="https://avatars.githubusercontent.com/u/66390886?s=460&u=cd0fd00c67e5d0a2c83dcbe99574a6f9c50bf3ee&v=4" alt="Avatar Sebastian Toso" />
                    <h2 className='avatarName'>Sebastian Toso</h2>
                    <p onClick={()=> setSelectedProfile('Sebastian')}>Conoceme</p>
                    <div className="Links">
                        <div id="github"><IconName.FaGithub/></div>  
                        <div id="linkedin"><IconName.FaLinkedin/></div>
                        <div id="youtube"><IconName.FaYoutube/></div>
                        <div id="instagram"><IconName.FaInstagram/></div>
                    </div>
                </div>
                
                <div className='profileData'>
                    {
                        !selectedProfile ? 
                        <h5 className='profileTitle'>Somos nuestro Staff</h5> 
                        :
                        <React.Fragment>
                        <h5 className='profileTitle'>{selectedProfile === 'Cristian' ? 'FullStack developer' : 'Front-End developer'}</h5>
                        <div className='profileInfo'>
                            <p className='profileDescription'>
                                {
                                    selectedProfile === 'Cristian' ? 
                                    'Desarrollador FullStack MERN. Estudiante de Desarrollo de Software, en mis tiempos libres me gusta despejarme al aire libre y surfear por la web buscando nuevas habilidades de desarrollo. Emprendedor Web.' 
                                    : 
                                    'Buen día, buenas tardes, buenas noches! Me gusta aprender haciendo y hacer aprendiendo, disfruto de las cosas simples, trato de viajar con poco equipaje y camino mi vida con optimismo y alegría. Ésto es lo que me define y lo llevo a donde quiera que voy, mi trabajo, mi familia, amigos y estudio.'
                                }
                            </p>
                            <ul className='profileList'>
                                <li>JavaScript Vanilla</li>
                                <li>ReactJS</li>
                                <li>React Native</li>
                                <li>NodeJS</li>
                                <li>Mongo</li>
                                <li>Express</li>
                                <li>github</li>
                            </ul>
                        </div>
                    
                        </React.Fragment>
                    }
                </div>

            
               
            </div> 
     </div>
    
    )

};

export default QuienesSomos;
