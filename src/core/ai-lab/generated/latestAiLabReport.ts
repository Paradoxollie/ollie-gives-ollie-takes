import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260521-154915",
  "generatedAt": "2026-05-21T15:49:15.739Z",
  "config": {
    "matchesPerPairing": 18,
    "adventureRunsPerModel": 8,
    "seed": 21,
    "scenarioIds": [
      "current-family-start"
    ],
    "modelIds": [
      "beginner",
      "opportunist",
      "regular",
      "expert",
      "champion"
    ]
  },
  "playerModels": [
    {
      "id": "beginner",
      "label": "Debutant",
      "skillLabel": "Joue sans plan",
      "rank": 1,
      "botId": "random",
      "searchDepth": 1,
      "beamWidth": 9,
      "description": "Modele de joueur qui decouvre les cartes et rate souvent les bons flips."
    },
    {
      "id": "opportunist",
      "label": "Opportuniste",
      "skillLabel": "Cherche le flip visible",
      "rank": 2,
      "botId": "greedy",
      "searchDepth": 1,
      "beamWidth": 12,
      "description": "Modele de joueur qui prend les gains immediats sans vraiment proteger le tour suivant."
    },
    {
      "id": "regular",
      "label": "Regulier",
      "skillLabel": "Comprend le controle",
      "rank": 3,
      "botId": "heuristic",
      "searchDepth": 2,
      "beamWidth": 6,
      "description": "Modele de joueur moyen qui valorise les coins, le controle et les fins de round."
    },
    {
      "id": "expert",
      "label": "Expert",
      "skillLabel": "Anticipe les reponses",
      "rank": 4,
      "botId": "heuristic",
      "searchDepth": 3,
      "beamWidth": 5,
      "description": "Modele de joueur solide qui cherche plus loin et evite les contres evidents."
    },
    {
      "id": "champion",
      "label": "Champion",
      "skillLabel": "Profil entraine live",
      "rank": 5,
      "botId": "champion",
      "searchDepth": 3,
      "beamWidth": 8,
      "description": "Modele live qui garde une recherche profonde stable et n'accepte le profil promu qu'en net progres."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 18,
      "wins": 1,
      "losses": 17,
      "draws": 0,
      "winRate": 0.05555555555555555,
      "averageHpEdge": -18.61111111111111
    },
    {
      "modelId": "opportunist",
      "games": 36,
      "wins": 22,
      "losses": 14,
      "draws": 0,
      "winRate": 0.6111111111111112,
      "averageHpEdge": 4.944444444444445
    },
    {
      "modelId": "regular",
      "games": 36,
      "wins": 21,
      "losses": 15,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 3.1666666666666665
    },
    {
      "modelId": "expert",
      "games": 36,
      "wins": 16,
      "losses": 20,
      "draws": 0,
      "winRate": 0.4444444444444444,
      "averageHpEdge": -2.138888888888889
    },
    {
      "modelId": "champion",
      "games": 18,
      "wins": 12,
      "losses": 6,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 6.666666666666667
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.3888888888888889,
      "averages": {
        "turns": 57.72222222222222,
        "rounds": 4.944444444444445,
        "flipsPerMatch": 7.888888888888889,
        "flipsPerTurn": 0.136669874879692,
        "reshuffles": 7,
        "deadTurns": 13.555555555555555,
        "finalHpDifference": 17.77777777777778
      },
      "deadTurnFrequency": 0.23484119345524543,
      "status": "problem",
      "notes": [
        "Avantage premier joueur a surveiller (39%).",
        "Tours morts frequents (23%).",
        "Peu de flips par tour (0.14)."
      ]
    }
  ],
  "ladderPairings": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -18.61111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 18.61111111111111
        }
      ],
      "averages": {
        "turns": 48.44444444444444,
        "rounds": 4.166666666666667,
        "flipsPerMatch": 12.11111111111111,
        "flipsPerTurn": 0.25,
        "reshuffles": 5.555555555555555,
        "deadTurns": 11.333333333333334,
        "finalHpDifference": 21.055555555555557
      },
      "deadTurnFrequency": 0.23394495412844038
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 2,
          "winRate": 0.2
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.3333333333333333
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -8.722222222222221
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 8.722222222222221
        }
      ],
      "averages": {
        "turns": 54.111111111111114,
        "rounds": 4.333333333333333,
        "flipsPerMatch": 9.5,
        "flipsPerTurn": 0.175564681724846,
        "reshuffles": 5.388888888888889,
        "deadTurns": 15.777777777777779,
        "finalHpDifference": 18.27777777777778
      },
      "deadTurnFrequency": 0.2915811088295688
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 4,
          "winRate": 0.4
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -2.388888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 2.388888888888889
        }
      ],
      "averages": {
        "turns": 48.55555555555556,
        "rounds": 4.166666666666667,
        "flipsPerMatch": 7.666666666666667,
        "flipsPerTurn": 0.15789473684210525,
        "reshuffles": 5.388888888888889,
        "deadTurns": 11.88888888888889,
        "finalHpDifference": 16.27777777777778
      },
      "deadTurnFrequency": 0.2448512585812357
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 3,
          "winRate": 0.3
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.3888888888888889
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 6,
          "losses": 12,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -6.666666666666667
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 12,
          "losses": 6,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 6.666666666666667
        }
      ],
      "averages": {
        "turns": 59.388888888888886,
        "rounds": 5.111111111111111,
        "flipsPerMatch": 10.777777777777779,
        "flipsPerTurn": 0.1814780168381665,
        "reshuffles": 7.222222222222222,
        "deadTurns": 13.722222222222221,
        "finalHpDifference": 18.555555555555557
      },
      "deadTurnFrequency": 0.23105706267539758
    }
  ],
  "adventureSummaries": [
    {
      "modelId": "beginner",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 1,
      "averageFinalDeckSize": 10,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 51.75,
      "averageCombatFlips": 14.125,
      "averageDeadTurns": 11.5,
      "averageReshuffles": 6.5,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.125,
        "human": 0.125,
        "automaton": 0.125,
        "revenant": 0.25,
        "arcane": 0.375
      },
      "nodeMix": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
        "Les combats bloquent souvent la progression; verifier ennemis, recompenses et lisibilite des flips."
      ]
    },
    {
      "modelId": "opportunist",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3.25,
      "averageFinalDeckSize": 11.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.6190476190476191,
      "averageCombatTurns": 26.904761904761905,
      "averageCombatFlips": 11.80952380952381,
      "averageDeadTurns": 2.857142857142857,
      "averageReshuffles": 4.380952380952381,
      "averageRewardsClaimed": 1.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.125,
      "averageUpgrades": 0,
      "averageRemovals": 0.125,
      "averageFusions": 0.25,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.6923076923076923,
        "elite": 0.11538461538461539,
        "shop": 0.07692307692307693,
        "chest": 0.07692307692307693,
        "rest": 0.038461538461538464,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 2,
      "bossReached": 2,
      "victoryRate": 0.25,
      "bossReachRate": 0.25,
      "averageLocationsCleared": 7.125,
      "averageFinalDeckSize": 13.875,
      "averageDeckDelta": 3.875,
      "averageCombatWinRate": 0.8571428571428571,
      "averageCombatTurns": 45.904761904761905,
      "averageCombatFlips": 10.238095238095237,
      "averageDeadTurns": 9.69047619047619,
      "averageReshuffles": 6.095238095238095,
      "averageRewardsClaimed": 5.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.125,
      "averageUpgrades": 0,
      "averageRemovals": 0.625,
      "averageFusions": 0.625,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.5423728813559322,
        "elite": 0.13559322033898305,
        "shop": 0.0847457627118644,
        "chest": 0.11864406779661017,
        "rest": 0.0847457627118644,
        "boss": 0.03389830508474576
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 1,
      "bossReached": 1,
      "victoryRate": 0.125,
      "bossReachRate": 0.125,
      "averageLocationsCleared": 6.25,
      "averageFinalDeckSize": 13.125,
      "averageDeckDelta": 3.125,
      "averageCombatWinRate": 0.8292682926829268,
      "averageCombatTurns": 33.36585365853659,
      "averageCombatFlips": 11.121951219512194,
      "averageDeadTurns": 4.024390243902439,
      "averageReshuffles": 5.024390243902439,
      "averageRewardsClaimed": 4.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.125,
      "averageUpgrades": 0,
      "averageRemovals": 0.375,
      "averageFusions": 0.75,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.6862745098039216,
        "elite": 0.09803921568627451,
        "shop": 0.11764705882352941,
        "chest": 0.0196078431372549,
        "rest": 0.058823529411764705,
        "boss": 0.0196078431372549
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2.375,
      "averageFinalDeckSize": 10.75,
      "averageDeckDelta": 0.75,
      "averageCombatWinRate": 0.4666666666666667,
      "averageCombatTurns": 68.13333333333334,
      "averageCombatFlips": 16.133333333333333,
      "averageDeadTurns": 12.333333333333334,
      "averageReshuffles": 10.2,
      "averageRewardsClaimed": 1,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 0,
      "averageFusions": 0.25,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.6842105263157895,
        "elite": 0.10526315789473684,
        "shop": 0.10526315789473684,
        "chest": 0.05263157894736842,
        "rest": 0.05263157894736842,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
        "Le champion atteint trop rarement le boss sur cet echantillon; augmenter les runs et analyser les noeuds de defaite."
      ]
    }
  ],
  "adventureRuns": [
    {
      "runIndex": 0,
      "modelId": "beginner",
      "seed": 2713604961,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 67,
      "totalCombatFlips": 11,
      "totalDeadTurns": 22,
      "totalReshuffles": 6,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 10,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 67,
          "combatFlips": 11,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 2696827342,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 21,
      "totalCombatFlips": 9,
      "totalDeadTurns": 4,
      "totalReshuffles": 2,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 21,
          "combatFlips": 9,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 2,
      "modelId": "beginner",
      "seed": 2680049723,
      "selectedFamily": "familiar",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 19,
      "totalCombatFlips": 12,
      "totalDeadTurns": 2,
      "totalReshuffles": 2,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "lantern-mushroom"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 10,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 12,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 2663272104,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 56,
      "totalCombatFlips": 21,
      "totalDeadTurns": 2,
      "totalReshuffles": 10,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 56,
          "combatFlips": 21,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 2780715437,
      "selectedFamily": "human",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 66,
      "totalCombatFlips": 10,
      "totalDeadTurns": 21,
      "totalReshuffles": 9,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "spring-tear"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 10,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 66,
          "combatFlips": 10,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 5,
      "modelId": "beginner",
      "seed": 2763937818,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 66,
      "totalCombatFlips": 11,
      "totalDeadTurns": 21,
      "totalReshuffles": 6,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 66,
          "combatFlips": 11,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 6,
      "modelId": "beginner",
      "seed": 2747160199,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 70,
      "totalCombatFlips": 30,
      "totalDeadTurns": 7,
      "totalReshuffles": 12,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 10,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 70,
          "combatFlips": 30,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 2730382580,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 49,
      "totalCombatFlips": 9,
      "totalDeadTurns": 13,
      "totalReshuffles": 5,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 49,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 3803965104,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 30,
      "totalCombatFlips": 17,
      "totalDeadTurns": 3,
      "totalReshuffles": 4,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 30,
          "combatFlips": 17,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 3820742723,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 13,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 69,
      "totalCombatFlips": 35,
      "totalDeadTurns": 0,
      "totalReshuffles": 14,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 6,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 11,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 16,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
          "combatFlips": 11,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 8,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 3837520342,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 12,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 111,
      "totalCombatFlips": 58,
      "totalDeadTurns": 5,
      "totalReshuffles": 22,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 9,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "first-breath",
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 2,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 1,
        "automaton": 1,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 38,
          "combatFlips": 19,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 13,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 17,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "old-bridge-stone",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 21,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 3854297961,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 15,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 169,
      "totalCombatFlips": 55,
      "totalDeadTurns": 28,
      "totalReshuffles": 26,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 15,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 11,
        "human": 2,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 31,
          "combatFlips": 9,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 9,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 40,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 11,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 22,
          "combatFlips": 12,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 4,
      "modelId": "opportunist",
      "seed": 3871075580,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 29,
      "totalCombatFlips": 14,
      "totalDeadTurns": 2,
      "totalReshuffles": 4,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "lantern-mushroom"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 29,
          "combatFlips": 14,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 5,
      "modelId": "opportunist",
      "seed": 3887853199,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 53,
      "totalCombatFlips": 20,
      "totalDeadTurns": 9,
      "totalReshuffles": 8,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "lantern-mushroom"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 12,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 8,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 6,
      "modelId": "opportunist",
      "seed": 3904630818,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 55,
      "totalCombatFlips": 21,
      "totalDeadTurns": 11,
      "totalReshuffles": 6,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 9,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 11,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 10,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 3921408437,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 49,
      "totalCombatFlips": 28,
      "totalDeadTurns": 2,
      "totalReshuffles": 8,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 30,
          "combatFlips": 15,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 13,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 0,
      "modelId": "regular",
      "seed": 325068257,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 14,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 194,
      "totalCombatFlips": 44,
      "totalDeadTurns": 42,
      "totalReshuffles": 24,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 2,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 2,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 7,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 7,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 31,
          "combatFlips": 9,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 67,
          "combatFlips": 8,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 13,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 1,
      "modelId": "regular",
      "seed": 308290638,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 18,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 11,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 475,
      "totalCombatFlips": 93,
      "totalDeadTurns": 107,
      "totalReshuffles": 69,
      "rewardOffersSeen": 9,
      "rewardsClaimed": 9,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 9,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 2,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 3,
        "demon": 1,
        "human": 0,
        "automaton": 4,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 18,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 3,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 73,
          "combatFlips": 6,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 68,
          "combatFlips": 5,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 42,
          "combatFlips": 13,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 102,
          "combatFlips": 11,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-4",
          "depth": 8,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 74,
          "combatFlips": 13,
          "enemyProfileId": "aggro",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-9-lane-4",
          "depth": 9,
          "lane": 4,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 41,
          "combatFlips": 14,
          "enemyProfileId": "bastion",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-10-lane-3",
          "depth": 10,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 65,
          "combatFlips": 28,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 2,
      "modelId": "regular",
      "seed": 291513019,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 101,
      "totalCombatFlips": 13,
      "totalDeadTurns": 29,
      "totalReshuffles": 9,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 74,
          "combatFlips": 7,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 6,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 3,
      "modelId": "regular",
      "seed": 274735400,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 20,
      "totalCombatFlips": 6,
      "totalDeadTurns": 4,
      "totalReshuffles": 0,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 9,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 4,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "rest",
          "title": "Repos du sous-bois",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 10,
          "combatFlips": 2,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 4,
      "modelId": "regular",
      "seed": 392178733,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 47,
      "totalCombatFlips": 11,
      "totalDeadTurns": 13,
      "totalReshuffles": 3,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 9,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 8,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "rest",
          "title": "Feu de canopee",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 10,
          "combatFlips": 3,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 5,
      "modelId": "regular",
      "seed": 375401114,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 14,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 6,
      "combatWins": 6,
      "combatLosses": 0,
      "totalCombatTurns": 398,
      "totalCombatFlips": 74,
      "totalDeadTurns": 102,
      "totalReshuffles": 47,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 8,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 15,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 0,
        "shop": 2,
        "chest": 3,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 2,
        "revenant": 4,
        "arcane": 7,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 74,
          "combatFlips": 7,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 73,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 40,
          "combatFlips": 8,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 74,
          "combatFlips": 15,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-0",
          "depth": 8,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 73,
          "combatFlips": 18,
          "enemyProfileId": "fortress",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-9-lane-0",
          "depth": 9,
          "lane": 0,
          "kind": "rest",
          "title": "Feu de canopee",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-10-lane-1",
          "depth": 10,
          "lane": 1,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-11-lane-2",
          "depth": 11,
          "lane": 2,
          "kind": "rest",
          "title": "Feu de canopee",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 64,
          "combatFlips": 21,
          "enemyProfileId": "warden",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 6,
      "modelId": "regular",
      "seed": 358623495,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 18,
      "deckDelta": 8,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 10,
      "combatWins": 10,
      "combatLosses": 0,
      "totalCombatTurns": 370,
      "totalCombatFlips": 112,
      "totalDeadTurns": 46,
      "totalReshuffles": 53,
      "rewardOffersSeen": 10,
      "rewardsClaimed": 10,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 27,
      "stealRewardsClaimed": 9,
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "old-bridge-stone",
        "firefly-wing"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 3,
        "shop": 2,
        "chest": 1,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 3,
        "demon": 3,
        "human": 1,
        "automaton": 0,
        "revenant": 2,
        "arcane": 9,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 18,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 4,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 31,
          "combatFlips": 9,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "shop",
          "title": "Comptoir des runes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 11,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 53,
          "combatFlips": 10,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 38,
          "combatFlips": 8,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 71,
          "combatFlips": 12,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "firefly-wing",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 7,
          "enemyProfileId": "aggro",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-3",
          "depth": 8,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 12,
          "enemyProfileId": "builder",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-9-lane-2",
          "depth": 9,
          "lane": 2,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 16,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-10-lane-1",
          "depth": 10,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 13,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-11-lane-4",
          "depth": 11,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 57,
          "combatFlips": 26,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 11,
          "enemyProfileId": "ravager",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 7,
      "modelId": "regular",
      "seed": 341845876,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 16,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 9,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 323,
      "totalCombatFlips": 77,
      "totalDeadTurns": 64,
      "totalReshuffles": 51,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 7,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 18,
      "stealRewardsClaimed": 6,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 7,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 1,
        "automaton": 0,
        "revenant": 1,
        "arcane": 12,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 42,
          "combatFlips": 12,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 31,
          "combatFlips": 11,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 49,
          "combatFlips": 6,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 66,
          "combatFlips": 8,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 51,
          "combatFlips": 11,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "rest",
          "title": "Feu de canopee",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 48,
          "combatFlips": 20,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-0",
          "depth": 8,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 9,
          "enemyProfileId": "fortress",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 0,
      "modelId": "expert",
      "seed": 2055610479,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 12,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 93,
      "totalCombatFlips": 37,
      "totalDeadTurns": 4,
      "totalReshuffles": 14,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 6,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 39,
          "combatFlips": 16,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 7,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 35,
          "combatFlips": 14,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 1,
      "modelId": "expert",
      "seed": 2038832860,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 20,
      "deckDelta": 10,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 12,
      "combatWins": 12,
      "combatLosses": 0,
      "totalCombatTurns": 420,
      "totalCombatFlips": 150,
      "totalDeadTurns": 43,
      "totalReshuffles": 68,
      "rewardOffersSeen": 11,
      "rewardsClaimed": 11,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 33,
      "stealRewardsClaimed": 11,
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "old-bridge-stone",
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 9,
        "elite": 2,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 11,
        "human": 2,
        "automaton": 2,
        "revenant": 2,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 20,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 51,
          "combatFlips": 12,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 7,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 17,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 9,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 11,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 12,
          "enemyProfileId": "fortress",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 14,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 10,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-2",
          "depth": 8,
          "lane": 2,
          "kind": "shop",
          "title": "Marche aux lucioles",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 17,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-9-lane-2",
          "depth": 9,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 63,
          "combatFlips": 22,
          "enemyProfileId": "builder",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-10-lane-1",
          "depth": 10,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
          "enemyProfileId": "bastion",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "ancient-sap",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-11-lane-3",
          "depth": 11,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 13,
          "enemyProfileId": "fortress",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 13,
          "enemyProfileId": "warden",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 2,
      "modelId": "expert",
      "seed": 2089165717,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 146,
      "totalCombatFlips": 33,
      "totalDeadTurns": 38,
      "totalReshuffles": 20,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 9,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 3,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 9,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 43,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 43,
          "combatFlips": 4,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "shop",
          "title": "Marche aux lucioles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 11,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 9,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 11,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "shop",
          "title": "Marche aux lucioles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 28,
          "combatFlips": 15,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 3,
      "modelId": "expert",
      "seed": 2072388098,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 15,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 213,
      "totalCombatFlips": 80,
      "totalDeadTurns": 24,
      "totalReshuffles": 34,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 15,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 2,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 10,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 33,
          "combatFlips": 10,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 33,
          "combatFlips": 10,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 43,
          "combatFlips": 12,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 22,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 9,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 17,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 4,
      "modelId": "expert",
      "seed": 1988500003,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 13,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 128,
      "totalCombatFlips": 43,
      "totalDeadTurns": 2,
      "totalReshuffles": 18,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 8,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 12,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "rest",
          "title": "Halte aux fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 11,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 6,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 6,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 11,
          "enemyProfileId": "trickster",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 5,
      "modelId": "expert",
      "seed": 1971722384,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 12,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 88,
      "totalCombatFlips": 28,
      "totalDeadTurns": 5,
      "totalReshuffles": 16,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 6,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 9,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 6,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 50,
          "combatFlips": 13,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 6,
      "modelId": "expert",
      "seed": 2022055241,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 9,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 55,
      "totalCombatFlips": 20,
      "totalDeadTurns": 10,
      "totalReshuffles": 6,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 2,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 8,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 9,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 9,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "shop",
          "title": "Marche aux lucioles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 9,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 9,
          "combatWinner": "enemy",
          "combatTurns": 34,
          "combatFlips": 11,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 7,
      "modelId": "expert",
      "seed": 2005277622,
      "selectedFamily": "demon",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 14,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 9,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 225,
      "totalCombatFlips": 65,
      "totalDeadTurns": 39,
      "totalReshuffles": 30,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 15,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 2,
        "automaton": 2,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 7,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 53,
          "combatFlips": 8,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 16,
          "enemyProfileId": "swarm",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "rest",
          "title": "Repos du sous-bois",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-8-lane-2",
          "depth": 8,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 50,
          "combatFlips": 16,
          "enemyProfileId": "aggro",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 0,
      "modelId": "champion",
      "seed": 3465187416,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 154,
      "totalCombatFlips": 32,
      "totalDeadTurns": 28,
      "totalReshuffles": 23,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 72,
          "combatFlips": 16,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 82,
          "combatFlips": 16,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 1,
      "modelId": "champion",
      "seed": 3481965035,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 51,
      "totalCombatFlips": 15,
      "totalDeadTurns": 6,
      "totalReshuffles": 8,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 51,
          "combatFlips": 15,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 2,
      "modelId": "champion",
      "seed": 3498742654,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 12,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 191,
      "totalCombatFlips": 45,
      "totalDeadTurns": 29,
      "totalReshuffles": 27,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 9,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 1,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 10,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 53,
          "combatFlips": 13,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 46,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "shop",
          "title": "Comptoir des runes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 56,
          "combatFlips": 13,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 3,
      "modelId": "champion",
      "seed": 3515520273,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 154,
      "totalCombatFlips": 44,
      "totalDeadTurns": 28,
      "totalReshuffles": 23,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 154,
          "combatFlips": 44,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 4,
      "modelId": "champion",
      "seed": 3532297892,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 189,
      "totalCombatFlips": 43,
      "totalDeadTurns": 45,
      "totalReshuffles": 26,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 6,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 9,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 54,
          "combatFlips": 14,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 10,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 59,
          "combatFlips": 13,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 76,
          "combatFlips": 16,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 5,
      "modelId": "champion",
      "seed": 3549075511,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 38,
      "totalCombatFlips": 14,
      "totalDeadTurns": 2,
      "totalReshuffles": 6,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 38,
          "combatFlips": 14,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 6,
      "modelId": "champion",
      "seed": 3565853130,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 12,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 175,
      "totalCombatFlips": 26,
      "totalDeadTurns": 40,
      "totalReshuffles": 28,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 3,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 11,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 1,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 65,
          "combatFlips": 7,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 110,
          "combatFlips": 19,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    },
    {
      "runIndex": 7,
      "modelId": "champion",
      "seed": 3582630749,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 10,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 70,
      "totalCombatFlips": 23,
      "totalDeadTurns": 7,
      "totalReshuffles": 12,
      "rewardOffersSeen": 0,
      "rewardsClaimed": 0,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 0,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 0,
      "stealRewardsClaimed": 0,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 0,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 70,
          "combatFlips": 23,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 0,
          "rewardClaimed": false,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        }
      ]
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
      {
        "cardId": "hornling",
        "name": "Cornu farceur",
        "family": "demon",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "anchor",
          "deal-damage",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 369,
        "played": 92,
        "ignored": 277,
        "selectionRate": 0.24932249322493225,
        "wins": 65,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.7065217391304348,
        "averageFlips": 0.6630434782608695,
        "failedImpactRate": 0.1643835616438356,
        "averageFlipMargin": 3.721311475409836,
        "averageEffectAmount": 1.4130434782608696,
        "averageDamageDealt": 1.2065217391304348,
        "averageDamageTaken": 0.10869565217391304,
        "averageNetDamage": 1.0978260869565217,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 42,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "expert",
            "played": 18,
            "winRate": 0.3888888888888889
          },
          {
            "modelId": "opportunist",
            "played": 14,
            "winRate": 0.7857142857142857
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.9230769230769231
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 92,
            "winRate": 0.7065217391304348
          }
        ],
        "status": "overperformer",
        "notes": [
          "Surperforme en victoire et impact immediat."
        ]
      },
      {
        "cardId": "clock-sentinel",
        "name": "Sentinelle d'horloge",
        "family": "automaton",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 1842,
        "played": 278,
        "ignored": 1564,
        "selectionRate": 0.15092290988056462,
        "wins": 149,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5359712230215827,
        "averageFlips": 0.11151079136690648,
        "failedImpactRate": 0.8315217391304348,
        "averageFlipMargin": 1.903225806451613,
        "averageEffectAmount": 1.7697841726618706,
        "averageDamageDealt": 0.8129496402877698,
        "averageDamageTaken": 0.03597122302158273,
        "averageNetDamage": 0.7769784172661871,
        "lethalMoves": 8,
        "roundClosers": 56,
        "byModel": [
          {
            "modelId": "regular",
            "played": 130,
            "winRate": 0.6076923076923076
          },
          {
            "modelId": "expert",
            "played": 51,
            "winRate": 0.5490196078431373
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.3617021276595745
          },
          {
            "modelId": "opportunist",
            "played": 34,
            "winRate": 0.6764705882352942
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.125
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 278,
            "winRate": 0.5359712230215827
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "widow-knight",
        "name": "Chevalier veuf",
        "family": "revenant",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "deal-damage",
          "flip-1",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 1747,
        "played": 259,
        "ignored": 1488,
        "selectionRate": 0.1482541499713795,
        "wins": 176,
        "losses": 83,
        "draws": 0,
        "winRateWhenPlayed": 0.6795366795366795,
        "averageFlips": 0.07335907335907337,
        "failedImpactRate": 0.8869047619047619,
        "averageFlipMargin": 2.3684210526315788,
        "averageEffectAmount": 0.18146718146718147,
        "averageDamageDealt": 1.9305019305019304,
        "averageDamageTaken": 0.04633204633204633,
        "averageNetDamage": 1.8841698841698842,
        "lethalMoves": 17,
        "roundClosers": 90,
        "byModel": [
          {
            "modelId": "regular",
            "played": 111,
            "winRate": 0.6936936936936937
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.7090909090909091
          },
          {
            "modelId": "expert",
            "played": 48,
            "winRate": 0.7083333333333334
          },
          {
            "modelId": "champion",
            "played": 29,
            "winRate": 0.896551724137931
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 259,
            "winRate": 0.6795366795366795
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "quiet-monk",
        "name": "Moine du seuil",
        "family": "human",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [],
        "offered": 1887,
        "played": 245,
        "ignored": 1642,
        "selectionRate": 0.12983571807101218,
        "wins": 128,
        "losses": 117,
        "draws": 0,
        "winRateWhenPlayed": 0.5224489795918368,
        "averageFlips": 0.1306122448979592,
        "failedImpactRate": 0.803680981595092,
        "averageFlipMargin": 2.09375,
        "averageEffectAmount": 1.7061224489795919,
        "averageDamageDealt": 0.8816326530612245,
        "averageDamageTaken": 0.09387755102040816,
        "averageNetDamage": 0.7877551020408163,
        "lethalMoves": 8,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 105,
            "winRate": 0.47619047619047616
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.6792452830188679
          },
          {
            "modelId": "expert",
            "played": 43,
            "winRate": 0.6976744186046512
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 245,
            "winRate": 0.5224489795918368
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "field-knight",
        "name": "Chevaliere des champs",
        "family": "human",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "combo-2",
          "gain-shield",
          "human",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 1192,
        "played": 153,
        "ignored": 1039,
        "selectionRate": 0.12835570469798657,
        "wins": 96,
        "losses": 57,
        "draws": 0,
        "winRateWhenPlayed": 0.6274509803921569,
        "averageFlips": 0.19607843137254902,
        "failedImpactRate": 0.6551724137931034,
        "averageFlipMargin": 2.9,
        "averageEffectAmount": 1.457516339869281,
        "averageDamageDealt": 0.7124183006535948,
        "averageDamageTaken": 0.1111111111111111,
        "averageNetDamage": 0.6013071895424837,
        "lethalMoves": 5,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 63,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 31,
            "winRate": 0.7096774193548387
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.65
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 153,
            "winRate": 0.6274509803921569
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "gear-monk",
        "name": "Moine engrene",
        "family": "automaton",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "connector",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 1344,
        "played": 145,
        "ignored": 1199,
        "selectionRate": 0.10788690476190477,
        "wins": 76,
        "losses": 69,
        "draws": 0,
        "winRateWhenPlayed": 0.5241379310344828,
        "averageFlips": 0.19310344827586207,
        "failedImpactRate": 0.7383177570093458,
        "averageFlipMargin": 1.4642857142857142,
        "averageEffectAmount": 1.896551724137931,
        "averageDamageDealt": 0.5724137931034483,
        "averageDamageTaken": 0.05517241379310345,
        "averageNetDamage": 0.5172413793103449,
        "lethalMoves": 3,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 73,
            "winRate": 0.547945205479452
          },
          {
            "modelId": "expert",
            "played": 33,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "opportunist",
            "played": 19,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0.25
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 145,
            "winRate": 0.5241379310344828
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "brass-rook",
        "name": "Tour de laiton",
        "family": "automaton",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "attacker",
          "automaton",
          "boost-self",
          "combo-1",
          "corner"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 784,
        "played": 323,
        "ignored": 461,
        "selectionRate": 0.4119897959183674,
        "wins": 193,
        "losses": 130,
        "draws": 0,
        "winRateWhenPlayed": 0.5975232198142415,
        "averageFlips": 0.25077399380804954,
        "failedImpactRate": 0.20588235294117646,
        "averageFlipMargin": 3.123456790123457,
        "averageEffectAmount": 3.1671826625387,
        "averageDamageDealt": 0.07430340557275542,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.07430340557275542,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 154,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 63,
            "winRate": 0.6349206349206349
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.8035714285714286
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.4523809523809524
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.125
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 323,
            "winRate": 0.5975232198142415
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "path-ranger",
        "name": "Rodeuse du sentier",
        "family": "human",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "attacker",
          "boost-self",
          "human"
        ],
        "preferredPositions": [],
        "offered": 793,
        "played": 259,
        "ignored": 534,
        "selectionRate": 0.3266078184110971,
        "wins": 186,
        "losses": 73,
        "draws": 0,
        "winRateWhenPlayed": 0.7181467181467182,
        "averageFlips": 0.3204633204633205,
        "failedImpactRate": 0.20952380952380953,
        "averageFlipMargin": 3.4939759036144578,
        "averageEffectAmount": 2.7451737451737452,
        "averageDamageDealt": 0.11583011583011583,
        "averageDamageTaken": 0.015444015444015444,
        "averageNetDamage": 0.1003861003861004,
        "lethalMoves": 1,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 97,
            "winRate": 0.7731958762886598
          },
          {
            "modelId": "expert",
            "played": 65,
            "winRate": 0.8307692307692308
          },
          {
            "modelId": "opportunist",
            "played": 50,
            "winRate": 0.8
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.7391304347826086
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 259,
            "winRate": 0.7181467181467182
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "tin-oracle",
        "name": "Oracle de fer-blanc",
        "family": "automaton",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 814,
        "played": 226,
        "ignored": 588,
        "selectionRate": 0.27764127764127766,
        "wins": 133,
        "losses": 93,
        "draws": 0,
        "winRateWhenPlayed": 0.588495575221239,
        "averageFlips": 0.11504424778761062,
        "failedImpactRate": 0.792,
        "averageFlipMargin": 2.8846153846153846,
        "averageEffectAmount": 2.4513274336283186,
        "averageDamageDealt": 0.16371681415929204,
        "averageDamageTaken": 0.01327433628318584,
        "averageNetDamage": 0.1504424778761062,
        "lethalMoves": 1,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 104,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.7954545454545454
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 0.5135135135135135
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.3235294117647059
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0.5714285714285714
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 226,
            "winRate": 0.588495575221239
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "rune-mage",
        "name": "Mage des runes",
        "family": "human",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [],
        "offered": 687,
        "played": 195,
        "ignored": 492,
        "selectionRate": 0.2838427947598253,
        "wins": 144,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.7384615384615385,
        "averageFlips": 0.14358974358974358,
        "failedImpactRate": 0.6705882352941176,
        "averageFlipMargin": 3.6785714285714284,
        "averageEffectAmount": 2.3435897435897437,
        "averageDamageDealt": 0.2,
        "averageDamageTaken": 0.041025641025641026,
        "averageNetDamage": 0.158974358974359,
        "lethalMoves": 1,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 72,
            "winRate": 0.8055555555555556
          },
          {
            "modelId": "opportunist",
            "played": 47,
            "winRate": 0.9148936170212766
          },
          {
            "modelId": "expert",
            "played": 40,
            "winRate": 0.825
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.5263157894736842
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 195,
            "winRate": 0.7384615384615385
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "lantern-shade",
        "name": "Ombre a lanterne",
        "family": "revenant",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "behind-on-board",
          "gain-shield",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 667,
        "played": 193,
        "ignored": 474,
        "selectionRate": 0.2893553223388306,
        "wins": 150,
        "losses": 43,
        "draws": 0,
        "winRateWhenPlayed": 0.7772020725388601,
        "averageFlips": 0.22279792746113988,
        "failedImpactRate": 0.2833333333333333,
        "averageFlipMargin": 3.744186046511628,
        "averageEffectAmount": 2.854922279792746,
        "averageDamageDealt": 0.18134715025906736,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.18134715025906736,
        "lethalMoves": 1,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 77,
            "winRate": 0.7792207792207793
          },
          {
            "modelId": "opportunist",
            "played": 48,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.8666666666666667
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 193,
            "winRate": 0.7772020725388601
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "ember-imp",
        "name": "Diablotin braise",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "deal-damage",
          "demon",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 778,
        "played": 151,
        "ignored": 627,
        "selectionRate": 0.19408740359897173,
        "wins": 92,
        "losses": 59,
        "draws": 0,
        "winRateWhenPlayed": 0.609271523178808,
        "averageFlips": 0.32450331125827814,
        "failedImpactRate": 0.6620689655172414,
        "averageFlipMargin": 3.122448979591837,
        "averageEffectAmount": 0.6754966887417219,
        "averageDamageDealt": 1.6423841059602649,
        "averageDamageTaken": 0.6158940397350994,
        "averageNetDamage": 1.0264900662251655,
        "lethalMoves": 8,
        "roundClosers": 35,
        "byModel": [
          {
            "modelId": "regular",
            "played": 57,
            "winRate": 0.8070175438596491
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 0.2972972972972973
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.7241379310344828
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 151,
            "winRate": 0.609271523178808
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "moon-scribe",
        "name": "Scribe lunaire",
        "family": "arcane",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "attacker",
          "boost-self",
          "center"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 440,
        "played": 133,
        "ignored": 307,
        "selectionRate": 0.30227272727272725,
        "wins": 103,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.7744360902255639,
        "averageFlips": 0.21804511278195488,
        "failedImpactRate": 0.30952380952380953,
        "averageFlipMargin": 2.6551724137931036,
        "averageEffectAmount": 0.5338345864661654,
        "averageDamageDealt": 0.10526315789473684,
        "averageDamageTaken": 0.007518796992481203,
        "averageNetDamage": 0.09774436090225563,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 58,
            "winRate": 0.6379310344827587
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 0.84375
          },
          {
            "modelId": "opportunist",
            "played": 25,
            "winRate": 0.96
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.625
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 133,
            "winRate": 0.7744360902255639
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "grave-child",
        "name": "Enfant des tombes",
        "family": "revenant",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "behind-on-board",
          "combo-1",
          "connector",
          "draw-next-turn",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 444,
        "played": 132,
        "ignored": 312,
        "selectionRate": 0.2972972972972973,
        "wins": 98,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.7424242424242424,
        "averageFlips": 0.2878787878787879,
        "failedImpactRate": 0.22448979591836735,
        "averageFlipMargin": 3.8684210526315788,
        "averageEffectAmount": 2.6136363636363638,
        "averageDamageDealt": 0.09848484848484848,
        "averageDamageTaken": 0.05303030303030303,
        "averageNetDamage": 0.04545454545454545,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 43,
            "winRate": 0.813953488372093
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.8055555555555556
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.782608695652174
          },
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.7619047619047619
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 132,
            "winRate": 0.7424242424242424
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "moth-ghost",
        "name": "Fantome phalene",
        "family": "revenant",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "boost-self",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 461,
        "played": 125,
        "ignored": 336,
        "selectionRate": 0.27114967462039047,
        "wins": 96,
        "losses": 29,
        "draws": 0,
        "winRateWhenPlayed": 0.768,
        "averageFlips": 0.24,
        "failedImpactRate": 0.23076923076923078,
        "averageFlipMargin": 3.4,
        "averageEffectAmount": 2.44,
        "averageDamageDealt": 0.136,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.136,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 51,
            "winRate": 0.803921568627451
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "expert",
            "played": 24,
            "winRate": 0.7916666666666666
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 125,
            "winRate": 0.768
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "badger",
        "name": "Poney runique",
        "family": "familiar",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "attacker",
          "corner",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 328,
        "played": 114,
        "ignored": 214,
        "selectionRate": 0.3475609756097561,
        "wins": 80,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.7017543859649122,
        "averageFlips": 0.21052631578947367,
        "failedImpactRate": 0.4418604651162791,
        "averageFlipMargin": 4.041666666666667,
        "averageEffectAmount": 2.2982456140350878,
        "averageDamageDealt": 0.03508771929824561,
        "averageDamageTaken": 0.03508771929824561,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 45,
            "winRate": 0.9333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 25,
            "winRate": 0.72
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.18181818181818182
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 114,
            "winRate": 0.7017543859649122
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "wandering-glyph",
        "name": "Glyphe errant",
        "family": "arcane",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "arcane",
          "center",
          "gain-shield"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 599,
        "played": 112,
        "ignored": 487,
        "selectionRate": 0.18697829716193656,
        "wins": 82,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.7321428571428571,
        "averageFlips": 0.4107142857142857,
        "failedImpactRate": 0.39473684210526316,
        "averageFlipMargin": 3.1739130434782608,
        "averageEffectAmount": 1.3571428571428572,
        "averageDamageDealt": 0.4017857142857143,
        "averageDamageTaken": 0.008928571428571428,
        "averageNetDamage": 0.39285714285714285,
        "lethalMoves": 2,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 46,
            "winRate": 0.6086956521739131
          },
          {
            "modelId": "opportunist",
            "played": 24,
            "winRate": 0.875
          },
          {
            "modelId": "expert",
            "played": 19,
            "winRate": 0.7368421052631579
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.9166666666666666
          },
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0.7272727272727273
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 112,
            "winRate": 0.7321428571428571
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "sapling",
        "name": "Floramie toxique",
        "family": "familiar",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "anchor",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 515,
        "played": 100,
        "ignored": 415,
        "selectionRate": 0.1941747572815534,
        "wins": 59,
        "losses": 41,
        "draws": 0,
        "winRateWhenPlayed": 0.59,
        "averageFlips": 0.24,
        "failedImpactRate": 0.6417910447761194,
        "averageFlipMargin": 3.75,
        "averageEffectAmount": 0.83,
        "averageDamageDealt": 0.09,
        "averageDamageTaken": 0.03,
        "averageNetDamage": 0.06,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 30,
            "winRate": 0.9333333333333333
          },
          {
            "modelId": "expert",
            "played": 22,
            "winRate": 0.22727272727272727
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.6190476190476191
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 100,
            "winRate": 0.59
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "cinder-grin",
        "name": "Sourire de suie",
        "family": "demon",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "combo-1",
          "deal-damage",
          "demon",
          "flip-1",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 225,
        "played": 84,
        "ignored": 141,
        "selectionRate": 0.37333333333333335,
        "wins": 57,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.6785714285714286,
        "averageFlips": 0.4166666666666667,
        "failedImpactRate": 0.16666666666666666,
        "averageFlipMargin": 4.3428571428571425,
        "averageEffectAmount": 1.2619047619047619,
        "averageDamageDealt": 0.9761904761904762,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.9761904761904762,
        "lethalMoves": 1,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 34,
            "winRate": 0.7352941176470589
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.6470588235294118
          },
          {
            "modelId": "expert",
            "played": 16,
            "winRate": 0.5625
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.9230769230769231
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 84,
            "winRate": 0.6785714285714286
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "rune-adept",
        "name": "Adepte sigillaire",
        "family": "arcane",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "arcane",
          "center",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 300,
        "played": 81,
        "ignored": 219,
        "selectionRate": 0.27,
        "wins": 67,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.8271604938271605,
        "averageFlips": 0.345679012345679,
        "failedImpactRate": 0.36363636363636365,
        "averageFlipMargin": 2.4285714285714284,
        "averageEffectAmount": 0.9135802469135802,
        "averageDamageDealt": 0.19753086419753085,
        "averageDamageTaken": 0.037037037037037035,
        "averageNetDamage": 0.16049382716049382,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 32,
            "winRate": 0.8125
          },
          {
            "modelId": "opportunist",
            "played": 19,
            "winRate": 0.9473684210526315
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.8888888888888888
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 81,
            "winRate": 0.8271604938271605
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "star-witch",
        "name": "Sorciere d'etoiles",
        "family": "arcane",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "center",
          "combo-2",
          "payoff"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 286,
        "played": 68,
        "ignored": 218,
        "selectionRate": 0.23776223776223776,
        "wins": 56,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.8235294117647058,
        "averageFlips": 0.29411764705882354,
        "failedImpactRate": 0.25925925925925924,
        "averageFlipMargin": 2.85,
        "averageEffectAmount": 1.3823529411764706,
        "averageDamageDealt": 0.29411764705882354,
        "averageDamageTaken": 0.07352941176470588,
        "averageNetDamage": 0.22058823529411764,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 21,
            "winRate": 0.8095238095238095
          },
          {
            "modelId": "expert",
            "played": 19,
            "winRate": 0.9473684210526315
          },
          {
            "modelId": "opportunist",
            "played": 11,
            "winRate": 0.9090909090909091
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 68,
            "winRate": 0.8235294117647058
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "foxfire",
        "name": "Requin runefer",
        "family": "familiar",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "combo-1",
          "familiar",
          "flip-1",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 255,
        "played": 59,
        "ignored": 196,
        "selectionRate": 0.23137254901960785,
        "wins": 42,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.711864406779661,
        "averageFlips": 0.3559322033898305,
        "failedImpactRate": 0.25,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 1.6271186440677967,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 23,
            "winRate": 0.9130434782608695
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 59,
            "winRate": 0.711864406779661
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "pact-sprite",
        "name": "Lutin a pacte",
        "family": "demon",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-enemy",
          "boost-self",
          "connector",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 302,
        "played": 56,
        "ignored": 246,
        "selectionRate": 0.18543046357615894,
        "wins": 35,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.6071428571428571,
        "failedImpactRate": 0.19047619047619047,
        "averageFlipMargin": 3.1470588235294117,
        "averageEffectAmount": 1.4285714285714286,
        "averageDamageDealt": 0.7857142857142857,
        "averageDamageTaken": 0.05357142857142857,
        "averageNetDamage": 0.7321428571428571,
        "lethalMoves": 2,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 24,
            "winRate": 0.7916666666666666
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.2727272727272727
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.7
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 56,
            "winRate": 0.625
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "heron",
        "name": "Oiselle aubeplume",
        "family": "familiar",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "combo-1",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 267,
        "played": 52,
        "ignored": 215,
        "selectionRate": 0.1947565543071161,
        "wins": 41,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.7884615384615384,
        "averageFlips": 0.4423076923076923,
        "failedImpactRate": 0.23333333333333334,
        "averageFlipMargin": 4.304347826086956,
        "averageEffectAmount": 1.8653846153846154,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 29,
            "winRate": 0.9310344827586207
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.875
          },
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.16666666666666666
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 52,
            "winRate": 0.7884615384615384
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "familyAnalytics": [
      {
        "id": "automaton",
        "label": "automaton",
        "offered": 4784,
        "played": 972,
        "ignored": 3812,
        "selectionRate": 0.20317725752508362,
        "wins": 551,
        "losses": 421,
        "draws": 0,
        "winRateWhenPlayed": 0.5668724279835391,
        "averageFlips": 0.17078189300411523,
        "averageDamageDealt": 0.38065843621399176,
        "averageNetDamage": 0.35905349794238683,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 323,
            "winRateWhenPlayed": 0.5975232198142415
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 278,
            "winRateWhenPlayed": 0.5359712230215827
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 226,
            "winRateWhenPlayed": 0.588495575221239
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 145,
            "winRateWhenPlayed": 0.5241379310344828
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "human",
        "label": "human",
        "offered": 4559,
        "played": 852,
        "ignored": 3707,
        "selectionRate": 0.1868830883965782,
        "wins": 554,
        "losses": 298,
        "draws": 0,
        "winRateWhenPlayed": 0.6502347417840375,
        "averageFlips": 0.20305164319248825,
        "averageDamageDealt": 0.4624413145539906,
        "averageNetDamage": 0.4014084507042254,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 259,
            "winRateWhenPlayed": 0.7181467181467182
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 245,
            "winRateWhenPlayed": 0.5224489795918368
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 195,
            "winRateWhenPlayed": 0.7384615384615385
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 153,
            "winRateWhenPlayed": 0.6274509803921569
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "revenant",
        "label": "revenant",
        "offered": 3319,
        "played": 709,
        "ignored": 2610,
        "selectionRate": 0.21361855980717084,
        "wins": 520,
        "losses": 189,
        "draws": 0,
        "winRateWhenPlayed": 0.7334273624823695,
        "averageFlips": 0.18335684062059238,
        "averageDamageDealt": 0.7968970380818053,
        "averageNetDamage": 0.770098730606488,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 259,
            "winRateWhenPlayed": 0.6795366795366795
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 193,
            "winRateWhenPlayed": 0.7772020725388601
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 132,
            "winRateWhenPlayed": 0.7424242424242424
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 125,
            "winRateWhenPlayed": 0.768
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "arcane",
        "label": "arcane",
        "offered": 1625,
        "played": 394,
        "ignored": 1231,
        "selectionRate": 0.24246153846153845,
        "wins": 308,
        "losses": 86,
        "draws": 0,
        "winRateWhenPlayed": 0.7817258883248731,
        "averageFlips": 0.31218274111675126,
        "averageDamageDealt": 0.24111675126903553,
        "averageNetDamage": 0.21573604060913706,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 133,
            "winRateWhenPlayed": 0.7744360902255639
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 112,
            "winRateWhenPlayed": 0.7321428571428571
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 81,
            "winRateWhenPlayed": 0.8271604938271605
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 68,
            "winRateWhenPlayed": 0.8235294117647058
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "demon",
        "label": "demon",
        "offered": 1674,
        "played": 383,
        "ignored": 1291,
        "selectionRate": 0.22879330943847073,
        "wins": 249,
        "losses": 134,
        "draws": 0,
        "winRateWhenPlayed": 0.6501305483028721,
        "averageFlips": 0.46736292428198434,
        "averageDamageDealt": 1.2663185378590078,
        "averageNetDamage": 0.9895561357702349,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 151,
            "winRateWhenPlayed": 0.609271523178808
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 92,
            "winRateWhenPlayed": 0.7065217391304348
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 84,
            "winRateWhenPlayed": 0.6785714285714286
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 56,
            "winRateWhenPlayed": 0.625
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "familiar",
        "label": "familiar",
        "offered": 1365,
        "played": 325,
        "ignored": 1040,
        "selectionRate": 0.23809523809523808,
        "wins": 222,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.683076923076923,
        "averageFlips": 0.28307692307692306,
        "averageDamageDealt": 0.04,
        "averageNetDamage": 0.018461538461538463,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 114,
            "winRateWhenPlayed": 0.7017543859649122
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 100,
            "winRateWhenPlayed": 0.59
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 59,
            "winRateWhenPlayed": 0.711864406779661
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 52,
            "winRateWhenPlayed": 0.7884615384615384
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "roleAnalytics": [
      {
        "id": "attacker",
        "label": "attacker",
        "offered": 4870,
        "played": 1239,
        "ignored": 3631,
        "selectionRate": 0.2544147843942505,
        "wins": 830,
        "losses": 409,
        "draws": 0,
        "winRateWhenPlayed": 0.6698950766747377,
        "averageFlips": 0.23002421307506055,
        "averageDamageDealt": 0.6618240516545602,
        "averageNetDamage": 0.569814366424536,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 323,
            "winRateWhenPlayed": 0.5975232198142415
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 259,
            "winRateWhenPlayed": 0.7181467181467182
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 259,
            "winRateWhenPlayed": 0.6795366795366795
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 151,
            "winRateWhenPlayed": 0.609271523178808
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 133,
            "winRateWhenPlayed": 0.7744360902255639
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "anchor",
        "label": "anchor",
        "offered": 5879,
        "played": 1020,
        "ignored": 4859,
        "selectionRate": 0.17349889436979077,
        "wins": 633,
        "losses": 387,
        "draws": 0,
        "winRateWhenPlayed": 0.6205882352941177,
        "averageFlips": 0.2323529411764706,
        "averageDamageDealt": 0.6294117647058823,
        "averageNetDamage": 0.5833333333333333,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 278,
            "winRateWhenPlayed": 0.5359712230215827
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 245,
            "winRateWhenPlayed": 0.5224489795918368
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 193,
            "winRateWhenPlayed": 0.7772020725388601
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 112,
            "winRateWhenPlayed": 0.7321428571428571
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 100,
            "winRateWhenPlayed": 0.59
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "payoff",
        "label": "payoff",
        "offered": 3233,
        "played": 715,
        "ignored": 2518,
        "selectionRate": 0.22115682029075162,
        "wins": 480,
        "losses": 235,
        "draws": 0,
        "winRateWhenPlayed": 0.6713286713286714,
        "averageFlips": 0.22657342657342658,
        "averageDamageDealt": 0.3706293706293706,
        "averageNetDamage": 0.3356643356643357,
        "topCards": [
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 226,
            "winRateWhenPlayed": 0.588495575221239
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 153,
            "winRateWhenPlayed": 0.6274509803921569
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 125,
            "winRateWhenPlayed": 0.768
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 84,
            "winRateWhenPlayed": 0.6785714285714286
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 68,
            "winRateWhenPlayed": 0.8235294117647058
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "connector",
        "label": "connector",
        "offered": 3344,
        "played": 661,
        "ignored": 2683,
        "selectionRate": 0.19766746411483255,
        "wins": 461,
        "losses": 200,
        "draws": 0,
        "winRateWhenPlayed": 0.697428139183056,
        "averageFlips": 0.2708018154311649,
        "averageDamageDealt": 0.2950075642965204,
        "averageNetDamage": 0.25113464447806355,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 195,
            "winRateWhenPlayed": 0.7384615384615385
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 145,
            "winRateWhenPlayed": 0.5241379310344828
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 132,
            "winRateWhenPlayed": 0.7424242424242424
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 81,
            "winRateWhenPlayed": 0.8271604938271605
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 56,
            "winRateWhenPlayed": 0.625
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 17326,
        "played": 3635,
        "ignored": 13691,
        "selectionRate": 0.20980030012697679,
        "wins": 2404,
        "losses": 1231,
        "draws": 0,
        "winRateWhenPlayed": 0.6613480055020633,
        "averageFlips": 0.237414030261348,
        "averageDamageDealt": 0.5287482806052269,
        "averageNetDamage": 0.46960110041265474,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 323,
            "winRateWhenPlayed": 0.5975232198142415
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 278,
            "winRateWhenPlayed": 0.5359712230215827
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 259,
            "winRateWhenPlayed": 0.7181467181467182
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 259,
            "winRateWhenPlayed": 0.6795366795366795
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 245,
            "winRateWhenPlayed": 0.5224489795918368
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "comboAnalytics": [
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 632,
        "wins": 340,
        "losses": 292,
        "draws": 0,
        "winRate": 0.5379746835443038,
        "averageFlips": 0.18354430379746836,
        "averageDamageDealt": 0.4620253164556962,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 580,
        "wins": 424,
        "losses": 156,
        "draws": 0,
        "winRate": 0.7310344827586207,
        "averageFlips": 0.13448275862068965,
        "averageDamageDealt": 1.4396551724137931,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 565,
        "wins": 359,
        "losses": 206,
        "draws": 0,
        "winRate": 0.6353982300884956,
        "averageFlips": 0.22654867256637168,
        "averageDamageDealt": 0.6106194690265486,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 537,
        "wins": 455,
        "losses": 82,
        "draws": 0,
        "winRate": 0.8472998137802608,
        "averageFlips": 0.14152700186219738,
        "averageDamageDealt": 1.8770949720670391,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 440,
        "wins": 380,
        "losses": 60,
        "draws": 0,
        "winRate": 0.8636363636363636,
        "averageFlips": 0.11363636363636363,
        "averageDamageDealt": 2.3045454545454547,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 427,
        "wins": 306,
        "losses": 121,
        "draws": 0,
        "winRate": 0.7166276346604216,
        "averageFlips": 0.2107728337236534,
        "averageDamageDealt": 0.9812646370023419,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 259,
        "wins": 186,
        "losses": 73,
        "draws": 0,
        "winRate": 0.7181467181467182,
        "averageFlips": 0.3204633204633205,
        "averageDamageDealt": 0.11583011583011583,
        "averageEffectAmount": 1.277992277992278,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 238,
        "wins": 114,
        "losses": 124,
        "draws": 0,
        "winRate": 0.4789915966386555,
        "averageFlips": 0.11764705882352941,
        "averageDamageDealt": 0.3445378151260504,
        "averageEffectAmount": 1.8949579831932772,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 230,
        "wins": 149,
        "losses": 81,
        "draws": 0,
        "winRate": 0.6478260869565218,
        "averageFlips": 0.591304347826087,
        "averageDamageDealt": 1.6652173913043478,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:tin-oracle:draw-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> draw-next-turn",
        "count": 226,
        "wins": 133,
        "losses": 93,
        "draws": 0,
        "winRate": 0.588495575221239,
        "averageFlips": 0.11504424778761062,
        "averageDamageDealt": 0.16371681415929204,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 224,
        "wins": 180,
        "losses": 44,
        "draws": 0,
        "winRate": 0.8035714285714286,
        "averageFlips": 0.39285714285714285,
        "averageDamageDealt": 0.25,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 218,
        "wins": 123,
        "losses": 95,
        "draws": 0,
        "winRate": 0.5642201834862385,
        "averageFlips": 0.07339449541284404,
        "averageDamageDealt": 0.009174311926605505,
        "averageEffectAmount": 2.7018348623853212,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 204,
        "wins": 92,
        "losses": 112,
        "draws": 0,
        "winRate": 0.45098039215686275,
        "averageFlips": 0.14705882352941177,
        "averageDamageDealt": 0.3333333333333333,
        "averageEffectAmount": 1.9558823529411764,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 195,
        "wins": 144,
        "losses": 51,
        "draws": 0,
        "winRate": 0.7384615384615385,
        "averageFlips": 0.14358974358974358,
        "averageDamageDealt": 0.2,
        "averageEffectAmount": 2,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 191,
        "wins": 129,
        "losses": 62,
        "draws": 0,
        "winRate": 0.675392670157068,
        "averageFlips": 0.39267015706806285,
        "averageDamageDealt": 0.02617801047120419,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 179,
        "wins": 159,
        "losses": 20,
        "draws": 0,
        "winRate": 0.888268156424581,
        "averageFlips": 0.29608938547486036,
        "averageDamageDealt": 0.5139664804469274,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 134,
        "wins": 102,
        "losses": 32,
        "draws": 0,
        "winRate": 0.7611940298507462,
        "averageFlips": 0.41044776119402987,
        "averageDamageDealt": 2.298507462686567,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 134,
        "wins": 102,
        "losses": 32,
        "draws": 0,
        "winRate": 0.7611940298507462,
        "averageFlips": 0.3358208955223881,
        "averageDamageDealt": 0.05970149253731343,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:gear-monk:gain-shield",
        "kind": "effect",
        "label": "Moine engrene -> gain-shield",
        "count": 130,
        "wins": 63,
        "losses": 67,
        "draws": 0,
        "winRate": 0.4846153846153846,
        "averageFlips": 0.2153846153846154,
        "averageDamageDealt": 0.1,
        "averageEffectAmount": 1.9307692307692308,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 125,
        "wins": 96,
        "losses": 29,
        "draws": 0,
        "winRate": 0.768,
        "averageFlips": 0.24,
        "averageDamageDealt": 0.136,
        "averageEffectAmount": 1.288,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 123,
        "wins": 80,
        "losses": 43,
        "draws": 0,
        "winRate": 0.6504065040650406,
        "averageFlips": 0.2845528455284553,
        "averageDamageDealt": 0.016260162601626018,
        "averageEffectAmount": 2.951219512195122,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:draw-next-turn",
        "kind": "effect",
        "label": "Rodeuse du sentier -> draw-next-turn",
        "count": 116,
        "wins": 90,
        "losses": 26,
        "draws": 0,
        "winRate": 0.7758620689655172,
        "averageFlips": 0.23275862068965517,
        "averageDamageDealt": 0.017241379310344827,
        "averageEffectAmount": 1.9827586206896552,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:brass-rook:gain-shield",
        "kind": "effect",
        "label": "Tour de laiton -> gain-shield",
        "count": 113,
        "wins": 54,
        "losses": 59,
        "draws": 0,
        "winRate": 0.4778761061946903,
        "averageFlips": 0.23008849557522124,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:draw-next-turn",
        "kind": "effect",
        "label": "Tour de laiton -> draw-next-turn",
        "count": 104,
        "wins": 75,
        "losses": 29,
        "draws": 0,
        "winRate": 0.7211538461538461,
        "averageFlips": 0.15384615384615385,
        "averageDamageDealt": 0.038461538461538464,
        "averageEffectAmount": 1.9807692307692308,
        "notes": [
          "Combo gagnant frequent."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 369,
        "id": "card-hornling-nerf",
        "severity": "problem",
        "action": "nerf",
        "title": "Cornu farceur tire trop de valeur",
        "detail": "92 plays, 71% win, 0.66 flips/play, net PV 1.10.",
        "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1887,
        "id": "card-quiet-monk-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "1887 offres, 13% selection, 52% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1842,
        "id": "card-clock-sentinel-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Sentinelle d'horloge est ignoree par les bots",
        "detail": "1842 offres, 15% selection, 54% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1747,
        "id": "card-widow-knight-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Chevalier veuf est ignoree par les bots",
        "detail": "1747 offres, 15% selection, 68% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1344,
        "id": "card-gear-monk-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "1344 offres, 11% selection, 52% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1192,
        "id": "card-field-knight-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Chevaliere des champs est ignoree par les bots",
        "detail": "1192 offres, 13% selection, 63% win quand jouee, role payoff.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 5879,
        "id": "role-anchor-buff",
        "severity": "watch",
        "action": "verify",
        "title": "anchor manque d'attraction",
        "detail": "5879 offres, 17% selection, 62% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 580,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "580 occurrences, 73% win, 0.13 flips, 1.44 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 537,
        "title": "human allie + human ressort comme combo",
        "detail": "537 occurrences, 85% win, 0.14 flips, 1.88 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 440,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "440 occurrences, 86% win, 0.11 flips, 2.30 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 224,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "224 occurrences, 80% win, 0.39 flips, 0.25 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:rune-mage:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 195,
        "title": "Mage des runes -> draw-next-turn ressort comme combo",
        "detail": "195 occurrences, 74% win, 0.14 flips, 0.20 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 179,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "179 occurrences, 89% win, 0.30 flips, 0.51 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 134,
        "title": "demon allie + demon ressort comme combo",
        "detail": "134 occurrences, 76% win, 0.41 flips, 2.30 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 134,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "134 occurrences, 76% win, 0.34 flips, 0.06 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moth-ghost:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 125,
        "title": "Fantome phalene -> boost-self ressort comme combo",
        "detail": "125 occurrences, 77% win, 0.24 flips, 0.14 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:path-ranger:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 116,
        "title": "Rodeuse du sentier -> draw-next-turn ressort comme combo",
        "detail": "116 occurrences, 78% win, 0.23 flips, 0.02 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:brass-rook:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 104,
        "title": "Tour de laiton -> draw-next-turn ressort comme combo",
        "detail": "104 occurrences, 72% win, 0.15 flips, 0.04 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-problem",
      "severity": "problem",
      "title": "Depart actuel - famille 10 cartes sort de la zone saine",
      "detail": "Avantage premier joueur a surveiller (39%). Tours morts frequents (23%). Peu de flips par tour (0.14).",
      "recommendation": "Tester ce depart avec plus de matchs, puis ajuster familles, pioche ou valeurs faibles."
    },
    {
      "id": "diagnostic-card-hornling-nerf",
      "severity": "problem",
      "title": "Cornu farceur tire trop de valeur",
      "detail": "92 plays, 71% win, 0.66 flips/play, net PV 1.10. Confiance high, echantillon 369.",
      "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
    },
    {
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "watch",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "1887 offres, 13% selection, 52% win quand jouee, role anchor. Confiance high, echantillon 1887.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-clock-sentinel-ignored",
      "severity": "watch",
      "title": "Sentinelle d'horloge est ignoree par les bots",
      "detail": "1842 offres, 15% selection, 54% win quand jouee, role anchor. Confiance high, echantillon 1842.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-widow-knight-ignored",
      "severity": "watch",
      "title": "Chevalier veuf est ignoree par les bots",
      "detail": "1747 offres, 15% selection, 68% win quand jouee, role attacker. Confiance high, echantillon 1747.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 12.5% des runs complets, avec 82.9% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 0.0% des runs complets, avec 46.7% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ]
};
