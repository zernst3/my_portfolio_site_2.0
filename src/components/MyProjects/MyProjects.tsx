import React from "react";
import "./MyProjects.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import projectList from "../../ProjectList";
import { SingleProject } from "../SingleProject/SingleProject";
import { Route, Switch, useLocation } from "react-router-dom";

export const MyProjects: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={
        !window.location.pathname.includes("/myprojects/") ? "initial" : "none"
      }
      exit={!window.location.pathname.includes("/myprojects/") ? "out" : "none"}
      animate={
        !window.location.pathname.includes("/myprojects/") ? "in" : "none"
      }
      variants={
        !window.location.pathname.includes("/myprojects/") ? pageVariants : {}
      }
      transition={
        !window.location.pathname.includes("/myprojects/")
          ? pageTransition
          : { duration: 0 }
      }
    >
      <div id="MyProjectsContainer">
        <div id="MyProjects">
          <h1>My Projects</h1>
          <div id="Projects">
            <div className="picker">
              {Object.keys(projectList).map((project, idx) => (
                <NavLink
                  to={`/myprojects/${project}`}
                  key={idx}
                  className={"left"}
                  activeClassName={"projectActive"}
                >
                  <h3>{projectList[project].name}</h3>
                  <p>{projectList[project].shortDescription}</p>
                </NavLink>
              ))}
            </div>
            <div className="preview">
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/myprojects/:project"
                  render={(props: any) => (
                    <SingleProject
                      {...props}
                      pageTransition={pageTransition}
                      pageVariants={pageVariants}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
