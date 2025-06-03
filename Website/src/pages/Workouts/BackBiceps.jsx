import React from 'react'
import { Link } from 'react-router-dom'
import './Exercises.css'
import { assets } from '../../assets/asset'


const BackBiceps = () => {
  return (
    <>
    <div className='workout-container1'>
        <div className='workout-header1'>
            <h1 className='workout-title1'>The Best Exercises for Growing Back & Biceps</h1>

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
        <h1 className='exercise-title'>Back Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Lat Pulldown</h1>
        </div>


        <div className='exercise-content'>
            <p>The lat pulldown is a strength training exercise designed to target the latissimus dorsi — the broad muscles of the back that give the "V-taper" appearance. It mimics the movement of a pull-up but allows you to adjust the resistance, making it great for beginners and advanced lifters alike.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/43hWj8mfYGY"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>

        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Seated Cable Rows</h1>
        </div>
        <div className='exercise-content'>
            <p>The seated cable row is a compound exercise that targets the muscles in the middle of your back, especially the rhomboids, trapezius, and latissimus dorsi. It also engages the biceps and forearms as secondary muscles. This exercise helps improve posture, back strength, and overall pulling power.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/7BkgqzC6WsM"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Deadlift</h1>
        </div>
        <div className='exercise-content'>
            <p>The deadlift is one of the most effective compound exercises, targeting multiple major muscle groups at once. It primarily strengthens the posterior chain — including the glutes, hamstrings, lower back, and traps — while also working the core, forearms, and upper back. It's a fundamental movement for building raw strength, stability, and muscle mass.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/r4MzxtBKyNE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>4</span>
            <h1>Bent Over Barbell Row</h1>
        </div>
        <div className='exercise-content'>
            <p>The bent-over barbell row is a classic compound exercise that primarily targets the upper and middle back, while also engaging the lats, rhomboids, rear deltoids, and biceps. It's an excellent movement for building a thick, strong back and improving posture and pulling strength.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/FWJR5Ve8bnQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>5</span>
            <h1>Pull Ups</h1>
        </div>
        <div className='exercise-content'>
            <p>Pull-ups are a powerful bodyweight exercise that primarily target the latissimus dorsi (lats), along with the biceps, trapezius, and core. They are a true test of upper-body strength and one of the best movements for building a wide, strong back. Mastering pull-ups can significantly improve your posture, pulling power, and overall athleticism.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/rmdn5X_KLkY"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <h1 className='exercise-title1'>Bicep Exercises</h1>
        <div className='number-label1'>
            <span>1</span>
            <h1>Preacher Curls</h1>
        </div>
        <div className='exercise-content'>
            <p>The preacher curl is an isolation exercise that focuses on building the biceps, particularly the biceps brachii. Using a preacher bench prevents body movement, allowing for strict form and maximum muscle engagement. It’s great for developing the peak of the biceps and improving arm shape.</p>
        </div>
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/3mtXqrkbEfI"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>2</span>
            <h1>Cable Curl</h1>
        </div>
        <div className='exercise-content'>
            <p>Cable curls are an isolation exercise that targets the biceps brachii, using constant resistance provided by a cable machine. Unlike free weights, the cable provides continuous tension throughout the movement, which enhances muscle activation and control. Cable curls are great for improving arm shape, strength, and definition.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/NFzTWp2qpiE"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>3</span>
            <h1>Dumbbell Curl</h1>
        </div>
        <div className='exercise-content'>
            <p>The dumbbell curl is a classic isolation exercise that targets the biceps brachii, helping to build size, strength, and shape in the upper arms. It’s a versatile movement that allows for a greater range of motion than barbell curls and helps address muscle imbalances by working each arm independently.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/XE_pHwbst04"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>4</span>
            <h1>Hammer Curl</h1>
        </div>
        <div className='exercise-content'>
            <p>Hammer curls are a biceps-focused isolation exercise that emphasize the brachialis (a muscle beneath the biceps) and brachioradialis (in the forearm), helping to build thicker arms and improve grip strength. The neutral grip (palms facing each other) used in hammer curls puts less stress on the wrists, making it a joint-friendly variation of the standard dumbbell curl.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/BRVDS6HVR9Q"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                allowFullScreen
            ></iframe>    
        </div>

        <div className='number-label2'>
            <span>5</span>
            <h1>Incline Dumbbell Curl</h1>
        </div>
        <div className='exercise-content'>
            <p>The incline dumbbell curl is a powerful isolation exercise that targets the long head of the biceps, helping create that peaked, full-arm appearance. Performing curls on an incline bench puts the biceps in a stretched position throughout the movement, increasing time under tension and enhancing muscle growth.</p>
        </div>
        
        <div className='exercise-tutorial'>
            <iframe
                src="https://www.youtube.com/embed/HhHHBj3qTJ4"
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

export default BackBiceps
