import React from 'react';
import './Tecnologias.css';


const Tecnologias = () =>{
    return(
        <div className="Tools">
            <div className='section'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>WHAT</h1>
                    <h1 className='sloganText Two'>DO WE</h1>
                    <h1 className='sloganText Three'>USE.</h1>
                </div>
            </div>
            <center>
            <ul>
                <li><img src="https://pluspng.com/img-png/logo-javascript-png-javascript-for-ile-y-ld-z-600.png"/></li>
                <li><img src="https://www.technoscore.com/images/services/node-js-icon.png"/></li>
                <li><img src="https://sixsigmatechnosoft.com/img/Technology-Logo/reactjs.png"/></li>
                <li><img src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo.png"/></li>
                <li><img src="https://devtechnosys.com/insights/wp-content/uploads/2019/06/express-js-logo.png"/></li>
            </ul>
            </center>
        </div>
    )
};

export default Tecnologias;