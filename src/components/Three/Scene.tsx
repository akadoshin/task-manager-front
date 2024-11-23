import { Suspense, useEffect, useRef } from "react";

import { Mesh } from "three";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";

import Model from "./Model";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = event;

      if (beta === null || gamma === null || alpha === null) return;

      // meshRef.current.rotation.y = -2.8 + gamma * (Math.PI / 360);
      // meshRef.current.rotation.x = 0.26 + beta * (Math.PI / 360);
      const alphaRad = alpha * (Math.PI / 180);
      const betaRad = beta * (Math.PI / 180);
      const gammaRad = gamma * (Math.PI / 180);

      meshRef.current.rotation.set(-1.6 + betaRad, -2.8 + gammaRad, alphaRad);
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
    <mesh
      {...props}
      ref={meshRef}
      scale={1.4}
      rotation={[0.3, -2.8, -0.2]}
      position={[0, 0.05, 0.5]}
    >
      <OrbitControls
        enableZoom={false}
        // autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.4}
      />
      <Model />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="h-[50vh] w-full absolute top-4">
      <Canvas
        linear
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={Math.PI / 0.85} />
        <spotLight
          position={[-25, 45, 5]}
          angle={0.4}
          penumbra={1}
          decay={0.5}
          intensity={Math.PI * 2.5}
        />

        <Environment preset="dawn" />

        <Suspense fallback={<Loader />}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}
