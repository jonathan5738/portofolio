import React from 'react'
import '../css/Landing/Landing.css'
import HeroSection from './HeroSection'
import ProjectSections from './ProjectSections'
import AboutSection from './AboutSection'



function Landing() {
  return (
    <>
      <HeroSection/>
      <ProjectSections/>
      <AboutSection/>
    </>
  )
}

export default Landing