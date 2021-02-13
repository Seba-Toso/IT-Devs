import React from 'react'

import './Card.css'

const Card = props => {

    const {service} = props

    return (
        <div className='card'>
            <div className='cardImage'>
                <div className='imageIconContainer'>
                    {service.image}
                </div>
                <div className='imageBackground'></div>
            </div>
            <div className='cardData'>
                <h5 className='cardTitle'>{service.title}</h5>
                <p className='cardData'>{service.data}</p>
            </div>
        </div>        
    )
}


export default Card;