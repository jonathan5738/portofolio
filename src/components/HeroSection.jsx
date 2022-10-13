import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Landing/HeroSection.css'
function HeroSection() {
  return (
    <section className="hero-section-container">
        <div className="hero-section-content">
             <h2>I'am Jonathan nakahonda</h2>
             <p>I am a fullstack developper, i use technologies like python(django), react, node.js (express) mongodb, and MySql</p>
             <Link to="/about" className='btn'>learn more about me</Link>
        </div>
        <div className="hero-section-img">
           <div className="hero-section-img-image"></div>
        </div>
    </section>
  )
}

export default HeroSection