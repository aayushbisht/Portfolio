import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import './bullet.css';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className=" w-full sm:w-3/4 text-left font-medium text-sm sm:text-lg text-ternary-dark dark:text-ternary-light">
      My name is Aayush, and I am a full-stack web developer with a passion for building innovative digital solutions that solve real-world problems. I thrive in creating robust, scalable web applications and love taking full ownership of the development process — from ideation and design to deployment. There's something incredibly satisfying about seeing a project come to life, knowing I’ve contributed to every step of its creation.<br /><br />
      Hackathons have been a key part of my journey, helping me push my skills, collaborate with talented teams, and quickly create impactful prototypes under tight deadlines. These experiences have fueled my passion for rapid development and problem-solving.<br /><br />

Let's connect and collaborate to create innovative solutions together!
      </div>
    </div>
  );
};

export default AboutMeBio;
