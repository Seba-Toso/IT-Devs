import React from 'react';
import * as ReactIcons from 'react-icons/di'
import './SliderTech.css';

const SliderTech = () => {
    return(
        <center>
        <div className="wrapper">
            <div className="box">
                <div className="single-img img-one">
                    <ReactIcons.DiHtml5 className='icon html5' />
                    <ReactIcons.DiCss3 className='icon css' />
                    <ReactIcons.DiJsBadge className='icon js' />
                </div>
                <div className="single-img img-two">
                    <ReactIcons.DiNodejsSmall className='icon node' />      
                </div>
                <div className="single-img img-three">
                    <ReactIcons.DiMongodb className='icon mongo' />       
                </div>
                <div className="single-img img-four">
                    <ReactIcons.DiReact className='icon react' />    
                </div>
                <div className="single-img img-five">
                    <ReactIcons.DiGithub className='icon github' /> 
                </div>
            </div>
        </div>
    </center>
    )
}

export default SliderTech;
