import React from 'react'
import '../styles/Services.css'
import Service from './Service'
import Slika from '../assets/heropng.png'

const serviceData = [
  {
    number: "01",
    title: 'JIRA SETUP, OPTIMIZATION AND INTEGRATION',
    text: 'Integration with other products (Jira to Jira, Salesforce, Zendesk, Slack)Optimization of workflows\n\nWorkflow and process automation\n\nSetup of new projects in Atlassian suit (Jira Software, Service Management, Confluence)\n\nPlugin management for Jira\n\nAdvanced reporting, dashboards, and filters\n\nCustomization and configuration on project level',
    picture: Slika
  },
  {
    number: "02",
    title: 'AGILE COACHING AND TRAINING',
    text: 'Partnership with the clients in 1 on 1 and team sessions\n\nIdentification of meaningful goals and planning their realization\n\nTeam and organization survey and capability building\n\nDriving business agility and scaling initiatives, organizational coaching, change management\n\nTraining teams to be Agile\n\nTraining Product Owners, Scrum Masters, and management\n\nTeambuilding activities',
    picture: Slika
  },
  {
    number: "03",
    title: 'PROJECT MANAGEMENT',
    text: 'Project-based consultancy\n\nLeading complex projects and providing expertise\n\nThe fast ramp-up in a startup environment, the LEAN introduction of PM\n\nTraining project managers\n\nPMO set up with best practices and procedures',
    picture: Slika 
  },
  {
    number: "04",
    title: 'BUSINESS PROCESS MAPPING AND OPTIMIZATIONS',
    text: 'Analysis of the as is processes\n\nRecommendation of the to be processes\n\nWorking with process owners in process optimization and improvements',
    picture: Slika
  }
];

const Services = () => {
  return (
    <div id='services' className='content_services'>
        {serviceData.map((service, index) => (
        <Service
          key={index}
          number={service.number}
          title={service.title}
          text={service.text}
          picture={service.picture}
        />
      ))}
    </div>
  )
}

export default Services