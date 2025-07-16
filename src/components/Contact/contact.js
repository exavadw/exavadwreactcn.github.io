import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './contact.css';
import GitHubIcon from '../../assets/Tools.png';
import GMailIcon from '../../assets/gmail.png';
import linkedInIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

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
  hidden: { y: 30, opacity: 0 },
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

const formItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const linkVariants = {
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { 
      type: "spring", 
      stiffness: 400 
    } 
  },
  tap: { scale: 0.9 }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
  },
  tap: { 
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
  }
};

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03kpnzf', 'template_lncev64', form.current, 'djtxFhZl5-AyBkLQE')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.section 
      id="contactPage"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div id="contact">
        <motion.h1 className="contactPageTitle" variants={titleVariants}>
          Contact Me
        </motion.h1>
        
        <motion.span className="contactDesc" variants={itemVariants}>
          You can message me here!
        </motion.span>

        <motion.a 
            href="mailto:leyna.nguyen619@gmail.com" 
            className="contactLink"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            >
            Or email me here
        </motion.a>
        
        <motion.form 
          className='contactForm' 
          ref={form} 
          onSubmit={sendEmail}
          variants={containerVariants}
        >
          <motion.input 
            type="text" 
            className="name" 
            name="your_name" 
            placeholder='Your Name'
            variants={formItemVariants}
          />
          
          <motion.input 
            type="email" 
            className="email" 
            name="your_email" 
            placeholder='Your Email'
            variants={formItemVariants}
          />
          
          <motion.textarea 
            className='msg' 
            name="message" 
            rows="5" 
            placeholder='Your Message'
            variants={formItemVariants}
          ></motion.textarea>
          
          <motion.button 
            type='submit' 
            value='Send' 
            className="submitBtn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            >
            Submit
            </motion.button>
          
          <motion.div 
            className="links"
            variants={containerVariants}
          >
            <motion.a 
              href="https://github.com/LeynaNguyen3" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.img 
                src={GitHubIcon} 
                alt="GitHub" 
                className="link" 
                variants={linkVariants}
              />
            </motion.a>
            
            <motion.a 
              href="mailto:leyna.nguyen619@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.img 
                src={GMailIcon} 
                alt="Gmail" 
                className="link" 
                variants={linkVariants}
              />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/leynanguyen3/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.img 
                src={linkedInIcon} 
                alt="LinkedIn" 
                className="link" 
                variants={linkVariants}
              />
            </motion.a>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;