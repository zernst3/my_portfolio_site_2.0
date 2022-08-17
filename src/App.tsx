import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AllRoutes from "./Routes";

const App: React.FC<any> = () => {
  return (
    <React.Fragment>
      <div id="App">
        <AllRoutes />
      </div>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </React.Fragment>
  );
};

export default App;
