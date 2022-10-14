import React from 'react'
import { FiGithub } from "react-icons/fi";
import {motion} from 'framer-motion'
import '../css/Landing/ApiSection.css'

function ApiSection() {
  const variants = {
    initial: {opacity: 0, scale: 0.7},
    visible: {opacity: 1, scale: 1}
 }
  return (
    <section className="api-section">
        <h2>List of some apis</h2>
        <div className="api-section-grid">
             <motion.div className="api-section-card"
              variants={variants}
              initial='initial'
              whileInView='visible'
              transition={{ ease: 'easeInOut', duration: .4}}
             >
                  <h2>Ecommerce api</h2>
                  <p>this ecommerce api has been implemented using node.js (express)
                    and mongodb as database, stripe to handle online payment, jwt and bcrypt 
                    for authentication, passport.js for oauth authentication 
                  </p>
                  <ul className='list-technologies'>
                     <h3>Technologies</h3>
                     <li>express.js</li>
                     <li>mongodb (mongoose)</li>
                  </ul>
                  <a  href="https://github.com/jonathan5738/ecommerceBackend" className='btn'>
                      <div className="link-content">github repository <FiGithub size={20} /> </div>
                  </a>
             </motion.div>

             <motion.div className="api-section-card"
               variants={variants}
               initial='initial'
               whileInView='visible'
               transition={{ ease: 'easeInOut', duration: .4}}
             >
                  <h2>Blog api</h2>
                  <p>this is a blog api implemented in python (django, django-rest-framework)
                    in this blog i used token authentication, and employed a rest api approch
                    user are able to create group and perform CRUD operations on those groups, assign permissions (author, staff)
                    author can perform CRUD operations on post
                    member who join groups can read post, vote, and comment 
                  </p>
                  <ul className='list-technologies'>
                     <h3>Technologies</h3>
                     <li>python</li>
                     <li>django, django-rest-framework</li>
                     <li>Django ORM</li>
                  </ul>
                  <a  href="https://github.com/jonathan5738/portofolio-blog" className='btn'>
                     <div className="link-content">github repository <FiGithub size={20} /> </div>
                  </a>
             </motion.div>
        </div>
    </section>
  )
}

export default ApiSection