import React from 'react';
import './SliderTech.css';

const SliderTech = () => {
    return(
        <center>
        <div className="wrapper">
            <div className="box">
            <div className="single-img img-one">
                <img src="https://polyakovdmitriy.ru/wp-content/uploads/2019/05/nodejs.png.pagespeed.ce_.9zN9M5IW0F-800x800.png" alt="" />
            </div>
            <div className="single-img img-two">
                <img src="https://devtechnosys.com/insights/wp-content/uploads/2019/06/express-js-logo.png" alt="" />
            </div>
            <div className="single-img img-three">
                <img src="http://getdrawings.com/free-icon/mongodb-icon-62.png" alt="" />
            </div>
            <div className="single-img img-four">
                <img src="https://illuminate.agency/img/seo/react.png" alt="" />
            </div>
            <div className="single-img img-five">
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />
            </div>
            </div>
        </div>
    </center>
    )
}

export default SliderTech;