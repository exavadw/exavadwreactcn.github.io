import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import PortfolioFabflix from '../../assets/portfolio_fabflix.png';
import PortfolioHinman from '../../assets/portfolio_hinman.png';

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
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
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
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      image: Portfolio1,
      githubUrl: "https://github.com/LeynaNguyen3/PersonalWebsite_2",
      description: "This is the website you're currently viewing!"
    },
    {
      id: 2,
      title: "Fabflix",
      image: PortfolioFabflix,
      githubUrl: "https://www.youtube.com/watch?v=giEpsQsG414&ab_channel=LeynaNguyen",
      description: "Full-stack movie browsing web application"
    },
    {
      id: 3,
      title: "Axon Regeneration Classifier",
      image: PortfolioHinman,
      githubUrl: "https://docs.google.com/presentation/d/1_2yMVcBLNqmqKTIjmgZUHVHMSMt-pIZioBUL4UcfYN0/edit?usp=drive_link",
      description: "Axon Regeneration Classifier for Hinman Lab"
    }
    // Add more projects here when needed
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
      
      <motion.span className="projectsDesc" variants={descriptionVariants}>
        Here are all my projects... so far!
      </motion.span>
      
      <motion.div className="projectsImgs" variants={containerVariants}>
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projectImg"
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div variants={projectHoverVariants}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="projectsImg" 
              />
              <motion.div 
                className="overlay"
                variants={overlayVariants}
              >
                <div className="text">{project.description}</div>
              </motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;