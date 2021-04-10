import React, { useState } from 'react'
import * as IconName from "react-icons/fa";
import './Css/Quienes.css';


const QuienesSomos = ({isDark}) =>{

    const [selectedProfile, setSelectedProfile] = useState(null)
    const src = !isDark? "assets/fullLogo.png" : 'assets/fullLogoNeg.png'
    
    return(
        <div> 
            <div className='section presentation'>
                <div className='logoContainer'>
                    <img src={src} height={'400px'} alt='Logo'/>
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

                <div className='Card profileCard'>
                    <img className='avatar' src="http://imgfz.com/i/uS40TwE.jpeg" alt="Avatar Cristian Machuca" />
                    <div className='profileContainer'>
                        <h2 className='avatarName'>Cristian Machuca</h2>
                        <p onClick={()=> setSelectedProfile('Cristian')} className='knowMe'>Conoceme</p>
                        <div className="Links">
                            <a id="github" href="https://github.com/cristian1534" target="_blank" rel="noopener noreferrer"><IconName.FaGithub/></a>
                            <a id="linkedin" href="https://www.linkedin.com/in/cristian-machuca-8883a01b2/" target="_blank" rel="noopener noreferrer"><IconName.FaLinkedin/></a>
                            <a id="youtube" href="https://www.youtube.com/channel/UCVODmr43Nj3sr3tSqeVk3iA" target="_blank" rel="noopener noreferrer"><IconName.FaYoutube/></a>
                        </div>
                    </div>
                </div>

                <div className="Card profileCard">         
                    <img className='avatar' src="https://avatars.githubusercontent.com/u/66390886?s=460&u=cd0fd00c67e5d0a2c83dcbe99574a6f9c50bf3ee&v=4" alt="Avatar Sebastian Toso" />
                    <div className='profileContainer'>
                        <h2 className='avatarName'>Sebastian Toso</h2>
                        <p onClick={()=> setSelectedProfile('Sebastian')}  className='knowMe'>Conoceme</p>
                        <div className="Links">
                            <a id="github" href="https://github.com/Seba-Toso" target="blank" rel="noopener noreferrer"><IconName.FaGithub/></a>  
                            <a id="linkedin" href="https://linkedin.com/in/sebastiangtoso" target="Blank" rel="noopener noreferrer"><IconName.FaLinkedin/></a>
                            <a id="youtube" href="www.youtube.com" target="_blank" rel="noopener noreferrer"><IconName.FaYoutube/></a>
                            <a id="instagram" href="https://www.instagram.com/sebatoso/?hl=es-la" target="blank"rel="noopener noreferrer"><IconName.FaInstagram/></a>
                        </div>
                    </div>
    
                </div>
                
                <div className='profileData'>
                    {
                        !selectedProfile ? 
                        <React.Fragment>
                            <h5 className='profileTitle'>Somos nuestro Staff</h5> 
                            <div className='profileInfo'>
                                <p className='defaultText'>
                                    Somos un equipo de desarrolladores que buscan emprender el camino de la creación de sitios web,
                                    ayudando a los demás a cumplir objetivos. Nos motiva poder brindar soluciones, herramientas, una mano
                                    para que puedas llevar tu proyecto al siguiente nivel.<br/>
                                    <br/>
                                    Creemos que la confianza es vital a la hora de poner un proyecto en manos de otros, por eso
                                    te invitamos a que nos conozcas y que veas nuestros estudios, crecimiento, trabajos e ideas.<br/>
                                    <br/>
                                    {<IconName.FaHandPointLeft className='handIcon' style={{fontSize: '22px', marginRight: '10px'}} />}
                                    Seleccioná un perfil para ver sus detalles.
                                </p>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <h5 className='profileTitle'>{selectedProfile === 'Cristian' ? 'FullStack developer' : 'Front-End developer'}</h5>
                            <div className='profileInfo'>
                                {
                                    selectedProfile === 'Cristian' ? 
                                    <p className='profileDescription'>Empece en IT por un interés personal e impulsado como autodidacta en Python donde
                                    mi primer proyecto fue con Flask, surge luego la posibilidad de hacer desarrollo web y seguido empiezo mis estudios
                                    para prefesionalizme en esta carrera tan hermosa de IT-Developer en Java y C#.<br/>
                                    En el camino descubrí FullStack JS M.E.R.N y fue algo que me impactó al ver las cosas que podemos hacer y aplicar en los 
                                    demás solucionando problemas que surgen con el avance de la tecnología, como la necesitad de una App o un Web Site.<br/>
                                    El haber pasado por varios lenguajes de programación me ayudó a ver este mundo IT con otra perspectiva, motivado a 
                                    seguir creciendo y mejorando profesionalmente. Es cuando surge IT-Devs como parte del crecimiento profesional.<br/>
                                    En mis tiempos libres, me gusta ir al parque... sentarme abajo de algún árbol y tomar aire fresco, como deporte y buen
                                    argentino me encanta el fútbol.<br/>
                                    Estoy abierto a nuevas posibilidades laborales que me ayuden a seguir creciendo y mejorando profesionalmente en IT. 
                                    </p>
                                    : 
                                    <p className='profileDescription'>En 2018 puse mi interés en el gran mundo del IT, viendo todas sus posibilidades
                                    y buscando algo que me cautivara. A principios de 2019 descubrí el
                                    mundo del desarrollo web, sus herramientas y lenguajes y automáticamente quedé enamorado,
                                    especialmente del lado del Front End.
                                    <br/>
                                    Allí es donde comienza mi aventura, desde entonces he estado estudiando, realizando diversos cursos y
                                    por supuesto, practicando mucho, tratando de obtener habilidades con gran estilo visual y de alto rendimiento.
                                    <br/>
                                    Como todas las personas del mundo, el 2020 fue un año de desafíos que me encuentra
                                    sin trabajo. Si bien fue difícil de llevar adelante también fue una oportunidad para enfocarse
                                    y apostar al 100% a seguir aprendiendo y practicando. En este año me uní a una academia pudiendo
                                    crecer en habilidades como React, Redux, GraphQl y Testing.
                                    <br/>
                                    Ahora en 2021 sigo trabajando en mis habilidades mientras busco mi primer
                                    trabajo como desarrollador en el que pueda consolidar todos los conocimientos aprendidos en los
                                    años pasados y pueda poner los ojos en el futuro.
                                    </p>
                                }
                                <ul className='profileList'>
                                    <li>JavaScript Vanilla</li>
                                    <li>ReactJS</li>
                                    <li>React Native</li>
                                    <li>NodeJS</li>
                                    <li>Mongo</li>
                                    <li>Express</li>
                                    <li>Github</li>
                                    <li>GraphQL</li>
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
