"use client";

import { Suspense, useEffect, useRef } from "react";

import { Mesh } from "three";
import { Canvas, ThreeElements } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = event;

      if (beta === null || gamma === null || alpha === null) return;

      // meshRef.current.rotation.y = -2.8 + gamma * (Math.PI / 360);
      // meshRef.current.rotation.x = 0.26 + beta * (Math.PI / 360);
      // Convierte de grados a radianes
      const alphaRad = alpha * (Math.PI / 180);
      const betaRad = beta * (Math.PI / 180);
      const gammaRad = gamma * (Math.PI / 180);

      // Aplica las rotaciones con ajustes para el eje inicial
      meshRef.current.rotation.set(
        -1.6 + betaRad, // Rotación en el eje X
        -2.8 + gammaRad, // Rotación en el eje Y
        alphaRad // Rotación en el eje Z
      );
      console.log(meshRef.current.rotation);
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    } else {
      console.warn(
        "DeviceOrientationEvent no está disponible en este dispositivo."
      );
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <mesh {...props} ref={meshRef} scale={1.6} rotation={[0.26, -2.8, 0]}>
      <Model />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="h-96 w-full absolute top-14">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.5}
          penumbra={1}
          decay={0.35}
          intensity={Math.PI * 1.2}
        />

        {/* <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}

        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}
