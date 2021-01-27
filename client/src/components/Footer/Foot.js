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
                <div className='SocialMediaButton GitHub'>
                    <ReactIcon.IoLogoGithub className='SocialIcon' />
                    <p className='SocialMediaName'>Github</p>
                </div>
                <div className='SocialMediaButton LinkedIn'>
                    <ReactIcon.IoLogoLinkedin className='SocialIcon' />
                    <p className='SocialMediaName'>LinkedIn</p>
                </div>
                <div className='SocialMediaButton Mail'>
                    <ReactIcon.IoMailSharp className='SocialIcon' />
                    <p className='SocialMediaName'><a href="/">Mail</a></p>
                </div>
                <div className='SocialMediaButton Blog'>
                    <ReactIcon.IoNewspaperSharp className='SocialIcon' />
<<<<<<< HEAD
=======

>>>>>>> efb56c2f70188725f382715a6176a7e1098f21ee
                    <p className='SocialMediaName'><a href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' >Blog</a></p>
                </div>

            </div>

            <h2 style={{color: "red"}}>Cookies</h2>
                    <div className='SocialMediaButton GitHub'>
                        <a href="#" onClick={handleClick}> Aceptar </a>
                    </div>

                    <div className='SocialMediaButton GitHub'>
                        <a href="#" onClick={handleClickCancelar}> Cancelar </a>
                    </div>

            <div className='ScrollTopButton'>
                <RoundButton selectedIcon={<ReactIcon.IoChevronUp />} onScrollTop={scrollTopHandle} />
            </div>

        </div>
    )
}

export default Footer