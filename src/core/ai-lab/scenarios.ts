import { FAMILY_STARTER_DECK_CARD_COUNT, getFamilyStarterCardIds, STARTER_DECK_FAMILIES } from "@/core/config/decks";
import { getAiPlayerModel } from "@/core/ai-lab/models";
import type { AiLabScenarioId, AiPlayerModelId } from "@/core/ai-lab/types";
import type { CardFamily } from "@/core/types";
import { mixSeed } from "@/core/utils/rng";

export interface AiLabScenario {
  id: AiLabScenarioId;
  label: string;
  description: string;
  startingDeckCardCount: number;
}

export const AI_LAB_RULESET_VERSION = "v8-2026-06-07-poison-mana-counterplay";

export const CURRENT_FAMILY_START_SCENARIO: AiLabScenario = {
  id: "current-family-start",
  label: `Depart actuel - famille ${FAMILY_STARTER_DECK_CARD_COUNT} cartes`,
  description:
    `Reproduit le depart public actuel: le joueur choisit une famille, puis joue avec son starter fixe de ${FAMILY_STARTER_DECK_CARD_COUNT} cartes.`,
  startingDeckCardCount: FAMILY_STARTER_DECK_CARD_COUNT,
};

const FAMILY_PAIR_OFFSETS = [1, 2, 3, 4, 5] as const;
export const AI_LAB_FAMILY_PAIR_COUNT = STARTER_DECK_FAMILIES.length * FAMILY_PAIR_OFFSETS.length;

/**
 * Returns the AI-lab scenarios that represent the current public game flow.
 */
export function getDefaultAiLabScenarioIds(): AiLabScenarioId[] {
  return [CURRENT_FAMILY_START_SCENARIO.id];
}

/**
 * Resolves the current game scenario and fails loudly if a removed legacy scenario is requested.
 */
export function getAiLabScenario(scenarioId: AiLabScenarioId): AiLabScenario {
  if (scenarioId !== CURRENT_FAMILY_START_SCENARIO.id) {
    throw new Error(`Unknown AI lab scenario: ${scenarioId}`);
  }

  return CURRENT_FAMILY_START_SCENARIO;
}

/**
 * Cycles through every current starter family so AI reports do not overfit one deck.
 */
export function getCurrentFamilyPairForAiLabMatch(familyPairIndex: number): {
  playerFamily: CardFamily;
  enemyFamily: CardFamily;
} {
  const playerFamily = STARTER_DECK_FAMILIES[familyPairIndex % STARTER_DECK_FAMILIES.length];
  const offset = FAMILY_PAIR_OFFSETS[Math.floor(familyPairIndex / STARTER_DECK_FAMILIES.length) % FAMILY_PAIR_OFFSETS.length];
  const enemyFamily = STARTER_DECK_FAMILIES[(familyPairIndex + offset) % STARTER_DECK_FAMILIES.length];

  return {
    playerFamily,
    enemyFamily,
  };
}

/**
 * Assigns one circular family-distance group to a series.
 * The regular mirror plus the default four-step ladder cover all 30 directed family duels.
 */
export function getCurrentFamilyPairForAiLabSeries(
  matchup: [AiPlayerModelId, AiPlayerModelId],
  matchIndex: number,
  seed: number,
): {
  playerFamily: CardFamily;
  enemyFamily: CardFamily;
} {
  const lowerRank = Math.min(getAiPlayerModel(matchup[0]).rank, getAiPlayerModel(matchup[1]).rank);
  const groupIndex = matchup[0] === matchup[1]
    ? (lowerRank + 2) % FAMILY_PAIR_OFFSETS.length
    : lowerRank % FAMILY_PAIR_OFFSETS.length;
  const matchupKey = [...matchup].sort().join("-");
  const familyRotation = Math.abs(mixSeed(seed, `family-pair-rotation:${matchupKey}`)) % STARTER_DECK_FAMILIES.length;
  const balanceBlock = Math.floor(matchIndex / 4);
  const playerFamilyIndex = (balanceBlock + familyRotation) % STARTER_DECK_FAMILIES.length;

  return getCurrentFamilyPairForAiLabMatch(groupIndex * STARTER_DECK_FAMILIES.length + playerFamilyIndex);
}

/**
 * Returns the exact fixed starter deck used after choosing a family in the live adventure.
 */
export function getCurrentFamilyStarterCardIdsForAiLab(family: CardFamily): string[] {
  return getFamilyStarterCardIds(family);
}

/**
 * Human-readable summary for reports and CLI output.
 */
export function describeCurrentAiLabScenario(): string {
  return `${CURRENT_FAMILY_START_SCENARIO.label} (${CURRENT_FAMILY_START_SCENARIO.startingDeckCardCount} cartes fixes par famille)`;
}
