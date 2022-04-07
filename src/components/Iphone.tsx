/*
MODEL
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
title: Apple iPhone 13 Pro Max
*/

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";

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

interface StateTypes {
  current: string | null | undefined;
  items: {
    camera: string;
    body: string;
    logo: string;
    frame: string;
  };
}

const state: StateTypes = proxy({
  current: null,
  items: {
    camera: "#00ff00",
    body: "#ff0000",
    logo: "#0000ff",
    frame: "#ff0000",
  },
});

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/iphone.gltf") as GLTFResult;
  const snap = useSnapshot(state);

  const [hovered, set] = useState<any>("");
  // @ts-ignore
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${
      snap.items[hovered as keyof typeof snap.items]
    }"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            castShadow
            receiveShadow
            scale={300}
            onPointerOver={(e) => (
              e.stopPropagation(), set(e.object.parent?.name)
            )}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => (
              e.stopPropagation(),
              (state.current = e.object.parent?.name),
              console.log(state.current)
            )}
          >
            {/**
             * Body
             */}
            <group name="body">
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
                material-color={snap.items.body}
                name="body"
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
                geometry={nodes.Body001_Screen_Glass_0.geometry}
                material={materials.Screen_Glass}
              />
            </group>
            {/**
             * Logo
             */}
            <group name="logo">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Apple_Logo_Logo_0.geometry}
                material={materials.Logo}
                material-color={snap.items.logo}
                position-z={0.001}
                name="logo"
              />
            </group>
            {/**
             * Camera
             */}
            <group name="camera">
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
                material-color={snap.items.camera}
                name="camera"
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
            </group>
            {/**
             * Frame
             */}
            <group name="frame">
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
                geometry={nodes.Frame_Frame_0.geometry}
                material={nodes.Frame_Frame_0.material}
                material-color={snap.items.frame}
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
    </group>
  );
}

useGLTF.preload("/iphone.gltf");

export const Picker = () => {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker
        className="h-[90px] w-[90px]"
        color={snap.items[snap.current as keyof typeof snap.items]}
        onChange={(color) =>
          (state.items[snap.current as keyof typeof snap.items] = color)
        }
      />
      <h1>{snap.current}</h1>
    </div>
  );
};
