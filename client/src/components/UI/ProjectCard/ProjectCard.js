import React, {useEffect, useState} from 'react'
import './ProjectCard.css'

const ProjectCard = props => {


    return (
        <div className='ProjectCardContainer' >
            {props.number}
        </div>
    )
}


export default ProjectCard;