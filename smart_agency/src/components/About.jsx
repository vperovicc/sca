import React from 'react'
import '../styles/About.css'
import Slika from '../assets/heropng.png'


const About = () => {
  return (
    <div id='about' className='content_about'>
        <div className='up_about'>
            <div className='left_up_about'>
                <h className='title_about'>Welcome to Smart Consulting Agency</h>
                <p>We are a consulting agency aiming to assist businesses in the project management area and process optimization field.</p>
            </div>
            <img src={Slika}/>
        </div>

        <div className='down_about'>
            <div className='left_down_about'>
                <div className='first_left_about'>
                    <h className='title_about'>Our why?</h>
                    <p>We are a consulting agency aiming to assist businesses in the project management area and process optimization field.</p>
                </div>
                <div className='second_left_about'>
                    <h className='title_about'>Our Consultants</h>
                    <p>With 10+ years of team management experience and a PhD in System Control and Modeling, we hold certifications including PMP®, PMI-ACP®, Certified Scrum Professional, and a Microsoft Data Science certificate.</p>
                </div>
            </div>

            <div className='right_down_about'>
                <h className='title_about'>What do we do?</h>
                <p>Coach businesses, teams, or individuals in agile project management.</p>
                <p>Provide training in business process mapping, agile project management, Scrum, and JIRA.</p>
                <p>Consult on business process analysis, mapping, and optimization.</p>
                <p>Supply documents and electronic materials on agile approaches and business process reengineering.</p>
                <img src={Slika}/>
            </div>
        </div>
    </div>
  )
}

export default About