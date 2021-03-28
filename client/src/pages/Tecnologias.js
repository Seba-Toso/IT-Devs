import React, { useState, useCallback, useMemo, memo } from 'react'
import { useTransition, animated } from 'react-spring'
import * as ReactIcons from 'react-icons/si'

import './Css/Tecnologias.css'


const Tecnologias = () =>{

    const [index, setIndex] = useState(0)
    const onClick = useCallback(() => setIndex(state => (state + 1) % 6), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const pages = [
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'lightcoral' }}><ReactIcons.SiHtml5 style={{marginRight: '2rem', fontSize: '26rem'}}/> HTML</animated.div>,
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'lightblue' }}><ReactIcons.SiCss3 style={{marginRight: '2rem', fontSize: '26rem'}}/> CSS</animated.div>,
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'yellow' }}><ReactIcons.SiJavascript style={{marginRight: '2rem', fontSize: '26rem'}}/> JS</animated.div>,
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'lightskyblue' }}><ReactIcons.SiReact style={{marginRight: '2rem', fontSize: '26rem'}}/> REACT</animated.div>,
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'limegreen' }}><ReactIcons.SiNodeDotJs style={{marginRight: '2rem', fontSize: '26rem'}}/> NODEJS</animated.div>,
        ({ style }) => <animated.div style={{ ...style, padding: '10px', background: 'lightgreen' }}><ReactIcons.SiMongodb style={{marginRight: '2rem', fontSize: '26rem'}}/> MONGO</animated.div>
        ]

    const techList = useMemo(() => { 
        if( !transitions.length ) return null

        return (
                <div className='techs'>
                    <div className="simple-trans-main" onClick={onClick}>
                        {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return( 
                            <div>
                                <Page key={key} style={props} />
                            </div>
                        )
                        })}
                    </div>
                </div>
        )
     }, [ transitions ])
    return (
        
        <div>
            <div className='intro section'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>CÓMO LO</h1>
                    <h1 className='sloganText Two'>HACEMOS</h1>
                    <h1 className='sloganText Three'>REALIDAD.</h1>     
                </div>
            </div>
            <div className='section presentation'>
                <div className='logoContainer'>
                    <p>
                        En IT-Devs usamos tecnologías de punta para realizar
                        todos nuestros trabajos, dentro de un ecosistema que convive perfectamente
                        con todas las necesidades que nuestros clientes puedan tener.
                        Robusto, fácil de mantener, vistoso, moderno, son algunas de las características que
                        identifican nuestros proyectos.
                    </p>
                </div>
            </div>
           { techList }
        </div>
        
    )
};

export default memo( Tecnologias );


