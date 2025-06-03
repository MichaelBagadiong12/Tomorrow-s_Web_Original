import React from 'react'
import { assets } from '../../assets/asset'
import './Content.css'

const Content = () => {
  return (
    <>
    <div className='content'>
        <div className='content-img'>
            <img src={assets.mikesama1} alt=""></img>
        </div>
        <div className='content-text'>
            <h1>The Creator of Gym Warrior</h1>
            <p>Hi, I’m Michael Renier C. Bagadiong, and I created Gym Warrior for individuals who are passionate about building a strong and healthy body. This website is designed to guide and inspire anyone looking to improve their fitness through proper workouts, balanced nutrition, and the right use of supplements like protein powder. Whether you're a beginner or already on your fitness journey, Gym Warrior is here to support your goals and help you become the best version of yourself — one rep, one meal, and one step at a time.</p>
        </div>
    </div>

    </>
  )
}

export default Content
