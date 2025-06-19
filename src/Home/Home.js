import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  'https://images.unsplash.com/photo-1503602642458-232111445657',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1506089676908-3592f7389d4d',
  'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
];

// Product grid placeholders
const smallImages = [
  'https://picsum.photos/seed/small1/600/800',
  'https://picsum.photos/seed/small2/600/800',
  'https://picsum.photos/seed/small3/600/800',
  'https://picsum.photos/seed/small4/600/800',
];
const largeImages = [
  'https://picsum.photos/seed/large1/1200/800',
  'https://picsum.photos/seed/large2/1200/800',
  'https://picsum.photos/seed/large3/1200/800',
  'https://picsum.photos/seed/large4/1200/800',
];



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let heroInterval = null;


  const startHeroAutoSlide = () => {
    heroInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  };
  const pauseHeroSlide = () => heroInterval && clearInterval(heroInterval);

  useEffect(() => {
    startHeroAutoSlide();
    return () => pauseHeroSlide();
  }, []);


  const slides = heroImages.map((img, i) => ({
    image: img,
    heading: `Product ${i + 1}`,
    subQuote: 'Tagline or short description goes here.',
    textPosition: i % 2 === 0 ? 'left' : 'right',
  }));

  return (
    <div className="Home-container">
     
      <section className="homepage-hero-section" id="heroSection">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`homepage-hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${slide.textPosition === 'left' ? 'reverse' : ''}`}
          >
            <div className="homepage-hero-left">
              <div className="homepage-hero-text">
                <h1>{slide.heading}</h1>
                <p>{slide.subQuote}</p>
              </div>
            </div>
            <div className="homepage-hero-right">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="homepage-hero-image" />
            </div>
          </div>
        ))}
      </section>

    
      
      <section className="our-products">
        <h1 className="products-heading">Our Products <span className="underline"></span></h1>
        <div className="products-container">
          {[0, 1, 2, 3].map(col => (
            <div key={col} className="product-column">
              
              <div className={`product-card ${col % 2 === 0 ? 'small-card' : 'large-card'}`}>
                <img src={col % 2 === 0 ? smallImages[col] : largeImages[col]} alt="Product" className="product-image" />
                <Link to="/products" className="see-more-btn">Shop More</Link>
              </div>
              
              <div className={`product-card ${col % 2 === 0 ? 'large-card' : 'small-card'}`}>
                <img src={col % 2 === 0 ? largeImages[col] : smallImages[col]} alt="Product" className="product-image" />
                <Link to="/products" className="see-more-btn">Shop More</Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/products" className="view-more-products">View More Products</Link>
      </section>
    </div>
  );
}

export default Home;
