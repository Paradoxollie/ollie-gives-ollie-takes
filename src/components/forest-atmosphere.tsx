"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { DoubleSide, Group, MathUtils } from "three";

function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    camera.position.x = Math.sin(elapsed * 0.14) * 0.42;
    camera.position.y = 0.2 + Math.cos(elapsed * 0.11) * 0.18;
    camera.lookAt(0, -0.2, 0);
  });

  return null;
}

function SpiritMoon() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z += delta * 0.01;
    groupRef.current.position.y = 2.6 + Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 2.6, -6]}>
      <mesh scale={[3.4, 3.4, 1]}>
        <circleGeometry args={[1, 48]} />
        <meshBasicMaterial color="#dcfdfc" transparent opacity={0.15} />
      </mesh>
      <mesh scale={[5.8, 5.8, 1]}>
        <ringGeometry args={[0.76, 1, 64]} />
        <meshBasicMaterial color="#8cf0e5" transparent opacity={0.08} />
      </mesh>
      <mesh scale={[7.2, 7.2, 1]}>
        <ringGeometry args={[0.82, 0.96, 64]} />
        <meshBasicMaterial color="#d8b4fe" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

function MistBands() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.18;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, -3.8]}>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2.8, 0, 0]} scale={[10.5, 3.2, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.06} side={DoubleSide} />
      </mesh>
      <mesh position={[0.8, -0.5, -0.3]} rotation={[-Math.PI / 2.9, 0.1, 0]} scale={[9.2, 2.4, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#d8b4fe" transparent opacity={0.05} side={DoubleSide} />
      </mesh>
    </group>
  );
}

function ForestSilhouettes() {
  const groupRef = useRef<Group>(null);
  const silhouettes = useMemo(
    () => [
      { x: -6.4, y: -2.4, z: -5.3, trunk: 2.6, crown: 1.8, color: "#07121f" },
      { x: -5.1, y: -2.35, z: -4.8, trunk: 2.2, crown: 1.4, color: "#091927" },
      { x: -3.8, y: -2.28, z: -4.2, trunk: 2.0, crown: 1.55, color: "#0a1d2d" },
      { x: 3.7, y: -2.32, z: -4.3, trunk: 2.1, crown: 1.55, color: "#0b1a29" },
      { x: 5.1, y: -2.38, z: -4.9, trunk: 2.35, crown: 1.45, color: "#091623" },
      { x: 6.5, y: -2.46, z: -5.5, trunk: 2.7, crown: 1.85, color: "#07111c" },
    ],
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.09) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {silhouettes.map((silhouette) => (
        <group key={`${silhouette.x}-${silhouette.z}`} position={[silhouette.x, silhouette.y, silhouette.z]}>
          <mesh position={[0, silhouette.trunk * 0.5, 0]} scale={[0.18, silhouette.trunk, 0.18]}>
            <cylinderGeometry args={[1, 1, 1, 10]} />
            <meshStandardMaterial color="#07101a" roughness={0.95} />
          </mesh>
          <mesh
            position={[0, silhouette.trunk + silhouette.crown * 0.42, 0]}
            scale={[silhouette.crown, silhouette.crown * 1.6, silhouette.crown]}
          >
            <coneGeometry args={[1, 1, 10]} />
            <meshStandardMaterial color={silhouette.color} roughness={1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DriftCluster() {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(
    () => [
      { position: [-4.2, 1.4, -2.2] as const, scale: 1.45, color: "#6ee7b7" },
      { position: [3.4, 2.1, -1.6] as const, scale: 1.1, color: "#c084fc" },
      { position: [-1.1, -1.9, -1.2] as const, scale: 1.7, color: "#67e8f9" },
      { position: [4.2, -1.2, -2.6] as const, scale: 1.2, color: "#7dd3fc" },
    ],
    [],
  );

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z += delta * 0.03;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.16) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <Float key={`${node.position[0]}-${node.position[1]}`} speed={1.1} rotationIntensity={0.08} floatIntensity={0.3}>
          <mesh position={node.position} scale={node.scale}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={1.5} transparent opacity={0.12} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function PedestalMonument() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z = MathUtils.lerp(groupRef.current.rotation.z, Math.sin(state.clock.elapsedTime * 0.1) * 0.02, delta * 2);
  });

  return (
    <group ref={groupRef} position={[0, -2.2, -1.8]}>
      <mesh position={[0, 0.15, 0]} rotation={[-0.3, 0, 0]} scale={[4.4, 1.2, 2.8]}>
        <cylinderGeometry args={[1, 1.16, 1, 28]} />
        <meshStandardMaterial color="#132338" roughness={0.5} metalness={0.18} />
      </mesh>
      <mesh position={[0, 0.7, 0.2]} rotation={[-0.35, 0, 0]} scale={[3.5, 0.36, 2.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1c3450" roughness={0.45} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.82, 0.25]} rotation={[-1.24, 0, 0]} scale={[3.8, 3.8, 1]}>
        <ringGeometry args={[0.68, 0.94, 64]} />
        <meshBasicMaterial color="#8cf0e5" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0, 0.86, 0.28]} rotation={[-1.24, 0, 0]} scale={[5.2, 5.2, 1]}>
        <ringGeometry args={[0.78, 0.9, 64]} />
        <meshBasicMaterial color="#d8b4fe" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

function RuneBands() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -1.8, -3.5]}>
      <mesh rotation={[-1.2, 0, 0]} scale={[8.4, 8.4, 1]}>
        <ringGeometry args={[0.8, 1, 64]} />
        <meshBasicMaterial color="#8cf0e5" transparent opacity={0.1} />
      </mesh>
      <mesh rotation={[-1.2, 0, 0]} scale={[12.8, 12.8, 1]}>
        <ringGeometry args={[0.78, 0.92, 64]} />
        <meshBasicMaterial color="#d6bcfa" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export function ForestAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
      <Canvas camera={{ position: [0, 0.2, 9], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <color attach="background" args={["#050b16"]} />
        <fog attach="fog" args={["#050b16", 7, 18]} />
        <CameraRig />
        <ambientLight intensity={0.6} color="#dffeff" />
        <hemisphereLight intensity={0.5} color="#ddfff8" groundColor="#050b16" />
        <pointLight position={[0, 3.7, 4]} intensity={18} distance={18} color="#79ffe1" />
        <pointLight position={[-5, -2, 3]} intensity={11} distance={16} color="#d7b4ff" />
        <spotLight position={[2.8, 5, 4]} angle={0.42} penumbra={0.8} intensity={22} distance={18} color="#a5f3fc" />
        <Sparkles count={52} speed={0.25} size={2.8} scale={[15, 8, 7]} color="#dffdfc" opacity={0.42} />
        <Sparkles count={28} speed={0.18} size={4.5} scale={[13, 6, 4]} color="#8cf3dd" opacity={0.2} />
        <Sparkles count={18} speed={0.1} size={5.8} scale={[10, 4, 3]} color="#d8b4fe" opacity={0.14} />
        <SpiritMoon />
        <MistBands />
        <ForestSilhouettes />
        <PedestalMonument />
        <DriftCluster />
        <RuneBands />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(217,255,250,0.12),rgba(217,255,250,0)_24%),radial-gradient(circle_at_top,rgba(177,255,239,0.08),rgba(177,255,239,0)_32%),radial-gradient(circle_at_80%_20%,rgba(214,188,250,0.08),rgba(214,188,250,0)_28%)]" />
    </div>
  );
}
