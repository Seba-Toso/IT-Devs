import React, {useState} from 'react'
import ProjectCard from '../UI/ProjectCard/ProjectCard'
import './Carrousel.css'

const Carrousel = () => {
    const [projects, setProjects] = useState([0,1,2,3,4,5,6,7,8,9])
    

    const onSlide = () => {
        //hacer lógica de rotación
        setProjects([6,1,5,3,6,8,9,1,23,4,512,2])
    }

    return (
        <div className='CarrouselContainer' >
            <div className='Carrousel' id='Carrousel'>
                {
                    projects.map( project => {return <ProjectCard key={project} number={project}/>})
                }
            </div>
            <div onClick={onSlide}> BOTON </div>
        </div>
    )
}


export default Carrousel;