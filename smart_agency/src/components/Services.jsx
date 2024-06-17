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
    text: 'Integration with other products (Jira to Jira, Salesforce, Zendesk, Slack)Optimization of workflows\n\nWorkflow and process automation\n\nSetup of new projects in Atlassian suit (Jira Software, Service Management, Confluence)\n\nPlugin management for Jira\n\nAdvanced reporting, dashboards, and filters\n\nCustomization and configuration on project level',
    picture: Slika
  },
  {
    number: "03",
    title: 'PROJECT MANAGEMENT',
    text: 'Integration with other products (Jira to Jira, Salesforce, Zendesk, Slack)Optimization of workflows\n\nWorkflow and process automation\n\nSetup of new projects in Atlassian suit (Jira Software, Service Management, Confluence)\n\nPlugin management for Jira\n\nAdvanced reporting, dashboards, and filters\n\nCustomization and configuration on project level',
    picture: Slika 
  },
  {
    number: "04",
    title: 'BUSINESS PROCESS MAPPING AND OPTIMIZATIONS',
    text: 'Integration with other products (Jira to Jira, Salesforce, Zendesk, Slack)Optimization of workflows\n\nWorkflow and process automation\n\nSetup of new projects in Atlassian suit (Jira Software, Service Management, Confluence)\n\nPlugin management for Jira\n\nAdvanced reporting, dashboards, and filters\n\nCustomization and configuration on project level',
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