import React from "react";
import "./Home.css";
import Typed from "react-typed";
import { motion } from "framer-motion";

export const Home: React.FC<any> = ({ pageTransition, pageVariants }) => {
  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Home">
        <div className="textContainer">
          <div className="text">
            <h1>
              <Typed
                strings={["Zachary Ernst"]}
                typeSpeed={30}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </h1>
            <h3>
              <Typed
                strings={[
                  "Full-Stack Web Developer",
                  "React and Redux",
                  "Node and Express",
                  "PostgreSQL and MongoDB",
                  "and more...",
                ]}
                typeSpeed={40}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
