import { getCardStrength } from "@/core/cards";
import type { AdventureDeckCard, CardArchetype, CardSides, Direction } from "@/core/types";

const CARD_DIRECTIONS: Direction[] = ["top", "right", "bottom", "left"];
const CORNER_PAIRS: Direction[][] = [
  ["top", "left"],
  ["top", "right"],
  ["bottom", "left"],
  ["bottom", "right"],
];
const EDGE_PAIRS: Direction[][] = [
  ["top", "right"],
  ["right", "bottom"],
  ["bottom", "left"],
  ["left", "top"],
];

export interface DeckAnalysisSummary {
  averageStrength: number;
  averageBalance: number;
  averageCornerValue: number;
  averageEdgeValue: number;
  averageSpikeValue: number;
  averageTrapValue: number;
  fusionPotential: number;
  weakestDirectionValue: number;
  directionCoverage: CardSides;
  specialCount: number;
}

export interface DeckBuildProfile {
  aggression: number;
  control: number;
  tempo: number;
  fusion: number;
  precision: number;
  trimPressure: number;
  uncommonCount: number;
  rareCount: number;
  duplicatePressure: number;
}

function sumSides(sides: CardSides): number {
  return sides.top + sides.right + sides.bottom + sides.left;
}

function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function variance(values: number[]): number {
  const mean = average(values);
  return average(values.map((value) => (value - mean) ** 2));
}

function adjacentPairPeak(sides: CardSides, pairs: Direction[][]): number {
  return Math.max(...pairs.map(([first, second]) => sides[first] + sides[second]));
}

export function getCardBalanceScore(card: Pick<CardArchetype, "sides">): number {
  const values = Object.values(card.sides);
  return sumSides(card.sides) - variance(values) * 0.85;
}

export function getCardCornerValue(card: Pick<CardArchetype, "sides">): number {
  return adjacentPairPeak(card.sides, CORNER_PAIRS);
}

export function getCardEdgeValue(card: Pick<CardArchetype, "sides">): number {
  return adjacentPairPeak(card.sides, EDGE_PAIRS);
}

export function getCardSpikeValue(card: Pick<CardArchetype, "sides">): number {
  const values = Object.values(card.sides).sort((left, right) => right - left);
  return values[0] * 1.75 + values[1] * 0.65 - values[3] * 0.75;
}

export function getCardTrapValue(card: Pick<CardArchetype, "sides">): number {
  const values = Object.values(card.sides).sort((left, right) => right - left);
  const oppositeSwing = Math.abs(card.sides.top - card.sides.bottom) + Math.abs(card.sides.left - card.sides.right);
  return values[0] * 1.4 + values[1] * 1.05 + oppositeSwing * 0.45 - values[3];
}

export function getCardFusionValue(card: Pick<CardArchetype, "sides">): number {
  const values = Object.values(card.sides).sort((left, right) => right - left);
  return values[0] + values[1] + Math.max(0, 6 - values[2]) + Math.max(0, 6 - values[3]);
}

export function analyzeDeck(cards: CardArchetype[]): DeckAnalysisSummary {
  if (cards.length === 0) {
    return {
      averageStrength: 0,
      averageBalance: 0,
      averageCornerValue: 0,
      averageEdgeValue: 0,
      averageSpikeValue: 0,
      averageTrapValue: 0,
      fusionPotential: 0,
      weakestDirectionValue: 0,
      directionCoverage: { top: 0, right: 0, bottom: 0, left: 0 },
      specialCount: 0,
    };
  }

  const directionCoverage = cards.reduce(
    (coverage, card) => {
      coverage.top = Math.max(coverage.top, card.sides.top);
      coverage.right = Math.max(coverage.right, card.sides.right);
      coverage.bottom = Math.max(coverage.bottom, card.sides.bottom);
      coverage.left = Math.max(coverage.left, card.sides.left);
      return coverage;
    },
    { top: 0, right: 0, bottom: 0, left: 0 },
  );

  let bestFusionPotential = 0;
  for (let leftIndex = 0; leftIndex < cards.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < cards.length; rightIndex += 1) {
      const left = Object.values(cards[leftIndex].sides).sort((a, b) => b - a);
      const right = Object.values(cards[rightIndex].sides).sort((a, b) => b - a);
      bestFusionPotential = Math.max(bestFusionPotential, left[0] + left[1] + right[0] + right[1]);
    }
  }

  return {
    averageStrength: average(cards.map((card) => getCardStrength(card))),
    averageBalance: average(cards.map((card) => getCardBalanceScore(card))),
    averageCornerValue: average(cards.map((card) => getCardCornerValue(card))),
    averageEdgeValue: average(cards.map((card) => getCardEdgeValue(card))),
    averageSpikeValue: average(cards.map((card) => getCardSpikeValue(card))),
    averageTrapValue: average(cards.map((card) => getCardTrapValue(card))),
    fusionPotential: bestFusionPotential,
    weakestDirectionValue: Math.min(...CARD_DIRECTIONS.map((direction) => directionCoverage[direction])),
    directionCoverage,
    specialCount: cards.filter((card) => card.sourceType !== "draft").length,
  };
}

export function analyzeAdventureDeck(deckCards: AdventureDeckCard[]): DeckAnalysisSummary {
  return analyzeDeck(deckCards.map((entry) => entry.card));
}

function createZeroBuildProfile(): DeckBuildProfile {
  return {
    aggression: 0,
    control: 0,
    tempo: 0,
    fusion: 0,
    precision: 0,
    trimPressure: 0,
    uncommonCount: 0,
    rareCount: 0,
    duplicatePressure: 0,
  };
}

export function analyzeDeckBuildProfile(cards: CardArchetype[]): DeckBuildProfile {
  if (cards.length === 0) {
    return createZeroBuildProfile();
  }

  const summary = analyzeDeck(cards);
  const baseIdCounts = new Map<string, number>();
  let uncommonCount = 0;
  let rareCount = 0;
  let draftCount = 0;

  for (const card of cards) {
    const baseId = card.baseArchetypeId ?? card.id;
    baseIdCounts.set(baseId, (baseIdCounts.get(baseId) ?? 0) + 1);
    if (card.rarity === "uncommon") {
      uncommonCount += 1;
    } else if (card.rarity === "rare") {
      rareCount += 1;
    }

    if (card.sourceType === "draft") {
      draftCount += 1;
    }
  }

  const duplicateCount = [...baseIdCounts.values()].reduce((sum, count) => sum + Math.max(0, count - 1), 0);

  return {
    aggression: summary.averageSpikeValue * 0.9 + summary.averageStrength * 0.35,
    control: summary.averageCornerValue * 0.7 + summary.averageEdgeValue * 0.65 + summary.averageBalance * 0.18,
    tempo: summary.averageBalance * 0.42 + summary.weakestDirectionValue * 0.95 + summary.specialCount * 0.35,
    fusion: summary.fusionPotential * 0.12 + summary.averageTrapValue * 0.16,
    precision: summary.averageBalance * 0.5 + summary.weakestDirectionValue * 0.78,
    trimPressure: Math.max(0, draftCount - summary.specialCount * 0.45) + duplicateCount * 0.85,
    uncommonCount,
    rareCount,
    duplicatePressure: duplicateCount / cards.length,
  };
}

export function analyzeAdventureDeckBuildProfile(deckCards: AdventureDeckCard[]): DeckBuildProfile {
  return analyzeDeckBuildProfile(deckCards.map((entry) => entry.card));
}
