import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";
import { Navbar } from "./components";

const App: React.FC<any> = () => {
  const [vantaEffect, setVantaEffect]: any = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          backgroundAlpha: 0,
          highlightColor: 0x55aa87,
          midtoneColor: 0x6b05,
          lowlightColor: 0x3d8c,
          baseColor: 0x162a16,
          blurFactor: 0.5,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x406940,
          cloudColor: 0x576b52,
          cloudShadowColor: 0xe9faf,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <React.Fragment>
      <div className="App" ref={myRef}>
        <CssBaseline />
        <Navbar />
        <Routes />
      </div>
      <div className="clouds" ref={myRef}></div>
    </React.Fragment>
  );
};

export default App;
