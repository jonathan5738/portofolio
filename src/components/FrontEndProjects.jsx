import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiEye } from "react-icons/fi";
import '../css/projects/FrontEndProjects.css'
function FrontEndProjects() {
  return (
    <section className="front-end-projects">
        <div className="front-end-card">
             <div className="front-end-project-text">
                 <h3>Caribout clone</h3>
                 <p>this website is a clone of <a href="https://www.caribou.com/">caribout website</a>
                   i used react.js, react-router-dom, and framer-motion for basic animation 
                   did not meet challenges while implementing this website, didn't use redux 
                 </p>
                     <div className="website-links">
                        <a href="https://gorgeous-starlight-479c7b.netlify.app/" className='netlify-link'>
                            <div className="link-content">view website <FiEye size={20}/> </div>
                        </a>
                        <a href="https://github.com/jonathan5738/caribou-clone" className='github-link'>
                            <div className="link-content">github repository <FiGithub size={20} /> </div>
                        </a>
                     </div>
             </div>
             <div className="front-end-project-img"></div>
             <div className="project-section-card-img1-mobile"></div>
        </div>

        <div className="front-end-card space">
        <div className="project-section-card-img2-mobile"></div>
        <div className="front-end-project-img2"></div>
             <div className="front-end-project-text">
                 <h3>store spark clone</h3>
                 <p>this instead is a clone of <a href="https://www.storespark.co/">store spark</a>
                   like caribou used strictly react.js, react-router-dom for navigation, and framer-motion 
                   for basic animations
                 </p>
                     <div className="website-links">
                        <a href="https://glittering-marzipan-a97593.netlify.app/" className='netlify-link'>
                            <div className="link-content">view website <FiEye size={20}/> </div>
                        </a>
                        <a href="https://github.com/jonathan5738/store-spark-clone" className='github-link'>
                            <div className="link-content">github repository <FiGithub size={20} /> </div>
                        </a>
                     </div>
             </div>
        </div>
    </section>
  )
}

export default FrontEndProjects