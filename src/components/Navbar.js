import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        setIsMenuOpen(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Pizza Town</h1>
      <ul className={isMenuOpen ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default NavBar;
