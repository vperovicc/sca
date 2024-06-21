import React from 'react'
import '../styles/Footer.css'
import Instagram from '../assets/instagram.png'
import TikTok from '../assets/tiktok.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';

const Footer = () => (
    <div className='content_footer'>
        <div className='part1_footer'>
            <Link to='/home'><img src={Logo} /></Link>
            <div className='info_footer'>
                <div className='letstalk_footer'>
                    <h>LET'S TALKS</h>
                    <p>+381 63 850 5063</p>
                    <p>nikola@smartconsulting-agency.com</p>
                </div>

                <div className='terms_footer'>
                    <h>TERMS</h>
                    <Link to='/privacy'><p>Privacy Policy</p></Link>
                    <Link to='/terms'><p>Terms and Conditions</p></Link>
                    <Link to='/return'><p>Return and Refund Policy</p></Link>
                    <Link to='/delivery'><p>Delivery Policy</p></Link>
                </div>
            </div>
        </div>

        <div className='line_footer' />

        <div className='part2_footer'>
            <div className='social_footer'>
                <img src={Instagram} />
                <img src={LinkedIn} />
                <img src={TikTok} />
            </div>

            <p>©2024 by Smart Consulting Agency.</p>
        </div>
    </div>
)

export default Footer