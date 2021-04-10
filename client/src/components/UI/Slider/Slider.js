import React, { useContext, useMemo, memo } from 'react';
import { Context } from '../../../context/initialState';
import Slide from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


const Slider = () =>{

    const [ state ] = useContext( Context );
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        lazyLoad: true,
        fade: true,
        swipeToSlide: true,
    }
    
    const sliderRender = useMemo(() => {
        
        return  !state.length ? <h1>No hay proyectos disponibles para mostrar...</h1>
                :
                state.map( project => (
                        <div key={project.id} className='slideImageContainer'>
                            <img 
                                src={project.image} 
                                alt='Project Illustration' 
                                className='slideImage'
                            />
                        </div>
                    )
                )
                
    }, [ state ])




    return(
        <Slide {...settings} className='slider'>{ sliderRender }</Slide>
    )
};

export default memo(Slider);



