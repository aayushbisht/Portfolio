import { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import React from "react";


const ProjectsGrid = ({ projectss }) => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3 );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [projects.length]);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <Zoom>
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>
      </Zoom>

      {/* <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div> */}
      <Zoom>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:gap-10"> 
         {selectProject
					? selectProjectsByCategory.map((projects) => (
							<ProjectSingle
								title={projects.title}
								category={projects.category}
								image={projects.img[currentImageIndex]}
								key={projects.id}
                github ={projects.github}
                deployment = {projects.deployment}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((projects) => (
							<ProjectSingle
								title={projects.title}
								category={projects.category}
								image={projects.img[currentImageIndex]}
								key={projects.id}
                github ={projects.github}
                deployment = {projects.deployment}
							/>
					  ))
					: projects.map((projects) => (
							<ProjectSingle
								title={projects.title}
								category={projects.category}
								image={projects.img[currentImageIndex]}
								key={projects.id}
                github ={projects.github}
                deployment = {projects.deployment}
							/>
					  ))} 
        

         </div>
      </Zoom>
    </section>
  );
};

export default ProjectsGrid;
