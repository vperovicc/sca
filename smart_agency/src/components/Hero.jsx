import React from 'react'
import '../styles/Hero.css'
import {Link as ScrollLink} from 'react-scroll'

const Hero = () => {
  return (
    <div  id='home' className='background_hero'>
        <div className='content_hero'>
            <p className='title_hero'>AGILE TRANSFORMATIONS|<span className='span_hero'>AGILE COACHING</span>|PROJECT MANAGEMENT|<span className='span_hero'>BUSINESS PROCESS ANALYSIS</span>|ATLASSIAN TOOLS ADMINISTRATION|<span className='span_hero'>TRAININGS & WORKSHOP</span></p>
            <p className='subtext_hero'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='button_hero'>
            <ScrollLink to='calendly' smooth={true} duration={1000}><p>Book a Call</p></ScrollLink>
            </div>
        </div>

    </div>
  )
}

export default Hero