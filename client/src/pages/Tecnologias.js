import React from 'react';
import { useSpring, animated } from 'react-spring'



const Tecnologias = () =>{

    const items = [0,1,2,3]
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
    const { radians } = useSpring({
        to: async next => {
        while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })

  
         
    return (

        <div className="Tools">
            <div className='intro section'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>CÓMO LO</h1>
                    <h1 className='sloganText Two'>HACEMOS</h1>
                    <h1 className='sloganText Three'>REALIDAD.</h1>     
                </div>
            </div>
            <div className='section techs'>
                {
                    items.map(
                        i => { return <animated.div key={i} className="script-bf-box"  
                            style={{
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '150px',
                                height: '400px',
                                background: 'black',
                                margin: '5px',
                                transform: radians.interpolate(interp(i)),
                            }}/> 
                        }
                    )
                }
            </div>
        </div>
        
    )
};

export default Tecnologias;

