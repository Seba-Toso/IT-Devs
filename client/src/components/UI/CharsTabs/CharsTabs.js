import React from 'react'
import Tab from './Tab'
import './CharsTabs.css'


const CharsTab = props => {

    const Characteristics = [ 
        {
            title: 'Moderno y eficiente', 
            description: 'Utilizamos las últimas tecnologías, matenemos actualizadas nuestras webs', 
            image: 'assets/modern.png'
        }, 
        {
            title: 'Gran performance', 
            description: 'Nos enfocamos en la respuesta de la página frente a la inteacción del usuario dando así una óptima velocidad de respuesta', 
            image: 'assets/performance.png'
        }, 
        {
            title: 'Feedback', 
            description: 'Hacemos posible que tus usuarios puedan darte un feedback constante sobre la página', 
            image: 'assets/contact.png'
        } 
    ]

    const imgElement = document.getElementById('CharImage')

    const hoverHandle = Characteristic => {
        console.log('clicked');
        imgElement.setAttribute('src', Characteristic.image)
        document.getElementById('charDescription').innerText = Characteristic.description
    }

    return (
        <div className='CharsTab'>
            <div className='tabs'>
                {
                    Characteristics.map( Characteristic => { 
                        return (
                            <Tab 
                                key={Characteristic.title} 
                                id={Characteristic.title} 
                                tabName={Characteristic.title} 
                                hoverHandle={() => hoverHandle(Characteristic)} 
                            /> 
                        )
                    })
                }
            </div>
            <div className='tabImage'>
                <div className='CharDescriptionContainer'>
                    <p id='charDescription'>
                        Utilizamos las últimas tecnologías, matenemos actualizadas nuestras webs
                    </p>
                </div>
                <img src='assets/modern.png' alt='CharacteristicImage' id='CharImage'/>
            </div>
        </div>
    )
}


export default CharsTab;