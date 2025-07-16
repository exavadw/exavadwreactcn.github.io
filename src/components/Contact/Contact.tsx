'use client'

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './contact.css';
import GitHubIcon from '@/assets/Tools.png';
import GMailIcon from '@/assets/gmail.png';
import linkedInIcon from '@/assets/linkedin.png';
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
      duration: 0.6
    }
  }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7
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
    rotate: 5
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

const popupVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: -20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20
  }
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState<'success' | 'error'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm('service_irn6suv', 'template_hf97j2d', form.current, '8UctPpCg9YnLQlTqe')
        .then((result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setPopupMessage('Email sent successfully!');
          setPopupType('success');
          setShowPopup(true);
          setIsSubmitting(false);
          
          // Hide popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }, (error) => {
          console.log(error.text);
          setPopupMessage('Failed to send email. Please try again.');
          setPopupType('error');
          setShowPopup(true);
          setIsSubmitting(false);
          
          // Hide popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        });
    }
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
            placeholder='Name'
            variants={formItemVariants}
            disabled={isSubmitting}
          />
          
          <motion.input 
            type="email" 
            className="email" 
            name="your_email" 
            placeholder='Email'
            variants={formItemVariants}
            disabled={isSubmitting}
          />
          
          <motion.textarea 
            className='msg' 
            name="message" 
            rows={5} 
            placeholder='Message'
            variants={formItemVariants}
            disabled={isSubmitting}
          ></motion.textarea>
          
          <motion.button 
            type='submit' 
            value='Send' 
            className="submitBtn"
            variants={buttonVariants}
            whileHover={isSubmitting ? {} : "hover"}
            whileTap={isSubmitting ? {} : "tap"}
            disabled={isSubmitting}
            >
            {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          
          <motion.div 
            className="links"
            variants={containerVariants}
          >
          </motion.div>
        </motion.form>
      </div>

      {/* Popup Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className={`popup ${popupType}`}
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              padding: '15px 20px',
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold',
              zIndex: 1000,
              maxWidth: '300px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              backgroundColor: popupType === 'success' ? '#4CAF50' : '#f44336'
            }}
          >
            {popupMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact; 