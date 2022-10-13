import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/Landing/AboutSection.css'
function AboutSection() {
  const [showAbout, setShowAbout] = useState(false)
  const paragraphRef = useRef()
  const variants = {
    initial: {opacity: 0, scale: 0.7},
    visible: {opacity: 1, scale: 1}
 }
  const showParagraph = (e) => {
    e.preventDefault()
    paragraphRef.current.classList.toggle('hid-div')
    setShowAbout(prev => !prev)
  }
  return (
    <motion.section className="about-section"
    variants={variants}
    initial='initial'
    whileInView='visible'
    transition={{ ease: 'easeInOut', duration: .4}}
    >
        <div className="about-section-text">
        <h3>About me</h3>
        <p>Hi, my name is jonathan nakahonda, i am <span className="colored">fullstack developper</span> who use <span className="colored">javascript (react, express) and python (django)</span> on a daily basis.
            I am 22 and currently live in spain, barcelona
            and I speak three languages <span className="colored">french, english, and italian</span> <br />
            i started my journey in programing in 2018 with java, back in those days i was really 
            interesed in app development, then i found myself being even more interested in web development so i picked up 
            html, css, php, javascript and python, 
        </p>
        <motion.p  className='hid-div' ref={paragraphRef}
              variants={variants}
              initial='initial'
              animate={showAbout ? 'visible': ''}
            >
                but because i only knew french and italian 
                which are beautiful languages but not the best when it comes to learn and improve programing skills
                I had to learn english in order to read documentations, books, watch udemy courses 
                and above all understand stackoverflow explainations :)
        
                as a self taught i did some mistake along the way of course, but all those hours spent 
                learning, and somethimes yelling at my compiuter made me even more passionate 
                I am ready to work and learn even more challenging aspects of this field 
            </motion.p>
        <Link to="#" className='btn' onClick={showParagraph}>{showAbout ? 'hid content': 'show more'}</Link>
        </div>
        <div className="about-section-img">

        </div>
    </motion.section>
  )
}

export default AboutSection