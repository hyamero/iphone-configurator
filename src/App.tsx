import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  Loader,
  Stats,
} from "@react-three/drei";

import Iphone, { Picker } from "./components/Iphone";
import { Lights } from "./components/three/Lights";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [-8, 3, 12], fov: 15, near: 1, far: 50 }}
      >
        <color attach="background" args={["#fff"]} />
        <Lights />
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
      <div className="absolute top-24 left-24">
        <Picker />
      </div>
    </>
  );
}

export default App;
