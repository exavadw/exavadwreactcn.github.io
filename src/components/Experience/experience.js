import React from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const experienceData = [
  {
    title: "IT Cloud Operations Intern",
    company: "SAP NS2",
    location: "Herndon, VA",
    startDate: "Expected Start Date: June 2025",
    responsibilities: [
      "Support cloud and on-premise IT operations by performing hands-on technical work",
      "Develop experience in data network and IT security related items, including managing and installing patches to servers",
      "Collaborate with cross-functional teams to troubleshoot issues, gather requirements, and assist in project lifecycle management for technology and change implementation workstreams"
    ]
  }, 
  {
    title: "Application Developer",
    company: "Fabflix Movie Database Web App ",
    companyLink: "https://www.youtube.com/watch?v=giEpsQsG414&ab_channel=LeynaNguyen",
    location: "Irvine, CA",
    startDate: "Sep. 2024 – Dec. 2024",
    responsibilities: [
      "Collaborated in team of 2 to design and deploy a scalable web app on AWS, MySQL, and Tomcat, enabling users to search, browse, and buy from a catalog of 12,000 movies with features like secure logins, auto-suggestions, and a checkout process",
      "Built a user-friendly front-end using JavaScript, jQuery, and AJAX, improving the browsing and purchasing experience",
      "Optimized performance by 20% and scalability with MySQL replication, connection pooling, and Kubernetes deployment across multiple AWS instances"
    ]
  },
  {
    title: "Researcher",
    startDate: "Aug. 2024 – Present",
    subsections: [
      {
        title: "CS Education Research",
        location: "University of California, Irvine",
        startDate: "Jan 2025 - Present",
        responsibilities: [
          "Guided lectures for Crumple Trees, a novel binary search tree (BST)",
          "Supported lectures by answering questions and explaining complex concepts",
          "Assisted in programming lab by debugging students' code and providing project guidance",
          "Participated in Teaching Assistant training to improve communication with students"
        ]
      },
      {
        title: "Lab Research Assistant",
        location: "University of California, Los Angeles",
        startDate: "Mar 2024 - Jun 2024",
        responsibilities: [
        "Contributed to stroke recovery research at one of the leading neurology labs in the U.S., using AI and machine learning to identify potential drug therapies with a team of 6",
        "Developed an AI-driven axon regeneration classifier by integrating RNA sequencing data and neuron microscopy images with advanced machine learning algorithms",
        "Leveraged tools like RegenOrNoRegen, Seurat, NeuroQuantify, and Garnett to optimize the classifier, supporting research aimed at improving recovery outcomes for stroke patients"
       ]
      },
    ]
  },
  {
    title: "Lab Research Assistant",
    company: "Hinman Lab",
    location: "Los Angeles, CA",
    startDate: "Sep. 2024 – Present",
    responsibilities: [
      "Contributed to stroke recovery research at one of the leading neurology labs in the U.S., using AI and machine learning to identify potential drug therapies with a team of 6",
      "Developed an AI-driven axon regeneration classifier by integrating RNA sequencing data and neuron microscopy images with advanced machine learning algorithms",
      "Leveraged tools like RegenOrNoRegen, Seurat, NeuroQuantify, and Garnett to optimize the classifier, supporting research aimed at improving recovery outcomes for stroke patients"
    ]
  },
  {
    title: "Artificial Intelligence Intern",
    company: "UCLA Department of Neurology",
    companyLink: "https://docs.google.com/presentation/d/1_2yMVcBLNqmqKTIjmgZUHVHMSMt-pIZioBUL4UcfYN0/edit?usp=drive_link",
    location: "Los Angeles, CA",
    startDate: "Mar. 2024 – Present",
    responsibilities: [
      "Selected from a pool of thousands of applicants to join 250 students in an 18-month program to master critical skills in data science, machine learning (ML), and artificial intelligence (AI)",
      "Gained proficiency in constructing data analysis pipelines, training ML models, Jupyter, NumPy, and Pandas",
      "Applied this knowledge to my role as a Lab Research Assistant, where I developed an AI-driven axon regeneration classifier"
    ]
  },
  {
    title: "Teaching Assistant",
    startDate: "Jan. 2024 – Dec. 2024",
    subsections: [
      {
        title: "Data Structures & Algorithms in C++",
        startDate: "Jan 2024 - Dec 2024",
        responsibilities: [
          "Guided lectures for Crumple Trees, a novel binary search tree (BST)",
          "Supported lectures by answering questions and explaining complex concepts",
          "Assisted in programming lab by debugging students' code and providing project guidance",
          "Participated in Teaching Assistant training to improve communication with students"
        ]
      },
      {
        title: "Principles in System Design in C",
        startDate: "Mar 2024 - Jun 2024",
        responsibilities: [
          "Assisted students in System Design projects including development of a simple shell in C, dynamic memory allocator, and multithreading",
          "Instructed students on multi-processes, multithreading, POSIX system calls, and concurrency",
          "Collaborated with professor weekly to design coursework enhancing student understanding"
        ]
      },
    ]
  },
  {
    title: "Mortgage Banker",
    company: "Mr. Cooper & Ladera Lending ",
    location: "Orange County, CA",
    startDate: "Jan. 2020 – Feb. 2021",
    responsibilities: [
      "Achieved top loan officer status within the first few months of onboarding, originating over $6,000,000 in monthly sales",
      "Addressed challenges, conducted client consultations, and managed a client intake and pipeline of 125+ clients"
    ]
  },
];

const Experience = () => {
  const renderExperience = (exp, index, isSubsection = false) => {
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
            {exp.responsibilities?.length > 0 && <br />} {/* Only add break if there are responsibilities */}
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
        <React.Fragment key={index}>
          <motion.div variants={itemVariants}>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {renderExperience(exp, index)}
          </motion.div>
          </motion.div>
          {exp.subsections?.map((subExp, subIndex) => (
            <motion.div key={`${index}-${subIndex}`} variants={itemVariants}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
              {renderExperience(subExp, `${index}-${subIndex}`, true)}
              </motion.div>
            </motion.div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </motion.section>
)};

export default Experience;