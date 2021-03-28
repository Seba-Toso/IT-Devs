import React, { useContext, useMemo, memo } from 'react';
import { Context } from '../context/initialState';
import './Css/Porfolio.css';

const Portfolio = () => {

  const [ state ] = useContext( Context );

  const jobsList = useMemo(() => {

      if( !state.length ) return null
      
      return(
              <div>
                  <div className="portfolio">
                      {
                        state.map( project => { 
                          return (
                            <div>
                              <div className='portfolio__item' key={ project.id }> 
                                  <img 
                                      src={ project.image } 
                                      alt="portfolio" 
                                      className="portfolio__image"
                                      />
                                  <div className="portfolio__desc">
                                      <h3 className="portfolio__title"> { project.title } </h3>
                                      <button 
                                          type="button" 
                                          class="btn btn-info btn-lg" 
                                          data-toggle="modal" 
                                          data-target='#portfolio-item-1'
                                          >Detalles
                                      </button>                        
                                  </div>
                              </div>
                              <div id="portfolio-item-1" class="modal fade" role="dialog">
                                  <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <button 
                                            type="button" 
                                            class="close" 
                                            data-dismiss="modal"
                                            >&times;
                                        </button>
                                        <h4 class="modal-title">{ project.title }</h4>
                                      </div>
                                      <div class="modal-body">
                                        <p>{ project.body }</p>
                                        <img 
                                          src={ project.image }
                                          alt="test" 
                                          class="modal-content"
                                        />
                                      </div>
                                      <div class="modal-footer">
                                        <button 
                                            type="button" 
                                            class="btn btn-default" 
                                            data-dismiss="modal"
                                            >Cerrar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          )
                        })                 
                      }
                    </div>
                  <div>            
                </div>
              </div>
              )
  },[ state ])



  return(
          <div>
              <div className='section intro'>
                  <div className='sloganContainer'>
                      <h1 className='sloganText One'>CONOCE</h1>
                      <h1 className='sloganText Two'>NUESTROS</h1>
                      <h1 className='sloganText Three'>PROYECTOS.</h1>
                  </div>
              </div>

              <div>{ jobsList }</div>
          </div>  
  )
    
};

export default memo( Portfolio );


 
  
