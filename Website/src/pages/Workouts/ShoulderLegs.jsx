import React from 'react'
import './Workouts.css'
import { assets } from '../../assets/asset'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from 'react-router-dom';

const ShoulderLegs = () => {
  return (
    <>
    <div className='workout-container1'>
        <div className='workout-header1'>
            <h1 className='workout-title1'>The Best Exercises for Growing Shoulder and Legs</h1>

        <div className='nav-and-date1'>
            <p class="published-date1">Sunday, May 25th 2025</p>

            <div className='workout-nav1'>
                <Link to="/workouts">Overview</Link>
                <Link to="/back&biceps">Back & Biceps</Link>
                <Link to="/chest&triceps">Chest & Triceps</Link>
                <Link to="/shoulder&legs">Legs & Shoulders</Link>
            </div>
        </div>
        </div>
    </div>

<div className='wokrout-section'>
    <div className='floating-ads'>
        <img src={assets.proteinpow}></img>
        <Link to="/workouts"><img className="workout-plan" src={assets.workoutplan}></img></Link>
    </div>


    <div className='exercises'>
        <h1 className='exercise-title'>Shoulder Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Side Lateral Raise</h1>
        </div>


        <div className='exercise-content'>
            <p>The Side Lateral Raise is a classic isolation exercise that focuses on building width and shape in the shoulders, particularly the lateral (middle) head of the deltoid. It is a staple in hypertrophy and aesthetic training programs.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/Gmi_DCnJ93c"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>

        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Rear Delt Fly Machine</h1>
        </div>
        <div className='exercise-content'>
            <p>The Rear Delt Fly Machine, often performed using the reverse setting of a pec deck machine, is a controlled and safe way to isolate and strengthen the rear delts. This machine-based movement minimizes momentum and maximizes tension on the target muscles.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/6yMdhi2DVao"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Dumbbell Front Raise</h1>
        </div>
        <div className='exercise-content'>
            <p>The Dumbbell Front Raise is a shoulder isolation exercise that primarily targets the anterior deltoid—the front portion of the shoulder. It's commonly used to enhance shoulder definition and strength, especially for movements like pressing or lifting objects overhead.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/sOcYlBI85hc"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>


        <h1 className='exercise-title1'>Leg Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Barbell Squat</h1>
        </div>
        <div className='exercise-content'>
            <p>The Barbell Back Squat is a full-body, compound exercise that primarily targets the lower body, particularly the quadriceps, glutes, and hamstrings. It also engages the core and back muscles for stability and support. Considered a cornerstone of strength and athletic training, it builds raw strength, power, and functional movement capacity.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/aOzrA4FgnM0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Walking Lunges</h1>
        </div>
        <div className='exercise-content'>
            <p>The Walking Lunge is a functional lower-body exercise that targets the quads, glutes, and hamstrings, while also improving balance, hip mobility, and core stability. Unlike static lunges, walking lunges involve forward motion, making them more dynamic and requiring greater coordination.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/Pbmj6xPo-Hw"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Leg Press</h1>
        </div>
        <div className='exercise-content'>
            <p>The Leg Press is a compound exercise performed on a leg press machine that allows you to push weight with your legs in a controlled, seated or reclined position. It’s especially useful for building lower body muscle mass without stressing the lower back or requiring balance like free-weight squats.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/q4W4_VJbKW0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>
</div>
        <div className='hidden' style={{visibility: "hidden"}}>
            <p>.</p>
        </div>

    </div>
    </>
  )
}

export default ShoulderLegs
