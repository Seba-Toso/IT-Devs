import React, {useEffect, useState} from 'react';
import RoundButton from '../UI/RoundButton/RoundButton';
import * as ReactIcon from 'react-icons/io5';
import './Foot.css';


const Footer = () => {


    const scrollTopHandle = () => {
        window.scrollTo(0, 0);
    }



    return (
        <div className='FooterContainer'>
            <div className='FooterInfo'>
                <p className='text'>
                    Este sitio fue diseñado y desarrollado por IT-DEVS con mucho <ReactIcon.IoHeart className='heart' /> <br />
                    &copy; 2021. Todos los derechos reservados.
                    <br/>
                    Gracias por visitarnos.
                </p>
            </div>
            <div className='SocialMediaContainer'>
                

                <a className='SocialMediaName SocialMediaButton GitHub' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoLogoGithub className='SocialIcon' /><small> GitHub</small>  
                </a>
                <a className='SocialMediaName SocialMediaButton LinkedIn' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoLogoLinkedin className='SocialIcon' /><small> LinkedIn</small>  
                </a>
                <a className='SocialMediaName SocialMediaButton Mail' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoMailSharp className='SocialIcon' /><small> Mail</small>  
                </a>
                <a className='SocialMediaName SocialMediaButton Blog' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoNewspaperSharp className='SocialIcon' /><small> Blog</small>  
                </a>
                

            </div>
            <div className='ScrollTopButton'>
                <RoundButton selectedIcon={<ReactIcon.IoChevronUp />} onScrollTop={scrollTopHandle} />
            </div>

        </div>
    )
}

export default Footer