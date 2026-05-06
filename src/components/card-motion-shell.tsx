"use client";

import type { ReactNode } from "react";
import { useLayoutEffect, useMemo, useRef } from "react";

import { animated, to, useSpring } from "@react-spring/web";

import type { Direction, PlayerId } from "@/core/types";

export type CardMotionKind = "idle" | "placed" | "flipped";

interface CardMotionShellProps {
  owner: PlayerId;
  layout: "hand" | "board";
  motionKind?: CardMotionKind;
  motionKey?: string | null;
  motionDirection?: Direction | null;
  motionDelayMs?: number;
  selected?: boolean;
  hovered?: boolean;
  className?: string;
  children: ReactNode;
}

const OWNER_GLOW = {
  player: "rgba(103, 232, 249, 0.38)",
  enemy: "rgba(251, 113, 133, 0.38)",
} as const;

const REST_CONFIG = {
  mass: 0.92,
  tension: 240,
  friction: 25,
};

const SETTLE_CONFIG = {
  mass: 0.82,
  tension: 300,
  friction: 25,
  clamp: true,
};

function createRestState(layout: "hand" | "board", selected: boolean, hovered: boolean) {
  if (layout === "hand" && selected) {
    return {
      x: 0,
      y: -8,
      scale: 1.04,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      glow: 0.12,
      brightness: 1,
      saturation: 1.01,
    };
  }

  if (layout === "hand" && hovered) {
    return {
      x: 0,
      y: -3,
      scale: 1.02,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      glow: 0.05,
      brightness: 1,
      saturation: 1.01,
    };
  }

  return {
    x: 0,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    glow: 0,
    brightness: 1,
    saturation: 1,
  };
}

function resolvePlacedDirection(owner: PlayerId, motionDirection: Direction | null): Direction {
  if (motionDirection) {
    return motionDirection;
  }

  return owner === "player" ? "bottom" : "top";
}

function createPlacedState(direction: Direction) {
  switch (direction) {
    case "left":
      return {
        x: -12,
        y: -6,
        rotateX: 4,
        rotateY: -10,
        rotateZ: -2,
      };
    case "right":
      return {
        x: 12,
        y: -6,
        rotateX: 4,
        rotateY: 10,
        rotateZ: 2,
      };
    case "top":
      return {
        x: 0,
        y: -16,
        rotateX: 10,
        rotateY: 0,
        rotateZ: 0,
      };
    case "bottom":
      return {
        x: 0,
        y: 12,
        rotateX: -10,
        rotateY: 0,
        rotateZ: 0,
      };
  }
}

function createFlipState(direction: Direction) {
  switch (direction) {
    case "left":
      return {
        x: -6,
        y: -1,
        rotateX: 0,
        rotateY: -82,
        rotateZ: -2,
      };
    case "right":
      return {
        x: 6,
        y: -1,
        rotateX: 0,
        rotateY: 82,
        rotateZ: 2,
      };
    case "top":
      return {
        x: 0,
        y: -7,
        rotateX: 82,
        rotateY: 0,
        rotateZ: 0,
      };
    case "bottom":
      return {
        x: 0,
        y: 7,
        rotateX: -82,
        rotateY: 0,
        rotateZ: 0,
      };
  }
}

function buildTransform(
  layout: "hand" | "board",
  state: {
    x: number;
    y: number;
    scale: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  },
): string {
  return `perspective(${layout === "board" ? 1700 : 2200}px) translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale}) rotateX(${state.rotateX}deg) rotateY(${state.rotateY}deg) rotateZ(${state.rotateZ}deg)`;
}

function buildFilter(state: { brightness: number; saturation: number }): string {
  return `brightness(${state.brightness}) saturate(${state.saturation})`;
}

function buildShadow(owner: PlayerId, glow: number): string {
  return glow <= 0.01 ? "0 0 0 rgba(0,0,0,0)" : `0 0 ${16 + glow * 34}px ${OWNER_GLOW[owner]}`;
}

export function CardMotionShell({
  owner,
  layout,
  motionKind = "idle",
  motionKey = null,
  motionDirection = null,
  motionDelayMs = 0,
  selected = false,
  hovered = false,
  className,
  children,
}: CardMotionShellProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [springs, api] = useSpring(() => createRestState(layout, selected, hovered));
  const restState = useMemo(() => createRestState(layout, selected, hovered), [hovered, layout, selected]);

  useLayoutEffect(() => {
    if (!shellRef.current || layout !== "board" || motionKind !== "flipped" || !motionKey) {
      return;
    }

    const flipState = createFlipState(motionDirection ?? "left");
    const animation = shellRef.current.animate(
      [
        {
          transform: buildTransform(layout, restState),
          filter: buildFilter(restState),
          boxShadow: buildShadow(owner, 0),
        },
        {
          transform: buildTransform(layout, {
            ...restState,
            ...flipState,
            scale: 0.99,
          }),
          filter: buildFilter({
            brightness: 1.08,
            saturation: 1.08,
          }),
          boxShadow: buildShadow(owner, 0.5),
          offset: 0.72,
        },
        {
          transform: buildTransform(layout, restState),
          filter: buildFilter(restState),
          boxShadow: buildShadow(owner, 0),
        },
      ],
      {
        duration: motionDelayMs > 0 ? 460 : 340,
        delay: motionDelayMs,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "none",
      },
    );

    return () => animation.cancel();
  }, [layout, motionDelayMs, motionDirection, motionKey, motionKind, owner, restState]);

  useLayoutEffect(() => {
    api.stop();

    if (!motionKey || motionKind === "idle") {
      void api.start({
        ...restState,
        config: REST_CONFIG,
      });
      return;
    }

    if (layout === "board" && motionKind === "flipped") {
      void api.start({
        ...restState,
        immediate: true,
      });
      return;
    }

    void api.start({
      to: async (next) => {
        switch (motionKind) {
          case "placed":
            await next({
              ...restState,
              ...createPlacedState(resolvePlacedDirection(owner, motionDirection)),
              scale: 0.94,
              glow: 0.18,
              brightness: 1.08,
              saturation: 1.03,
              delay: motionDelayMs,
              config: {
                mass: 0.86,
                tension: 320,
                friction: 25,
              },
            });
            await next({
              ...restState,
              glow: 0.1,
              brightness: 1.01,
              saturation: 1.01,
              config: SETTLE_CONFIG,
            });
            break;
          case "flipped":
            const enemyFlipProfile =
              motionDelayMs > 0
                ? {
                    mass: 0.92,
                    tension: 235,
                    friction: 22,
                  }
                : {
                    mass: 0.84,
                    tension: 305,
                    friction: 24,
                  };
            await next({
              ...restState,
              ...createFlipState(motionDirection ?? "left"),
              scale: 0.99,
              glow: 0.5,
              brightness: 1.08,
              saturation: 1.08,
              delay: motionDelayMs,
              config: enemyFlipProfile,
            });
            await next({
              ...restState,
              glow: 0.12,
              brightness: 1.01,
              saturation: 1.01,
              config: SETTLE_CONFIG,
            });
            break;
        }
      },
    });
  }, [api, motionDelayMs, motionDirection, motionKind, motionKey, owner, restState]);

  return (
    <animated.div
      ref={shellRef}
      className={["h-full w-full [transform-style:preserve-3d]", className ?? ""].join(" ")}
      style={{
        transform: to(
          [springs.x, springs.y, springs.scale, springs.rotateX, springs.rotateY, springs.rotateZ],
          (x, y, scale, rotateX, rotateY, rotateZ) =>
            `perspective(${layout === "board" ? 1700 : 2200}px) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        ),
        filter: to(
          [springs.brightness, springs.saturation],
          (brightness, saturation) => `brightness(${brightness}) saturate(${saturation})`,
        ),
        boxShadow: springs.glow.to((glow) =>
          glow <= 0.01 ? "0 0 0 rgba(0,0,0,0)" : `0 0 ${16 + glow * 34}px ${OWNER_GLOW[owner]}`,
        ),
        willChange: "transform, filter, box-shadow",
      }}
    >
      {children}
    </animated.div>
  );
}
