import React from 'react'
import MenSection from '../Components/Men/MenSection'
import Footer from '../Components/Footer/Footer'
import JoinUs from '../Components/JoinUs/JoinUs'
import Navbar from '../Components/Navbar/Navbar'
const Men = () => {
  return (
    <div className='mt-28'>
      <Navbar/>
        <MenSection />
        <JoinUs />  
      <Footer />
    </div>
  )
}

export default Men