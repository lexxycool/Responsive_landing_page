import React from 'react';
import './Header.css';
import { GiCoffeeCup } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';




function Header() {
    

    return (
       
       <IconContext.Provider value={{color: '#fff'}}>

          <div className='header__navbar'>
             <div className='header-container container'>
                    <div className='header__logo' >
                      <GiCoffeeCup className='header__icon' />
                      LexxyCool Tea Stop   
                 </div>
                 
                 <ul className='nav__menu'>

                      <li className='nav__item'>
                            <div className='nav__link'>Home</div>
                      </li>

                      <li className='nav__item'>
                            <div className='nav__link'>Menu</div>
                      </li>

                      <li className='nav__item'>
                            <div  className='nav__link'>Contact</div>
                      </li>
                      
                  </ul>
              </div> 
           </div>
        </IconContext.Provider>                
       
    )
}

export default Header
