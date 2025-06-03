import React from 'react'
import './Header.css'
import { assets } from '../../assets/asset'

const Header = () => {
  return (
    <> {/* for creating multiple div */}
    <div className='head'>
        <div className='head-cover'>
            <img src={assets.gymphoto3} alt=""></img>
        </div>
        <div className="head-content">
            <h1>RESULTS HAPPEN OVER TIME, NOT OVERNIGHT.</h1>
            <p>Work hard, Stay consistent, Get Stronger with us.</p>       
            <button>SHOP NOW!</button>     
        </div>
    </div>

    </>
  )
}

export default Header
