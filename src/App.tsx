import { Suspense } from "react";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import Iphone from "./components/Iphone";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 15 }}>
      <Suspense fallback={null}>
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
    </Canvas>
  );
}

export default App;
