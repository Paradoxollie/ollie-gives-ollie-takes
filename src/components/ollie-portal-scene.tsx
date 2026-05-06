"use client";

import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, MathUtils } from "three";

function CameraDrift() {
  const { camera } = useThree();

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    camera.position.x = Math.sin(elapsed * 0.16) * 0.34;
    camera.position.y = 2.8 + Math.cos(elapsed * 0.14) * 0.16;
    camera.position.z = 8.4 + Math.sin(elapsed * 0.1) * 0.12;
    camera.lookAt(0, 0.45, 0);
  });

  return null;
}

/* Dark mystical forest clearing instead of a room */
function ForestClearing() {
  return (
    <group position={[0, -0.85, -3.4]}>
      {/* Forest floor - dark moss */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow scale={[18, 18, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#061210" roughness={0.95} />
      </mesh>

      {/* Background tree wall */}
      <mesh position={[0, 2.4, -4.8]} receiveShadow scale={[16, 8, 0.4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#041410" roughness={1} />
      </mesh>

      {/* Left forest edge */}
      <mesh position={[-6.4, 1.6, -2.2]} rotation={[0, Math.PI / 8, 0]} scale={[0.6, 5.4, 10]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#031210" roughness={1} />
      </mesh>

      {/* Right forest edge */}
      <mesh position={[6.4, 1.6, -2.2]} rotation={[0, -Math.PI / 8, 0]} scale={[0.6, 5.4, 10]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#041412" roughness={1} />
      </mesh>

      {/* Spirit tree glow in background */}
      <mesh position={[0, 2.2, -4.55]} scale={[3.6, 2.4, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0a2428" emissive="#4fc3f7" emissiveIntensity={0.35} roughness={0.4} metalness={0.08} />
      </mesh>

      {/* Bioluminescent mushroom clusters */}
      {[[-3.8, -1.5, -1.2], [4.2, -1.5, -0.8], [-2.1, -1.5, 1.6], [3.4, -1.5, 2.0]].map(([x, y, z], i) => (
        <mesh key={`mushroom-${i}`} position={[x, y, z]} scale={[0.15, 0.2, 0.15]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#0a1a18"
            emissive={i % 2 === 0 ? "#69f0ae" : "#4fc3f7"}
            emissiveIntensity={0.6}
            roughness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function SpiritAltar() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(elapsed * 0.18) * 0.05;
    groupRef.current.position.y = Math.sin(elapsed * 0.32) * 0.06;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Stone altar base - ancient, moss-covered */}
      <mesh position={[0, -1.15, 0]} castShadow receiveShadow scale={[5.8, 0.42, 3.8]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0c1a18" roughness={0.88} metalness={0.04} />
      </mesh>

      {/* Spirit-infused surface */}
      <mesh position={[0, -0.62, 0.15]} rotation={[-0.16, 0, 0]} castShadow receiveShadow scale={[4.4, 0.24, 3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0a2024" roughness={0.5} metalness={0.12} emissive="#1a4a5a" emissiveIntensity={0.15} />
      </mesh>

      {/* Glowing game board surface */}
      <mesh position={[0, -0.5, 0.24]} rotation={[-0.17, 0, 0]} scale={[4.08, 0.05, 2.72]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#061820" roughness={0.2} metalness={0.3} emissive="#4fc3f7" emissiveIntensity={0.3} />
      </mesh>

      {/* Spirit energy rings */}
      <mesh position={[0, -0.44, 0.3]} rotation={[-1.36, 0, 0]} scale={[4.6, 4.6, 1]}>
        <ringGeometry args={[0.56, 0.74, 72]} />
        <meshBasicMaterial color="#4fc3f7" transparent opacity={0.2} />
      </mesh>

      <mesh position={[0, -0.42, 0.31]} rotation={[-1.36, 0, 0]} scale={[6.2, 6.2, 1]}>
        <ringGeometry args={[0.72, 0.78, 72]} />
        <meshBasicMaterial color="#69f0ae" transparent opacity={0.12} />
      </mesh>

      {/* Floating spirit cards */}
      {[-1.35, -0.45, 0.45, 1.35].map((x, index) => (
        <Float key={x} speed={1 + index * 0.08} rotationIntensity={0.06} floatIntensity={0.12}>
          <mesh position={[x, -0.02 + index * 0.04, 0.9 - index * 0.18]} rotation={[-0.8, 0.18 * (index - 1.5), 0.08]} castShadow>
            <boxGeometry args={[0.72, 1.02, 0.06]} />
            <meshStandardMaterial
              color="#0a1a22"
              roughness={0.2}
              metalness={0.08}
              emissive={index % 2 === 0 ? "#4fc3f7" : "#69f0ae"}
              emissiveIntensity={0.15}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function OllieSpirit() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    groupRef.current.position.y = 1.38 + Math.sin(elapsed * 1.1) * 0.14;
    groupRef.current.rotation.y = Math.sin(elapsed * 0.5) * 0.18;
  });

  return (
    <group ref={groupRef} position={[2.7, 1.38, 1.2]}>
      {/* Body - jet black chihuahua */}
      <mesh castShadow position={[0, 0, 0]} scale={[0.95, 0.78, 1.08]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0a0c10" roughness={0.32} metalness={0.24} emissive="#060810" emissiveIntensity={0.3} />
      </mesh>

      {/* Ears */}
      <mesh castShadow position={[-0.52, 0.66, -0.08]} rotation={[0, 0, 0.34]} scale={[0.36, 0.8, 0.18]}>
        <coneGeometry args={[1, 1, 18]} />
        <meshStandardMaterial color="#080a0e" roughness={0.3} metalness={0.18} />
      </mesh>
      <mesh castShadow position={[0.52, 0.66, -0.08]} rotation={[0, 0, -0.34]} scale={[0.36, 0.8, 0.18]}>
        <coneGeometry args={[1, 1, 18]} />
        <meshStandardMaterial color="#080a0e" roughness={0.3} metalness={0.18} />
      </mesh>

      {/* Eye sockets */}
      <mesh position={[-0.28, 0.12, 0.86]} scale={[0.2, 0.2, 0.12]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#04060a" emissive="#04060a" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.28, 0.12, 0.86]} scale={[0.2, 0.2, 0.12]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#04060a" emissive="#04060a" emissiveIntensity={0.2} />
      </mesh>

      {/* Glowing spirit eyes - cyan like Ori */}
      <mesh position={[-0.28, 0.14, 0.96]} scale={[0.09, 0.09, 0.09]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshBasicMaterial color="#7df7ff" />
      </mesh>
      <mesh position={[0.28, 0.14, 0.96]} scale={[0.09, 0.09, 0.09]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshBasicMaterial color="#7df7ff" />
      </mesh>

      {/* Eye glow auras */}
      <pointLight position={[-0.28, 0.14, 1.1]} intensity={2} distance={2} color="#7df7ff" />
      <pointLight position={[0.28, 0.14, 1.1]} intensity={2} distance={2} color="#7df7ff" />

      {/* Nose - pink */}
      <mesh position={[0, -0.2, 1.02]} scale={[0.1, 0.08, 0.16]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshBasicMaterial color="#f4bfd1" />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.7, -0.12]} rotation={[Math.PI / 2.4, 0, 0]} scale={[0.64, 0.44, 0.86]}>
        <capsuleGeometry args={[0.54, 0.5, 8, 16]} />
        <meshStandardMaterial color="#0a0c10" roughness={0.36} metalness={0.2} emissive="#060810" emissiveIntensity={0.2} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.7, -0.96, 0.1]} rotation={[0.2, 0, 0.24]} scale={[0.12, 0.72, 0.12]}>
        <capsuleGeometry args={[1, 1, 8, 12]} />
        <meshStandardMaterial color="#0a0c10" roughness={0.38} />
      </mesh>
      <mesh position={[0.7, -0.96, 0.1]} rotation={[0.2, 0, -0.24]} scale={[0.12, 0.72, 0.12]}>
        <capsuleGeometry args={[1, 1, 8, 12]} />
        <meshStandardMaterial color="#0a0c10" roughness={0.38} />
      </mesh>

      {/* Spirit energy aura around Ollie */}
      <mesh position={[0, 0, 0]} scale={[1.3, 1.1, 1.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4fc3f7" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

function SpiritWisps() {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(
    () => [
      { pos: [-3.2, 0.8, 1.8] as const, color: "#7df7ff" },
      { pos: [-2.4, 1.6, 0.6] as const, color: "#69f0ae" },
      { pos: [-1.8, 0.2, 1.2] as const, color: "#7df7ff" },
      { pos: [1.5, 1.8, 1.7] as const, color: "#b388ff" },
      { pos: [2.1, 0.8, 2.2] as const, color: "#69f0ae" },
      { pos: [0.4, 1.2, 1.3] as const, color: "#7df7ff" },
      { pos: [-0.8, 2.2, 0.4] as const, color: "#ffcc80" },
      { pos: [3.6, 0.4, 0.8] as const, color: "#69f0ae" },
    ],
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
  });

  return (
    <group ref={groupRef}>
      {nodes.map(({ pos, color }, index) => (
        <Float key={`${pos[0]}-${pos[1]}`} speed={1.2 + index * 0.1} rotationIntensity={0.02} floatIntensity={0.3}>
          <mesh position={[pos[0], pos[1], pos[2]]}>
            <sphereGeometry args={[0.05, 18, 18]} />
            <meshBasicMaterial color={color} />
          </mesh>
          <pointLight position={[pos[0], pos[1], pos[2]]} intensity={0.5} distance={1.5} color={color} />
        </Float>
      ))}
    </group>
  );
}

export function OlliePortalScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Canvas camera={{ position: [0, 2.8, 8.4], fov: 36 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }} shadows>
        <color attach="background" args={["#020a0e"]} />
        <fog attach="fog" args={["#020a0e", 8, 18]} />
        <CameraDrift />

        {/* Ori-inspired lighting: cool ambient with spirit highlights */}
        <ambientLight intensity={0.5} color="#b7f4f2" />
        <hemisphereLight intensity={0.45} color="#b7f4f2" groundColor="#061210" />

        {/* Spirit tree light from above */}
        <pointLight position={[0, 5, 3]} intensity={35} distance={20} color="#4fc3f7" />
        {/* Warm accent for Ollie */}
        <pointLight position={[2.4, 1.6, 2.6]} intensity={12} distance={10} color="#ffcc80" />
        {/* Moonlight from side */}
        <spotLight position={[-3.6, 5.2, 4.2]} angle={0.42} penumbra={0.8} intensity={22} color="#b388ff" castShadow />

        {/* Spirit particles - more cyan/green, Ori-style */}
        <Sparkles count={70} speed={0.2} size={2.4} scale={[14, 8, 8]} color="#b7f4f2" opacity={0.25} />
        <Sparkles count={36} speed={0.15} size={3.8} scale={[12, 6, 5]} color="#4fc3f7" opacity={0.12} />
        <Sparkles count={20} speed={0.12} size={2} scale={[10, 6, 6]} color="#69f0ae" opacity={0.1} />

        <ForestClearing />
        <SpiritAltar />
        <OllieSpirit />
        <SpiritWisps />
        <ContactShadows position={[0, -2.1, 0]} scale={10} blur={2.8} opacity={0.5} far={4.5} color="#041410" />
      </Canvas>

      {/* Overlay gradients - spirit glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,195,247,0.08),transparent_28%),radial-gradient(circle_at_24%_18%,rgba(105,240,174,0.08),transparent_26%),radial-gradient(circle_at_74%_20%,rgba(179,136,255,0.08),transparent_28%),linear-gradient(180deg,rgba(2,10,14,0.08),rgba(2,10,14,0.55)_70%,rgba(2,10,14,0.8)_100%)]" />
    </div>
  );
}
