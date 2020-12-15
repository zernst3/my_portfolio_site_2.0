/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectList, { Project } from "../../ProjectList";
import "./SingleProject.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Close } from "../Close/Close";

// export const itemVariants = {
//   initial: {
//     opacity: 0,
//     y: "-100vh",
//     scale: 0.5,
//   },
//   in: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   },
//   out: {
//     opacity: 0,
//     y: "-100vh",
//     scale: 1.5,
//   },
// };

// export const itemTransition = {
//   delay: 0.0,
//   duration: 1,
// };

// export const itemTransition2 = {
//   delay: 0.1,
//   duration: 1,
// };

// export const itemTransition3 = {
//   delay: 0.2,
//   duration: 1,
// };

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
      exit="none"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      id="SingleProjectOuterContainer"
    >
      <div id="SingleProjectContainer">
        <div id="SingleProject">
          <h1 className="mobile">{name}</h1>
          <div className="slideshow">
            <Carousel autoPlay interval={5000} infiniteLoop>
              {images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt="Project Picture" />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="projectInfo">
            <p>{longDescription}</p>
            {moreInformation && (
              <React.Fragment>
                <hr />
                <p>{moreInformation}</p>
              </React.Fragment>
            )}
          </div>
          <div className="links">
            {links.map((link, idx) => (
              <a key={idx} href={link.link} target="_blank" rel="noreferrer">
                {link.type}
              </a>
            ))}
          </div>
        </div>
        <div className="mobile">
          <Close link={"/myprojects"} />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
