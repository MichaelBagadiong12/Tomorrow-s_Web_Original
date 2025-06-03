import React from 'react'
import './FirstScreen.css'
import { assets } from '../../assets/asset'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from 'react-router-dom';



const FirstScreen = () => {
  return (
    <>
    <div className='container'>
      <video className='gym-clip' src={assets.gymvid} autoPlay loop muted playsInline>
      </video>

      <div className='nav-menu1'>
        <img className='spartan' src={assets.logo}></img>
        <h1>Gym Warrior</h1>
        <Link to='/home'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/login'>Login</Link>
      </div>

      <div className='social-icons1'>
        <a><span><TiSocialFacebook size="1.9em"></TiSocialFacebook></span></a>
        <a><span><TiSocialTwitter size="1.9em"></TiSocialTwitter></span></a>
        <a><span><TiSocialLinkedin size="1.9em"></TiSocialLinkedin></span></a>
      </div>
    </div>

    </>
  )
}

export default FirstScreen
