import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import ProjectGrid from './components/ProjectGrid';
import pa1 from './assets/pa1.png';
import pa2 from './assets/pa2.png';

import pa3 from './assets/pa3.png';


const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const projectss = [
	{
	  title: 'Project 1',
	  description: 'This is project 11',
	  images: [pa1, pa2, pa3],
	  github: 'https://github.com/project1',
	  deployment: 'https://project1-demo.com',
	},
	{
	  title: 'Project 2',
	  description: 'This is project 2',
	  images: [pa1, pa2, pa3],
	  github: 'https://github.com/project2',
	  deployment: 'https://project2-demo.com',
	},
	{
		title: 'Project 3',
		description: 'This is project 2',
		images: [pa1, pa2, pa3],
		github: 'https://github.com/project2',
		deployment: 'https://project2-demo.com',
	  },
	// Add more projects...
  ];


function App() {
	return (
			<AnimatePresence>
			<div className=" bg-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<section className='mb-20'>
					<Home />
					</section>
					<section id="about-sect" className='mt-20'>
						
						<About />
                    </section>
					<section id="project-sect" className='mt-20'>
					<Projects />
					{/* <ProjectGrid projects={projectss} /> */}
                    </section>
					
					<section id="contact-sect">
						<Contact />
					</section>
					 {/* <Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>

							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>  */}
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
			</AnimatePresence>
	);
}

export default App;
