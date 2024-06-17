import React from 'react'
import '../styles/Trainings.css'
import Joystick from '../assets/joystick.svg'
import Clipboard from '../assets/clipboard.svg'
import Teacher from '../assets/teacher.svg'
import Box from '../assets/box.svg'
import Robot from '../assets/robot.svg'
import Tools from '../assets/tools.svg'

const Trainings = () => {
  return (
    <div className='content_trainings'>
        <div className='box_trainings'>
            <img src={Joystick}/>
            <p>Business Agility Gamification</p>
        </div>

        <div className='box_trainings'>
        <img src={Clipboard}/>
            <p>Introduction to Project Management and Agile</p>
        </div>

        <div className='box_trainings'>
            <img src={Teacher}/>
            <p>Scrum Master</p>
        </div>

        <div className='box_trainings'>
            <img src={Box}/>
            <p>Product Ownership</p>
        </div>

        <div className='box_trainings'>
            <img src={Robot}/>
            <p>Introduction to AI for Project Managers</p>
        </div>

        <div className='box_trainings'>
            <img src={Tools}/>
            <p>Atlassian Tools Administration</p>
        </div>
    </div>
  )
}

export default Trainings