import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';
import './About.css';

/*
  About page skeleton for workshop
  ────────────────────────────────────────────────────────────
  – Replace placeholder images / text with your own brand.
*/

// Unsplash placeholder images (1200 × 800)
const placeholderLarge1 = 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80';
const placeholderLarge2 = 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80';

export default function AboutUs() {
  const [years, setYears] = useState(0);

  // simple counter animation (0 → 25 years)
  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 1000;
    const increment = Math.floor(duration / end);

    const t = setInterval(() => {
      start += 1;
      setYears(start);
      if (start === end) clearInterval(t);
    }, increment);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="about-horizontal-wrapper">
      {/* ───── 3‑column hero block ───── */}
      <div className="about-3column-layout">
        {/* Left column */}
        <div className="column left-column">
          <img src={placeholderLarge1} alt="Showroom" className="image-large" />
          <div className="quality-card"><b>Consistent quality.<br />Every unit.</b></div>
        </div>

        {/* Middle column */}
        <div className="column middle-column">
          <div className="experience-card">
            <span className="years-count">{years}</span>
            <p className="experience-text"><b>Years of service<br />and happy customers</b></p>
          </div>
          <img src={placeholderLarge2} alt="Warehouse" className="image-large" />
        </div>

        {/* Right column */}
        <div className="column right-column">
          <h2 className="company-name">Your&nbsp;Brand</h2>
          <h3 className="about-subtitle">About</h3>
          <p className="about-text">
            Your Brand is a leading destination for premium building‑material solutions,
            partnering with homeowners, architects, and contractors for more than two decades.
            From concept to completion, we combine quality products with industry expertise
            to help you create inspiring spaces.
          </p>
        </div>
      </div>

      {/* ───── Placeholder timeline component ───── */}
      {/* <Timeline /> */}

      {/* ───── Values section ───── */}
      <div className="value-section">
        <motion.div className="value-intro">
          <h1 className="value-highlight">Our Value</h1>
          <h2 className="value-subtitle">Trusted by a growing community</h2>
          <p className="value-description">
            We serve <strong>homeowners</strong>, <strong>architects</strong>, <strong>builders</strong>, and <strong>trade professionals</strong>,
            offering a one‑stop shop for high‑quality products and reliable service.
          </p>
        </motion.div>

        <div className="value-cards">
          {[{
            icon: <FaEye style={{ fontSize: '2.2rem', color: '#ff6000' }} />,
            title: 'Vision',
            text: 'Deliver exceptional quality and variety to every project we touch.'
          }, {
            icon: <FaBullseye style={{ fontSize: '2.2rem', color: '#ff6000' }} />,
            title: 'Mission',
            text: 'To be the most trusted showroom through stellar service and end‑to‑end solutions.'
          }].map((card, i) => (
            <motion.div key={i} className="value-card">
              <div className="value-icon">{card.icon}</div>
              <h3 className="value-card-title">{card.title}</h3>
              <p className="value-card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
