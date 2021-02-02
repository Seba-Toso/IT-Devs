import React from 'react';
import './Quienes.css';


const QuienesSomos = () =>{


    const developers = [
        {
            id: 1,
            name: 'CRISTIAN MACHUCA',
            avatar: 'http://imgfz.com/i/uS40TwE.jpeg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  '
        },
        {
            id: 2,
            name: 'SEBASTIÁN TOSO',
            avatar: 'https://avatars.githubusercontent.com/u/66390886?s=460&u=cd0fd00c67e5d0a2c83dcbe99574a6f9c50bf3ee&v=4',
            description: 'Mamáááááááá! Sacá la mano de ahí car$%#, cortaste toda la loz!!'
        },
    ]

    return(
        <div className='section profiles'>
            <h1 className='profileTitle One'>MEET THE TEAM.</h1>
                {
                    developers.map( developer => {
                        return (
                            <div className='profileContainer' key={developer.id}>
                                <div className="avatarContainer">
                                    <img src={developer.avatar} id="avatar" alt=""/>
                                </div>
                                <div className='profileInformation'>
                                    <h3 className='profileName'>{developer.name}</h3>
                                    <p className='profileDescription'>{developer.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )

};

export default QuienesSomos;