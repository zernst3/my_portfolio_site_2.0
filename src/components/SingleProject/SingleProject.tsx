/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import projectList, { Project } from "../../ProjectList";
import "./SingleProject.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import woosh from "../../sounds/woosh2.mp3";

export const SingleProject: React.FC<any> = ({
  project,
  setCurrentProject,
}) => {
  const currentProject: Project = projectList[project];
  let name, longDescription, moreInformation, images, links;

  if (currentProject) {
    name = currentProject.name;
    longDescription = currentProject.longDescription;
    moreInformation = currentProject.moreInformation;
    images = currentProject.images;
    links = currentProject.links;
  }

  const wooshAudio = new Audio(woosh);

  wooshAudio.volume = 0.1;

  const onClick = () => {
    wooshAudio.play();
    setCurrentProject(null);
  };

  const playWoosh = () => {
    wooshAudio.play();
  }

  return (
    <motion.div id="SingleProjectOuterContainer">
      <div id="SingleProjectContainer">
        <div id="SingleProject">
          <h1 className="mobile">{name}</h1>
          <div className="slideshow"
          onClick={playWoosh}
          onTouchMove={playWoosh}
          >
            <Carousel autoPlay interval={5000} infiniteLoop>
              {images?.map((image, idx) => (
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
            {links?.map((link, idx) => (
              <a key={idx} href={link.link} target="_blank" rel="noreferrer">
                {link.type}
              </a>
            ))}
          </div>
        </div>
        <div className="mobile">
          <button onClick={onClick}>Back</button>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(SingleProject);
