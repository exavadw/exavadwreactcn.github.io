'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';
import logo from '@/assets/henry-logo.png';
import { Link } from 'react-scroll';
import menu from '@/assets/menu.png';

// Animation variants
const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const menuItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.3
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.2,
      when: "afterChildren"
    }
  }
};

const mobileMenuItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { x: 30, opacity: 0 }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    color: "#000",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

const menuButtonVariants = {
  tap: { rotate: 90, scale: 0.9 }
};

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.a 
        href='https://leynanguyen3.github.io/PersonalWebsite_2/'
        className="home-link"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img 
          src={logo.src} 
          alt="logo" 
          className='logo' 
          whileHover={{ rotate: 5 }}
        />
      </motion.a>

      {/* Desktop Menu - Horizontal Layout */}
      <motion.div className="desktopMenu">
        <Link 
          activeClass='active' 
          to='intro' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          className="desktopMenuListItem"
        >
          <motion.span
            variants={menuItemVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Home
          </motion.span>
        </Link>
        
        <Link 
          activeClass='active' 
          to='skills' 
          spy={true} 
          smooth={true} 
          offset={-75} 
          duration={500} 
          className="desktopMenuListItem"
        >
          <motion.span
            variants={menuItemVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            About
          </motion.span>
        </Link>
        
        <Link 
          activeClass='active' 
          to='projects' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="desktopMenuListItem"
        >
          <motion.span
            variants={menuItemVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Portfolio
          </motion.span>
        </Link>
        
        <Link 
          activeClass='active' 
          to='contact' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="desktopMenuListItem"
        >
          <motion.span
            variants={menuItemVariants}
            custom={3}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Contact
          </motion.span>
        </Link>
        
        <a href="/Leyna_Nguyen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="desktopMenuListItem">
          <motion.span
            variants={menuItemVariants}
            custom={4}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Resume
          </motion.span>
        </a>
        
        <a href="/Leyna_Nguyen_Cover_Letter.pdf" target="_blank" rel="noopener noreferrer" className="desktopMenuListItem">
          <motion.span
            variants={menuItemVariants}
            custom={5}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            Cover Letter
          </motion.span>
        </a>
      </motion.div>

      <motion.button 
        className="desktopMenuBtn"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
        }}
      >
        Contact Me
      </motion.button>

      {/* Mobile Menu Button */}
      <motion.img 
        src={menu.src} 
        alt="menu" 
        className='mobMenu' 
        onClick={() => setShowMenu(!showMenu)}
        variants={menuButtonVariants}
        whileTap="tap"
      />

      {/* Mobile Menu - Slides in from right */}
      <AnimatePresence>
        {showMenu && (
          <motion.div 
            className="navMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <Link 
              activeClass='active' 
              to='intro' 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500} 
              className="listItem" 
              onClick={() => setShowMenu(false)}
            >
              <motion.span variants={mobileMenuItemVariants}>
                Home
              </motion.span>
            </Link>
            
            <Link 
              activeClass='active' 
              to='skills' 
              spy={true} 
              smooth={true} 
              offset={-75} 
              duration={500} 
              className="listItem" 
              onClick={() => setShowMenu(false)}
            >
              <motion.span variants={mobileMenuItemVariants}>
                About
              </motion.span>
            </Link>
            
            <Link 
              activeClass='active' 
              to='projects' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500} 
              className="listItem" 
              onClick={() => setShowMenu(false)}
            >
              <motion.span variants={mobileMenuItemVariants}>
                Portfolio
              </motion.span>
            </Link>
            
            <Link 
              activeClass='active' 
              to='contact' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500} 
              className="listItem" 
              onClick={() => setShowMenu(false)}
            >
              <motion.span variants={mobileMenuItemVariants}>
                Contact
              </motion.span>
            </Link>
            
            <a href="/Leyna_Nguyen_Resume.pdf" target="_blank" rel="noopener noreferrer" className="listItem">
              <motion.span variants={mobileMenuItemVariants}>
                Resume
              </motion.span>
            </a>
            
            <a href="/Leyna_Nguyen_Cover_Letter.pdf" target="_blank" rel="noopener noreferrer" className="listItem">
              <motion.span variants={mobileMenuItemVariants}>
                Cover Letter
              </motion.span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar; 