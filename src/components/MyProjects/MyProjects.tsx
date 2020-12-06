import React from "react";
import "./MyProjects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectList from "../../ProjectList";

export const MyProjects: React.FC<any> = ({ pageTransition, pageVariants }) => {
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
          <h1>My Projects</h1>
          <div id="Projects">
            <div className="picker">
              {Object.keys(projectList).map((project, idx) => (
                <Link to={`/myprojects/${project}`} key={idx}>
                  <h3>{projectList[project].name}</h3>
                  <p>{projectList[project].shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
