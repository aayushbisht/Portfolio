import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import './bullet.css';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className=" w-full sm:w-3/4 text-left font-medium text-sm sm:text-lg text-ternary-dark dark:text-ternary-light">
          Hello there! My name is Aayush, and I am a full-stack Blockchain Developer who enjoys creating digital solutions to modern world problems.
          My passion for developing applications that solve real-world problems has led me to dive deep into Blockchain Technology and develop decentralized applications.
          Throughout my academic journey, I have honed my skills by building various Decentralized Applications and participating in Hackathons.<br /><br />
          I'm excited about the potential of Blockchain Technology and its ability to revolutionize industries. I am constantly exploring new advancements in the field and actively seeking opportunities to contribute to meaningful projects that leverage the power of decentralization.<br /><br />

Let's connect and collaborate to create innovative solutions together!
      </div>
    </div>
  );
};

export default AboutMeBio;
