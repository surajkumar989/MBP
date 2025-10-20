import React from 'react'
import Navbar from '../components/global components/Navbar'
import Hero from '../components/landing components/Hero'
import Services from '../components/landing components/Services'
import Industries from '../components/landing components/Industries'
import Product from '../components/landing components/Product'
import About from '../components/landing components/About'
import LatestNews from '../components/landing components/LatestNews'
import Footer from '../components/global components/Footer'
function Landing_Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Industries/>
      <Product/>
      <About/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Landing_Page
