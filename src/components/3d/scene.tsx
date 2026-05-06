"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Preload, useTexture } from "@react-three/drei";
import type { ReactNode } from "react";
import { Suspense, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

import { CARD_ARCHETYPES } from "@/core";
import { UNIT_VISUALS } from "@/lib/unit-visuals";

interface SceneProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
  fov?: number;
  mobileCameraPosition?: [number, number, number];
  mobileCameraTarget?: [number, number, number];
  mobileFov?: number;
  transparent?: boolean;
}

const PRELOADED_TEXTURES = Array.from(
  new Set([
    "/images/board-arena.png",
    "/images/game/arena-autobattler-forest.png",
    "/images/cards-hd/fallback-card.png",
    ...CARD_ARCHETYPES.map((card) => card.artSrc),
    ...Object.values(UNIT_VISUALS).map((unit) => unit.spriteSrc),
  ]),
);

for (const textureSrc of PRELOADED_TEXTURES) {
  useTexture.preload(textureSrc);
}

function CameraRig({
  cameraPosition,
  cameraTarget,
  fov,
  mobileCameraPosition,
  mobileCameraTarget,
  mobileFov,
}: {
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  fov: number;
  mobileCameraPosition?: [number, number, number];
  mobileCameraTarget?: [number, number, number];
  mobileFov?: number;
}) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { size } = useThree();
  const aspect = size.width / Math.max(1, size.height);
  const useMobileCamera = aspect < 0.72 && Boolean(mobileCameraPosition || mobileFov || mobileCameraTarget);
  const resolvedCameraPosition = useMobileCamera && mobileCameraPosition ? mobileCameraPosition : cameraPosition;
  const resolvedCameraTarget = useMobileCamera && mobileCameraTarget ? mobileCameraTarget : cameraTarget;
  const resolvedFov = useMobileCamera && mobileFov ? mobileFov : fov;

  useLayoutEffect(() => {
    if (!cameraRef.current) {
      return;
    }

    cameraRef.current.position.set(...resolvedCameraPosition);
    cameraRef.current.fov = resolvedFov;
    cameraRef.current.lookAt(new THREE.Vector3(...resolvedCameraTarget));
    cameraRef.current.updateProjectionMatrix();
  }, [resolvedCameraPosition, resolvedCameraTarget, resolvedFov]);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={resolvedCameraPosition} fov={resolvedFov} />;
}

export function Scene({
  children,
  cameraPosition = [0, 0.2, 18],
  cameraTarget = [0, 0, 0],
  fov = 34,
  mobileCameraPosition,
  mobileCameraTarget,
  mobileFov,
  transparent = false,
}: SceneProps) {
  return (
    <div className={["absolute inset-0 z-[2]", transparent ? "bg-transparent" : "bg-[#020509]"].join(" ")}>
      <Canvas shadows dpr={[1, 1.75]} gl={{ antialias: true, alpha: transparent, powerPreference: "high-performance" }}>
        <CameraRig
          cameraPosition={cameraPosition}
          cameraTarget={cameraTarget}
          fov={fov}
          mobileCameraPosition={mobileCameraPosition}
          mobileCameraTarget={mobileCameraTarget}
          mobileFov={mobileFov}
        />

        {!transparent ? <color attach="background" args={["#040811"]} /> : null}
        <fog attach="fog" args={["#040811", 36, 78]} />

        <ambientLight intensity={0.76} color="#d8f1ff" />
        <hemisphereLight groundColor="#0b0c10" color="#b6fff0" intensity={0.44} />
        <spotLight
          position={[0, 10, 9]}
          angle={0.52}
          penumbra={1}
          intensity={1.16}
          color="#fde68a"
          castShadow
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
        />
        <directionalLight position={[-8, 6, 9]} intensity={0.42} color="#93c5fd" />
        <directionalLight position={[8, 5, 10]} intensity={0.3} color="#f5d48c" />
        <directionalLight position={[0, -4, 8]} intensity={0.18} color="#8fe9ff" />

        <Suspense fallback={null}>
          <Environment preset="night" blur={0.8} />

          <Preload all />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
