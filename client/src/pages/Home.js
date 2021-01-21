import React from 'react';
import Contact from '../components/Contact/Contact'
import RoundButton from '../components/UI/RoundButton/RoundButton'
import Carrousel from '../components/Carrousel/Carrousel'
import * as ReactIcon from 'react-icons/io5'
import './Home.css'


const Home = () =>{
    
    const scrollBottomHandle = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

    return(
        <div>
            <div className='ScrollBottomButton'>
                <RoundButton selectedIcon={<ReactIcon.IoMailUnreadSharp/>} onScrollTop={scrollBottomHandle}/>
            </div>
            <div className='section what'>
                <h1 className='title'>¿QUÉ HACEMOS?</h1>
                <div className='InformationContainer'>
                    <div className='GridSection'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='GridSection'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='GridSection'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et condimentum lacus, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='GridSection'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. </p>
                    </div>
                </div>
            </div>
            <div className='section characteristic'>
                <h1 className='title'>CARACTERÍSTICAS DE NUESTROS PROYECTOS</h1>
                <div className='characteristicsContainer'>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et condimentum lacus, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. </p>
                    </div>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. </p>
                    </div>
                </div>
            </div>
            <Carrousel />
            <div className='section pricing'>
                <h1 className='title'>COTIZÁ TU PROYECTO</h1>
                <div className='characteristicsContainer'>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                    <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et condimentum lacus, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. Maecenas eget justo vel leo cursus aliquet. Aliquam erat volutpat. Sed nec gravida arcu, at elementum velit. Suspendisse malesuada lacus nec mauris dapibus, vitae vehicula nunc efficitur. Aliquam consectetur magna ac felis volutpat, non euismod nunc efficitur. Proin ante nibh, vulputate eu euismod in, imperdiet quis lectus. Quisque ac est in orci tempus mattis vel sit amet dolor. Nulla viverra arcu at porta aliquet. </p>
                    </div>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. </p>
                    </div>
                    <div className='characteristics'>
                        <h2 className='Subtitle'>Titulo Random</h2>
                        <p className='Information'>Lorem ipsum dolor sit amet, vel consequat quam. Pellentesque vel turpis sapien. Curabitur dapibus nec risus at porta. </p>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
};

export default Home;