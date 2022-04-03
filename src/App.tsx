import { Suspense, useRef } from "react";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  Loader,
  Stats,
} from "@react-three/drei";

import Iphone from "./components/Iphone";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [-8, 3, 12], fov: 15, near: 1, far: 50 }}
    >
      <ambientLight intensity={2} />
      <color attach="background" args={["#fff"]} />
      <directionalLight position={[-10, 0, -15]} intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={0.2} />
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Environment preset="studio" background={false} />
        <Iphone />
      </Suspense>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <Stats />
    </Canvas>
  );
}

export default App;
