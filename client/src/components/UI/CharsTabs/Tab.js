import React from 'react'

import './Tab.css'


const Tab = props => {

    return (
        <div className='tab' onMouseOver={props.hoverHandle}>
            <h4 className='tabName'>
                {props.tabName || null}
            </h4>
        </div>
    )
}


export default Tab;