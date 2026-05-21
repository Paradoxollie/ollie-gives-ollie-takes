import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260521-225345",
  "generatedAt": "2026-05-21T22:53:45.029Z",
  "config": {
    "matchesPerPairing": 18,
    "adventureRunsPerModel": 8,
    "seed": 23,
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
      "wins": 0,
      "losses": 18,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -22.22222222222222
    },
    {
      "modelId": "opportunist",
      "games": 36,
      "wins": 20,
      "losses": 16,
      "draws": 0,
      "winRate": 0.5555555555555556,
      "averageHpEdge": 1.5
    },
    {
      "modelId": "regular",
      "games": 36,
      "wins": 25,
      "losses": 11,
      "draws": 0,
      "winRate": 0.6944444444444444,
      "averageHpEdge": 9.222222222222221
    },
    {
      "modelId": "expert",
      "games": 36,
      "wins": 13,
      "losses": 23,
      "draws": 0,
      "winRate": 0.3611111111111111,
      "averageHpEdge": -4.805555555555555
    },
    {
      "modelId": "champion",
      "games": 18,
      "wins": 14,
      "losses": 4,
      "draws": 0,
      "winRate": 0.7777777777777778,
      "averageHpEdge": 10.38888888888889
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 59.22222222222222,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 11.777777777777779,
        "flipsPerTurn": 0.19887429643527205,
        "reshuffles": 9.166666666666666,
        "deadTurns": 7.111111111111111,
        "finalHpDifference": 20.5
      },
      "deadTurnFrequency": 0.1200750469043152,
      "status": "problem",
      "notes": [
        "Ouverture stable sur ce depart.",
        "Tours morts frequents (12%).",
        "Peu de flips par tour (0.20)."
      ]
    }
  ],
  "ladderPairings": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
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
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 18,
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -22.22222222222222
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.22222222222222
        }
      ],
      "averages": {
        "turns": 44.833333333333336,
        "rounds": 4.388888888888889,
        "flipsPerMatch": 16.88888888888889,
        "flipsPerTurn": 0.37670384138785623,
        "reshuffles": 6.166666666666667,
        "deadTurns": 5.666666666666667,
        "finalHpDifference": 22.22222222222222
      },
      "deadTurnFrequency": 0.12639405204460966
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "opportunist",
        "regular"
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
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.3888888888888889
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -19.22222222222222
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 19.22222222222222
        }
      ],
      "averages": {
        "turns": 51.833333333333336,
        "rounds": 4.666666666666667,
        "flipsPerMatch": 15.11111111111111,
        "flipsPerTurn": 0.2915326902465166,
        "reshuffles": 6.333333333333333,
        "deadTurns": 10.166666666666666,
        "finalHpDifference": 22.77777777777778
      },
      "deadTurnFrequency": 0.19614147909967847
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "regular",
        "expert"
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
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.7777777777777778
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0.7777777777777778
        }
      ],
      "averages": {
        "turns": 58.333333333333336,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 15.555555555555555,
        "flipsPerTurn": 0.26666666666666666,
        "reshuffles": 8.88888888888889,
        "deadTurns": 7.5,
        "finalHpDifference": 20.555555555555557
      },
      "deadTurnFrequency": 0.12857142857142856
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
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
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -10.38888888888889
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 10.38888888888889
        }
      ],
      "averages": {
        "turns": 51.55555555555556,
        "rounds": 5.055555555555555,
        "flipsPerMatch": 14.277777777777779,
        "flipsPerTurn": 0.2769396551724138,
        "reshuffles": 7.833333333333333,
        "deadTurns": 6.222222222222222,
        "finalHpDifference": 22.166666666666668
      },
      "deadTurnFrequency": 0.1206896551724138
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
      "averageLocationsCleared": 1.125,
      "averageFinalDeckSize": 12.125,
      "averageDeckDelta": 0.125,
      "averageCombatWinRate": 0.1111111111111111,
      "averageCombatTurns": 43.55555555555556,
      "averageCombatFlips": 14.222222222222221,
      "averageDeadTurns": 5.666666666666667,
      "averageReshuffles": 6,
      "averageRewardsClaimed": 0.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.125,
        "demon": 0.25,
        "human": 0.125,
        "automaton": 0.125,
        "revenant": 0.25,
        "arcane": 0.125
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
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
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
      "averageLocationsCleared": 2.375,
      "averageFinalDeckSize": 12.625,
      "averageDeckDelta": 0.625,
      "averageCombatWinRate": 0.4666666666666667,
      "averageCombatTurns": 24.333333333333332,
      "averageCombatFlips": 14.333333333333334,
      "averageDeadTurns": 0.26666666666666666,
      "averageReshuffles": 4.6,
      "averageRewardsClaimed": 1,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0.375,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.7894736842105263,
        "elite": 0,
        "shop": 0.15789473684210525,
        "chest": 0.05263157894736842,
        "rest": 0,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3.75,
      "averageFinalDeckSize": 14,
      "averageDeckDelta": 2,
      "averageCombatWinRate": 0.6923076923076923,
      "averageCombatTurns": 54.07692307692308,
      "averageCombatFlips": 15.884615384615385,
      "averageDeadTurns": 7.6923076923076925,
      "averageReshuffles": 8.5,
      "averageRewardsClaimed": 2.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.375,
      "averageFusions": 0,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.7666666666666667,
        "elite": 0.1,
        "shop": 0,
        "chest": 0.03333333333333333,
        "rest": 0.1,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 6,
      "averageFinalDeckSize": 14.5,
      "averageDeckDelta": 2.5,
      "averageCombatWinRate": 0.75,
      "averageCombatTurns": 29.8125,
      "averageCombatFlips": 13.3125,
      "averageDeadTurns": 0.5625,
      "averageReshuffles": 6.03125,
      "averageRewardsClaimed": 3.75,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.5,
      "averageFusions": 0.75,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.6041666666666666,
        "elite": 0.0625,
        "shop": 0.125,
        "chest": 0.125,
        "rest": 0.08333333333333333,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 3,
      "bossReached": 3,
      "victoryRate": 0.375,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 8.375,
      "averageFinalDeckSize": 17.5,
      "averageDeckDelta": 5.5,
      "averageCombatWinRate": 0.9,
      "averageCombatTurns": 35.82,
      "averageCombatFlips": 12.84,
      "averageDeadTurns": 1.82,
      "averageReshuffles": 6.38,
      "averageRewardsClaimed": 6.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.25,
      "averageUpgrades": 1,
      "averageRemovals": 0,
      "averageFusions": 0.625,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.5428571428571428,
        "elite": 0.12857142857142856,
        "shop": 0.07142857142857142,
        "chest": 0.1,
        "rest": 0.11428571428571428,
        "boss": 0.04285714285714286
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
        "Le champion atteint trop rarement le boss sur cet echantillon; augmenter les runs et analyser les noeuds de defaite."
      ]
    }
  ],
  "adventureRuns": [
    {
      "runIndex": 0,
      "modelId": "beginner",
      "seed": 1236290339,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 27,
      "totalCombatFlips": 12,
      "totalDeadTurns": 0,
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
        "demon": 0,
        "human": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1219512720,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 27,
      "totalCombatFlips": 11,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 11,
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
      "modelId": "beginner",
      "seed": 1269845577,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 113,
      "totalCombatFlips": 33,
      "totalDeadTurns": 14,
      "totalReshuffles": 16,
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
        "watcher-stone"
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
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 19,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 77,
          "combatFlips": 14,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1253067958,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 35,
      "totalCombatFlips": 17,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 35,
          "combatFlips": 17,
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
      "modelId": "beginner",
      "seed": 1303400815,
      "selectedFamily": "familiar",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 45,
      "totalCombatFlips": 24,
      "totalDeadTurns": 0,
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
        "familiar": 12,
        "demon": 0,
        "human": 0,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 24,
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
      "runIndex": 5,
      "modelId": "beginner",
      "seed": 1286623196,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 48,
      "totalCombatFlips": 10,
      "totalDeadTurns": 12,
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
        "arcane": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 48,
          "combatFlips": 10,
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
      "runIndex": 6,
      "modelId": "beginner",
      "seed": 1336956053,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 51,
      "totalCombatFlips": 10,
      "totalDeadTurns": 15,
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
        "revenant": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 51,
          "combatFlips": 10,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1320178434,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 46,
      "totalCombatFlips": 11,
      "totalDeadTurns": 10,
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
        "automaton": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 46,
          "combatFlips": 11,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 116806142,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 87,
      "totalCombatFlips": 55,
      "totalDeadTurns": 0,
      "totalReshuffles": 18,
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
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 1,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 14,
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
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 26,
          "combatFlips": 15,
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
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 25,
          "combatFlips": 15,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 133583761,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 24,
      "totalCombatFlips": 12,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 24,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 83250904,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 27,
      "totalCombatFlips": 19,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 19,
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
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 100028523,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 18,
      "totalCombatFlips": 11,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "modelId": "opportunist",
      "seed": 183916618,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 108,
      "totalCombatFlips": 60,
      "totalDeadTurns": 0,
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
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 3,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 13,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 20,
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
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 14,
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
      "modelId": "opportunist",
      "seed": 200694237,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 18,
      "totalCombatFlips": 13,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 13,
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
      "modelId": "opportunist",
      "seed": 150361380,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 27,
      "totalCombatFlips": 19,
      "totalDeadTurns": 0,
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
        "demon": 12,
        "human": 0,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 19,
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 167138999,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 56,
      "totalCombatFlips": 26,
      "totalDeadTurns": 4,
      "totalReshuffles": 13,
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
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 13,
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
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 31,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 1977435599,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 186,
      "totalCombatFlips": 46,
      "totalDeadTurns": 24,
      "totalReshuffles": 30,
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
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 1,
        "revenant": 0,
        "arcane": 12,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 10,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 48,
          "combatFlips": 10,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 47,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 20,
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
      "modelId": "regular",
      "seed": 1960657980,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 148,
      "totalCombatFlips": 64,
      "totalDeadTurns": 4,
      "totalReshuffles": 28,
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
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 76,
          "combatFlips": 33,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 72,
          "combatFlips": 31,
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
      "modelId": "regular",
      "seed": 2010990837,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 103,
      "totalCombatFlips": 23,
      "totalDeadTurns": 22,
      "totalReshuffles": 12,
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
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 76,
          "combatFlips": 13,
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 10,
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
      "seed": 1994213218,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 79,
      "totalCombatFlips": 27,
      "totalDeadTurns": 7,
      "totalReshuffles": 12,
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
        "watcher-stone"
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 13,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 43,
          "combatFlips": 16,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 11,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 1910325123,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 159,
      "totalCombatFlips": 65,
      "totalDeadTurns": 6,
      "totalReshuffles": 26,
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
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 13,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 26,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 30,
          "combatFlips": 11,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 57,
          "combatFlips": 18,
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
      "modelId": "regular",
      "seed": 1893547504,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 360,
      "totalCombatFlips": 89,
      "totalDeadTurns": 72,
      "totalReshuffles": 49,
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
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 3,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 13,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 60,
          "combatFlips": 15,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 48,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 77,
          "combatFlips": 13,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 49,
          "combatFlips": 12,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 46,
          "combatFlips": 11,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 80,
          "combatFlips": 26,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 1943880361,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 254,
      "totalCombatFlips": 75,
      "totalDeadTurns": 38,
      "totalReshuffles": 50,
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
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 13,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 56,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 87,
          "combatFlips": 16,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 14,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 75,
          "combatFlips": 26,
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
      "modelId": "regular",
      "seed": 1927102742,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 117,
      "totalCombatFlips": 24,
      "totalDeadTurns": 27,
      "totalReshuffles": 14,
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
        "moss-dust"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 11,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 74,
          "combatFlips": 18,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 43,
          "combatFlips": 6,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 3710891281,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 56,
      "totalCombatFlips": 27,
      "totalDeadTurns": 2,
      "totalReshuffles": 13,
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
        "demon": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 15,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 29,
          "combatFlips": 12,
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
      "runIndex": 1,
      "modelId": "expert",
      "seed": 3694113662,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 107,
      "totalCombatFlips": 54,
      "totalDeadTurns": 0,
      "totalReshuffles": 14,
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
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 15,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 17,
          "combatFlips": 9,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 8,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 13,
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
      "modelId": "expert",
      "seed": 3677336043,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 9,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 221,
      "totalCombatFlips": 87,
      "totalDeadTurns": 13,
      "totalReshuffles": 37,
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
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 7,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 14,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 58,
          "combatFlips": 17,
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
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 10,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 33,
          "combatFlips": 12,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 13,
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
      "runIndex": 3,
      "modelId": "expert",
      "seed": 3660558424,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 68,
      "totalCombatFlips": 32,
      "totalDeadTurns": 0,
      "totalReshuffles": 15,
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
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
          "combatFlips": 16,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 45,
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 3778001757,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 150,
      "totalCombatFlips": 69,
      "totalDeadTurns": 0,
      "totalReshuffles": 41,
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
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 12,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 54,
          "combatFlips": 25,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 60,
          "combatFlips": 24,
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
      "seed": 3761224138,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 117,
      "totalCombatFlips": 53,
      "totalDeadTurns": 0,
      "totalReshuffles": 18,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 9,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "shop",
          "title": "Bazaar des souches",
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
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 19,
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
      "runIndex": 6,
      "modelId": "expert",
      "seed": 3744446519,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 66,
      "totalCombatFlips": 29,
      "totalDeadTurns": 3,
      "totalReshuffles": 8,
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
        "lantern-mushroom"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 2,
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 1,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 8,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "shop",
          "title": "Echoppe de brindilles",
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "chest",
          "title": "Cache de spores",
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
          "kind": "rest",
          "title": "Feu de canopee",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 15,
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
      "seed": 3727668900,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 169,
      "totalCombatFlips": 75,
      "totalDeadTurns": 0,
      "totalReshuffles": 47,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 4,
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
        "combat": 5,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 3,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 19,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 15,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 21,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 3613180010,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 19,
      "deckDelta": 7,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 7,
      "combatWins": 7,
      "combatLosses": 0,
      "totalCombatTurns": 234,
      "totalCombatFlips": 85,
      "totalDeadTurns": 10,
      "totalReshuffles": 41,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 1,
        "rare": 2
      },
      "stealRewardsOffered": 18,
      "stealRewardsClaimed": 6,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 14,
        "revenant": 3,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
        "uncommon": 1,
        "rare": 2
      },
      "path": [
        {
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 13,
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
          "kind": "rest",
          "title": "Repos du sous-bois",
          "playerDeckSizeBefore": 13,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 38,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 14,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "rest",
          "title": "Halte aux fougeres",
          "playerDeckSizeBefore": 15,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 7,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 31,
          "combatFlips": 8,
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
          "nodeId": "depth-8-lane-2",
          "depth": 8,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
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
          "nodeId": "depth-9-lane-2",
          "depth": 9,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
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
          "nodeId": "depth-10-lane-3",
          "depth": 10,
          "lane": 3,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 20,
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
          "nodeId": "depth-11-lane-2",
          "depth": 11,
          "lane": 2,
          "kind": "shop",
          "title": "Marche aux lucioles",
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 19,
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
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 14,
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
      "runIndex": 1,
      "modelId": "champion",
      "seed": 3629957629,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 12,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 289,
      "totalCombatFlips": 100,
      "totalDeadTurns": 19,
      "totalReshuffles": 49,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "watcher-stone",
        "firefly-wing"
      ],
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 7,
        "elite": 1,
        "shop": 1,
        "chest": 0,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 1,
        "automaton": 12,
        "revenant": 1,
        "arcane": 2,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
        "uncommon": 1,
        "rare": 1
      },
      "path": [
        {
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 14,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 14,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 41,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 7,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 12,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "firefly-wing",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-8-lane-3",
          "depth": 8,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 47,
          "combatFlips": 17,
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
          "nodeId": "depth-9-lane-3",
          "depth": 9,
          "lane": 3,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "depth-10-lane-4",
          "depth": 10,
          "lane": 4,
          "kind": "rest",
          "title": "Feu de canopee",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "depth-11-lane-4",
          "depth": 11,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 27,
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
      "runIndex": 2,
      "modelId": "champion",
      "seed": 3579624772,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 23,
      "deckDelta": 11,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 11,
      "combatWins": 11,
      "combatLosses": 0,
      "totalCombatTurns": 436,
      "totalCombatFlips": 164,
      "totalDeadTurns": 22,
      "totalReshuffles": 92,
      "rewardOffersSeen": 11,
      "rewardsClaimed": 11,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 8,
        "uncommon": 3,
        "rare": 0
      },
      "stealRewardsOffered": 30,
      "stealRewardsClaimed": 10,
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "old-bridge-stone",
        "double-knot-rune"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 8,
        "elite": 2,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 2,
        "human": 0,
        "automaton": 15,
        "revenant": 2,
        "arcane": 3,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 20,
        "uncommon": 3,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 57,
          "combatFlips": 16,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 10,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 51,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 47,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "rest",
          "title": "Halte aux fougeres",
          "playerDeckSizeBefore": 17,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 25,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 18,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 3,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "double-knot-rune",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-8-lane-4",
          "depth": 8,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-9-lane-4",
          "depth": 9,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 21,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
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
          "nodeId": "depth-10-lane-3",
          "depth": 10,
          "lane": 3,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 21,
          "playerDeckSizeAfter": 22,
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
          "nodeId": "depth-11-lane-4",
          "depth": 11,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 22,
          "playerDeckSizeAfter": 23,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 23,
          "playerDeckSizeAfter": 23,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 20,
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
      "runIndex": 3,
      "modelId": "champion",
      "seed": 3596402391,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 19,
      "deckDelta": 7,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 10,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 296,
      "totalCombatFlips": 96,
      "totalDeadTurns": 19,
      "totalReshuffles": 48,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 18,
      "stealRewardsClaimed": 6,
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
        "combat": 6,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 2,
        "human": 0,
        "automaton": 12,
        "revenant": 2,
        "arcane": 2,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
        "uncommon": 2,
        "rare": 1
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 10,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 51,
          "combatFlips": 11,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 13,
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
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 46,
          "combatFlips": 8,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 50,
          "combatFlips": 9,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 17,
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
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
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
          "nodeId": "depth-9-lane-2",
          "depth": 9,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 19,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 28,
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
      "runIndex": 4,
      "modelId": "champion",
      "seed": 3546069534,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 1,
      "combatCount": 1,
      "combatWins": 0,
      "combatLosses": 1,
      "totalCombatTurns": 45,
      "totalCombatFlips": 22,
      "totalDeadTurns": 0,
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
        "automaton": 12,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 22,
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
      "modelId": "champion",
      "seed": 3562847153,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 21,
      "deckDelta": 9,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 12,
      "combatCount": 11,
      "combatWins": 11,
      "combatLosses": 0,
      "totalCombatTurns": 350,
      "totalCombatFlips": 125,
      "totalDeadTurns": 17,
      "totalReshuffles": 55,
      "rewardOffersSeen": 10,
      "rewardsClaimed": 10,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 8,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 30,
      "stealRewardsClaimed": 10,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 8,
        "elite": 2,
        "shop": 1,
        "chest": 0,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 1,
        "human": 2,
        "automaton": 14,
        "revenant": 1,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 19,
        "uncommon": 2,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 12,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 10,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 7,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 46,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "rest",
          "title": "Repos du sous-bois",
          "playerDeckSizeBefore": 17,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 33,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 9,
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
          "nodeId": "depth-8-lane-4",
          "depth": 8,
          "lane": 4,
          "kind": "shop",
          "title": "Echoppe de brindilles",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "depth-9-lane-3",
          "depth": 9,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 17,
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
          "nodeId": "depth-10-lane-3",
          "depth": 10,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-11-lane-3",
          "depth": 11,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 21,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "boss-final",
          "depth": 12,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 21,
          "playerDeckSizeAfter": 21,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 14,
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
      "modelId": "champion",
      "seed": 3512514296,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 2,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 58,
      "totalCombatFlips": 13,
      "totalDeadTurns": 4,
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
        "demon": 1,
        "human": 0,
        "automaton": 12,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 31,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 5,
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
      "runIndex": 7,
      "modelId": "champion",
      "seed": 3529291915,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 83,
      "totalCombatFlips": 37,
      "totalDeadTurns": 0,
      "totalReshuffles": 18,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 6,
      "stealRewardsClaimed": 2,
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
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 12,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 2,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "siteAction": "forge-fusion"
        },
        {
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 19,
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
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
          "combo-1",
          "gain-shield",
          "human",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 1340,
        "played": 207,
        "ignored": 1133,
        "selectionRate": 0.15447761194029852,
        "wins": 87,
        "losses": 120,
        "draws": 0,
        "winRateWhenPlayed": 0.42028985507246375,
        "averageFlips": 0.2222222222222222,
        "failedImpactRate": 0.7415730337078652,
        "averageFlipMargin": 2.347826086956522,
        "averageEffectAmount": 1.6328502415458936,
        "averageDamageDealt": 0.4396135265700483,
        "averageDamageTaken": 0.28019323671497587,
        "averageNetDamage": 0.15942028985507245,
        "lethalMoves": 2,
        "roundClosers": 33,
        "byModel": [
          {
            "modelId": "regular",
            "played": 98,
            "winRate": 0.5510204081632653
          },
          {
            "modelId": "expert",
            "played": 57,
            "winRate": 0.22807017543859648
          },
          {
            "modelId": "opportunist",
            "played": 24,
            "winRate": 0.375
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.6111111111111112
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 207,
            "winRate": 0.42028985507246375
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1151,
        "played": 204,
        "ignored": 947,
        "selectionRate": 0.17723718505647262,
        "wins": 111,
        "losses": 93,
        "draws": 0,
        "winRateWhenPlayed": 0.5441176470588235,
        "averageFlips": 0.25,
        "failedImpactRate": 0.7017543859649122,
        "averageFlipMargin": 2.215686274509804,
        "averageEffectAmount": 0.16176470588235295,
        "averageDamageDealt": 1.0833333333333333,
        "averageDamageTaken": 0.6470588235294118,
        "averageNetDamage": 0.43627450980392146,
        "lethalMoves": 7,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 88,
            "winRate": 0.5340909090909091
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.41025641025641024
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.7222222222222222
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.8148148148148148
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 204,
            "winRate": 0.5441176470588235
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1347,
        "played": 190,
        "ignored": 1157,
        "selectionRate": 0.14105419450631032,
        "wins": 105,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.5526315789473685,
        "averageFlips": 0.4263157894736842,
        "failedImpactRate": 0.5290697674418605,
        "averageFlipMargin": 2.753086419753086,
        "averageEffectAmount": 0.9947368421052631,
        "averageDamageDealt": 0.7263157894736842,
        "averageDamageTaken": 0.07368421052631578,
        "averageNetDamage": 0.6526315789473685,
        "lethalMoves": 8,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 85,
            "winRate": 0.7411764705882353
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.2564102564102564
          },
          {
            "modelId": "opportunist",
            "played": 33,
            "winRate": 0.3939393939393939
          },
          {
            "modelId": "champion",
            "played": 19,
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 190,
            "winRate": 0.5526315789473685
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1504,
        "played": 160,
        "ignored": 1344,
        "selectionRate": 0.10638297872340426,
        "wins": 68,
        "losses": 92,
        "draws": 0,
        "winRateWhenPlayed": 0.425,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6610169491525424,
        "averageFlipMargin": 1.85,
        "averageEffectAmount": 1.16875,
        "averageDamageDealt": 0.825,
        "averageDamageTaken": 0.2,
        "averageNetDamage": 0.625,
        "lethalMoves": 6,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.525
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.48148148148148145
          },
          {
            "modelId": "expert",
            "played": 25,
            "winRate": 0.28
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.46153846153846156
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 160,
            "winRate": 0.425
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
        "offered": 1739,
        "played": 132,
        "ignored": 1607,
        "selectionRate": 0.07590569292696953,
        "wins": 45,
        "losses": 87,
        "draws": 0,
        "winRateWhenPlayed": 0.3409090909090909,
        "averageFlips": 0.3560606060606061,
        "failedImpactRate": 0.624,
        "averageFlipMargin": 2.74468085106383,
        "averageEffectAmount": 0.7651515151515151,
        "averageDamageDealt": 0.553030303030303,
        "averageDamageTaken": 0.1893939393939394,
        "averageNetDamage": 0.3636363636363636,
        "lethalMoves": 2,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 47,
            "winRate": 0.3617021276595745
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 24,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 22,
            "winRate": 0.36363636363636365
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.8571428571428571
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 132,
            "winRate": 0.3409090909090909
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1183,
        "played": 127,
        "ignored": 1056,
        "selectionRate": 0.1073541842772612,
        "wins": 55,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.4330708661417323,
        "averageFlips": 0.3700787401574803,
        "failedImpactRate": 0.5648148148148148,
        "averageFlipMargin": 1.702127659574468,
        "averageEffectAmount": 0.2283464566929134,
        "averageDamageDealt": 0.3543307086614173,
        "averageDamageTaken": 0.31496062992125984,
        "averageNetDamage": 0.039370078740157466,
        "lethalMoves": 1,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 50,
            "winRate": 0.48
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.37037037037037035
          },
          {
            "modelId": "expert",
            "played": 24,
            "winRate": 0.4583333333333333
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 127,
            "winRate": 0.4330708661417323
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 654,
        "played": 99,
        "ignored": 555,
        "selectionRate": 0.15137614678899083,
        "wins": 57,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.5757575757575758,
        "averageFlips": 0.6363636363636364,
        "failedImpactRate": 0.31521739130434784,
        "averageFlipMargin": 2.7777777777777777,
        "averageEffectAmount": 1.2828282828282829,
        "averageDamageDealt": 1.7676767676767677,
        "averageDamageTaken": 0.3333333333333333,
        "averageNetDamage": 1.4343434343434345,
        "lethalMoves": 4,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 38,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "expert",
            "played": 25,
            "winRate": 0.24
          },
          {
            "modelId": "opportunist",
            "played": 19,
            "winRate": 0.8421052631578947
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.75
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 99,
            "winRate": 0.5757575757575758
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
        "offered": 1387,
        "played": 79,
        "ignored": 1308,
        "selectionRate": 0.05695746214852199,
        "wins": 35,
        "losses": 44,
        "draws": 0,
        "winRateWhenPlayed": 0.4430379746835443,
        "averageFlips": 0.22784810126582278,
        "failedImpactRate": 0.7631578947368421,
        "averageFlipMargin": 2.1666666666666665,
        "averageEffectAmount": 1.1518987341772151,
        "averageDamageDealt": 0.2911392405063291,
        "averageDamageTaken": 1.0253164556962024,
        "averageNetDamage": -0.7341772151898733,
        "lethalMoves": 0,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 31,
            "winRate": 0.5806451612903226
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "expert",
            "played": 15,
            "winRate": 0.13333333333333333
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 79,
            "winRate": 0.4430379746835443
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1381,
        "played": 262,
        "ignored": 1119,
        "selectionRate": 0.18971759594496743,
        "wins": 140,
        "losses": 122,
        "draws": 0,
        "winRateWhenPlayed": 0.5343511450381679,
        "averageFlips": 0.12595419847328243,
        "failedImpactRate": 0.8333333333333334,
        "averageFlipMargin": 1.7272727272727273,
        "averageEffectAmount": 1.450381679389313,
        "averageDamageDealt": 0.4618320610687023,
        "averageDamageTaken": 0.15648854961832062,
        "averageNetDamage": 0.30534351145038163,
        "lethalMoves": 3,
        "roundClosers": 50,
        "byModel": [
          {
            "modelId": "regular",
            "played": 115,
            "winRate": 0.5043478260869565
          },
          {
            "modelId": "expert",
            "played": 55,
            "winRate": 0.509090909090909
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.6590909090909091
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.8928571428571429
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 262,
            "winRate": 0.5343511450381679
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
        "offered": 725,
        "played": 242,
        "ignored": 483,
        "selectionRate": 0.33379310344827584,
        "wins": 147,
        "losses": 95,
        "draws": 0,
        "winRateWhenPlayed": 0.6074380165289256,
        "averageFlips": 0.28512396694214875,
        "failedImpactRate": 0.30303030303030304,
        "averageFlipMargin": 3.4347826086956523,
        "averageEffectAmount": 2.9338842975206614,
        "averageDamageDealt": 0.22727272727272727,
        "averageDamageTaken": 0.045454545454545456,
        "averageNetDamage": 0.18181818181818182,
        "lethalMoves": 1,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 56,
            "winRate": 0.48214285714285715
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.9545454545454546
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 242,
            "winRate": 0.6074380165289256
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
        "offered": 1025,
        "played": 240,
        "ignored": 785,
        "selectionRate": 0.23414634146341465,
        "wins": 160,
        "losses": 80,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.125,
        "failedImpactRate": 0.7115384615384616,
        "averageFlipMargin": 2.066666666666667,
        "averageEffectAmount": 1.2541666666666667,
        "averageDamageDealt": 0.5625,
        "averageDamageTaken": 0.05416666666666667,
        "averageNetDamage": 0.5083333333333333,
        "lethalMoves": 5,
        "roundClosers": 33,
        "byModel": [
          {
            "modelId": "regular",
            "played": 114,
            "winRate": 0.8070175438596491
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 0.40540540540540543
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.9285714285714286
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 240,
            "winRate": 0.6666666666666666
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
        "offered": 717,
        "played": 239,
        "ignored": 478,
        "selectionRate": 0.3333333333333333,
        "wins": 151,
        "losses": 88,
        "draws": 0,
        "winRateWhenPlayed": 0.6317991631799164,
        "averageFlips": 0.36401673640167365,
        "failedImpactRate": 0.25,
        "averageFlipMargin": 3.103448275862069,
        "averageEffectAmount": 3.401673640167364,
        "averageDamageDealt": 0.3138075313807531,
        "averageDamageTaken": 0.0041841004184100415,
        "averageNetDamage": 0.30962343096234307,
        "lethalMoves": 2,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 101,
            "winRate": 0.7029702970297029
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "opportunist",
            "played": 47,
            "winRate": 0.7446808510638298
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 1
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 239,
            "winRate": 0.6317991631799164
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
        "offered": 962,
        "played": 228,
        "ignored": 734,
        "selectionRate": 0.23700623700623702,
        "wins": 129,
        "losses": 99,
        "draws": 0,
        "winRateWhenPlayed": 0.5657894736842105,
        "averageFlips": 0.16666666666666666,
        "failedImpactRate": 0.6752136752136753,
        "averageFlipMargin": 2.710526315789474,
        "averageEffectAmount": 2.3771929824561404,
        "averageDamageDealt": 0.5789473684210527,
        "averageDamageTaken": 0.07017543859649122,
        "averageNetDamage": 0.5087719298245614,
        "lethalMoves": 4,
        "roundClosers": 26,
        "byModel": [
          {
            "modelId": "regular",
            "played": 110,
            "winRate": 0.6818181818181818
          },
          {
            "modelId": "expert",
            "played": 48,
            "winRate": 0.3125
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.8
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.5238095238095238
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 228,
            "winRate": 0.5657894736842105
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "boost-self"
        ],
        "buildTags": [
          "anchor",
          "boost-self",
          "human"
        ],
        "preferredPositions": [],
        "offered": 663,
        "played": 206,
        "ignored": 457,
        "selectionRate": 0.31070889894419307,
        "wins": 138,
        "losses": 68,
        "draws": 0,
        "winRateWhenPlayed": 0.6699029126213593,
        "averageFlips": 0.4854368932038835,
        "failedImpactRate": 0.21875,
        "averageFlipMargin": 4.04,
        "averageEffectAmount": 2.854368932038835,
        "averageDamageDealt": 0.3737864077669903,
        "averageDamageTaken": 0.024271844660194174,
        "averageNetDamage": 0.34951456310679613,
        "lethalMoves": 5,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 106,
            "winRate": 0.7735849056603774
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.7428571428571429
          },
          {
            "modelId": "expert",
            "played": 33,
            "winRate": 0.3939393939393939
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.7391304347826086
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 206,
            "winRate": 0.6699029126213593
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "boost-self"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "boost-self"
        ],
        "preferredPositions": [],
        "offered": 620,
        "played": 189,
        "ignored": 431,
        "selectionRate": 0.30483870967741933,
        "wins": 124,
        "losses": 65,
        "draws": 0,
        "winRateWhenPlayed": 0.656084656084656,
        "averageFlips": 0.38095238095238093,
        "failedImpactRate": 0.34545454545454546,
        "averageFlipMargin": 3.0972222222222223,
        "averageEffectAmount": 2.804232804232804,
        "averageDamageDealt": 0.3333333333333333,
        "averageDamageTaken": 0.021164021164021163,
        "averageNetDamage": 0.31216931216931215,
        "lethalMoves": 5,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 72,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.38636363636363635
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.7931034482758621
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 189,
            "winRate": 0.656084656084656
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
        "offered": 626,
        "played": 186,
        "ignored": 440,
        "selectionRate": 0.2971246006389776,
        "wins": 121,
        "losses": 65,
        "draws": 0,
        "winRateWhenPlayed": 0.6505376344086021,
        "averageFlips": 0.45161290322580644,
        "failedImpactRate": 0.26956521739130435,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 0.7473118279569892,
        "averageDamageDealt": 0.3602150537634409,
        "averageDamageTaken": 0.06451612903225806,
        "averageNetDamage": 0.2956989247311828,
        "lethalMoves": 4,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.7125
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.4634146341463415
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.8125
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.9047619047619048
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 186,
            "winRate": 0.6505376344086021
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
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 691,
        "played": 185,
        "ignored": 506,
        "selectionRate": 0.26772793053545585,
        "wins": 129,
        "losses": 56,
        "draws": 0,
        "winRateWhenPlayed": 0.6972972972972973,
        "averageFlips": 0.31351351351351353,
        "failedImpactRate": 0.3626373626373626,
        "averageFlipMargin": 3.603448275862069,
        "averageEffectAmount": 1.2216216216216216,
        "averageDamageDealt": 0.2972972972972973,
        "averageDamageTaken": 0.02702702702702703,
        "averageNetDamage": 0.2702702702702703,
        "lethalMoves": 1,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 96,
            "winRate": 0.875
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.6785714285714286
          },
          {
            "modelId": "expert",
            "played": 24,
            "winRate": 0.4166666666666667
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.8421052631578947
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 185,
            "winRate": 0.6972972972972973
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
        "offered": 960,
        "played": 181,
        "ignored": 779,
        "selectionRate": 0.18854166666666666,
        "wins": 125,
        "losses": 56,
        "draws": 0,
        "winRateWhenPlayed": 0.6906077348066298,
        "averageFlips": 0.16022099447513813,
        "failedImpactRate": 0.7433628318584071,
        "averageFlipMargin": 2.5517241379310347,
        "averageEffectAmount": 2.4640883977900554,
        "averageDamageDealt": 0.7182320441988951,
        "averageDamageTaken": 0.3701657458563536,
        "averageNetDamage": 0.3480662983425415,
        "lethalMoves": 6,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.8375
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.4634146341463415
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 181,
            "winRate": 0.6906077348066298
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
        "sideTotal": 11,
        "maxSide": 4,
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
        "offered": 808,
        "played": 165,
        "ignored": 643,
        "selectionRate": 0.2042079207920792,
        "wins": 114,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.6909090909090909,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.34523809523809523,
        "averageFlipMargin": 4.054545454545455,
        "averageEffectAmount": 1.3393939393939394,
        "averageDamageDealt": 0.34545454545454546,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.34545454545454546,
        "lethalMoves": 2,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 86,
            "winRate": 0.8255813953488372
          },
          {
            "modelId": "expert",
            "played": 29,
            "winRate": 0.3448275862068966
          },
          {
            "modelId": "opportunist",
            "played": 25,
            "winRate": 0.8
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 165,
            "winRate": 0.6909090909090909
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
        "offered": 648,
        "played": 156,
        "ignored": 492,
        "selectionRate": 0.24074074074074073,
        "wins": 96,
        "losses": 60,
        "draws": 0,
        "winRateWhenPlayed": 0.6153846153846154,
        "averageFlips": 0.44871794871794873,
        "failedImpactRate": 0.3137254901960784,
        "averageFlipMargin": 2.742857142857143,
        "averageEffectAmount": 1.1217948717948718,
        "averageDamageDealt": 0.1858974358974359,
        "averageDamageTaken": 0.057692307692307696,
        "averageNetDamage": 0.1282051282051282,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 71,
            "winRate": 0.6056338028169014
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 0.5405405405405406
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.9523809523809523
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.7647058823529411
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 156,
            "winRate": 0.6153846153846154
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [],
        "offered": 541,
        "played": 147,
        "ignored": 394,
        "selectionRate": 0.27171903881700554,
        "wins": 112,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.7619047619047619,
        "averageFlips": 0.35374149659863946,
        "failedImpactRate": 0.2571428571428571,
        "averageFlipMargin": 3.8076923076923075,
        "averageEffectAmount": 2.748299319727891,
        "averageDamageDealt": 0.09523809523809523,
        "averageDamageTaken": 0.07482993197278912,
        "averageNetDamage": 0.020408163265306117,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 63,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "expert",
            "played": 31,
            "winRate": 0.6129032258064516
          },
          {
            "modelId": "opportunist",
            "played": 22,
            "winRate": 0.9090909090909091
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.8636363636363636
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 147,
            "winRate": 0.7619047619047619
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
        "offered": 639,
        "played": 117,
        "ignored": 522,
        "selectionRate": 0.18309859154929578,
        "wins": 60,
        "losses": 57,
        "draws": 0,
        "winRateWhenPlayed": 0.5128205128205128,
        "averageFlips": 0.5299145299145299,
        "failedImpactRate": 0.5474452554744526,
        "averageFlipMargin": 2.806451612903226,
        "averageEffectAmount": 1.2478632478632479,
        "averageDamageDealt": 1.7094017094017093,
        "averageDamageTaken": 0.7350427350427351,
        "averageNetDamage": 0.9743589743589742,
        "lethalMoves": 7,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 51,
            "winRate": 0.43137254901960786
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.6785714285714286
          },
          {
            "modelId": "expert",
            "played": 17,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.8333333333333334
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 117,
            "winRate": 0.5128205128205128
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "hornling",
        "name": "Cornu farceur",
        "family": "demon",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 11,
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
        "offered": 348,
        "played": 94,
        "ignored": 254,
        "selectionRate": 0.27011494252873564,
        "wins": 63,
        "losses": 31,
        "draws": 0,
        "winRateWhenPlayed": 0.6702127659574468,
        "averageFlips": 0.5106382978723404,
        "failedImpactRate": 0.323943661971831,
        "averageFlipMargin": 3.2708333333333335,
        "averageEffectAmount": 1.2553191489361701,
        "averageDamageDealt": 1.053191489361702,
        "averageDamageTaken": 0.07446808510638298,
        "averageNetDamage": 0.978723404255319,
        "lethalMoves": 4,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 50,
            "winRate": 0.68
          },
          {
            "modelId": "opportunist",
            "played": 18,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.875
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 94,
            "winRate": 0.6702127659574468
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
        "offered": 348,
        "played": 89,
        "ignored": 259,
        "selectionRate": 0.2557471264367816,
        "wins": 47,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.5280898876404494,
        "averageFlips": 0.5056179775280899,
        "failedImpactRate": 0.2857142857142857,
        "averageFlipMargin": 2.7111111111111112,
        "averageEffectAmount": 1.4719101123595506,
        "averageDamageDealt": 0.9662921348314607,
        "averageDamageTaken": 0.15730337078651685,
        "averageNetDamage": 0.8089887640449438,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 38,
            "winRate": 0.5263157894736842
          },
          {
            "modelId": "expert",
            "played": 20,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 89,
            "winRate": 0.5280898876404494
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
        "id": "revenant",
        "label": "revenant",
        "offered": 4562,
        "played": 875,
        "ignored": 3687,
        "selectionRate": 0.19180184129767647,
        "wins": 483,
        "losses": 392,
        "draws": 0,
        "winRateWhenPlayed": 0.552,
        "averageFlips": 0.26971428571428574,
        "averageDamageDealt": 0.3702857142857143,
        "averageNetDamage": 0.28114285714285714,
        "topCards": [
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 262,
            "winRateWhenPlayed": 0.5343511450381679
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 242,
            "winRateWhenPlayed": 0.6074380165289256
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 239,
            "winRateWhenPlayed": 0.6317991631799164
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 132,
            "winRateWhenPlayed": 0.3409090909090909
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
        "offered": 4469,
        "played": 801,
        "ignored": 3668,
        "selectionRate": 0.1792347281270978,
        "wins": 422,
        "losses": 379,
        "draws": 0,
        "winRateWhenPlayed": 0.5268414481897628,
        "averageFlips": 0.27965043695380776,
        "averageDamageDealt": 0.5393258426966292,
        "averageNetDamage": 0.40074906367041196,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 228,
            "winRateWhenPlayed": 0.5657894736842105
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 207,
            "winRateWhenPlayed": 0.42028985507246375
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 206,
            "winRateWhenPlayed": 0.6699029126213593
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 160,
            "winRateWhenPlayed": 0.425
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "familiar",
        "label": "familiar",
        "offered": 3871,
        "played": 780,
        "ignored": 3091,
        "selectionRate": 0.20149832084732627,
        "wins": 508,
        "losses": 272,
        "draws": 0,
        "winRateWhenPlayed": 0.6512820512820513,
        "averageFlips": 0.28717948717948716,
        "averageDamageDealt": 0.4935897435897436,
        "averageNetDamage": 0.45256410256410257,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 240,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 190,
            "winRateWhenPlayed": 0.5526315789473685
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 185,
            "winRateWhenPlayed": 0.6972972972972973
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 165,
            "winRateWhenPlayed": 0.6909090909090909
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
        "offered": 3608,
        "played": 673,
        "ignored": 2935,
        "selectionRate": 0.186529933481153,
        "wins": 383,
        "losses": 290,
        "draws": 0,
        "winRateWhenPlayed": 0.5690936106983655,
        "averageFlips": 0.37444279346210996,
        "averageDamageDealt": 0.537890044576523,
        "averageNetDamage": 0.2511144130757801,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 204,
            "winRateWhenPlayed": 0.5441176470588235
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 186,
            "winRateWhenPlayed": 0.6505376344086021
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 156,
            "winRateWhenPlayed": 0.6153846153846154
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 127,
            "winRateWhenPlayed": 0.4330708661417323
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "automaton",
        "label": "automaton",
        "offered": 3508,
        "played": 596,
        "ignored": 2912,
        "selectionRate": 0.16989737742303307,
        "wins": 396,
        "losses": 200,
        "draws": 0,
        "winRateWhenPlayed": 0.6644295302013423,
        "averageFlips": 0.28691275167785235,
        "averageDamageDealt": 0.3859060402684564,
        "averageNetDamage": 0.11241610738255031,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 189,
            "winRateWhenPlayed": 0.656084656084656
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 181,
            "winRateWhenPlayed": 0.6906077348066298
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 147,
            "winRateWhenPlayed": 0.7619047619047619
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 79,
            "winRateWhenPlayed": 0.4430379746835443
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "demon",
        "label": "demon",
        "offered": 1989,
        "played": 399,
        "ignored": 1590,
        "selectionRate": 0.20060331825037708,
        "wins": 227,
        "losses": 172,
        "draws": 0,
        "winRateWhenPlayed": 0.568922305764411,
        "averageFlips": 0.5463659147869674,
        "averageDamageDealt": 1.4035087719298245,
        "averageNetDamage": 1.0526315789473684,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 117,
            "winRateWhenPlayed": 0.5128205128205128
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 99,
            "winRateWhenPlayed": 0.5757575757575758
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 94,
            "winRateWhenPlayed": 0.6702127659574468
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 89,
            "winRateWhenPlayed": 0.5280898876404494
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
        "id": "payoff",
        "label": "payoff",
        "offered": 6850,
        "played": 1084,
        "ignored": 5766,
        "selectionRate": 0.15824817518248174,
        "wins": 572,
        "losses": 512,
        "draws": 0,
        "winRateWhenPlayed": 0.5276752767527675,
        "averageFlips": 0.27490774907749077,
        "averageDamageDealt": 0.6688191881918819,
        "averageNetDamage": 0.3865313653136531,
        "topCards": [
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 262,
            "winRateWhenPlayed": 0.5343511450381679
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 207,
            "winRateWhenPlayed": 0.42028985507246375
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 190,
            "winRateWhenPlayed": 0.5526315789473685
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 181,
            "winRateWhenPlayed": 0.6906077348066298
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 127,
            "winRateWhenPlayed": 0.4330708661417323
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "connector",
        "label": "connector",
        "offered": 3893,
        "played": 1077,
        "ignored": 2816,
        "selectionRate": 0.2766503981505266,
        "wins": 685,
        "losses": 392,
        "draws": 0,
        "winRateWhenPlayed": 0.6360259981429898,
        "averageFlips": 0.3212627669452182,
        "averageDamageDealt": 0.3797585886722377,
        "averageNetDamage": 0.3156917363045497,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 242,
            "winRateWhenPlayed": 0.6074380165289256
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 228,
            "winRateWhenPlayed": 0.5657894736842105
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 186,
            "winRateWhenPlayed": 0.6505376344086021
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 185,
            "winRateWhenPlayed": 0.6972972972972973
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 147,
            "winRateWhenPlayed": 0.7619047619047619
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
        "offered": 3804,
        "played": 1049,
        "ignored": 2755,
        "selectionRate": 0.27576235541535227,
        "wins": 686,
        "losses": 363,
        "draws": 0,
        "winRateWhenPlayed": 0.6539561487130601,
        "averageFlips": 0.41182078169685415,
        "averageDamageDealt": 0.3813155386081983,
        "averageNetDamage": 0.3565300285986654,
        "topCards": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 239,
            "winRateWhenPlayed": 0.6317991631799164
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 206,
            "winRateWhenPlayed": 0.6699029126213593
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 189,
            "winRateWhenPlayed": 0.656084656084656
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 165,
            "winRateWhenPlayed": 0.6909090909090909
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 156,
            "winRateWhenPlayed": 0.6153846153846154
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "attacker",
        "label": "attacker",
        "offered": 7460,
        "played": 914,
        "ignored": 6546,
        "selectionRate": 0.1225201072386059,
        "wins": 476,
        "losses": 438,
        "draws": 0,
        "winRateWhenPlayed": 0.5207877461706784,
        "averageFlips": 0.2724288840262582,
        "averageDamageDealt": 0.8304157549234136,
        "averageNetDamage": 0.48468271334792123,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 240,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 204,
            "winRateWhenPlayed": 0.5441176470588235
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 160,
            "winRateWhenPlayed": 0.425
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 132,
            "winRateWhenPlayed": 0.3409090909090909
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 99,
            "winRateWhenPlayed": 0.5757575757575758
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 22007,
        "played": 4124,
        "ignored": 17883,
        "selectionRate": 0.18739491979824602,
        "wins": 2419,
        "losses": 1705,
        "draws": 0,
        "winRateWhenPlayed": 0.5865664403491756,
        "averageFlips": 0.32129000969932103,
        "averageDamageDealt": 0.5560135790494666,
        "averageNetDamage": 0.38215324927255095,
        "topCards": [
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 262,
            "winRateWhenPlayed": 0.5343511450381679
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 242,
            "winRateWhenPlayed": 0.6074380165289256
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 240,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 239,
            "winRateWhenPlayed": 0.6317991631799164
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 228,
            "winRateWhenPlayed": 0.5657894736842105
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
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 518,
        "wins": 280,
        "losses": 238,
        "draws": 0,
        "winRate": 0.5405405405405406,
        "averageFlips": 0.3281853281853282,
        "averageDamageDealt": 0.4671814671814672,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 511,
        "wins": 255,
        "losses": 256,
        "draws": 0,
        "winRate": 0.49902152641878667,
        "averageFlips": 0.3268101761252446,
        "averageDamageDealt": 0.6653620352250489,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 505,
        "wins": 335,
        "losses": 170,
        "draws": 0,
        "winRate": 0.6633663366336634,
        "averageFlips": 0.33861386138613864,
        "averageDamageDealt": 0.6099009900990099,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 434,
        "wins": 361,
        "losses": 73,
        "draws": 0,
        "winRate": 0.8317972350230415,
        "averageFlips": 0.24423963133640553,
        "averageDamageDealt": 1.8087557603686637,
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
        "count": 416,
        "wins": 311,
        "losses": 105,
        "draws": 0,
        "winRate": 0.7475961538461539,
        "averageFlips": 0.2548076923076923,
        "averageDamageDealt": 1.5120192307692308,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 416,
        "wins": 237,
        "losses": 179,
        "draws": 0,
        "winRate": 0.5697115384615384,
        "averageFlips": 0.45913461538461536,
        "averageDamageDealt": 0.7067307692307693,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 398,
        "wins": 281,
        "losses": 117,
        "draws": 0,
        "winRate": 0.7060301507537688,
        "averageFlips": 0.25879396984924624,
        "averageDamageDealt": 1.9974874371859297,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 373,
        "wins": 247,
        "losses": 126,
        "draws": 0,
        "winRate": 0.6621983914209115,
        "averageFlips": 0.30831099195710454,
        "averageDamageDealt": 0.5120643431635389,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 317,
        "wins": 221,
        "losses": 96,
        "draws": 0,
        "winRate": 0.6971608832807571,
        "averageFlips": 0.35646687697160884,
        "averageDamageDealt": 1.6971608832807572,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 288,
        "wins": 230,
        "losses": 58,
        "draws": 0,
        "winRate": 0.7986111111111112,
        "averageFlips": 0.2152777777777778,
        "averageDamageDealt": 1.6180555555555556,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 262,
        "wins": 140,
        "losses": 122,
        "draws": 0,
        "winRate": 0.5343511450381679,
        "averageFlips": 0.12595419847328243,
        "averageDamageDealt": 0.4618320610687023,
        "averageEffectAmount": 1.0190839694656488,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 251,
        "wins": 142,
        "losses": 109,
        "draws": 0,
        "winRate": 0.5657370517928287,
        "averageFlips": 0.6135458167330677,
        "averageDamageDealt": 1.701195219123506,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 228,
        "wins": 129,
        "losses": 99,
        "draws": 0,
        "winRate": 0.5657894736842105,
        "averageFlips": 0.16666666666666666,
        "averageDamageDealt": 0.5789473684210527,
        "averageEffectAmount": 2.026315789473684,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 206,
        "wins": 138,
        "losses": 68,
        "draws": 0,
        "winRate": 0.6699029126213593,
        "averageFlips": 0.4854368932038835,
        "averageDamageDealt": 0.3737864077669903,
        "averageEffectAmount": 1.3300970873786409,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 201,
        "wins": 81,
        "losses": 120,
        "draws": 0,
        "winRate": 0.40298507462686567,
        "averageFlips": 0.22885572139303484,
        "averageDamageDealt": 0.3283582089552239,
        "averageEffectAmount": 1.328358208955224,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 189,
        "wins": 124,
        "losses": 65,
        "draws": 0,
        "winRate": 0.656084656084656,
        "averageFlips": 0.38095238095238093,
        "averageDamageDealt": 0.3333333333333333,
        "averageEffectAmount": 1.433862433862434,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 185,
        "wins": 92,
        "losses": 93,
        "draws": 0,
        "winRate": 0.4972972972972973,
        "averageFlips": 0.2810810810810811,
        "averageDamageDealt": 0.07567567567567568,
        "averageEffectAmount": 2.2378378378378376,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 184,
        "wins": 98,
        "losses": 86,
        "draws": 0,
        "winRate": 0.532608695652174,
        "averageFlips": 0.375,
        "averageDamageDealt": 0.08152173913043478,
        "averageEffectAmount": 2.717391304347826,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:draw-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> draw-next-turn",
        "count": 181,
        "wins": 125,
        "losses": 56,
        "draws": 0,
        "winRate": 0.6906077348066298,
        "averageFlips": 0.16022099447513813,
        "averageDamageDealt": 0.7182320441988951,
        "averageEffectAmount": 2.1878453038674035,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 160,
        "wins": 68,
        "losses": 92,
        "draws": 0,
        "winRate": 0.425,
        "averageFlips": 0.25,
        "averageDamageDealt": 0.825,
        "averageEffectAmount": 1.11875,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 150,
        "wins": 102,
        "losses": 48,
        "draws": 0,
        "winRate": 0.68,
        "averageFlips": 0.07333333333333333,
        "averageDamageDealt": 0.04,
        "averageEffectAmount": 1.9266666666666667,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:draw-next-turn",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> draw-next-turn",
        "count": 148,
        "wins": 103,
        "losses": 45,
        "draws": 0,
        "winRate": 0.6959459459459459,
        "averageFlips": 0.3581081081081081,
        "averageDamageDealt": 0.32432432432432434,
        "averageEffectAmount": 1.722972972972973,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 147,
        "wins": 112,
        "losses": 35,
        "draws": 0,
        "winRate": 0.7619047619047619,
        "averageFlips": 0.35374149659863946,
        "averageDamageDealt": 0.09523809523809523,
        "averageEffectAmount": 2.1904761904761907,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 133,
        "wins": 79,
        "losses": 54,
        "draws": 0,
        "winRate": 0.5939849624060151,
        "averageFlips": 0.556390977443609,
        "averageDamageDealt": 2.6842105263157894,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1739,
        "id": "card-widow-knight-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chevalier veuf est ignoree par les bots",
        "detail": "1739 offres, 8% selection, 34% win quand jouee, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1504,
        "id": "card-path-ranger-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Rodeuse du sentier est ignoree par les bots",
        "detail": "1504 offres, 11% selection, 43% win quand jouee, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1387,
        "id": "card-brass-rook-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Tour de laiton est ignoree par les bots",
        "detail": "1387 offres, 6% selection, 44% win quand jouee, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1340,
        "id": "card-field-knight-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chevaliere des champs est ignoree par les bots",
        "detail": "1340 offres, 15% selection, 42% win quand jouee, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1183,
        "id": "card-star-witch-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Sorciere d'etoiles est ignoree par les bots",
        "detail": "1183 offres, 11% selection, 43% win quand jouee, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1347,
        "id": "card-foxfire-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "1347 offres, 14% selection, 55% win quand jouee, role payoff.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1151,
        "id": "card-moon-scribe-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Scribe lunaire est ignoree par les bots",
        "detail": "1151 offres, 18% selection, 54% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 654,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "654 offres, 15% selection, 58% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 7460,
        "id": "role-attacker-buff",
        "severity": "watch",
        "action": "verify",
        "title": "attacker manque d'attraction",
        "detail": "7460 offres, 12% selection, 52% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 6850,
        "id": "role-payoff-buff",
        "severity": "watch",
        "action": "verify",
        "title": "payoff manque d'attraction",
        "detail": "6850 offres, 16% selection, 53% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 4469,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "4469 offres, 18% selection, 53% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 3508,
        "id": "family-automaton-buff",
        "severity": "watch",
        "action": "verify",
        "title": "automaton manque d'attraction",
        "detail": "3508 offres, 17% selection, 66% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 434,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "434 occurrences, 83% win, 0.24 flips, 1.81 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 416,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "416 occurrences, 75% win, 0.25 flips, 1.51 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 398,
        "title": "human allie + human ressort comme combo",
        "detail": "398 occurrences, 71% win, 0.26 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 288,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "288 occurrences, 80% win, 0.22 flips, 1.62 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gear-monk:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 147,
        "title": "Moine engrene -> draw-next-turn ressort comme combo",
        "detail": "147 occurrences, 76% win, 0.35 flips, 0.10 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 133,
        "title": "demon allie + demon ressort comme combo",
        "detail": "133 occurrences, 59% win, 0.56 flips, 2.68 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-problem",
      "severity": "problem",
      "title": "Depart actuel - famille 12 cartes sort de la zone saine",
      "detail": "Ouverture stable sur ce depart. Tours morts frequents (12%). Peu de flips par tour (0.20).",
      "recommendation": "Tester ce depart avec plus de matchs, puis ajuster familles, pioche ou valeurs faibles."
    },
    {
      "id": "diagnostic-card-widow-knight-ignored",
      "severity": "problem",
      "title": "Chevalier veuf est ignoree par les bots",
      "detail": "1739 offres, 8% selection, 34% win quand jouee, role attacker. Confiance high, echantillon 1739.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-path-ranger-ignored",
      "severity": "problem",
      "title": "Rodeuse du sentier est ignoree par les bots",
      "detail": "1504 offres, 11% selection, 43% win quand jouee, role attacker. Confiance high, echantillon 1504.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-brass-rook-ignored",
      "severity": "problem",
      "title": "Tour de laiton est ignoree par les bots",
      "detail": "1387 offres, 6% selection, 44% win quand jouee, role attacker. Confiance high, echantillon 1387.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-field-knight-ignored",
      "severity": "problem",
      "title": "Chevaliere des champs est ignoree par les bots",
      "detail": "1340 offres, 15% selection, 42% win quand jouee, role payoff. Confiance high, echantillon 1340.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 0.0% des runs complets, avec 75.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 37.5% des runs complets, avec 90.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ]
};
