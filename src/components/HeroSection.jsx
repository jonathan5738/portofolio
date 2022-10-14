import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Landing/HeroSection.css'
function HeroSection() {
  return (
    <section className="hero-section-container">
        <div className="hero-section-content">
             <h2>I'm Jonathan Nakahonda</h2>
             <p>I am a fullstack developper, i use technologies such as python(django), react (@redux-toolkit), node.js (express) mongodb, and MySql</p>
             <div className="hero-section-links">
             <Link to="/about" className='btn'>learn more about me</Link>
             <a href="#contact-me" className='contact-me-btn'>contact me</a>
             </div>
        </div>
        <div className="hero-section-img">
           <div className="hero-section-img-image"></div>
        </div>
    </section>
  )
}

export default HeroSection