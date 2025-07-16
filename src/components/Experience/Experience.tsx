'use client'

import React from 'react';
import { motion } from 'framer-motion';
import './experience.css';

interface ExperienceItem {
  title: string;
  company?: string;
  companyLink?: string;
  location?: string;
  startDate: string;
  responsibilities?: string[];
  subsections?: ExperienceItem[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Pixel Canvas",
    location: "Los Angeles, California, United States",
    startDate: "Apr 2025 - Present · 4 mos",
    responsibilities: [
      "Collaborated with cross-functional teams to enhance business and technical strategies",
      "Implemented full-stack changes using Docker, MongoDB, React, NextJS, AWS, and Turborepo",
      "Managed version control and code changes effectively with Git, ensuring project integrity"
    ]
  },
  {
    title: "Lead Engineer",
    company: "MIXR Studios",
    location: "Orange County, California, United States",
    startDate: "Jan 2025 - Present · 7 mos",
    responsibilities: [
      "Collaborated with UI/UX designers to create innovative full stack web XR applications using Next.js and React",
      "Leveraged Docker and cloud services (AWS, Google Cloud) for streamlined application deployment and hosting",
      "Enhanced application performance and scalability by implementing robust data storage solutions with AWS, Google Cloud, Firestore and Firebase"
    ]
  },
  {
    title: "Webmaster/Audio Engineer",
    company: "The Light Brigade LLC",
    location: "Ellicott City, Maryland, United States",
    startDate: "Apr 2020 - Present · 5 yrs 4 mos",
    responsibilities: [
      "Managed the Pillars of Wealth website, ensuring optimal performance and user experience",
      "Edited and produced engaging podcasts that showcased insights from financial education materials",
      "Deployed a responsive financial education platform using Vercel and Svelte, improving site speed",
      "Developed a user-friendly backend CMS with Sanity, facilitating seamless website updates"
    ]
  }
];

const Experience: React.FC = () => {
  const renderExperience = (exp: ExperienceItem, index: number | string, isSubsection: boolean = false) => {
    return (
      <div key={index} className={`experienceBar ${isSubsection ? 'subsection' : ''}`}>
        <div className="experienceBarText">
          <h2>{exp.title}</h2>
          <p>
          {exp.location && (
              <>
                {exp.location}
                <br />
              </>
            )}
            {exp.company && (
              exp.companyLink ? (
                <a 
                  href={exp.companyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="companyLink"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )
            )}
            {exp.company && exp.location && <br />}
            {exp.startDate && (
              <>
                {exp.startDate}
                <br />
              </>
            )}
            {exp.responsibilities?.length && <br />}
            {exp.responsibilities?.map((item, i) => (
              <React.Fragment key={i}>
                ● {item}<br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    );
  };
  
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
        duration: 0.5
      }
    }
  };
  
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id='experiences'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 className="experienceTitle" variants={titleVariants}>
        Work Experience
      </motion.h1>

      
      <motion.div className="experienceBars" variants={containerVariants}>
        {experienceData.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            {renderExperience(exp, index)}
            {exp.subsections?.map((subsection, subIndex) => 
              renderExperience(subsection, `${index}-${subIndex}`, true)
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience; 