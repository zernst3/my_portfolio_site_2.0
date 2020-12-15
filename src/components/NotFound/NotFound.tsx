import React from "react";
import "./NotFound.css";
import { motion } from "framer-motion";

export const NotFound: React.FC<any> = ({ pageTransition, pageVariants }) => (
  <motion.div
    initial="initial"
    exit="out"
    animate="in"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div id="NotFoundContainer">
      <h1>Sorry, this page has not been found (Error: 404)</h1>
    </div>
  </motion.div>
);
