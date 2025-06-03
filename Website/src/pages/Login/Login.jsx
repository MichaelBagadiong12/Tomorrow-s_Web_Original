import React from 'react'
import './Login.css'
import { assets } from '../../assets/asset'
import { Link } from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import { useState } from 'react';

const Login = () => {
    {/*showSignUpForm holds the true or false function */}
    const [showSignUpForm, SetForms] = useState(false) 
    {/*if i set the useState to true, it will show the sign up page first because the ! reverse it into false again and false means it will not show that specific page 
    the other one that doesn't have false condition will show*/}


  return (
    <>
    <div className='back-button'>
        <Link to='/home'><IoReturnUpBack size="2.2em"></IoReturnUpBack></Link>
        <span>Back</span>
    </div>

    {/*Since we set the useState as false, the showSignUpForm holds false as a condition */}
    {/*Additionally the ! makes the value of showSignUpForm into true that is the reason why login-page shows first */}
    {!showSignUpForm ? (
        <div className='login-container'>
            <div className='login-page'>
                <div className='logo-login'>
                    <Link to='/home'><img src={assets.logo} alt=""/></Link>
                </div>
                <div className='logo-name'>
                    <h1>Gym Warrior LOGIN</h1>
                    <p>Get Yourself Better & Stronger. Engage with us!</p>
                </div>
            </div>

            <form>
                <div className='email-box'>
                    <input type="email" placeholder='Username' required></input>
                </div>

                <div className='password-box'>
                    <input type="password" placeholder="Password" required></input>
                </div>

                <div className='forgot-password'>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type='submit'>LOG IN</button>
            </form>

            <div className='create-account'>
                {/*Setting the SetForms into true directs you to the Sign up forms link*/}
                <p>Don't have an account yet?<a onClick={() => SetForms(true)}>Create Account</a></p>
                {/*additional fact: the sign up page is set as true, so SetForms(true) directs you in sign up page*/}
            </div>
        </div>
    ) : (
        <div className='login-container'>
            <div className='login-page'>
                <div className='logo-login'>
                    <Link to='/home'><img src={assets.logo} alt=""/></Link>
                </div>
                <div className='logo-name'>
                    <h1>Gym Warrior LOGIN</h1>
                    <p>Get Yourself Better & Stronger. Engage with us!</p>
                </div>
            </div>

            <form>
                <div className='tel-box'>
                <input type="tel" placeholder='Phone Number' required></input>
                </div>

                <div className='fullname-box'>
                <input type="text" placeholder='Full Name' required></input>
                </div>

                <div className='email-box'>
                    <input type="email" placeholder='Username' required></input>
                </div>

                <div className='password-box'>
                    <input type="password" placeholder="Password" required></input>
                </div>

                <button type='submit' className='login-button'>LOG IN</button>
            </form>

            <div className='create-account'>
                {/* Directs you to the login forms, setting the SetForms to false, commands the code to show logforms*/}
                {/*additional fact: even though the ! makes log in page as true, it is still considered as false, so
                when you click the Login, it returns you to login page which is set as false */}
                <p>Already have an account?<a onClick={() => SetForms(false)}>Login</a></p>
            </div>
        </div>
    )}
    </>
  )
}

export default Login
