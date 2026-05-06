"use client";

import { Text, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import type { CardSides, Direction, PlayerId } from "@/core/types";
import { getUnitVisual } from "@/lib/unit-visuals";

interface UnitPieceMeshProps {
  archetypeId: string;
  sides: CardSides;
  displayOwner: PlayerId;
  selected?: boolean;
  boardOwned?: boolean;
  motionKind?: "idle" | "placed" | "flipped";
  motionKey?: string | null;
  motionDirection?: Direction | null;
  motionDelayMs?: number;
}

const OWNER_COLORS = {
  player: { main: "#38bdf8", accent: "#7dd3fc", base: "#133f4d" },
  enemy: { main: "#fb7185", accent: "#fda4af", base: "#4b1726" },
} as const;

function animationPhase(archetypeId: string): number {
  return Array.from(archetypeId).reduce((sum, char) => sum + char.charCodeAt(0), 0) * 0.01;
}

type UnitMotionState = {
  kind: "placed" | "flipped";
  direction: Direction;
  elapsed: number;
  delayMs: number;
};

function directionSign(direction: Direction): number {
  return direction === "left" || direction === "top" ? -1 : 1;
}

function createPlacedOffsets(direction: Direction) {
  switch (direction) {
    case "left":
      return { x: -1.75, y: -0.18, z: 0.82, rx: 0.08, ry: -0.18, rz: -0.1 };
    case "right":
      return { x: 1.75, y: -0.18, z: 0.82, rx: 0.08, ry: 0.18, rz: 0.1 };
    case "top":
      return { x: 0, y: 3.2, z: 1.1, rx: 0.18, ry: 0, rz: 0 };
    case "bottom":
      return { x: 0, y: -3.2, z: 1.1, rx: -0.18, ry: 0, rz: 0 };
  }
}

/**
 * Renders a card archetype as a board-game character piece with an animated idle stance.
 */
export function UnitPieceMesh({
  archetypeId,
  sides,
  displayOwner,
  selected = false,
  boardOwned = false,
  motionKind = "idle",
  motionKey = null,
  motionDirection = null,
  motionDelayMs = 0,
}: UnitPieceMeshProps) {
  const visual = getUnitVisual(archetypeId);
  const rootRef = useRef<THREE.Group>(null);
  const spriteRef = useRef<THREE.Mesh>(null);
  const shadowRef = useRef<THREE.Mesh>(null);
  const motionRef = useRef<UnitMotionState | null>(null);
  const texture = useTexture(visual?.spriteSrc ?? "/images/cards-hd/fallback-card.png");
  const { gl } = useThree();
  const phase = useMemo(() => animationPhase(archetypeId), [archetypeId]);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(visual ? 1 / Math.max(1, visual.frameCount) : 1, 1);
    texture.offset.set(0, 0);
    texture.minFilter = visual?.pixelated ? THREE.NearestFilter : THREE.LinearMipmapLinearFilter;
    texture.magFilter = visual?.pixelated ? THREE.NearestFilter : THREE.LinearFilter;
    texture.generateMipmaps = !visual?.pixelated;
    texture.needsUpdate = true;
  }, [gl, texture, visual?.frameCount, visual?.pixelated]);

  useEffect(() => {
    if (!motionKey || motionKind === "idle") {
      motionRef.current = null;
      return;
    }

    motionRef.current = {
      kind: motionKind,
      direction: motionDirection ?? (displayOwner === "player" ? "bottom" : "top"),
      elapsed: 0,
      delayMs: motionDelayMs,
    };
  }, [displayOwner, motionDirection, motionDelayMs, motionKey, motionKind]);

  useFrame(({ clock }, delta) => {
    if (!visual || !rootRef.current) {
      return;
    }

    let motionX = 0;
    let motionY = 0;
    let motionZ = 0;
    let motionRotateX = 0;
    let motionRotateY = 0;
    let motionRotateZ = 0;
    let motionScale = 1;
    const currentMotion = motionRef.current;

    if (currentMotion) {
      if (currentMotion.delayMs > 0) {
        currentMotion.delayMs = Math.max(0, currentMotion.delayMs - delta * 1000);
      } else {
        currentMotion.elapsed += delta;
        const duration = currentMotion.kind === "flipped" ? 0.48 : 0.34;
        const progress = Math.min(currentMotion.elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        if (currentMotion.kind === "placed") {
          const offsets = createPlacedOffsets(currentMotion.direction);
          motionX = offsets.x * (1 - eased);
          motionY = offsets.y * (1 - eased);
          motionZ = offsets.z * (1 - eased);
          motionRotateX = offsets.rx * (1 - eased);
          motionRotateY = offsets.ry * (1 - eased);
          motionRotateZ = offsets.rz * (1 - eased);
          motionScale = 0.72 + eased * 0.28;
        } else {
          const sign = directionSign(currentMotion.direction);
          const spin = progress * Math.PI * 2;
          motionZ = Math.sin(progress * Math.PI) * 0.3;
          motionScale = 1 + Math.sin(progress * Math.PI) * 0.08;

          if (currentMotion.direction === "left" || currentMotion.direction === "right") {
            motionRotateY = sign * spin;
          } else {
            motionRotateX = sign * spin;
          }
        }

        if (progress >= 1) {
          motionRef.current = null;
        }
      }
    }

    const time = clock.elapsedTime * visual.idleBobSpeed + phase;
    const spriteTime = clock.elapsedTime * visual.frameRate + phase;
    const frameIndex = Math.floor(spriteTime) % visual.frameCount;
    const bob = Math.sin(time) * visual.idleBobAmplitude;
    const breathe = 1 + Math.sin(time * 0.72) * visual.breatheScale;

    rootRef.current.position.x = motionX;
    rootRef.current.position.y = bob + motionY;
    rootRef.current.position.z = motionZ;
    rootRef.current.rotation.x = motionRotateX;
    rootRef.current.rotation.y = motionRotateY;
    rootRef.current.rotation.z = motionRotateZ;
    rootRef.current.scale.x = breathe * motionScale;
    rootRef.current.scale.y = (1 / breathe) * motionScale;
    rootRef.current.scale.z = motionScale;

    if (spriteRef.current) {
      spriteRef.current.rotation.z = Math.sin(time * 0.42) * 0.018;
    }

    texture.offset.x = frameIndex / visual.frameCount;

    if (shadowRef.current) {
      const shadowPulse = 1 + Math.sin(time) * 0.035;
      shadowRef.current.scale.set(visual.baseRadiusX * shadowPulse, visual.baseRadiusY / shadowPulse, 1);
    }
  });

  if (!visual) {
    return null;
  }

  const owner = OWNER_COLORS[displayOwner];
  const selectedOpacity = selected ? 0.36 : boardOwned ? 0.22 : 0.16;

  return (
    <group ref={rootRef} frustumCulled={false}>
      <mesh ref={shadowRef} position={[0, -1.18, -0.045]} scale={[visual.baseRadiusX, visual.baseRadiusY, 1]} frustumCulled={false}>
        <circleGeometry args={[1, 48]} />
        <meshBasicMaterial color="#02060a" transparent opacity={0.48} depthWrite={false} toneMapped={false} />
      </mesh>

      <mesh position={[0, -1.18, -0.025]} scale={[visual.baseRadiusX * 1.06, visual.baseRadiusY * 1.16, 1]} frustumCulled={false}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial color={owner.base} transparent opacity={0.7} depthWrite={false} toneMapped={false} />
      </mesh>

      <mesh position={[0, -1.18, 0]} scale={[visual.baseRadiusX * 1.18, visual.baseRadiusY * 1.32, 1]} frustumCulled={false}>
        <ringGeometry args={[0.78, 1, 64]} />
        <meshBasicMaterial color={owner.accent} transparent opacity={selectedOpacity} depthWrite={false} toneMapped={false} />
      </mesh>

      {selected ? (
        <mesh position={[0, -1.18, 0.01]} scale={[visual.baseRadiusX * 1.38, visual.baseRadiusY * 1.52, 1]} frustumCulled={false}>
          <ringGeometry args={[0.78, 1, 64]} />
          <meshBasicMaterial color="#fde68a" transparent opacity={0.34} depthWrite={false} toneMapped={false} />
        </mesh>
      ) : null}

      <mesh position={[0, visual.spriteYOffset - 0.02, 0.035]} scale={[1.06, 1.06, 1]} frustumCulled={false}>
        <planeGeometry args={[visual.spriteWidth, visual.spriteHeight]} />
        <meshBasicMaterial
          map={texture}
          color="#05080b"
          transparent
          opacity={0.58}
          alphaTest={0.08}
          depthWrite={false}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      <mesh ref={spriteRef} position={[0, visual.spriteYOffset, 0.07]} frustumCulled={false}>
        <planeGeometry args={[visual.spriteWidth, visual.spriteHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.08}
          depthWrite={false}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      <mesh position={[0, 0.62, 0.095]} scale={[0.82, 0.18, 1]} frustumCulled={false}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial color={owner.accent} transparent opacity={0.1} depthWrite={false} toneMapped={false} />
      </mesh>

      <SideValueBadge position={[0, 1.38, 0.14]} label="N" value={sides.top} color={owner.main} />
      <SideValueBadge position={[1.22, -0.12, 0.14]} label="E" value={sides.right} color={owner.main} />
      <SideValueBadge position={[0, -1.44, 0.14]} label="S" value={sides.bottom} color={owner.main} />
      <SideValueBadge position={[-1.22, -0.12, 0.14]} label="O" value={sides.left} color={owner.main} />
    </group>
  );
}

function SideValueBadge({ position, label, value, color }: { position: [number, number, number]; label: string; value: number; color: string }) {
  return (
    <group position={position} frustumCulled={false}>
      <mesh>
        <circleGeometry args={[0.24, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.16} />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <circleGeometry args={[0.19, 32]} />
        <meshStandardMaterial color="#081019" roughness={0.9} metalness={0.02} />
      </mesh>
      <Text position={[0, 0.075, 0.026]} fontSize={0.085} color="#bff4ff" anchorX="center" anchorY="middle" outlineWidth={0.006} outlineColor="#000000">
        {label}
      </Text>
      <Text position={[0, -0.04, 0.026]} fontSize={0.21} color="#fff8df" anchorX="center" anchorY="middle" outlineWidth={0.012} outlineColor="#000000">
        {value}
      </Text>
    </group>
  );
}
