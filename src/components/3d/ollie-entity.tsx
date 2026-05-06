"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function OllieEntity() {
  const groupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const smileRef = useRef<THREE.Mesh>(null);

  // Materials with high emissive values for the Bloom pass to catch
  const materials = useMemo(() => {
    // Ollie's eyes are glowing cyan/blue
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: "#0ea5e9", // Sky 500
      emissive: "#0284c7", // Sky 600
      emissiveIntensity: 4, // High intensity for bloom
      roughness: 0.1,
      metalness: 0.8,
    });

    // The smile is a menacing glowing white/cyan
    const smileMaterial = new THREE.MeshStandardMaterial({
      color: "#e0f2fe", // Sky 100
      emissive: "#bae6fd", // Sky 200
      emissiveIntensity: 2,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9,
    });

    return { eyeMaterial, smileMaterial };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Floating motion (idle bobbing)
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.5 + 4; // High up in the background
    groupRef.current.position.x = Math.sin(t * 0.2) * 2;

    // The eyes blink randomly
    const blink = Math.random() > 0.99 ? 0.05 : 1;
    if (leftEyeRef.current && rightEyeRef.current) {
      // Scale Y down to blink
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, blink, 0.2);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, blink, 0.2);
    }
  });

  return (
    <group ref={groupRef} position={[0, 4, -12]} scale={1.5}>
      {/* Postprocessing handles the fog/gloom, so we just render the bright elements */}
      
      {/* Left Eye */}
      <mesh ref={leftEyeRef} position={[-1.2, 1, 0]} material={materials.eyeMaterial}>
        <sphereGeometry args={[0.35, 32, 32]} />
      </mesh>

      {/* Right Eye */}
      <mesh ref={rightEyeRef} position={[1.2, 1, 0]} material={materials.eyeMaterial}>
        <sphereGeometry args={[0.35, 32, 32]} />
      </mesh>

      {/* The Cheshire Smile */}
      <mesh ref={smileRef} position={[0, -0.5, 0.2]} material={materials.smileMaterial} rotation={[Math.PI * 0.1, 0, 0]}>
        {/* A simple curved tube for the grin */}
        <torusGeometry args={[1.5, 0.15, 16, 64, Math.PI * 0.6]} />
        {/* Rotate the torus so it looks like a smile (opening upwards) */}
        <group rotation={[0, 0, Math.PI]} />
      </mesh>
    </group>
  );
}
