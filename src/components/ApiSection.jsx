import React from 'react'
import { FiGithub } from "react-icons/fi";
import '../css/Landing/ApiSection.css'

function ApiSection() {
  return (
    <section className="api-section">
        <h2>List of some apis</h2>
        <div className="api-section-grid">
             <div className="api-section-card">
                  <h2>Ecommerce api</h2>
                  <p>this is ecommerce api has been implemented using node.js (express)
                    and mongodb as database, stripe to handle paymen, jwt and bcrypt 
                    for authentication, and also used passport.js for oauth authentication 
                    one of the challenges implementing this api has been my organisation
                  </p>
                  <ul className='list-technologies'>
                     <h3>Technologies</h3>
                     <li>express.js</li>
                     <li>mongodb (mongoose)</li>
                  </ul>
                  <a href="https://github.com/jonathan5738/ecommerceBackend" className='btn'>
                      <div className="link-content">github repository <FiGithub size={20} /> </div>
                  </a>
             </div>

             <div className="api-section-card">
                  <h2>Blog api</h2>
                  <p>this is a blog api implemented in python (django, django-rest-framework)
                    in this blog i used token authentication, and employed rest api approch
                    user are able to create group and perform CRUD actions on blog-group, assign permissions (author, staff)
                    author can perform CRUD operations on post
                    member who join blog-group can read post, vote 
                  </p>
                  <ul className='list-technologies'>
                     <h3>Technologies</h3>
                     <li>python</li>
                     <li>django, django-rest-framework</li>
                     <li>Django ORM</li>
                  </ul>
                  <a href="https://github.com/jonathan5738/portofolio-blog" className='btn'>
                     <div className="link-content">github repository <FiGithub size={20} /> </div>
                  </a>
             </div>
        </div>
    </section>
  )
}

export default ApiSection