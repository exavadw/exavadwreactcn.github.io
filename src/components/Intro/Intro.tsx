'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import './intro.css';
import bg from '@/assets/image.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
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

const Intro: React.FC = () => {
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
    let timer: NodeJS.Timeout;
    
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
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.img 
        src={bg.src} 
        alt="Background" 
        className="bg"
        variants={itemVariants}
      />
      
      <motion.div 
        className="introContent"
        variants={containerVariants}
      >
        <motion.span 
          className="hello" 
          variants={titleVariants}
        >
          Hello, I'm
        </motion.span>
        
        <motion.h1 
          className="introName"
          variants={titleVariants}
        >
          Henry
        </motion.h1>
        
        <motion.div 
          className="introText"
          variants={itemVariants}
        >
          <motion.span 
            className="typing-text"
            variants={typingVariants}
          >
            {currentText}
            <motion.span 
              className="cursor" 
              variants={cursorVariants}
              animate="blinking"
            ></motion.span>
          </motion.span>
        </motion.div>
        
        <motion.p 
          className="introParaContainer"
          variants={itemVariants}
        >
          with a B.S. in Software Engineering from UCI. <br/>
          I am a software/cloud engineer with a passion for creating <br/>
          user-friendly applications utilizing cutting-edge cloud technologies.
        </motion.p>
        
      </motion.div>
      
    </motion.section>
  );
};

export default Intro; 