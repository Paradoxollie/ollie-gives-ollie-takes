"use client";

import { Sparkles, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { Box3, Color, Group, Mesh, MeshStandardMaterial, Vector3 } from "three";

interface AdventureMapForestBackdropProps {
  width: number;
  height: number;
}

interface ForestPropConfig {
  kind: "pine" | "bush" | "stump" | "campfire";
  position: [number, number, number];
  size: number;
  rotationY: number;
  sway?: number;
  tint?: string;
}

const MODEL_URLS = {
  pine: "/models/map/pine-trees.glb",
  bush: "/models/map/bush-with-berries.glb",
  stump: "/models/map/tree-stump-moss.glb",
  campfire: "/models/campfire-kenney.glb",
} as const;

function useNormalizedScene(url: string, targetSize: number, tint?: string) {
  const { scene } = useGLTF(url);

  return useMemo(() => {
    const clone = scene.clone(true);
    const box = new Box3().setFromObject(clone);
    const center = new Vector3();
    const size = new Vector3();
    box.getCenter(center);
    box.getSize(size);
    clone.position.sub(center);

    const scale = targetSize / Math.max(size.x || 1, size.y || 1, size.z || 1);
    clone.scale.setScalar(scale);

    clone.traverse((child) => {
      if (!(child instanceof Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;
      if (material instanceof MeshStandardMaterial) {
        material.roughness = Math.min(1, material.roughness + 0.08);
        material.envMapIntensity = 0.75;
        if (tint) {
          material.color = material.color.clone().lerp(new Color(tint), 0.18);
        }
      }
    });

    return clone;
  }, [scene, targetSize, tint]);
}

function ForestProp({ kind, position, size, rotationY, sway = 0, tint }: ForestPropConfig) {
  const groupRef = useRef<Group>(null);
  const asset = useNormalizedScene(MODEL_URLS[kind], size, tint);

  useFrame((state) => {
    if (!groupRef.current || sway <= 0) {
      return;
    }

    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.55 + position[0]) * sway;
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, rotationY, 0]}>
      <primitive object={asset} />
    </group>
  );
}

function GroundClearings({ worldWidth, worldHeight }: { worldWidth: number; worldHeight: number }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[worldWidth, worldHeight]} />
        <meshStandardMaterial color="#40513c" roughness={0.98} metalness={0.02} />
      </mesh>

      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[worldWidth * 0.31, 64]} />
        <meshStandardMaterial color="#9b7a4b" roughness={1} transparent opacity={0.92} />
      </mesh>

      <mesh position={[0.9, 0.03, -worldHeight * 0.08]} rotation={[-Math.PI / 2, 0.24, 0]}>
        <planeGeometry args={[worldWidth * 0.44, worldHeight * 0.12]} />
        <meshBasicMaterial color="#6f5831" transparent opacity={0.18} />
      </mesh>

      <mesh position={[-1.05, 0.03, worldHeight * 0.18]} rotation={[-Math.PI / 2, -0.18, 0]}>
        <planeGeometry args={[worldWidth * 0.38, worldHeight * 0.1]} />
        <meshBasicMaterial color="#6a532f" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function CanopyVeil({ worldWidth, worldHeight }: { worldWidth: number; worldHeight: number }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.06) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-worldWidth * 0.42, 1.3, -worldHeight * 0.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[worldWidth * 0.18, 48]} />
        <meshBasicMaterial color="#112218" transparent opacity={0.28} />
      </mesh>
      <mesh position={[worldWidth * 0.42, 1.4, -worldHeight * 0.28]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[worldWidth * 0.16, 48]} />
        <meshBasicMaterial color="#102117" transparent opacity={0.26} />
      </mesh>
      <mesh position={[-worldWidth * 0.44, 1.35, worldHeight * 0.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[worldWidth * 0.17, 48]} />
        <meshBasicMaterial color="#13261a" transparent opacity={0.24} />
      </mesh>
      <mesh position={[worldWidth * 0.41, 1.38, worldHeight * 0.29]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[worldWidth * 0.19, 48]} />
        <meshBasicMaterial color="#112216" transparent opacity={0.24} />
      </mesh>
    </group>
  );
}

function ForestScene({ width, height }: AdventureMapForestBackdropProps) {
  const worldWidth = 14;
  const worldHeight = worldWidth * (height / width);
  const halfW = worldWidth / 2;
  const halfH = worldHeight / 2;

  const props = useMemo<ForestPropConfig[]>(() => {
    const nextProps: ForestPropConfig[] = [];
    const segments = Math.max(6, Math.round(worldHeight / 4.8));
    const step = worldHeight / segments;

    for (let index = 0; index <= segments; index += 1) {
      const z = -halfH + 1.2 + index * step;
      const phase = index % 3;

      nextProps.push({
        kind: "pine",
        position: [-halfW + 1.05 + (phase === 1 ? 0.18 : 0), 0, z],
        size: 2.42 + (phase === 0 ? 0.22 : phase === 1 ? 0.08 : 0.3),
        rotationY: 0.25 + index * 0.16,
        sway: 0.03,
        tint: phase === 2 ? "#264325" : "#2b472a",
      });
      nextProps.push({
        kind: "pine",
        position: [halfW - 1.05 - (phase === 2 ? 0.18 : 0), 0, z + step * 0.22],
        size: 2.36 + (phase === 1 ? 0.26 : phase === 2 ? 0.12 : 0.18),
        rotationY: -0.3 - index * 0.18,
        sway: 0.03,
        tint: phase === 0 ? "#294628" : "#244024",
      });

      if (index < segments) {
        nextProps.push({
          kind: "bush",
          position: [-halfW + 1.8, 0.04, z + step * 0.4],
          size: 1.04 + phase * 0.08,
          rotationY: index * 0.22,
          tint: "#4a6e40",
        });
        nextProps.push({
          kind: "bush",
          position: [halfW - 1.85, 0.04, z + step * 0.64],
          size: 1 + (phase === 1 ? 0.14 : 0.06),
          rotationY: -index * 0.26,
          tint: "#48683d",
        });
      }
    }

    nextProps.push({
      kind: "stump",
      position: [-halfW + 2.15, 0.03, -halfH + step * 1.2],
      size: 0.84,
      rotationY: 0.16,
      tint: "#6c5c41",
    });
    nextProps.push({
      kind: "stump",
      position: [halfW - 2.2, 0.03, halfH - step * 1.1],
      size: 0.9,
      rotationY: -0.28,
      tint: "#6b5b3d",
    });
    nextProps.push({
      kind: "campfire",
      position: [halfW - 2.2, 0.05, step * 0.45],
      size: 1.18,
      rotationY: 0.22,
      tint: "#7a5d39",
    });

    return nextProps;
  }, [halfH, halfW, worldHeight]);

  return (
    <Canvas camera={{ position: [0, 8.8, 2.5], fov: 34 }} dpr={[1, 1.3]} gl={{ alpha: true, antialias: true }} shadows>
      <color attach="background" args={["#152014"]} />
      <fog attach="fog" args={["#152014", 7, 18]} />
      <ambientLight intensity={0.95} color="#eef8e4" />
      <hemisphereLight intensity={0.52} color="#dff1d6" groundColor="#142011" />
      <directionalLight castShadow position={[2.5, 8.4, 4.6]} intensity={2.6} color="#fff3d4" shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-4.5, 2.5, 2]} intensity={1.8} distance={10} color="#8bdcb5" />
      <pointLight position={[4.1, 2.1, 1.6]} intensity={1.6} distance={9} color="#f5d58f" />

      <GroundClearings worldWidth={worldWidth} worldHeight={worldHeight} />
      <CanopyVeil worldWidth={worldWidth} worldHeight={worldHeight} />
      <Suspense fallback={null}>
        {props.map((prop, index) => (
          <ForestProp key={`${prop.kind}-${index}`} {...prop} />
        ))}
      </Suspense>

      <Sparkles count={22} speed={0.16} size={3.6} scale={[worldWidth * 0.8, 2.8, worldHeight * 0.7]} color="#f8f4e1" opacity={0.12} />
    </Canvas>
  );
}

useGLTF.preload("/models/map/pine-trees.glb");
useGLTF.preload("/models/map/bush-with-berries.glb");
useGLTF.preload("/models/map/tree-stump-moss.glb");
useGLTF.preload("/models/campfire-kenney.glb");

export function AdventureMapForestBackdrop({ width, height }: AdventureMapForestBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,213,180,0.18),rgba(231,213,180,0)_34%),radial-gradient(circle_at_16%_18%,rgba(34,59,33,0.24),rgba(34,59,33,0)_24%),radial-gradient(circle_at_84%_20%,rgba(33,57,34,0.22),rgba(33,57,34,0)_22%),radial-gradient(circle_at_20%_82%,rgba(28,49,30,0.2),rgba(28,49,30,0)_22%),radial-gradient(circle_at_82%_84%,rgba(35,56,31,0.2),rgba(35,56,31,0)_22%)]" />
      <ForestScene width={width} height={height} />
    </div>
  );
}
