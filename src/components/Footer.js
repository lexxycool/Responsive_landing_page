import React from 'react';
import './Footer.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { GrMailOption } from 'react-icons/gr';


function Footer() {
    return (
        <div className='footer'>

            <div className='footer__header'>
                <h3>TESTIMONIALS</h3>
            </div>
          
           <div className='container__quote'>
               <div className='footer__quote'>
                    <FaQuoteLeft />
                </div>  
               
               <div className='footer__quote'>
                    <FaQuoteLeft />
               </div>
                      
               <div className='footer__quote'>
                    <FaQuoteLeft />
               </div>           
               
           </div>
           <div className='footer__testimonials'>
               <div className='text__testimonials'>
                    Superb customer service, fabulous tea.
                    They are the  epitome of what a tea company should be.
                    <p></p>
                    - Luis 0. 
                    July 21, 2020.
               </div>
                <div className='text__testimonials'>
                    Am always pleased by the promptness of my order
                    and the speedy order fulfillment. And the tea are 
                    awesome too!!!
                    <p></p>
                    - Christy M.
                        May 7, 2020
               </div>
                <div className='text__testimonials'>
                    I love the delicious quality tea, and their customer service 
                    has always been incredibly prompt and helpful in answering 
                    any questions. I love that they truly stand by their mission.
                    <p></p>
                    - Mike T.
                        October, 2020.
               </div>

           </div>

            <form className='form' onSubmit='https://www.freecodecamp.com/email-submit'>
               <input
                    type='email'
                    id= 'email'
                    placeholder= 'your email address...'  
                    formNoValidate='false'       
               />
               <p></p>
               <button type='submit' id='submit' value='submit'>Sign Up</button>
               
            </form>

            <div className="contact" id='contact'>

                <div className='contact__info'>
                    About Us
                    <p></p>
                    <span>Read Our Blogs</span>
                    <br></br>
                    <span>Press Releases</span>
                </div>

               <div className='contact__info'> 
                    Customer Care
                    <p></p>
                    <span>E-mail or Call 832.231.5534</span>
                    <br></br>
                    <span>Shipping & Returns</span>
                </div>

                <div className='contact__info'>
                    About Tea
                    <p></p>
                    <span>Health Benefits</span>
                    <br></br>
                    <span>Tea v Coffee</span>
                </div>

                <div className='contact__info'>
                    Visit Us Today
                    <p></p>
                    <span>LexxyCool Tea Stop</span>
                    <br></br>
                    <span>2305 Loop 250
                        Midland, Tx
                    </span>

                </div> 

            </div>

            <div className='footer__logo'>

                    <div className='footer__icon'> 
                      <ImFacebook2 />
                    </div>

                     <div className='footer__icon'>
                        <ImTwitter />
                     </div >

                    <div className='footer__icon'>
                       <SiInstagram />
                    </div>

                    <div className='footer__icon'>
                      <GrMailOption />
                    </div>
            </div>
   
            <div className='footer__copyright'>
               &copy; 2020,LexxyCool Tea Stop
            </div>

        </div>
    )
}

export default Footer
