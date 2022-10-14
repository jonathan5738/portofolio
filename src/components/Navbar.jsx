import React, { useRef, useState } from 'react'
import { FiMenu } from "react-icons/fi"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/Navbar/Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navMobile = useRef()
  const variants = {
    initial: {opacity: 0, scale: .8},
    visible: {opacity: 1, scale: 1}
  }
  const handleShowMenu = () => {
     setShowMenu(prev => !prev)
     navMobile.current.classList.toggle('hid-nav-mobile')
  }
  const pathname = location.pathname
  return (
    <section className="navbar-container">
       <nav className='navbar'>
         <Link to='/'>homepage</Link>
            {pathname === '/' && (
                <ul className='menu'>
                    <li className='menu-item'><a href="#projects-section">Projects</a></li>
                    <li className='menu-item'><a href="#contact-me">Contact me</a></li>
                    <li className='menu-item'><a href="#about-me">About me</a></li>
                </ul>
            )}
         </nav>
         <motion.div className='mobile-navigation'>
            <FiMenu size={25} color={"#fff"} className="menu-icon" onClick={handleShowMenu}/>
            <motion.div className='navbar-mobile hid-nav-mobile'
                ref={navMobile}
                variants={variants}
                initial='initial'
                animate={showMenu ? 'visible': ''}
                transition={{ ease: 'easeInOut', duration: .3}}
             >
                <Link to="/" className='mobile-homepage'>home</Link>
                {pathname === '/' && (
                  <ul className="menu-mobile">
                     <li className="menu-item-mobile"><a href="#projects-section">Projects</a></li>
                     <li className="menu-item-mobile"><a href="#contact-me">Contact me</a></li>
                     <li className="menu-item-mobile"><a href="#about-me">About me</a></li>
                  </ul>
                )}
            </motion.div>
         </motion.div>
    </section>
  )
}

export default Navbar