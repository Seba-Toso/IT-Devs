import React from 'react'
import Tab from './Tab'
import './CharsTabs.css'


const CharsTab = props => {

    return (
        <div className='CharsTab'>
            <div className='tabs'>
                <Tab tabName='Moderno y eficiente'/>
                <Tab tabName='Gran performance'/>
                <Tab tabName='Feedback'/>
            </div>
            <div className='tabImage'>
            </div>
        </div>
    )
}


export default CharsTab;