import React from 'react';
import './Slider.css';


const Slider = () =>{
    return(

        <section id="slider">
        <input type="radio" name="slider" id="s1" checked/>
        <input type="radio" name="slider" id="s2"/>
        <input type="radio" name="slider" id="s3"/>
        <input type="radio" name="slider" id="s4"/>
      
      
        <label for="s1" id="slide1">E-Commerce</label>
        <label for="s2" id="slide2">E-Commerce</label>
        <label for="s3" id="slide3">E-Commerce</label>
        <label for="s4" id="slide4">E-Commerce</label>
        
        </section>

    )
};

export default Slider;



