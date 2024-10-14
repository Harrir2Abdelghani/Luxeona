import React from 'react'
import Hero from '../Components/Hero/Hero'
import PopularWomen from '../Components/Popular/Popular-women'
import data_women_product from '../Components/Assets/women_data'
import data_men_product from '../Components/Assets/men_data'
import PopularMen from '../Components/Popular/Popular-men'
import Offer from '../Components/Offer/Offer'
import Footer from '../Components/Footer/Footer'
import JoinUs from '../Components/JoinUs/JoinUs'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <PopularWomen data_women_product={data_women_product} />
      <br/>
      <PopularMen data_men_product={data_men_product} />
      <Offer />
      <JoinUs />  
      <Footer />
    </div>
  ) 
}
export default Home