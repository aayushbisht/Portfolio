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

import './about.css';

const About = () => {
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
  const technologiesLeft = ['React','Solidity', 'Ganache', 'Truffle'];
  const technologiesRight = ['Tailwind', 'Ethereum', 'IPFS', 'Node.js'];

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
                About Me
              </p>
            </Zoom>
          </div>
          <div className="about-container">
            <Fade left duration={2000}>
              <div className="left-column ">
               <div className='flex flex-col  items-center'>
                <Lottie options={defaultOptions} />
               
                <h2 className="font-general-medium sm:text-2xl mt- text-ternary-dark dark:text-ternary-light ">
                    Technologies I know:
                  </h2>
                
                <div className="technologies grid grid-cols-2 gap-4 text-sm md:text-xl  ">
                  
                  <ul className="list-disc mt-2 ">
                    {technologiesLeft.map((technology) => (
                      <li key={technology} className="text-ternary-dark dark:text-ternary-light">
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <ul className="list-disc mt-2 ">
                    {technologiesRight.map((technology) => (
                      <li key={technology} className="text-ternary-dark dark:text-ternary-light">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </div>
            </Fade>

            <Fade right duration={2000}>
              <div className="right-column">
                <AboutMeBio />
                
              </div>
            </Fade>
          </div>
        </motion.div>
      </AnimatePresence>
    </AboutMeProvider>
  );
};

export default About;
