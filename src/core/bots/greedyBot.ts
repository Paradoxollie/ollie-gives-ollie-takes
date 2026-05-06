import { buildMovePreviewTable } from "@/core/bots/botUtils";
import type { Bot } from "@/core/bots/types";

/**
 * Chooses the legal move with the best immediate flips and short-term control gain.
 */
export const greedyBot: Bot = {
  id: "greedy",
  label: "Greedy AI",
  description: "Prioritise les flips immediats, les multi-flips et les positions qui creusent l'ecart de controle.",
  chooseMove(state, context) {
    const previews = buildMovePreviewTable(state);
    if (previews.length === 0) {
      return {
        move: null,
        nextSeed: context.seed,
      };
    }

    return {
      move: previews[0].move,
      nextSeed: context.seed,
    };
  },
};
