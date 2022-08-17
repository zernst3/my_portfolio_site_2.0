import React, { useState } from "react";
import "./MyProjects.css";
import { motion } from "framer-motion";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import projectList from "../../ProjectList";
import { Close } from "../Close/Close";
import select from "../../sounds/select.mp3";
import woosh3 from "../../sounds/woosh3.mp3";
import SingleProject from "../SingleProject/SingleProject";

export const MyProjects: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [currentProject, setCurrentProject]: any = useState(null);
  const location = useLocation();
  const selectAudio = new Audio(select);

  let playWoosh = true;

  const playWoosh3 = () => {
    const woosh3Audio = new Audio(woosh3);
    woosh3Audio.volume = 0.25;
    playWoosh && woosh3Audio.play();
  };

  selectAudio.volume = 0.45;

  const playSelect = () => {
    selectAudio.play();
  };

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="MyProjectsContainer">
        <div id="MyProjects">
          <h1>Personal Projects</h1>
          <div id="Projects">
            <div className="picker">
              <div>
                {Object.keys(projectList).map((project, idx) => (
                  <NavLink
                    onClick={() => {
                      playWoosh = false;
                      playSelect();
                      setCurrentProject(project);
                    }}
                    onMouseEnter={() => setTimeout(playWoosh3, 5)}
                    to={``}
                    key={idx}
                    className={(navData) =>
                      project === currentProject ? "left projectActive" : "left"
                    }
                  >
                    <h3>{projectList[project].name}</h3>
                    <p>{projectList[project].shortDescription}</p>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="preview">
              {!currentProject ? (
                <h2>Select a project to preview details</h2>
              ) : (
                <SingleProject
                  project={currentProject}
                  pageTransition={pageTransition}
                  pageVariants={pageVariants}
                  setCurrentProject={setCurrentProject}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(MyProjects);
