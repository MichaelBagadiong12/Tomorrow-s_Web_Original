import React from 'react'
import './Workouts.css'
import { assets } from '../../assets/asset'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Workouts = () => {
  return (
    <>
    <div className='workout-container'>
        <div className='workout-header'>
            <h1 className='workout-title'>The Best Exercises for Growing Muscles</h1>

        <div className='nav-and-date'>
            <p class="published-date">Sunday, May 25th 2025</p>

            <div className='workout-nav'>
                <Link to="/workouts">Overview</Link>
                <Link to="/back&biceps">Back & Biceps</Link>
                <Link to="/chest&triceps">Chest & Triceps</Link>
                <Link to="/shoulder&legs">Legs & Shoulders</Link>
            </div>

        </div>
        </div>

        <div className='workout-main'>
            <img src={assets.workout} className='workout-image'></img>

            <div className='workout-socials'>
                <button><TiSocialFacebook size="1.9em"></TiSocialFacebook>Share on Facebook</button>
                <button><TiSocialTwitter size="1.9em"></TiSocialTwitter>Share on Twitter</button>
                <button><TiSocialLinkedin size="1.9em"></TiSocialLinkedin>Share on LinkedIn</button>
            </div>
        </div>

        <div className='workout-anchor'>
            <a href='#often-workouts'>How Often to do Workouts<span>|</span></a>
            <a href="#fwm">Difference between Free Weight & Machine<span>|</span></a>
            <a href="#nutri">Nutrition Advices<span>|</span></a>
            <a href="#split">Workout Plan for Beginners to Gain Muscles<span>|</span></a>
            <a href="#summary-tab">Summary</a>
        </div>
    </div>

    <div className='Workout-content'>
        <p>Gaining muscle, known as muscular hypertrophy, requires some serious strength training. Strength training causes microscopic tears in the muscle fibres, which sounds scary but is actually a prerequisite of growth. As the body repairs these tissues, they get bigger, and when this is repeated again and again this results in visibly bigger muscles.</p>
        <p>While all strength training will help to increase strength, there are certain ways to train that will maximise muscular hypertrophy. Read on to learn how to shape a strengthening workout plan that will help you to gain muscle, as well as some of the different approaches you could take. You can also click here to jump straight to the example workout plan for gaining muscle.</p>

        <div className="often-workouts" id='often-workouts'>
            <h1 className='workout-first-title'>How often and how much should you work out to gain muscle?</h1>
            <p>There are a few factors to consider when designing a workout plan aimed at building muscle: frequency, volume, weight, and progressive overload.</p>
            <h2>Frequency of Workouts</h2>
            <p>Most scientific studies on the matter conclude that a muscle needs to be worked at least two or three times a week in order to see it change and grow. This means you should aim to gym at least two times a week, up to a maximum of six times. It may be tempting to gym every day, but rest days are actually crucial when it comes to build muscle.</p>
            <h2>Volume</h2>
            <p>The ideal workout volume (the number of reps and sets you do) changes depending on whether your goal is strength, endurance, or hypertrophy. For muscular hypertrophy, 3-4 sets of 8-12 reps per exercise is considered the best approach. </p>
            <h2>Weight</h2>
            <p>Your workouts need to challenge the muscles enough to create change, which means choosing weights that are heavy enough that the last couple of repetitions are challenging but not impossible, but you would be unable to complete another rep with good form (or at all).</p>
            <h2>Progressive Overload</h2>
            <p>Progressive overload is one of the most important principles of strength training. Our bodies are great at adapting to stimulus, so if we repeatedly do the same number of reps and sets with the same weight, we will plateau. Progressive overload involves increasing the difficulty of an exercise over time, either by increasing the weight, reps, depth, or intensity (by slowing down the tempo, for example).</p>
            <p>For hypertrophy, what this might look like is doing 10kg for 3 sets of 8 reps one week, 10 reps, the week after, and 12 reps the week after, and then increasing to a weight you can only manage for 8 reps and repeating the process.</p>

        </div>

        <div className='free-weight-and-machine' id='fwm'>
            <h1 className='workout-first-title'>Are free weights or machines better for gaining muscle?</h1>
            <p>Free weights and resistance machines are both great tools for building muscle, and while neither one is better nor worse, there are differences which can make one more suitable than the other.</p>
            <p>Resistance machines follow a fixed movement path which make them ideal for those who have just started a muscle-building program or are new to the gym. The fixed path makes it easier to perform an exercise as it doesn't rely on technical knowledge of the form, and this helps to ensure the right muscles are engaged while minimising risk of injury. It can also allow heavier weights to be lifted more safely, as there is no risk of dropping the weight. While good for beginners, these machines are also good for advanced lifters who want to really isolate a muscle and perfect their form.</p>
            <p>If you're new to working out, or are struggling to engage the right muscles during exercises with free weights, resistance machines can be a great way to build strength and learn the correct form.   Once you're comfortable with the exercise, you can move to free weights and use dumbbells or barbells to replicate the movement. For example, once you've mastered the Seated Chest Press, you can easily perform Lying Dumbbell Presses.</p>
            <p>If you're more experienced, you may prefer to use free weights or a mix of both. If you’re struggling with form, certain pieces of equipment, like a weight training belt, might help.</p>
        </div>

        <div className='nutrition' id='nutri'>
            <h1 className='workout-first-title'>How important is nutrition for gaining muscle?</h1>
            <p>It's possible to build muscle without paying attention to nutrition, but it's much more efficient to do so when you are properly fuelling muscle growth with your diet.</p>
            <p>If you are happy with your body fat and want to focus on building muscle, aim to eat in a slight calorie surplus (around 5-10% above your maintenance calories) and aim to get at least 1.4 grams of protein per kg of bodyweight, ideally through nutritious protein sources like lean meats, eggs, legumes, and dairy.</p>
            <p>If you have a lot of excess fat stored and are trying to lose weight, you'll be pleased to know it's still possible to build muscle while in a calorie deficit. Protein is even more important when it comes to preserving and building muscle when dieting, as it helps to prevent your body from burning muscle instead of fat.</p>
            <p>While food is helpful in recovering from workouts and building muscle, they also play a part in fuelling your workouts. Eating carbohydrates before your workout can boost your energy and ensure you can really deliver your best each workout.</p>
        </div>

        <div className='split-workouts' id='split'>
            <h1 className='workout-first-title'>Example Gym Workout Routine to Build Muscle</h1>
            <h2>Three top tips before you get started on your bulking workout plan:</h2>
            <div className='number-label'>
                <span>1</span>
                <p>In general, it’s best to prioritise compound movements and supplement with isolation exercises. This means starting with exercises that work more than one muscle group (like a deadlift) and then finishing up with isolation exercises that focus on more specific muscles (such as bicep curls).</p>
            </div>

            <div className='number-label'>
                <span>2</span>
                <p>Always begin with a dynamic warm-up and finish with some static stretches to cool down. This step is vital to maintain mobility and reduce your risk of injury.</p>
            </div>

            <div className='number-label'>
                <span>3</span>
                <p>Make sure to include regular rest days. You'll want to wait at least a day between working the same muscle group twice to give your muscles time to repair and grow between sessions, but schedule at least one full rest day a week.</p>
            </div>

            <p>Here, I've pulled together an example gym plan for muscle gain, using the popular push/pull/legs split and aiming for six workouts a week. I've included links for each exercise, so you can find out how to perform each with good form.</p>
            <p>Remember, this is just an example - you can try different exercises and splits to find your own best workout plan for muscle gain.</p>
            <div className='push-pull-leg'>
                <img src={assets.ppl} className='ppl-image'></img>
            </div>

        <div className='summary' id='summary-tab'>
            <h1 className='workout-first-title'>Summary</h1>
            <p>Building muscle is hard, but simple. Work each muscle group at least twice a week, taking your exercises close to failure. Make sure you are getting enough rest to allow the muscles to recover and rebuild, and eat a diet that is rich in protein, healthy fats, and complex carbohydrate. While it can take months to build noticeable mass, you should start to see and feel a difference much quicker than that.</p>
            <p>If you want to gain more muscle while working out, you can find and buy supplements here in our Gym Warrior website that delivers all around UAE.</p>
            <p>What are you waiting for?<Link to="/shop" className='workout-buy-now'>Buy Now!</Link></p>
        </div>

        </div>

    </div>

    </>
  )
}

export default Workouts
