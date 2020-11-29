import React, { useState } from "react";
import "./MyProjects.css";
import { motion } from "framer-motion";

const options: Array<string> = ["Option 1", "Option 2", "Option 3"];

export const MyProjects: React.FC<any> = ({ pageTransition, pageVariants }) => {
  const [currentSelection, setCurrentSelection] = useState("Option 1");
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
          <h1>My projects</h1>
          <div id="Projects">
            <div className="picker">
              {options.map((option, idx) => (
                <button
                  className={
                    option === currentSelection ? "selectedOption" : ""
                  }
                  onClick={() => setCurrentSelection(option)}
                  key={idx}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
