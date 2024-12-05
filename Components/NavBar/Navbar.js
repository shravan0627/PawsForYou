import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useState } from "react";
const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo-section">
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawsForU Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fa fa-bars"></i>
      </button>
      
      <div className={`nav-links-section ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/pets" onClick={() => setIsMenuOpen(false)}>Pets</Link></li>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/admin" onClick={() => setIsMenuOpen(false)}>ADMIN Login</Link></li>
          <li><Link to="/boarding">Boarding</Link></li>
        </ul>
      </div>
      
      <div className="nav-button-section">
        <Link to="/services">
          <button className="Navbar-button">Give a Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
