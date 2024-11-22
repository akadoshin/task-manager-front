"use client";

import { Suspense, useRef } from "react";

import { Mesh } from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

import Model from "./Model";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    state.camera.position.x += Math.sin(state.clock.getElapsedTime()) * delta / 4;
    state.camera.position.y += Math.sin(state.clock.getElapsedTime()) * delta / 4;
    
    state.camera.lookAt(meshRef.current.position);
  });

  return (
    <mesh {...props} ref={meshRef} scale={4.5}>
      <Model />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="relative h-96">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Suspense fallback={null}>
          <Box rotation={[1.6, -0.1, 1]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
