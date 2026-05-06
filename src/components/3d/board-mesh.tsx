"use client";

import { useCursor, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { CardMesh } from "./card-mesh";
import { UnitPieceMesh } from "./unit-piece-mesh";
import type { BoardCard, Direction, LastMoveSummary, Position, PreviewMove } from "@/core/types";
import { hasUnitVisual } from "@/lib/unit-visuals";

interface BoardMeshProps {
  board: Array<Array<BoardCard | null>>;
  selectedCardId: string | null;
  canInteract: boolean;
  hoveredPosition: Position | null;
  lastMove: LastMoveSummary | null;
  preview: PreviewMove | null;
  onCellClick: (position: Position) => void;
  onCellHover: (position: Position | null) => void;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

type CardMotionMeta = {
  kind: "idle" | "placed" | "flipped";
  key: string | null;
  direction: Direction | null;
  delayMs: number;
};

/* ── Tile dimensions — slightly larger than card (2.34 x 3.33) ── */
export const TILE_W = 4.05;
export const TILE_H = 4.05;
export const TILE_GAP = 0.26;
export const BOARD_SCALE = 1.0;

/* ── Derived arena measurements ── */
const GRID_W = TILE_W * 3 + TILE_GAP * 2; // ~8.74
const GRID_H = TILE_H * 3 + TILE_GAP * 2; // ~11.74
const ARENA_PAD = 1.05; // padding around the grid
const FLOOR_W = GRID_W + ARENA_PAD * 2;
const FLOOR_H = GRID_H + ARENA_PAD * 2;
const WALL_THICKNESS = 0.28;
const WALL_HEIGHT = 0.28;
const ARENA_ART_W = 52.0;
const ARENA_ART_H = 32.0;

/* ── Side shelves (player left / enemy right) ── */
const BENCH_W = FLOOR_W + 2.8;
const BENCH_H = 2.2;
export const BENCH_Y = FLOOR_H / 2 + BENCH_H / 2 - 0.26;
export { FLOOR_W, GRID_H };

/* ── Pillar positions ── */
const PILLAR_OFFSET_X = FLOOR_W / 2 + 0.6;
const PILLAR_OFFSET_Y = GRID_H / 2 + 0.4;

function samePosition(left: Position | null, right: Position | null): boolean {
  return Boolean(left && right && left.row === right.row && left.col === right.col);
}

function createLastMoveSignature(lastMove: LastMoveSummary | null): string | null {
  if (!lastMove) return null;
  const impactSignature = lastMove.impacts
    .map((i) => [i.position.row, i.position.col, i.targetCardInstanceId, i.result, i.targetOwnerBeforeImpact, i.targetOwnerAfterImpact].join(":"))
    .join("|");
  return [lastMove.playerId, lastMove.cardInstanceId, lastMove.position.row, lastMove.position.col, lastMove.roundNumberAfterMove, lastMove.roundEnded ? "round-end" : "still-open", impactSignature].join("::");
}

function getCardMotion(cell: BoardCard, lastMove: LastMoveSummary | null, signature: string | null): CardMotionMeta {
  if (!lastMove || !signature) return { kind: "idle", key: null, direction: null, delayMs: 0 };
  if (cell.instanceId === lastMove.cardInstanceId) {
    return { kind: "placed", key: `placed:${signature}`, direction: lastMove.playerId === "player" ? "bottom" : "top", delayMs: 0 };
  }
  const impact = lastMove.impacts.find((e) => e.targetCardInstanceId === cell.instanceId && e.result === "flipped");
  if (!impact) return { kind: "idle", key: null, direction: null, delayMs: 0 };
  return { kind: "flipped", key: `flip:${cell.instanceId}:${signature}`, direction: impact.direction, delayMs: lastMove.playerId === "enemy" ? 120 : 0 };
}

export function BoardMesh({
  board,
  selectedCardId,
  canInteract,
  hoveredPosition,
  lastMove,
  preview,
  onCellClick,
  onCellHover,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: BoardMeshProps) {
  const arenaTexture = useTexture("/images/game/arena-autobattler-forest.png");
  const rootRef = useRef<THREE.Group>(null);
  const shakeRef = useRef({ elapsed: 0, duration: 0, intensity: 0 });
  const pulseRef = useRef<{ elapsed: number; duration: number; intensity: number; position: Position | null }>({ elapsed: 0, duration: 0, intensity: 0, position: null });
  const pulseMeshRef = useRef<THREE.Mesh>(null);
  const lastMoveSignature = useMemo(() => createLastMoveSignature(lastMove), [lastMove]);
  arenaTexture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    if (!lastMoveSignature) return;
    const flippedCount = lastMove?.impacts.filter((i) => i.result === "flipped").length ?? 0;
    const shouldShake = flippedCount >= 2 || Boolean(lastMove?.roundEnded);
    shakeRef.current = { elapsed: 0, duration: shouldShake ? 0.34 + flippedCount * 0.06 : 0, intensity: shouldShake ? 0.09 + flippedCount * 0.02 : 0 };
    pulseRef.current = { elapsed: 0, duration: lastMove?.position ? 0.6 : 0, intensity: lastMove?.roundEnded ? 1.6 : flippedCount >= 2 ? 1.35 : flippedCount === 1 ? 0.95 : 0.72, position: lastMove?.position ?? null };
  }, [lastMove, lastMoveSignature]);

  useFrame((_, delta) => {
    if (!rootRef.current) return;
    const shake = shakeRef.current;
    if (shake.elapsed < shake.duration) {
      shake.elapsed += delta;
      const progress = Math.min(shake.elapsed / shake.duration, 1);
      const decay = 1 - progress;
      rootRef.current.position.x = position[0] + Math.sin(progress * Math.PI * 14) * shake.intensity * decay;
      rootRef.current.position.y = position[1] + Math.cos(progress * Math.PI * 12) * shake.intensity * 0.4 * decay;
    } else {
      rootRef.current.position.x = THREE.MathUtils.lerp(rootRef.current.position.x, position[0], delta * 12);
      rootRef.current.position.y = THREE.MathUtils.lerp(rootRef.current.position.y, position[1], delta * 12);
    }
    rootRef.current.position.z = THREE.MathUtils.lerp(rootRef.current.position.z, position[2], delta * 12);
    rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, rotation[0], delta * 10);
    rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, rotation[1], delta * 10);
    rootRef.current.rotation.z = THREE.MathUtils.lerp(rootRef.current.rotation.z, rotation[2], delta * 10);

    if (pulseMeshRef.current && pulseRef.current.position) {
      const pulse = pulseRef.current;
      const px = (pulse.position!.col - 1) * (TILE_W + TILE_GAP);
      const py = -(pulse.position!.row - 1) * (TILE_H + TILE_GAP);
      pulseMeshRef.current.position.x = px;
      pulseMeshRef.current.position.y = py;
      if (pulse.elapsed < pulse.duration) {
        pulse.elapsed += delta;
        const progress = Math.min(pulse.elapsed / pulse.duration, 1);
        pulseMeshRef.current.visible = true;
        pulseMeshRef.current.scale.setScalar(0.65 + progress * pulse.intensity);
        (pulseMeshRef.current.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.34;
      } else {
        pulseMeshRef.current.visible = false;
      }
    }
  });

  return (
    <group ref={rootRef} position={position} rotation={rotation} scale={[BOARD_SCALE, BOARD_SCALE, BOARD_SCALE]}>

      {/* ══════ ARENA STRUCTURE ══════ */}

      {/* Outer shadow */}
      <mesh position={[0, 0, -0.6]} frustumCulled={false}>
        <planeGeometry args={[BENCH_W + 3.2, BENCH_Y * 2 + BENCH_H + 1.6]} />
        <meshBasicMaterial color="#02050a" transparent opacity={0.18} toneMapped={false} />
      </mesh>

      {/* Elevated platform under the generated arena art. */}
      <mesh position={[0, 0, -0.28]} receiveShadow castShadow frustumCulled={false}>
        <boxGeometry args={[FLOOR_W + 1, FLOOR_H + 1, 0.5]} />
        <meshStandardMaterial color="#6f633e" emissive="#241d10" emissiveIntensity={0.12} roughness={0.9} metalness={0.04} />
      </mesh>

      {/* Generated arena plate: forest ruin, benches, combat room. */}
      <mesh position={[0, 0, -0.005]} receiveShadow frustumCulled={false}>
        <planeGeometry args={[ARENA_ART_W, ARENA_ART_H]} />
        <meshBasicMaterial map={arenaTexture} color="#ffffff" toneMapped={false} />
      </mesh>

      {/* Vignette layer keeps the playable cells readable over the image. */}
      <mesh position={[0, 0, 0.0]} frustumCulled={false}>
        <planeGeometry args={[ARENA_ART_W, ARENA_ART_H]} />
        <meshBasicMaterial color="#07110d" transparent opacity={0.03} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* Subtle tint overlay */}
      <mesh position={[0, 0, 0.03]} frustumCulled={false}>
        <planeGeometry args={[GRID_W + 0.6, GRID_H + 0.6]} />
        <meshBasicMaterial color="#103c34" transparent opacity={0.04} toneMapped={false} depthWrite={false} />
      </mesh>

      {/* ── Walls / raised edges ── */}
      {/* Left wall */}
      <mesh position={[-FLOOR_W / 2 + WALL_THICKNESS / 2, 0, WALL_HEIGHT / 2 - 0.02]} castShadow receiveShadow frustumCulled={false}>
        <boxGeometry args={[WALL_THICKNESS, FLOOR_H, WALL_HEIGHT]} />
        <meshBasicMaterial color="#a88c5c" toneMapped={false} />
      </mesh>
      {/* Right wall */}
      <mesh position={[FLOOR_W / 2 - WALL_THICKNESS / 2, 0, WALL_HEIGHT / 2 - 0.02]} castShadow receiveShadow frustumCulled={false}>
        <boxGeometry args={[WALL_THICKNESS, FLOOR_H, WALL_HEIGHT]} />
        <meshBasicMaterial color="#a88c5c" toneMapped={false} />
      </mesh>
      {/* Top wall */}
      <mesh position={[0, FLOOR_H / 2 - WALL_THICKNESS / 2, WALL_HEIGHT / 2 - 0.02]} castShadow receiveShadow frustumCulled={false}>
        <boxGeometry args={[FLOOR_W, WALL_THICKNESS, WALL_HEIGHT]} />
        <meshBasicMaterial color="#a88c5c" toneMapped={false} />
      </mesh>
      {/* Bottom wall */}
      <mesh position={[0, -FLOOR_H / 2 + WALL_THICKNESS / 2, WALL_HEIGHT / 2 - 0.02]} castShadow receiveShadow frustumCulled={false}>
        <boxGeometry args={[FLOOR_W, WALL_THICKNESS, WALL_HEIGHT]} />
        <meshBasicMaterial color="#a88c5c" toneMapped={false} />
      </mesh>

      <BenchTray owner="enemy" position={[0, BENCH_Y, -0.16]} />
      <BenchTray owner="player" position={[0, -BENCH_Y, -0.16]} />

      {/* ── Pillars ── */}
      <ArenaPillar position={[-PILLAR_OFFSET_X, PILLAR_OFFSET_Y, 0]} />
      <ArenaPillar position={[PILLAR_OFFSET_X, PILLAR_OFFSET_Y, 0]} />
      <ArenaPillar position={[-PILLAR_OFFSET_X, -PILLAR_OFFSET_Y, 0]} short />
      <ArenaPillar position={[PILLAR_OFFSET_X, -PILLAR_OFFSET_Y, 0]} short />

      {/* ── Torches on pillars ── */}
      <ArenaTorch position={[-PILLAR_OFFSET_X, PILLAR_OFFSET_Y + 1.2, 0.4]} />
      <ArenaTorch position={[PILLAR_OFFSET_X, PILLAR_OFFSET_Y + 1.2, 0.4]} />
      <ArenaTorch position={[-PILLAR_OFFSET_X, -PILLAR_OFFSET_Y - 0.8, 0.35]} small />
      <ArenaTorch position={[PILLAR_OFFSET_X, -PILLAR_OFFSET_Y - 0.8, 0.35]} small />

      {/* ── Center glow ring ── */}
      <mesh position={[0, 0, 0.04]} frustumCulled={false}>
        <ringGeometry args={[1.35, 1.72, 48]} />
        <meshBasicMaterial color="#b8f7ff" transparent opacity={0.15} toneMapped={false} />
      </mesh>

      {/* ── Pulse effect (impact feedback) ── */}
      <mesh ref={pulseMeshRef} position={[0, 0, 0.08]} visible={false} frustumCulled={false}>
        <ringGeometry args={[1.08, 1.4, 48]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0} toneMapped={false} />
      </mesh>

      {/* ── Lighting ── */}
      <spotLight position={[0, 2, 5]} color="#7dd3fc" intensity={1.2} distance={18} angle={0.85} penumbra={1} />
      <pointLight position={[-PILLAR_OFFSET_X, PILLAR_OFFSET_Y + 1.2, 1.5]} color="#ffd27a" intensity={0.6} distance={8} />
      <pointLight position={[PILLAR_OFFSET_X, PILLAR_OFFSET_Y + 1.2, 1.5]} color="#ffd27a" intensity={0.6} distance={8} />
      <pointLight position={[0, 0, 3]} color="#78d4ff" intensity={0.3} distance={12} />

      {/* ══════ GRID CELLS ══════ */}
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isHovered = hoveredPosition?.row === rowIndex && hoveredPosition?.col === colIndex;
          const isPreviewCell = preview?.move?.position?.row === rowIndex && preview?.move?.position?.col === colIndex;
          const isLastPlaced = samePosition(lastMove?.position ?? null, { row: rowIndex, col: colIndex });
          const cellKey = `cell-${rowIndex}-${colIndex}`;
          const x = (colIndex - 1) * (TILE_W + TILE_GAP);
          const y = -(rowIndex - 1) * (TILE_H + TILE_GAP);

          return (
            <group key={cellKey} position={[x, y, 0]}>
              <BoardTile
                isEmpty={!cell}
                isHovered={isHovered}
                isPreviewCell={isPreviewCell}
                canInteract={canInteract && selectedCardId !== null}
                onClick={() => onCellClick({ row: rowIndex, col: colIndex })}
                onHover={(hovered) => onCellHover(hovered ? { row: rowIndex, col: colIndex } : null)}
              />
              {cell ? (() => {
                const motion = getCardMotion(cell, lastMove, lastMoveSignature);
                if (hasUnitVisual(cell.archetypeId)) {
                  return (
                    <group position={[0, 0, 0.72]} frustumCulled={false}>
                      <UnitPieceMesh
                        archetypeId={cell.archetypeId}
                        sides={cell.sides}
                        displayOwner={cell.owner}
                        selected={isLastPlaced}
                        boardOwned
                        motionKind={motion.kind}
                        motionKey={motion.key}
                        motionDirection={motion.direction}
                        motionDelayMs={motion.delayMs}
                      />
                    </group>
                  );
                }

                return (
                  <CardMesh
                    card={cell}
                    boardOwned
                    position={[0, 0, 0.22]}
                    interactive={false}
                    selected={isLastPlaced}
                    motionKind={motion.kind}
                    motionKey={motion.key}
                    motionDirection={motion.direction}
                    motionDelayMs={motion.delayMs}
                    scale={hasUnitVisual(cell.archetypeId) ? 1 : 0.82}
                  />
                );
              })() : null}
            </group>
          );
        }),
      )}
    </group>
  );
}

/* ── Board tile — recessed slot for cards ── */
interface BoardTileProps {
  isEmpty: boolean;
  isHovered: boolean;
  isPreviewCell: boolean;
  canInteract: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
}

function BoardTile({ isEmpty, isHovered, isPreviewCell, canInteract, onClick, onHover }: BoardTileProps) {
  const isTargetable = isEmpty && canInteract;
  useCursor(isTargetable && isHovered, "pointer", "auto");

  return (
    <group
      position={[0, 0, 0]}
      onClick={(e) => { if (!isTargetable) return; e.stopPropagation(); onClick(); }}
      onPointerOver={(e) => { e.stopPropagation(); onHover(true); }}
      onPointerOut={(e) => { e.stopPropagation(); onHover(false); }}
    >
      {/* Tile border / frame */}
      <mesh position={[0, 0, 0.02]} receiveShadow castShadow>
        <boxGeometry args={[TILE_W + 0.16, TILE_H + 0.16, 0.14]} />
        <meshStandardMaterial color="#78906f" roughness={0.82} metalness={0.08} />
      </mesh>

      {/* Tile inner surface */}
      <mesh position={[0, 0, 0.09]} receiveShadow>
        <boxGeometry args={[TILE_W, TILE_H, 0.06]} />
        <meshStandardMaterial
          color={isPreviewCell ? "#486ca4" : isTargetable ? "#257466" : "#24554b"}
          emissive={isPreviewCell ? "#8fa0ff" : isTargetable ? "#7affdf" : "#2a6659"}
          emissiveIntensity={isPreviewCell ? 0.48 : isTargetable ? (isHovered ? 0.42 : 0.24) : 0.14}
          roughness={0.82}
          metalness={0.06}
        />
      </mesh>

      {/* Inner glow overlay */}
      <mesh position={[0, 0, 0.13]}>
        <planeGeometry args={[TILE_W - 0.16, TILE_H - 0.16]} />
        <meshBasicMaterial
          color={isPreviewCell ? "#c8bfff" : isTargetable ? "#c8fff0" : "#a0ddd0"}
          transparent
          opacity={isPreviewCell ? 0.28 : isTargetable ? (isHovered ? 0.24 : 0.12) : 0.06}
          toneMapped={false}
        />
      </mesh>

      {/* Wireframe border */}
      <mesh position={[0, 0, 0.135]}>
        <planeGeometry args={[TILE_W - 0.14, TILE_H - 0.14]} />
        <meshBasicMaterial
          color={isPreviewCell ? "#c4b5fd" : "#7dd3fc"}
          transparent
          opacity={isPreviewCell ? 0.5 : isTargetable ? (isHovered ? 0.34 : 0.18) : 0.12}
          wireframe
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ── Pillar ── */
function BenchTray({ owner, position }: { owner: "player" | "enemy"; position: [number, number, number] }) {
  const isPlayer = owner === "player";
  const trimColor = isPlayer ? "#7dd3fc" : "#fda4af";
  const glowColor = isPlayer ? "#2b6a5e" : "#6d2e42";
  const slotColor = isPlayer ? "#173d39" : "#3a1c2a";
  const slotXs = [-5.1, -1.7, 1.7, 5.1];

  return (
    <group position={position} frustumCulled={false}>
      <mesh castShadow receiveShadow frustumCulled={false}>
        <boxGeometry args={[BENCH_W, BENCH_H, 0.22]} />
        <meshStandardMaterial color="#7c693f" emissive="#1a1309" emissiveIntensity={0.08} roughness={0.86} metalness={0.05} transparent opacity={0.58} />
      </mesh>
      <mesh position={[0, 0, 0.18]} frustumCulled={false}>
        <planeGeometry args={[BENCH_W - 0.38, BENCH_H - 0.3]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.13} toneMapped={false} depthWrite={false} />
      </mesh>
      {slotXs.map((slotX) => (
        <group key={`${owner}-bench-${slotX}`} position={[slotX, 0, 0.2]} frustumCulled={false}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.6, 1.52, 0.08]} />
            <meshStandardMaterial color={slotColor} emissive={slotColor} emissiveIntensity={0.2} roughness={0.82} metalness={0.06} transparent opacity={0.42} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[2.34, 1.28]} />
            <meshBasicMaterial color={trimColor} transparent opacity={0.08} wireframe toneMapped={false} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, isPlayer ? BENCH_H / 2 - 0.08 : -BENCH_H / 2 + 0.08, 0.22]} frustumCulled={false}>
        <planeGeometry args={[BENCH_W - 1.0, 0.12]} />
        <meshBasicMaterial color="#ffe0a0" transparent opacity={0.16} toneMapped={false} />
      </mesh>
    </group>
  );
}

function ArenaPillar({ position, short = false }: { position: [number, number, number]; short?: boolean }) {
  const h = short ? 1.6 : 2.4;
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.0, h, 0.8]} />
        <meshStandardMaterial color="#806b45" emissive="#20170b" emissiveIntensity={0.1} roughness={0.9} metalness={0.05} />
      </mesh>
      <mesh position={[0, h / 2 + 0.16, 0.02]} castShadow>
        <boxGeometry args={[1.3, 0.36, 1.0]} />
        <meshStandardMaterial color="#967648" emissive="#271b0c" emissiveIntensity={0.1} roughness={0.84} metalness={0.08} />
      </mesh>
    </group>
  );
}

/* ── Torch ── */
function ArenaTorch({ position, small = false }: { position: [number, number, number]; small?: boolean }) {
  const r = small ? 0.24 : 0.32;
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.12, 0.16, small ? 0.4 : 0.54, 10]} />
        <meshStandardMaterial color="#2e1a0e" roughness={0.82} metalness={0.1} />
      </mesh>
      <mesh position={[0, small ? 0.24 : 0.32, 0]}>
        <sphereGeometry args={[r, 14, 14]} />
        <meshBasicMaterial color="#ffd27a" transparent opacity={0.88} toneMapped={false} />
      </mesh>
      <mesh position={[0, small ? 0.24 : 0.32, 0]}>
        <sphereGeometry args={[r * 2.2, 14, 14]} />
        <meshBasicMaterial color="#ff8f2e" transparent opacity={0.12} toneMapped={false} />
      </mesh>
    </group>
  );
}
