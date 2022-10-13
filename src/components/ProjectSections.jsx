import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Landing/ProjectSections.css'
function ProjectSections() {
  return (
    <section className="project-section">
         <div className="project-section-container">
             <div className="project-section-card">
                  <div className="project-section-card-text">
                      <h3>Front end projects</h3>
                      <p>List of some of the react project i made</p>
                      <p>those website has been implemented soly in javascript</p>
                         <Link to="/front-end/projects" className='btn'>see front-end projects</Link>
                  </div>
                  <div className="project-section-card-img1"></div>
             </div>

             <div className="project-section-card space">
                 <div className="project-section-card-img2"></div>
                  <div className="project-section-card-text gap-space">
                      <h3>Api projects</h3>
                      <p>List of some of the react project i made</p>
                      <p>Here are, node.js (express) and python (django) apis</p>
                         <Link to="/apis/projects" className='btn'>see api projects</Link>
                  </div>
             </div>
         </div>
    </section>
  )
}

export default ProjectSections