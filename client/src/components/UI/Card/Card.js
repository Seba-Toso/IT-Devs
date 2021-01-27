import React, {useEffect} from 'react'
import './Card.css'

const Card = props => {

    const width = props.width
    const height = props.height

    useEffect( () => {
        const card = document.getElementById('CardContainer')
        card.style.height = height
        card.style.width = width
    },[height, width])

    return (
        <div className='CardContainer' id='CardContainer'>
            
        </div>
    )
}


export default Card;