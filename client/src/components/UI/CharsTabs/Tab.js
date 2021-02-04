import React from 'react'

import './Tab.css'


const Tab = props => {


    return (
        <div className='tab' onClick={() => alert('open characteristic')}>
            <h4 className='tabName'>
                {props.tabName || null}
            </h4>
        </div>
    )
}


export default Tab;