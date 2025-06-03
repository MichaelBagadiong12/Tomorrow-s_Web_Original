import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/asset'
import { BiCartAlt, BiUser } from "react-icons/bi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Orderplacement from '../../pages/Orderplacement/Orderplacement';
import { Link } from 'react-router-dom';
import { UseCart } from '../../pages/Cart/CartFunction';


const Navbar = () => {
    const {setopenCart} = UseCart();
    const [menu,navclick] = useState("Home");
  return (
    <>
      <div className='float-brand'>
        <h1>Gym Warrior</h1>
      </div>

      <div className='navbar'>
        <ul className='nav-menu'>
            {/* Link is used for directing the page towards home page*/}
            <Link to='/home' onClick={()=>navclick("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <Link to='/shop' onClick={()=>navclick("Shop")} className={menu==="Shop"?"active":""}>Shop</Link>
            <Link to='/workouts' onClick={()=>navclick("Workouts")} className={menu==="Workouts"?"active":""}>Workouts</Link>
            <Link to='/contact' onClick={()=>navclick("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</Link>
        </ul>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <div className='nav-right'>
            <div className='search-icon'>
                <a onClick={() => setopenCart(true)}><BiCartAlt size="1.8em" /></a>
                <div className="count-dot"></div>
            </div>
            <div className='user-icon'>
                <Link to='/login'><BiUser size="1.8em" /></Link>
            </div> 
        </div>
      </div>
    </>
  )
}

export default Navbar
