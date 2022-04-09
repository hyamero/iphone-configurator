import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  Loader,
  Stats,
  PerspectiveCamera,
} from "@react-three/drei";

import Iphone from "./components/Iphone";
import { Lights } from "./components/three/Lights";
import { Buttons } from "./components/Buttons";

function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Canvas shadows>
      <Lights />
      <Html
        style={{
          transition: "all 0.2s",
          opacity: visible ? 0 : 1,
          transform: `scale(${visible ? 0.5 : 1})`,
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.3]}
        transform
        occlude
        onOcclude={setVisible as ((visible: boolean) => null) | undefined}
      >
        <Buttons />
      </Html>
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
      <Stats />
      <OrbitControls
        autoRotateSpeed={1}
        makeDefault
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

export default App;
