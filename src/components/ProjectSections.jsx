import React from 'react'
import { motion } from 'framer-motion'
import '../css/Landing/ProjectSections.css'
function ProjectSections() {
  const variants = {
     initial: {opacity: 0, scale: 0.7},
     visible: {opacity: 1, scale: 1}
  }
  return (
    <section className="project-section">
         <div className="project-section-container" id='projects-section'>
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
                         <a href="/front-end/projects" className='btn'>see front-end projects</a>
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
                         <a href="/apis/projects" className='btn'>see api projects</a>
                  </div>
             </motion.div>
         </div>
    </section>
  )
}

export default ProjectSections