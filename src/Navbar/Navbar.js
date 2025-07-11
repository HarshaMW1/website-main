import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../Login/LoginModal';



function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      /*if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      } */
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest('.hamburger')
      ) {
        setIsMobileMenuOpen(false);
      }

    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products');
    setSearchTerm('');
  };

  const delayedNavigate = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PRODUCTS', path: '/products' },
    { label: <FontAwesomeIcon icon={faShoppingCart} />, path: '/cart'  },
  
  ];

  return (
    <div>
      <div className="abc-emporio">
        <div className="header-wrapper">
          <header className="header">
            <div className="top-row">
            

              <div id="search-bar-container">
                <form onSubmit={handleSearchSubmit} className="search-wrapper">
                  <input
                    placeholder="Search..."
                    type="text"
                    className="input1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <span className="clear-search" onClick={() => setSearchTerm('')}>×</span>
                  )}
                </form>
              </div>

              <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? '×' : '☰'}
              </div>
            </div>
          </header>

          <nav ref={navRef} className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`nav-item ${location.pathname === path ? 'active-tab' : ''}`}
                onClick={(e) => delayedNavigate(e, path)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

       
      </div>
    </div>

  );
}

export default Navbar;
