import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link as ScrollLink} from 'react-scroll'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container_navbar'>
      <img className='logo_navbar' src={Logo} alt="Logo" />
      <div className={`nav_navbar ${isOpen ? 'open' : ''}`}>
        <ScrollLink to='home' smooth={true} duration={1000}><p>Home</p></ScrollLink>
        <ScrollLink to='about' smooth={true} duration={1000}><p>About Us</p></ScrollLink>
        <ScrollLink to='services' smooth={true} duration={1000}><p>Services</p></ScrollLink>
        <ScrollLink to='trainings' smooth={true} duration={1000}><p>Trainings</p></ScrollLink>
        <ScrollLink to='blogs' smooth={true} duration={1000}><p>Blogs</p></ScrollLink>
        <a href='https://agilist-game.com' className='link_navbar' target='blank'><p>Agilist</p></a>
      </div>
      <div className='button_navbar'>
      <ScrollLink to='calendly' smooth={true} duration={1000}><p>Book a Call</p></ScrollLink></div>
      <div className='burger_icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
