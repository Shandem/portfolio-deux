import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS for the Navbar

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyLogo</div>
        
        {/* Hamburger icon for small devices */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation links, show when the menu is open or on large screens */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Lorem Ipsum 1</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Lorem Ipsum 2</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Lorem Ipsum 3</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Lorem Ipsum 4</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Lorem Ipsum 5</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
