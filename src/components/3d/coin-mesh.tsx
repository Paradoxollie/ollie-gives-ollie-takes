"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface CoinMeshProps {
  result: "sun" | "moon";
  onLanded?: () => void;
}

function SunSigil() {
  return (
    <group>
      <mesh>
        <circleGeometry args={[0.34, 32]} />
        <meshStandardMaterial color="#ffd36a" emissive="#f59e0b" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0.43, 0.56, 32]} />
        <meshStandardMaterial color="#92400e" emissive="#78350f" emissiveIntensity={0.08} />
      </mesh>
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 0.68, Math.sin(angle) * 0.68, 0.01]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.12, 0.34, 0.04]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.12} />
          </mesh>
        );
      })}
    </group>
  );
}

function MoonSigil() {
  return (
    <group>
      <mesh>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial color="#dbeafe" emissive="#93c5fd" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0.16, 0.04, 0.03]}>
        <circleGeometry args={[0.48, 32]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[-0.3, 0.28, 0.04]}>
        <circleGeometry args={[0.07, 18]} />
        <meshBasicMaterial color="#eff6ff" />
      </mesh>
    </group>
  );
}

export function CoinMesh({ result, onLanded }: CoinMeshProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [time, setTime] = useState(0);

  const duration = 1.6;

  useFrame((_, delta) => {
    setTime((current) => Math.min(current + delta, duration));

    if (!meshRef.current) {
      return;
    }

    const progress = Math.min(time / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const revolutions = 5;
    const targetRotation = result === "moon" ? Math.PI : 0;
    const totalRotation = revolutions * Math.PI * 2 + targetRotation;

    meshRef.current.rotation.x = easeOut * totalRotation;

    const arc = Math.sin(progress * Math.PI);
    meshRef.current.position.z = arc * 4;
    meshRef.current.position.y = arc * 2;

    if (progress >= 1 && onLanded) {
      onLanded();
    }
  });

  return (
    <group ref={meshRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.2, 48]} />
        <meshStandardMaterial attach="material-0" color="#8b5f0a" metalness={0.82} roughness={0.42} />
        <meshStandardMaterial attach="material-1" color="#fcd34d" metalness={0.92} roughness={0.18} />
        <meshStandardMaterial attach="material-2" color="#cbd5e1" metalness={0.88} roughness={0.24} />
      </mesh>

      <group position={[0, 0, 0.11]}>
        <SunSigil />
      </group>

      <group position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]}>
        <MoonSigil />
      </group>
    </group>
  );
}
