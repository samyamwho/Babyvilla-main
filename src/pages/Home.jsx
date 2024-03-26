import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider'
import Aboutus from '../components/About-us/Aboutus'

import Events from '../components/Events/Events'
import Facilities from '../components/Facilities/Facilities'
import Findus from '../components/Findus/Findus'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Navbar /> {/* Render the Navbar component */}
    <div className="content-container"> {/* Container for Slider and other content */}
      <Slider /> {/* Render the Slider component */}
      {/* Add other content below the Slider */}
    </div>
    <div>
        <Aboutus/>
    </div>
    <div>
      <Events/>
       
      
    </div>
    <div>
      <Facilities/>
    </div>
    <div><Findus/></div >
    <div> <Footer/></div>
  </>
  )
}

export default Home
