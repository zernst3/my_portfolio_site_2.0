import React from "react";
import { Home, AboutMe, MyProjects, SingleProject, Navbar } from "./components";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-10vh",
    scale: 0.5,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "10vh",
    scale: 1.5,
  },
};

const pageTransition = {
  ease: "anticipate",
  duration: 1,
};

const Routes: React.FC<any> = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          render={(props: any) => (
            <Home
              {...props}
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          )}
        />
        <Route
          exact
          path="/aboutme"
          render={(props: any) => (
            <AboutMe
              {...props}
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          )}
        />
        <Route
          exact
          path="/myprojects"
          render={(props: any) => (
            <MyProjects
              {...props}
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          )}
        />
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
        <Route exact path="/contactme" component={Home} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
