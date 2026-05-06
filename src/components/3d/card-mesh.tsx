"use client";

import { Text, useCursor, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { UnitPieceMesh } from "./unit-piece-mesh";
import { getCardArtSrc, getCardSides } from "@/core/engine";
import type { BoardCard, CardInstance, Direction, PlayerId } from "@/core/types";
import { hasUnitVisual } from "@/lib/unit-visuals";

interface CardMeshProps {
  card: CardInstance | BoardCard;
  ownerOverride?: PlayerId;
  boardOwned?: boolean;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  selected?: boolean;
  interactive?: boolean;
  hiddenBack?: boolean;
  motionKind?: "idle" | "placed" | "flipped";
  motionKey?: string | null;
  motionDirection?: Direction | null;
  motionDelayMs?: number;
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
}

const OWNER_COLORS = {
  player: { main: "#38bdf8", accent: "#7dd3fc" },
  enemy: { main: "#fb7185", accent: "#fda4af" },
};

export const CARD_WIDTH = 2.34;
export const CARD_HEIGHT = 3.33;

type MotionState = {
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
      return { x: -1.55, y: -0.22, z: 0.86, rx: 0.14, ry: -0.22, rz: -0.12 };
    case "right":
      return { x: 1.55, y: -0.22, z: 0.86, rx: 0.14, ry: 0.22, rz: 0.12 };
    case "top":
      return { x: 0, y: 3.8, z: 1.7, rx: 0.4, ry: 0, rz: 0 };
    case "bottom":
      return { x: 0, y: -3.2, z: 1.48, rx: -0.34, ry: 0, rz: 0 };
  }
}

export function CardMesh({
  card,
  ownerOverride,
  boardOwned = false,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  selected = false,
  interactive = true,
  hiddenBack = false,
  motionKind = "idle",
  motionKey = null,
  motionDirection = null,
  motionDelayMs = 0,
  onClick,
  onHover,
}: CardMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const motionRef = useRef<MotionState | null>(null);
  const [hovered, setHovered] = useState(false);
  const sides = getCardSides(card);
  const displayOwner = ownerOverride ?? card.owner;
  const ownerColor = OWNER_COLORS[displayOwner].main;
  const ownerAccent = OWNER_COLORS[displayOwner].accent;
  const artSrc = getCardArtSrc(card);
  const rendersAsUnit = !hiddenBack && hasUnitVisual(card.archetypeId);
  const texture = useTexture(artSrc);
  const { gl } = useThree();
  const geometry = useMemo(() => new THREE.BoxGeometry(CARD_WIDTH, CARD_HEIGHT, 0.08), []);

  useCursor(interactive && hovered, "pointer", "auto");

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
  }, [gl, texture]);

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

  const materials = useMemo(() => {
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.82, metalness: 0.14 });
    const backMaterial = new THREE.MeshStandardMaterial({
      color: displayOwner === "player" ? "#17354b" : "#48182a",
      emissive: displayOwner === "player" ? "#10293a" : "#32121d",
      emissiveIntensity: 0.22,
      roughness: 0.84,
      metalness: 0.08,
    });
    const frontMaterial = new THREE.MeshBasicMaterial({
      map: hiddenBack ? null : texture,
      color: hiddenBack ? backMaterial.color : new THREE.Color("#ffffff"),
      toneMapped: false,
    });

    return [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, backMaterial];
  }, [displayOwner, hiddenBack, texture]);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    let motionX = 0;
    let motionY = 0;
    let motionZ = 0;
    let motionRotateX = 0;
    let motionRotateY = 0;
    let motionRotateZ = 0;

    const currentMotion = motionRef.current;
    if (currentMotion) {
      if (currentMotion.delayMs > 0) {
        currentMotion.delayMs = Math.max(0, currentMotion.delayMs - delta * 1000);
      } else {
        currentMotion.elapsed += delta;
        const duration = currentMotion.kind === "flipped" ? 0.48 : 0.32;
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
        } else {
          const sign = directionSign(currentMotion.direction);
          const spin = progress * Math.PI * 2;
          motionZ = Math.sin(progress * Math.PI) * 0.32;
          motionRotateZ = Math.sin(progress * Math.PI * 2) * 0.08;

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

    const lift = selected ? 0.28 : hovered ? 0.14 : 0;
    const targetScale = scale * (selected ? 1.08 : hovered ? 1.03 : 1);

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, position[0] + motionX, delta * 12);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, position[1] + motionY, delta * 12);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, position[2] + lift + motionZ, delta * 12);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, rotation[0] + motionRotateX, delta * 12);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotation[1] + motionRotateY, delta * 12);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, rotation[2] + motionRotateZ, delta * 12);

    groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, delta * 10);
    groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, targetScale, delta * 10);
    groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, targetScale, delta * 10);
  });

  const handlePointerOver = (event: { stopPropagation: () => void }) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    setHovered(true);
    onHover?.(true);
  };

  const handlePointerOut = (event: { stopPropagation: () => void }) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    setHovered(false);
    onHover?.(false);
  };

  if (rendersAsUnit) {
    return (
      <group ref={groupRef} position={position} rotation={rotation} scale={scale} frustumCulled={false}>
        <mesh
          position={[0, 0, 0.04]}
          frustumCulled={false}
          onClick={(event) => {
            if (!interactive || !onClick) {
              return;
            }

            event.stopPropagation();
            onClick();
          }}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <planeGeometry args={[CARD_WIDTH * 1.16, CARD_HEIGHT * 1.08]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
        <group position={[0, 0, boardOwned ? 0.48 : 0.34]} frustumCulled={false}>
          <UnitPieceMesh
            archetypeId={card.archetypeId}
            sides={sides}
            displayOwner={displayOwner}
            selected={selected || hovered}
            boardOwned={boardOwned}
          />
        </group>
      </group>
    );
  }

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale} frustumCulled={false}>
      <mesh
        geometry={geometry}
        material={materials}
        castShadow
        receiveShadow
        frustumCulled={false}
        onClick={(event) => {
          if (!interactive || !onClick) {
            return;
          }

          event.stopPropagation();
          onClick();
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />

      {selected ? (
        <mesh position={[0, 0, -0.05]} scale={[1.06, 1.04, 1]}>
          <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
          <meshBasicMaterial color="#fde68a" transparent opacity={0.42} side={THREE.DoubleSide} />
        </mesh>
      ) : null}

      {!hiddenBack ? (
        <>
          <mesh position={[0, 0, -0.028]} scale={[1.08, 1.06, 1]}>
            <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
            <meshBasicMaterial color={ownerAccent} transparent opacity={boardOwned ? 0.3 : interactive ? 0.12 : 0.22} side={THREE.DoubleSide} />
          </mesh>
          {boardOwned ? (
            <group position={[0, 0, 0.048]}>
              <mesh position={[0, CARD_HEIGHT / 2 - 0.09, 0]}>
                <planeGeometry args={[CARD_WIDTH * 0.92, 0.12]} />
                <meshBasicMaterial color={ownerColor} transparent opacity={0.94} />
              </mesh>
              <mesh position={[0, -CARD_HEIGHT / 2 + 0.09, 0]}>
                <planeGeometry args={[CARD_WIDTH * 0.92, 0.12]} />
                <meshBasicMaterial color={ownerColor} transparent opacity={0.94} />
              </mesh>
              <mesh position={[-CARD_WIDTH / 2 + 0.09, 0, 0]}>
                <planeGeometry args={[0.12, CARD_HEIGHT * 0.92]} />
                <meshBasicMaterial color={ownerColor} transparent opacity={0.94} />
              </mesh>
              <mesh position={[CARD_WIDTH / 2 - 0.09, 0, 0]}>
                <planeGeometry args={[0.12, CARD_HEIGHT * 0.92]} />
                <meshBasicMaterial color={ownerColor} transparent opacity={0.94} />
              </mesh>
            </group>
          ) : null}
        </>
      ) : null}

      {hiddenBack ? (
        <group position={[0, 0, 0.045]}>
          <mesh>
            <planeGeometry args={[1.3, 1.3]} />
            <meshStandardMaterial color={displayOwner === "player" ? "#0f2c3c" : "#341523"} emissive={ownerAccent} emissiveIntensity={0.16} transparent opacity={0.9} />
          </mesh>
          <mesh position={[0, 0, 0.01]}>
            <ringGeometry args={[0.36, 0.58, 32]} />
            <meshStandardMaterial color={ownerAccent} emissive={ownerAccent} emissiveIntensity={0.22} />
          </mesh>
          <mesh position={[0, 0, 0.02]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.24, 0.24, 0.02]} />
            <meshStandardMaterial color="#f8f0d9" />
          </mesh>
        </group>
      ) : (
        <group position={[0, 0, 0.045]}>
          <ValueBadge position={[0, 1.12, 0]} value={sides.top} color={ownerColor} />
          <ValueBadge position={[0.78, 0, 0]} value={sides.right} color={ownerColor} />
          <ValueBadge position={[0, -1.12, 0]} value={sides.bottom} color={ownerColor} />
          <ValueBadge position={[-0.78, 0, 0]} value={sides.left} color={ownerColor} />
        </group>
      )}
    </group>
  );
}

function ValueBadge({ position, value, color }: { position: [number, number, number]; value: number | string; color: string }) {
  return (
    <group position={position}>
      <mesh>
        <circleGeometry args={[0.22, 32]} />
        <meshStandardMaterial color={color} roughness={0.24} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial color="#09111c" roughness={0.9} metalness={0.02} />
      </mesh>
      <Text position={[0, 0, 0.02]} fontSize={0.24} color="#fff8df" anchorX="center" anchorY="middle" outlineWidth={0.012} outlineColor="#000000">
        {value}
      </Text>
    </group>
  );
}
