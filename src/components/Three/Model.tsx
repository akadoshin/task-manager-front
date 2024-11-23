import React, { useEffect } from "react";
import * as THREE from "three";

// import { useTheme } from "next-themes";

import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GLTFResult = any & {
  nodes: {
    Cube: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
  };
  materials: {
    board: THREE.MeshStandardMaterial;
    checkbox: THREE.MeshStandardMaterial;
    text: THREE.MeshStandardMaterial;
    paper: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/task_board.glb") as GLTFResult;

  const springs = [
    useSpring({
      from: { scale: [0, 0, 0] },
      to: { scale: [1, 1, 1] },
      delay: 0,
      config: { tension: 150, friction: 14 },
    }),
    useSpring({
      from: { scale: [0, 0, 0] },
      to: { scale: [1, 1, 1] },
      delay: 500,
      config: { tension: 150, friction: 14 },
    }),
    useSpring({
      from: { scale: [0, 0, 0] },
      to: { scale: [1, 1, 1] },
      delay: 1000,
      config: { tension: 150, friction: 14 },
    }),
  ];
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (materials.board && "color" in materials.board && isDarkMode) {
      materials.board.color.set("#5BA9F2");
    }
    materials.checkbox.color.set("#46B78F");
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.board}
        position={[0.08914, 0.33369, 0.1331]}
        rotation={[-0.31832, 0.74563, 0.7254]}
      />
      <animated.group scale={springs[0].scale as any}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.checkbox}
          position={[0.1359, 1.21276, 0.43981]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.text}
          position={[-0.2901, 1.12806, 0.0532]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.text}
          position={[-0.30574, 0.9875, -0.05529]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[1.1448, 1.1448, 1.64459]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.paper}
          position={[0.17359, 1.23708, 0.4278]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[0.13317, 0.10445, 0.10445]}
        />
      </animated.group>
      <animated.group scale={springs[1].scale as any}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.checkbox}
          position={[0.39339, 0.76291, 0.33768]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.text}
          position={[-0.03261, 0.67821, -0.04892]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.text}
          position={[-0.04825, 0.53765, -0.15741]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[1.1448, 1.1448, 1.64459]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials.paper}
          position={[0.43108, 0.78723, 0.32568]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[0.13317, 0.10445, 0.10445]}
        />
      </animated.group>
      <animated.group scale={springs[2].scale as any}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.checkbox}
          position={[0.64234, 0.32797, 0.23894]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.text}
          position={[0.21635, 0.24327, -0.14766]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={1.1448}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.text}
          position={[0.20071, 0.10271, -0.25615]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[1.1448, 1.1448, 1.64459]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.paper}
          position={[0.68003, 0.3523, 0.22694]}
          rotation={[-0.31832, 0.74563, 0.7254]}
          scale={[0.13317, 0.10445, 0.10445]}
        />
      </animated.group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.paper}
        position={[0.10235, 0.51984, 0.04521]}
        rotation={[-0.31832, 0.74563, 0.7254]}
        scale={[0.80322, 0.76327, 0.82944]}
      />
    </group>
  );
}

useGLTF.preload("/task_board.glb");
