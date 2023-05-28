import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion,AnimatePresence } from 'framer-motion';
import Lottie from 'react-lottie';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import animationData1 from '../components/animations/ethereum.json';
import animationData2 from '../components/animations/fullstack.json';
import './about.css';

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
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
          <div className="left-column">
            <Lottie options={defaultOptions} />
          </div>
          </Fade>

          <Fade right duration={2000}>

          <div className="right-column">
            <AboutMeBio />
          </div>
          </Fade>

        </div>
		<div className="about-container">
    <Fade left duration={2000}>
          <div className="left-column">
            <Lottie options={defaultOptions1} />
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
