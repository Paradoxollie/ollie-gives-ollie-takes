import { getFamilyStarterCardIds, STARTER_DECK_FAMILIES } from "@/core/config/decks";
import type { AiLabScenarioId } from "@/core/ai-lab/types";
import type { CardFamily } from "@/core/types";

export interface AiLabScenario {
  id: AiLabScenarioId;
  label: string;
  description: string;
  startingDeckCardCount: number;
}

export const CURRENT_FAMILY_START_SCENARIO: AiLabScenario = {
  id: "current-family-start",
  label: "Depart actuel - famille 10 cartes",
  description:
    "Reproduit le depart public actuel: le joueur choisit une famille, puis joue avec son starter fixe de 10 cartes.",
  startingDeckCardCount: 10,
};

const FAMILY_PAIR_OFFSETS = [0, 1, 2, 3, 4, 5] as const;

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
export function getCurrentFamilyPairForAiLabMatch(matchIndex: number): {
  playerFamily: CardFamily;
  enemyFamily: CardFamily;
} {
  const playerFamily = STARTER_DECK_FAMILIES[matchIndex % STARTER_DECK_FAMILIES.length];
  const offset = FAMILY_PAIR_OFFSETS[Math.floor(matchIndex / STARTER_DECK_FAMILIES.length) % FAMILY_PAIR_OFFSETS.length];
  const enemyFamily = STARTER_DECK_FAMILIES[(matchIndex + offset) % STARTER_DECK_FAMILIES.length];

  return {
    playerFamily,
    enemyFamily,
  };
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
