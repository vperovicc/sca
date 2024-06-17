import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container_navbar'>
      <img className='logo_navbar' src={Logo} alt="Logo" />
      <div className={`nav_navbar ${isOpen ? 'open' : ''}`}>
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Trainings</p>
        <p>Blogs</p>
        <p>Agilist</p>
      </div>
      <div className='button_navbar'>
        <p>Book a Call</p>
      </div>
      <div className='burger_icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
