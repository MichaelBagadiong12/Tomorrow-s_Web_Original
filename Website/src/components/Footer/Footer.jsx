import React from 'react'
import './Footer.css'
import { assets } from '../../assets/asset'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";



const Footer = () => {
  return (
    <>
    <div className='Footer-page'>
      <div className="logo-section">
        <div className='logo-brand'>
          <img src={assets.logo} />
          <div className='logo-content'>
            <h1>Gym Warrior</h1>
          </div>
        </div>
        <p className='text'>Be better, Be Smarter, Be Stronger.</p>
      </div>

      <div className='Footer-content'>
        <h1>NAVIGATION BAR</h1>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Workouts</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='Footer-content'>
        <h1>HELP</h1>
        <ul>
          <li>FAQS</li>
          <li>Return Policy</li>
          <li>Orders</li>
          <li>Whatsapp</li>
        </ul>
      </div>

      <div className='Footer-content'>
        <h1>CONTACT US</h1>
        <ul>
          <li>
            <div className="contact-icon">
              <MdOutlineEmail size="1.6em" />
              <span>michaelbagadiong94@gmail.com</span>
            </div>
          </li>

          <li>
            <div className="contact-icon">
              <MdOutlineSmartphone size="1.6em" />
              <span>+971 50 839 3891</span>
            </div>
          </li>
        </ul>

      </div>
    </div>
    
    <div className='Footer-lowest'>
      <div className='credits'>
        <p>© 2025 Gym Warrior, UAE.</p>
      </div>
      <div className='socials'>
        <a href=""><TiSocialFacebook size="1.8em"></TiSocialFacebook></a>
        <a href=""><TiSocialTwitter size="1.8em"></TiSocialTwitter></a>
        <a href=""><TiSocialLinkedin size="1.8em"></TiSocialLinkedin></a>
      </div>
    </div>
    


    </>

  )
}

export default Footer

{/*        <ul>
          <li><TiSocialTwitter size="1.8em"></TiSocialTwitter></li>
          <li><TiSocialYoutube></TiSocialYoutube></li>
          <li><TiSocialFacebook></TiSocialFacebook></li>
          <li><TiSocialLinkedin></TiSocialLinkedin></li>
        </ul> */}