import React, { useRef, useEffect } from "react";

import dragonScene from "../assets/3d/dragon.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Dragon = () => {
  const dragonRef = useRef(null);
  const { scene, animations } = useGLTF(dragonScene);
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    actions["run"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 1 + 3;

    if (dragonRef.current.position.z > camera.position.z - 1) {
      dragonRef.current.rotation.y = Math.PI;
    } else if (dragonRef.current.position.z < -40) {
      dragonRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (dragonRef.current.rotation.y === 0) {
      // Moving forward
      dragonRef.current.position.z += 0.015;
    } else {
      // Moving backward
      dragonRef.current.position.z -= 0.015;
    }
  });

  return (
    <mesh position={[25, -8, -40]} scale={[1, 1, 1]} ref={dragonRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;
