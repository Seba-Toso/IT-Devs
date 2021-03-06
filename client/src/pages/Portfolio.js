import React, { useContext, useMemo, memo, useState } from 'react';
import { Context } from '../context/initialState';
import * as ReactIcons from 'react-icons/cg'
import './Css/Porfolio.css';


const Portfolio = () => {

  const [ state ] = useContext( Context );
  const [projectShown, setProjectShown] = useState(state[0])

  function handleClick(id){
    setProjectShown(state.find(project => project.id === id))
  }

  const jobsList = useMemo(() => {

      return !state.length ?  null
      :
      (  
        <div className='ProjectsContainer'>
            <small className='helpText projectMessage'> Deslizá para ver más proyectos</small>
            {
              state.map( project => { 
                return (
                    <div className='portfolio__item' key={ project.id }> 
                        <img 
                            src={ project.image } 
                            alt="portfolio" 
                            className="portfolio__image"
                            />
                        <div className="portfolio__desc">
                            <h3 className="portfolio__title"> { project.title } </h3>
                            <button 
                                onClick={()=>handleClick(project.id)}
                                type="button" 
                                className="btn btn-info btn-sm detailsBtn" 
                                >Detalles
                            </button>                        
                        </div>
                    </div>  
                )
              })                 
            }
          </div> 
      )
  },[ state ])


  const displayedProject = useMemo(() => {
    return projectShown === null ?  null
    : 
    (
        <React.Fragment>
          <div className='ImageDisplay'>
            <img src={projectShown.image} alt='Project screenshot' className='ProjectImage'/>
          </div>
          <div className='DescriptionDisplay'>
            <h4>{projectShown.title}</h4>
            <p>{projectShown.body}</p>
          </div>
        </React.Fragment>
    )
  },[ projectShown ])



  return(
          <div>
              <div className='section intro'>
                  <div className='sloganContainer'>
                      <h1 className='sloganText One'>CONOCÉ</h1>
                      <h1 className='sloganText Two'>NUESTROS</h1>
                      <h1 className='sloganText Three'>PROYECTOS.</h1>
                  </div>
              </div>

              <div className="portfolio">
                <div className='scrollIcon'>
                  <span/>
                  <ReactIcons.CgScrollV className='scrollIndicator'/>
                  <span/>
                </div>
                { jobsList }
                <div className='ProjectDisplay'>
                { displayedProject }
                </div>
              </div>
          </div>  
  )
    
};

export default memo( Portfolio );


 
  
