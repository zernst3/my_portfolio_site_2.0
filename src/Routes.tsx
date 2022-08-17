import React from "react";
import { Home, AboutMe, MyProjects, ContactMe, EducationAndWork, NotFound, StartingScreen } from "./components";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    // x: "50vw",
    scale: 0.9,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.9,
  },
};

const pageTransition = {
  duration: 0.2,
};

const AllRoutes: React.FC<any> = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route
          path="/"
          element={
            <StartingScreen pageTransition={pageTransition} pageVariants={pageVariants} />
          }
        />
        <Route
          path="/home"
          element={
            <Home pageTransition={pageTransition} pageVariants={pageVariants} />
          }
        />

        <Route
          path="/aboutme"
          element={
            <AboutMe
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />

        <Route
          path="/educationandwork"
          element={
            <EducationAndWork
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />

        <Route
          path="/personalprojects"
          element={
            <MyProjects
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        >
          {/* <Route
            path=":project"
            element={
              <SingleProject
                pageTransition={pageTransition}
                pageVariants={pageVariants}
              />
            }
          /> */}
        </Route>

        <Route
          path="/contactme"
          element={
            <ContactMe
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />
        <Route
          path="/404"
          element={
            <NotFound
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />
        <Route
        path="*"
        element={<Navigate to="/404" replace />}
    />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
