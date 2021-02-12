import React from 'react';
import './SignIn.css';
import { GiCoffeeCup } from 'react-icons/gi';
import { Link } from 'react-router-dom';




function SignIn() {
    return (
        <div className='sign__in'>
            <Link to='/' style={{textDecoration:'none'}}>
            <div className='sign__header'>
                    <div className='sign__logo'>
                        <GiCoffeeCup />
                    </div>      
                    <div className='sign__name'> 
                        LexxyCool Tea Stop
                    </div>
                    
            </div> 
            </Link>
            <div className='sign__box'>
                <h1> Login Here </h1>
                <form>
                    <p>Username</p>
                    <input type='text' name='' placeholder='Enter Username'></input>
                    <p>Password</p>
                    <input type='password' name='' placeholder='Enter Password'></input>
                    <input type='submit' name='' value='Login'></input><br/>
                    <a href='#'>Lost your password?</a><br/>
                    <a href='#'>Don't have an account?</a>
                </form>
            </div>
        </div>

    )
}

export default SignIn
