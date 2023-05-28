import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Home = () => {
  

  return (
    <div className="container mx-auto flex flex-col h-screen justify-center">
      <AppBanner />

      {/* <ProjectsProvider>
        <ProjectsGrid />
      </ProjectsProvider> */}

      
    </div>
  );
};

export default Home;
