import React, { useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "drei";
import "./Background.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Skybox = (props: any) => {
  const { setIsLoaded } = props;
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/background/posx.webp",
    "/background/negx.webp",
    "/background/posy.webp",
    "/background/negy.webp",
    "/background/posz.webp",
    "/background/negz.webp",
  ]);

  scene.background = texture;
  setIsLoaded(true);
  return null;
};

export const Background = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div id="Background">
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <Skybox setIsLoaded={setIsLoaded} />
          <OrbitControls autoRotate={true} autoRotateSpeed={1} />
        </Canvas>
      </div>
      {!isLoaded && (
        <div id="Loading">
          <Loader
            type="ThreeDots"
            color="#F0F0F0"
            height={100}
            width={100}
            timeout={25000}
          />
          <h1>Loading</h1>
          <Loader
            type="ThreeDots"
            color="#F0F0F0"
            height={100}
            width={100}
            timeout={25000}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Background;
