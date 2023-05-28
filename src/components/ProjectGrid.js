import React, { useState, useEffect } from 'react';

const ProjectGrid = ({ projects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[currentImageIndex].images.length);
      console.log(projects.length);
      console.log(projects[currentImageIndex].images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [projects[currentImageIndex].images.length]);

  return (
    <div className="flex justify-center">
      <div className="flex space-x-4">
        {projects.map((project, index) => (
          <div className="bg-white p-4 rounded-lg shadow flex-1" key={index}>
            <img src={project.images[currentImageIndex]} alt="Demo" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                GitHub
              </a>
              <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                Deployment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
