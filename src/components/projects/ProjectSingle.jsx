import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, github, deployment }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" style={{ height: "470px" }}>
        <div className='min-h-8' style={{ height: "220px", width: "100%" }}  >
          <img
            src={image}
            className="rounded-t-xl border-none h-full w-full object-cover"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2" style={{ height: "50px" }}>
            {title}
          </p>
          <p className="text-lg text-ternary-dark dark:text-ternary-light" style={{ height: "105px" }}>
            {category}
          </p>
          
            <p className='mt-4'>
              <a href={github} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded-lg">
                GitHub
              </a>
			  {deployment && (
              <a href={deployment} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded-lg">
                Deployment
              </a>
			            )}

            </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
