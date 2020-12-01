import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

const App: React.FC<any> = () => {
  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />

        <Routes />
      </div>
    </React.Fragment>
  );
};

export default App;
