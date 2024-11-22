/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from "react";

import { Group } from "three";
import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

useGLTF.preload("/Book.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/Book.glb");
  //   const { actions } = useAnimations(animations, scene);
  //   const scroll = useScroll();

  //   useEffect(() => {
  //     console.log(actions);
  //     //@ts-ignore
  //     actions["Experiment"].play().paused = true;
  //   }, []);
  //   useFrame(
  //     () =>
  //       //@ts-ignore
  //       (actions["Experiment"].time =
  //         //@ts-ignore
  //         (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  //   );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
