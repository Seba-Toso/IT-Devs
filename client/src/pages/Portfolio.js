import React from 'react';
import './Porfolio.css';

const Portfolio = () =>{
  


  return(
        <div>
            <div className='section intro'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>CONOCE</h1>
                    <h1 className='sloganText Two'>NUESTROS</h1>
                    <h1 className='sloganText Three'>PROYECTOS.</h1>
                </div>
            </div>



              <div class="portfolio">
                <div class="portfolio__item">
                     <img src="http://imgfz.com/i/oVrt6KT.jpeg" alt="" class="portfolio__image"/>
                  <div class="portfolio__desc">
                    <h3 class="portfolio__title">Blog</h3>
                    <a href="#portfolio-item-1" class="btn btn-primary" role="button">Más</a>
                </div>
                

              </div>
                <div class="portfolio__item" id="portfolio">
                      <img src="http://imgfz.com/i/o5IHu0b.jpeg" alt="" class="portfolio__image"/>
                  <div class="portfolio__desc">
                    <h3 class="portfolio__title">E-commerce</h3>
                    <a href="#portfolio-item-2"class="btn btn-primary">Más</a>
                  </div>
                </div>
                    <div class="portfolio__item">
                      <img src="http://imgfz.com/i/ojQLO6e.jpeg" alt="" class="portfolio__image"/>
                      <div class="portfolio__desc">
                        <h3 class="portfolio__title">E-commerce</h3>
                        <a href="#portfolio-item-3"class="btn btn-primary">Más</a>
                      </div>
                    </div>
                </div>

                <div class="portfolio-lightbox" id="portfolio-item-1">
                  <div class="portfolio-lightbox__content">
                  <a href="#portfolio" class="close"></a> 
                  <img class="portfolio-lightbox__image" src="http://imgfz.com/i/oVrt6KT.jpeg" alt=""/>
                  <h3 class="portfolio__title">Blog</h3>
                  <p class="portfolio__body">Sitio diseñado con Python y Flask en base de SQL.</p>
                  </div>
                </div> 

                <div class="portfolio-lightbox" id="portfolio-item-2">
                  <div class="portfolio-lightbox__content">
                    <a href="#portfolio" class="close"></a>
                    <img class="portfolio-lightbox__image" src="http://imgfz.com/i/o5IHu0b.jpeg" alt=""/>
                    <h3 class="portfolio__title">E-commerce</h3>
                    <p class="portfolio__body">Web diseñada en Front con Angular y Backend en Node - Express.</p>
                  </div>
                </div> 

                <div class="portfolio-lightbox" id="portfolio-item-3">
                  <div class="portfolio-lightbox__content">
                  <a href="#portfolio" class="close"></a>
                  <img class="portfolio-lightbox__image" src="http://imgfz.com/i/ojQLO6e.jpeg" alt=""/>
                  <h3 class="portfolio__title">E-commerce</h3>
                  <p class="portfolio__body">Web diseñada en Front con React y Backend en Node - Express.</p>
                  </div>
                </div> 
                <div class="portfolio">
                <div class="portfolio__item">
                     <img src="http://imgfz.com/i/oVrt6KT.jpeg" alt="" class="portfolio__image"/>
                  <div class="portfolio__desc">
                    <h3 class="portfolio__title">Blog</h3>
                    <a href="#portfolio-item-1" class="btn btn-primary" role="button">Más</a>
                </div>
                

              </div>
                <div class="portfolio__item" id="portfolio">
                      <img src="http://imgfz.com/i/o5IHu0b.jpeg" alt="" class="portfolio__image"/>
                  <div class="portfolio__desc">
                    <h3 class="portfolio__title">E-commerce</h3>
                    <a href="#portfolio-item-2" class="btn btn-primary">Más</a>
                  </div>
                </div>
                    <div class="portfolio__item">
                      <img src="http://imgfz.com/i/ojQLO6e.jpeg" alt="" class="portfolio__image"/>
                      <div class="portfolio__desc">
                        <h3 class="portfolio__title">E-commerce</h3>
                        <a href="#portfolio-item-3" class="btn btn-primary">Más</a>
                      </div>
                    </div>
                </div>

                <div class="portfolio-lightbox" id="portfolio-item-1">
                  <div class="portfolio-lightbox__content">
                  <a href="#portfolio" class="close"></a> 
                  <img class="portfolio-lightbox__image" src="http://imgfz.com/i/oVrt6KT.jpeg" alt=""/>
                  <h3 class="portfolio__title">Blog</h3>
                  <p class="portfolio__body">Sitio diseñado con Python y Flask en base de SQL.</p>
                  </div>
                </div> 

                <div class="portfolio-lightbox" id="portfolio-item-2">
                  <div class="portfolio-lightbox__content">
                    <a href="#portfolio" class="close"></a>
                    <img class="portfolio-lightbox__image" src="http://imgfz.com/i/o5IHu0b.jpeg" alt=""/>
                    <h3 class="portfolio__title">E-commerce</h3>
                    <p class="portfolio__body">Web diseñada en Front con Angular y Backend en Node - Express.</p>
                  </div>
                </div> 

                <div class="portfolio-lightbox" id="portfolio-item-3">
                  <div class="portfolio-lightbox__content">
                  <a href="#portfolio" class="close"></a>
                  <img class="portfolio-lightbox__image" src="http://imgfz.com/i/ojQLO6e.jpeg" alt=""/>
                  <h3 class="portfolio__title">E-commerce</h3>
                  <p class="portfolio__body">Web diseñada en Front con React y Backend en Node - Express.</p>
                  </div>
                </div> 
          </div>
  )
    
};

export default Portfolio;