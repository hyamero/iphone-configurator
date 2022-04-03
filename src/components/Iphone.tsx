/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
title: Apple iPhone 13 Pro Max
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, Bounds } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Body_Mic_0: THREE.Mesh;
    Body_Bezel_0: THREE.Mesh;
    Body_Body_0: THREE.Mesh;
    Body_Wallpaper_0: THREE.Mesh;
    Body_Camera_Glass_0: THREE.Mesh;
    Body_Lens_0: THREE.Mesh;
    Body_Material_0: THREE.Mesh;
    Camera_Body_0: THREE.Mesh;
    Camera_Glass_0: THREE.Mesh;
    Camera_Camera_Frame001_0: THREE.Mesh;
    Camera_Mic_0: THREE.Mesh;
    Body001_Screen_Glass_0: THREE.Mesh;
    Button_Frame_0: THREE.Mesh;
    Circle003_Frame_0: THREE.Mesh;
    Apple_Logo_Logo_0: THREE.Mesh;
    Camera001_Body_0: THREE.Mesh;
    Camera001_Gray_Glass_0: THREE.Mesh;
    Camera001_Flash_0: THREE.Mesh;
    Camera001_Port_0: THREE.Mesh;
    Camera001_Camera_Frame_0: THREE.Mesh;
    Camera001_Camera_Glass_0: THREE.Mesh;
    Camera001_Lens_0: THREE.Mesh;
    Camera001_Black_Glass_0: THREE.Mesh;
    Camera003_Material002_0: THREE.Mesh;
    Frame_Frame_0: THREE.Mesh;
    Frame_Frame2_0: THREE.Mesh;
    Frame_Port_0: THREE.Mesh;
    Frame_Antenna_0: THREE.Mesh;
    Frame_Mic_0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    Wallpaper: THREE.MeshStandardMaterial;
    Camera_Glass: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Camera_Frame.001"]: THREE.MeshStandardMaterial;
    Screen_Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Logo: THREE.MeshStandardMaterial;
    Gray_Glass: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
    Camera_Frame: THREE.MeshStandardMaterial;
    Black_Glass: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    Frame2: THREE.MeshStandardMaterial;
    Antenna: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/iphone.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={300}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Mic_0.geometry}
              material={nodes.Body_Mic_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Body_0.geometry}
              material={nodes.Body_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Camera_Glass_0.geometry}
              material={nodes.Body_Camera_Glass_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Lens_0.geometry}
              material={nodes.Body_Lens_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Body_0.geometry}
              material={nodes.Camera_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera_Mic_0.geometry}
              material={nodes.Camera_Mic_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body001_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Button_Frame_0.geometry}
              material={nodes.Button_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle003_Frame_0.geometry}
              material={nodes.Circle003_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
              position-z={0.001}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Body_0.geometry}
              material={nodes.Camera001_Body_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Port_0.geometry}
              material={nodes.Camera001_Port_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Camera_Glass_0.geometry}
              material={nodes.Camera001_Camera_Glass_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Lens_0.geometry}
              material={nodes.Camera001_Lens_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera001_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame_0.geometry}
              material={nodes.Frame_Frame_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Port_0.geometry}
              material={nodes.Frame_Port_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Frame_Mic_0.geometry}
              material={nodes.Frame_Mic_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone.gltf");
