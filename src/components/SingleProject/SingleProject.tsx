/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectList, { Project } from "../../ProjectList";
import "./SingleProject.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const itemVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    scale: 0.5,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vh",
    scale: 1.5,
  },
};

export const itemTransition = {
  delay: 0.0,
  duration: 1,
};

export const itemTransition2 = {
  delay: 0.1,
  duration: 1,
};

export const itemTransition3 = {
  delay: 0.2,
  duration: 1,
};

export const SingleProject: React.FC<any> = ({
  pageTransition,
  pageVariants,
  match,
}) => {
  const { project } = match.params;
  const currentProject: Project = projectList[project];
  const {
    name,
    longDescription,
    moreInformation,
    images,
    links,
  } = currentProject;

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      id="SingleProjectOuterContainer"
    >
      <div id="Close">
        <Link className="close" to="/myprojects">
          <HighlightOffIcon
            style={{ fontSize: "3rem", color: "rgb(240, 240, 240)" }}
          />
        </Link>
      </div>
      <div id="SingleProjectContainer">
        <div id="SingleProject">
          <h1>{name}</h1>
          <motion.div
            initial="initial"
            exit="out"
            animate="in"
            variants={itemVariants}
            transition={itemTransition}
            className="slideshow"
          >
            <Carousel autoPlay interval={5000} infiniteLoop>
              {images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt="Project Picture" />
                </div>
              ))}
            </Carousel>
          </motion.div>

          <motion.div
            initial="initial"
            exit="out"
            animate="in"
            variants={itemVariants}
            transition={itemTransition2}
            className="projectInfo"
          >
            <p>{longDescription}</p>
            <p>{moreInformation}</p>
          </motion.div>
          <motion.div
            initial="initial"
            exit="out"
            animate="in"
            variants={itemVariants}
            transition={itemTransition3}
            className="links"
          >
            {links.map((link, idx) => (
              <a key={idx} href={link.link} target="_blank" rel="noreferrer">
                {link.type}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
