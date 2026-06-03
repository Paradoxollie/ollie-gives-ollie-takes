import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260603-110942",
  "generatedAt": "2026-06-03T11:09:42.273Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 4,
    "seed": 20260606,
    "rulesetVersion": "v7-2026-06-03-arcane-core-payoff",
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
      "searchDepth": 1,
      "beamWidth": 8,
      "description": "Modele de joueur moyen qui valorise les coins, le controle et les fins de round."
    },
    {
      "id": "expert",
      "label": "Expert",
      "skillLabel": "Anticipe les reponses",
      "rank": 4,
      "botId": "heuristic",
      "searchDepth": 3,
      "beamWidth": 12,
      "description": "Modele de joueur solide qui cherche plus loin, prend les flips utiles et evite les contres evidents."
    },
    {
      "id": "champion",
      "label": "Champion",
      "skillLabel": "Modele live valide",
      "rank": 5,
      "botId": "champion",
      "searchDepth": 3,
      "beamWidth": 12,
      "description": "Modele live qui reste sur l'expert tant qu'un profil entraine n'a pas prouve un net progres."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 24,
      "wins": 0,
      "losses": 24,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -20.5
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 32,
      "losses": 16,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 6.791666666666667
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 21,
      "losses": 27,
      "draws": 0,
      "winRate": 0.4375,
      "averageHpEdge": -2.1666666666666665
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 31,
      "losses": 17,
      "draws": 0,
      "winRate": 0.6458333333333334,
      "averageHpEdge": 5.625
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 12,
      "losses": 12,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 0
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "mirrorModelId": "regular",
      "totalGames": 24,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5833333333333334,
      "averages": {
        "turns": 30.583333333333332,
        "rounds": 3.3333333333333335,
        "flipsPerMatch": 5.5,
        "flipsPerTurn": 0.17983651226158037,
        "reshuffles": 4.666666666666667,
        "deadTurns": 0.5833333333333334,
        "finalHpDifference": 12.333333333333334
      },
      "deadTurnFrequency": 0.01907356948228883,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (58%).",
        "Peu de flips par tour (0.18)."
      ]
    }
  ],
  "starterFamilyMatchups": [
    {
      "id": "arcane-vs-familiar",
      "leftFamily": "arcane",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "arcane-vs-revenant",
      "leftFamily": "arcane",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "automaton-vs-human",
      "leftFamily": "automaton",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "automaton-vs-revenant",
      "leftFamily": "automaton",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "demon-vs-familiar",
      "leftFamily": "demon",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
    },
    {
      "id": "demon-vs-human",
      "leftFamily": "demon",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
    },
    {
      "id": "demon-vs-revenant",
      "leftFamily": "demon",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "arcane-vs-demon",
      "leftFamily": "arcane",
      "rightFamily": "demon",
      "games": 8,
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
    },
    {
      "id": "arcane-vs-human",
      "leftFamily": "arcane",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "automaton-vs-familiar",
      "leftFamily": "automaton",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "familiar-vs-revenant",
      "leftFamily": "familiar",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "human-vs-revenant",
      "leftFamily": "human",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
    },
    {
      "id": "arcane-vs-automaton",
      "leftFamily": "arcane",
      "rightFamily": "automaton",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
    },
    {
      "id": "automaton-vs-demon",
      "leftFamily": "automaton",
      "rightFamily": "demon",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
    },
    {
      "id": "familiar-vs-human",
      "leftFamily": "familiar",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
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
      "totalGames": 24,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "enemy": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 24,
          "wins": 0,
          "losses": 24,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.5
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 24,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.5
        }
      ],
      "averages": {
        "turns": 18.625,
        "rounds": 2.125,
        "flipsPerMatch": 8.041666666666666,
        "flipsPerTurn": 0.4317673378076063,
        "reshuffles": 2.25,
        "deadTurns": 0.5833333333333334,
        "finalHpDifference": 20.5
      },
      "deadTurnFrequency": 0.03131991051454139
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 24,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "enemy": {
          "games": 12,
          "wins": 8,
          "winRate": 0.6666666666666666
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 8,
          "losses": 16,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -6.916666666666667
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 16,
          "losses": 8,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 6.916666666666667
        }
      ],
      "averages": {
        "turns": 30,
        "rounds": 3.25,
        "flipsPerMatch": 7.875,
        "flipsPerTurn": 0.2625,
        "reshuffles": 4.5,
        "deadTurns": 1.9166666666666667,
        "finalHpDifference": 13.583333333333334
      },
      "deadTurnFrequency": 0.06388888888888888
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 24,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "enemy": {
          "games": 12,
          "wins": 4,
          "winRate": 0.3333333333333333
        },
        "overallStartingPlayerWinRate": 0.4583333333333333
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 24,
          "wins": 5,
          "losses": 19,
          "draws": 0,
          "winRate": 0.20833333333333334,
          "averageHpEdge": -11.25
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 11.25
        }
      ],
      "averages": {
        "turns": 28.25,
        "rounds": 3.0416666666666665,
        "flipsPerMatch": 7.166666666666667,
        "flipsPerTurn": 0.2536873156342183,
        "reshuffles": 4.083333333333333,
        "deadTurns": 1.0833333333333333,
        "finalHpDifference": 13.5
      },
      "deadTurnFrequency": 0.038348082595870206
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 24,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 12,
          "wins": 8,
          "winRate": 0.6666666666666666
        },
        "enemy": {
          "games": 12,
          "wins": 2,
          "winRate": 0.16666666666666666
        },
        "overallStartingPlayerWinRate": 0.4166666666666667
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0
        },
        {
          "modelId": "champion",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0
        }
      ],
      "averages": {
        "turns": 31.75,
        "rounds": 3.5,
        "flipsPerMatch": 6.75,
        "flipsPerTurn": 0.2125984251968504,
        "reshuffles": 5,
        "deadTurns": 0.25,
        "finalHpDifference": 12.416666666666666
      },
      "deadTurnFrequency": 0.007874015748031496
    }
  ],
  "adventureSummaries": [
    {
      "modelId": "beginner",
      "runs": 4,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2.25,
      "averageFinalDeckSize": 13.25,
      "averageDeckDelta": 1.25,
      "averageCombatWinRate": 0.42857142857142855,
      "averageCombatTurns": 25.142857142857142,
      "averageCombatFlips": 6.571428571428571,
      "averageDeadTurns": 4,
      "averageReshuffles": 2.857142857142857,
      "averageRewardsClaimed": 1.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.25,
        "demon": 0.25,
        "human": 0.25,
        "automaton": 0.25
      },
      "nodeMix": {
        "combat": 0.7777777777777778,
        "elite": 0,
        "shop": 0,
        "chest": 0.2222222222222222,
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
      "runs": 4,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 4.75,
      "averageFinalDeckSize": 14.25,
      "averageDeckDelta": 2.25,
      "averageCombatWinRate": 0.6363636363636364,
      "averageCombatTurns": 15.727272727272727,
      "averageCombatFlips": 8,
      "averageDeadTurns": 1.6363636363636365,
      "averageReshuffles": 2.1818181818181817,
      "averageRewardsClaimed": 3,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.5,
      "averageFusions": 0.25,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.5789473684210527,
        "elite": 0,
        "shop": 0.05263157894736842,
        "chest": 0.2631578947368421,
        "rest": 0.10526315789473684,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 4,
      "victories": 2,
      "bossReached": 4,
      "victoryRate": 0.5,
      "bossReachRate": 1,
      "averageLocationsCleared": 8,
      "averageFinalDeckSize": 14,
      "averageDeckDelta": 2,
      "averageCombatWinRate": 0.9,
      "averageCombatTurns": 20.7,
      "averageCombatFlips": 5.45,
      "averageDeadTurns": 2.25,
      "averageReshuffles": 2.35,
      "averageRewardsClaimed": 5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 2,
      "averageFusions": 1,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4444444444444444,
        "elite": 0,
        "shop": 0.1111111111111111,
        "chest": 0.1111111111111111,
        "rest": 0.2222222222222222,
        "boss": 0.1111111111111111
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 4,
      "victories": 3,
      "bossReached": 3,
      "victoryRate": 0.75,
      "bossReachRate": 0.75,
      "averageLocationsCleared": 7.25,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.9375,
      "averageCombatTurns": 27.875,
      "averageCombatFlips": 6.5625,
      "averageDeadTurns": 3.0625,
      "averageReshuffles": 3.5625,
      "averageRewardsClaimed": 4,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 2,
      "averageFusions": 1,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.40625,
        "elite": 0,
        "shop": 0.125,
        "chest": 0.125,
        "rest": 0.25,
        "boss": 0.09375
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 4,
      "victories": 1,
      "bossReached": 2,
      "victoryRate": 0.25,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 5.75,
      "averageFinalDeckSize": 13.75,
      "averageDeckDelta": 1.75,
      "averageCombatWinRate": 0.7692307692307693,
      "averageCombatTurns": 33.46153846153846,
      "averageCombatFlips": 6.923076923076923,
      "averageDeadTurns": 4.769230769230769,
      "averageReshuffles": 6.846153846153846,
      "averageRewardsClaimed": 3.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1,
      "averageFusions": 0.75,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4,
        "elite": 0.04,
        "shop": 0.12,
        "chest": 0.2,
        "rest": 0.16,
        "boss": 0.08
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    }
  ],
  "adventureRuns": [
    {
      "runIndex": 0,
      "modelId": "beginner",
      "seed": 3446663704,
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
      "totalCombatTurns": 30,
      "totalCombatFlips": 6,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 30,
          "combatFlips": 6,
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
      "seed": 3463441323,
      "selectedFamily": "familiar",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 52,
      "totalCombatFlips": 14,
      "totalDeadTurns": 7,
      "totalReshuffles": 6,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 4,
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
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 14,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 1,
        "rare": 0
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 33,
          "combatFlips": 8,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Cache de spores",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "title": "Cache de spores",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 6,
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
      "seed": 3480218942,
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
      "totalCombatTurns": 15,
      "totalCombatFlips": 6,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 15,
          "combatFlips": 6,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 3496996561,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 79,
      "totalCombatFlips": 20,
      "totalDeadTurns": 16,
      "totalReshuffles": 8,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
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
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 13,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 6,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatTurns": 26,
          "combatFlips": 6,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 8,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 3481412963,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 29,
      "totalCombatFlips": 16,
      "totalDeadTurns": 2,
      "totalReshuffles": 2,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 4,
      "stealRewardsClaimed": 1,
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
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 1,
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
          "combatTurns": 11,
          "combatFlips": 3,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "title": "Clairiere des songes",
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 3464635344,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 61,
      "totalCombatFlips": 29,
      "totalDeadTurns": 8,
      "totalReshuffles": 13,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
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
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 1,
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
          "combatTurns": 25,
          "combatFlips": 5,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "combatFlips": 14,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 10,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 3514968201,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 37,
      "totalCombatFlips": 24,
      "totalDeadTurns": 1,
      "totalReshuffles": 4,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
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
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 14,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 1,
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
          "combatTurns": 10,
          "combatFlips": 5,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Cache de spores",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 7,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 12,
          "enemyProfileId": "builder",
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
      "modelId": "opportunist",
      "seed": 3498190582,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 46,
      "totalCombatFlips": 19,
      "totalDeadTurns": 7,
      "totalReshuffles": 5,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 1,
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
          "combatTurns": 24,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "combatTurns": 9,
          "combatFlips": 8,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "kind": "shop",
          "title": "Echoppe de brindilles",
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 13,
          "combatFlips": 6,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 712580638,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 103,
      "totalCombatFlips": 17,
      "totalDeadTurns": 4,
      "totalReshuffles": 12,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 1,
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
          "combatTurns": 11,
          "combatFlips": 4,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 2,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 7,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 2,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 2,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 729358257,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 7,
      "combatLosses": 0,
      "totalCombatTurns": 134,
      "totalCombatFlips": 46,
      "totalDeadTurns": 17,
      "totalReshuffles": 17,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 1
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 6,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
        "arcane": 13,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 0,
        "rare": 1
      },
      "path": [
        {
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 3,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatTurns": 27,
          "combatFlips": 6,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "combatTurns": 20,
          "combatFlips": 2,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "shop",
          "title": "Bazaar des souches",
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
      "modelId": "regular",
      "seed": 679025400,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 133,
      "totalCombatFlips": 30,
      "totalDeadTurns": 16,
      "totalReshuffles": 14,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 0,
        "shop": 2,
        "chest": 0,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 1,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatFlips": 4,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatFlips": 8,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 5,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "kind": "shop",
          "title": "Echoppe de brindilles",
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 9,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 3,
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
      "runIndex": 3,
      "modelId": "regular",
      "seed": 695803019,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 2,
      "combatLosses": 0,
      "totalCombatTurns": 44,
      "totalCombatFlips": 16,
      "totalDeadTurns": 8,
      "totalReshuffles": 4,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 4,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 1,
        "chest": 3,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 9,
        "uncommon": 2,
        "rare": 1
      },
      "path": [
        {
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
          "combatFlips": 3,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "shop",
          "title": "Bazaar des souches",
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 2483095490,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 138,
      "totalCombatFlips": 31,
      "totalDeadTurns": 9,
      "totalReshuffles": 20,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 2,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 12,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 1,
        "rare": 1
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
          "combatTurns": 22,
          "combatFlips": 6,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "combatTurns": 36,
          "combatFlips": 8,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 28,
          "combatFlips": 7,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 4,
          "enemyProfileId": "builder",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 0,
          "charmClaimed": null,
          "siteAction": "none"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 30,
          "combatFlips": 6,
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
      "modelId": "expert",
      "seed": 2499873109,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 150,
      "totalCombatFlips": 36,
      "totalDeadTurns": 15,
      "totalReshuffles": 19,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 2,
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
          "combatTurns": 28,
          "combatFlips": 3,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "rewardOffered": 4,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 5,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 13,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 6,
          "enemyProfileId": "fortress",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 9,
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
      "runIndex": 2,
      "modelId": "expert",
      "seed": 2449540252,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 4,
      "combatLosses": 0,
      "totalCombatTurns": 103,
      "totalCombatFlips": 25,
      "totalDeadTurns": 14,
      "totalReshuffles": 12,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 10,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
          "combatFlips": 4,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatTurns": 24,
          "combatFlips": 6,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 5,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
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
      "runIndex": 3,
      "modelId": "expert",
      "seed": 2466317871,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 55,
      "totalCombatFlips": 13,
      "totalDeadTurns": 11,
      "totalReshuffles": 6,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 4,
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
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 11,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 4,
          "enemyProfileId": "builder",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 19,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 1121908973,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 91,
      "totalCombatFlips": 23,
      "totalDeadTurns": 19,
      "totalReshuffles": 10,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 2,
        "chest": 2,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 2,
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
          "combatFlips": 4,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 40,
          "combatFlips": 2,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "rewardOffered": 4,
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
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 17,
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
      "seed": 1105131354,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 176,
      "totalCombatFlips": 32,
      "totalDeadTurns": 18,
      "totalReshuffles": 42,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "spring-tear"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 1,
        "arcane": 14,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
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
          "combatTurns": 37,
          "combatFlips": 2,
          "enemyProfileId": "trickster",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "combatTurns": 21,
          "combatFlips": 3,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 4,
          "enemyProfileId": "aggro",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "rewardOffered": 4,
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
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 46,
          "combatFlips": 7,
          "enemyProfileId": "trickster",
          "enemyBotId": "heuristic",
          "rewardOffered": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 16,
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
      "runIndex": 2,
      "modelId": "champion",
      "seed": 1088353735,
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
      "totalCombatTurns": 76,
      "totalCombatFlips": 20,
      "totalDeadTurns": 5,
      "totalReshuffles": 18,
      "rewardOffersSeen": 1,
      "rewardsClaimed": 1,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 4,
      "stealRewardsClaimed": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 7,
          "enemyProfileId": "fortress",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 54,
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
      "runIndex": 3,
      "modelId": "champion",
      "seed": 1071576116,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 92,
      "totalCombatFlips": 15,
      "totalDeadTurns": 20,
      "totalReshuffles": 19,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "spring-tear"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 13,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 1,
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 41,
          "combatFlips": 2,
          "enemyProfileId": "aggro",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 5,
          "enemyProfileId": "swarm",
          "enemyBotId": "greedy",
          "rewardOffered": 4,
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
          "title": "Feu de canopee",
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
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": null,
          "combatTurns": 0,
          "combatFlips": 0,
          "enemyProfileId": null,
          "enemyBotId": null,
          "rewardOffered": 4,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 29,
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
    }
  ],
  "diagnostics": {
    "baselineWinRate": 0.5,
    "cardAnalytics": [
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
          "deal-damage",
          "gain-shield"
        ],
        "buildTags": [
          "attacker",
          "combo-1",
          "deal-damage",
          "flip-1",
          "gain-shield",
          "hybrid-demon",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 918,
        "played": 327,
        "ignored": 809,
        "selectionRate": 0.3562091503267974,
        "wins": 226,
        "losses": 101,
        "draws": 0,
        "winRateWhenPlayed": 0.691131498470948,
        "averageFlips": 0.290519877675841,
        "failedImpactRate": 0.6689895470383276,
        "averageFlipMargin": 2.0736842105263156,
        "averageEffectAmount": 2.8868501529051986,
        "averageDamageDealt": 1.6605504587155964,
        "averageDamageTaken": 0.37003058103975534,
        "averageNetDamage": 1.290519877675841,
        "lethalMoves": 16,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 133,
            "winRate": 0.6766917293233082
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.7241379310344828
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.7954545454545454
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.9047619047619048
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 327,
            "winRate": 0.691131498470948
          }
        ],
        "status": "overperformer",
        "notes": [
          "Surperforme en victoire et impact immediat face a une base de 50%."
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
          "adjacent-ally",
          "arcane",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 622,
        "played": 422,
        "ignored": 464,
        "selectionRate": 0.6784565916398714,
        "wins": 189,
        "losses": 233,
        "draws": 0,
        "winRateWhenPlayed": 0.44786729857819907,
        "averageFlips": 0.2677725118483412,
        "failedImpactRate": 0.5533596837944664,
        "averageFlipMargin": 1.4955752212389382,
        "averageEffectAmount": 3.1635071090047395,
        "averageDamageDealt": 0.2843601895734597,
        "averageDamageTaken": 0.11137440758293839,
        "averageNetDamage": 0.17298578199052134,
        "lethalMoves": 4,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 189,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.43529411764705883
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.7088607594936709
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.2222222222222222
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 422,
            "winRate": 0.44786729857819907
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
          "combo-1",
          "gain-shield"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 516,
        "played": 412,
        "ignored": 402,
        "selectionRate": 0.7984496124031008,
        "wins": 174,
        "losses": 238,
        "draws": 0,
        "winRateWhenPlayed": 0.4223300970873786,
        "averageFlips": 0.2087378640776699,
        "failedImpactRate": 0.4342105263157895,
        "averageFlipMargin": 1.6395348837209303,
        "averageEffectAmount": 4.364077669902913,
        "averageDamageDealt": 0.12135922330097088,
        "averageDamageTaken": 0.02912621359223301,
        "averageNetDamage": 0.09223300970873786,
        "lethalMoves": 3,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 179,
            "winRate": 0.40782122905027934
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.6470588235294118
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.4457831325301205
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.17647058823529413
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
            "played": 412,
            "winRate": 0.4223300970873786
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
        "sideTotal": 11,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "boost-self",
          "combo-2",
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [],
        "offered": 446,
        "played": 377,
        "ignored": 332,
        "selectionRate": 0.8452914798206278,
        "wins": 191,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.506631299734748,
        "averageFlips": 0.2572944297082228,
        "failedImpactRate": 0.5245098039215687,
        "averageFlipMargin": 2.381443298969072,
        "averageEffectAmount": 4.535809018567639,
        "averageDamageDealt": 0.042440318302387266,
        "averageDamageTaken": 0.05305039787798409,
        "averageNetDamage": -0.010610079575596822,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.5125
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.5813953488372093
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.5432098765432098
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 377,
            "winRate": 0.506631299734748
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
          "combo-2",
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 526,
        "played": 375,
        "ignored": 408,
        "selectionRate": 0.7129277566539924,
        "wins": 189,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.504,
        "averageFlips": 0.24266666666666667,
        "failedImpactRate": 0.5054347826086957,
        "averageFlipMargin": 2.21978021978022,
        "averageEffectAmount": 3.344,
        "averageDamageDealt": 0.10133333333333333,
        "averageDamageTaken": 0.032,
        "averageNetDamage": 0.06933333333333333,
        "lethalMoves": 3,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.49079754601226994
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.5365853658536586
          },
          {
            "modelId": "opportunist",
            "played": 81,
            "winRate": 0.6172839506172839
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.42857142857142855
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
            "played": 375,
            "winRate": 0.504
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
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "combo-3",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 655,
        "played": 375,
        "ignored": 516,
        "selectionRate": 0.5725190839694656,
        "wins": 152,
        "losses": 223,
        "draws": 0,
        "winRateWhenPlayed": 0.4053333333333333,
        "averageFlips": 0.22133333333333333,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1.5903614457831325,
        "averageEffectAmount": 3.8106666666666666,
        "averageDamageDealt": 0.10933333333333334,
        "averageDamageTaken": 0.042666666666666665,
        "averageNetDamage": 0.06666666666666668,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.36129032258064514
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.6835443037974683
          },
          {
            "modelId": "expert",
            "played": 78,
            "winRate": 0.3974358974358974
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.21153846153846154
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
            "played": 375,
            "winRate": 0.4053333333333333
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
          "combo-2",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 566,
        "played": 370,
        "ignored": 462,
        "selectionRate": 0.6537102473498233,
        "wins": 224,
        "losses": 146,
        "draws": 0,
        "winRateWhenPlayed": 0.6054054054054054,
        "averageFlips": 0.36486486486486486,
        "failedImpactRate": 0.45564516129032256,
        "averageFlipMargin": 1.962962962962963,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.11621621621621622,
        "averageDamageTaken": 0.016216216216216217,
        "averageNetDamage": 0.1,
        "lethalMoves": 5,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 154,
            "winRate": 0.5324675324675324
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.8837209302325582
          },
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.4788732394366197
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.7619047619047619
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
            "played": 370,
            "winRate": 0.6054054054054054
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
        "offered": 570,
        "played": 368,
        "ignored": 399,
        "selectionRate": 0.6456140350877193,
        "wins": 251,
        "losses": 117,
        "draws": 0,
        "winRateWhenPlayed": 0.6820652173913043,
        "averageFlips": 0.2554347826086957,
        "failedImpactRate": 0.5627906976744186,
        "averageFlipMargin": 1.8404255319148937,
        "averageEffectAmount": 4.2853260869565215,
        "averageDamageDealt": 0.46467391304347827,
        "averageDamageTaken": 0.005434782608695652,
        "averageNetDamage": 0.4592391304347826,
        "lethalMoves": 6,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 152,
            "winRate": 0.6776315789473685
          },
          {
            "modelId": "expert",
            "played": 102,
            "winRate": 0.696078431372549
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.7872340425531915
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.9090909090909091
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 368,
            "winRate": 0.6820652173913043
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
        "offered": 544,
        "played": 368,
        "ignored": 389,
        "selectionRate": 0.6764705882352942,
        "wins": 248,
        "losses": 120,
        "draws": 0,
        "winRateWhenPlayed": 0.6739130434782609,
        "averageFlips": 0.21195652173913043,
        "failedImpactRate": 0.6608695652173913,
        "averageFlipMargin": 1.8333333333333333,
        "averageEffectAmount": 4.961956521739131,
        "averageDamageDealt": 0.46467391304347827,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.46467391304347827,
        "lethalMoves": 8,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.6709677419354839
          },
          {
            "modelId": "expert",
            "played": 99,
            "winRate": 0.6868686868686869
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.7916666666666666
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.9047619047619048
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 368,
            "winRate": 0.6739130434782609
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "offered": 738,
        "played": 368,
        "ignored": 548,
        "selectionRate": 0.4986449864498645,
        "wins": 189,
        "losses": 179,
        "draws": 0,
        "winRateWhenPlayed": 0.5135869565217391,
        "averageFlips": 0.21467391304347827,
        "failedImpactRate": 0.6901960784313725,
        "averageFlipMargin": 2.0126582278481013,
        "averageEffectAmount": 3.1385869565217392,
        "averageDamageDealt": 0.4076086956521739,
        "averageDamageTaken": 0.19021739130434784,
        "averageNetDamage": 0.21739130434782605,
        "lethalMoves": 6,
        "roundClosers": 23,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.4968944099378882
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.5487804878048781
          },
          {
            "modelId": "opportunist",
            "played": 76,
            "winRate": 0.618421052631579
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.4722222222222222
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 368,
            "winRate": 0.5135869565217391
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "combo-2",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 556,
        "played": 360,
        "ignored": 460,
        "selectionRate": 0.6474820143884892,
        "wins": 225,
        "losses": 135,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.28055555555555556,
        "failedImpactRate": 0.4898989898989899,
        "averageFlipMargin": 2.0297029702970297,
        "averageEffectAmount": 2.4555555555555557,
        "averageDamageDealt": 0.4361111111111111,
        "averageDamageTaken": 0.05277777777777778,
        "averageNetDamage": 0.38333333333333336,
        "lethalMoves": 8,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 166,
            "winRate": 0.5843373493975904
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.868421052631579
          },
          {
            "modelId": "opportunist",
            "played": 64,
            "winRate": 0.546875
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.7297297297297297
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
            "played": 360,
            "winRate": 0.625
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
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-2",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [],
        "offered": 449,
        "played": 360,
        "ignored": 335,
        "selectionRate": 0.8017817371937639,
        "wins": 162,
        "losses": 198,
        "draws": 0,
        "winRateWhenPlayed": 0.45,
        "averageFlips": 0.26666666666666666,
        "failedImpactRate": 0.4146341463414634,
        "averageFlipMargin": 1.7395833333333333,
        "averageEffectAmount": 4.358333333333333,
        "averageDamageDealt": 0.13055555555555556,
        "averageDamageTaken": 0.1111111111111111,
        "averageNetDamage": 0.01944444444444446,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 158,
            "winRate": 0.47468354430379744
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.52
          },
          {
            "modelId": "opportunist",
            "played": 64,
            "winRate": 0.53125
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.3181818181818182
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 360,
            "winRate": 0.45
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "behind-on-board",
          "boost-self",
          "combo-1",
          "draw-next-turn",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 807,
        "played": 353,
        "ignored": 662,
        "selectionRate": 0.43742255266418834,
        "wins": 261,
        "losses": 92,
        "draws": 0,
        "winRateWhenPlayed": 0.7393767705382436,
        "averageFlips": 0.1813031161473088,
        "failedImpactRate": 0.7730496453900709,
        "averageFlipMargin": 2.03125,
        "averageEffectAmount": 4.577903682719547,
        "averageDamageDealt": 0.5580736543909348,
        "averageDamageTaken": 0.28895184135977336,
        "averageNetDamage": 0.26912181303116145,
        "lethalMoves": 9,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 145,
            "winRate": 0.7724137931034483
          },
          {
            "modelId": "expert",
            "played": 102,
            "winRate": 0.7352941176470589
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.8297872340425532
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.8974358974358975
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
            "played": 353,
            "winRate": 0.7393767705382436
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
        "offered": 681,
        "played": 351,
        "ignored": 468,
        "selectionRate": 0.5154185022026432,
        "wins": 209,
        "losses": 142,
        "draws": 0,
        "winRateWhenPlayed": 0.5954415954415955,
        "averageFlips": 0.15954415954415954,
        "failedImpactRate": 0.7383177570093458,
        "averageFlipMargin": 1.8928571428571428,
        "averageEffectAmount": 1.7692307692307692,
        "averageDamageDealt": 0.6467236467236467,
        "averageDamageTaken": 0.19658119658119658,
        "averageNetDamage": 0.45014245014245013,
        "lethalMoves": 8,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.51875
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.8518518518518519
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.7073170731707317
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 351,
            "winRate": 0.5954415954415955
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
          "boost-self",
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "boost-self",
          "corner",
          "gain-shield"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 470,
        "played": 342,
        "ignored": 323,
        "selectionRate": 0.7276595744680852,
        "wins": 155,
        "losses": 187,
        "draws": 0,
        "winRateWhenPlayed": 0.45321637426900585,
        "averageFlips": 0.2046783625730994,
        "failedImpactRate": 0.4573643410852713,
        "averageFlipMargin": 1.5714285714285714,
        "averageEffectAmount": 4.309941520467836,
        "averageDamageDealt": 0.22514619883040934,
        "averageDamageTaken": 0.14912280701754385,
        "averageNetDamage": 0.07602339181286549,
        "lethalMoves": 2,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 148,
            "winRate": 0.47297297297297297
          },
          {
            "modelId": "expert",
            "played": 70,
            "winRate": 0.5285714285714286
          },
          {
            "modelId": "opportunist",
            "played": 64,
            "winRate": 0.515625
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.35714285714285715
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
            "played": 342,
            "winRate": 0.45321637426900585
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "attacker",
          "automaton",
          "boost-self",
          "combo-1"
        ],
        "preferredPositions": [],
        "offered": 921,
        "played": 324,
        "ignored": 744,
        "selectionRate": 0.3517915309446254,
        "wins": 139,
        "losses": 185,
        "draws": 0,
        "winRateWhenPlayed": 0.42901234567901236,
        "averageFlips": 0.20987654320987653,
        "failedImpactRate": 0.7933130699088146,
        "averageFlipMargin": 2.1176470588235294,
        "averageEffectAmount": 3.9074074074074074,
        "averageDamageDealt": 0.9475308641975309,
        "averageDamageTaken": 0.39197530864197533,
        "averageNetDamage": 0.5555555555555556,
        "lethalMoves": 13,
        "roundClosers": 36,
        "byModel": [
          {
            "modelId": "regular",
            "played": 157,
            "winRate": 0.4012738853503185
          },
          {
            "modelId": "expert",
            "played": 65,
            "winRate": 0.5538461538461539
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.358974358974359
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
            "played": 324,
            "winRate": 0.42901234567901236
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
          "combo-2",
          "familiar",
          "flip-1",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 830,
        "played": 316,
        "ignored": 657,
        "selectionRate": 0.38072289156626504,
        "wins": 184,
        "losses": 132,
        "draws": 0,
        "winRateWhenPlayed": 0.5822784810126582,
        "averageFlips": 0.34177215189873417,
        "failedImpactRate": 0.6236933797909407,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.2373417721518987,
        "averageDamageDealt": 0.9525316455696202,
        "averageDamageTaken": 0.23734177215189872,
        "averageNetDamage": 0.7151898734177216,
        "lethalMoves": 14,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 136,
            "winRate": 0.5367647058823529
          },
          {
            "modelId": "expert",
            "played": 72,
            "winRate": 0.8611111111111112
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.4107142857142857
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.7222222222222222
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
            "played": 316,
            "winRate": 0.5822784810126582
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
          "combo-2",
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 997,
        "played": 297,
        "ignored": 841,
        "selectionRate": 0.2978936810431294,
        "wins": 143,
        "losses": 154,
        "draws": 0,
        "winRateWhenPlayed": 0.48148148148148145,
        "averageFlips": 0.15488215488215487,
        "failedImpactRate": 0.8167330677290837,
        "averageFlipMargin": 2.5217391304347827,
        "averageEffectAmount": 1.2255892255892256,
        "averageDamageDealt": 1.101010101010101,
        "averageDamageTaken": 0.6801346801346801,
        "averageNetDamage": 0.42087542087542085,
        "lethalMoves": 10,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 131,
            "winRate": 0.5038167938931297
          },
          {
            "modelId": "expert",
            "played": 60,
            "winRate": 0.5166666666666667
          },
          {
            "modelId": "opportunist",
            "played": 58,
            "winRate": 0.5689655172413793
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.4642857142857143
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
            "played": 297,
            "winRate": 0.48148148148148145
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
          "adjacent-enemy",
          "arcane",
          "attacker",
          "boost-self"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 1218,
        "played": 288,
        "ignored": 996,
        "selectionRate": 0.23645320197044334,
        "wins": 136,
        "losses": 152,
        "draws": 0,
        "winRateWhenPlayed": 0.4722222222222222,
        "averageFlips": 0.21875,
        "failedImpactRate": 0.7885906040268457,
        "averageFlipMargin": 1.9206349206349207,
        "averageEffectAmount": 0.8159722222222222,
        "averageDamageDealt": 1.1875,
        "averageDamageTaken": 0.5173611111111112,
        "averageNetDamage": 0.6701388888888888,
        "lethalMoves": 16,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 140,
            "winRate": 0.4857142857142857
          },
          {
            "modelId": "expert",
            "played": 54,
            "winRate": 0.46296296296296297
          },
          {
            "modelId": "opportunist",
            "played": 48,
            "winRate": 0.7291666666666666
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.23529411764705882
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
            "played": 288,
            "winRate": 0.4722222222222222
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-1",
          "corner",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 749,
        "played": 280,
        "ignored": 659,
        "selectionRate": 0.37383177570093457,
        "wins": 126,
        "losses": 154,
        "draws": 0,
        "winRateWhenPlayed": 0.45,
        "averageFlips": 0.2392857142857143,
        "failedImpactRate": 0.5503355704697986,
        "averageFlipMargin": 1.8955223880597014,
        "averageEffectAmount": 4.560714285714286,
        "averageDamageDealt": 0.6892857142857143,
        "averageDamageTaken": 0.3,
        "averageNetDamage": 0.3892857142857143,
        "lethalMoves": 6,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 116,
            "winRate": 0.43103448275862066
          },
          {
            "modelId": "expert",
            "played": 62,
            "winRate": 0.5645161290322581
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.38235294117647056
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
            "played": 280,
            "winRate": 0.45
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
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "anchor",
          "boost-self",
          "deal-damage",
          "demon",
          "hybrid-revenant"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 304,
        "played": 219,
        "ignored": 235,
        "selectionRate": 0.7203947368421053,
        "wins": 135,
        "losses": 84,
        "draws": 0,
        "winRateWhenPlayed": 0.6164383561643836,
        "averageFlips": 0.7397260273972602,
        "failedImpactRate": 0.15625,
        "averageFlipMargin": 1.8518518518518519,
        "averageEffectAmount": 1.2374429223744292,
        "averageDamageDealt": 1.0456621004566211,
        "averageDamageTaken": 0.0365296803652968,
        "averageNetDamage": 1.0091324200913243,
        "lethalMoves": 4,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 83,
            "winRate": 0.6024096385542169
          },
          {
            "modelId": "expert",
            "played": 55,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.7037037037037037
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 219,
            "winRate": 0.6164383561643836
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
        "maxSide": 3,
        "minSide": 3,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-enemy",
          "boost-self",
          "combo-1",
          "connector",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 343,
        "played": 210,
        "ignored": 265,
        "selectionRate": 0.6122448979591837,
        "wins": 124,
        "losses": 86,
        "draws": 0,
        "winRateWhenPlayed": 0.5904761904761905,
        "averageFlips": 0.8476190476190476,
        "failedImpactRate": 0.14832535885167464,
        "averageFlipMargin": 1.7640449438202248,
        "averageEffectAmount": 0.9952380952380953,
        "averageDamageDealt": 0.9952380952380953,
        "averageDamageTaken": 0.3333333333333333,
        "averageNetDamage": 0.661904761904762,
        "lethalMoves": 5,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 83,
            "winRate": 0.5301204819277109
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.7346938775510204
          },
          {
            "modelId": "opportunist",
            "played": 34,
            "winRate": 0.6764705882352942
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.7777777777777778
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
            "played": 210,
            "winRate": 0.5904761904761905
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
        "sideTotal": 11,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "combo-2",
          "deal-damage",
          "demon",
          "flip-1",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 444,
        "played": 188,
        "ignored": 352,
        "selectionRate": 0.42342342342342343,
        "wins": 116,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.6170212765957447,
        "averageFlips": 0.6170212765957447,
        "failedImpactRate": 0.40512820512820513,
        "averageFlipMargin": 1.9224137931034482,
        "averageEffectAmount": 0.8563829787234043,
        "averageDamageDealt": 1.824468085106383,
        "averageDamageTaken": 0.5478723404255319,
        "averageNetDamage": 1.2765957446808511,
        "lethalMoves": 11,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "regular",
            "played": 74,
            "winRate": 0.5945945945945946
          },
          {
            "modelId": "expert",
            "played": 48,
            "winRate": 0.7083333333333334
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.7083333333333334
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
            "played": 188,
            "winRate": 0.6170212765957447
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
        "minSide": 1,
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
        "offered": 467,
        "played": 180,
        "ignored": 376,
        "selectionRate": 0.3854389721627409,
        "wins": 99,
        "losses": 81,
        "draws": 0,
        "winRateWhenPlayed": 0.55,
        "averageFlips": 0.6944444444444444,
        "failedImpactRate": 0.3686868686868687,
        "averageFlipMargin": 1.88,
        "averageEffectAmount": 0.9888888888888889,
        "averageDamageDealt": 1.3888888888888888,
        "averageDamageTaken": 0.45555555555555555,
        "averageNetDamage": 0.9333333333333333,
        "lethalMoves": 10,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 73,
            "winRate": 0.547945205479452
          },
          {
            "modelId": "expert",
            "played": 42,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 30,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.5217391304347826
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
            "played": 180,
            "winRate": 0.55
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
        "id": "arcane",
        "label": "arcane",
        "offered": 3011,
        "played": 1497,
        "ignored": 2378,
        "selectionRate": 0.4971770176021255,
        "wins": 651,
        "losses": 846,
        "draws": 0,
        "winRateWhenPlayed": 0.4348697394789579,
        "averageFlips": 0.23046092184368738,
        "averageDamageDealt": 0.3694054776219105,
        "averageNetDamage": 0.21977287909151638,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 422,
            "winRateWhenPlayed": 0.44786729857819907
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 412,
            "winRateWhenPlayed": 0.4223300970873786
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 375,
            "winRateWhenPlayed": 0.4053333333333333
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 288,
            "winRateWhenPlayed": 0.4722222222222222
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
        "offered": 2707,
        "played": 1417,
        "ignored": 2129,
        "selectionRate": 0.523457702253417,
        "wins": 712,
        "losses": 705,
        "draws": 0,
        "winRateWhenPlayed": 0.502470007057163,
        "averageFlips": 0.2208892025405787,
        "averageDamageDealt": 0.37473535638673255,
        "averageNetDamage": 0.16019760056457305,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.506631299734748
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 375,
            "winRateWhenPlayed": 0.504
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 368,
            "winRateWhenPlayed": 0.5135869565217391
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 297,
            "winRateWhenPlayed": 0.48148148148148145
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
        "offered": 2839,
        "played": 1416,
        "ignored": 2259,
        "selectionRate": 0.4987671715392744,
        "wins": 986,
        "losses": 430,
        "draws": 0,
        "winRateWhenPlayed": 0.6963276836158192,
        "averageFlips": 0.23375706214689265,
        "averageDamageDealt": 0.7641242937853108,
        "averageNetDamage": 0.605225988700565,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 368,
            "winRateWhenPlayed": 0.6820652173913043
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 368,
            "winRateWhenPlayed": 0.6739130434782609
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 353,
            "winRateWhenPlayed": 0.7393767705382436
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 327,
            "winRateWhenPlayed": 0.691131498470948
          }
        ],
        "status": "overperformer",
        "notes": [
          "La famille gagne trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "familiar",
        "label": "familiar",
        "offered": 2633,
        "played": 1397,
        "ignored": 2047,
        "selectionRate": 0.5305734903152298,
        "wins": 842,
        "losses": 555,
        "draws": 0,
        "winRateWhenPlayed": 0.6027201145311382,
        "averageFlips": 0.2863278453829635,
        "averageDamageDealt": 0.5211166785969935,
        "averageNetDamage": 0.40014316392269145,
        "topCards": [
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 370,
            "winRateWhenPlayed": 0.6054054054054054
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 360,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 351,
            "winRateWhenPlayed": 0.5954415954415955
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 316,
            "winRateWhenPlayed": 0.5822784810126582
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
        "offered": 2589,
        "played": 1306,
        "ignored": 2061,
        "selectionRate": 0.5044418694476632,
        "wins": 582,
        "losses": 724,
        "draws": 0,
        "winRateWhenPlayed": 0.445635528330781,
        "averageFlips": 0.2304747320061256,
        "averageDamageDealt": 0.4777947932618683,
        "averageNetDamage": 0.24655436447166923,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 360,
            "winRateWhenPlayed": 0.45
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 342,
            "winRateWhenPlayed": 0.45321637426900585
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 324,
            "winRateWhenPlayed": 0.42901234567901236
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 280,
            "winRateWhenPlayed": 0.45
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
        "offered": 1558,
        "played": 797,
        "ignored": 1228,
        "selectionRate": 0.5115532734274711,
        "wins": 474,
        "losses": 323,
        "draws": 0,
        "winRateWhenPlayed": 0.5947302383939774,
        "averageFlips": 0.7289836888331243,
        "averageDamageDealt": 1.2936010037641155,
        "averageNetDamage": 0.9636135508155583,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 219,
            "winRateWhenPlayed": 0.6164383561643836
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 210,
            "winRateWhenPlayed": 0.5904761904761905
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 188,
            "winRateWhenPlayed": 0.6170212765957447
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 180,
            "winRateWhenPlayed": 0.55
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
        "id": "connector",
        "label": "connector",
        "offered": 2996,
        "played": 2107,
        "ignored": 2257,
        "selectionRate": 0.7032710280373832,
        "wins": 1141,
        "losses": 966,
        "draws": 0,
        "winRateWhenPlayed": 0.5415282392026578,
        "averageFlips": 0.33839582344565733,
        "averageDamageDealt": 0.2876127195064072,
        "averageNetDamage": 0.19981015662078783,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 422,
            "winRateWhenPlayed": 0.44786729857819907
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.506631299734748
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 370,
            "winRateWhenPlayed": 0.6054054054054054
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 368,
            "winRateWhenPlayed": 0.6820652173913043
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 360,
            "winRateWhenPlayed": 0.45
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
        "offered": 2916,
        "played": 2076,
        "ignored": 2217,
        "selectionRate": 0.7119341563786008,
        "wins": 1126,
        "losses": 950,
        "draws": 0,
        "winRateWhenPlayed": 0.5423892100192679,
        "averageFlips": 0.2832369942196532,
        "averageDamageDealt": 0.34778420038535646,
        "averageNetDamage": 0.29865125240847784,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 412,
            "winRateWhenPlayed": 0.4223300970873786
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 375,
            "winRateWhenPlayed": 0.504
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 368,
            "winRateWhenPlayed": 0.6739130434782609
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 360,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 342,
            "winRateWhenPlayed": 0.45321637426900585
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "payoff",
        "label": "payoff",
        "offered": 4223,
        "played": 1880,
        "ignored": 3394,
        "selectionRate": 0.44518115084063464,
        "wins": 1028,
        "losses": 852,
        "draws": 0,
        "winRateWhenPlayed": 0.5468085106382978,
        "averageFlips": 0.275,
        "averageDamageDealt": 0.651595744680851,
        "averageNetDamage": 0.4122340425531914,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 375,
            "winRateWhenPlayed": 0.4053333333333333
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 368,
            "winRateWhenPlayed": 0.5135869565217391
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 353,
            "winRateWhenPlayed": 0.7393767705382436
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 316,
            "winRateWhenPlayed": 0.5822784810126582
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 280,
            "winRateWhenPlayed": 0.45
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
        "offered": 5202,
        "played": 1767,
        "ignored": 4234,
        "selectionRate": 0.33967704728950404,
        "wins": 952,
        "losses": 815,
        "draws": 0,
        "winRateWhenPlayed": 0.5387662705149971,
        "averageFlips": 0.2563667232597623,
        "averageDamageDealt": 1.1295981890209394,
        "averageNetDamage": 0.7051499717034522,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 351,
            "winRateWhenPlayed": 0.5954415954415955
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 327,
            "winRateWhenPlayed": 0.691131498470948
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 324,
            "winRateWhenPlayed": 0.42901234567901236
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 297,
            "winRateWhenPlayed": 0.48148148148148145
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 288,
            "winRateWhenPlayed": 0.4722222222222222
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
        "offered": 15337,
        "played": 7830,
        "ignored": 12102,
        "selectionRate": 0.5105300906305014,
        "wins": 4247,
        "losses": 3583,
        "draws": 0,
        "winRateWhenPlayed": 0.5424010217113665,
        "averageFlips": 0.2900383141762452,
        "averageDamageDealt": 0.580970625798212,
        "averageNetDamage": 0.3910600255427842,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 422,
            "winRateWhenPlayed": 0.44786729857819907
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 412,
            "winRateWhenPlayed": 0.4223300970873786
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.506631299734748
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 375,
            "winRateWhenPlayed": 0.504
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 375,
            "winRateWhenPlayed": 0.4053333333333333
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
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 440,
        "wins": 176,
        "losses": 264,
        "draws": 0,
        "winRate": 0.4,
        "averageFlips": 0.20909090909090908,
        "averageDamageDealt": 0.6818181818181818,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 402,
        "wins": 192,
        "losses": 210,
        "draws": 0,
        "winRate": 0.47761194029850745,
        "averageFlips": 0.19900497512437812,
        "averageDamageDealt": 0.7587064676616916,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 390,
        "wins": 175,
        "losses": 215,
        "draws": 0,
        "winRate": 0.44871794871794873,
        "averageFlips": 0.16666666666666666,
        "averageDamageDealt": 1.0076923076923077,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 388,
        "wins": 277,
        "losses": 111,
        "draws": 0,
        "winRate": 0.7139175257731959,
        "averageFlips": 0.23711340206185566,
        "averageDamageDealt": 1.2603092783505154,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 370,
        "wins": 216,
        "losses": 154,
        "draws": 0,
        "winRate": 0.5837837837837838,
        "averageFlips": 0.3054054054054054,
        "averageDamageDealt": 1.045945945945946,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 360,
        "wins": 146,
        "losses": 214,
        "draws": 0,
        "winRate": 0.40555555555555556,
        "averageFlips": 0.25555555555555554,
        "averageDamageDealt": 0.7,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 314,
        "wins": 131,
        "losses": 183,
        "draws": 0,
        "winRate": 0.4171974522292994,
        "averageFlips": 0.21656050955414013,
        "averageDamageDealt": 0.050955414012738856,
        "averageEffectAmount": 1.2452229299363058,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 314,
        "wins": 131,
        "losses": 183,
        "draws": 0,
        "winRate": 0.4171974522292994,
        "averageFlips": 0.21656050955414013,
        "averageDamageDealt": 0.050955414012738856,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 306,
        "wins": 230,
        "losses": 76,
        "draws": 0,
        "winRate": 0.7516339869281046,
        "averageFlips": 0.17647058823529413,
        "averageDamageDealt": 0.5980392156862745,
        "averageEffectAmount": 1.1405228758169934,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 298,
        "wins": 197,
        "losses": 101,
        "draws": 0,
        "winRate": 0.6610738255033557,
        "averageFlips": 0.23154362416107382,
        "averageDamageDealt": 0.43288590604026844,
        "averageEffectAmount": 1.9865771812080537,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 297,
        "wins": 149,
        "losses": 148,
        "draws": 0,
        "winRate": 0.5016835016835017,
        "averageFlips": 0.23905723905723905,
        "averageDamageDealt": 0.265993265993266,
        "averageEffectAmount": 1.67003367003367,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 289,
        "wins": 216,
        "losses": 73,
        "draws": 0,
        "winRate": 0.7474048442906575,
        "averageFlips": 0.15570934256055363,
        "averageDamageDealt": 0.5432525951557093,
        "averageEffectAmount": 1.7716262975778547,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 287,
        "wins": 137,
        "losses": 150,
        "draws": 0,
        "winRate": 0.47735191637630664,
        "averageFlips": 0.25435540069686413,
        "averageDamageDealt": 0.1602787456445993,
        "averageEffectAmount": 1.2473867595818815,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 277,
        "wins": 138,
        "losses": 139,
        "draws": 0,
        "winRate": 0.4981949458483754,
        "averageFlips": 0.21299638989169675,
        "averageDamageDealt": 0.12274368231046931,
        "averageEffectAmount": 1.2021660649819494,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 270,
        "wins": 217,
        "losses": 53,
        "draws": 0,
        "winRate": 0.8037037037037037,
        "averageFlips": 0.13703703703703704,
        "averageDamageDealt": 2.240740740740741,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 269,
        "wins": 135,
        "losses": 134,
        "draws": 0,
        "winRate": 0.5018587360594795,
        "averageFlips": 0.2379182156133829,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.3754646840148699,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 269,
        "wins": 135,
        "losses": 134,
        "draws": 0,
        "winRate": 0.5018587360594795,
        "averageFlips": 0.2379182156133829,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.3754646840148699,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 268,
        "wins": 152,
        "losses": 116,
        "draws": 0,
        "winRate": 0.5671641791044776,
        "averageFlips": 0.12313432835820895,
        "averageDamageDealt": 1.7164179104477613,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 256,
        "wins": 168,
        "losses": 88,
        "draws": 0,
        "winRate": 0.65625,
        "averageFlips": 0.21484375,
        "averageDamageDealt": 0.35546875,
        "averageEffectAmount": 2.3125,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 251,
        "wins": 167,
        "losses": 84,
        "draws": 0,
        "winRate": 0.6653386454183267,
        "averageFlips": 0.2948207171314741,
        "averageDamageDealt": 2.3745019920318726,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 238,
        "wins": 101,
        "losses": 137,
        "draws": 0,
        "winRate": 0.42436974789915966,
        "averageFlips": 0.20168067226890757,
        "averageDamageDealt": 0.9873949579831933,
        "averageEffectAmount": 2.3949579831932772,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 236,
        "wins": 110,
        "losses": 126,
        "draws": 0,
        "winRate": 0.4661016949152542,
        "averageFlips": 0.17796610169491525,
        "averageDamageDealt": 1.826271186440678,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 233,
        "wins": 110,
        "losses": 123,
        "draws": 0,
        "winRate": 0.4721030042918455,
        "averageFlips": 0.27467811158798283,
        "averageDamageDealt": 0.19313304721030042,
        "averageEffectAmount": 1.3433476394849786,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 199,
        "wins": 114,
        "losses": 85,
        "draws": 0,
        "winRate": 0.5728643216080402,
        "averageFlips": 0.7135678391959799,
        "averageDamageDealt": 2.0603015075376883,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 918,
        "id": "card-widow-knight-nerf",
        "severity": "problem",
        "action": "nerf",
        "title": "Chevalier veuf tire trop de valeur",
        "detail": "327 plays, 69% win, 0.29 flips/play, net PV 1.29.",
        "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2839,
        "id": "family-revenant-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "revenant domine l'echantillon",
        "detail": "1416 plays, 70% win, net PV 0.61.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "id": "combo-effect:moth-ghost:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 306,
        "title": "Fantome phalene -> boost-self ressort comme combo",
        "detail": "306 occurrences, 75% win, 0.18 flips, 0.60 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moth-ghost:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 289,
        "title": "Fantome phalene -> draw-next-turn ressort comme combo",
        "detail": "289 occurrences, 75% win, 0.16 flips, 0.54 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 270,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "270 occurrences, 80% win, 0.14 flips, 2.24 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 251,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "251 occurrences, 67% win, 0.29 flips, 2.37 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 236,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "236 occurrences, 47% win, 0.18 flips, 1.83 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 199,
        "title": "demon -> demon ressort comme combo",
        "detail": "199 occurrences, 57% win, 0.71 flips, 2.06 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.8047643707923355,
    "cardAnalytics": [
      {
        "cardId": "reward-rare-05",
        "name": "Fusion sylvestre",
        "family": "revenant",
        "rarity": "rare",
        "sourceType": "fusion",
        "sideTotal": 20,
        "maxSide": 6,
        "minSide": 4,
        "effectKinds": [
          "draw-next-turn",
          "gain-shield"
        ],
        "buildTags": [],
        "preferredPositions": [],
        "offered": 35,
        "played": 4,
        "ignored": 34,
        "selectionRate": 0.11428571428571428,
        "wins": 4,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 1.25,
        "averageDamageDealt": 2.25,
        "averageDamageTaken": 0,
        "averageNetDamage": 2.25,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 4,
            "winRate": 1
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "maxSide": 3,
        "minSide": 3,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-enemy",
          "boost-self",
          "combo-1",
          "connector",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 71,
        "played": 54,
        "ignored": 59,
        "selectionRate": 0.7605633802816901,
        "wins": 31,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.5740740740740741,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0.16279069767441862,
        "averageFlipMargin": 2.4722222222222223,
        "averageEffectAmount": 1.1666666666666667,
        "averageDamageDealt": 1.5,
        "averageDamageTaken": 0.4444444444444444,
        "averageNetDamage": 1.0555555555555556,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 49,
            "winRate": 0.6122448979591837
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 54,
            "winRate": 0.5740740740740741
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "combo-2",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 42,
        "played": 20,
        "ignored": 30,
        "selectionRate": 0.47619047619047616,
        "wins": 12,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.1,
        "failedImpactRate": 0.7777777777777778,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1.15,
        "averageDamageDealt": 1.7,
        "averageDamageTaken": 0.35,
        "averageNetDamage": 1.35,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.75
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 20,
            "winRate": 0.6
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-2",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [],
        "offered": 26,
        "played": 17,
        "ignored": 22,
        "selectionRate": 0.6538461538461539,
        "wins": 10,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.5882352941176471,
        "averageFlips": 0.17647058823529413,
        "failedImpactRate": 0.7272727272727273,
        "averageFlipMargin": 0.3333333333333333,
        "averageEffectAmount": 1.8235294117647058,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 17,
            "winRate": 0.5882352941176471
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
        ]
      },
      {
        "cardId": "reward-uncommon-06",
        "name": "Carte inhabituelle 06",
        "family": "arcane",
        "rarity": "uncommon",
        "role": "connector",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "center",
          "combo-2",
          "connector",
          "hybrid-familiar",
          "uncommon"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 71,
        "played": 13,
        "ignored": 63,
        "selectionRate": 0.18309859154929578,
        "wins": 6,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.46153846153846156,
        "averageFlips": 0.5384615384615384,
        "failedImpactRate": 0.5333333333333333,
        "averageFlipMargin": 1.2857142857142858,
        "averageEffectAmount": 0.9230769230769231,
        "averageDamageDealt": 2.3846153846153846,
        "averageDamageTaken": 1.8461538461538463,
        "averageNetDamage": 0.5384615384615383,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.3
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 13,
            "winRate": 0.46153846153846156
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-1",
          "corner",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 14,
        "played": 7,
        "ignored": 9,
        "selectionRate": 0.5,
        "wins": 2,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.2857142857142857,
        "averageFlips": 0.2857142857142857,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1.1428571428571428,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 7,
            "winRate": 0.2857142857142857
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
          "combo-1",
          "gain-shield"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 468,
        "played": 370,
        "ignored": 357,
        "selectionRate": 0.7905982905982906,
        "wins": 319,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.8621621621621621,
        "averageFlips": 0.2972972972972973,
        "failedImpactRate": 0.34523809523809523,
        "averageFlipMargin": 2.081818181818182,
        "averageEffectAmount": 4.175675675675675,
        "averageDamageDealt": 0.2918918918918919,
        "averageDamageTaken": 0.06756756756756757,
        "averageNetDamage": 0.22432432432432434,
        "lethalMoves": 10,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "expert",
            "played": 128,
            "winRate": 0.9765625
          },
          {
            "modelId": "champion",
            "played": 121,
            "winRate": 0.7355371900826446
          },
          {
            "modelId": "regular",
            "played": 118,
            "winRate": 0.8813559322033898
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 370,
            "winRate": 0.8621621621621621
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
          "adjacent-ally",
          "arcane",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 495,
        "played": 362,
        "ignored": 360,
        "selectionRate": 0.7313131313131314,
        "wins": 308,
        "losses": 54,
        "draws": 0,
        "winRateWhenPlayed": 0.850828729281768,
        "averageFlips": 0.40607734806629836,
        "failedImpactRate": 0.42578125,
        "averageFlipMargin": 1.9863945578231292,
        "averageEffectAmount": 2.8066298342541436,
        "averageDamageDealt": 0.20441988950276244,
        "averageDamageTaken": 0.0856353591160221,
        "averageNetDamage": 0.11878453038674033,
        "lethalMoves": 4,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.9606299212598425
          },
          {
            "modelId": "regular",
            "played": 117,
            "winRate": 0.8717948717948718
          },
          {
            "modelId": "champion",
            "played": 117,
            "winRate": 0.7094017094017094
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 362,
            "winRate": 0.850828729281768
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
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "combo-3",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 609,
        "played": 340,
        "ignored": 477,
        "selectionRate": 0.5582922824302134,
        "wins": 288,
        "losses": 52,
        "draws": 0,
        "winRateWhenPlayed": 0.8470588235294118,
        "averageFlips": 0.3088235294117647,
        "failedImpactRate": 0.3930635838150289,
        "averageFlipMargin": 2.1142857142857143,
        "averageEffectAmount": 3.2558823529411764,
        "averageDamageDealt": 0.39705882352941174,
        "averageDamageTaken": 0.08235294117647059,
        "averageNetDamage": 0.31470588235294117,
        "lethalMoves": 9,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.9583333333333334
          },
          {
            "modelId": "champion",
            "played": 109,
            "winRate": 0.7339449541284404
          },
          {
            "modelId": "regular",
            "played": 106,
            "winRate": 0.8679245283018868
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.2
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 340,
            "winRate": 0.8470588235294118
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
          "adjacent-enemy",
          "arcane",
          "attacker",
          "boost-self"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 890,
        "played": 236,
        "ignored": 729,
        "selectionRate": 0.2651685393258427,
        "wins": 212,
        "losses": 24,
        "draws": 0,
        "winRateWhenPlayed": 0.8983050847457628,
        "averageFlips": 0.1906779661016949,
        "failedImpactRate": 0.7513812154696132,
        "averageFlipMargin": 1.9111111111111112,
        "averageEffectAmount": 0.711864406779661,
        "averageDamageDealt": 3.2203389830508473,
        "averageDamageTaken": 0.635593220338983,
        "averageNetDamage": 2.584745762711864,
        "lethalMoves": 28,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "champion",
            "played": 88,
            "winRate": 0.8068181818181818
          },
          {
            "modelId": "regular",
            "played": 73,
            "winRate": 0.958904109589041
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.958904109589041
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 236,
            "winRate": 0.8983050847457628
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
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "anchor",
          "boost-self",
          "deal-damage",
          "demon",
          "hybrid-revenant"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 102,
        "played": 74,
        "ignored": 83,
        "selectionRate": 0.7254901960784313,
        "wins": 50,
        "losses": 24,
        "draws": 0,
        "winRateWhenPlayed": 0.6756756756756757,
        "averageFlips": 0.6891891891891891,
        "failedImpactRate": 0.16393442622950818,
        "averageFlipMargin": 2.176470588235294,
        "averageEffectAmount": 1.2027027027027026,
        "averageDamageDealt": 1.4054054054054055,
        "averageDamageTaken": 0.13513513513513514,
        "averageNetDamage": 1.2702702702702704,
        "lethalMoves": 3,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 1
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
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 74,
            "winRate": 0.6756756756756757
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
        "minSide": 1,
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
        "offered": 145,
        "played": 73,
        "ignored": 104,
        "selectionRate": 0.503448275862069,
        "wins": 48,
        "losses": 25,
        "draws": 0,
        "winRateWhenPlayed": 0.6575342465753424,
        "averageFlips": 0.6164383561643836,
        "failedImpactRate": 0.3076923076923077,
        "averageFlipMargin": 2.4444444444444446,
        "averageEffectAmount": 1.0410958904109588,
        "averageDamageDealt": 1.7945205479452055,
        "averageDamageTaken": 0.3835616438356164,
        "averageNetDamage": 1.4109589041095891,
        "lethalMoves": 3,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.6222222222222222
          },
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0.75
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
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 73,
            "winRate": 0.6575342465753424
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
          "combo-2",
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 151,
        "played": 43,
        "ignored": 126,
        "selectionRate": 0.2847682119205298,
        "wins": 36,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.8372093023255814,
        "averageFlips": 0.27906976744186046,
        "failedImpactRate": 0.5714285714285714,
        "averageFlipMargin": 2.1666666666666665,
        "averageEffectAmount": 0.7441860465116279,
        "averageDamageDealt": 1.6744186046511629,
        "averageDamageTaken": 0.3953488372093023,
        "averageNetDamage": 1.2790697674418605,
        "lethalMoves": 1,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.7727272727272727
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 43,
            "winRate": 0.8372093023255814
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "attacker",
          "automaton",
          "boost-self",
          "combo-1"
        ],
        "preferredPositions": [],
        "offered": 87,
        "played": 40,
        "ignored": 68,
        "selectionRate": 0.45977011494252873,
        "wins": 29,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.725,
        "averageFlips": 0.075,
        "failedImpactRate": 0.8333333333333334,
        "averageFlipMargin": 2,
        "averageEffectAmount": 2.65,
        "averageDamageDealt": 0.25,
        "averageDamageTaken": 0.2,
        "averageNetDamage": 0.04999999999999999,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 6,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 40,
            "winRate": 0.725
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
        "sideTotal": 11,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "combo-2",
          "deal-damage",
          "demon",
          "flip-1",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 142,
        "played": 37,
        "ignored": 121,
        "selectionRate": 0.2605633802816901,
        "wins": 24,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.6486486486486487,
        "averageFlips": 0.4864864864864865,
        "failedImpactRate": 0.3076923076923077,
        "averageFlipMargin": 3,
        "averageEffectAmount": 1.027027027027027,
        "averageDamageDealt": 6.324324324324325,
        "averageDamageTaken": 1.8918918918918919,
        "averageNetDamage": 4.4324324324324325,
        "lethalMoves": 9,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.71875
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 37,
            "winRate": 0.6486486486486487
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "deal-damage",
          "gain-shield"
        ],
        "buildTags": [
          "attacker",
          "combo-1",
          "deal-damage",
          "flip-1",
          "gain-shield",
          "hybrid-demon",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 48,
        "played": 27,
        "ignored": 34,
        "selectionRate": 0.5625,
        "wins": 23,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8518518518518519,
        "averageFlips": 0.37037037037037035,
        "failedImpactRate": 0.23076923076923078,
        "averageFlipMargin": 3.6,
        "averageEffectAmount": 1.6296296296296295,
        "averageDamageDealt": 0.7037037037037037,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.7037037037037037,
        "lethalMoves": 1,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.7
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.8888888888888888
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 27,
            "winRate": 0.8518518518518519
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
          "boost-self",
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "boost-self",
          "corner",
          "gain-shield"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 41,
        "played": 25,
        "ignored": 29,
        "selectionRate": 0.6097560975609756,
        "wins": 16,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.64,
        "averageFlips": 0.16,
        "failedImpactRate": 0.6923076923076923,
        "averageFlipMargin": 2.25,
        "averageEffectAmount": 2.44,
        "averageDamageDealt": 0.56,
        "averageDamageTaken": 0.52,
        "averageNetDamage": 0.040000000000000036,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 25,
            "winRate": 0.64
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
          "combo-2",
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 44,
        "played": 24,
        "ignored": 34,
        "selectionRate": 0.5454545454545454,
        "wins": 20,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.25,
        "failedImpactRate": 0.5384615384615384,
        "averageFlipMargin": 3,
        "averageEffectAmount": 1.7916666666666667,
        "averageDamageDealt": 1,
        "averageDamageTaken": 0,
        "averageNetDamage": 1,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.8421052631578947
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 24,
            "winRate": 0.8333333333333334
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
        "sideTotal": 11,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "boost-self",
          "combo-2",
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [],
        "offered": 53,
        "played": 21,
        "ignored": 44,
        "selectionRate": 0.39622641509433965,
        "wins": 15,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.7142857142857143,
        "averageFlips": 0.38095238095238093,
        "failedImpactRate": 0.38461538461538464,
        "averageFlipMargin": 3.875,
        "averageEffectAmount": 3.5238095238095237,
        "averageDamageDealt": 0,
        "averageDamageTaken": 1.1428571428571428,
        "averageNetDamage": -1.1428571428571428,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.7368421052631579
          },
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 21,
            "winRate": 0.7142857142857143
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "offered": 45,
        "played": 20,
        "ignored": 34,
        "selectionRate": 0.4444444444444444,
        "wins": 16,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.3,
        "failedImpactRate": 0.7142857142857143,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 2.15,
        "averageDamageDealt": 1.4,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.4,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 20,
            "winRate": 0.8
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
        "offered": 27,
        "played": 18,
        "ignored": 20,
        "selectionRate": 0.6666666666666666,
        "wins": 15,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.2777777777777778,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 2.4444444444444446,
        "averageDamageDealt": 0.2777777777777778,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.2777777777777778,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.875
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 18,
            "winRate": 0.8333333333333334
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
        "offered": 61,
        "played": 18,
        "ignored": 49,
        "selectionRate": 0.29508196721311475,
        "wins": 13,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.7222222222222222,
        "averageFlips": 0.05555555555555555,
        "failedImpactRate": 0.9333333333333333,
        "averageFlipMargin": 5,
        "averageEffectAmount": 0.7777777777777778,
        "averageDamageDealt": 0.8333333333333334,
        "averageDamageTaken": 0.5,
        "averageNetDamage": 0.33333333333333337,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 18,
            "winRate": 0.7222222222222222
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-02",
        "name": "Carte inhabituelle 02",
        "family": "demon",
        "rarity": "uncommon",
        "role": "attacker",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "attacker",
          "combo-2",
          "deal-damage",
          "demon",
          "hybrid-arcane",
          "uncommon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 33,
        "played": 15,
        "ignored": 28,
        "selectionRate": 0.45454545454545453,
        "wins": 11,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.7333333333333333,
        "averageFlips": 0.6,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2.7777777777777777,
        "averageEffectAmount": 1.2,
        "averageDamageDealt": 1.6666666666666667,
        "averageDamageTaken": 0.26666666666666666,
        "averageNetDamage": 1.4000000000000001,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 15,
            "winRate": 0.7333333333333333
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
          "combo-2",
          "familiar",
          "flip-1",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 36,
        "played": 15,
        "ignored": 30,
        "selectionRate": 0.4166666666666667,
        "wins": 11,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.7333333333333333,
        "averageFlips": 0.2,
        "failedImpactRate": 0.7857142857142857,
        "averageFlipMargin": 0.6666666666666666,
        "averageEffectAmount": 0.8666666666666667,
        "averageDamageDealt": 1.6666666666666667,
        "averageDamageTaken": 1.4,
        "averageNetDamage": 0.26666666666666683,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 15,
            "winRate": 0.7333333333333333
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
          "combo-2",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 14,
        "played": 12,
        "ignored": 10,
        "selectionRate": 0.8571428571428571,
        "wins": 8,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.08333333333333333,
        "failedImpactRate": 0.8,
        "averageFlipMargin": 2,
        "averageEffectAmount": 0.8333333333333334,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 12,
            "winRate": 0.6666666666666666
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
        "offered": 11,
        "played": 8,
        "ignored": 8,
        "selectionRate": 0.7272727272727273,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 3,
        "averageEffectAmount": 2.75,
        "averageDamageDealt": 0.125,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.125,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 8,
            "winRate": 0.75
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-04",
        "name": "Carte inhabituelle 04",
        "family": "automaton",
        "rarity": "uncommon",
        "role": "payoff",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-2",
          "corner",
          "gain-shield",
          "hybrid-arcane",
          "payoff",
          "uncommon"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 16,
        "played": 6,
        "ignored": 13,
        "selectionRate": 0.375,
        "wins": 4,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0.6666666666666666,
        "averageDamageDealt": 0.16666666666666666,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.16666666666666666,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 6,
            "winRate": 0.6666666666666666
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-common-08",
        "name": "Carte commune 08",
        "family": "demon",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "reward",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "common",
          "deal-damage",
          "demon",
          "payoff"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 14,
        "played": 5,
        "ignored": 12,
        "selectionRate": 0.35714285714285715,
        "wins": 3,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.6,
        "failedImpactRate": 0.4,
        "averageFlipMargin": 2.3333333333333335,
        "averageEffectAmount": 0.4,
        "averageDamageDealt": 1.4,
        "averageDamageTaken": 2.6,
        "averageNetDamage": -1.2000000000000002,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 1,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 5,
            "winRate": 0.6
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-10",
        "name": "Carte inhabituelle 10",
        "family": "automaton",
        "rarity": "uncommon",
        "role": "stabilizer",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-2",
          "corner",
          "gain-shield",
          "hybrid-arcane",
          "stabilizer",
          "uncommon"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 19,
        "played": 5,
        "ignored": 17,
        "selectionRate": 0.2631578947368421,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0.2,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.8,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.25
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 5,
            "winRate": 0.4
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-01",
        "name": "Carte inhabituelle 01",
        "family": "familiar",
        "rarity": "uncommon",
        "role": "engine",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "combo-2",
          "draw-next-turn",
          "engine",
          "familiar",
          "uncommon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 16,
        "played": 4,
        "ignored": 16,
        "selectionRate": 0.25,
        "wins": 3,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 2,
        "averageDamageDealt": 2,
        "averageDamageTaken": 1.5,
        "averageNetDamage": 0.5,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 4,
            "winRate": 0.75
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-05",
        "name": "Carte inhabituelle 05",
        "family": "revenant",
        "rarity": "uncommon",
        "role": "engine",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "behind-on-board",
          "combo-2",
          "engine",
          "gain-shield",
          "revenant",
          "uncommon"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 11,
        "played": 4,
        "ignored": 8,
        "selectionRate": 0.36363636363636365,
        "wins": 0,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.25,
        "failedImpactRate": 0.75,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.25,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 4,
            "winRate": 0
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-08",
        "name": "Carte inhabituelle 08",
        "family": "demon",
        "rarity": "uncommon",
        "role": "payoff",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "combo-2",
          "deal-damage",
          "demon",
          "hybrid-arcane",
          "payoff",
          "uncommon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 8,
        "played": 3,
        "ignored": 6,
        "selectionRate": 0.375,
        "wins": 3,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 0,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 3,
            "winRate": 1
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-rare-06",
        "name": "Carte rare 06",
        "family": "arcane",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "reward",
        "sideTotal": 14,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "center",
          "combo-3",
          "finisher",
          "hybrid-familiar",
          "rare"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 6,
        "played": 2,
        "ignored": 4,
        "selectionRate": 0.3333333333333333,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 1,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1,
        "averageEffectAmount": 0,
        "averageDamageDealt": 5.5,
        "averageDamageTaken": 4,
        "averageNetDamage": 1.5,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 2,
            "winRate": 1
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self",
          "draw-next-turn"
        ],
        "buildTags": [
          "behind-on-board",
          "boost-self",
          "combo-1",
          "draw-next-turn",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 4,
        "played": 2,
        "ignored": 4,
        "selectionRate": 0.5,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 3.5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 2,
            "winRate": 1
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-common-11",
        "name": "Carte commune 11",
        "family": "revenant",
        "rarity": "common",
        "role": "engine",
        "sourceType": "enemy-upgrade",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "behind-on-board",
          "common",
          "engine",
          "gain-shield",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 5,
        "played": 2,
        "ignored": 4,
        "selectionRate": 0.4,
        "wins": 0,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 2,
            "winRate": 0
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-common-02",
        "name": "Carte commune 02",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "enemy-upgrade",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "common",
          "deal-damage",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 4,
        "played": 1,
        "ignored": 3,
        "selectionRate": 0.25,
        "wins": 1,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0,
        "averageDamageDealt": 10,
        "averageDamageTaken": 2,
        "averageNetDamage": 8,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 1,
            "winRate": 1
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
        "id": "arcane",
        "label": "arcane",
        "offered": 2539,
        "played": 1323,
        "ignored": 1990,
        "selectionRate": 0.5210712879086254,
        "wins": 1135,
        "losses": 188,
        "draws": 0,
        "winRateWhenPlayed": 0.8578987150415722,
        "averageFlips": 0.3144368858654573,
        "averageDamageDealt": 0.8458049886621315,
        "averageNetDamage": 0.6447467876039304,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 370,
            "winRateWhenPlayed": 0.8621621621621621
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 362,
            "winRateWhenPlayed": 0.850828729281768
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 340,
            "winRateWhenPlayed": 0.8470588235294118
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 236,
            "winRateWhenPlayed": 0.8983050847457628
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 13,
            "winRateWhenPlayed": 0.46153846153846156
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
        "offered": 519,
        "played": 262,
        "ignored": 416,
        "selectionRate": 0.5048169556840078,
        "wins": 171,
        "losses": 91,
        "draws": 0,
        "winRateWhenPlayed": 0.6526717557251909,
        "averageFlips": 0.6259541984732825,
        "averageDamageDealt": 2.2595419847328246,
        "averageNetDamage": 1.6832061068702293,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 74,
            "winRateWhenPlayed": 0.6756756756756757
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 73,
            "winRateWhenPlayed": 0.6575342465753424
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 54,
            "winRateWhenPlayed": 0.5740740740740741
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 37,
            "winRateWhenPlayed": 0.6486486486486487
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 15,
            "winRateWhenPlayed": 0.7333333333333333
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "human",
        "label": "human",
        "offered": 298,
        "played": 109,
        "ignored": 243,
        "selectionRate": 0.36577181208053694,
        "wins": 87,
        "losses": 22,
        "draws": 0,
        "winRateWhenPlayed": 0.7981651376146789,
        "averageFlips": 0.30275229357798167,
        "averageDamageDealt": 1.1376146788990826,
        "averageNetDamage": 0.761467889908257,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 43,
            "winRateWhenPlayed": 0.8372093023255814
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 24,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 21,
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 0
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
        "offered": 209,
        "played": 101,
        "ignored": 164,
        "selectionRate": 0.48325358851674644,
        "wins": 63,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.6237623762376238,
        "averageFlips": 0.1485148514851485,
        "averageDamageDealt": 0.24752475247524752,
        "averageNetDamage": 0.03960396039603961,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 40,
            "winRateWhenPlayed": 0.725
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 25,
            "winRateWhenPlayed": 0.64
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 17,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 7,
            "winRateWhenPlayed": 0.2857142857142857
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 6,
            "winRateWhenPlayed": 0.6666666666666666
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "familiar",
        "label": "familiar",
        "offered": 172,
        "played": 71,
        "ignored": 136,
        "selectionRate": 0.4127906976744186,
        "wins": 48,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.676056338028169,
        "averageFlips": 0.11267605633802817,
        "averageDamageDealt": 1.1549295774647887,
        "averageNetDamage": 0.5492957746478874,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 20,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 18,
            "winRateWhenPlayed": 0.7222222222222222
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 15,
            "winRateWhenPlayed": 0.7333333333333333
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 12,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 4,
            "winRateWhenPlayed": 0.75
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "revenant",
        "label": "revenant",
        "offered": 141,
        "played": 65,
        "ignored": 112,
        "selectionRate": 0.46099290780141844,
        "wins": 50,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.7692307692307693,
        "averageFlips": 0.2923076923076923,
        "averageDamageDealt": 0.5230769230769231,
        "averageNetDamage": 0.5230769230769231,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 27,
            "winRateWhenPlayed": 0.8518518518518519
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 18,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 8,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 4,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 4,
            "winRateWhenPlayed": 0
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
        "id": "anchor",
        "label": "anchor",
        "offered": 724,
        "played": 531,
        "ignored": 553,
        "selectionRate": 0.7334254143646409,
        "wins": 432,
        "losses": 99,
        "draws": 0,
        "winRateWhenPlayed": 0.8135593220338984,
        "averageFlips": 0.3352165725047081,
        "averageDamageDealt": 0.544256120527307,
        "averageNetDamage": 0.44067796610169496,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 370,
            "winRateWhenPlayed": 0.8621621621621621
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 74,
            "winRateWhenPlayed": 0.6756756756756757
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 25,
            "winRateWhenPlayed": 0.64
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 24,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 20,
            "winRateWhenPlayed": 0.6
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
        "offered": 741,
        "played": 487,
        "ignored": 566,
        "selectionRate": 0.6572199730094467,
        "wins": 384,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.7885010266940452,
        "averageFlips": 0.4188911704312115,
        "averageDamageDealt": 0.3839835728952772,
        "averageNetDamage": 0.17248459958932236,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 362,
            "winRateWhenPlayed": 0.850828729281768
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 54,
            "winRateWhenPlayed": 0.5740740740740741
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 21,
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 17,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 13,
            "winRateWhenPlayed": 0.46153846153846156
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "payoff",
        "label": "payoff",
        "offered": 887,
        "played": 435,
        "ignored": 706,
        "selectionRate": 0.4904171364148816,
        "wins": 352,
        "losses": 83,
        "draws": 0,
        "winRateWhenPlayed": 0.8091954022988506,
        "averageFlips": 0.32413793103448274,
        "averageDamageDealt": 0.9885057471264368,
        "averageNetDamage": 0.6850574712643678,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 339,
            "winRateWhenPlayed": 0.8466076696165191
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 37,
            "winRateWhenPlayed": 0.6486486486486487
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 15,
            "winRateWhenPlayed": 0.7333333333333333
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 7,
            "winRateWhenPlayed": 0.2857142857142857
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
        "offered": 1284,
        "played": 423,
        "ignored": 1029,
        "selectionRate": 0.3294392523364486,
        "wins": 346,
        "losses": 77,
        "draws": 0,
        "winRateWhenPlayed": 0.817966903073286,
        "averageFlips": 0.28132387706855794,
        "averageDamageDealt": 2.2222222222222223,
        "averageNetDamage": 1.83451536643026,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 206,
            "winRateWhenPlayed": 0.8980582524271845
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 73,
            "winRateWhenPlayed": 0.6575342465753424
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 43,
            "winRateWhenPlayed": 0.8372093023255814
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 40,
            "winRateWhenPlayed": 0.725
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 27,
            "winRateWhenPlayed": 0.8518518518518519
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "sans-role",
        "label": "sans role",
        "offered": 159,
        "played": 34,
        "ignored": 135,
        "selectionRate": 0.2138364779874214,
        "wins": 31,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.9117647058823529,
        "averageFlips": 0.17647058823529413,
        "averageDamageDealt": 3,
        "averageNetDamage": 1.411764705882353,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 30,
            "winRateWhenPlayed": 0.9
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 1,
            "winRateWhenPlayed": 1
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "engine",
        "label": "engine",
        "offered": 33,
        "played": 11,
        "ignored": 28,
        "selectionRate": 0.3333333333333333,
        "wins": 3,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.2727272727272727,
        "averageFlips": 0.18181818181818182,
        "averageDamageDealt": 0.7272727272727273,
        "averageNetDamage": 0.18181818181818188,
        "topCards": [
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 4,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 4,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
            "played": 2,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
        ]
      },
      {
        "id": "finisher",
        "label": "finisher",
        "offered": 31,
        "played": 5,
        "ignored": 27,
        "selectionRate": 0.16129032258064516,
        "wins": 4,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.8,
        "averageDamageDealt": 4,
        "averageNetDamage": 2.4,
        "topCards": [
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 19,
        "played": 5,
        "ignored": 17,
        "selectionRate": 0.2631578947368421,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0.2,
        "averageDamageDealt": 0,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 5,
            "winRateWhenPlayed": 0.4
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
        "offered": 3656,
        "played": 1873,
        "ignored": 2866,
        "selectionRate": 0.512308533916849,
        "wins": 1518,
        "losses": 355,
        "draws": 0,
        "winRateWhenPlayed": 0.810464495461826,
        "averageFlips": 0.3358248798718633,
        "averageDamageDealt": 1.0096102509343299,
        "averageNetDamage": 0.7533368926855312,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 370,
            "winRateWhenPlayed": 0.8621621621621621
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 362,
            "winRateWhenPlayed": 0.850828729281768
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 340,
            "winRateWhenPlayed": 0.8470588235294118
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 236,
            "winRateWhenPlayed": 0.8983050847457628
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 74,
            "winRateWhenPlayed": 0.6756756756756757
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "uncommon",
        "label": "uncommon",
        "offered": 174,
        "played": 50,
        "ignored": 151,
        "selectionRate": 0.28735632183908044,
        "wins": 29,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.58,
        "averageFlips": 0.44,
        "averageDamageDealt": 1.3,
        "averageNetDamage": 0.62,
        "topCards": [
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 15,
            "winRateWhenPlayed": 0.7333333333333333
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 13,
            "winRateWhenPlayed": 0.46153846153846156
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 6,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 5,
            "winRateWhenPlayed": 0.4
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 4,
            "winRateWhenPlayed": 0.75
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
        ]
      },
      {
        "id": "rare",
        "label": "rare",
        "offered": 48,
        "played": 8,
        "ignored": 44,
        "selectionRate": 0.16666666666666666,
        "wins": 7,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.875,
        "averageFlips": 0.5,
        "averageDamageDealt": 2.5,
        "averageNetDamage": 1.5,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 4,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      }
    ],
    "comboAnalytics": [
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 361,
        "wins": 318,
        "losses": 43,
        "draws": 0,
        "winRate": 0.8808864265927978,
        "averageFlips": 0.31301939058171746,
        "averageDamageDealt": 1.8448753462603877,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 338,
        "wins": 304,
        "losses": 34,
        "draws": 0,
        "winRate": 0.8994082840236687,
        "averageFlips": 0.21301775147928995,
        "averageDamageDealt": 3.633136094674556,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 254,
        "wins": 213,
        "losses": 41,
        "draws": 0,
        "winRate": 0.8385826771653543,
        "averageFlips": 0.3425196850393701,
        "averageDamageDealt": 0.14566929133858267,
        "averageEffectAmount": 1.311023622047244,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 254,
        "wins": 213,
        "losses": 41,
        "draws": 0,
        "winRate": 0.8385826771653543,
        "averageFlips": 0.3425196850393701,
        "averageDamageDealt": 0.14566929133858267,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 139,
        "wins": 122,
        "losses": 17,
        "draws": 0,
        "winRate": 0.8776978417266187,
        "averageFlips": 0.35251798561151076,
        "averageDamageDealt": 0.38848920863309355,
        "averageEffectAmount": 1.2661870503597121,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 103,
        "wins": 87,
        "losses": 16,
        "draws": 0,
        "winRate": 0.8446601941747572,
        "averageFlips": 0.08737864077669903,
        "averageDamageDealt": 0.02912621359223301,
        "averageEffectAmount": 4.941747572815534,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 66,
        "wins": 54,
        "losses": 12,
        "draws": 0,
        "winRate": 0.8181818181818182,
        "averageFlips": 0.06060606060606061,
        "averageDamageDealt": 5.863636363636363,
        "averageEffectAmount": 1.1818181818181819,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 48,
        "wins": 27,
        "losses": 21,
        "draws": 0,
        "winRate": 0.5625,
        "averageFlips": 0.6666666666666666,
        "averageDamageDealt": 3.2916666666666665,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 46,
        "wins": 37,
        "losses": 9,
        "draws": 0,
        "winRate": 0.8043478260869565,
        "averageFlips": 0.17391304347826086,
        "averageDamageDealt": 0,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 41,
        "wins": 33,
        "losses": 8,
        "draws": 0,
        "winRate": 0.8048780487804879,
        "averageFlips": 0.43902439024390244,
        "averageDamageDealt": 1,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 35,
        "wins": 24,
        "losses": 11,
        "draws": 0,
        "winRate": 0.6857142857142857,
        "averageFlips": 1.1714285714285715,
        "averageDamageDealt": 2.2285714285714286,
        "averageEffectAmount": 1.1714285714285715,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 34,
        "wins": 21,
        "losses": 13,
        "draws": 0,
        "winRate": 0.6176470588235294,
        "averageFlips": 0.9411764705882353,
        "averageDamageDealt": 1.911764705882353,
        "averageEffectAmount": 0.5588235294117647,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 33,
        "wins": 23,
        "losses": 10,
        "draws": 0,
        "winRate": 0.696969696969697,
        "averageFlips": 0.09090909090909091,
        "averageDamageDealt": 0.30303030303030304,
        "averageEffectAmount": 1.606060606060606,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 30,
        "wins": 29,
        "losses": 1,
        "draws": 0,
        "winRate": 0.9666666666666667,
        "averageFlips": 0.2,
        "averageDamageDealt": 4.2,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 30,
        "wins": 24,
        "losses": 6,
        "draws": 0,
        "winRate": 0.8,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 1.7333333333333334,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+revenant",
        "kind": "stack-hybrid",
        "label": "arcane + revenant dans la pile",
        "count": 30,
        "wins": 23,
        "losses": 7,
        "draws": 0,
        "winRate": 0.7666666666666667,
        "averageFlips": 0.36666666666666664,
        "averageDamageDealt": 0.4,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->demon",
        "kind": "family-chain",
        "label": "arcane -> demon",
        "count": 26,
        "wins": 21,
        "losses": 5,
        "draws": 0,
        "winRate": 0.8076923076923077,
        "averageFlips": 0.6923076923076923,
        "averageDamageDealt": 3.269230769230769,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:arcane->automaton",
        "kind": "family-chain",
        "label": "arcane -> automaton",
        "count": 23,
        "wins": 22,
        "losses": 1,
        "draws": 0,
        "winRate": 0.9565217391304348,
        "averageFlips": 0.17391304347826086,
        "averageDamageDealt": 0.34782608695652173,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 23,
        "wins": 14,
        "losses": 9,
        "draws": 0,
        "winRate": 0.6086956521739131,
        "averageFlips": 0.30434782608695654,
        "averageDamageDealt": 8.391304347826088,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:automaton->arcane",
        "kind": "family-chain",
        "label": "automaton -> arcane",
        "count": 22,
        "wins": 22,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 0.36363636363636365,
        "averageDamageDealt": 2.5,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+demon",
        "kind": "friendly-adjacent",
        "label": "arcane allie + demon",
        "count": 22,
        "wins": 22,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 0.3181818181818182,
        "averageDamageDealt": 4.909090909090909,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->arcane",
        "kind": "family-chain",
        "label": "demon -> arcane",
        "count": 22,
        "wins": 17,
        "losses": 5,
        "draws": 0,
        "winRate": 0.7727272727272727,
        "averageFlips": 0.7272727272727273,
        "averageDamageDealt": 2.727272727272727,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 22,
        "wins": 16,
        "losses": 6,
        "draws": 0,
        "winRate": 0.7272727272727273,
        "averageFlips": 0.18181818181818182,
        "averageDamageDealt": 0.6363636363636364,
        "averageEffectAmount": 1.0909090909090908,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+arcane",
        "kind": "friendly-adjacent",
        "label": "automaton allie + arcane",
        "count": 21,
        "wins": 21,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 0.09523809523809523,
        "averageDamageDealt": 5.095238095238095,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 71,
        "id": "card-pact-sprite-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Lutin a pacte sous-performe",
        "detail": "54 plays, 57% win, net PV 1.06.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 71,
        "id": "card-reward-uncommon-06-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 06 sous-performe",
        "detail": "13 plays, 46% win, net PV 0.54.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 42,
        "id": "card-sapling-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Floramie toxique sous-performe",
        "detail": "20 plays, 60% win, net PV 1.35.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 26,
        "id": "card-gear-monk-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Moine engrene sous-performe",
        "detail": "17 plays, 59% win, net PV 0.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 35,
        "id": "card-reward-rare-05-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Fusion sylvestre est ignoree par les bots",
        "detail": "35 offres, 11% selection, 100% win quand jouee, role sans role.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 519,
        "id": "family-demon-buff",
        "severity": "watch",
        "action": "verify",
        "title": "demon manque d'attraction",
        "detail": "519 offres, 50% selection, 65% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 361,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "361 occurrences, 88% win, 0.31 flips, 1.84 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 338,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "338 occurrences, 90% win, 0.21 flips, 3.63 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 209,
        "id": "family-automaton-buff",
        "severity": "watch",
        "action": "verify",
        "title": "automaton manque d'attraction",
        "detail": "209 offres, 48% selection, 62% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 174,
        "id": "rarity-uncommon-buff",
        "severity": "watch",
        "action": "verify",
        "title": "uncommon manque d'attraction",
        "detail": "174 offres, 29% selection, 58% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 172,
        "id": "family-familiar-buff",
        "severity": "watch",
        "action": "verify",
        "title": "familiar manque d'attraction",
        "detail": "172 offres, 41% selection, 68% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 66,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "66 occurrences, 82% win, 0.06 flips, 5.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 48,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "48 offres, 17% selection, 88% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 48,
        "title": "demon -> demon ressort comme combo",
        "detail": "48 occurrences, 56% win, 0.67 flips, 3.29 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 35,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "35 occurrences, 69% win, 1.17 flips, 2.23 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 34,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "34 occurrences, 62% win, 0.94 flips, 1.91 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 33,
        "id": "role-engine-buff",
        "severity": "watch",
        "action": "verify",
        "title": "engine manque d'attraction",
        "detail": "33 offres, 33% selection, 27% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 31,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "31 offres, 16% selection, 80% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-widow-knight-nerf",
      "severity": "problem",
      "title": "Chevalier veuf tire trop de valeur",
      "detail": "327 plays, 69% win, 0.29 flips/play, net PV 1.29. Confiance high, echantillon 918.",
      "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
    },
    {
      "id": "diagnostic-family-revenant-nerf",
      "severity": "problem",
      "title": "revenant domine l'echantillon",
      "detail": "1416 plays, 70% win, net PV 0.61. Confiance high, echantillon 2839.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 12 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (58%). Peu de flips par tour (0.18).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-combo-effect:moth-ghost:boost-self",
      "severity": "watch",
      "title": "Fantome phalene -> boost-self ressort comme combo",
      "detail": "306 occurrences, 75% win, 0.18 flips, 0.60 degats. Confiance high, echantillon 306.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:moth-ghost:draw-next-turn",
      "severity": "watch",
      "title": "Fantome phalene -> draw-next-turn ressort comme combo",
      "detail": "289 occurrences, 75% win, 0.16 flips, 0.54 degats. Confiance high, echantillon 289.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-adventure-card-pact-sprite-buff",
      "severity": "watch",
      "title": "Run complet a confirmer: Lutin a pacte sous-performe",
      "detail": "54 plays, 57% win, net PV 1.06. Echantillon exploratoire: moins de 8 runs par modele.",
      "recommendation": "Attendre un rapport standard ou profond avant de modifier cette carte ou cette famille."
    },
    {
      "id": "diagnostic-adventure-card-reward-uncommon-06-buff",
      "severity": "watch",
      "title": "Run complet a confirmer: Carte inhabituelle 06 sous-performe",
      "detail": "13 plays, 46% win, net PV 0.54. Echantillon exploratoire: moins de 8 runs par modele.",
      "recommendation": "Attendre un rapport standard ou profond avant de modifier cette carte ou cette famille."
    },
    {
      "id": "diagnostic-adventure-card-sapling-buff",
      "severity": "watch",
      "title": "Run complet a confirmer: Floramie toxique sous-performe",
      "detail": "20 plays, 60% win, net PV 1.35. Echantillon exploratoire: moins de 8 runs par modele.",
      "recommendation": "Attendre un rapport standard ou profond avant de modifier cette carte ou cette famille."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260603-110942",
        "generatedAt": "2026-06-03T11:09:42.273Z",
        "rulesetVersion": "v7-2026-06-03-arcane-core-payoff",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.4348697394789579,
          "human": 0.502470007057163,
          "revenant": 0.6963276836158192,
          "familiar": 0.6027201145311382,
          "automaton": 0.445635528330781,
          "demon": 0.5947302383939774
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.25,
          "automaton-vs-human": 0.25,
          "automaton-vs-revenant": 0.25,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.25,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.625,
          "automaton-vs-familiar": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 1,
          "expert": 0.75,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "overperformer",
            "winRateWhenPlayed": 0.691131498470948
          }
        ]
      }
    ],
    "signals": []
  }
};
