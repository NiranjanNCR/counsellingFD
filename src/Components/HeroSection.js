import React from 'react'
import HeroImg from "../images/hero-img.jpg";

const HeroSection = () => {
  return (
    <>
      
      <main className="hero-section">
        <div className="hero-left">
          <h1>
            Take your <span>First</span> Step <span>wisely</span>
          </h1>
          <p>
            Empower your journey to success build essential skills for growth
            gain unshakable confidence.
          </p>
        </div>
        <div className="hero-image">
          <img src={HeroImg} alt="" />
        </div>
      </main>
    </>
  )
}

export default HeroSection
