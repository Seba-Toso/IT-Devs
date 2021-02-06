import React from 'react';
import './NotFound.css';


const NotFound = () =>{
    return(
        <div className="NotFound">
            <div className='sloganContainer Error'>
                  <h1 className='sloganText One'>Error</h1>
                  <h1 className='sloganText Two'>404</h1>
                  <h1 className='sloganText Three'>Sorry</h1>
            </div>
            <img src="assets/404-error.png" alt='404 page error' />
        </div>
    )
};

export default NotFound;


