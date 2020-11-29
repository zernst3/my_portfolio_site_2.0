import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Home, Navbar, AboutMe, MyProjects } from "./components";
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

const myProjects: Array<any> = [
  {
    link: "my-simple-crm",
    name: "My Simple Crm",
  },
];

const App: React.FC<any> = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />
        <Navbar />
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
            <Route exact path="/contactme" component={Home} />
          </Switch>
        </AnimatePresence>
      </div>
      {/* <Background /> */}
    </React.Fragment>
  );
};

export default App;
