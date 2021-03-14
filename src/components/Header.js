import React from 'react';
import './Header.css';
import { GiCoffeeCup } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';




function Header() {
    

    return (
       
       <IconContext.Provider value={{color: '#fff'}}>

          <div className='header__navbar' id='header'>
             <div className='header-container container'>
                    <div className='header-img' >
                      <GiCoffeeCup className='header__icon' />
                      LexxyCool Tea Stop   
                 </div>
                 <nav id='nav-bar'>
                    <ul className='nav__menu'>

                          <li className='nav__item'>
                                <a href = '#home'> 
                                     <div className ='nav-link'>Home</div>
                                </a>
                          </li>

                          <li className='nav__item'>
                                <a href= '#menu'>
                                      <div className ='nav-link'>Menu</div>
                                </a>    
                          </li>

                          <li className='nav__item'>
                                <a href='#video'>
                                    <div className='nav-link'>Tea Benefits</div>
                                </a>
                          </li>

                          <li className='nav__item'>
                                <a href='#contact'>
                                     <div  className='nav-link'>Contact</div>
                                </a>
                          </li>
                        
                    </ul>
                  </nav>
              </div> 
           </div>
        </IconContext.Provider>                
       
    )
}

export default Header
