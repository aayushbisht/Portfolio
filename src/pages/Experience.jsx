import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'react-lottie';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import animationData1 from '../components/animations/ethereum.json';
import animationData2 from '../components/animations/fullstack.json';
import animationData3 from '../components/animations/about.json';

import './experience.css';

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const technologiesLeft = ['React.js','Next.js', 'Tailwind', 'Git'];
  const technologiesRight = ['Express.js', 'Node.js', 'Typescript', 'Github'];

  const experiences = [
    {
      company: 'Accenture',
      role: 'Associate Software Engineer',
      duration: 'Oct 2024 - Present',
      description: [
        'Developed and optimized SAP ABAP solutions, improving system performance by 20% and reducing processing time',
        'Designed and implemented custom reports, forms, and interfaces for seamless SAP module integration',
        'Performed performance tuning and troubleshooting to enhance efficiency and minimize system downtime',
      ],
    },
    {
      company: 'Tutcart',
      role: 'Full Stack Web Developer',
      duration: 'Jan 2024 - May 2024',
      description: [
        'Built REST APIs and managed dashboards using Next.js, enhancing backend efficiency by 25%',
        'Developed map-based search, improving user satisfaction by 30%',
        'Implemented Redux, boosting app performance by 20%',
        'Designed landing page, increasing user engagement'
      ],
    },
  ];

  return (
    <AboutMeProvider>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto"
        >
          <div className="text-center">
            <Zoom>
              <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                Experience
              </p>
            </Zoom>
          </div>
          <div className="experience-container">
          {/* {experiences.map((exp, index) => (
          <div key={index} className={`relative mb-10 pl-10 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
            <div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5'></div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{exp.company}</h3>
              <p className='text-gray-600 dark:text-gray-400'>{exp.role} | {exp.duration}</p>
              <p className='mt-2 text-gray-700 dark:text-gray-300'>{exp.description}</p>
            </div>
          </div>
        ))} */}
            {experiences.map((exp, index) => (
      <div key={index} className={`relative mb-10 pl-10 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
        <div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5'></div>
        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xl '>
          <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{exp.company}</h3>
          <p className='text-gray-600 dark:text-gray-400'>{exp.role} | {exp.duration}</p>
          <ul className='mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside'>
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}

    
          </div>
        </motion.div>
      </AnimatePresence>
    </AboutMeProvider>
  );
};

export default Experience;
