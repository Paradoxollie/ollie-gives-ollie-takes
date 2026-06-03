import { championBot } from "@/core/bots/championBot";
import { greedyBot } from "@/core/bots/greedyBot";
import { heuristicBot } from "@/core/bots/heuristicBot";
import { randomBot } from "@/core/bots/randomBot";
import { trainedBot } from "@/core/bots/trainedBot";
import type { Bot, BotId } from "@/core/bots/types";

export const BOT_REGISTRY: Record<BotId, Bot> = {
  champion: championBot,
  random: randomBot,
  greedy: greedyBot,
  heuristic: heuristicBot,
  trained: trainedBot,
};

/**
 * Resolves a bot by id and fails loudly if the bot is unavailable.
 */
export function getBot(botId: BotId): Bot {
  const bot = BOT_REGISTRY[botId];
  if (!bot) {
    throw new Error(`Unknown bot id: ${botId}`);
  }

  return bot;
}

export * from "@/core/bots/types";
export { championBot, createConfiguredChampionBot } from "@/core/bots/championBot";
export { greedyBot, heuristicBot, randomBot, trainedBot };
export { TRAINED_BOT_PROFILE } from "@/core/bots/generated/trainedWeights";
export { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
