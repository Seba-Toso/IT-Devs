import React, {useEffect, useState} from 'react';
import RoundButton from '../UI/RoundButton/RoundButton';
import * as ReactIcon from 'react-icons/io5';
import './Foot.css';


const Footer = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false); 

    const scrollTopHandle = () => {
        window.scrollTo(0, 0);
    }

    useEffect(()=>{
        if(window.outerWidth <= 425){
            setIsSmallScreen(true)
        }
    },[setIsSmallScreen])

    return (
        <div className='FooterContainer'>
            <div className='FooterInfo'>
                <p className='text'>
                    This is a footer made with love and <ReactIcon.IoHeart className='heart' /> <br />
                    Designed by Junior web developers for training propouse.
                    This web is currently under construction, please take for good to wait.
                </p>
            </div>
            <div className='SocialMediaContainer'>
                

                <a className='SocialMediaName SocialMediaButton GitHub' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoLogoGithub className='SocialIcon' /> {isSmallScreen? null : 'GitHub'}
                </a>
                <a className='SocialMediaName SocialMediaButton LinkedIn' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoLogoLinkedin className='SocialIcon' />  {isSmallScreen? null : 'LinkedIn'}
                </a>
                <a className='SocialMediaName SocialMediaButton Mail' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoMailSharp className='SocialIcon' />  {isSmallScreen? null : 'Mail'}
                </a>
                <a className='SocialMediaName SocialMediaButton Blog' href="https://cristian1534.github.io/Blog-IT-Devs.github.io" target='_blank' rel="noopener noreferrer">
                    <ReactIcon.IoNewspaperSharp className='SocialIcon' />  {isSmallScreen? null : 'Blog'}
                </a>
                

            </div>
            <div className='ScrollTopButton'>
                <RoundButton selectedIcon={<ReactIcon.IoChevronUp />} onScrollTop={scrollTopHandle} />
            </div>

        </div>
    )
}

export default Footer