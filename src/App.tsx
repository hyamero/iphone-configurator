import { Suspense, useRef } from "react";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  Loader,
  Stats,
  MeshReflectorMaterial,
  Stage,
} from "@react-three/drei";

import Iphone from "./components/Iphone";

function App() {
  return (
    <Canvas camera={{ fov: 60 }}>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      <ambientLight intensity={0.5} />

      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        {/* <Environment preset="studio" background={false} /> */}
        <Environment
          background={false}
          path={`envCube/`}
          files={[`px.png`, `nx.png`, `py.png`, `ny.png`, `pz.png`, `nz.png`]}
        />
        <Stage
          environment={null}
          intensity={1}
          contactShadow={false}
          shadowBias={-0.0015}
        >
          <Iphone />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.0009, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
            mirror={1}
          />
        </mesh>
      </Suspense>
      <OrbitControls
        makeDefault
        autoRotate
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
