import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
   
      
      <div className="footer-columns">
    
        <div className="footer-column footer-left-column">
          <h2 className="footer-title">Store&nbsp;Name</h2>
          {['City A', 'City B', 'City C'].map((city, idx) => (
            <React.Fragment key={city}>
              <h3 style={{ marginTop: idx === 0 ? 0 : '2rem' }}>{city}</h3>
              <p>Mon – Sat · 9:00 AM – 9:00 PM</p>
            </React.Fragment>
          ))}
          <p style={{ marginTop: '3rem', color: '#ccc' }}>
            Closed on public holidays.
          </p>
        </div>

        <div className="footer-column footer-middle-column">
          <h2 className="footer-title">Navigate</h2>
          <nav className="footer-nav">
            {['/', '/about', '/products'].map((path, i) => (
              <button key={path} onClick={() => handleNav(path)} className="footer-link">
                {['Home', 'About', 'Products'][i]}
              </button>
            ))}
          </nav>
        </div>

      
        <div className="footer-column footer-right-column">
          <h2 className="footer-title">Contact</h2>
          <p>
            <i className="fas fa-phone footer-icon" />
            <a href="tel:+1234567890" className="footer-contact-link">+1 234 567 890</a>
          </p>
          <p>
            <i className="fas fa-envelope footer-icon" />
            <a href="mailto:info@example.com" className="footer-contact-link">info@example.com</a>
          </p>

          <h2 className="footer-title" style={{ marginTop: '3rem' }}>Social&nbsp;Media</h2>
          <div className="footer-social-icons">
            {['instagram', 'twitter', 'facebook'].map((platform) => (
              <a
                key={platform}
                href={`https://www.${platform}.com/placeholder`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                <i className={`fab fa-${platform} footer-icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>

   
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">
          © {new Date().getFullYear()} Store Name · All rights reserved
        </p>
      </div>
    </footer>
  );
}
