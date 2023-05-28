import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import pa1 from '../assets/pa1.png';
import pa2 from '../assets/pa2.png';

import pa3 from '../assets/pa3.png';
const Projects = () => {
	const projectss = [
		{
		  title: 'Project 1',
		  description: 'This is project 1',
		  images: [pa1, pa2, pa3],
		  github: 'https://github.com/project1',
		  deployment: 'https://project1-demo.com',
		},
		{
		  title: 'Project 2',
		  description: 'This is project 2',
		  images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
		  github: 'https://github.com/project2',
		  deployment: 'https://project2-demo.com',
		},
		{
			title: 'Project 3',
			description: 'This is project 2',
			images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
			github: 'https://github.com/project2',
			deployment: 'https://project2-demo.com',
		  },
		// Add more projects...
	  ];
	return (
		<ProjectsProvider>
			<div className="container mx-auto ">
				<ProjectsGrid projectss={projectss}  />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
