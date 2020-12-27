import React from "react";
import { Home, AboutMe, MyProjects, ContactMe, NotFound } from "./components";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    // opacity: 0,
    x: "100vw",
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    // opacity: 0,
    x: "-100vw",
    // y: "100vh",
    scale: 0.5,
  },
};

const pageTransition = {
  // ease: "anticipate",
  duration: 0.3,
};

const Routes: React.FC<any> = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
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
          path="/contactme"
          render={(props: any) => (
            <ContactMe
              {...props}
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          )}
        />
        <Route
          path="/404"
          render={(props: any) => (
            <NotFound
              {...props}
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
