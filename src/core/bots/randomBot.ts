import { listLegalMoves } from "@/core/engine";
import { compareMoveCoordinates } from "@/core/bots/botUtils";
import { pickWithSeed } from "@/core/utils/rng";
import type { Bot } from "@/core/bots/types";

/**
 * Chooses a legal move using deterministic seeded randomness.
 */
export const randomBot: Bot = {
  id: "random",
  label: "Random Bot",
  description: "Selects a legal move uniformly at random using the simulation seed.",
  chooseMove(state, context) {
    const legalMoves = listLegalMoves(state).sort(compareMoveCoordinates);
    if (legalMoves.length === 0) {
      return {
        move: null,
        nextSeed: context.seed
      };
    }

    const picked = pickWithSeed(legalMoves, context.seed);
    return {
      move: picked.item,
      nextSeed: picked.seed
    };
  }
};
