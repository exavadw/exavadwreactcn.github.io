'use client'

import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';
import ProgrammingLanguages from '@/assets/website_woman_technologist_emoji.png';
import Tools from '@/assets/website_tool.png';
import Certificates from '@/assets/website_trophy.png';
import Activities from '@/assets/website_biking.png';

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

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};

interface SkillData {
  category: string;
  items: string[];
  icon: any; // Using any for imported image types
}

const aboutMeContent = `
I began coding for Perfect Storm, a modding project of Naruto Shippuden: Ultimate Ninja Storm 4 that surpassed 5 million international views on YouTube. Since I started college at UCI in Fall 2021, I've expanded my computer science expertise, graduating in June 2025 with a Bachelor's in Software Engineering. Currently, I'm interning at Pixel Canvas and MIXR Studios, focusing on innovative AR/XR experiences. I'm also a Taekwondo National Champion (April 2024) and am now seeking full-time opportunities in software engineering, specializing in cloud deployment/management and AI/ML.
`;

const skillsData: SkillData[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C", "C++", "x86 Assembly", "Java", "JavaScript", "TypeScript", "CSS", "HTML", "SQL"],
    icon: ProgrammingLanguages
  },
  {
    category: "Tools/Frameworks",
    items: ["OpenRouter.ai", "Deepseek API", "Git", "Docker", "AWS", "GCP", "DigitalOcean", "React", "Svelte", "MySQL", "MongoDB"],
    icon: Tools
  },
  // {
  //   category: "Certifications & Training",
  //   items: [
  //     "Cornell Machine Learning Foundations",
  //     "NMLS (Mortgage Licensing)",
  //     "CPR Certified",
  //     "First Aid/AED Certified",
  //     "University of Helsinki MOOC (Java)"
  //   ],
  //   icon: Certificates
  // },
  {
    category: "Activities & Leadership",
    items: [
      "Taekwondo National Champion (NCTA Collegiate Nationals 2024 - Black Belt Board Breaking)",
      "UCI Jazz Band Trombone Section Leader (2022-2024)"
    ],
    icon: Activities
  }
];

const Skills: React.FC = () => {
  return (
    <motion.section 
      id='skills'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h1 className="skillTitle" variants={titleVariants}>
        About Me
      </motion.h1>
      <motion.p className="skillDesc" variants={textVariants}>
        {aboutMeContent}
      </motion.p>
      
      <motion.h1 className="skillTitle" variants={titleVariants}>
        Technical Skills
      </motion.h1>
      
      <motion.div className="skillBars" variants={containerVariants}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skillBar"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="skillBarText">
              <h2>{skill.category}</h2>
              <p>{skill.items.join(', ')}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills; 