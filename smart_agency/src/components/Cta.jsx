import React from 'react'
import '../styles/Cta.css'
import {InlineWidget} from 'react-calendly'


const Cta = () => {
  return (
    <div className='all_cta'>
    <div className='content_cta'>
        <p className='text_cta'>Unlock your team's potential with expert training and Scrum methodologies. Book a call now to transform your team's performance!</p>
    </div>

    <InlineWidget url="https://calendly.com/vukasinperovic10/trainer"/>
        <div className='separate_cta'/>
    <div className='fade_cta'/>
    </div>
  )
}

export default Cta