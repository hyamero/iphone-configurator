import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  Loader,
  Html,
} from "@react-three/drei";

import Iphone from "./components/Iphone";
import { Buttons } from "./components/Buttons";
import { Lights } from "./components/three/Lights";

function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera makeDefault fov={55} position={[0, 0, 4]}>
          <Lights />
        </PerspectiveCamera>
        <Suspense fallback={null}>
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
          <Html
            style={{
              transition: "all 0.2s",
              opacity: visible ? 0 : 1,
              transform: `scale(${visible ? 0.5 : 1})`,
            }}
            position={[0, 0, 0.3]}
            rotation={[0, 0.4, 0]}
            distanceFactor={1.5}
            transform
            occlude
            onOcclude={setVisible as ((visible: boolean) => null) | undefined}
          >
            <Buttons />
          </Html>
        </Suspense>
        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
