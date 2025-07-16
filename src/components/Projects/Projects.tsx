'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './projects.css';
import makapo from '@/assets/makapo-logo.jpg';

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
    opacity: 1
  }
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};

const projectHoverVariants = {
  hover: {
    scale: 1.03
  },
  tap: {
    scale: 0.97
  }
};

const overlayVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  rest: {
    opacity: 0
  }
};

interface Project {
  id: number;
  title: string;
  image: any; // Using any for imported image types
  githubUrl?: string;
  description: string;
  details?: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "UCI Senior Design Capstone Project",
      image: makapo,
      description: "HIPAA-compliant web platform for Paralympic athletes",
      details: [
        "Through the UCI Senior Design Capstone Class, I worked with a team that collaborated with Makapo, a nonprofit supporting Paralympic athletes, to design and implement a HIPAA-compliant web platform that modernized note-taking, secure data storage, and athlete training documentation, reducing manual logging time by 60%.",
        "Advised on system architecture and data security best practices, leveraging AWS RDS, Secure Token Service (STS), and encrypted MySQL instances, resulting in 100% compliance with HIPAA standards and supporting 65% scalability for projected user growth.",
        "Led the integration of AI-driven tools to convert speech content into structured, contextualized training notes using media tokenization and contextual NLP parsing, increasing documentation accuracy by 45%.",
        "Executed deployment of AWS RDS, Python Flask backend to Google Cloud Compute and Amazon EC2, and our React Frontend to Vercel. Our application is being tested by coaches and currently used."
      ]
    }
  ];

  return (
    <motion.section 
      id='projects'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 className="projectsTitle" variants={titleVariants}>
        Projects
      </motion.h2>
      
      <motion.div className="projectsImgs" variants={containerVariants}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="projectImg"
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div variants={projectHoverVariants}>
              <Image 
                src={project.image} 
                alt={project.title} 
                className="projectsImg"
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              <motion.div 
                className="overlay"
                variants={overlayVariants}
              >
                <div className="text">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.details && (
                    <div className="project-details">
                      {project.details.map((detail, index) => (
                        <p key={index} className="detail-item">• {detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects; 