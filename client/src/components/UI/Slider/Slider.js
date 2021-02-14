import React, { useContext } from 'react';
import { Context } from '../../../context/initialState';
import Slide from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './Slider.css';


const Slider = () =>{

    const [state, setState ] = useContext(Context);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    }
    
    return(

        <Slide {...settings} className='slider'>
           {
                state.map( project => { 
                    return (
                    <div key={project.id} className='slideImageContainer'>
                        <img src={project.image} alt='project' className='slideImage'/>
                    </div>
                    )
                })
            }
        </Slide>

        

    )
};

export default Slider;



