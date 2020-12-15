import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Accordion.css";

const Accordion: React.FC<any> = ({
  header,
  idx,
  expanded,
  setExpanded,
  Component,
}) => {
  const isOpen = idx === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div id="Accordion">
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen
            ? "rgba(92, 112, 177, 0.9)"
            : "rgba(92, 112, 177, 0.3)",
        }}
        onClick={() => setExpanded(isOpen ? false : idx)}
      >
        {header}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Component />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
