import React from 'react'
import '../styles/PrivacyPolicy.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const DeliveryPolicy = () => {
  return (
    <div>
        <Navbar/>
        <div className='content_privacy'>
            <h1>Delivery Policy</h1>
            <p>Last updated: April 03, 2021<br/><br/>

Thank you for visiting and shopping at <a href='https://www.smartconsulting-agency.com'>https://www.smartconsulting-agency.com</a>. Following are the terms and conditions that constitute our Delivery Policy.</p>
            <h1>Delivery Policy</h1>
            <h2>Processing time</h2>
            <p>All orders are processed within 2-3 business days. Orders are not delivered on weekends or holidays.<br/><br/>

If we are experiencing a high volume of orders, delivery may be delayed by a few days. Please allow additional days for delivery. If there will be a significant delay in delivery of your order, we will contact you via email or telephone.</p>
            <h2>Delivery confirmation</h2>
            <p>You will receive a Confirmation email once your order is received, together with the link to the digital content, link to join the training and workshops.<br/><br/>

In terms of consultancy services, you will receive a COnfirmation email once your order is received, as well as other instructions for scheduling a session.</p>
            <h2>Customs, Duties and Taxes</h2>
            <p>Smart Consulting Agency is not responsible for any customs and taxes applied to your order. All fees imposed after delivery are the responsibility of the customer (tariffs, taxes, etc.).</p>
            <h2>Returns Policy</h2>
            <p>Our<Link to='/return'>Return & Refund Policy</Link>provides detailed information about options and procedures for returning your order.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about our Delivery Policy, please contact us:<br/><br/>

By email: contact@smartconsulting-agency.com</p>
        </div>
        <Footer/>
    </div>
  )
}

export default DeliveryPolicy