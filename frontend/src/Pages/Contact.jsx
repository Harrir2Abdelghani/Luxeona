import React from 'react'
import Footer from '../Components/Footer/Footer'
import JoinUs from '../Components/JoinUs/JoinUs'
import ContactSection from '../Components/Contact/ContactSection'
import Navbar from '../Components/Navbar/Navbar'
const Contact = () => {
  return (
    <div className='mt-28'>
      <Navbar/>
      <ContactSection />
      <JoinUs />  
      <Footer />
    </div>
  )
}

export default Contact