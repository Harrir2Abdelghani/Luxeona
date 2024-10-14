import React from 'react'
import DressSection from '../Components/Dress/DressSection'
import Footer from '../Components/Footer/Footer'
import JoinUs from '../Components/JoinUs/JoinUs'
import Navbar from '../Components/Navbar/Navbar'
const Dress = () => {
  
  return (
    <div className='mt-28'>
      <Navbar/>
      <DressSection />
      <JoinUs />  
      <Footer />
    </div>
  )
}

export default Dress