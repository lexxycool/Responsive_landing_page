import React from 'react';
import { Carousel } from  'react-bootstrap';
import './Slide.css';
import slide0 from '../Image/elevate-oRl7BoX7QCE-unsplash.jpg';
import slide1 from '../Image/kelsey-chance-BB4GbHiU1KY-unsplash.jpg';
import slide2 from '../Image/priscilla-du-preez-H3FEQaGsKBY-unsplash.jpg';
import slide3 from '../Image/bruce-mars-gj6EdlqRrhc-unsplash.jpg';
import slide4 from '../Image/blake-wisz-Qg8G7PSXt4A-unsplash.jpg';




function Slide() {
    return (
        <div className='slide__layout'>
          
           <Carousel>
               <Carousel.Item>

                  <img className='slide__image' src={slide0} alt='teaImage' />
                 
               </Carousel.Item>

                <Carousel.Item>

                    <img className='slide__image' src={slide1} alt='teaImage' />
                    
                </Carousel.Item>

                <Carousel.Item>

                    <img className='slide__image' src={slide2} alt='teaImage' />
                   
                </Carousel.Item>

                <Carousel.Item>

                    <img className='slide__image' src={slide3} alt='teaImage' />
                   
                </Carousel.Item> 

                <Carousel.Item>

                    <img className='slide__image' src={slide4} alt='teaImage' />
                   
                </Carousel.Item>

                
           </Carousel>

      </div>              
      
    )

}

export default Slide