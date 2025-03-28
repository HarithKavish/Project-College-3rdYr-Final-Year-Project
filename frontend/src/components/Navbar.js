import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
            <img src={logo} alt='logo'></img>
            <h1>SkinNet Analyzer</h1>
        </li>
        <li><Link to="/Project-College-3rdYr-Final-Year-Project/">Home</Link></li>
        <li><Link to="/Project-College-3rdYr-Final-Year-Project/about">About</Link></li>
        <li><Link to="/Project-College-3rdYr-Final-Year-Project/upload">Upload</Link></li>
        {/* <li><Link to="/form">Symptoms</Link></li> */}
        {/* <li><Link to="/chatbot">AI Chatbot</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
