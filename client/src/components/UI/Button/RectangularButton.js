import React from 'react'

import './RectangularButton.css'

const RectangularButton = props => {
    const button = props.selectedIcon

    return (
        <div className='RectangularButtonContainer'>
            <div className='iconContainer'>
                {button}          
            </div>
        </div>
    )
}

export default RectangularButton