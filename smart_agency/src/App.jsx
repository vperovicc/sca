import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Cta from './components/Cta'
import About from './components/About'
import Footer from './components/Footer'
import Title from './components/Title'
import Services from './components/Services'


function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title Title="About Us"/>
      <About/>
      <Title Title="Services"/>
      <Services/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
