import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "backOut"
    }
  }
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0
    }
  }
};

const Intro = () => {
  const roles = useMemo(() => [
    "AI Engineer",
    "Taekwondo National Champion",
    "Full-Stack Developer",
    "XR/AR Trailblazer",
    "Cloud Engineer",
    "Martial Arts Tricker"
  ], []); 

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(roles[currentRoleIndex].substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }
    
    if (!isDeleting && currentText === roles[currentRoleIndex]) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
    }
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);
  
  return (
    <motion.section 
      id="intro"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="introContent">
        <motion.span className="hello" variants={titleVariants}>
          Hello,
        </motion.span>
        
        <motion.span className="introText" variants={itemVariants}>
          <p className="gradient-element"/>
          I'm <span className="introName">Henry</span>,<br />
          <motion.span 
            className="typing-text"
            variants={typingVariants}
          >
            {currentText}
            {<motion.span 
              className="cursor" 
              variants={cursorVariants}
              animate="blinking"
            ></motion.span>}
          </motion.span>
        </motion.span>
        
        <motion.div className="introParaContainer" variants={itemVariants}>
          <p className="introPara">
            with a B.S. in Software Engineering from UCI. <br/>
            I am a software/cloud engineer with a passion for creating <br/>
            user-friendly applications utilizing cutting-edge cloud technologies.
          </p>
        </motion.div>

        <div className="gradient-underlay" />
        
        <motion.div variants={itemVariants}>
          <Link 
            to='skills' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
          >
            <motion.button 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
              }}
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <motion.img 
        src={bg} 
        alt="Profile" 
        className="bg" 
        variants={imageVariants}
      />
    </motion.section>
  )
}

export default Intro;