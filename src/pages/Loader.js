import React from 'react';
import './Loader.css';


const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-content">
      
      <div className="bouncing-balls">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  </div>
);

export default Loader;