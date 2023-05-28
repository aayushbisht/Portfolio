import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import './bullet.css';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <h1>Blockchain</h1>
		<ul className="list-disc list-inside">
          <li className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Bullet point 1
          </li>
          <li className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Bullet point 2
          </li>
          <li className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Bullet point 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeBio;
