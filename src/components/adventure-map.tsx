"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { MapNodeGlyph } from "@/components/map-node-glyph";
import { getAdventureNode, getAdventureNodeStatus } from "@/core";
import type { AdventureNode, AdventureRunState } from "@/core/types";

interface AdventureMapProps {
  run: AdventureRunState;
  onSelectNode: (nodeId: string) => void;
}

interface NodePosition {
  x: number;
  y: number;
}

type EdgePalette = {
  underlay: string;
  stroke: string;
  accent: string | null;
};

const KIND_LABELS: Record<AdventureNode["kind"], string> = {
  combat: "Combat",
  elite: "Elite",
  shop: "Forge",
  chest: "Tresor",
  rest: "Camp",
  boss: "Boss",
};

const NODE_TONES: Record<AdventureNode["kind"], string> = {
  combat:
    "border-[#2a6a7a] bg-[radial-gradient(circle_at_top,rgba(30,100,130,0.98),rgba(12,45,60,0.96)_60%,rgba(6,22,30,0.98)_100%)] text-[#b7f4f2] shadow-[0_22px_46px_rgba(4,20,30,0.6)]",
  elite:
    "border-[#6a7a2a] bg-[radial-gradient(circle_at_top,rgba(100,120,40,0.98),rgba(45,55,18,0.96)_60%,rgba(22,28,10,0.98)_100%)] text-[#f6f8df] shadow-[0_22px_46px_rgba(25,30,8,0.6)]",
  shop:
    "border-[#2a7a6a] bg-[radial-gradient(circle_at_top,rgba(30,110,95,0.98),rgba(12,50,42,0.96)_60%,rgba(6,24,20,0.98)_100%)] text-[#b9f6ca] shadow-[0_22px_46px_rgba(4,22,18,0.6)]",
  chest:
    "border-[#7a6a2a] bg-[radial-gradient(circle_at_top,rgba(120,100,40,0.98),rgba(55,44,16,0.96)_60%,rgba(28,22,8,0.98)_100%)] text-[#fff4db] shadow-[0_22px_46px_rgba(30,22,8,0.6)]",
  rest:
    "border-[#2a7a4a] bg-[radial-gradient(circle_at_top,rgba(30,110,72,0.98),rgba(12,48,30,0.96)_60%,rgba(6,24,14,0.98)_100%)] text-[#b9f6ca] shadow-[0_22px_46px_rgba(4,20,12,0.6)]",
  boss:
    "border-[#7a2a3a] bg-[radial-gradient(circle_at_top,rgba(130,40,60,0.98),rgba(58,16,26,0.96)_60%,rgba(30,8,14,0.98)_100%)] text-[#ffcdd2] shadow-[0_26px_56px_rgba(40,8,14,0.65)]",
};

const STATUS_STYLES = {
  locked: "opacity-50 saturate-[0.82]",
  available: "cursor-pointer drop-shadow-[0_0_40px_rgba(79,195,247,0.5)] scale-105",
  active: "drop-shadow-[0_0_38px_rgba(255,204,128,0.5)]",
  completed: "drop-shadow-[0_0_24px_rgba(105,240,174,0.3)] saturate-[0.92]",
} as const;

function getFocusDepth(run: AdventureRunState): number {
  if (run.phase === "encounter" && run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId).depth;
  }

  if (run.availableNodeIds.length > 0) {
    return Math.max(...run.availableNodeIds.map((nodeId) => getAdventureNode(run, nodeId).depth));
  }

  if (run.activeNodeId) {
    return getAdventureNode(run, run.activeNodeId).depth;
  }

  return 0;
}

function getNodeButtonWidth(node: AdventureNode): number {
  return node.kind === "boss" ? 148 : 128;
}

function getEdgePalette(run: AdventureRunState, from: AdventureNode, to: AdventureNode): EdgePalette {
  const fromCompleted = run.history.includes(from.id);
  const toCompleted = run.history.includes(to.id);
  const toAvailable = run.availableNodeIds.includes(to.id);

  if (fromCompleted && toCompleted) {
    return {
      underlay: "rgba(18,60,40,0.38)",
      stroke: "#69f0ae",
      accent: "#4fc3f7",
    };
  }

  if (fromCompleted && toAvailable) {
    return {
      underlay: "rgba(15,50,65,0.34)",
      stroke: "#4fc3f7",
      accent: "#e0f7fa",
    };
  }

  if (run.phase === "encounter" && run.activeNodeId === from.id) {
    return {
      underlay: "rgba(80,60,20,0.34)",
      stroke: "#ffcc80",
      accent: "#fff8e1",
    };
  }

  return {
    underlay: "rgba(10,25,30,0.24)",
    stroke: "#1a3a3a",
    accent: null,
  };
}

function buildEdgePath(from: NodePosition, to: NodePosition): string {
  const middleY = (from.y + to.y) / 2;
  const bend = (to.x - from.x) * 0.22;
  const verticalNudge = Math.max(18, Math.abs(to.x - from.x) * 0.12);

  return `M ${from.x} ${from.y} C ${from.x + bend} ${middleY + verticalNudge} ${to.x - bend} ${middleY - verticalNudge} ${to.x} ${to.y}`;
}

export function AdventureMap({ run, onSelectNode }: AdventureMapProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const layout = useMemo(() => {
    const horizontalPadding = 120;
    const topPadding = 140;
    const laneGap = 174;
    const rowGap = 192;
    const totalDepths = run.map.depthCount + 1;
    const width = horizontalPadding * 2 + (run.map.laneCount - 1) * laneGap;
    const height = topPadding * 2 + (totalDepths - 1) * rowGap;
    const positions = new Map<string, NodePosition>();

    for (const node of run.map.nodes) {
      const displayRow = totalDepths - 1 - node.depth;
      positions.set(node.id, {
        x: horizontalPadding + node.lane * laneGap,
        y: topPadding + displayRow * rowGap,
      });
    }

    return {
      width,
      height,
      rowGap,
      positions,
    };
  }, [run.map.depthCount, run.map.laneCount, run.map.nodes]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const focusDepth = getFocusDepth(run);
    const focusNode = run.map.nodes.find((node) => node.depth === focusDepth);
    if (!focusNode) {
      return;
    }

    const focusPosition = layout.positions.get(focusNode.id);
    if (!focusPosition) {
      return;
    }

    const targetTop = Math.max(0, focusPosition.y - scroller.clientHeight + layout.rowGap * 2.1);
    scroller.scrollTo({ top: targetTop });
  }, [layout.positions, layout.rowGap, run]);

  return (
    <div
      ref={scrollerRef}
      className="ogot-scroll ogot-map-page relative h-full overflow-auto p-3 shadow-[0_28px_100px_rgba(2,6,10,0.5)] sm:p-4"
      data-testid="adventure-map"
    >
      <div
        className="relative mx-auto overflow-visible rounded-[2rem] border border-[#1a3a3a]/40 shadow-[0_30px_68px_rgba(2,8,12,0.5)]"
        style={{
          width: `${layout.width}px`,
          height: `${layout.height}px`,
          backgroundImage:
            "radial-gradient(circle at center, rgba(30,90,80,0.35), rgba(20,60,60,0) 40%), radial-gradient(circle at 30% 70%, rgba(15,60,70,0.28), transparent 50%), radial-gradient(circle at 70% 30%, rgba(20,50,80,0.2), transparent 45%), linear-gradient(180deg, rgba(10,28,32,0.98), rgba(8,22,28,0.97) 50%, rgba(6,16,22,0.98))",
          backgroundSize: "auto, auto, auto, auto",
          backgroundPosition: "center, center, center, center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(79,195,247,0.03)_1px,transparent_1px)] bg-[length:3rem_3rem] opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(79,195,247,0.04),rgba(79,195,247,0)_18%,rgba(105,240,174,0.02)_100%)] opacity-90" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(20,80,100,0.12),rgba(20,80,100,0))]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(79,195,247,0),rgba(79,195,247,0.04),rgba(79,195,247,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(-90deg,rgba(20,80,100,0.12),rgba(20,80,100,0))]" />
        <div className="pointer-events-none absolute left-8 top-8 rounded-full border border-[#4fc3f7]/20 bg-[rgba(8,24,30,0.85)] px-4 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#b7f4f2] shadow-[0_12px_30px_rgba(4,15,20,0.4)]">
          Chapitre 1 · Brindilles
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${layout.width} ${layout.height}`} aria-hidden="true">
          {run.map.nodes.flatMap((node) =>
            node.nextNodeIds.map((nextNodeId) => {
              const nextNode = getAdventureNode(run, nextNodeId);
              const from = layout.positions.get(node.id);
              const to = layout.positions.get(nextNodeId);
              if (!from || !to) {
                return null;
              }

              const path = buildEdgePath(from, to);
              const palette = getEdgePalette(run, node, nextNode);

              return (
                <g key={`${node.id}-${nextNodeId}`}>
                  <path d={path} stroke={palette.underlay} strokeWidth={18} strokeLinecap="round" fill="none" />
                  <path d={path} stroke={palette.stroke} strokeWidth={6} strokeLinecap="round" fill="none" opacity={palette.accent ? 1 : 0.82} />
                  {palette.accent ? <path d={path} stroke={palette.accent} strokeWidth={2.8} strokeLinecap="round" fill="none" opacity={0.95} /> : null}
                </g>
              );
            }),
          )}
        </svg>

        {run.map.nodes.map((node) => {
          const position = layout.positions.get(node.id);
          if (!position) {
            return null;
          }

          const status = getAdventureNodeStatus(run, node.id);
          const isAvailable = status === "available";
          const isHovered = hoveredNodeId === node.id;
          const buttonWidth = getNodeButtonWidth(node);

          return (
            <button
              key={node.id}
              type="button"
              aria-label={`${KIND_LABELS[node.kind]} ${node.kind === "boss" ? "Final" : `etape ${node.depth + 1}`}`}
              aria-disabled={!isAvailable}
              onClick={() => {
                if (isAvailable) {
                  onSelectNode(node.id);
                }
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
              onFocus={() => setHoveredNodeId(node.id)}
              onBlur={() => setHoveredNodeId((current) => (current === node.id ? null : current))}
              className={[
                "absolute isolate -translate-x-1/2 -translate-y-1/2 overflow-visible transition duration-200",
                STATUS_STYLES[status],
                isHovered ? "z-[140]" : "z-[20]",
              ].join(" ")}
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${buttonWidth}px`,
              }}
              data-testid={`adventure-node-${node.id}`}
            >
              <div className="relative flex flex-col items-center justify-center">
                <div
                  className={[
                    "relative flex items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(79,195,247,0.15)]",
                    NODE_TONES[node.kind],
                    node.kind === "boss" ? "h-[6.8rem] w-[6.8rem]" : "h-[5.8rem] w-[5.8rem]",
                    status === "available"
                      ? "ring-2 ring-[#4fc3f7]/50"
                      : status === "active"
                        ? "ring-2 ring-[#ffcc80]/55"
                        : status === "completed"
                          ? "ring-2 ring-[#69f0ae]/35"
                          : "",
                  ].join(" ")}
                >
                  <span className="absolute inset-[0.22rem] rounded-full border border-[#4fc3f7]/8 bg-[radial-gradient(circle_at_top,rgba(79,195,247,0.1),rgba(79,195,247,0)_58%)]" />
                  <span className="absolute inset-[0.5rem] rounded-full bg-[radial-gradient(circle_at_top,rgba(105,240,174,0.08),rgba(105,240,174,0)_62%)]" />
                  <MapNodeGlyph kind={node.kind} />
                </div>

                {/* Always-visible label below node */}
                <div className="mt-1.5 text-center">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#e0f7fa] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{KIND_LABELS[node.kind]}</p>
                </div>

                {isHovered ? (
                  <div className="ogot-tooltip pointer-events-none z-[180] left-1/2 bottom-[calc(100%+0.8rem)] w-[15rem] -translate-x-1/2 opacity-100">
                    <p className="text-[0.44rem] uppercase tracking-[0.22em] text-[#b7f4f2]/50">{KIND_LABELS[node.kind]}</p>
                    <p className="mt-1 text-sm font-semibold text-[#e0f7fa]">{node.title}</p>
                    <p className="mt-2 text-[0.72rem] leading-5 text-[#b2dfdb]/80">{node.description}</p>
                    <p className="mt-2 text-[0.68rem] leading-5 text-[#b7f4f2]/70">
                      {isAvailable ? "Cliquer pour entrer" : "Route non disponible pour l'instant"}
                    </p>
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
