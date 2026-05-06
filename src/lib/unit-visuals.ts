export type UnitAnimationKey =
  | "idle"
  | "ready"
  | "happy"
  | "hit"
  | "walkRight"
  | "walkLeft"
  | "walkUp"
  | "walkDown"
  | "runRight"
  | "runLeft"
  | "action"
  | "actionLeft";

export interface UnitVisualConfig {
  archetypeId: string;
  spriteSrc: string;
  uiAnimationSrc?: string;
  animations?: {
    idle: string;
    ready: string;
    happy: string;
    hit: string;
    walkRight: string;
    walkLeft?: string;
    walkUp?: string;
    walkDown?: string;
    runRight?: string;
    runLeft?: string;
    action?: string;
    actionLeft?: string;
  };
  animationFrames?: Partial<Record<UnitAnimationKey, number>>;
  animationFrameRates?: Partial<Record<UnitAnimationKey, number>>;
  spriteWidth: number;
  spriteHeight: number;
  spriteYOffset: number;
  frameCount: number;
  frameRate: number;
  baseRadiusX: number;
  baseRadiusY: number;
  idleBobAmplitude: number;
  idleBobSpeed: number;
  breatheScale: number;
  pixelated: boolean;
}

export const UNIT_VISUALS: Readonly<Record<string, UnitVisualConfig>> = {
  sapling: {
    archetypeId: "sapling",
    spriteSrc: "/images/units/plant/idle-sheet.png",
    uiAnimationSrc: "/images/units/plant/idle-ui.png",
    animations: {
      idle: "/images/units/plant/idle-sheet.png",
      ready: "/images/units/plant/ready-sheet.png",
      happy: "/images/units/plant/happy-sheet.png",
      hit: "/images/units/plant/hit-sheet.png",
      walkRight: "/images/units/plant/walk-right-sheet.png",
      walkLeft: "/images/units/plant/walk-left-sheet.png",
      runRight: "/images/units/plant/run-right-sheet.png",
      runLeft: "/images/units/plant/run-left-sheet.png",
      action: "/images/units/plant/action-sheet.png",
      actionLeft: "/images/units/plant/action-left-sheet.png",
    },
    animationFrames: {
      idle: 6,
      ready: 6,
      happy: 4,
      hit: 8,
      walkRight: 8,
      walkLeft: 8,
      runRight: 8,
      runLeft: 8,
      action: 4,
      actionLeft: 4,
    },
    animationFrameRates: {
      idle: 8.5,
      ready: 9.5,
      happy: 10,
      hit: 10.5,
      walkRight: 11,
      walkLeft: 11,
      runRight: 13.5,
      runLeft: 13.5,
      action: 12,
      actionLeft: 12,
    },
    spriteWidth: 2.74,
    spriteHeight: 2.74,
    spriteYOffset: -0.2,
    frameCount: 6,
    frameRate: 8.5,
    baseRadiusX: 1.02,
    baseRadiusY: 0.34,
    idleBobAmplitude: 0.035,
    idleBobSpeed: 2.1,
    breatheScale: 0.012,
    pixelated: false,
  },
  stag: {
    archetypeId: "stag",
    spriteSrc: "/images/units/hedgehog/idle-sheet.png",
    uiAnimationSrc: "/images/units/hedgehog/idle-ui.png",
    animations: {
      idle: "/images/units/hedgehog/idle-sheet.png",
      ready: "/images/units/hedgehog/ready-sheet.png",
      happy: "/images/units/hedgehog/happy-sheet.png",
      hit: "/images/units/hedgehog/hit-sheet.png",
      walkRight: "/images/units/hedgehog/walk-right-sheet.png",
    },
    animationFrames: { idle: 4, ready: 5, happy: 5, hit: 5, walkRight: 8 },
    animationFrameRates: { idle: 7.5, ready: 8, happy: 8, hit: 10, walkRight: 10 },
    spriteWidth: 2.62,
    spriteHeight: 2.62,
    spriteYOffset: -0.24,
    frameCount: 4,
    frameRate: 8,
    baseRadiusX: 1.04,
    baseRadiusY: 0.36,
    idleBobAmplitude: 0.04,
    idleBobSpeed: 2.15,
    breatheScale: 0.014,
    pixelated: false,
  },
  badger: {
    archetypeId: "badger",
    spriteSrc: "/images/units/horse/idle-sheet.png",
    uiAnimationSrc: "/images/units/horse/idle-ui.png",
    animations: {
      idle: "/images/units/horse/idle-sheet.png",
      ready: "/images/units/horse/ready-sheet.png",
      happy: "/images/units/horse/happy-sheet.png",
      hit: "/images/units/horse/hit-sheet.png",
      walkRight: "/images/units/horse/walk-right-sheet.png",
      walkLeft: "/images/units/horse/walk-left-sheet.png",
      runRight: "/images/units/horse/run-right-sheet.png",
      runLeft: "/images/units/horse/run-left-sheet.png",
      action: "/images/units/horse/action-right-sheet.png",
      actionLeft: "/images/units/horse/action-sheet.png",
    },
    animationFrames: {
      idle: 4,
      ready: 4,
      happy: 4,
      hit: 4,
      walkRight: 6,
      walkLeft: 6,
      runRight: 9,
      runLeft: 9,
      action: 6,
      actionLeft: 6,
    },
    animationFrameRates: {
      idle: 8.2,
      ready: 8,
      happy: 8,
      hit: 9,
      walkRight: 11,
      walkLeft: 11,
      runRight: 13,
      runLeft: 13,
      action: 14,
      actionLeft: 14,
    },
    spriteWidth: 2.84,
    spriteHeight: 2.84,
    spriteYOffset: -0.24,
    frameCount: 4,
    frameRate: 8.2,
    baseRadiusX: 1.08,
    baseRadiusY: 0.36,
    idleBobAmplitude: 0.035,
    idleBobSpeed: 2.05,
    breatheScale: 0.012,
    pixelated: false,
  },
  mole: {
    archetypeId: "mole",
    spriteSrc: "/images/units/squirrel/idle-sheet.png",
    uiAnimationSrc: "/images/units/squirrel/idle-ui.png",
    animations: {
      idle: "/images/units/squirrel/idle-sheet.png",
      ready: "/images/units/squirrel/ready-sheet.png",
      happy: "/images/units/squirrel/happy-sheet.png",
      hit: "/images/units/squirrel/hit-sheet.png",
      walkRight: "/images/units/squirrel/walk-right-sheet.png",
      walkLeft: "/images/units/squirrel/walk-left-sheet.png",
      walkUp: "/images/units/squirrel/walk-up-sheet.png",
      walkDown: "/images/units/squirrel/walk-down-sheet.png",
      runRight: "/images/units/squirrel/run-right-sheet.png",
      runLeft: "/images/units/squirrel/run-left-sheet.png",
      action: "/images/units/squirrel/action-sheet.png",
      actionLeft: "/images/units/squirrel/action-left-sheet.png",
    },
    animationFrames: {
      idle: 6,
      ready: 6,
      happy: 12,
      hit: 8,
      walkRight: 6,
      walkLeft: 6,
      walkUp: 6,
      walkDown: 6,
      runRight: 6,
      runLeft: 6,
      action: 12,
      actionLeft: 12,
    },
    animationFrameRates: {
      idle: 9.5,
      ready: 10,
      happy: 9.5,
      hit: 9.5,
      walkRight: 12,
      walkLeft: 12,
      walkUp: 10,
      walkDown: 10,
      runRight: 14,
      runLeft: 14,
      action: 10.5,
      actionLeft: 12,
    },
    spriteWidth: 2.68,
    spriteHeight: 2.68,
    spriteYOffset: -0.22,
    frameCount: 4,
    frameRate: 7.6,
    baseRadiusX: 1.0,
    baseRadiusY: 0.35,
    idleBobAmplitude: 0.035,
    idleBobSpeed: 2.05,
    breatheScale: 0.012,
    pixelated: false,
  },
  heron: {
    archetypeId: "heron",
    spriteSrc: "/images/units/bird/idle-sheet.png",
    uiAnimationSrc: "/images/units/bird/idle-ui.png",
    animations: {
      idle: "/images/units/bird/idle-sheet.png",
      ready: "/images/units/bird/ready-sheet.png",
      happy: "/images/units/bird/happy-sheet.png",
      hit: "/images/units/bird/hit-sheet.png",
      walkRight: "/images/units/bird/walk-right-sheet.png",
      walkLeft: "/images/units/bird/walk-left-sheet.png",
      runRight: "/images/units/bird/run-right-sheet.png",
      runLeft: "/images/units/bird/run-left-sheet.png",
      action: "/images/units/bird/action-sheet.png",
      actionLeft: "/images/units/bird/action-left-sheet.png",
    },
    animationFrames: {
      idle: 6,
      ready: 6,
      happy: 4,
      hit: 8,
      walkRight: 8,
      walkLeft: 8,
      runRight: 8,
      runLeft: 8,
      action: 4,
      actionLeft: 4,
    },
    animationFrameRates: {
      idle: 8.5,
      ready: 9.5,
      happy: 10,
      hit: 10.5,
      walkRight: 11,
      walkLeft: 11,
      runRight: 13.5,
      runLeft: 13.5,
      action: 12,
      actionLeft: 12,
    },
    spriteWidth: 2.72,
    spriteHeight: 2.72,
    spriteYOffset: -0.2,
    frameCount: 6,
    frameRate: 8.5,
    baseRadiusX: 1.02,
    baseRadiusY: 0.34,
    idleBobAmplitude: 0.04,
    idleBobSpeed: 2.2,
    breatheScale: 0.014,
    pixelated: false,
  },
  foxfire: {
    archetypeId: "foxfire",
    spriteSrc: "/images/units/shark/idle-sheet.png",
    uiAnimationSrc: "/images/units/shark/idle-ui.png",
    animations: {
      idle: "/images/units/shark/idle-sheet.png",
      ready: "/images/units/shark/ready-sheet.png",
      happy: "/images/units/shark/happy-sheet.png",
      hit: "/images/units/shark/hit-sheet.png",
      walkRight: "/images/units/shark/walk-right-sheet.png",
      walkLeft: "/images/units/shark/walk-left-sheet.png",
      runRight: "/images/units/shark/run-right-sheet.png",
      runLeft: "/images/units/shark/run-left-sheet.png",
      action: "/images/units/shark/action-sheet.png",
      actionLeft: "/images/units/shark/action-left-sheet.png",
    },
    animationFrames: {
      idle: 6,
      ready: 6,
      happy: 6,
      hit: 4,
      walkRight: 6,
      walkLeft: 6,
      runRight: 6,
      runLeft: 6,
      action: 6,
      actionLeft: 6,
    },
    animationFrameRates: {
      idle: 9.5,
      ready: 10,
      happy: 9,
      hit: 8.5,
      walkRight: 10,
      walkLeft: 10,
      runRight: 12,
      runLeft: 12,
      action: 11,
      actionLeft: 11,
    },
    spriteWidth: 2.86,
    spriteHeight: 2.86,
    spriteYOffset: -0.22,
    frameCount: 6,
    frameRate: 9.5,
    baseRadiusX: 1.06,
    baseRadiusY: 0.36,
    idleBobAmplitude: 0.04,
    idleBobSpeed: 2.2,
    breatheScale: 0.014,
    pixelated: false,
  },
  owl: {
    archetypeId: "owl",
    spriteSrc: "/images/units/cat/idle-sheet.png",
    uiAnimationSrc: "/images/units/cat/idle-ui.png",
    animations: {
      idle: "/images/units/cat/idle-sheet.png",
      ready: "/images/units/cat/ready-sheet.png",
      happy: "/images/units/cat/happy-sheet.png",
      hit: "/images/units/cat/hit-sheet.png",
      walkRight: "/images/units/cat/walk-right-sheet.png",
      walkLeft: "/images/units/cat/walk-left-sheet.png",
      runRight: "/images/units/cat/run-right-sheet.png",
      runLeft: "/images/units/cat/run-left-sheet.png",
      action: "/images/units/cat/action-sheet.png",
      actionLeft: "/images/units/cat/action-left-sheet.png",
    },
    animationFrames: {
      idle: 6,
      ready: 6,
      happy: 4,
      hit: 8,
      walkRight: 8,
      walkLeft: 8,
      runRight: 8,
      runLeft: 8,
      action: 4,
      actionLeft: 4,
    },
    animationFrameRates: {
      idle: 8.5,
      ready: 9.5,
      happy: 10,
      hit: 10.5,
      walkRight: 11,
      walkLeft: 11,
      runRight: 13.5,
      runLeft: 13.5,
      action: 12,
      actionLeft: 12,
    },
    spriteWidth: 2.72,
    spriteHeight: 2.72,
    spriteYOffset: -0.2,
    frameCount: 6,
    frameRate: 8.5,
    baseRadiusX: 1.02,
    baseRadiusY: 0.34,
    idleBobAmplitude: 0.035,
    idleBobSpeed: 2.1,
    breatheScale: 0.012,
    pixelated: false,
  },
};

/**
 * Returns the tactical unit visual config for an archetype when it has a character-mode asset.
 */
export function getUnitVisual(archetypeId: string): UnitVisualConfig | null {
  return UNIT_VISUALS[archetypeId] ?? null;
}

/**
 * Returns whether an archetype should render as a character unit instead of a flat card.
 */
export function hasUnitVisual(archetypeId: string): boolean {
  return Boolean(getUnitVisual(archetypeId));
}
