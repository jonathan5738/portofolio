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
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ab veniam fuga earum, obcaecati perspiciatis quae rerum exercitationem unde tempore minus.
                         Commodi autem illum necessitatibus nobis repudiandae quas veniam harum natus.</p>
                         <Link to="/front-end/projects" className='btn'>see front-end projects</Link>
                  </div>
                  <div className="project-section-card-img1"></div>
             </div>

             <div className="project-section-card space">
                 <div className="project-section-card-img2"></div>
                  <div className="project-section-card-text gap-space">
                      <h3>Api projects</h3>
                      <p>List of some of the react project i made</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ab veniam fuga earum, obcaecati perspiciatis quae rerum exercitationem unde tempore minus.
                         Commodi autem illum necessitatibus nobis repudiandae quas veniam harum natus.</p>
                         <Link to="#" className='btn'>see api projects</Link>
                  </div>
             </div>
         </div>
    </section>
  )
}

export default ProjectSections