import type { AiPlayerModel, AiPlayerModelId } from "@/core/ai-lab/types";

export const AI_PLAYER_MODELS: AiPlayerModel[] = [
  {
    id: "beginner",
    label: "Debutant",
    skillLabel: "Joue sans plan",
    rank: 1,
    botId: "random",
    searchDepth: 1,
    beamWidth: 9,
    description: "Modele de joueur qui decouvre les cartes et rate souvent les bons flips.",
  },
  {
    id: "opportunist",
    label: "Opportuniste",
    skillLabel: "Cherche le flip visible",
    rank: 2,
    botId: "greedy",
    searchDepth: 1,
    beamWidth: 12,
    description: "Modele de joueur qui prend les gains immediats sans vraiment proteger le tour suivant.",
  },
  {
    id: "regular",
    label: "Regulier",
    skillLabel: "Comprend le controle",
    rank: 3,
    botId: "heuristic",
    searchDepth: 1,
    beamWidth: 8,
    description: "Modele de joueur moyen qui valorise les coins, le controle et les fins de round.",
  },
  {
    id: "expert",
    label: "Expert",
    skillLabel: "Anticipe les reponses",
    rank: 4,
    botId: "champion",
    searchDepth: 2,
    beamWidth: 10,
    description: "Modele de joueur solide qui cherche plus loin et evite les contres evidents.",
  },
  {
    id: "champion",
    label: "Champion",
    skillLabel: "Profil entraine live",
    rank: 5,
    botId: "champion",
    searchDepth: 3,
    beamWidth: 14,
    description: "Modele live qui garde une recherche profonde stable et n'accepte le profil promu qu'en net progres.",
  },
];

const MODEL_BY_ID = new Map<AiPlayerModelId, AiPlayerModel>(
  AI_PLAYER_MODELS.map((model) => [model.id, model]),
);

/**
 * Resolves a player model used by the AI lab and fails loudly for invalid ids.
 */
export function getAiPlayerModel(modelId: AiPlayerModelId): AiPlayerModel {
  const model = MODEL_BY_ID.get(modelId);
  if (!model) {
    throw new Error(`Unknown AI player model: ${modelId}`);
  }

  return model;
}

/**
 * Returns the default consecutive matchups used to check skill progression.
 */
export function getDefaultAiLadderPairings(
  models: AiPlayerModel[] = AI_PLAYER_MODELS,
): Array<[AiPlayerModelId, AiPlayerModelId]> {
  const ordered = [...models].sort((left, right) => left.rank - right.rank);
  const pairings: Array<[AiPlayerModelId, AiPlayerModelId]> = [];

  for (let index = 0; index < ordered.length - 1; index += 1) {
    pairings.push([ordered[index].id, ordered[index + 1].id]);
  }

  return pairings;
}
