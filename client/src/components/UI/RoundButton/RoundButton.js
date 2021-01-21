import React from 'react'

import './RoundButton.css'

const RoundButton = props => {
    const button = props.selectedIcon

    const onScroll = props.onScrollTop

    return (
        <div className='ButtonContainer' onClick={onScroll}>
            <div className='iconContainer'>
                {button}          
            </div>
        </div>
    )
}

export default RoundButton