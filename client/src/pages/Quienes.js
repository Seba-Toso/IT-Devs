import React from 'react';
import * as ReactIcons from 'react-icons/di'
import * as IconName from "react-icons/fa";
import './Quienes.css';


const QuienesSomos = () =>{


    return(
        <div>
            <div className='section intro'>
                    
                    <div className='sloganContainer'>
                        <h1 className='sloganText One'>MEET</h1>
                        <h1 className='sloganText Two'>THE</h1>
                        <h1 className='sloganText Three'>TEAM</h1>
                    </div>
            </div>
            <div>
            <div className='logoContainer'>
                    <img src='assets/fullLogo.png' height={'400px'} alt='Logo'/>
            
            <p>IT-Devs es un Proyecto emprendedor diseñado y dirigido por dos
            Developers en entorno de Stack MERN. El objetivo principal del</p>
            <p>emprendimiento es generar Soluciones de Desarrollo Web para
            quienes quieren ingresar sus Negocios en el mundo del Comercio</p>
            <p>Digital y así llegar mejor a potenciales Clientes y generar
            mayores ingresos, deja que la Tecnología lo haga por Vos.</p>
            </div>
            </div>
            <div className="Container projectSlider section">
                <div className="Card">         
                    <img src="http://imgfz.com/i/uS40TwE.jpeg" alt="" />
                    <p>Desarrollador FullStack MERN.
                    Estudiante de Desarrollo de Software.
                    Emprendedor Web.</p>
                    <p></p>
                    <h2>Cristian Machuca</h2>
                    <h4>Developer</h4>
                    <div className="Links">
                                <div id="git"><ReactIcons.DiGithubBadge /></div>  
                                <div id="linkedin"><IconName.FaLinkedin /></div>
                                <div id="youtube"><IconName.FaYoutube /></div>
                    </div>
                </div>  
                <div className="Card">         
                <img src="https://avatars.githubusercontent.com/u/66390886?s=460&u=cd0fd00c67e5d0a2c83dcbe99574a6f9c50bf3ee&v=4" alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    <h2>Sebastian Toso</h2>
                    <h4>Developer</h4>
                    <div className="Links">
                                <div id="git"><ReactIcons.DiGithubBadge /></div>  
                                <div id="linkedin"><IconName.FaLinkedin /></div>
                                <div id="youtube"><IconName.FaYoutube /></div>
                    </div>
                </div>       
            </div> 
     </div>
    
    )

};

export default QuienesSomos;
