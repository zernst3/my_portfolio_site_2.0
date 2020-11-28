import React from "react";
import { Canvas, useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "drei";
import "./Background.css";

const Skybox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/background/posx.jpg",
    "/background/negx.jpg",
    "/background/posy.jpg",
    "/background/negy.jpg",
    "/background/posz.jpg",
    "/background/negz.jpg",
  ]);

  scene.background = texture;
  return null;
};

export const Background = () => {
  return (
    <div id="Background">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Skybox />
        <OrbitControls autoRotate={true} autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Background;
