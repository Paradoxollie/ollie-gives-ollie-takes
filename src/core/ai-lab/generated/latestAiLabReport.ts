import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260620-175658",
  "generatedAt": "2026-06-20T17:56:58.281Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 211,
    "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
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
      "wins": 1,
      "losses": 23,
      "draws": 0,
      "winRate": 0.041666666666666664,
      "averageHpEdge": -21.5
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 28,
      "losses": 20,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 6.395833333333333
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 23,
      "losses": 25,
      "draws": 0,
      "winRate": 0.4791666666666667,
      "averageHpEdge": -0.125
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 32,
      "losses": 16,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 4.479166666666667
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
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 31.75,
        "rounds": 3.4166666666666665,
        "flipsPerMatch": 7.833333333333333,
        "flipsPerTurn": 0.24671916010498687,
        "reshuffles": 4.833333333333333,
        "deadTurns": 1.1666666666666667,
        "finalHpDifference": 11.916666666666666
      },
      "deadTurnFrequency": 0.03674540682414698,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a confirmer (67%)."
      ]
    }
  ],
  "starterFamilyMatchups": [
    {
      "id": "arcane-vs-revenant",
      "leftFamily": "arcane",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 8,
      "rightWins": 0,
      "draws": 0,
      "leftWinRate": 1,
      "rightWinRate": 0
    },
    {
      "id": "demon-vs-human",
      "leftFamily": "demon",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 8,
      "rightWins": 0,
      "draws": 0,
      "leftWinRate": 1,
      "rightWinRate": 0
    },
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
      "id": "arcane-vs-human",
      "leftFamily": "arcane",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 2,
      "rightWins": 6,
      "draws": 0,
      "leftWinRate": 0.25,
      "rightWinRate": 0.75
    },
    {
      "id": "automaton-vs-familiar",
      "leftFamily": "automaton",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
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
      "id": "automaton-vs-demon",
      "leftFamily": "automaton",
      "rightFamily": "demon",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "demon-vs-revenant",
      "leftFamily": "demon",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "familiar-vs-human",
      "leftFamily": "familiar",
      "rightFamily": "human",
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
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
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
      "id": "automaton-vs-human",
      "leftFamily": "automaton",
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
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "enemy": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5416666666666666
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 24,
          "wins": 1,
          "losses": 23,
          "draws": 0,
          "winRate": 0.041666666666666664,
          "averageHpEdge": -21.5
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 23,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9583333333333334,
          "averageHpEdge": 21.5
        }
      ],
      "averages": {
        "turns": 18.958333333333332,
        "rounds": 2.0833333333333335,
        "flipsPerMatch": 8.416666666666666,
        "flipsPerTurn": 0.44395604395604393,
        "reshuffles": 2.1666666666666665,
        "deadTurns": 0.4583333333333333,
        "finalHpDifference": 22.25
      },
      "deadTurnFrequency": 0.024175824175824177
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
          "wins": 5,
          "winRate": 0.4166666666666667
        },
        "enemy": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.4583333333333333
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 5,
          "losses": 19,
          "draws": 0,
          "winRate": 0.20833333333333334,
          "averageHpEdge": -8.708333333333334
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 8.708333333333334
        }
      ],
      "averages": {
        "turns": 30.583333333333332,
        "rounds": 3.1666666666666665,
        "flipsPerMatch": 8.333333333333334,
        "flipsPerTurn": 0.2724795640326976,
        "reshuffles": 4.291666666666667,
        "deadTurns": 2.4583333333333335,
        "finalHpDifference": 15.791666666666666
      },
      "deadTurnFrequency": 0.08038147138964577
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
          "wins": 5,
          "winRate": 0.4166666666666667
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 24,
          "wins": 4,
          "losses": 20,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -8.958333333333334
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 20,
          "losses": 4,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 8.958333333333334
        }
      ],
      "averages": {
        "turns": 29.041666666666668,
        "rounds": 3.1666666666666665,
        "flipsPerMatch": 6.416666666666667,
        "flipsPerTurn": 0.22094691535150646,
        "reshuffles": 4.333333333333333,
        "deadTurns": 1.125,
        "finalHpDifference": 14.041666666666666
      },
      "deadTurnFrequency": 0.03873744619799139
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
          "wins": 6,
          "winRate": 0.5
        },
        "enemy": {
          "games": 12,
          "wins": 4,
          "winRate": 0.3333333333333333
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
        "turns": 32.583333333333336,
        "rounds": 3.5,
        "flipsPerMatch": 6.5,
        "flipsPerTurn": 0.19948849104859334,
        "reshuffles": 5,
        "deadTurns": 1.25,
        "finalHpDifference": 13.75
      },
      "deadTurnFrequency": 0.03836317135549872
    }
  ],
  "adventureSummaries": [
    {
      "modelId": "beginner",
      "runs": 8,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.125,
      "averageLocationsCleared": 3.25,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 22.5,
      "averageCombatFlips": 6.5625,
      "averageDeadTurns": 4.5,
      "averageReshuffles": 3.1875,
      "averageRewardsClaimed": 1.625,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 0,
      "averageFusions": 0.625,
      "familyPickRates": {
        "familiar": 0.125,
        "demon": 0.25,
        "human": 0.375,
        "automaton": 0.25
      },
      "nodeMix": {
        "combat": 0.4444444444444444,
        "elite": 0.1111111111111111,
        "shop": 0.18518518518518517,
        "chest": 0.18518518518518517,
        "rest": 0.037037037037037035,
        "boss": 0.037037037037037035
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "opportunist",
      "runs": 8,
      "victories": 0,
      "bossReached": 2,
      "victoryRate": 0,
      "bossReachRate": 0.25,
      "averageLocationsCleared": 5.375,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.7333333333333333,
      "averageCombatTurns": 13.933333333333334,
      "averageCombatFlips": 8.433333333333334,
      "averageDeadTurns": 0.9666666666666667,
      "averageReshuffles": 1.4666666666666666,
      "averageRewardsClaimed": 3,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.25,
      "averageUpgrades": 0.125,
      "averageRemovals": 1.125,
      "averageFusions": 0.375,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.5111111111111111,
        "elite": 0.1111111111111111,
        "shop": 0.06666666666666667,
        "chest": 0.044444444444444446,
        "rest": 0.2222222222222222,
        "boss": 0.044444444444444446
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 0,
      "bossReached": 2,
      "victoryRate": 0,
      "bossReachRate": 0.25,
      "averageLocationsCleared": 4.125,
      "averageFinalDeckSize": 12.5,
      "averageDeckDelta": 0.5,
      "averageCombatWinRate": 0.6,
      "averageCombatTurns": 25,
      "averageCombatFlips": 4.15,
      "averageDeadTurns": 3.75,
      "averageReshuffles": 3,
      "averageRewardsClaimed": 1.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 0.625,
      "averageFusions": 0.75,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4,
        "elite": 0.11428571428571428,
        "shop": 0.17142857142857143,
        "chest": 0.08571428571428572,
        "rest": 0.17142857142857143,
        "boss": 0.05714285714285714
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 0,
      "bossReached": 3,
      "victoryRate": 0,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 6.125,
      "averageFinalDeckSize": 13.75,
      "averageDeckDelta": 1.75,
      "averageCombatWinRate": 0.7037037037037037,
      "averageCombatTurns": 25.74074074074074,
      "averageCombatFlips": 6.851851851851852,
      "averageDeadTurns": 3.814814814814815,
      "averageReshuffles": 3.962962962962963,
      "averageRewardsClaimed": 3.625,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 0.75,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4230769230769231,
        "elite": 0.038461538461538464,
        "shop": 0.11538461538461539,
        "chest": 0.19230769230769232,
        "rest": 0.17307692307692307,
        "boss": 0.057692307692307696
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 3,
      "bossReached": 4,
      "victoryRate": 0.375,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 6.25,
      "averageFinalDeckSize": 13.75,
      "averageDeckDelta": 1.75,
      "averageCombatWinRate": 0.8076923076923077,
      "averageCombatTurns": 24.73076923076923,
      "averageCombatFlips": 5.384615384615385,
      "averageDeadTurns": 3.269230769230769,
      "averageReshuffles": 3.1538461538461537,
      "averageRewardsClaimed": 3.75,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 0.875,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.35185185185185186,
        "elite": 0.05555555555555555,
        "shop": 0.12962962962962962,
        "chest": 0.2222222222222222,
        "rest": 0.16666666666666666,
        "boss": 0.07407407407407407
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
      "seed": 4046138063,
      "selectedFamily": "familiar",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 61,
      "totalCombatFlips": 19,
      "totalDeadTurns": 11,
      "totalReshuffles": 11,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 4,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "moss-dust"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 2,
        "chest": 4,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 12,
        "demon": 1,
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
          "combatTurns": 38,
          "combatFlips": 9,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 23,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 4029360444,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 62,
      "totalCombatFlips": 24,
      "totalDeadTurns": 13,
      "totalReshuffles": 14,
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
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 2,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 11,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 13,
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
      "runIndex": 2,
      "modelId": "beginner",
      "seed": 4079693301,
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
      "totalCombatTurns": 22,
      "totalCombatFlips": 8,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 22,
          "combatFlips": 8,
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
      "modelId": "beginner",
      "seed": 4062915682,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 12,
      "totalDeadTurns": 8,
      "totalReshuffles": 4,
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
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 2,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
        "revenant": 1,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 8,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 3979027587,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 71,
      "totalCombatFlips": 13,
      "totalDeadTurns": 17,
      "totalReshuffles": 12,
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
        "spring-tear"
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
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 2,
        "human": 11,
        "automaton": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 7,
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
      "runIndex": 5,
      "modelId": "beginner",
      "seed": 3962249968,
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
      "totalCombatTurns": 36,
      "totalCombatFlips": 6,
      "totalDeadTurns": 9,
      "totalReshuffles": 2,
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
        "demon": 0,
        "human": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 3,
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
      "runIndex": 6,
      "modelId": "beginner",
      "seed": 4012582825,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 43,
      "totalCombatFlips": 17,
      "totalDeadTurns": 7,
      "totalReshuffles": 4,
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 12,
        "automaton": 1,
        "revenant": 1,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
          "combatFlips": 9,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 8,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 3995805206,
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
      "totalCombatTurns": 21,
      "totalCombatFlips": 6,
      "totalDeadTurns": 3,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 21,
          "combatFlips": 6,
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
      "seed": 551373482,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 95,
      "totalCombatFlips": 60,
      "totalDeadTurns": 6,
      "totalReshuffles": 11,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
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
        "combat": 5,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 12,
        "human": 1,
        "automaton": 1,
        "revenant": 2,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 8,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 10,
          "enemyProfileId": "bastion",
          "enemyBotId": "heuristic",
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 6,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 9,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 15,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 568151101,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 76,
      "totalCombatFlips": 54,
      "totalDeadTurns": 4,
      "totalReshuffles": 4,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 0,
        "rare": 1
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 3,
      "charmsClaimed": [
        "old-bridge-stone",
        "clearing-eye",
        "broken-bell"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 2,
        "shop": 0,
        "chest": 0,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 0,
        "rare": 1
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
          "combatTurns": 11,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 6,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 9,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "clearing-eye",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 10,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "broken-bell",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 517818244,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 39,
      "totalCombatFlips": 21,
      "totalDeadTurns": 3,
      "totalReshuffles": 6,
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
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 14,
        "human": 0,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 5,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 534595863,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 38,
      "totalCombatFlips": 18,
      "totalDeadTurns": 2,
      "totalReshuffles": 3,
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
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 12,
        "human": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 9,
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
      "modelId": "opportunist",
      "seed": 484263006,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 31,
      "totalCombatFlips": 22,
      "totalDeadTurns": 1,
      "totalReshuffles": 4,
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
        "moss-dust"
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
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 2,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 6,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 12,
          "combatFlips": 9,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 7,
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
      "runIndex": 5,
      "modelId": "opportunist",
      "seed": 501040625,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 9,
      "deckDelta": -3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 19,
      "totalCombatFlips": 11,
      "totalDeadTurns": 1,
      "totalReshuffles": 1,
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
      "campVisits": 3,
      "upgrades": 1,
      "removals": 2,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 3,
        "chest": 1,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 9,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 8,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "shop",
          "title": "Echoppe de brindilles",
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 9,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 9,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 6,
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
      "modelId": "opportunist",
      "seed": 450707768,
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
      "totalCombatTurns": 57,
      "totalCombatFlips": 40,
      "totalDeadTurns": 2,
      "totalReshuffles": 9,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
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
        "combat": 3,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 2,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 12,
          "combatFlips": 10,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 16,
          "combatFlips": 14,
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
      "seed": 467485387,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 63,
      "totalCombatFlips": 27,
      "totalDeadTurns": 10,
      "totalReshuffles": 6,
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
        "old-bridge-stone"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 10,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 26,
          "combatFlips": 6,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 1449228843,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 52,
      "totalCombatFlips": 10,
      "totalDeadTurns": 7,
      "totalReshuffles": 5,
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
        "arcane": 13,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 4,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 3,
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
      "seed": 1432451224,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 77,
      "totalCombatFlips": 8,
      "totalDeadTurns": 14,
      "totalReshuffles": 10,
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
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 41,
          "combatFlips": 6,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 2,
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
      "seed": 1482784081,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 104,
      "totalCombatFlips": 13,
      "totalDeadTurns": 23,
      "totalReshuffles": 12,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 41,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 9,
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
      "modelId": "regular",
      "seed": 1466006462,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 50,
      "totalCombatFlips": 6,
      "totalDeadTurns": 5,
      "totalReshuffles": 6,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 31,
          "combatFlips": 3,
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
      "modelId": "regular",
      "seed": 1516339319,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 45,
      "totalCombatFlips": 14,
      "totalDeadTurns": 10,
      "totalReshuffles": 4,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 4,
      "stealRewardsClaimed": 1,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "old-bridge-stone"
      ],
      "campVisits": 4,
      "upgrades": 1,
      "removals": 3,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 4,
        "boss": 1
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
        "common": 9,
        "uncommon": 2,
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
          "combatTurns": 28,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Halte aux fougeres",
          "playerDeckSizeBefore": 10,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "chest",
          "title": "Cache de spores",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
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
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 17,
          "combatFlips": 12,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 1499561700,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 43,
      "totalCombatFlips": 9,
      "totalDeadTurns": 7,
      "totalReshuffles": 4,
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
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 1,
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
        "arcane": 11,
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 7,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 1549894557,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 88,
      "totalCombatFlips": 12,
      "totalDeadTurns": 4,
      "totalReshuffles": 11,
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
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 3,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 0,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 3,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 6,
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
      "runIndex": 7,
      "modelId": "regular",
      "seed": 1533116938,
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
      "totalCombatTurns": 41,
      "totalCombatFlips": 11,
      "totalDeadTurns": 5,
      "totalReshuffles": 8,
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
          "combatTurns": 22,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 8,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 1678463181,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 78,
      "totalCombatFlips": 17,
      "totalDeadTurns": 17,
      "totalReshuffles": 15,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "spring-tear"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 3,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "combatTurns": 9,
          "combatFlips": 7,
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
      "modelId": "expert",
      "seed": 1661685562,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 96,
      "totalCombatFlips": 15,
      "totalDeadTurns": 25,
      "totalReshuffles": 10,
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
        "elite": 0,
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
        "arcane": 13,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 39,
          "combatFlips": 5,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 33,
          "combatFlips": 7,
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
      "modelId": "expert",
      "seed": 1644907943,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 47,
      "totalCombatFlips": 12,
      "totalDeadTurns": 12,
      "totalReshuffles": 8,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 38,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 8,
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
      "modelId": "expert",
      "seed": 1628130324,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 123,
      "totalCombatFlips": 26,
      "totalDeadTurns": 6,
      "totalReshuffles": 31,
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
        "spring-tear"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 12,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 2,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 56,
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 1611352705,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 131,
      "totalCombatFlips": 39,
      "totalDeadTurns": 14,
      "totalReshuffles": 17,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
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
        "combat": 5,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
        "arcane": 10,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
          "combatFlips": 4,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 9,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 31,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 10,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 29,
          "combatFlips": 11,
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
      "runIndex": 5,
      "modelId": "expert",
      "seed": 1594575086,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 92,
      "totalCombatFlips": 36,
      "totalDeadTurns": 7,
      "totalReshuffles": 15,
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
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 3,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 30,
          "combatFlips": 9,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 10,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 22,
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
      "runIndex": 6,
      "modelId": "expert",
      "seed": 1577797467,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 88,
      "totalCombatFlips": 26,
      "totalDeadTurns": 17,
      "totalReshuffles": 7,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
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
        "combat": 3,
        "elite": 0,
        "shop": 2,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
          "combatFlips": 2,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 10,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "chest",
          "title": "Tresor des racines",
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "runIndex": 7,
      "modelId": "expert",
      "seed": 1561019848,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 40,
      "totalCombatFlips": 14,
      "totalDeadTurns": 5,
      "totalReshuffles": 4,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 3,
        "rare": 0
      },
      "stealRewardsOffered": 4,
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
        "chest": 3,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 3,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 13,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 3,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "chest",
          "title": "Tresor des racines",
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
          "rewardOffered": 4,
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
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 8,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 2770911654,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 98,
      "totalCombatFlips": 21,
      "totalDeadTurns": 17,
      "totalReshuffles": 8,
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
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 2,
        "human": 1,
        "automaton": 1,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 2,
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
          "combatTurns": 10,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
          "combatFlips": 2,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "chest",
          "title": "Tresor des racines",
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 3,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 10,
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
      "seed": 2787689273,
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
      "totalCombatTurns": 59,
      "totalCombatFlips": 20,
      "totalDeadTurns": 12,
      "totalReshuffles": 8,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 3,
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
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 2,
        "chest": 3,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 9,
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
          "combatTurns": 38,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 21,
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
      "runIndex": 2,
      "modelId": "champion",
      "seed": 2737356416,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 38,
      "totalCombatFlips": 8,
      "totalDeadTurns": 2,
      "totalReshuffles": 4,
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
        "chest": 1,
        "rest": 0,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 6,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 2,
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
      "seed": 2754134035,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 2,
      "combatLosses": 0,
      "totalCombatTurns": 41,
      "totalCombatFlips": 11,
      "totalDeadTurns": 6,
      "totalReshuffles": 5,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 4,
        "rare": 0
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
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 0,
        "chest": 4,
        "rest": 3,
        "boss": 1
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
        "common": 10,
        "uncommon": 4,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 8,
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
      "runIndex": 4,
      "modelId": "champion",
      "seed": 2838022130,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 185,
      "totalCombatFlips": 29,
      "totalDeadTurns": 25,
      "totalReshuffles": 30,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
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
        "combat": 5,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 14,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
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
          "combatTurns": 37,
          "combatFlips": 5,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 3,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 33,
          "combatFlips": 7,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 30,
          "combatFlips": 2,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "siteAction": "camp-remove"
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
          "combatTurns": 45,
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
      "runIndex": 5,
      "modelId": "champion",
      "seed": 2854799749,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 41,
      "totalCombatFlips": 7,
      "totalDeadTurns": 5,
      "totalReshuffles": 4,
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
        "moss-dust"
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 2,
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
      "runIndex": 6,
      "modelId": "champion",
      "seed": 2804466892,
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
      "totalCombatTurns": 38,
      "totalCombatFlips": 11,
      "totalDeadTurns": 2,
      "totalReshuffles": 4,
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
        "old-bridge-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 2,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 28,
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
      "runIndex": 7,
      "modelId": "champion",
      "seed": 2821244511,
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
      "totalCombatTurns": 143,
      "totalCombatFlips": 33,
      "totalDeadTurns": 16,
      "totalReshuffles": 19,
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
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 3,
        "chest": 1,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 11,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 7,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 3,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 8,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
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
          "combatTurns": 21,
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
    }
  ],
  "diagnostics": {
    "baselineWinRate": 0.5,
    "cardAnalytics": [
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
        "offered": 408,
        "played": 210,
        "ignored": 353,
        "selectionRate": 0.5147058823529411,
        "wins": 144,
        "losses": 66,
        "draws": 0,
        "winRateWhenPlayed": 0.6857142857142857,
        "averageFlips": 0.8333333333333334,
        "failedImpactRate": 0.13366336633663367,
        "averageFlipMargin": 2.0742857142857143,
        "averageEffectAmount": 0.9619047619047619,
        "averageDamageDealt": 1.1142857142857143,
        "averageDamageTaken": 0.29523809523809524,
        "averageNetDamage": 0.819047619047619,
        "lethalMoves": 9,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 100,
            "winRate": 0.76
          },
          {
            "modelId": "expert",
            "played": 43,
            "winRate": 0.7674418604651163
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.59375
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.7619047619047619
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
            "played": 210,
            "winRate": 0.6857142857142857
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
        "offered": 592,
        "played": 408,
        "ignored": 420,
        "selectionRate": 0.6891891891891891,
        "wins": 221,
        "losses": 187,
        "draws": 0,
        "winRateWhenPlayed": 0.5416666666666666,
        "averageFlips": 0.20588235294117646,
        "failedImpactRate": 0.6514522821576764,
        "averageFlipMargin": 1.75,
        "averageEffectAmount": 3.3651960784313726,
        "averageDamageDealt": 0.058823529411764705,
        "averageDamageTaken": 0.029411764705882353,
        "averageNetDamage": 0.029411764705882353,
        "lethalMoves": 3,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 184,
            "winRate": 0.44565217391304346
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.8235294117647058
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.38961038961038963
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.7647058823529411
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
            "played": 408,
            "winRate": 0.5416666666666666
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
        "offered": 496,
        "played": 407,
        "ignored": 383,
        "selectionRate": 0.8205645161290323,
        "wins": 221,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.542997542997543,
        "averageFlips": 0.2113022113022113,
        "failedImpactRate": 0.4228187919463087,
        "averageFlipMargin": 1.6627906976744187,
        "averageEffectAmount": 4.425061425061425,
        "averageDamageDealt": 0.08353808353808354,
        "averageDamageTaken": 0.029484029484029485,
        "averageNetDamage": 0.05405405405405405,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 186,
            "winRate": 0.44623655913978494
          },
          {
            "modelId": "expert",
            "played": 84,
            "winRate": 0.8214285714285714
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.4166666666666667
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.7647058823529411
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
            "played": 407,
            "winRate": 0.542997542997543
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
        "offered": 481,
        "played": 391,
        "ignored": 369,
        "selectionRate": 0.8128898128898129,
        "wins": 232,
        "losses": 159,
        "draws": 0,
        "winRateWhenPlayed": 0.5933503836317136,
        "averageFlips": 0.33248081841432225,
        "failedImpactRate": 0.3867924528301887,
        "averageFlipMargin": 2.1923076923076925,
        "averageEffectAmount": 4.263427109974424,
        "averageDamageDealt": 0.22506393861892582,
        "averageDamageTaken": 0.07161125319693094,
        "averageNetDamage": 0.15345268542199486,
        "lethalMoves": 7,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 171,
            "winRate": 0.543859649122807
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.7195121951219512
          },
          {
            "modelId": "opportunist",
            "played": 81,
            "winRate": 0.6419753086419753
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.6
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.3181818181818182
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 391,
            "winRate": 0.5933503836317136
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
        "offered": 539,
        "played": 391,
        "ignored": 393,
        "selectionRate": 0.725417439703154,
        "wins": 191,
        "losses": 200,
        "draws": 0,
        "winRateWhenPlayed": 0.4884910485933504,
        "averageFlips": 0.26342710997442453,
        "failedImpactRate": 0.5462555066079295,
        "averageFlipMargin": 1.7572815533980584,
        "averageEffectAmount": 4.567774936061381,
        "averageDamageDealt": 0.0741687979539642,
        "averageDamageTaken": 0.05115089514066496,
        "averageNetDamage": 0.023017902813299233,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 166,
            "winRate": 0.5240963855421686
          },
          {
            "modelId": "expert",
            "played": 92,
            "winRate": 0.5434782608695652
          },
          {
            "modelId": "opportunist",
            "played": 68,
            "winRate": 0.6617647058823529
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.18
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
            "played": 391,
            "winRate": 0.4884910485933504
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
        "offered": 615,
        "played": 389,
        "ignored": 489,
        "selectionRate": 0.6325203252032521,
        "wins": 196,
        "losses": 193,
        "draws": 0,
        "winRateWhenPlayed": 0.5038560411311054,
        "averageFlips": 0.16966580976863754,
        "failedImpactRate": 0.6353591160220995,
        "averageFlipMargin": 1.4545454545454546,
        "averageEffectAmount": 3.9125964010282774,
        "averageDamageDealt": 0.2442159383033419,
        "averageDamageTaken": 0.10796915167095116,
        "averageNetDamage": 0.13624678663239076,
        "lethalMoves": 6,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 174,
            "winRate": 0.40229885057471265
          },
          {
            "modelId": "expert",
            "played": 80,
            "winRate": 0.8125
          },
          {
            "modelId": "opportunist",
            "played": 74,
            "winRate": 0.33783783783783783
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.75
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
            "played": 389,
            "winRate": 0.5038560411311054
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
        "offered": 510,
        "played": 386,
        "ignored": 367,
        "selectionRate": 0.7568627450980392,
        "wins": 185,
        "losses": 201,
        "draws": 0,
        "winRateWhenPlayed": 0.4792746113989637,
        "averageFlips": 0.19948186528497408,
        "failedImpactRate": 0.4652777777777778,
        "averageFlipMargin": 2.103896103896104,
        "averageEffectAmount": 5.7020725388601035,
        "averageDamageDealt": 0.21243523316062177,
        "averageDamageTaken": 0.10880829015544041,
        "averageNetDamage": 0.10362694300518135,
        "lethalMoves": 3,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.515527950310559
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "opportunist",
            "played": 68,
            "winRate": 0.6470588235294118
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.18
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
            "played": 386,
            "winRate": 0.4792746113989637
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
        "offered": 531,
        "played": 377,
        "ignored": 429,
        "selectionRate": 0.7099811676082862,
        "wins": 213,
        "losses": 164,
        "draws": 0,
        "winRateWhenPlayed": 0.5649867374005305,
        "averageFlips": 0.29442970822281167,
        "failedImpactRate": 0.445,
        "averageFlipMargin": 2.126126126126126,
        "averageEffectAmount": 3.594164456233422,
        "averageDamageDealt": 0.20689655172413793,
        "averageDamageTaken": 0.04774535809018567,
        "averageNetDamage": 0.15915119363395225,
        "lethalMoves": 5,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 167,
            "winRate": 0.5389221556886228
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.627906976744186
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.5142857142857142
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.3
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 377,
            "winRate": 0.5649867374005305
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
        "offered": 770,
        "played": 371,
        "ignored": 572,
        "selectionRate": 0.4818181818181818,
        "wins": 212,
        "losses": 159,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.2560646900269542,
        "failedImpactRate": 0.6374045801526718,
        "averageFlipMargin": 2.2842105263157895,
        "averageEffectAmount": 3.288409703504043,
        "averageDamageDealt": 0.4743935309973046,
        "averageDamageTaken": 0.12398921832884097,
        "averageNetDamage": 0.3504043126684636,
        "lethalMoves": 9,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "regular",
            "played": 172,
            "winRate": 0.5348837209302325
          },
          {
            "modelId": "expert",
            "played": 74,
            "winRate": 0.6756756756756757
          },
          {
            "modelId": "opportunist",
            "played": 74,
            "winRate": 0.6351351351351351
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.29411764705882354
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 371,
            "winRate": 0.5714285714285714
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
          "combo-2",
          "connector",
          "draw-next-turn",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 506,
        "played": 364,
        "ignored": 360,
        "selectionRate": 0.7193675889328063,
        "wins": 158,
        "losses": 206,
        "draws": 0,
        "winRateWhenPlayed": 0.4340659340659341,
        "averageFlips": 0.21428571428571427,
        "failedImpactRate": 0.5491329479768786,
        "averageFlipMargin": 1.858974358974359,
        "averageEffectAmount": 3.098901098901099,
        "averageDamageDealt": 0.13186813186813187,
        "averageDamageTaken": 0.03021978021978022,
        "averageNetDamage": 0.10164835164835165,
        "lethalMoves": 3,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 146,
            "winRate": 0.2671232876712329
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.7032967032967034
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.4807692307692308
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.58
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.04
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 364,
            "winRate": 0.4340659340659341
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
        "offered": 548,
        "played": 364,
        "ignored": 403,
        "selectionRate": 0.6642335766423357,
        "wins": 156,
        "losses": 208,
        "draws": 0,
        "winRateWhenPlayed": 0.42857142857142855,
        "averageFlips": 0.26373626373626374,
        "failedImpactRate": 0.5102040816326531,
        "averageFlipMargin": 1.8645833333333333,
        "averageEffectAmount": 3.1785714285714284,
        "averageDamageDealt": 0.15934065934065933,
        "averageDamageTaken": 0.06318681318681318,
        "averageNetDamage": 0.09615384615384615,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 144,
            "winRate": 0.25
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.711340206185567
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.5686274509803921
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.43478260869565216
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.07692307692307693
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 364,
            "winRate": 0.42857142857142855
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
          "apply-poison",
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "anchor",
          "apply-poison",
          "combo-2",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 470,
        "played": 363,
        "ignored": 367,
        "selectionRate": 0.7723404255319148,
        "wins": 225,
        "losses": 138,
        "draws": 0,
        "winRateWhenPlayed": 0.6198347107438017,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.47161572052401746,
        "averageFlipMargin": 2.256198347107438,
        "averageEffectAmount": 3.046831955922865,
        "averageDamageDealt": 0.15426997245179064,
        "averageDamageTaken": 0.0440771349862259,
        "averageNetDamage": 0.11019283746556474,
        "lethalMoves": 2,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 171,
            "winRate": 0.7134502923976608
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.6623376623376623
          },
          {
            "modelId": "opportunist",
            "played": 63,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.41025641025641024
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
            "played": 363,
            "winRate": 0.6198347107438017
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
          "combo-2",
          "draw-next-turn",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 614,
        "played": 362,
        "ignored": 465,
        "selectionRate": 0.5895765472312704,
        "wins": 172,
        "losses": 190,
        "draws": 0,
        "winRateWhenPlayed": 0.47513812154696133,
        "averageFlips": 0.20165745856353592,
        "failedImpactRate": 0.6651376146788991,
        "averageFlipMargin": 1.9315068493150684,
        "averageEffectAmount": 3.2955801104972378,
        "averageDamageDealt": 0.2541436464088398,
        "averageDamageTaken": 0.2154696132596685,
        "averageNetDamage": 0.03867403314917128,
        "lethalMoves": 2,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 143,
            "winRate": 0.3356643356643357
          },
          {
            "modelId": "expert",
            "played": 102,
            "winRate": 0.7156862745098039
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.5490196078431373
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.45652173913043476
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 362,
            "winRate": 0.47513812154696133
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
        "offered": 1058,
        "played": 359,
        "ignored": 878,
        "selectionRate": 0.3393194706994329,
        "wins": 185,
        "losses": 174,
        "draws": 0,
        "winRateWhenPlayed": 0.5153203342618384,
        "averageFlips": 0.2757660167130919,
        "failedImpactRate": 0.7345844504021448,
        "averageFlipMargin": 2.2626262626262625,
        "averageEffectAmount": 3.7298050139275767,
        "averageDamageDealt": 1.3565459610027855,
        "averageDamageTaken": 0.27298050139275765,
        "averageNetDamage": 1.083565459610028,
        "lethalMoves": 20,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 158,
            "winRate": 0.5632911392405063
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "opportunist",
            "played": 61,
            "winRate": 0.6721311475409836
          },
          {
            "modelId": "champion",
            "played": 46,
            "winRate": 0.21739130434782608
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
            "played": 359,
            "winRate": 0.5153203342618384
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
        "offered": 551,
        "played": 353,
        "ignored": 445,
        "selectionRate": 0.6406533575317604,
        "wins": 233,
        "losses": 120,
        "draws": 0,
        "winRateWhenPlayed": 0.660056657223796,
        "averageFlips": 0.45325779036827196,
        "failedImpactRate": 0.39849624060150374,
        "averageFlipMargin": 2.3625,
        "averageEffectAmount": 2.3909348441926346,
        "averageDamageDealt": 0.31444759206798867,
        "averageDamageTaken": 0.07365439093484419,
        "averageNetDamage": 0.24079320113314448,
        "lethalMoves": 4,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 159,
            "winRate": 0.7484276729559748
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.7534246575342466
          },
          {
            "modelId": "opportunist",
            "played": 67,
            "winRate": 0.582089552238806
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.5263157894736842
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
            "played": 353,
            "winRate": 0.660056657223796
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
          "boost-self",
          "gain-mana-next-turn"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-1",
          "combo-2",
          "corner",
          "gain-mana-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 611,
        "played": 352,
        "ignored": 481,
        "selectionRate": 0.5761047463175123,
        "wins": 182,
        "losses": 170,
        "draws": 0,
        "winRateWhenPlayed": 0.5170454545454546,
        "averageFlips": 0.1590909090909091,
        "failedImpactRate": 0.5658914728682171,
        "averageFlipMargin": 2,
        "averageEffectAmount": 5.8835227272727275,
        "averageDamageDealt": 0.2869318181818182,
        "averageDamageTaken": 0.05113636363636364,
        "averageNetDamage": 0.23579545454545453,
        "lethalMoves": 2,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.5161290322580645
          },
          {
            "modelId": "expert",
            "played": 80,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 63,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.27906976744186046
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
            "played": 352,
            "winRate": 0.5170454545454546
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
        "offered": 636,
        "played": 338,
        "ignored": 451,
        "selectionRate": 0.5314465408805031,
        "wins": 202,
        "losses": 136,
        "draws": 0,
        "winRateWhenPlayed": 0.5976331360946746,
        "averageFlips": 0.15384615384615385,
        "failedImpactRate": 0.7333333333333333,
        "averageFlipMargin": 2.1923076923076925,
        "averageEffectAmount": 2.121301775147929,
        "averageDamageDealt": 0.5680473372781065,
        "averageDamageTaken": 0.17159763313609466,
        "averageNetDamage": 0.39644970414201186,
        "lethalMoves": 10,
        "roundClosers": 23,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.6580645161290323
          },
          {
            "modelId": "expert",
            "played": 70,
            "winRate": 0.7428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.4406779661016949
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.5945945945945946
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
            "played": 338,
            "winRate": 0.5976331360946746
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
        "offered": 1227,
        "played": 298,
        "ignored": 1006,
        "selectionRate": 0.24286878565607173,
        "wins": 173,
        "losses": 125,
        "draws": 0,
        "winRateWhenPlayed": 0.5805369127516778,
        "averageFlips": 0.19798657718120805,
        "failedImpactRate": 0.7756653992395437,
        "averageFlipMargin": 1.9152542372881356,
        "averageEffectAmount": 0.7281879194630873,
        "averageDamageDealt": 1.738255033557047,
        "averageDamageTaken": 0.761744966442953,
        "averageNetDamage": 0.976510067114094,
        "lethalMoves": 23,
        "roundClosers": 80,
        "byModel": [
          {
            "modelId": "regular",
            "played": 118,
            "winRate": 0.5423728813559322
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.7333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.6341463414634146
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
            "played": 298,
            "winRate": 0.5805369127516778
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
          "combo-2",
          "deal-damage",
          "flip-1",
          "gain-shield",
          "hybrid-demon",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 1096,
        "played": 289,
        "ignored": 953,
        "selectionRate": 0.2636861313868613,
        "wins": 135,
        "losses": 154,
        "draws": 0,
        "winRateWhenPlayed": 0.4671280276816609,
        "averageFlips": 0.27335640138408307,
        "failedImpactRate": 0.7331081081081081,
        "averageFlipMargin": 2.0253164556962027,
        "averageEffectAmount": 1.0588235294117647,
        "averageDamageDealt": 1.4567474048442905,
        "averageDamageTaken": 0.7093425605536332,
        "averageNetDamage": 0.7474048442906573,
        "lethalMoves": 12,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 111,
            "winRate": 0.2972972972972973
          },
          {
            "modelId": "expert",
            "played": 80,
            "winRate": 0.725
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.5476190476190477
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.5263157894736842
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.05555555555555555
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 289,
            "winRate": 0.4671280276816609
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
        "offered": 973,
        "played": 280,
        "ignored": 804,
        "selectionRate": 0.28776978417266186,
        "wins": 151,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5392857142857143,
        "averageFlips": 0.19285714285714287,
        "failedImpactRate": 0.784,
        "averageFlipMargin": 2.388888888888889,
        "averageEffectAmount": 1.2464285714285714,
        "averageDamageDealt": 0.9607142857142857,
        "averageDamageTaken": 0.7964285714285714,
        "averageNetDamage": 0.16428571428571437,
        "lethalMoves": 9,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 115,
            "winRate": 0.5130434782608696
          },
          {
            "modelId": "expert",
            "played": 67,
            "winRate": 0.6119402985074627
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.6346153846153846
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.4583333333333333
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.3181818181818182
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 280,
            "winRate": 0.5392857142857143
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
        "offered": 863,
        "played": 279,
        "ignored": 728,
        "selectionRate": 0.32329084588644263,
        "wins": 171,
        "losses": 108,
        "draws": 0,
        "winRateWhenPlayed": 0.6129032258064516,
        "averageFlips": 0.3835125448028674,
        "failedImpactRate": 0.6094890510948905,
        "averageFlipMargin": 2.5981308411214954,
        "averageEffectAmount": 1.6917562724014337,
        "averageDamageDealt": 0.9139784946236559,
        "averageDamageTaken": 0.24731182795698925,
        "averageNetDamage": 0.6666666666666666,
        "lethalMoves": 10,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 115,
            "winRate": 0.6434782608695652
          },
          {
            "modelId": "expert",
            "played": 60,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.4642857142857143
          },
          {
            "modelId": "champion",
            "played": 31,
            "winRate": 0.6774193548387096
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
            "played": 279,
            "winRate": 0.6129032258064516
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
        "offered": 306,
        "played": 230,
        "ignored": 219,
        "selectionRate": 0.7516339869281046,
        "wins": 129,
        "losses": 101,
        "draws": 0,
        "winRateWhenPlayed": 0.5608695652173913,
        "averageFlips": 0.8347826086956521,
        "failedImpactRate": 0.1111111111111111,
        "averageFlipMargin": 2.1614583333333335,
        "averageEffectAmount": 1.4086956521739131,
        "averageDamageDealt": 1.3565217391304347,
        "averageDamageTaken": 0.17391304347826086,
        "averageNetDamage": 1.1826086956521737,
        "lethalMoves": 9,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 95,
            "winRate": 0.6105263157894737
          },
          {
            "modelId": "expert",
            "played": 50,
            "winRate": 0.64
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.5333333333333333
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.625
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
            "played": 230,
            "winRate": 0.5608695652173913
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
        "offered": 433,
        "played": 203,
        "ignored": 341,
        "selectionRate": 0.46882217090069284,
        "wins": 128,
        "losses": 75,
        "draws": 0,
        "winRateWhenPlayed": 0.6305418719211823,
        "averageFlips": 0.6305418719211823,
        "failedImpactRate": 0.3402061855670103,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.1724137931034482,
        "averageDamageDealt": 1.458128078817734,
        "averageDamageTaken": 0.43349753694581283,
        "averageNetDamage": 1.0246305418719213,
        "lethalMoves": 9,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 95,
            "winRate": 0.6631578947368421
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.75
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
            "played": 203,
            "winRate": 0.6305418719211823
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
        "offered": 469,
        "played": 194,
        "ignored": 353,
        "selectionRate": 0.4136460554371002,
        "wins": 123,
        "losses": 71,
        "draws": 0,
        "winRateWhenPlayed": 0.634020618556701,
        "averageFlips": 0.7783505154639175,
        "failedImpactRate": 0.25980392156862747,
        "averageFlipMargin": 2.4172185430463577,
        "averageEffectAmount": 0.8608247422680413,
        "averageDamageDealt": 1.3814432989690721,
        "averageDamageTaken": 0.6082474226804123,
        "averageNetDamage": 0.7731958762886598,
        "lethalMoves": 11,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 91,
            "winRate": 0.6703296703296703
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.7804878048780488
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.5357142857142857
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.7894736842105263
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
            "played": 194,
            "winRate": 0.634020618556701
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
        "offered": 2930,
        "played": 1502,
        "ignored": 2298,
        "selectionRate": 0.5126279863481229,
        "wins": 811,
        "losses": 691,
        "draws": 0,
        "winRateWhenPlayed": 0.5399467376830892,
        "averageFlips": 0.19640479360852198,
        "averageDamageDealt": 0.44673768308921435,
        "averageNetDamage": 0.25166444740346205,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 408,
            "winRateWhenPlayed": 0.5416666666666666
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 407,
            "winRateWhenPlayed": 0.542997542997543
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 389,
            "winRateWhenPlayed": 0.5038560411311054
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 298,
            "winRateWhenPlayed": 0.5805369127516778
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
        "offered": 2718,
        "played": 1488,
        "ignored": 2119,
        "selectionRate": 0.5474613686534217,
        "wins": 743,
        "losses": 745,
        "draws": 0,
        "winRateWhenPlayed": 0.4993279569892473,
        "averageFlips": 0.22513440860215053,
        "averageDamageDealt": 0.46975806451612906,
        "averageNetDamage": 0.35013440860215056,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 391,
            "winRateWhenPlayed": 0.4884910485933504
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 386,
            "winRateWhenPlayed": 0.4792746113989637
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 359,
            "winRateWhenPlayed": 0.5153203342618384
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 352,
            "winRateWhenPlayed": 0.5170454545454546
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
        "offered": 2755,
        "played": 1419,
        "ignored": 2174,
        "selectionRate": 0.5150635208711434,
        "wins": 808,
        "losses": 611,
        "draws": 0,
        "winRateWhenPlayed": 0.569415081042988,
        "averageFlips": 0.2748414376321353,
        "averageDamageDealt": 0.43058491895701195,
        "averageNetDamage": 0.20859760394644114,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 391,
            "winRateWhenPlayed": 0.5933503836317136
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 377,
            "winRateWhenPlayed": 0.5649867374005305
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 371,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 280,
            "winRateWhenPlayed": 0.5392857142857143
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
        "offered": 2764,
        "played": 1379,
        "ignored": 2181,
        "selectionRate": 0.49891461649782926,
        "wins": 621,
        "losses": 758,
        "draws": 0,
        "winRateWhenPlayed": 0.4503263234227701,
        "averageFlips": 0.23640319071791152,
        "averageDamageDealt": 0.44887599709934733,
        "averageNetDamage": 0.21899927483683826,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 364,
            "winRateWhenPlayed": 0.4340659340659341
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 364,
            "winRateWhenPlayed": 0.42857142857142855
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 362,
            "winRateWhenPlayed": 0.47513812154696133
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 289,
            "winRateWhenPlayed": 0.4671280276816609
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
        "offered": 2520,
        "played": 1333,
        "ignored": 1991,
        "selectionRate": 0.528968253968254,
        "wins": 831,
        "losses": 502,
        "draws": 0,
        "winRateWhenPlayed": 0.6234058514628658,
        "averageFlips": 0.3300825206301575,
        "averageDamageDealt": 0.4606151537884471,
        "averageNetDamage": 0.3338334583645911,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 363,
            "winRateWhenPlayed": 0.6198347107438017
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 353,
            "winRateWhenPlayed": 0.660056657223796
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 338,
            "winRateWhenPlayed": 0.5976331360946746
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 279,
            "winRateWhenPlayed": 0.6129032258064516
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
        "offered": 1616,
        "played": 837,
        "ignored": 1266,
        "selectionRate": 0.5179455445544554,
        "wins": 524,
        "losses": 313,
        "draws": 0,
        "winRateWhenPlayed": 0.6260454002389486,
        "averageFlips": 0.7718040621266428,
        "averageDamageDealt": 1.3261648745519714,
        "averageNetDamage": 0.958183990442055,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 230,
            "winRateWhenPlayed": 0.5608695652173913
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 210,
            "winRateWhenPlayed": 0.6857142857142857
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 203,
            "winRateWhenPlayed": 0.6305418719211823
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 194,
            "winRateWhenPlayed": 0.634020618556701
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
        "offered": 2861,
        "played": 2127,
        "ignored": 2168,
        "selectionRate": 0.7434463474309682,
        "wins": 1129,
        "losses": 998,
        "draws": 0,
        "winRateWhenPlayed": 0.5307945463093559,
        "averageFlips": 0.3211095439586272,
        "averageDamageDealt": 0.2914903620122238,
        "averageNetDamage": 0.22049835448989186,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 407,
            "winRateWhenPlayed": 0.542997542997543
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 386,
            "winRateWhenPlayed": 0.4792746113989637
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 377,
            "winRateWhenPlayed": 0.5649867374005305
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 364,
            "winRateWhenPlayed": 0.42857142857142855
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 363,
            "winRateWhenPlayed": 0.6198347107438017
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
        "offered": 3077,
        "played": 2117,
        "ignored": 2340,
        "selectionRate": 0.6880077998050049,
        "wins": 1179,
        "losses": 938,
        "draws": 0,
        "winRateWhenPlayed": 0.5569201700519604,
        "averageFlips": 0.3448275862068966,
        "averageDamageDealt": 0.2522437411431271,
        "averageNetDamage": 0.17713745866792635,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 408,
            "winRateWhenPlayed": 0.5416666666666666
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 391,
            "winRateWhenPlayed": 0.5933503836317136
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 391,
            "winRateWhenPlayed": 0.4884910485933504
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 364,
            "winRateWhenPlayed": 0.4340659340659341
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 353,
            "winRateWhenPlayed": 0.660056657223796
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
        "offered": 3942,
        "played": 1947,
        "ignored": 3088,
        "selectionRate": 0.4939117199391172,
        "wins": 1056,
        "losses": 891,
        "draws": 0,
        "winRateWhenPlayed": 0.5423728813559322,
        "averageFlips": 0.2814586543400103,
        "averageDamageDealt": 0.5069337442218799,
        "averageNetDamage": 0.31638418079096053,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 389,
            "winRateWhenPlayed": 0.5038560411311054
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 371,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 362,
            "winRateWhenPlayed": 0.47513812154696133
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 352,
            "winRateWhenPlayed": 0.5170454545454546
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 279,
            "winRateWhenPlayed": 0.6129032258064516
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
        "offered": 5423,
        "played": 1767,
        "ignored": 4433,
        "selectionRate": 0.3258344089987092,
        "wins": 974,
        "losses": 793,
        "draws": 0,
        "winRateWhenPlayed": 0.5512167515563101,
        "averageFlips": 0.266553480475382,
        "averageDamageDealt": 1.2354272778720996,
        "averageNetDamage": 0.7266553480475382,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 359,
            "winRateWhenPlayed": 0.5153203342618384
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 338,
            "winRateWhenPlayed": 0.5976331360946746
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 298,
            "winRateWhenPlayed": 0.5805369127516778
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 289,
            "winRateWhenPlayed": 0.4671280276816609
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 280,
            "winRateWhenPlayed": 0.5392857142857143
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
        "offered": 15303,
        "played": 7958,
        "ignored": 12029,
        "selectionRate": 0.5200287525321833,
        "wins": 4338,
        "losses": 3620,
        "draws": 0,
        "winRateWhenPlayed": 0.5451118371450113,
        "averageFlips": 0.30560442322191506,
        "averageDamageDealt": 0.5433526011560693,
        "averageNetDamage": 0.3448102538326212,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 408,
            "winRateWhenPlayed": 0.5416666666666666
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 407,
            "winRateWhenPlayed": 0.542997542997543
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 391,
            "winRateWhenPlayed": 0.5933503836317136
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 391,
            "winRateWhenPlayed": 0.4884910485933504
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 389,
            "winRateWhenPlayed": 0.5038560411311054
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
        "count": 421,
        "wins": 217,
        "losses": 204,
        "draws": 0,
        "winRate": 0.5154394299287411,
        "averageFlips": 0.19239904988123516,
        "averageDamageDealt": 0.8099762470308789,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 418,
        "wins": 200,
        "losses": 218,
        "draws": 0,
        "winRate": 0.4784688995215311,
        "averageFlips": 0.2631578947368421,
        "averageDamageDealt": 0.8181818181818182,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 403,
        "wins": 172,
        "losses": 231,
        "draws": 0,
        "winRate": 0.4267990074441687,
        "averageFlips": 0.22332506203473945,
        "averageDamageDealt": 0.9354838709677419,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 388,
        "wins": 206,
        "losses": 182,
        "draws": 0,
        "winRate": 0.5309278350515464,
        "averageFlips": 0.23711340206185566,
        "averageDamageDealt": 0.8402061855670103,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 376,
        "wins": 235,
        "losses": 141,
        "draws": 0,
        "winRate": 0.625,
        "averageFlips": 0.12234042553191489,
        "averageDamageDealt": 1.5797872340425532,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 329,
        "wins": 149,
        "losses": 180,
        "draws": 0,
        "winRate": 0.45288753799392095,
        "averageFlips": 0.18541033434650456,
        "averageDamageDealt": 0.23100303951367782,
        "averageEffectAmount": 1.0790273556231003,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 324,
        "wins": 186,
        "losses": 138,
        "draws": 0,
        "winRate": 0.5740740740740741,
        "averageFlips": 0.30864197530864196,
        "averageDamageDealt": 0.9753086419753086,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 323,
        "wins": 172,
        "losses": 151,
        "draws": 0,
        "winRate": 0.5325077399380805,
        "averageFlips": 0.16408668730650156,
        "averageDamageDealt": 0.04953560371517028,
        "averageEffectAmount": 1.0030959752321982,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 322,
        "wins": 171,
        "losses": 151,
        "draws": 0,
        "winRate": 0.531055900621118,
        "averageFlips": 0.16149068322981366,
        "averageDamageDealt": 0.049689440993788817,
        "averageEffectAmount": 1.2732919254658386,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 319,
        "wins": 149,
        "losses": 170,
        "draws": 0,
        "winRate": 0.4670846394984326,
        "averageFlips": 0.2507836990595611,
        "averageDamageDealt": 0.09090909090909091,
        "averageEffectAmount": 1.225705329153605,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 303,
        "wins": 151,
        "losses": 152,
        "draws": 0,
        "winRate": 0.49834983498349833,
        "averageFlips": 0.18811881188118812,
        "averageDamageDealt": 1.6204620462046204,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 300,
        "wins": 175,
        "losses": 125,
        "draws": 0,
        "winRate": 0.5833333333333334,
        "averageFlips": 0.3233333333333333,
        "averageDamageDealt": 0.21333333333333335,
        "averageEffectAmount": 1.27,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 298,
        "wins": 174,
        "losses": 124,
        "draws": 0,
        "winRate": 0.5838926174496645,
        "averageFlips": 0.3187919463087248,
        "averageDamageDealt": 0.21476510067114093,
        "averageEffectAmount": 1.2718120805369129,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 296,
        "wins": 151,
        "losses": 145,
        "draws": 0,
        "winRate": 0.5101351351351351,
        "averageFlips": 0.12837837837837837,
        "averageDamageDealt": 1.8614864864864864,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 295,
        "wins": 163,
        "losses": 132,
        "draws": 0,
        "winRate": 0.5525423728813559,
        "averageFlips": 0.26440677966101694,
        "averageDamageDealt": 0.34576271186440677,
        "averageEffectAmount": 1.7389830508474575,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 288,
        "wins": 122,
        "losses": 166,
        "draws": 0,
        "winRate": 0.4236111111111111,
        "averageFlips": 0.1840277777777778,
        "averageDamageDealt": 0.07291666666666667,
        "averageEffectAmount": 1.0763888888888888,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 286,
        "wins": 161,
        "losses": 125,
        "draws": 0,
        "winRate": 0.5629370629370629,
        "averageFlips": 0.2727272727272727,
        "averageDamageDealt": 0.20279720279720279,
        "averageEffectAmount": 1.1853146853146854,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 285,
        "wins": 165,
        "losses": 120,
        "draws": 0,
        "winRate": 0.5789473684210527,
        "averageFlips": 0.15087719298245614,
        "averageDamageDealt": 1.6210526315789473,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 279,
        "wins": 117,
        "losses": 162,
        "draws": 0,
        "winRate": 0.41935483870967744,
        "averageFlips": 0.23297491039426524,
        "averageDamageDealt": 0.10752688172043011,
        "averageEffectAmount": 1.2329749103942653,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 258,
        "wins": 116,
        "losses": 142,
        "draws": 0,
        "winRate": 0.4496124031007752,
        "averageFlips": 0.20155038759689922,
        "averageDamageDealt": 0.05426356589147287,
        "averageEffectAmount": 1.302325581395349,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 232,
        "wins": 112,
        "losses": 120,
        "draws": 0,
        "winRate": 0.4827586206896552,
        "averageFlips": 0.2543103448275862,
        "averageDamageDealt": 0.008620689655172414,
        "averageEffectAmount": 1.4525862068965518,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 230,
        "wins": 126,
        "losses": 104,
        "draws": 0,
        "winRate": 0.5478260869565217,
        "averageFlips": 0.24347826086956523,
        "averageDamageDealt": 1.4434782608695653,
        "averageEffectAmount": 2.5043478260869567,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 215,
        "wins": 132,
        "losses": 83,
        "draws": 0,
        "winRate": 0.6139534883720931,
        "averageFlips": 0.7581395348837209,
        "averageDamageDealt": 2.0604651162790697,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 200,
        "wins": 145,
        "losses": 55,
        "draws": 0,
        "winRate": 0.725,
        "averageFlips": 0.205,
        "averageDamageDealt": 2.425,
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
        "sampleSize": 408,
        "id": "card-pact-sprite-nerf",
        "severity": "problem",
        "action": "nerf",
        "title": "Lutin a pacte tire trop de valeur",
        "detail": "210 plays, 69% win, 0.83 flips/play, net PV 0.82.",
        "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 296,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "296 occurrences, 51% win, 0.13 flips, 1.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 215,
        "title": "demon -> demon ressort comme combo",
        "detail": "215 occurrences, 61% win, 0.76 flips, 2.06 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 200,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "200 occurrences, 73% win, 0.20 flips, 2.42 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7144741180349489,
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
          "combo-2",
          "deal-damage",
          "flip-1",
          "gain-shield",
          "hybrid-demon",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 89,
        "played": 36,
        "ignored": 71,
        "selectionRate": 0.4044943820224719,
        "wins": 31,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.8611111111111112,
        "averageFlips": 0.16666666666666666,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 5.5,
        "averageEffectAmount": 0.6111111111111112,
        "averageDamageDealt": 1.8611111111111112,
        "averageDamageTaken": 0.19444444444444445,
        "averageNetDamage": 1.6666666666666667,
        "lethalMoves": 5,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.9166666666666666
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 36,
            "winRate": 0.8611111111111112
          }
        ],
        "status": "overperformer",
        "notes": [
          "Surperforme en victoire et impact immediat face a une base de 71%."
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
        "offered": 38,
        "played": 19,
        "ignored": 29,
        "selectionRate": 0.5,
        "wins": 16,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.8421052631578947,
        "averageFlips": 0.5263157894736842,
        "failedImpactRate": 0.4444444444444444,
        "averageFlipMargin": 3.8,
        "averageEffectAmount": 1.736842105263158,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0.8181818181818182
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
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
            "played": 19,
            "winRate": 0.8421052631578947
          }
        ],
        "status": "overperformer",
        "notes": [
          "Surperforme en victoire et impact immediat face a une base de 71%."
        ]
      },
      {
        "cardId": "reward-rare-05",
        "name": "Carte rare 05",
        "family": "revenant",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "enemy-upgrade",
        "sideTotal": 14,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "behind-on-board",
          "combo-3",
          "finisher",
          "rare",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 27,
        "played": 4,
        "ignored": 25,
        "selectionRate": 0.14814814814814814,
        "wins": 2,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0.5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
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
            "played": 4,
            "winRate": 0.5
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "reward-rare-02",
        "name": "Carte rare 02",
        "family": "demon",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "reward",
        "sideTotal": 14,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "combo-3",
          "deal-damage",
          "demon",
          "finisher",
          "hybrid-arcane",
          "rare"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 18,
        "played": 2,
        "ignored": 17,
        "selectionRate": 0.1111111111111111,
        "wins": 0,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0.5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 1,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 1,
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
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "reward-rare-04",
        "name": "Carte rare 04",
        "family": "automaton",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "enemy-upgrade",
        "sideTotal": 14,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "gain-mana-next-turn",
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "combo-3",
          "corner",
          "finisher",
          "gain-mana-next-turn",
          "gain-shield",
          "hybrid-arcane",
          "rare"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 13,
        "played": 2,
        "ignored": 12,
        "selectionRate": 0.15384615384615385,
        "wins": 0,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1,
        "averageDamageDealt": 3,
        "averageDamageTaken": 5,
        "averageNetDamage": -2,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 1,
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
            "played": 2,
            "winRate": 0
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "reward-uncommon-02",
        "name": "Carte inhabituelle 02 +",
        "family": "demon",
        "rarity": "uncommon",
        "role": "attacker",
        "sourceType": "upgrade",
        "sideTotal": 14,
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
        "offered": 26,
        "played": 12,
        "ignored": 23,
        "selectionRate": 0.46153846153846156,
        "wins": 6,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 3.25,
        "averageEffectAmount": 1.1666666666666667,
        "averageDamageDealt": 1.75,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.75,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 12,
            "winRate": 0.5
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 71%."
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
          "gain-mana-next-turn",
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "combo-2",
          "corner",
          "gain-mana-next-turn",
          "gain-shield",
          "hybrid-arcane",
          "stabilizer",
          "uncommon"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 14,
        "played": 10,
        "ignored": 10,
        "selectionRate": 0.7142857142857143,
        "wins": 3,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.3,
        "averageFlips": 0.1,
        "failedImpactRate": 0.8,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.7,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.125
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
            "played": 10,
            "winRate": 0.3
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 71%."
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
        "offered": 711,
        "played": 539,
        "ignored": 546,
        "selectionRate": 0.7580872011251758,
        "wins": 380,
        "losses": 159,
        "draws": 0,
        "winRateWhenPlayed": 0.7050092764378478,
        "averageFlips": 0.3042671614100185,
        "failedImpactRate": 0.4121863799283154,
        "averageFlipMargin": 2.268292682926829,
        "averageEffectAmount": 3.6252319109461966,
        "averageDamageDealt": 0.28385899814471244,
        "averageDamageTaken": 0.09647495361781076,
        "averageNetDamage": 0.18738404452690166,
        "lethalMoves": 8,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "champion",
            "played": 199,
            "winRate": 0.7839195979899497
          },
          {
            "modelId": "expert",
            "played": 191,
            "winRate": 0.7225130890052356
          },
          {
            "modelId": "regular",
            "played": 141,
            "winRate": 0.5886524822695035
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.375
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 539,
            "winRate": 0.7050092764378478
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
        "offered": 726,
        "played": 501,
        "ignored": 542,
        "selectionRate": 0.6900826446280992,
        "wins": 360,
        "losses": 141,
        "draws": 0,
        "winRateWhenPlayed": 0.718562874251497,
        "averageFlips": 0.3373253493013972,
        "failedImpactRate": 0.4751552795031056,
        "averageFlipMargin": 2.467455621301775,
        "averageEffectAmount": 2.9161676646706587,
        "averageDamageDealt": 0.2714570858283433,
        "averageDamageTaken": 0.08183632734530938,
        "averageNetDamage": 0.18962075848303395,
        "lethalMoves": 0,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "champion",
            "played": 186,
            "winRate": 0.7741935483870968
          },
          {
            "modelId": "expert",
            "played": 182,
            "winRate": 0.7362637362637363
          },
          {
            "modelId": "regular",
            "played": 133,
            "winRate": 0.6165413533834586
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 501,
            "winRate": 0.718562874251497
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
        "offered": 821,
        "played": 463,
        "ignored": 658,
        "selectionRate": 0.5639464068209501,
        "wins": 334,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.7213822894168467,
        "averageFlips": 0.30885529157667385,
        "failedImpactRate": 0.428,
        "averageFlipMargin": 2.5384615384615383,
        "averageEffectAmount": 3.198704103671706,
        "averageDamageDealt": 0.36285097192224625,
        "averageDamageTaken": 0.11447084233261338,
        "averageNetDamage": 0.24838012958963285,
        "lethalMoves": 4,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "expert",
            "played": 170,
            "winRate": 0.7294117647058823
          },
          {
            "modelId": "champion",
            "played": 161,
            "winRate": 0.8012422360248447
          },
          {
            "modelId": "regular",
            "played": 129,
            "winRate": 0.6201550387596899
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
            "played": 463,
            "winRate": 0.7213822894168467
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
        "offered": 1273,
        "played": 378,
        "ignored": 1021,
        "selectionRate": 0.2969363707776905,
        "wins": 299,
        "losses": 79,
        "draws": 0,
        "winRateWhenPlayed": 0.791005291005291,
        "averageFlips": 0.24338624338624337,
        "failedImpactRate": 0.6805555555555556,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 0.6481481481481481,
        "averageDamageDealt": 2.9788359788359786,
        "averageDamageTaken": 0.5476190476190477,
        "averageNetDamage": 2.431216931216931,
        "lethalMoves": 46,
        "roundClosers": 109,
        "byModel": [
          {
            "modelId": "expert",
            "played": 130,
            "winRate": 0.7769230769230769
          },
          {
            "modelId": "champion",
            "played": 129,
            "winRate": 0.875968992248062
          },
          {
            "modelId": "regular",
            "played": 105,
            "winRate": 0.7333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 14,
            "winRate": 0.5714285714285714
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 378,
            "winRate": 0.791005291005291
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
        "offered": 292,
        "played": 166,
        "ignored": 203,
        "selectionRate": 0.5684931506849316,
        "wins": 118,
        "losses": 48,
        "draws": 0,
        "winRateWhenPlayed": 0.7108433734939759,
        "averageFlips": 0.6807228915662651,
        "failedImpactRate": 0.25165562913907286,
        "averageFlipMargin": 2.424778761061947,
        "averageEffectAmount": 1.3975903614457832,
        "averageDamageDealt": 2.3072289156626504,
        "averageDamageTaken": 0.7168674698795181,
        "averageNetDamage": 1.5903614457831323,
        "lethalMoves": 13,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 126,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.6956521739130435
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 0.7
          },
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 166,
            "winRate": 0.7108433734939759
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
        "offered": 219,
        "played": 157,
        "ignored": 165,
        "selectionRate": 0.7168949771689498,
        "wins": 111,
        "losses": 46,
        "draws": 0,
        "winRateWhenPlayed": 0.7070063694267515,
        "averageFlips": 0.7515923566878981,
        "failedImpactRate": 0.11940298507462686,
        "averageFlipMargin": 2.305084745762712,
        "averageEffectAmount": 1.515923566878981,
        "averageDamageDealt": 1.2738853503184713,
        "averageDamageTaken": 0.08280254777070063,
        "averageNetDamage": 1.1910828025477707,
        "lethalMoves": 5,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.7297297297297297
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.6190476190476191
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.8888888888888888
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 157,
            "winRate": 0.7070063694267515
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
        "offered": 204,
        "played": 123,
        "ignored": 167,
        "selectionRate": 0.6029411764705882,
        "wins": 88,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.7154471544715447,
        "averageFlips": 0.8536585365853658,
        "failedImpactRate": 0.14634146341463414,
        "averageFlipMargin": 2.3047619047619046,
        "averageEffectAmount": 1.1788617886178863,
        "averageDamageDealt": 1.5772357723577235,
        "averageDamageTaken": 0.3008130081300813,
        "averageNetDamage": 1.2764227642276422,
        "lethalMoves": 6,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.76
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 123,
            "winRate": 0.7154471544715447
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
        "offered": 283,
        "played": 91,
        "ignored": 236,
        "selectionRate": 0.3215547703180212,
        "wins": 70,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.7692307692307693,
        "averageFlips": 0.6703296703296703,
        "failedImpactRate": 0.3068181818181818,
        "averageFlipMargin": 2.180327868852459,
        "averageEffectAmount": 1.1428571428571428,
        "averageDamageDealt": 5.626373626373627,
        "averageDamageTaken": 1.1868131868131868,
        "averageNetDamage": 4.43956043956044,
        "lethalMoves": 19,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.7922077922077922
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.6153846153846154
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
            "played": 91,
            "winRate": 0.7692307692307693
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
          "apply-poison",
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "anchor",
          "apply-poison",
          "combo-2",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 133,
        "played": 69,
        "ignored": 110,
        "selectionRate": 0.518796992481203,
        "wins": 46,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.391304347826087,
        "failedImpactRate": 0.37209302325581395,
        "averageFlipMargin": 2.2962962962962963,
        "averageEffectAmount": 2.289855072463768,
        "averageDamageDealt": 0.6956521739130435,
        "averageDamageTaken": 0.07246376811594203,
        "averageNetDamage": 0.6231884057971014,
        "lethalMoves": 5,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "expert",
            "played": 27,
            "winRate": 0.7407407407407407
          },
          {
            "modelId": "opportunist",
            "played": 16,
            "winRate": 0.625
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.8
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 69,
            "winRate": 0.6666666666666666
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
        "offered": 191,
        "played": 55,
        "ignored": 160,
        "selectionRate": 0.2879581151832461,
        "wins": 33,
        "losses": 22,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.2727272727272727,
        "failedImpactRate": 0.6590909090909091,
        "averageFlipMargin": 2.8666666666666667,
        "averageEffectAmount": 0.7818181818181819,
        "averageDamageDealt": 2,
        "averageDamageTaken": 0.7818181818181819,
        "averageNetDamage": 1.2181818181818183,
        "lethalMoves": 4,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0.5806451612903226
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 0.6666666666666666
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
            "played": 55,
            "winRate": 0.6
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
        "offered": 95,
        "played": 47,
        "ignored": 75,
        "selectionRate": 0.49473684210526314,
        "wins": 29,
        "losses": 18,
        "draws": 0,
        "winRateWhenPlayed": 0.6170212765957447,
        "averageFlips": 0.3617021276595745,
        "failedImpactRate": 0.46875,
        "averageFlipMargin": 2.3529411764705883,
        "averageEffectAmount": 2.574468085106383,
        "averageDamageDealt": 0.1276595744680851,
        "averageDamageTaken": 0.0425531914893617,
        "averageNetDamage": 0.08510638297872339,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.6111111111111112
          },
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 47,
            "winRate": 0.6170212765957447
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
        "offered": 95,
        "played": 45,
        "ignored": 75,
        "selectionRate": 0.47368421052631576,
        "wins": 28,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.6222222222222222,
        "averageFlips": 0.5111111111111111,
        "failedImpactRate": 0.39473684210526316,
        "averageFlipMargin": 3.5652173913043477,
        "averageEffectAmount": 1.8,
        "averageDamageDealt": 1.4666666666666666,
        "averageDamageTaken": 0.8,
        "averageNetDamage": 0.6666666666666665,
        "lethalMoves": 3,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 30,
            "winRate": 0.5333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "expert",
            "played": 5,
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
            "played": 45,
            "winRate": 0.6222222222222222
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
        "offered": 68,
        "played": 36,
        "ignored": 50,
        "selectionRate": 0.5294117647058824,
        "wins": 21,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.5833333333333334,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 2.6944444444444446,
        "averageDamageDealt": 1.5833333333333333,
        "averageDamageTaken": 0.6944444444444444,
        "averageNetDamage": 0.8888888888888888,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 30,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 4,
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
            "played": 36,
            "winRate": 0.5833333333333334
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
        "offered": 104,
        "played": 35,
        "ignored": 82,
        "selectionRate": 0.33653846153846156,
        "wins": 33,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.9428571428571428,
        "averageFlips": 0.11428571428571428,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.4857142857142858,
        "averageDamageDealt": 1.0857142857142856,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.0857142857142856,
        "lethalMoves": 4,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "expert",
            "played": 17,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 1
          },
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
            "played": 35,
            "winRate": 0.9428571428571428
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
        "offered": 86,
        "played": 35,
        "ignored": 68,
        "selectionRate": 0.4069767441860465,
        "wins": 27,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.7714285714285715,
        "averageFlips": 0.2,
        "failedImpactRate": 0.6111111111111112,
        "averageFlipMargin": 2.4285714285714284,
        "averageEffectAmount": 3.142857142857143,
        "averageDamageDealt": 0.4,
        "averageDamageTaken": 0.05714285714285714,
        "averageNetDamage": 0.34285714285714286,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.7368421052631579
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "champion",
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
            "played": 35,
            "winRate": 0.7714285714285715
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
        "offered": 99,
        "played": 35,
        "ignored": 81,
        "selectionRate": 0.35353535353535354,
        "wins": 22,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.6285714285714286,
        "averageFlips": 0.17142857142857143,
        "failedImpactRate": 0.7272727272727273,
        "averageFlipMargin": 2.1666666666666665,
        "averageEffectAmount": 2.3142857142857145,
        "averageDamageDealt": 0.8857142857142857,
        "averageDamageTaken": 1.1142857142857143,
        "averageNetDamage": -0.22857142857142865,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.8
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
            "played": 35,
            "winRate": 0.6285714285714286
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
        "offered": 41,
        "played": 26,
        "ignored": 26,
        "selectionRate": 0.6341463414634146,
        "wins": 18,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.6923076923076923,
        "averageFlips": 0.15384615384615385,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1.6923076923076923,
        "averageDamageDealt": 0.11538461538461539,
        "averageDamageTaken": 0.46153846153846156,
        "averageNetDamage": -0.34615384615384615,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.6666666666666666
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
            "played": 26,
            "winRate": 0.6923076923076923
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
          "boost-self",
          "gain-mana-next-turn"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-1",
          "combo-2",
          "corner",
          "gain-mana-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 48,
        "played": 23,
        "ignored": 34,
        "selectionRate": 0.4791666666666667,
        "wins": 14,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.6086956521739131,
        "averageFlips": 0.17391304347826086,
        "failedImpactRate": 0.7777777777777778,
        "averageFlipMargin": 3.5,
        "averageEffectAmount": 3.217391304347826,
        "averageDamageDealt": 0.8260869565217391,
        "averageDamageTaken": 1.6521739130434783,
        "averageNetDamage": -0.8260869565217391,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.5714285714285714
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
            "played": 23,
            "winRate": 0.6086956521739131
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
          "combo-2",
          "draw-next-turn",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 57,
        "played": 21,
        "ignored": 45,
        "selectionRate": 0.3684210526315789,
        "wins": 14,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.631578947368421,
        "averageFlipMargin": 1.1428571428571428,
        "averageEffectAmount": 2.0952380952380953,
        "averageDamageDealt": 0.8571428571428571,
        "averageDamageTaken": 0.14285714285714285,
        "averageNetDamage": 0.7142857142857142,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 20,
            "winRate": 0.7
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 21,
            "winRate": 0.6666666666666666
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
          "gain-mana-next-turn",
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "combo-2",
          "corner",
          "gain-mana-next-turn",
          "gain-shield",
          "hybrid-arcane",
          "payoff",
          "uncommon"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 42,
        "played": 20,
        "ignored": 36,
        "selectionRate": 0.47619047619047616,
        "wins": 16,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6153846153846154,
        "averageFlipMargin": 2.4,
        "averageEffectAmount": 1.95,
        "averageDamageDealt": 0.9,
        "averageDamageTaken": 0.45,
        "averageNetDamage": 0.45,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.8
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
        "offered": 38,
        "played": 17,
        "ignored": 30,
        "selectionRate": 0.4473684210526316,
        "wins": 10,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.5882352941176471,
        "averageFlips": 0.11764705882352941,
        "failedImpactRate": 0.7142857142857143,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 3.2941176470588234,
        "averageDamageDealt": 0.8235294117647058,
        "averageDamageTaken": 0.11764705882352941,
        "averageNetDamage": 0.7058823529411764,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.5882352941176471
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
        "offered": 30,
        "played": 14,
        "ignored": 24,
        "selectionRate": 0.4666666666666667,
        "wins": 8,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.42857142857142855,
        "failedImpactRate": 0.6470588235294118,
        "averageFlipMargin": 2.8333333333333335,
        "averageEffectAmount": 0.6428571428571429,
        "averageDamageDealt": 2.4285714285714284,
        "averageDamageTaken": 0.5714285714285714,
        "averageNetDamage": 1.857142857142857,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.8
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 14,
            "winRate": 0.5714285714285714
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
        "offered": 38,
        "played": 13,
        "ignored": 31,
        "selectionRate": 0.34210526315789475,
        "wins": 10,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.7692307692307693,
        "averageFlips": 0.5384615384615384,
        "failedImpactRate": 0.2222222222222222,
        "averageFlipMargin": 3,
        "averageEffectAmount": 2.1538461538461537,
        "averageDamageDealt": 1.6923076923076923,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.6923076923076923,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.75
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
            "played": 13,
            "winRate": 0.7692307692307693
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "offered": 44,
        "played": 11,
        "ignored": 39,
        "selectionRate": 0.25,
        "wins": 6,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.7272727272727273,
        "failedImpactRate": 0.2,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 1.1818181818181819,
        "averageDamageDealt": 3.090909090909091,
        "averageDamageTaken": 2,
        "averageNetDamage": 1.0909090909090908,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 11,
            "winRate": 0.5454545454545454
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
          "combo-2",
          "connector",
          "draw-next-turn",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 8,
        "played": 8,
        "ignored": 4,
        "selectionRate": 1,
        "wins": 5,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.375,
        "failedImpactRate": 0.4,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.875,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 8,
            "winRate": 0.625
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-common-10",
        "name": "Carte commune 10",
        "family": "automaton",
        "rarity": "common",
        "role": "stabilizer",
        "sourceType": "enemy-upgrade",
        "sideTotal": 11,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "common",
          "corner",
          "gain-shield",
          "stabilizer"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 12,
        "played": 5,
        "ignored": 10,
        "selectionRate": 0.4166666666666667,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0.4,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 4.5,
        "averageEffectAmount": 1.4,
        "averageDamageDealt": 2.6,
        "averageDamageTaken": 2.4,
        "averageNetDamage": 0.20000000000000018,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.4
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
        "cardId": "reward-common-09",
        "name": "Carte commune 09",
        "family": "human",
        "rarity": "common",
        "role": "connector",
        "sourceType": "enemy-upgrade",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "common",
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [
          "line"
        ],
        "offered": 5,
        "played": 4,
        "ignored": 4,
        "selectionRate": 0.8,
        "wins": 3,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 1.5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.75
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
        "cardId": "reward-common-08",
        "name": "Carte commune 08",
        "family": "demon",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "enemy-upgrade",
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
        "offered": 9,
        "played": 2,
        "ignored": 8,
        "selectionRate": 0.2222222222222222,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.5,
        "failedImpactRate": 0,
        "averageFlipMargin": 2,
        "averageEffectAmount": 0.5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
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
        "cardId": "reward-common-04",
        "name": "Carte commune 04",
        "family": "automaton",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "reward",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "common",
          "corner",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 4,
        "played": 2,
        "ignored": 2,
        "selectionRate": 0.5,
        "wins": 0,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.5,
        "failedImpactRate": 0,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
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
            "played": 2,
            "winRate": 0
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
        "offered": 3584,
        "played": 1895,
        "ignored": 2813,
        "selectionRate": 0.5287388392857143,
        "wins": 1380,
        "losses": 515,
        "draws": 0,
        "winRateWhenPlayed": 0.7282321899736148,
        "averageFlips": 0.30448548812664905,
        "averageDamageDealt": 0.8532981530343008,
        "averageNetDamage": 0.6554089709762533,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 539,
            "winRateWhenPlayed": 0.7050092764378478
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 501,
            "winRateWhenPlayed": 0.718562874251497
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 463,
            "winRateWhenPlayed": 0.7213822894168467
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 378,
            "winRateWhenPlayed": 0.791005291005291
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06 +",
            "played": 11,
            "winRateWhenPlayed": 0.5454545454545454
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
        "offered": 1081,
        "played": 567,
        "ignored": 843,
        "selectionRate": 0.5245143385753932,
        "wins": 403,
        "losses": 164,
        "draws": 0,
        "winRateWhenPlayed": 0.7107583774250441,
        "averageFlips": 0.7195767195767195,
        "averageDamageDealt": 2.3703703703703702,
        "averageNetDamage": 1.8677248677248675,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 166,
            "winRateWhenPlayed": 0.7108433734939759
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 157,
            "winRateWhenPlayed": 0.7070063694267515
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 123,
            "winRateWhenPlayed": 0.7154471544715447
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 91,
            "winRateWhenPlayed": 0.7692307692307693
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 14,
            "winRateWhenPlayed": 0.5714285714285714
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
        "offered": 462,
        "played": 175,
        "ignored": 374,
        "selectionRate": 0.3787878787878788,
        "wins": 107,
        "losses": 68,
        "draws": 0,
        "winRateWhenPlayed": 0.6114285714285714,
        "averageFlips": 0.3028571428571429,
        "averageDamageDealt": 1.5085714285714287,
        "averageNetDamage": 0.6914285714285715,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 55,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 45,
            "winRateWhenPlayed": 0.6222222222222222
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 36,
            "winRateWhenPlayed": 0.5833333333333334
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 35,
            "winRateWhenPlayed": 0.6285714285714286
          },
          {
            "cardId": "reward-common-09",
            "name": "Carte commune 09",
            "played": 4,
            "winRateWhenPlayed": 0.75
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
        "offered": 352,
        "played": 161,
        "ignored": 277,
        "selectionRate": 0.45738636363636365,
        "wins": 101,
        "losses": 60,
        "draws": 0,
        "winRateWhenPlayed": 0.6273291925465838,
        "averageFlips": 0.2484472049689441,
        "averageDamageDealt": 0.5590062111801242,
        "averageNetDamage": 0.09316770186335399,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 47,
            "winRateWhenPlayed": 0.6170212765957447
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 35,
            "winRateWhenPlayed": 0.7714285714285715
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 23,
            "winRateWhenPlayed": 0.6086956521739131
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 20,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 17,
            "winRateWhenPlayed": 0.5882352941176471
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
        "offered": 324,
        "played": 139,
        "ignored": 261,
        "selectionRate": 0.42901234567901236,
        "wins": 105,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.7553956834532374,
        "averageFlips": 0.34532374100719426,
        "averageDamageDealt": 0.7769784172661871,
        "averageNetDamage": 0.7410071942446044,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 69,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 35,
            "winRateWhenPlayed": 0.9428571428571428
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 19,
            "winRateWhenPlayed": 0.8421052631578947
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 13,
            "winRateWhenPlayed": 0.7692307692307693
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
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
        "id": "revenant",
        "label": "revenant",
        "offered": 224,
        "played": 96,
        "ignored": 173,
        "selectionRate": 0.42857142857142855,
        "wins": 71,
        "losses": 25,
        "draws": 0,
        "winRateWhenPlayed": 0.7395833333333334,
        "averageFlips": 0.22916666666666666,
        "averageDamageDealt": 0.9166666666666666,
        "averageNetDamage": 0.6875,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 36,
            "winRateWhenPlayed": 0.8611111111111112
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 26,
            "winRateWhenPlayed": 0.6923076923076923
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 21,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 8,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 4,
            "winRateWhenPlayed": 0.5
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
        "offered": 1256,
        "played": 865,
        "ignored": 969,
        "selectionRate": 0.6886942675159236,
        "wins": 604,
        "losses": 261,
        "draws": 0,
        "winRateWhenPlayed": 0.6982658959537572,
        "averageFlips": 0.3988439306358382,
        "averageDamageDealt": 0.5236994219653179,
        "averageNetDamage": 0.3965317919075145,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 529,
            "winRateWhenPlayed": 0.7032136105860114
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 156,
            "winRateWhenPlayed": 0.7115384615384616
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 66,
            "winRateWhenPlayed": 0.696969696969697
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 44,
            "winRateWhenPlayed": 0.6590909090909091
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 44,
            "winRateWhenPlayed": 0.6363636363636364
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
        "offered": 1134,
        "played": 720,
        "ignored": 868,
        "selectionRate": 0.6349206349206349,
        "wins": 509,
        "losses": 211,
        "draws": 0,
        "winRateWhenPlayed": 0.7069444444444445,
        "averageFlips": 0.425,
        "averageDamageDealt": 0.6041666666666666,
        "averageNetDamage": 0.4277777777777777,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 501,
            "winRateWhenPlayed": 0.718562874251497
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 123,
            "winRateWhenPlayed": 0.7154471544715447
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 36,
            "winRateWhenPlayed": 0.5833333333333334
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 19,
            "winRateWhenPlayed": 0.8421052631578947
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 17,
            "winRateWhenPlayed": 0.5882352941176471
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
        "offered": 1946,
        "played": 684,
        "ignored": 1539,
        "selectionRate": 0.35149023638232274,
        "wins": 526,
        "losses": 158,
        "draws": 0,
        "winRateWhenPlayed": 0.7690058479532164,
        "averageFlips": 0.3435672514619883,
        "averageDamageDealt": 2.4517543859649122,
        "averageNetDamage": 1.969298245614035,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 347,
            "winRateWhenPlayed": 0.8011527377521613
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 164,
            "winRateWhenPlayed": 0.7195121951219512
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 55,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 36,
            "winRateWhenPlayed": 0.8611111111111112
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 35,
            "winRateWhenPlayed": 0.9428571428571428
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
        "offered": 1387,
        "played": 671,
        "ignored": 1119,
        "selectionRate": 0.4837779379956741,
        "wins": 480,
        "losses": 191,
        "draws": 0,
        "winRateWhenPlayed": 0.7153502235469449,
        "averageFlips": 0.34873323397913564,
        "averageDamageDealt": 1.178837555886736,
        "averageNetDamage": 0.8256333830104321,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 449,
            "winRateWhenPlayed": 0.7193763919821826
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 91,
            "winRateWhenPlayed": 0.7692307692307693
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 35,
            "winRateWhenPlayed": 0.6285714285714286
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 23,
            "winRateWhenPlayed": 0.6086956521739131
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 21,
            "winRateWhenPlayed": 0.6666666666666666
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
        "offered": 211,
        "played": 66,
        "ignored": 165,
        "selectionRate": 0.3127962085308057,
        "wins": 41,
        "losses": 25,
        "draws": 0,
        "winRateWhenPlayed": 0.6212121212121212,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 2.0606060606060606,
        "averageNetDamage": 0.8636363636363635,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 31,
            "winRateWhenPlayed": 0.6774193548387096
          },
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 14,
            "winRateWhenPlayed": 0.7857142857142857
          },
          {
            "cardId": "wandering-glyph",
            "name": "Fusion sylvestre",
            "played": 10,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "sapling",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "clock-sentinel",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 26,
        "played": 15,
        "ignored": 20,
        "selectionRate": 0.5769230769230769,
        "wins": 5,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0.2,
        "averageDamageDealt": 0.8666666666666667,
        "averageNetDamage": 0.06666666666666665,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 10,
            "winRateWhenPlayed": 0.3
          },
          {
            "cardId": "reward-common-10",
            "name": "Carte commune 10",
            "played": 5,
            "winRateWhenPlayed": 0.4
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 71%."
        ]
      },
      {
        "id": "finisher",
        "label": "finisher",
        "offered": 57,
        "played": 9,
        "ignored": 52,
        "selectionRate": 0.15789473684210525,
        "wins": 1,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.1111111111111111,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0.6666666666666666,
        "averageNetDamage": -0.44444444444444453,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 2,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 1,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
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
        "id": "engine",
        "label": "engine",
        "offered": 10,
        "played": 3,
        "ignored": 9,
        "selectionRate": 0.3,
        "wins": 1,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0,
        "averageDamageDealt": 0,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 1,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 1,
            "winRateWhenPlayed": 0
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
        "offered": 5774,
        "played": 2948,
        "ignored": 4523,
        "selectionRate": 0.5105645999307239,
        "wins": 2119,
        "losses": 829,
        "draws": 0,
        "winRateWhenPlayed": 0.7187924016282226,
        "averageFlips": 0.37924016282225237,
        "averageDamageDealt": 1.1458616010854816,
        "averageNetDamage": 0.8595658073270014,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 539,
            "winRateWhenPlayed": 0.7050092764378478
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 501,
            "winRateWhenPlayed": 0.718562874251497
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 457,
            "winRateWhenPlayed": 0.7177242888402626
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 378,
            "winRateWhenPlayed": 0.791005291005291
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 166,
            "winRateWhenPlayed": 0.7108433734939759
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
        "offered": 164,
        "played": 69,
        "ignored": 139,
        "selectionRate": 0.42073170731707316,
        "wins": 40,
        "losses": 29,
        "draws": 0,
        "winRateWhenPlayed": 0.5797101449275363,
        "averageFlips": 0.36231884057971014,
        "averageDamageDealt": 1.5507246376811594,
        "averageNetDamage": 0.9855072463768116,
        "topCards": [
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 20,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 14,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02 +",
            "played": 12,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06 +",
            "played": 11,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 10,
            "winRateWhenPlayed": 0.3
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "rare",
        "label": "rare",
        "offered": 89,
        "played": 16,
        "ignored": 79,
        "selectionRate": 0.1797752808988764,
        "wins": 8,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.3125,
        "averageDamageDealt": 1.625,
        "averageNetDamage": 0.25,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 6,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 4,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 2,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
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
        "count": 514,
        "wins": 386,
        "losses": 128,
        "draws": 0,
        "winRate": 0.7509727626459144,
        "averageFlips": 0.3326848249027237,
        "averageDamageDealt": 1.9785992217898833,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 484,
        "wins": 391,
        "losses": 93,
        "draws": 0,
        "winRate": 0.8078512396694215,
        "averageFlips": 0.24586776859504134,
        "averageDamageDealt": 3.5289256198347108,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 336,
        "wins": 240,
        "losses": 96,
        "draws": 0,
        "winRate": 0.7142857142857143,
        "averageFlips": 0.33630952380952384,
        "averageDamageDealt": 0.08333333333333333,
        "averageEffectAmount": 1.0148809523809523,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 335,
        "wins": 240,
        "losses": 95,
        "draws": 0,
        "winRate": 0.7164179104477612,
        "averageFlips": 0.3283582089552239,
        "averageDamageDealt": 0.09850746268656717,
        "averageEffectAmount": 1.2835820895522387,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 219,
        "wins": 164,
        "losses": 55,
        "draws": 0,
        "winRate": 0.7488584474885844,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0.5525114155251142,
        "averageEffectAmount": 1.2968036529680365,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 145,
        "wins": 104,
        "losses": 41,
        "draws": 0,
        "winRate": 0.7172413793103448,
        "averageFlips": 0.7724137931034483,
        "averageDamageDealt": 3.7517241379310344,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 138,
        "wins": 97,
        "losses": 41,
        "draws": 0,
        "winRate": 0.7028985507246377,
        "averageFlips": 0.06521739130434782,
        "averageDamageDealt": 0.08695652173913043,
        "averageEffectAmount": 4.688405797101449,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 90,
        "wins": 71,
        "losses": 19,
        "draws": 0,
        "winRate": 0.7888888888888889,
        "averageFlips": 1.0777777777777777,
        "averageDamageDealt": 2.7666666666666666,
        "averageEffectAmount": 1.4444444444444444,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 83,
        "wins": 62,
        "losses": 21,
        "draws": 0,
        "winRate": 0.7469879518072289,
        "averageFlips": 0.07228915662650602,
        "averageDamageDealt": 5.734939759036145,
        "averageEffectAmount": 1.1325301204819278,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 82,
        "wins": 55,
        "losses": 27,
        "draws": 0,
        "winRate": 0.6707317073170732,
        "averageFlips": 0.9390243902439024,
        "averageDamageDealt": 1.6219512195121952,
        "averageEffectAmount": 0.7317073170731707,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 59,
        "wins": 37,
        "losses": 22,
        "draws": 0,
        "winRate": 0.6271186440677966,
        "averageFlips": 0.1864406779661017,
        "averageDamageDealt": 0.4745762711864407,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 52,
        "wins": 42,
        "losses": 10,
        "draws": 0,
        "winRate": 0.8076923076923077,
        "averageFlips": 0.34615384615384615,
        "averageDamageDealt": 9.711538461538462,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 51,
        "wins": 28,
        "losses": 23,
        "draws": 0,
        "winRate": 0.5490196078431373,
        "averageFlips": 0.4117647058823529,
        "averageDamageDealt": 1.7843137254901962,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 49,
        "wins": 27,
        "losses": 22,
        "draws": 0,
        "winRate": 0.5510204081632653,
        "averageFlips": 0.2857142857142857,
        "averageDamageDealt": 1.3673469387755102,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+familiar",
        "kind": "stack-hybrid",
        "label": "arcane + familiar dans la pile",
        "count": 46,
        "wins": 35,
        "losses": 11,
        "draws": 0,
        "winRate": 0.7608695652173914,
        "averageFlips": 0.30434782608695654,
        "averageDamageDealt": 0.2826086956521739,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 45,
        "wins": 35,
        "losses": 10,
        "draws": 0,
        "winRate": 0.7777777777777778,
        "averageFlips": 1.1777777777777778,
        "averageDamageDealt": 3.2666666666666666,
        "averageEffectAmount": 1.4222222222222223,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 43,
        "wins": 26,
        "losses": 17,
        "draws": 0,
        "winRate": 0.6046511627906976,
        "averageFlips": 0.37209302325581395,
        "averageDamageDealt": 0.13953488372093023,
        "averageEffectAmount": 1.1162790697674418,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 42,
        "wins": 33,
        "losses": 9,
        "draws": 0,
        "winRate": 0.7857142857142857,
        "averageFlips": 0.19047619047619047,
        "averageDamageDealt": 3.5476190476190474,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+revenant",
        "kind": "stack-hybrid",
        "label": "arcane + revenant dans la pile",
        "count": 33,
        "wins": 24,
        "losses": 9,
        "draws": 0,
        "winRate": 0.7272727272727273,
        "averageFlips": 0.12121212121212122,
        "averageDamageDealt": 0.48484848484848486,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 31,
        "wins": 24,
        "losses": 7,
        "draws": 0,
        "winRate": 0.7741935483870968,
        "averageFlips": 0.1935483870967742,
        "averageDamageDealt": 0.45161290322580644,
        "averageEffectAmount": 1.6451612903225807,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 27,
        "wins": 19,
        "losses": 8,
        "draws": 0,
        "winRate": 0.7037037037037037,
        "averageFlips": 0.2962962962962963,
        "averageDamageDealt": 1,
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
        "wins": 11,
        "losses": 15,
        "draws": 0,
        "winRate": 0.4230769230769231,
        "averageFlips": 0.7307692307692307,
        "averageDamageDealt": 2,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+arcane",
        "kind": "friendly-adjacent",
        "label": "familiar allie + arcane",
        "count": 25,
        "wins": 23,
        "losses": 2,
        "draws": 0,
        "winRate": 0.92,
        "averageFlips": 0.08,
        "averageDamageDealt": 5.08,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 25,
        "wins": 16,
        "losses": 9,
        "draws": 0,
        "winRate": 0.64,
        "averageFlips": 0.2,
        "averageDamageDealt": 0.76,
        "averageEffectAmount": 1.36,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 89,
        "id": "card-widow-knight-nerf",
        "severity": "problem",
        "action": "nerf",
        "title": "Chevalier veuf tire trop de valeur",
        "detail": "36 plays, 86% win, 0.17 flips/play, net PV 1.67.",
        "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 38,
        "id": "card-heron-nerf",
        "severity": "problem",
        "action": "nerf",
        "title": "Oiselle aubeplume tire trop de valeur",
        "detail": "19 plays, 84% win, 0.53 flips/play, net PV 0.00.",
        "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 26,
        "id": "card-reward-uncommon-02-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 02 + sous-performe",
        "detail": "12 plays, 50% win, net PV 1.75.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "medium",
        "sampleSize": 14,
        "id": "card-reward-uncommon-10-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 10 sous-performe",
        "detail": "10 plays, 30% win, net PV 0.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 27,
        "id": "card-reward-rare-05-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 05 est ignoree par les bots",
        "detail": "27 offres, 15% selection, 50% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 514,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "514 occurrences, 75% win, 0.33 flips, 1.98 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 484,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "484 occurrences, 81% win, 0.25 flips, 3.53 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 145,
        "title": "demon -> demon ressort comme combo",
        "detail": "145 occurrences, 72% win, 0.77 flips, 3.75 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 90,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "90 occurrences, 79% win, 1.08 flips, 2.77 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 89,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "89 offres, 18% selection, 50% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 83,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "83 occurrences, 75% win, 0.07 flips, 5.73 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 82,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "82 occurrences, 67% win, 0.94 flips, 1.62 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 57,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "57 offres, 16% selection, 11% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 52,
        "title": "demon allie + demon ressort comme combo",
        "detail": "52 occurrences, 81% win, 0.35 flips, 9.71 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-stack-hybrid:arcane+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 51,
        "title": "arcane + demon dans la pile ressort comme combo",
        "detail": "51 occurrences, 55% win, 0.41 flips, 1.78 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 45,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "45 occurrences, 78% win, 1.18 flips, 3.27 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 42,
        "title": "human allie + human ressort comme combo",
        "detail": "42 occurrences, 79% win, 0.19 flips, 3.55 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 26,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "26 offres, 58% selection, 33% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-pact-sprite-nerf",
      "severity": "problem",
      "title": "Lutin a pacte tire trop de valeur",
      "detail": "210 plays, 69% win, 0.83 flips/play, net PV 0.82. Confiance high, echantillon 408.",
      "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
    },
    {
      "id": "diagnostic-adventure-card-widow-knight-nerf",
      "severity": "problem",
      "title": "Run complet: Chevalier veuf tire trop de valeur",
      "detail": "36 plays, 86% win, 0.17 flips/play, net PV 1.67. Confiance high, echantillon 89.",
      "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
    },
    {
      "id": "diagnostic-adventure-card-heron-nerf",
      "severity": "problem",
      "title": "Run complet: Oiselle aubeplume tire trop de valeur",
      "detail": "19 plays, 84% win, 0.53 flips/play, net PV 0.00. Confiance high, echantillon 38.",
      "recommendation": "Baisser une face cle, reduire le scaling d'effet, ou limiter ses positions preferees."
    },
    {
      "id": "diagnostic-adventure-card-reward-uncommon-02-buff",
      "severity": "problem",
      "title": "Run complet: Carte inhabituelle 02 + sous-performe",
      "detail": "12 plays, 50% win, net PV 1.75. Confiance high, echantillon 26.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 12 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a confirmer (67%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:revenant+revenant",
      "severity": "watch",
      "title": "revenant allie + revenant ressort comme combo",
      "detail": "296 occurrences, 51% win, 0.13 flips, 1.86 degats. Confiance high, echantillon 296.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-family-chain:demon->demon",
      "severity": "watch",
      "title": "demon -> demon ressort comme combo",
      "detail": "215 occurrences, 61% win, 0.76 flips, 2.06 degats. Confiance high, echantillon 215.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:familiar+familiar",
      "severity": "watch",
      "title": "familiar allie + familiar ressort comme combo",
      "detail": "200 occurrences, 73% win, 0.20 flips, 2.42 degats. Confiance high, echantillon 200.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 37.5% des runs complets, avec 70.4% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260617-192441",
        "generatedAt": "2026-06-17T19:24:41.762Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.4933417882054534,
          "automaton": 0.7989690721649485,
          "human": 0.4713541666666667,
          "familiar": 0.520949720670391,
          "revenant": 0.38001514004542014,
          "demon": 0.6045714285714285
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-automaton": 0.25,
          "arcane-vs-familiar": 0.25,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "human-vs-revenant": 0.75,
          "arcane-vs-human": 0.375,
          "demon-vs-revenant": 0.375,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.375,
          "expert": 0.375,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3357664233576642
          }
        ]
      },
      {
        "reportId": "ai-lab-20260618-002208",
        "generatedAt": "2026-06-18T00:22:08.257Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.44111906310995447,
          "automaton": 0.7358757062146892,
          "familiar": 0.6239941477688369,
          "revenant": 0.40586080586080586,
          "human": 0.5343680709534369,
          "demon": 0.5324384787472036
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-demon": 0.75,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-human": 0.375,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-human": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.25,
          "champion": 0.75
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260618-045441",
        "generatedAt": "2026-06-18T04:54:41.253Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.6265281173594132,
          "automaton": 0.6441831683168316,
          "human": 0.6038615179760319,
          "revenant": 0.3317107093184979,
          "familiar": 0.4331476323119777,
          "demon": 0.6262135922330098
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 0.875,
          "arcane-vs-familiar": 0.75,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.375,
          "human-vs-revenant": 0.625,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.25,
          "expert": 0.75,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.337696335078534
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2992125984251969
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.33793103448275863
          }
        ]
      },
      {
        "reportId": "ai-lab-20260618-095744",
        "generatedAt": "2026-06-18T09:57:44.531Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.9166666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "human": 0.5852417302798982,
          "automaton": 0.6499674690956408,
          "arcane": 0.5440666204024983,
          "revenant": 0.29175946547884185,
          "familiar": 0.5697061039939714,
          "demon": 0.6255980861244019
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "automaton-vs-revenant": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-familiar": 0.25,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-human": 0.5,
          "demon-vs-revenant": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0,
          "expert": 0.5,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.28851540616246496
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.29914529914529914
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3081395348837209
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2677966101694915
          }
        ]
      },
      {
        "reportId": "ai-lab-20260618-201751",
        "generatedAt": "2026-06-18T20:17:51.822Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.6629941672067401,
          "arcane": 0.4140040788579198,
          "human": 0.5833900612661674,
          "familiar": 0.6661775495231108,
          "revenant": 0.3143068939955523,
          "demon": 0.6169977924944813
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "arcane-vs-human": 0.125,
          "automaton-vs-familiar": 0.875,
          "demon-vs-revenant": 0.875,
          "arcane-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "familiar-vs-revenant": 0.75,
          "automaton-vs-demon": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0,
          "expert": 0.375,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34818941504178275
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.298050139275766
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3295774647887324
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2717391304347826
          }
        ]
      },
      {
        "reportId": "ai-lab-20260619-012248",
        "generatedAt": "2026-06-19T01:22:48.006Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.75,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.6603518267929634,
          "arcane": 0.43202208419599725,
          "human": 0.5166435506241331,
          "revenant": 0.4249271137026239,
          "familiar": 0.5935436537050623,
          "demon": 0.6400449943757031
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-demon": 0.25,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-human": 0.375,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5,
          "automaton-vs-revenant": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.5,
          "expert": 1,
          "champion": 0.375
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260619-055838",
        "generatedAt": "2026-06-19T05:58:38.523Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.9583333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.6113387978142076,
          "automaton": 0.6813417190775681,
          "human": 0.4624731951393853,
          "revenant": 0.32161172161172163,
          "familiar": 0.6084615384615385,
          "demon": 0.5771567436208992
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-human": 0.75,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "demon-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-human": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.375,
          "opportunist": 0.625,
          "regular": 0.625,
          "expert": 0.75,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.33060109289617484
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3168044077134986
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2983425414364641
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3467153284671533
          }
        ]
      },
      {
        "reportId": "ai-lab-20260619-103649",
        "generatedAt": "2026-06-19T10:36:49.090Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.7898259705488622,
          "human": 0.3679624664879357,
          "arcane": 0.4315576534052596,
          "revenant": 0.4845505617977528,
          "familiar": 0.5847152126892574,
          "demon": 0.6290516206482593
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.25,
          "automaton-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-revenant": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.75,
          "regular": 0.25,
          "expert": 0.625,
          "champion": 0.625
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260619-211319",
        "generatedAt": "2026-06-19T21:13:19.988Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.6223544973544973,
          "automaton": 0.7049291019581364,
          "human": 0.40354464894342196,
          "revenant": 0.37028824833702884,
          "familiar": 0.5713218820014937,
          "demon": 0.6215909090909091
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-human": 0.625,
          "automaton-vs-demon": 0.625,
          "automaton-vs-familiar": 0.625,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-familiar": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3388888888888889
          }
        ]
      },
      {
        "reportId": "ai-lab-20260620-023242",
        "generatedAt": "2026-06-20T02:32:42.022Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.3333333333333333,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.7083333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "human": 0.4585006693440428,
          "automaton": 0.7833099579242637,
          "arcane": 0.6343178621659634,
          "familiar": 0.43528561099060015,
          "revenant": 0.4526916802610114,
          "demon": 0.5394581861012956
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "arcane-vs-demon": 0.25,
          "arcane-vs-familiar": 0.75,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.25,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "demon-vs-revenant": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.5,
          "regular": 0.125,
          "expert": 0.625,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7694524495677233
          }
        ]
      },
      {
        "reportId": "ai-lab-20260620-071501",
        "generatedAt": "2026-06-20T07:15:01.111Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.9166666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.6853658536585366,
          "arcane": 0.5157894736842106,
          "human": 0.4625,
          "revenant": 0.42038640906062624,
          "familiar": 0.5581727337615988,
          "demon": 0.6282782212086659
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 0.875,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.375,
          "demon-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-human": 0.5,
          "demon-vs-familiar": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.5
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260620-175658",
        "generatedAt": "2026-06-20T17:56:58.281Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.5399467376830892,
          "automaton": 0.4993279569892473,
          "human": 0.569415081042988,
          "revenant": 0.4503263234227701,
          "familiar": 0.6234058514628658,
          "demon": 0.6260454002389486
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-human": 0.25,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-revenant": 0.25,
          "demon-vs-familiar": 0.75,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.625,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.375,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6857142857142857
          }
        ]
      }
    ],
    "signals": [
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "69% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.691370164162369
      },
      {
        "id": "trend-starter-matchup-arcane-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 83% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.8333333333333334
      },
      {
        "id": "trend-starter-matchup-automaton-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 84% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.84375
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 73% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.7291666666666666
      },
      {
        "id": "trend-starter-matchup-demon-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs human reste desequilibre",
        "detail": "La famille de gauche gagne 77% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.7708333333333334
      },
      {
        "id": "trend-family-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "revenant reste trop faible",
        "detail": "39% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.3873695894077211
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 33% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.3333333333333333
      },
      {
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "watch",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 71% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.7083333333333334
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 67% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.6666666666666666
      }
    ]
  }
};
