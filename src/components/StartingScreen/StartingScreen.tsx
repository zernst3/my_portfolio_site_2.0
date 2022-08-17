import React from "react";
import "./StartingScreen.css";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
import select from "../../sounds/select.mp3";

export const StartingScreen: React.FC<any> = ({
  pageTransition,
  pageVariants,
}) => {
  const navigate = useNavigate();

  const selectAudio = new Audio(select);

  selectAudio.volume = 0.45;

  const handleClick = () => {
    selectAudio.play();
    navigate("/home");
  };

  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="StartingScreenContainer">
        <h1>
          <Typed
            startDelay={1000}
            strings={["Welcome"]}
            typeSpeed={30}
            backSpeed={50}
            backDelay={2000}
          />
        </h1>
        <h3 onClick={handleClick}>
          <Typed
            strings={["Click Here to Enter"]}
            startDelay={2000}
            typeSpeed={30}
            backSpeed={50}
            backDelay={2000}
          />
        </h3>
      </div>
    </motion.div>
  );
};
