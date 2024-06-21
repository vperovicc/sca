import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Title from '../components/Title'
import About from '../components/About'
import Services from '../components/Services'
import Trainings from '../components/Trainings'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Title Title="About Us"/>
        <About/>
        <Title Title="Services"/>
        <Services/>
        <Title Title="Trainings"/>
        <Trainings/>
        <Title Title="Blogs"/>
        <Blog/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Home