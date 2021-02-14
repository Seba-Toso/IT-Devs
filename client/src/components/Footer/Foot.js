import React from 'react'
import './Foot.css'

import RoundButton from '../UI/RoundButton/RoundButton'
import * as ReactIcon from 'react-icons/io5'
import Cookies from 'universal-cookie';

const Footer = () => {

    const cookies = new Cookies();

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        // position: "absolute",
        // width: "100%",
        // bottom: "1px"
    };

    function handleClick(e) {
        e.preventDefault();
        cookies.set('example', 'Primera Cookie', { path: '/' });
        console.log(cookies.get('example')); // Pacman
        console.log('The link was clicked.');
    }

    function handleClickCancelar(e) {
        e.preventDefault();
        console.log('The link was canceled.');
    }

    const scrollTopHandle = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='FooterContainer'>
            <div className='FooterInfo'>
                <p className='text'>
                    This is a footer made with love and <ReactIcon.IoHeart color='rgb(221, 74, 74)' fontSize={18} /> <br />
                    Designed by Junior web developers for training propouse.
                    This web is currently under construction, please take for good to wait.
                </p>
            </div>
            <div className='SocialMediaContainer'>
                

                <a className='SocialMediaName SocialMediaButton GitHub' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank'>
                    <ReactIcon.IoLogoGithub className='SocialIcon' />  GitHub
                </a>
                <a className='SocialMediaName SocialMediaButton LinkedIn' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank'>
                    <ReactIcon.IoLogoLinkedin className='SocialIcon' />  LinkedIn
                </a>
                <a className='SocialMediaName SocialMediaButton Mail' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank'>
                    <ReactIcon.IoMailSharp className='SocialIcon' />  Mail
                </a>
                <a className='SocialMediaName SocialMediaButton Blog' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank'>
                    <ReactIcon.IoNewspaperSharp className='SocialIcon' />  Blog
                </a>
                

            </div>
            <div className='ScrollTopButton'>
                <RoundButton selectedIcon={<ReactIcon.IoChevronUp />} onScrollTop={scrollTopHandle} />
            </div>

        </div>
    )
}

export default Footer