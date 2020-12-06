import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

const App: React.FC<any> = () => {
  const [vantaEffect, setVantaEffect]: any = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          backgroundAlpha: 0,
          highlightColor: 0x55aa87,
          midtoneColor: 0x6b05,
          lowlightColor: 0x3d8c,
          baseColor: 0x162a16,
          blurFactor: 0.5,
          gyroControls: true,
          mouseControls: true,
          touchControls: true,
          zoom: 0.4,
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
        <Routes />
      </div>
      <div className="clouds" ref={myRef}></div>
    </React.Fragment>
  );
};

export default App;
