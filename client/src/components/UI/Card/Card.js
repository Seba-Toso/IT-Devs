import React, { useState } from 'react'
import { useSpring, animated as SpringElement } from 'react-spring'
import './Card.css'

const Card = props => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div onClick={() => set(state => !state)}>
            <SpringElement.div class="c back Card" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <SpringElement.div class="c front Card" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} />
        </div>
    )
}


export default Card;