import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import { useLocation } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import FirstScreen from './components/FirstScreen/FirstScreen';
import Workouts from './pages/Workouts/Workouts';
import BackBiceps from './pages/Workouts/BackBiceps';
import Shop from './pages/Shop/Shop';
import Orderplacement from './pages/Orderplacement/Orderplacement';
import ChestTriceps from './pages/Workouts/ChestTriceps';
import ShoulderLegs from './pages/Workouts/ShoulderLegs';

const App = () => {

  const loc = useLocation(); {/*Main function used for the hiding the navbar and footer */}

  const hideLayoutOnPaths = ['/login', '/', '/orderplacement']; 

  const hidePages = hideLayoutOnPaths.includes(loc.pathname);

  return (
    <div className='app'>

      {!hidePages && <Navbar/>} {/* it hides the pages within the login page*/}
      <Cart></Cart> {/*Cart is outside the routes, so the cart can be activated any pages you're at, it doesnt need to go into other links for it to open */}
      <Routes>
        < Route path='/' element={<FirstScreen/>} />
        < Route path='/home' element={<Home/>} />
        < Route path='/shop' element={<Shop/>} />
        < Route path='/addtocart' element={<Cart/>} />  
        < Route path='/login' element={<Login/>} />
        < Route path='/contact' element={<Contact/>} />
        < Route path='/workouts' element={<Workouts/>} />
        < Route path='/back&biceps' element={<BackBiceps/>} />
        < Route path='/orderplacement' element={<Orderplacement/>} />
        < Route path='/chest&triceps' element={<ChestTriceps/>} />
        < Route path="/shoulder&legs" element={<ShoulderLegs/>} />
      </Routes>
      {!hidePages && <Footer/>}
    </div>
  )
}

export default App
