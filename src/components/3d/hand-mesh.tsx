"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

import { CardMesh, CARD_HEIGHT, CARD_WIDTH } from "./card-mesh";
import { UnitPieceMesh } from "./unit-piece-mesh";
import type { CardInstance } from "@/core/types";
import { hasUnitVisual } from "@/lib/unit-visuals";

interface HandMeshProps {
  hand: CardInstance[];
  selectedCardId: string | null;
  canInteract: boolean;
  onSelectCard: (id: string) => void;
  position?: [number, number, number];
  layout?: "horizontal" | "vertical";
}

interface EnemyHandMeshProps {
  count: number;
  active: boolean;
  position?: [number, number, number];
  layout?: "horizontal" | "vertical";
}

export const HAND_CARD_SCALE = 0.72;
export const HAND_CARD_HEIGHT = CARD_HEIGHT * HAND_CARD_SCALE;
export const HAND_CARD_WIDTH = CARD_WIDTH * HAND_CARD_SCALE;

/* ── Vertical layout constants ── */
const V_PLAYER_SCALE = 0.74;
const V_PLAYER_SCALE_MOBILE = 0.54;
const V_ENEMY_SCALE = 0.62;
const V_ENEMY_SCALE_MOBILE = 0.46;

function createHiddenCards(count: number): CardInstance[] {
  return Array.from({ length: count }, (_, index) => ({
    instanceId: `enemy-hidden-${index}`,
    archetypeId: "enemy-hidden",
    owner: "enemy",
    name: "Carte cachee",
    sides: { top: 0, right: 0, bottom: 0, left: 0 },
    family: "automaton",
    accent: "#0f172a",
    artSrc: "/images/cards-hd/fallback-card.png",
    rarity: "common",
    sourceType: "draft",
    baseArchetypeId: null,
    corruptedBy: null,
  }));
}

function UnitHandPiece({
  card,
  selected,
  hovered,
  interactive,
  onClick,
  onHover,
}: {
  card: CardInstance;
  selected: boolean;
  hovered: boolean;
  interactive: boolean;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
}) {
  useCursor(interactive && hovered, "pointer", "auto");
  const active = selected || hovered;

  const handlePointerOver = (event: { stopPropagation: () => void }) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    onHover(true);
  };

  const handlePointerOut = (event: { stopPropagation: () => void }) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    onHover(false);
  };

  return (
    <group frustumCulled={false}>
      <mesh
        position={[0, 0, 0.06]}
        frustumCulled={false}
        onClick={(event) => {
          if (!interactive) {
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

      <group position={[0, 0, 0.52]} scale={active ? 1.08 : 1} frustumCulled={false}>
        <UnitPieceMesh
          archetypeId={card.archetypeId}
          sides={card.sides}
          displayOwner={card.owner}
          selected={active}
        />
      </group>
    </group>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CardSlot — animates each card into position on mount,
   then smoothly lerps when target changes (e.g. card above removed).
   Uses React `key={card.instanceId}` so new cards get fresh mounts.
   ══════════════════════════════════════════════════════════════════ */
function CardSlot({
  targetX,
  targetY,
  targetZ,
  entryOffsetX,
  entryOffsetY,
  staggerIndex,
  children,
}: {
  targetX: number;
  targetY: number;
  targetZ: number;
  entryOffsetX: number;
  entryOffsetY: number;
  staggerIndex: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const anim = useRef({
    x: targetX + entryOffsetX,
    y: targetY + entryOffsetY,
    z: targetZ - 0.6,
    scale: 0.2,
    delay: staggerIndex * 0.09,
  });
  const targetRef = useRef({ x: targetX, y: targetY, z: targetZ });
  targetRef.current = { x: targetX, y: targetY, z: targetZ };

  useFrame((_, delta) => {
    if (!ref.current) return;
    const a = anim.current;
    const t = targetRef.current;

    if (a.delay > 0) {
      a.delay -= delta;
      ref.current.position.set(a.x, a.y, a.z);
      ref.current.scale.setScalar(a.scale);
      return;
    }

    const speed = 5.5;
    a.x += (t.x - a.x) * delta * speed;
    a.y += (t.y - a.y) * delta * speed;
    a.z += (t.z - a.z) * delta * speed;
    a.scale += (1 - a.scale) * delta * 4.5;

    ref.current.position.set(a.x, a.y, a.z);
    ref.current.scale.setScalar(a.scale);
  });

  return <group ref={ref}>{children}</group>;
}

/* ══════════════════════════════════════════════════════════════════
   Player hand — vertical column (left side) or horizontal (bottom)
   ══════════════════════════════════════════════════════════════════ */
export function HandMesh({
  hand,
  selectedCardId,
  canInteract,
  onSelectCard,
  position = [0, 0, 0],
  layout = "horizontal",
}: HandMeshProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const { viewport } = useThree();
  const totalCards = hand.length;
  const isMobile = viewport.width < 10;

  if (layout === "vertical") {
    const scale = isMobile ? V_PLAYER_SCALE_MOBILE : V_PLAYER_SCALE;
    const cardH = CARD_HEIGHT * scale;
    const gap = totalCards >= 5 ? 0.1 : 0.2;
    const totalH = totalCards * cardH + Math.max(0, totalCards - 1) * gap;

    return (
      <group position={position}>
        {/* Subtle column glow */}
        <mesh position={[0, 0, -0.08]} frustumCulled={false}>
          <planeGeometry args={[CARD_WIDTH * scale + 0.8, totalH + 1.2]} />
          <meshBasicMaterial color="#5ad4c0" transparent opacity={0.03} toneMapped={false} />
        </mesh>

        {hand.map((card, index) => {
          const isSelected = card.instanceId === selectedCardId;
          const isHovered = card.instanceId === hoveredCardId;
          const isActive = isSelected || isHovered;

          const slotY = (totalCards - 1) / 2 * (cardH + gap) - index * (cardH + gap);
          const slotX = isActive ? 0.5 : 0;
          const slotZ = isActive ? 0.35 : index * 0.01;

          return (
            <CardSlot
              key={card.instanceId}
              targetX={slotX}
              targetY={slotY}
              targetZ={slotZ}
              entryOffsetX={-7}
              entryOffsetY={0}
              staggerIndex={index}
            >
              <CardMesh
                card={card}
                position={[0, 0, 0]}
                selected={isSelected}
                interactive={canInteract}
                scale={scale}
                onClick={() => onSelectCard(card.instanceId)}
                onHover={(hovered) => setHoveredCardId(hovered ? card.instanceId : null)}
              />
            </CardSlot>
          );
        })}
      </group>
    );
  }

  /* ── Horizontal layout (original) ── */
  const gap = isMobile ? 1.46 : totalCards >= 5 ? 1.74 : 1.96;
  const scale = isMobile ? 0.66 : 0.72;

  return (
    <group position={position}>
      {hand.map((card, index) => {
        const isSelected = card.instanceId === selectedCardId;
        const isHovered = card.instanceId === hoveredCardId;
        const isActive = isSelected || isHovered;
        const targetX = (index - (totalCards - 1) / 2) * gap;
        const targetY = isActive ? 0.28 : 0;
        const targetZ = isActive ? 0.28 : index * 0.01;

        return (
          <CardSlot
            key={card.instanceId}
            targetX={targetX}
            targetY={targetY}
            targetZ={targetZ}
            entryOffsetX={0}
            entryOffsetY={-6}
            staggerIndex={index}
          >
            {hasUnitVisual(card.archetypeId) ? (
              <group scale={scale} frustumCulled={false}>
                <UnitHandPiece
                  card={card}
                  selected={isSelected}
                  hovered={isHovered}
                  interactive={canInteract}
                  onClick={() => onSelectCard(card.instanceId)}
                  onHover={(hovered) => setHoveredCardId(hovered ? card.instanceId : null)}
                />
              </group>
            ) : (
              <CardMesh
                card={card}
                position={[0, 0, 0]}
                selected={isSelected}
                interactive={canInteract}
                scale={scale}
                onClick={() => onSelectCard(card.instanceId)}
                onHover={(hovered) => setHoveredCardId(hovered ? card.instanceId : null)}
              />
            )}
          </CardSlot>
        );
      })}
    </group>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Enemy hand — vertical column (right side) or horizontal (top)
   ══════════════════════════════════════════════════════════════════ */
export function EnemyHandMesh({
  count,
  active,
  position = [0, 0, 0],
  layout = "horizontal",
}: EnemyHandMeshProps) {
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;
  const cards = useMemo(() => createHiddenCards(count), [count]);

  if (layout === "vertical") {
    const scale = isMobile ? V_ENEMY_SCALE_MOBILE : V_ENEMY_SCALE;
    const cardH = CARD_HEIGHT * scale;
    const gap = count >= 5 ? 0.08 : 0.16;
    const totalH = count * cardH + Math.max(0, count - 1) * gap;

    return (
      <group position={position}>
        {/* Subtle column glow */}
        <mesh position={[0, 0, -0.08]} frustumCulled={false}>
          <planeGeometry args={[CARD_WIDTH * scale + 0.8, totalH + 1.2]} />
          <meshBasicMaterial color="#f87171" transparent opacity={0.025} toneMapped={false} />
        </mesh>

        {cards.map((card, index) => {
          const isLeadCard = active && index === Math.floor(cards.length / 2);
          const slotY = (cards.length - 1) / 2 * (cardH + gap) - index * (cardH + gap);
          const slotX = isLeadCard ? -0.4 : 0;
          const slotZ = isLeadCard ? 0.2 : -index * 0.02;

          return (
            <CardSlot
              key={card.instanceId}
              targetX={slotX}
              targetY={slotY}
              targetZ={slotZ}
              entryOffsetX={7}
              entryOffsetY={0}
              staggerIndex={index}
            >
              <CardMesh card={card} position={[0, 0, 0]} scale={scale} interactive={false} hiddenBack />
            </CardSlot>
          );
        })}
      </group>
    );
  }

  /* ── Horizontal layout (original) ── */
  const gap = isMobile ? 1.34 : count >= 5 ? 1.58 : 1.8;
  const scale = isMobile ? 0.54 : 0.6;

  return (
    <group position={position}>
      {cards.map((card, index) => {
        const isLeadCard = active && index === Math.floor(cards.length / 2);
        const targetX = (index - (cards.length - 1) / 2) * gap;
        const targetY = isLeadCard ? -0.18 : 0;
        const targetZ = isLeadCard ? 0.16 : -index * 0.03;

        return (
          <CardSlot
            key={card.instanceId}
            targetX={targetX}
            targetY={targetY}
            targetZ={targetZ}
            entryOffsetX={0}
            entryOffsetY={6}
            staggerIndex={index}
          >
            <CardMesh card={card} position={[0, 0, 0]} scale={scale} interactive={false} hiddenBack />
          </CardSlot>
        );
      })}
    </group>
  );
}
