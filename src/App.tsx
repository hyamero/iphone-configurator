import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  Loader,
  Stats,
  PerspectiveCamera,
} from "@react-three/drei";

import Iphone, { Picker } from "./components/Iphone";
import { Lights } from "./components/three/Lights";

function App() {
  return (
    <>
      <Canvas shadows>
        <Lights />
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Environment preset="city" background={false} />
          <group>
            <Iphone />
            <mesh
              receiveShadow
              rotation-x={-Math.PI / 2}
              position={[0, -1.48, 0]}
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial transparent color="black" opacity={0.4} />
            </mesh>
          </group>
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          makeDefault
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
          enableZoom={false}
          enablePan={false}
        />
        <Stats />
        <PerspectiveCamera makeDefault fov={55} position={[0, 0, 4]}>
          <spotLight
            position={[5, 10, 5]}
            angle={0.15}
            penumbra={1}
            intensity={10}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
        </PerspectiveCamera>
      </Canvas>
      <div className="absolute top-24 left-24">
        <Picker />
      </div>
    </>
  );
}

export default App;
