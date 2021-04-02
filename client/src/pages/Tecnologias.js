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
                            <Page key={key} style={props} />
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
                        En IT-Devs utilizamos las últimas tecnologías para realizar
                        todos nuestros trabajos, en un ecosistema que convive perfectamente
                        con todas las necesidades que nuestros clientes puedan tener. {<br/>}
                        Además de las herramientas básicas para la creación de webs (HTML, CSS y JavaScript),
                        utilizamos librerías y frameworks como React, Bootstrap, Material UI, entre otros, lo que resulta en un sistema
                        robusto, fácil de mantener, vistoso y moderno.{<br/>}
                        {<br/>}
                        Utilizar las herramientas de última generación y las más populares es fundamental para el mantenimiento ya que 
                        parten de empresas (como Facebook) o comunidades que constantemente se encargan de mejorar la performance y la utilidad de las mismas, esto a su vez
                        da la facilidad a nuestros clientes de tener una web que requerirá de poco mantenimiento a corto, mediano y largo plazo,
                        reduciendo futuros costos.  
                    </p>
                </div>
            </div>
           { techList }
        </div>
        
    )
};

export default memo( Tecnologias );


