import React from 'react'
import { Link } from 'react-router-dom'
import './Exercises.css'
import { assets } from '../../assets/asset'


const ChestTriceps = () => {
  return (
    <>
    <div className='workout-container1'>
        <div className='workout-header1'>
            <h1 className='workout-title1'>The Best Exercises for Growing Chest & Triceps</h1>

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
        <h1 className='exercise-title'>Chest Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Incline Dumbbell Bench Press</h1>
        </div>


        <div className='exercise-content'>
            <p>The Incline Dumbbell Bench Press is a strength training exercise that targets the upper portion of the pectoral muscles (chest), as well as the shoulders and triceps. By adjusting the bench to an inclined position (typically 30–45 degrees), you shift the emphasis from the mid-chest (as in a flat bench press) to the clavicular head of the pectoralis major.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/IP4oeKh1Sd4"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>

        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Cable Crossover</h1>
        </div>
        <div className='exercise-content'>
            <p>The Cable Crossover is an isolation exercise primarily targeting the pectoralis major, especially the inner and lower chest fibers. Performed using a cable machine, this movement allows for constant tension throughout the entire range of motion, which makes it highly effective for chest development and definition.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/8Um35Es-ROE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Decline Chest Press</h1>
        </div>
        <div className='exercise-content'>
            <p>The Decline Chest Press is a compound pressing movement that primarily targets the lower portion of the pectoralis major. Performed using either a barbell, dumbbells, or machine, it emphasizes the lower chest muscles more than flat or incline presses due to the body's angle.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/Pf1nDoqx_1A"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>4</span>
            <h1>Chest Fly</h1>
        </div>
        <div className='exercise-content'>
            <p>The Chest Fly is an isolation exercise that targets the pectoralis major by stretching and contracting the chest muscles through a wide arc of motion. It’s commonly performed using dumbbells on a flat/incline bench or with cables on a cable crossover machine.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/Z57CtFmRMxA"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>


        <h1 className='exercise-title1'>Tricep Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Overhead Tricep Extension</h1>
        </div>
        <div className='exercise-content'>
            <p>The Overhead Tricep Extension is an isolation exercise that targets the triceps brachii, particularly the long head, which is best activated when the arms are positioned overhead. This movement helps build size and definition in the back of the arms.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/1657VVZi0Ms"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Tricep Pushdown</h1>
        </div>
        <div className='exercise-content'>
            <p>The Tricep Pushdown is a popular cable machine exercise that isolates and strengthens the triceps, especially the lateral and medial heads. It's a staple in most arm workouts for building size and definition in the back of the upper arms.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/-zLyUAo1gMw"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Tricep Dips</h1>
        </div>
        <div className='exercise-content'>
            <p>Tricep Dips are a powerful bodyweight exercise that target the triceps, with secondary engagement of the shoulders and chest. They can be performed on parallel bars or using a bench/chair.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/0r3MFpM6Zno"
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


export default ChestTriceps
