import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/Landing/ProjectSections.css'
function ProjectSections() {
  const variants = {
     initial: {opacity: 0, scale: 0.7},
     visible: {opacity: 1, scale: 1}
  }
  return (
    <section className="project-section">
         <div className="project-section-container">
             <motion.div className="project-section-card"
                variants={variants}
                initial='initial'
                whileInView='visible'
                transition={{ ease: 'easeInOut', duration: .4}}
             >
                  <div className="project-section-card-text">
                      <h3>Front end projects</h3>
                      <p>List of some of the react project i made</p>
                      <p>those website has been implemented soly in javascript</p>
                         <Link to="/front-end/projects" className='btn'>see front-end projects</Link>
                  </div>
                  <div className="project-section-card-img1"></div>
             </motion.div>

             <motion.div className="project-section-card space"
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ ease: 'easeInOut', duration: .4}}
             >
                 <div className="project-section-card-img2"></div>
                  <div className="project-section-card-text gap-space">
                      <h3>Api projects</h3>
                      <p>List of some of the react project i made</p>
                      <p>Here are, node.js (express) and python (django) apis</p>
                         <Link to="/apis/projects" className='btn'>see api projects</Link>
                  </div>
             </motion.div>
         </div>
    </section>
  )
}

export default ProjectSections