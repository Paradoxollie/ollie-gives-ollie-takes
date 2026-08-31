import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260831-194359",
  "generatedAt": "2026-08-31T19:43:59.119Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 740,
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
      "averageHpEdge": -21.083333333333332
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 30,
      "losses": 18,
      "draws": 0,
      "winRate": 0.625,
      "averageHpEdge": 7.375
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 19,
      "losses": 29,
      "draws": 0,
      "winRate": 0.3958333333333333,
      "averageHpEdge": -3.4375
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 37,
      "losses": 11,
      "draws": 0,
      "winRate": 0.7708333333333334,
      "averageHpEdge": 7.375
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 9,
      "losses": 15,
      "draws": 0,
      "winRate": 0.375,
      "averageHpEdge": -1.5416666666666667
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
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 29.833333333333332,
        "rounds": 3.25,
        "flipsPerMatch": 7.416666666666667,
        "flipsPerTurn": 0.24860335195530725,
        "reshuffles": 4.5,
        "deadTurns": 0.8333333333333334,
        "finalHpDifference": 15.333333333333334
      },
      "deadTurnFrequency": 0.027932960893854747,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce depart."
      ]
    }
  ],
  "starterFamilyMatchups": [
    {
      "id": "arcane-vs-familiar",
      "leftFamily": "arcane",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 1,
      "rightWins": 7,
      "draws": 0,
      "leftWinRate": 0.125,
      "rightWinRate": 0.875
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
      "id": "automaton-vs-human",
      "leftFamily": "automaton",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 5,
      "rightWins": 3,
      "draws": 0,
      "leftWinRate": 0.625,
      "rightWinRate": 0.375
    },
    {
      "id": "demon-vs-familiar",
      "leftFamily": "demon",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
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
      "id": "arcane-vs-human",
      "leftFamily": "arcane",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
    },
    {
      "id": "arcane-vs-revenant",
      "leftFamily": "arcane",
      "rightFamily": "revenant",
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
          "wins": 5,
          "winRate": 0.4166666666666667
        },
        "overallStartingPlayerWinRate": 0.4583333333333333
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 24,
          "wins": 1,
          "losses": 23,
          "draws": 0,
          "winRate": 0.041666666666666664,
          "averageHpEdge": -21.083333333333332
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 23,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9583333333333334,
          "averageHpEdge": 21.083333333333332
        }
      ],
      "averages": {
        "turns": 20,
        "rounds": 2.1666666666666665,
        "flipsPerMatch": 8.625,
        "flipsPerTurn": 0.43125,
        "reshuffles": 2.3333333333333335,
        "deadTurns": 0.9583333333333334,
        "finalHpDifference": 22.833333333333332
      },
      "deadTurnFrequency": 0.04791666666666667
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
          "wins": 3,
          "winRate": 0.25
        },
        "enemy": {
          "games": 12,
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.375
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 7,
          "losses": 17,
          "draws": 0,
          "winRate": 0.2916666666666667,
          "averageHpEdge": -6.333333333333333
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 17,
          "losses": 7,
          "draws": 0,
          "winRate": 0.7083333333333334,
          "averageHpEdge": 6.333333333333333
        }
      ],
      "averages": {
        "turns": 31.708333333333332,
        "rounds": 3.4166666666666665,
        "flipsPerMatch": 8.333333333333334,
        "flipsPerTurn": 0.2628120893561104,
        "reshuffles": 4.791666666666667,
        "deadTurns": 2.0833333333333335,
        "finalHpDifference": 12
      },
      "deadTurnFrequency": 0.0657030223390276
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
          "wins": 2,
          "losses": 22,
          "draws": 0,
          "winRate": 0.08333333333333333,
          "averageHpEdge": -13.208333333333334
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 22,
          "losses": 2,
          "draws": 0,
          "winRate": 0.9166666666666666,
          "averageHpEdge": 13.208333333333334
        }
      ],
      "averages": {
        "turns": 28.291666666666668,
        "rounds": 3.0416666666666665,
        "flipsPerMatch": 6.75,
        "flipsPerTurn": 0.23858615611192932,
        "reshuffles": 4.083333333333333,
        "deadTurns": 1.0833333333333333,
        "finalHpDifference": 14.708333333333334
      },
      "deadTurnFrequency": 0.03829160530191458
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
          "modelId": "expert",
          "games": 24,
          "wins": 15,
          "losses": 9,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 1.5416666666666667
        },
        {
          "modelId": "champion",
          "games": 24,
          "wins": 9,
          "losses": 15,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -1.5416666666666667
        }
      ],
      "averages": {
        "turns": 33.125,
        "rounds": 3.625,
        "flipsPerMatch": 7.666666666666667,
        "flipsPerTurn": 0.23144654088050315,
        "reshuffles": 5.25,
        "deadTurns": 0.5,
        "finalHpDifference": 9.875
      },
      "deadTurnFrequency": 0.01509433962264151
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
      "averageLocationsCleared": 3,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 26.0625,
      "averageCombatFlips": 7.4375,
      "averageDeadTurns": 5.0625,
      "averageReshuffles": 3.5625,
      "averageRewardsClaimed": 1.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.625,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.25,
        "demon": 0.25,
        "human": 0.125,
        "revenant": 0.125,
        "arcane": 0.25
      },
      "nodeMix": {
        "combat": 0.52,
        "elite": 0.08,
        "shop": 0,
        "chest": 0.16,
        "rest": 0.2,
        "boss": 0.04
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "opportunist",
      "runs": 8,
      "victories": 0,
      "bossReached": 3,
      "victoryRate": 0,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 5.75,
      "averageFinalDeckSize": 12.875,
      "averageDeckDelta": 0.875,
      "averageCombatWinRate": 0.7037037037037037,
      "averageCombatTurns": 14.11111111111111,
      "averageCombatFlips": 8.185185185185185,
      "averageDeadTurns": 1,
      "averageReshuffles": 1.5555555555555556,
      "averageRewardsClaimed": 3,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 1,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.40816326530612246,
        "elite": 0.08163265306122448,
        "shop": 0.16326530612244897,
        "chest": 0.10204081632653061,
        "rest": 0.1836734693877551,
        "boss": 0.061224489795918366
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.125,
      "averageLocationsCleared": 6.5,
      "averageFinalDeckSize": 14.125,
      "averageDeckDelta": 2.125,
      "averageCombatWinRate": 0.7142857142857143,
      "averageCombatTurns": 24.142857142857142,
      "averageCombatFlips": 5.857142857142857,
      "averageDeadTurns": 3.3214285714285716,
      "averageReshuffles": 3.25,
      "averageRewardsClaimed": 3.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 0.625,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4339622641509434,
        "elite": 0.07547169811320754,
        "shop": 0.09433962264150944,
        "chest": 0.20754716981132076,
        "rest": 0.16981132075471697,
        "boss": 0.018867924528301886
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 1,
      "bossReached": 4,
      "victoryRate": 0.125,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 6.375,
      "averageFinalDeckSize": 15,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.7666666666666667,
      "averageCombatTurns": 25.7,
      "averageCombatFlips": 7.5,
      "averageDeadTurns": 3.3666666666666667,
      "averageReshuffles": 4.033333333333333,
      "averageRewardsClaimed": 4.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.375,
      "averageRemovals": 0.25,
      "averageFusions": 1,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.38181818181818183,
        "elite": 0.09090909090909091,
        "shop": 0.14545454545454545,
        "chest": 0.21818181818181817,
        "rest": 0.09090909090909091,
        "boss": 0.07272727272727272
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 3,
      "bossReached": 6,
      "victoryRate": 0.375,
      "bossReachRate": 0.75,
      "averageLocationsCleared": 7.5,
      "averageFinalDeckSize": 15.375,
      "averageDeckDelta": 3.375,
      "averageCombatWinRate": 0.8571428571428571,
      "averageCombatTurns": 14.371428571428572,
      "averageCombatFlips": 8.17142857142857,
      "averageDeadTurns": 1,
      "averageReshuffles": 1.6571428571428573,
      "averageRewardsClaimed": 5.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.375,
      "averageRemovals": 1,
      "averageFusions": 0.75,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.3939393939393939,
        "elite": 0.045454545454545456,
        "shop": 0.09090909090909091,
        "chest": 0.21212121212121213,
        "rest": 0.16666666666666666,
        "boss": 0.09090909090909091
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
      "seed": 1941406214,
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
      "totalCombatTurns": 77,
      "totalCombatFlips": 25,
      "totalDeadTurns": 14,
      "totalReshuffles": 15,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 14,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 5,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1958183833,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 79,
      "totalCombatFlips": 16,
      "totalDeadTurns": 16,
      "totalReshuffles": 8,
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
        "old-bridge-stone"
      ],
      "campVisits": 4,
      "upgrades": 4,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 2,
        "rest": 4,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 12,
        "automaton": 0,
        "revenant": 0,
        "arcane": 2,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "chest",
          "title": "Cache de spores",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
          "playerDeckSizeBefore": 16,
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
          "siteAction": "camp-upgrade"
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
          "combatTurns": 18,
          "combatFlips": 4,
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
      "modelId": "beginner",
      "seed": 1907850976,
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
      "totalCombatTurns": 20,
      "totalCombatFlips": 8,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 20,
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
      "seed": 1924628595,
      "selectedFamily": "familiar",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 60,
      "totalCombatFlips": 23,
      "totalDeadTurns": 6,
      "totalReshuffles": 10,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
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
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 12,
        "demon": 0,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 19,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 2008516690,
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
      "totalCombatTurns": 64,
      "totalCombatFlips": 21,
      "totalDeadTurns": 16,
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
        "demon": 12,
        "human": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 5,
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
      "modelId": "beginner",
      "seed": 2025294309,
      "selectedFamily": "revenant",
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
      "totalCombatTurns": 60,
      "totalCombatFlips": 12,
      "totalDeadTurns": 15,
      "totalReshuffles": 6,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 13,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 42,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 6,
      "modelId": "beginner",
      "seed": 1974961452,
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
      "totalCombatTurns": 35,
      "totalCombatFlips": 9,
      "totalDeadTurns": 8,
      "totalReshuffles": 7,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 35,
          "combatFlips": 9,
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
      "seed": 1991739071,
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
      "totalCombatTurns": 22,
      "totalCombatFlips": 5,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 22,
          "combatFlips": 5,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 115902725,
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
      "totalCombatTurns": 27,
      "totalCombatFlips": 12,
      "totalDeadTurns": 2,
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
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 16,
          "combatFlips": 7,
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
      "modelId": "opportunist",
      "seed": 99125106,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 67,
      "totalCombatFlips": 35,
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
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 1,
        "automaton": 1,
        "revenant": 0,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 11,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 82347487,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 68,
      "totalCombatFlips": 47,
      "totalDeadTurns": 5,
      "totalReshuffles": 8,
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
        "old-bridge-stone"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 10,
        "human": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 11,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 9,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 65569868,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 54,
      "totalCombatFlips": 24,
      "totalDeadTurns": 6,
      "totalReshuffles": 6,
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
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 11,
        "human": 0,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 6,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 10,
          "combatFlips": 3,
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
      "modelId": "opportunist",
      "seed": 48792249,
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
      "totalCombatTurns": 23,
      "totalCombatFlips": 15,
      "totalDeadTurns": 1,
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
        "moss-dust"
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "shop",
          "title": "Bazaar des souches",
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 13,
          "combatFlips": 9,
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
      "modelId": "opportunist",
      "seed": 32014630,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 10,
      "deckDelta": -2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 20,
      "totalCombatFlips": 9,
      "totalDeadTurns": 2,
      "totalReshuffles": 0,
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
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 2,
        "chest": 0,
        "rest": 1,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 6,
      "modelId": "opportunist",
      "seed": 15237011,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 76,
      "totalCombatFlips": 57,
      "totalDeadTurns": 2,
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
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 2,
        "chest": 2,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 15,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 0,
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
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 14,
          "combatFlips": 12,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 15,
          "combatFlips": 15,
          "enemyProfileId": "shaper",
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
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 4293426688,
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
      "totalCombatTurns": 46,
      "totalCombatFlips": 22,
      "totalDeadTurns": 5,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 9,
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
      "seed": 3935354464,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 87,
      "totalCombatFlips": 27,
      "totalDeadTurns": 6,
      "totalReshuffles": 10,
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
        "watcher-stone"
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
        "demon": 1,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
        "arcane": 11,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 9,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 6,
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
      "modelId": "regular",
      "seed": 3952132083,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 97,
      "totalCombatFlips": 12,
      "totalDeadTurns": 16,
      "totalReshuffles": 21,
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
        "chest": 0,
        "rest": 2,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 0,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 5,
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
      "runIndex": 2,
      "modelId": "regular",
      "seed": 3968909702,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 124,
      "totalCombatFlips": 35,
      "totalDeadTurns": 16,
      "totalReshuffles": 14,
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
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 1,
        "arcane": 13,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 4,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 12,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 20,
          "combatFlips": 4,
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
      "runIndex": 3,
      "modelId": "regular",
      "seed": 3985687321,
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 11,
      "totalDeadTurns": 8,
      "totalReshuffles": 5,
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
        "watcher-stone"
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 19,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 4002464940,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 53,
      "totalCombatFlips": 9,
      "totalDeadTurns": 8,
      "totalReshuffles": 6,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 2,
        "rare": 2
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
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 4,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 1,
        "revenant": 0,
        "arcane": 12,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 2,
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
          "combatTurns": 26,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 5,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 4019242559,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 90,
      "totalCombatFlips": 28,
      "totalDeadTurns": 18,
      "totalReshuffles": 9,
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
        "ancient-sap"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 2,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 44,
          "combatFlips": 14,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "seed": 4036020178,
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
      "totalCombatTurns": 74,
      "totalCombatFlips": 15,
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
        "watcher-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "combatTurns": 11,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 4,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 5,
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
      "modelId": "regular",
      "seed": 4052797797,
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
      "totalCombatTurns": 107,
      "totalCombatFlips": 27,
      "totalDeadTurns": 19,
      "totalReshuffles": 17,
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
        "moss-dust"
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
          "combatFlips": 4,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "shop",
          "title": "Bazaar des souches",
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 39,
          "combatFlips": 4,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 16,
          "combatFlips": 15,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 4280335168,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 10,
      "deckDelta": -2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 43,
      "totalCombatFlips": 12,
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
        "old-bridge-stone"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 4,
      "fusions": 4,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 4,
        "chest": 1,
        "rest": 2,
        "boss": 1
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
        "common": 9,
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
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 7,
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
      "seed": 2145491,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 69,
      "totalCombatFlips": 22,
      "totalDeadTurns": 6,
      "totalReshuffles": 17,
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
        "spring-tear"
      ],
      "campVisits": 2,
      "upgrades": 1,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 1,
        "chest": 3,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 3,
        "revenant": 0,
        "arcane": 10,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "rest",
          "title": "Clairiere des songes",
          "playerDeckSizeBefore": 12,
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
          "siteAction": "camp-upgrade"
        },
        {
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 18,
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
      "runIndex": 2,
      "modelId": "expert",
      "seed": 18923110,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 20,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 210,
      "totalCombatFlips": 71,
      "totalDeadTurns": 22,
      "totalReshuffles": 32,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 1,
        "rare": 2
      },
      "stealRewardsOffered": 28,
      "stealRewardsClaimed": 7,
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
        "combat": 6,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 1,
        "revenant": 3,
        "arcane": 14,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 17,
        "uncommon": 1,
        "rare": 2
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
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 8,
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
          "combatTurns": 23,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 6,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 10,
          "enemyProfileId": "builder",
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
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 20,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 3,
      "modelId": "expert",
      "seed": 35700729,
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
      "totalCombatTurns": 63,
      "totalCombatFlips": 14,
      "totalDeadTurns": 11,
      "totalReshuffles": 8,
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
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 1,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 28,
          "combatFlips": 8,
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 52478348,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 4,
      "combatLosses": 0,
      "totalCombatTurns": 125,
      "totalCombatFlips": 30,
      "totalDeadTurns": 18,
      "totalReshuffles": 18,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 2,
        "chest": 3,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 0,
        "human": 0,
        "automaton": 3,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 2,
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
          "combatTurns": 39,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 13,
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
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 29,
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
      "runIndex": 5,
      "modelId": "expert",
      "seed": 69255967,
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
      "totalCombatTurns": 53,
      "totalCombatFlips": 2,
      "totalDeadTurns": 10,
      "totalReshuffles": 11,
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
        "spring-tear"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 0,
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
      "modelId": "expert",
      "seed": 86033586,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 20,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 152,
      "totalCombatFlips": 57,
      "totalDeadTurns": 16,
      "totalReshuffles": 24,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 3,
        "rare": 0
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 6,
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
        "chest": 2,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 2,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 14,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 17,
        "uncommon": 3,
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
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 23,
          "combatFlips": 8,
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 9,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 4,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 20,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 11,
          "enemyProfileId": "trickster",
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
          "playerDeckSizeBefore": 20,
          "playerDeckSizeAfter": 20,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 7,
      "modelId": "expert",
      "seed": 102811205,
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
      "totalCombatTurns": 56,
      "totalCombatFlips": 17,
      "totalDeadTurns": 11,
      "totalReshuffles": 7,
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
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 2,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 12,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 4231679011,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 4,
      "combatLosses": 0,
      "totalCombatTurns": 60,
      "totalCombatFlips": 37,
      "totalDeadTurns": 4,
      "totalReshuffles": 7,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 1
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
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 3,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 13,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 17,
          "combatFlips": 11,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 8,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "chest",
          "title": "Cache de spores",
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 13,
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
      "modelId": "champion",
      "seed": 4214901392,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 55,
      "totalCombatFlips": 27,
      "totalDeadTurns": 6,
      "totalReshuffles": 14,
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
        "familiar": 1,
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
        "uncommon": 1,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 8,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 13,
          "combatFlips": 9,
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
      "modelId": "champion",
      "seed": 4265234249,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 65,
      "totalCombatFlips": 46,
      "totalDeadTurns": 2,
      "totalReshuffles": 4,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 2
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
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 0,
        "shop": 0,
        "chest": 3,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 14,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 2,
        "rare": 2
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 16,
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
          "kind": "chest",
          "title": "Cache de spores",
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 6,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
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
      "modelId": "champion",
      "seed": 4248456630,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 46,
      "totalCombatFlips": 31,
      "totalDeadTurns": 2,
      "totalReshuffles": 12,
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
      "campVisits": 4,
      "upgrades": 2,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 4,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 17,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "combatTurns": 18,
          "combatFlips": 15,
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
      "seed": 3822191,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 80,
      "totalCombatFlips": 44,
      "totalDeadTurns": 8,
      "totalReshuffles": 6,
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
        "moss-dust"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 2,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
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
          "combatTurns": 9,
          "combatFlips": 7,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
          "combatFlips": 8,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 6,
          "enemyProfileId": "shaper",
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
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 18,
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
      "seed": 4282011868,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 7,
      "combatLosses": 0,
      "totalCombatTurns": 99,
      "totalCombatFlips": 46,
      "totalDeadTurns": 5,
      "totalReshuffles": 9,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 1,
        "rare": 0
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 6,
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
        "combat": 6,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
        "arcane": 2,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 17,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 3,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 17,
          "combatFlips": 10,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 8,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 6,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "chest",
          "title": "Malle de clairiere",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 15,
          "combatFlips": 5,
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
          "kind": "rest",
          "title": "Feu de canopee",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 17,
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
      "runIndex": 6,
      "modelId": "champion",
      "seed": 37377429,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 60,
      "totalCombatFlips": 40,
      "totalDeadTurns": 6,
      "totalReshuffles": 4,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
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
        "combat": 3,
        "elite": 1,
        "shop": 1,
        "chest": 3,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 14,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 2,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
        "uncommon": 2,
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
          "combatTurns": 11,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 9,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "shop",
          "title": "Marche aux lucioles",
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
          "rewardOffered": 4,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 10,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 16,
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
      "modelId": "champion",
      "seed": 20599810,
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
      "totalCombatTurns": 38,
      "totalCombatFlips": 15,
      "totalDeadTurns": 2,
      "totalReshuffles": 2,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
    }
  ],
  "diagnostics": {
    "baselineWinRate": 0.5,
    "cardAnalytics": [
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
        "offered": 578,
        "played": 415,
        "ignored": 446,
        "selectionRate": 0.7179930795847751,
        "wins": 211,
        "losses": 204,
        "draws": 0,
        "winRateWhenPlayed": 0.5084337349397591,
        "averageFlips": 0.3253012048192771,
        "failedImpactRate": 0.39732142857142855,
        "averageFlipMargin": 1.762962962962963,
        "averageEffectAmount": 3.5325301204819275,
        "averageDamageDealt": 0.060240963855421686,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.060240963855421686,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 162,
            "winRate": 0.29012345679012347
          },
          {
            "modelId": "expert",
            "played": 100,
            "winRate": 0.78
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.4787234042553192
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.8292682926829268
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.3888888888888889
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 415,
            "winRate": 0.5084337349397591
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
        "offered": 574,
        "played": 415,
        "ignored": 411,
        "selectionRate": 0.7229965156794426,
        "wins": 179,
        "losses": 236,
        "draws": 0,
        "winRateWhenPlayed": 0.43132530120481927,
        "averageFlips": 0.2289156626506024,
        "failedImpactRate": 0.6138211382113821,
        "averageFlipMargin": 1.6210526315789473,
        "averageEffectAmount": 3.23855421686747,
        "averageDamageDealt": 0.10361445783132531,
        "averageDamageTaken": 0.05060240963855422,
        "averageNetDamage": 0.05301204819277109,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 184,
            "winRate": 0.33152173913043476
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.8111111111111111
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.5569620253164557
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.022727272727272728
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
            "played": 415,
            "winRate": 0.43132530120481927
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
        "offered": 490,
        "played": 413,
        "ignored": 363,
        "selectionRate": 0.8428571428571429,
        "wins": 212,
        "losses": 201,
        "draws": 0,
        "winRateWhenPlayed": 0.513317191283293,
        "averageFlips": 0.28087167070217917,
        "failedImpactRate": 0.49783549783549785,
        "averageFlipMargin": 2.2241379310344827,
        "averageEffectAmount": 4.547215496368039,
        "averageDamageDealt": 0.0847457627118644,
        "averageDamageTaken": 0.03631961259079903,
        "averageNetDamage": 0.048426150121065374,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.27607361963190186
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.8350515463917526
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.46236559139784944
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.9230769230769231
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 413,
            "winRate": 0.513317191283293
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
        "offered": 542,
        "played": 402,
        "ignored": 420,
        "selectionRate": 0.7416974169741697,
        "wins": 187,
        "losses": 215,
        "draws": 0,
        "winRateWhenPlayed": 0.4651741293532338,
        "averageFlips": 0.2263681592039801,
        "failedImpactRate": 0.43125,
        "averageFlipMargin": 1.8021978021978022,
        "averageEffectAmount": 4.440298507462686,
        "averageDamageDealt": 0.05472636815920398,
        "averageDamageTaken": 0.01990049751243781,
        "averageNetDamage": 0.03482587064676617,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 177,
            "winRate": 0.4067796610169492
          },
          {
            "modelId": "expert",
            "played": 89,
            "winRate": 0.797752808988764
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.5753424657534246
          },
          {
            "modelId": "champion",
            "played": 49,
            "winRate": 0.04081632653061224
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
            "played": 402,
            "winRate": 0.4651741293532338
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
        "offered": 786,
        "played": 399,
        "ignored": 579,
        "selectionRate": 0.5076335877862596,
        "wins": 210,
        "losses": 189,
        "draws": 0,
        "winRateWhenPlayed": 0.5263157894736842,
        "averageFlips": 0.2656641604010025,
        "failedImpactRate": 0.6044776119402985,
        "averageFlipMargin": 2.2547169811320753,
        "averageEffectAmount": 3.3909774436090228,
        "averageDamageDealt": 0.38345864661654133,
        "averageDamageTaken": 0.18045112781954886,
        "averageNetDamage": 0.20300751879699247,
        "lethalMoves": 9,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "regular",
            "played": 144,
            "winRate": 0.2916666666666667
          },
          {
            "modelId": "expert",
            "played": 104,
            "winRate": 0.7980769230769231
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.46808510638297873
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 399,
            "winRate": 0.5263157894736842
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
        "offered": 649,
        "played": 387,
        "ignored": 518,
        "selectionRate": 0.5963020030816641,
        "wins": 162,
        "losses": 225,
        "draws": 0,
        "winRateWhenPlayed": 0.4186046511627907,
        "averageFlips": 0.18863049095607234,
        "failedImpactRate": 0.6137566137566137,
        "averageFlipMargin": 1.4246575342465753,
        "averageEffectAmount": 3.6330749354005167,
        "averageDamageDealt": 0.26098191214470284,
        "averageDamageTaken": 0.10852713178294573,
        "averageNetDamage": 0.1524547803617571,
        "lethalMoves": 4,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 172,
            "winRate": 0.3488372093023256
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.7682926829268293
          },
          {
            "modelId": "opportunist",
            "played": 75,
            "winRate": 0.52
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0
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
            "played": 387,
            "winRate": 0.4186046511627907
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
        "offered": 515,
        "played": 381,
        "ignored": 375,
        "selectionRate": 0.7398058252427184,
        "wins": 239,
        "losses": 142,
        "draws": 0,
        "winRateWhenPlayed": 0.6272965879265092,
        "averageFlips": 0.29658792650918636,
        "failedImpactRate": 0.4083769633507853,
        "averageFlipMargin": 2.2123893805309733,
        "averageEffectAmount": 4.863517060367454,
        "averageDamageDealt": 0.14173228346456693,
        "averageDamageTaken": 0.07349081364829396,
        "averageNetDamage": 0.06824146981627296,
        "lethalMoves": 1,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.7756410256410257
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.524390243902439
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.6944444444444444
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.45454545454545453
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
            "played": 381,
            "winRate": 0.6272965879265092
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
        "offered": 498,
        "played": 380,
        "ignored": 358,
        "selectionRate": 0.7630522088353414,
        "wins": 246,
        "losses": 134,
        "draws": 0,
        "winRateWhenPlayed": 0.6473684210526316,
        "averageFlips": 0.2,
        "failedImpactRate": 0.49333333333333335,
        "averageFlipMargin": 1.986842105263158,
        "averageEffectAmount": 5.847368421052631,
        "averageDamageDealt": 0.2236842105263158,
        "averageDamageTaken": 0.11842105263157894,
        "averageNetDamage": 0.10526315789473685,
        "lethalMoves": 0,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.78125
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.5487804878048781
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.7121212121212122
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.5178571428571429
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
            "played": 380,
            "winRate": 0.6473684210526316
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
        "offered": 459,
        "played": 363,
        "ignored": 334,
        "selectionRate": 0.7908496732026143,
        "wins": 228,
        "losses": 135,
        "draws": 0,
        "winRateWhenPlayed": 0.628099173553719,
        "averageFlips": 0.24242424242424243,
        "failedImpactRate": 0.5789473684210527,
        "averageFlipMargin": 1.9659090909090908,
        "averageEffectAmount": 3.0275482093663912,
        "averageDamageDealt": 0.19834710743801653,
        "averageDamageTaken": 0.05234159779614325,
        "averageNetDamage": 0.14600550964187328,
        "lethalMoves": 5,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 164,
            "winRate": 0.5853658536585366
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.987012987012987
          },
          {
            "modelId": "opportunist",
            "played": 64,
            "winRate": 0.578125
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.4418604651162791
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
            "played": 363,
            "winRate": 0.628099173553719
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
        "offered": 476,
        "played": 354,
        "ignored": 333,
        "selectionRate": 0.7436974789915967,
        "wins": 161,
        "losses": 193,
        "draws": 0,
        "winRateWhenPlayed": 0.4548022598870056,
        "averageFlips": 0.2909604519774011,
        "failedImpactRate": 0.44623655913978494,
        "averageFlipMargin": 2.2135922330097086,
        "averageEffectAmount": 3.2768361581920904,
        "averageDamageDealt": 0.1977401129943503,
        "averageDamageTaken": 0.00847457627118644,
        "averageNetDamage": 0.18926553672316385,
        "lethalMoves": 3,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 153,
            "winRate": 0.37254901960784315
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.7349397590361446
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.6071428571428571
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.18181818181818182
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
            "played": 354,
            "winRate": 0.4548022598870056
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
        "offered": 594,
        "played": 352,
        "ignored": 474,
        "selectionRate": 0.5925925925925926,
        "wins": 238,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.6761363636363636,
        "averageFlips": 0.20454545454545456,
        "failedImpactRate": 0.5135135135135135,
        "averageFlipMargin": 2.236111111111111,
        "averageEffectAmount": 6.028409090909091,
        "averageDamageDealt": 0.22727272727272727,
        "averageDamageTaken": 0.056818181818181816,
        "averageNetDamage": 0.17045454545454544,
        "lethalMoves": 7,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 146,
            "winRate": 0.7328767123287672
          },
          {
            "modelId": "expert",
            "played": 79,
            "winRate": 0.6835443037974683
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.676923076923077
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.6875
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
            "played": 352,
            "winRate": 0.6761363636363636
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
        "offered": 1043,
        "played": 351,
        "ignored": 860,
        "selectionRate": 0.336529242569511,
        "wins": 223,
        "losses": 128,
        "draws": 0,
        "winRateWhenPlayed": 0.6353276353276354,
        "averageFlips": 0.33903133903133903,
        "failedImpactRate": 0.6956521739130435,
        "averageFlipMargin": 2.2016806722689077,
        "averageEffectAmount": 3.5641025641025643,
        "averageDamageDealt": 1.170940170940171,
        "averageDamageTaken": 0.2849002849002849,
        "averageNetDamage": 0.8860398860398861,
        "lethalMoves": 13,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.7564102564102564
          },
          {
            "modelId": "expert",
            "played": 70,
            "winRate": 0.5428571428571428
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 54,
            "winRate": 0.7222222222222222
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
            "played": 351,
            "winRate": 0.6353276353276354
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
        "offered": 603,
        "played": 347,
        "ignored": 506,
        "selectionRate": 0.5754560530679934,
        "wins": 215,
        "losses": 132,
        "draws": 0,
        "winRateWhenPlayed": 0.6195965417867435,
        "averageFlips": 0.3976945244956772,
        "failedImpactRate": 0.45454545454545453,
        "averageFlipMargin": 2.3768115942028984,
        "averageEffectAmount": 2.2363112391930837,
        "averageDamageDealt": 0.2737752161383285,
        "averageDamageTaken": 0.043227665706051875,
        "averageNetDamage": 0.23054755043227662,
        "lethalMoves": 7,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 157,
            "winRate": 0.5605095541401274
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.9868421052631579
          },
          {
            "modelId": "opportunist",
            "played": 60,
            "winRate": 0.55
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.5
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
            "played": 347,
            "winRate": 0.6195965417867435
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
        "offered": 568,
        "played": 347,
        "ignored": 437,
        "selectionRate": 0.6109154929577465,
        "wins": 156,
        "losses": 191,
        "draws": 0,
        "winRateWhenPlayed": 0.4495677233429395,
        "averageFlips": 0.276657060518732,
        "failedImpactRate": 0.5076923076923077,
        "averageFlipMargin": 2.1041666666666665,
        "averageEffectAmount": 3.1873198847262247,
        "averageDamageDealt": 0.3400576368876081,
        "averageDamageTaken": 0.069164265129683,
        "averageNetDamage": 0.2708933717579251,
        "lethalMoves": 8,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 148,
            "winRate": 0.35135135135135137
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.7386363636363636
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.6222222222222222
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.15555555555555556
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.19047619047619047
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 347,
            "winRate": 0.4495677233429395
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
        "offered": 567,
        "played": 347,
        "ignored": 427,
        "selectionRate": 0.6119929453262787,
        "wins": 155,
        "losses": 192,
        "draws": 0,
        "winRateWhenPlayed": 0.44668587896253603,
        "averageFlips": 0.23919308357348704,
        "failedImpactRate": 0.5585106382978723,
        "averageFlipMargin": 2.3493975903614457,
        "averageEffectAmount": 3.5706051873198845,
        "averageDamageDealt": 0.13256484149855907,
        "averageDamageTaken": 0.06051873198847262,
        "averageNetDamage": 0.07204610951008644,
        "lethalMoves": 2,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 153,
            "winRate": 0.3464052287581699
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.7471264367816092
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.18181818181818182
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.11764705882352941
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 347,
            "winRate": 0.44668587896253603
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
        "offered": 650,
        "played": 338,
        "ignored": 471,
        "selectionRate": 0.52,
        "wins": 215,
        "losses": 123,
        "draws": 0,
        "winRateWhenPlayed": 0.636094674556213,
        "averageFlips": 0.16568047337278108,
        "failedImpactRate": 0.7171717171717171,
        "averageFlipMargin": 2.1607142857142856,
        "averageEffectAmount": 2.1863905325443787,
        "averageDamageDealt": 0.5621301775147929,
        "averageDamageTaken": 0.1863905325443787,
        "averageNetDamage": 0.3757396449704142,
        "lethalMoves": 14,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 140,
            "winRate": 0.6142857142857143
          },
          {
            "modelId": "expert",
            "played": 78,
            "winRate": 0.9871794871794872
          },
          {
            "modelId": "opportunist",
            "played": 62,
            "winRate": 0.5806451612903226
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.41025641025641024
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
            "played": 338,
            "winRate": 0.636094674556213
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
        "offered": 1077,
        "played": 312,
        "ignored": 907,
        "selectionRate": 0.28969359331476324,
        "wins": 144,
        "losses": 168,
        "draws": 0,
        "winRateWhenPlayed": 0.46153846153846156,
        "averageFlips": 0.16346153846153846,
        "failedImpactRate": 0.8172043010752689,
        "averageFlipMargin": 2.0588235294117645,
        "averageEffectAmount": 1.1538461538461537,
        "averageDamageDealt": 1.2564102564102564,
        "averageDamageTaken": 0.6185897435897436,
        "averageNetDamage": 0.6378205128205128,
        "lethalMoves": 14,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 116,
            "winRate": 0.25
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.7368421052631579
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.42424242424242425
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.35
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 312,
            "winRate": 0.46153846153846156
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
        "offered": 854,
        "played": 290,
        "ignored": 701,
        "selectionRate": 0.3395784543325527,
        "wins": 170,
        "losses": 120,
        "draws": 0,
        "winRateWhenPlayed": 0.5862068965517241,
        "averageFlips": 0.3758620689655172,
        "failedImpactRate": 0.6228373702422145,
        "averageFlipMargin": 2.165137614678899,
        "averageEffectAmount": 1.6137931034482758,
        "averageDamageDealt": 1.006896551724138,
        "averageDamageTaken": 0.30689655172413793,
        "averageNetDamage": 0.7,
        "lethalMoves": 9,
        "roundClosers": 35,
        "byModel": [
          {
            "modelId": "regular",
            "played": 129,
            "winRate": 0.5581395348837209
          },
          {
            "modelId": "expert",
            "played": 59,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.4888888888888889
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.4594594594594595
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
            "played": 290,
            "winRate": 0.5862068965517241
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
        "offered": 1238,
        "played": 288,
        "ignored": 1018,
        "selectionRate": 0.23263327948303716,
        "wins": 160,
        "losses": 128,
        "draws": 0,
        "winRateWhenPlayed": 0.5555555555555556,
        "averageFlips": 0.1701388888888889,
        "failedImpactRate": 0.8304498269896193,
        "averageFlipMargin": 1.653061224489796,
        "averageEffectAmount": 0.6805555555555556,
        "averageDamageDealt": 1.75,
        "averageDamageTaken": 0.875,
        "averageNetDamage": 0.875,
        "lethalMoves": 24,
        "roundClosers": 87,
        "byModel": [
          {
            "modelId": "regular",
            "played": 125,
            "winRate": 0.528
          },
          {
            "modelId": "expert",
            "played": 72,
            "winRate": 0.8194444444444444
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.12
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
            "played": 288,
            "winRate": 0.5555555555555556
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
        "offered": 1042,
        "played": 272,
        "ignored": 920,
        "selectionRate": 0.26103646833013433,
        "wins": 106,
        "losses": 166,
        "draws": 0,
        "winRateWhenPlayed": 0.3897058823529412,
        "averageFlips": 0.33088235294117646,
        "failedImpactRate": 0.6917808219178082,
        "averageFlipMargin": 2.3555555555555556,
        "averageEffectAmount": 1.0772058823529411,
        "averageDamageDealt": 1.3345588235294117,
        "averageDamageTaken": 0.7242647058823529,
        "averageNetDamage": 0.6102941176470588,
        "lethalMoves": 10,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 107,
            "winRate": 0.19626168224299065
          },
          {
            "modelId": "expert",
            "played": 68,
            "winRate": 0.7647058823529411
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.5641025641025641
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.2222222222222222
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.13636363636363635
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 272,
            "winRate": 0.3897058823529412
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
        "offered": 323,
        "played": 234,
        "ignored": 247,
        "selectionRate": 0.7244582043343654,
        "wins": 131,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.5598290598290598,
        "averageFlips": 0.7435897435897436,
        "failedImpactRate": 0.17535545023696683,
        "averageFlipMargin": 1.9310344827586208,
        "averageEffectAmount": 1.3504273504273505,
        "averageDamageDealt": 1.1623931623931625,
        "averageDamageTaken": 0.05128205128205128,
        "averageNetDamage": 1.1111111111111112,
        "lethalMoves": 8,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 93,
            "winRate": 0.5483870967741935
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.7959183673469388
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.2857142857142857
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
            "played": 234,
            "winRate": 0.5598290598290598
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
        "offered": 381,
        "played": 226,
        "ignored": 321,
        "selectionRate": 0.5931758530183727,
        "wins": 130,
        "losses": 96,
        "draws": 0,
        "winRateWhenPlayed": 0.5752212389380531,
        "averageFlips": 0.831858407079646,
        "failedImpactRate": 0.11737089201877934,
        "averageFlipMargin": 1.9680851063829787,
        "averageEffectAmount": 0.9823008849557522,
        "averageDamageDealt": 1.0530973451327434,
        "averageDamageTaken": 0.2168141592920354,
        "averageNetDamage": 0.836283185840708,
        "lethalMoves": 4,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 92,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.7551020408163265
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.7857142857142857
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.24
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
            "played": 226,
            "winRate": 0.5752212389380531
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
        "offered": 440,
        "played": 222,
        "ignored": 332,
        "selectionRate": 0.5045454545454545,
        "wins": 130,
        "losses": 92,
        "draws": 0,
        "winRateWhenPlayed": 0.5855855855855856,
        "averageFlips": 0.7342342342342343,
        "failedImpactRate": 0.27876106194690264,
        "averageFlipMargin": 2.061349693251534,
        "averageEffectAmount": 1.3108108108108107,
        "averageDamageDealt": 1.445945945945946,
        "averageDamageTaken": 0.42792792792792794,
        "averageNetDamage": 1.018018018018018,
        "lethalMoves": 12,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 86,
            "winRate": 0.5813953488372093
          },
          {
            "modelId": "expert",
            "played": 52,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.7954545454545454
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.23076923076923078
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
            "played": 222,
            "winRate": 0.5855855855855856
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
        "offered": 476,
        "played": 198,
        "ignored": 367,
        "selectionRate": 0.41596638655462187,
        "wins": 104,
        "losses": 94,
        "draws": 0,
        "winRateWhenPlayed": 0.5252525252525253,
        "averageFlips": 0.6262626262626263,
        "failedImpactRate": 0.3473684210526316,
        "averageFlipMargin": 2.274193548387097,
        "averageEffectAmount": 0.9343434343434344,
        "averageDamageDealt": 2.191919191919192,
        "averageDamageTaken": 0.9242424242424242,
        "averageNetDamage": 1.2676767676767677,
        "lethalMoves": 13,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 77,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.6756756756756757
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.25925925925925924
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
            "played": 198,
            "winRate": 0.5252525252525253
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
        "id": "human",
        "label": "human",
        "offered": 2931,
        "played": 1539,
        "ignored": 2295,
        "selectionRate": 0.5250767656090072,
        "wins": 777,
        "losses": 762,
        "draws": 0,
        "winRateWhenPlayed": 0.5048732943469786,
        "averageFlips": 0.2651072124756335,
        "averageDamageDealt": 0.3931124106562703,
        "averageNetDamage": 0.2111760883690708,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 415,
            "winRateWhenPlayed": 0.5084337349397591
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.513317191283293
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 399,
            "winRateWhenPlayed": 0.5263157894736842
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 312,
            "winRateWhenPlayed": 0.46153846153846156
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
        "offered": 3003,
        "played": 1492,
        "ignored": 2367,
        "selectionRate": 0.49683649683649683,
        "wins": 688,
        "losses": 804,
        "draws": 0,
        "winRateWhenPlayed": 0.46112600536193027,
        "averageFlips": 0.2064343163538874,
        "averageDamageDealt": 0.44906166219839144,
        "averageNetDamage": 0.23257372654155498,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 415,
            "winRateWhenPlayed": 0.43132530120481927
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 402,
            "winRateWhenPlayed": 0.4651741293532338
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 387,
            "winRateWhenPlayed": 0.4186046511627907
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 288,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 2650,
        "played": 1464,
        "ignored": 2067,
        "selectionRate": 0.5524528301886793,
        "wins": 946,
        "losses": 518,
        "draws": 0,
        "winRateWhenPlayed": 0.6461748633879781,
        "averageFlips": 0.25956284153005466,
        "averageDamageDealt": 0.430327868852459,
        "averageNetDamage": 0.2984972677595628,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.6272965879265092
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 380,
            "winRateWhenPlayed": 0.6473684210526316
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 352,
            "winRateWhenPlayed": 0.6761363636363636
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 351,
            "winRateWhenPlayed": 0.6353276353276354
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
        "offered": 2566,
        "played": 1338,
        "ignored": 2012,
        "selectionRate": 0.5214341387373344,
        "wins": 828,
        "losses": 510,
        "draws": 0,
        "winRateWhenPlayed": 0.6188340807174888,
        "averageFlips": 0.2922272047832586,
        "averageDamageDealt": 0.4850523168908819,
        "averageNetDamage": 0.3460388639760837,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 363,
            "winRateWhenPlayed": 0.628099173553719
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 347,
            "winRateWhenPlayed": 0.6195965417867435
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 338,
            "winRateWhenPlayed": 0.636094674556213
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 290,
            "winRateWhenPlayed": 0.5862068965517241
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
        "offered": 2653,
        "played": 1320,
        "ignored": 2117,
        "selectionRate": 0.4975499434602337,
        "wins": 578,
        "losses": 742,
        "draws": 0,
        "winRateWhenPlayed": 0.43787878787878787,
        "averageFlips": 0.2818181818181818,
        "averageDamageDealt": 0.45227272727272727,
        "averageNetDamage": 0.26666666666666666,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 354,
            "winRateWhenPlayed": 0.4548022598870056
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 347,
            "winRateWhenPlayed": 0.4495677233429395
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 347,
            "winRateWhenPlayed": 0.44668587896253603
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 272,
            "winRateWhenPlayed": 0.3897058823529412
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
        "offered": 1620,
        "played": 880,
        "ignored": 1267,
        "selectionRate": 0.5432098765432098,
        "wins": 495,
        "losses": 385,
        "draws": 0,
        "winRateWhenPlayed": 0.5625,
        "averageFlips": 0.7375,
        "averageDamageDealt": 1.4375,
        "averageNetDamage": 1.0522727272727272,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 234,
            "winRateWhenPlayed": 0.5598290598290598
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 226,
            "winRateWhenPlayed": 0.5752212389380531
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 222,
            "winRateWhenPlayed": 0.5855855855855856
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 198,
            "winRateWhenPlayed": 0.5252525252525253
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
        "offered": 2968,
        "played": 2141,
        "ignored": 2242,
        "selectionRate": 0.7213611859838275,
        "wins": 1159,
        "losses": 982,
        "draws": 0,
        "winRateWhenPlayed": 0.5413358243811303,
        "averageFlips": 0.3082671648762261,
        "averageDamageDealt": 0.27744044838860343,
        "averageNetDamage": 0.22699673049976643,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 415,
            "winRateWhenPlayed": 0.5084337349397591
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 402,
            "winRateWhenPlayed": 0.4651741293532338
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 380,
            "winRateWhenPlayed": 0.6473684210526316
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 363,
            "winRateWhenPlayed": 0.628099173553719
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 347,
            "winRateWhenPlayed": 0.4495677233429395
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
        "offered": 3039,
        "played": 2136,
        "ignored": 2309,
        "selectionRate": 0.702862783810464,
        "wins": 1136,
        "losses": 1000,
        "draws": 0,
        "winRateWhenPlayed": 0.5318352059925093,
        "averageFlips": 0.35252808988764045,
        "averageDamageDealt": 0.25046816479400746,
        "averageNetDamage": 0.18913857677902618,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 415,
            "winRateWhenPlayed": 0.43132530120481927
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.513317191283293
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.6272965879265092
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 354,
            "winRateWhenPlayed": 0.4548022598870056
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 347,
            "winRateWhenPlayed": 0.6195965417867435
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
        "offered": 3926,
        "played": 1973,
        "ignored": 3066,
        "selectionRate": 0.5025471217524198,
        "wins": 1039,
        "losses": 934,
        "draws": 0,
        "winRateWhenPlayed": 0.5266092245311708,
        "averageFlips": 0.2873796249366447,
        "averageDamageDealt": 0.560567663456665,
        "averageNetDamage": 0.34414597060314245,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 399,
            "winRateWhenPlayed": 0.5263157894736842
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 387,
            "winRateWhenPlayed": 0.4186046511627907
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 352,
            "winRateWhenPlayed": 0.6761363636363636
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 347,
            "winRateWhenPlayed": 0.44668587896253603
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 290,
            "winRateWhenPlayed": 0.5862068965517241
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
        "offered": 5490,
        "played": 1783,
        "ignored": 4508,
        "selectionRate": 0.3247723132969035,
        "wins": 978,
        "losses": 805,
        "draws": 0,
        "winRateWhenPlayed": 0.5485137408861469,
        "averageFlips": 0.2961301177790241,
        "averageDamageDealt": 1.2232192933258552,
        "averageNetDamage": 0.7184520471116096,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 351,
            "winRateWhenPlayed": 0.6353276353276354
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 338,
            "winRateWhenPlayed": 0.636094674556213
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 312,
            "winRateWhenPlayed": 0.46153846153846156
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 288,
            "winRateWhenPlayed": 0.5555555555555556
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 272,
            "winRateWhenPlayed": 0.3897058823529412
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
        "offered": 15423,
        "played": 8033,
        "ignored": 12125,
        "selectionRate": 0.5208454905011995,
        "wins": 4312,
        "losses": 3721,
        "draws": 0,
        "winRateWhenPlayed": 0.5367857587451762,
        "averageFlips": 0.3122121249844392,
        "averageDamageDealt": 0.5497323540395868,
        "averageNetDamage": 0.3547865056641355,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 415,
            "winRateWhenPlayed": 0.5084337349397591
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 415,
            "winRateWhenPlayed": 0.43132530120481927
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.513317191283293
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 402,
            "winRateWhenPlayed": 0.4651741293532338
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 399,
            "winRateWhenPlayed": 0.5263157894736842
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
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 431,
        "wins": 202,
        "losses": 229,
        "draws": 0,
        "winRate": 0.46867749419953597,
        "averageFlips": 0.2505800464037123,
        "averageDamageDealt": 0.665893271461717,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 425,
        "wins": 180,
        "losses": 245,
        "draws": 0,
        "winRate": 0.4235294117647059,
        "averageFlips": 0.2023529411764706,
        "averageDamageDealt": 0.8164705882352942,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 396,
        "wins": 257,
        "losses": 139,
        "draws": 0,
        "winRate": 0.648989898989899,
        "averageFlips": 0.28535353535353536,
        "averageDamageDealt": 0.8914141414141414,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 370,
        "wins": 184,
        "losses": 186,
        "draws": 0,
        "winRate": 0.4972972972972973,
        "averageFlips": 0.12432432432432433,
        "averageDamageDealt": 1.508108108108108,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 354,
        "wins": 147,
        "losses": 207,
        "draws": 0,
        "winRate": 0.4152542372881356,
        "averageFlips": 0.2853107344632768,
        "averageDamageDealt": 0.8361581920903954,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 335,
        "wins": 193,
        "losses": 142,
        "draws": 0,
        "winRate": 0.5761194029850746,
        "averageFlips": 0.32238805970149254,
        "averageDamageDealt": 0.8537313432835821,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 321,
        "wins": 165,
        "losses": 156,
        "draws": 0,
        "winRate": 0.514018691588785,
        "averageFlips": 0.2866043613707165,
        "averageDamageDealt": 0.20249221183800623,
        "averageEffectAmount": 1.7476635514018692,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 318,
        "wins": 198,
        "losses": 120,
        "draws": 0,
        "winRate": 0.6226415094339622,
        "averageFlips": 0.2861635220125786,
        "averageDamageDealt": 0.16981132075471697,
        "averageEffectAmount": 1.1981132075471699,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 317,
        "wins": 138,
        "losses": 179,
        "draws": 0,
        "winRate": 0.4353312302839117,
        "averageFlips": 0.2334384858044164,
        "averageDamageDealt": 0.14511041009463724,
        "averageEffectAmount": 1.0914826498422714,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 313,
        "wins": 139,
        "losses": 174,
        "draws": 0,
        "winRate": 0.4440894568690096,
        "averageFlips": 0.19169329073482427,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.0031948881789137,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 312,
        "wins": 138,
        "losses": 174,
        "draws": 0,
        "winRate": 0.4423076923076923,
        "averageFlips": 0.1891025641025641,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.2724358974358974,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 308,
        "wins": 151,
        "losses": 157,
        "draws": 0,
        "winRate": 0.4902597402597403,
        "averageFlips": 0.2824675324675325,
        "averageDamageDealt": 0.003246753246753247,
        "averageEffectAmount": 1.2175324675324675,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 306,
        "wins": 155,
        "losses": 151,
        "draws": 0,
        "winRate": 0.5065359477124183,
        "averageFlips": 0.16339869281045752,
        "averageDamageDealt": 1.5196078431372548,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 305,
        "wins": 162,
        "losses": 143,
        "draws": 0,
        "winRate": 0.5311475409836065,
        "averageFlips": 0.2786885245901639,
        "averageDamageDealt": 0.07540983606557378,
        "averageEffectAmount": 1.3311475409836067,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 302,
        "wins": 161,
        "losses": 141,
        "draws": 0,
        "winRate": 0.5331125827814569,
        "averageFlips": 0.2814569536423841,
        "averageDamageDealt": 0.076158940397351,
        "averageEffectAmount": 1.3311258278145695,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 293,
        "wins": 123,
        "losses": 170,
        "draws": 0,
        "winRate": 0.4197952218430034,
        "averageFlips": 0.2150170648464164,
        "averageDamageDealt": 0.09556313993174062,
        "averageEffectAmount": 1.0921501706484642,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 259,
        "wins": 188,
        "losses": 71,
        "draws": 0,
        "winRate": 0.7258687258687259,
        "averageFlips": 0.25868725868725867,
        "averageDamageDealt": 1.9884169884169884,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 250,
        "wins": 104,
        "losses": 146,
        "draws": 0,
        "winRate": 0.416,
        "averageFlips": 0.26,
        "averageDamageDealt": 0.1,
        "averageEffectAmount": 1.316,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 250,
        "wins": 100,
        "losses": 150,
        "draws": 0,
        "winRate": 0.4,
        "averageFlips": 0.26,
        "averageDamageDealt": 0.16,
        "averageEffectAmount": 1.264,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 242,
        "wins": 155,
        "losses": 87,
        "draws": 0,
        "winRate": 0.640495867768595,
        "averageFlips": 0.2892561983471074,
        "averageDamageDealt": 0.07024793388429752,
        "averageEffectAmount": 1.43801652892562,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 236,
        "wins": 144,
        "losses": 92,
        "draws": 0,
        "winRate": 0.6101694915254238,
        "averageFlips": 0.2966101694915254,
        "averageDamageDealt": 1.1694915254237288,
        "averageEffectAmount": 2.3220338983050848,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 233,
        "wins": 157,
        "losses": 76,
        "draws": 0,
        "winRate": 0.6738197424892703,
        "averageFlips": 0.23605150214592274,
        "averageDamageDealt": 1.7081545064377683,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 216,
        "wins": 137,
        "losses": 79,
        "draws": 0,
        "winRate": 0.6342592592592593,
        "averageFlips": 0.2222222222222222,
        "averageDamageDealt": 0.39351851851851855,
        "averageEffectAmount": 1.2361111111111112,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 210,
        "wins": 85,
        "losses": 125,
        "draws": 0,
        "winRate": 0.40476190476190477,
        "averageFlips": 0.14285714285714285,
        "averageDamageDealt": 1.7857142857142858,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2650,
        "id": "family-automaton-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "automaton domine l'echantillon",
        "detail": "1464 plays, 65% win, net PV 0.30.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 259,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "259 occurrences, 73% win, 0.26 flips, 1.99 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 210,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "210 occurrences, 40% win, 0.14 flips, 1.79 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7338285360569483,
    "cardAnalytics": [
      {
        "cardId": "reward-rare-06",
        "name": "Carte rare 06",
        "family": "arcane",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "enemy-upgrade",
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
        "offered": 48,
        "played": 7,
        "ignored": 44,
        "selectionRate": 0.14583333333333334,
        "wins": 4,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.2857142857142857,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 1,
        "averageEffectAmount": 0.2857142857142857,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 1,
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
            "played": 7,
            "winRate": 0.5714285714285714
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "reward-rare-01",
        "name": "Carte rare 01",
        "family": "familiar",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "enemy-upgrade",
        "sideTotal": 14,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "combo-3",
          "familiar",
          "finisher",
          "rare"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 27,
        "played": 4,
        "ignored": 25,
        "selectionRate": 0.14814814814814814,
        "wins": 3,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.25,
        "averageDamageDealt": 2.25,
        "averageDamageTaken": 0.25,
        "averageNetDamage": 2,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
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
        "offered": 25,
        "played": 3,
        "ignored": 24,
        "selectionRate": 0.12,
        "wins": 0,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0,
        "averageDamageDealt": 1.6666666666666667,
        "averageDamageTaken": 3.3333333333333335,
        "averageNetDamage": -1.6666666666666667,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
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
            "played": 3,
            "winRate": 0
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 55,
        "played": 42,
        "ignored": 41,
        "selectionRate": 0.7636363636363637,
        "wins": 22,
        "losses": 20,
        "draws": 0,
        "winRateWhenPlayed": 0.5238095238095238,
        "averageFlips": 0.5714285714285714,
        "failedImpactRate": 0.22580645161290322,
        "averageFlipMargin": 2.0833333333333335,
        "averageEffectAmount": 3.5714285714285716,
        "averageDamageDealt": 0.9761904761904762,
        "averageDamageTaken": 0.11904761904761904,
        "averageNetDamage": 0.8571428571428571,
        "lethalMoves": 3,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.5625
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "opportunist",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0.3333333333333333
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
            "played": 42,
            "winRate": 0.5238095238095238
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
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
        "offered": 60,
        "played": 22,
        "ignored": 47,
        "selectionRate": 0.36666666666666664,
        "wins": 9,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.4090909090909091,
        "averageFlips": 0.45454545454545453,
        "failedImpactRate": 0.375,
        "averageFlipMargin": 3,
        "averageEffectAmount": 1.8181818181818181,
        "averageDamageDealt": 2.8181818181818183,
        "averageDamageTaken": 0.5909090909090909,
        "averageNetDamage": 2.2272727272727275,
        "lethalMoves": 3,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.2777777777777778
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 1,
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
            "played": 22,
            "winRate": 0.4090909090909091
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
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
        "offered": 40,
        "played": 20,
        "ignored": 30,
        "selectionRate": 0.5,
        "wins": 11,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.55,
        "averageFlips": 0.45,
        "failedImpactRate": 0.4375,
        "averageFlipMargin": 2.4444444444444446,
        "averageEffectAmount": 1.55,
        "averageDamageDealt": 1.5,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.5,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0.4
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "champion",
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
            "winRate": 0.55
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
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
        "offered": 40,
        "played": 15,
        "ignored": 34,
        "selectionRate": 0.375,
        "wins": 4,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.26666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.5454545454545454,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 2.4,
        "averageDamageDealt": 0.26666666666666666,
        "averageDamageTaken": 0.13333333333333333,
        "averageNetDamage": 0.13333333333333333,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 15,
            "winRate": 0.26666666666666666
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
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
        "offered": 626,
        "played": 434,
        "ignored": 492,
        "selectionRate": 0.6932907348242812,
        "wins": 308,
        "losses": 126,
        "draws": 0,
        "winRateWhenPlayed": 0.7096774193548387,
        "averageFlips": 0.3456221198156682,
        "failedImpactRate": 0.3670886075949367,
        "averageFlipMargin": 1.7066666666666668,
        "averageEffectAmount": 3.423963133640553,
        "averageDamageDealt": 0.3778801843317972,
        "averageDamageTaken": 0.059907834101382486,
        "averageNetDamage": 0.3179723502304147,
        "lethalMoves": 7,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "expert",
            "played": 209,
            "winRate": 0.7559808612440191
          },
          {
            "modelId": "regular",
            "played": 182,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0.48148148148148145
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.625
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 434,
            "winRate": 0.7096774193548387
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
        "offered": 559,
        "played": 413,
        "ignored": 411,
        "selectionRate": 0.738819320214669,
        "wins": 299,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.7239709443099274,
        "averageFlips": 0.423728813559322,
        "failedImpactRate": 0.37050359712230213,
        "averageFlipMargin": 2.0228571428571427,
        "averageEffectAmount": 2.76271186440678,
        "averageDamageDealt": 0.324455205811138,
        "averageDamageTaken": 0.06295399515738499,
        "averageNetDamage": 0.26150121065375304,
        "lethalMoves": 5,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "expert",
            "played": 204,
            "winRate": 0.7647058823529411
          },
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.7134831460674157
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.52
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 413,
            "winRate": 0.7239709443099274
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
        "offered": 713,
        "played": 353,
        "ignored": 577,
        "selectionRate": 0.4950911640953717,
        "wins": 257,
        "losses": 96,
        "draws": 0,
        "winRateWhenPlayed": 0.7280453257790368,
        "averageFlips": 0.3371104815864023,
        "failedImpactRate": 0.39593908629441626,
        "averageFlipMargin": 1.949579831932773,
        "averageEffectAmount": 2.9660056657223794,
        "averageDamageDealt": 0.4192634560906516,
        "averageDamageTaken": 0.12181303116147309,
        "averageNetDamage": 0.2974504249291785,
        "lethalMoves": 6,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "expert",
            "played": 171,
            "winRate": 0.7426900584795322
          },
          {
            "modelId": "regular",
            "played": 159,
            "winRate": 0.7421383647798742
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0.5
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
            "played": 353,
            "winRate": 0.7280453257790368
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
        "offered": 1027,
        "played": 315,
        "ignored": 831,
        "selectionRate": 0.30671859785783834,
        "wins": 252,
        "losses": 63,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.26666666666666666,
        "failedImpactRate": 0.6299559471365639,
        "averageFlipMargin": 1.8452380952380953,
        "averageEffectAmount": 0.7492063492063492,
        "averageDamageDealt": 2.679365079365079,
        "averageDamageTaken": 0.7301587301587301,
        "averageNetDamage": 1.949206349206349,
        "lethalMoves": 26,
        "roundClosers": 85,
        "byModel": [
          {
            "modelId": "expert",
            "played": 147,
            "winRate": 0.8503401360544217
          },
          {
            "modelId": "regular",
            "played": 125,
            "winRate": 0.808
          },
          {
            "modelId": "beginner",
            "played": 28,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 0.7142857142857143
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 315,
            "winRate": 0.8
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
        "offered": 400,
        "played": 297,
        "ignored": 309,
        "selectionRate": 0.7425,
        "wins": 231,
        "losses": 66,
        "draws": 0,
        "winRateWhenPlayed": 0.7777777777777778,
        "averageFlips": 0.7609427609427609,
        "failedImpactRate": 0.15671641791044777,
        "averageFlipMargin": 2.101769911504425,
        "averageEffectAmount": 1.292929292929293,
        "averageDamageDealt": 1.569023569023569,
        "averageDamageTaken": 0.25925925925925924,
        "averageNetDamage": 1.3097643097643097,
        "lethalMoves": 18,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "champion",
            "played": 142,
            "winRate": 0.8450704225352113
          },
          {
            "modelId": "opportunist",
            "played": 109,
            "winRate": 0.6972477064220184
          },
          {
            "modelId": "expert",
            "played": 19,
            "winRate": 0.8947368421052632
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.625
          },
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.7272727272727273
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 297,
            "winRate": 0.7777777777777778
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
        "offered": 561,
        "played": 285,
        "ignored": 410,
        "selectionRate": 0.5080213903743316,
        "wins": 220,
        "losses": 65,
        "draws": 0,
        "winRateWhenPlayed": 0.7719298245614035,
        "averageFlips": 0.5964912280701754,
        "failedImpactRate": 0.26406926406926406,
        "averageFlipMargin": 2.388235294117647,
        "averageEffectAmount": 1.1473684210526316,
        "averageDamageDealt": 2.231578947368421,
        "averageDamageTaken": 0.47368421052631576,
        "averageNetDamage": 1.7578947368421052,
        "lethalMoves": 20,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "champion",
            "played": 138,
            "winRate": 0.8478260869565217
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.6777777777777778
          },
          {
            "modelId": "expert",
            "played": 20,
            "winRate": 0.9
          },
          {
            "modelId": "regular",
            "played": 20,
            "winRate": 0.65
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.6470588235294118
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 285,
            "winRate": 0.7719298245614035
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
        "offered": 401,
        "played": 253,
        "ignored": 317,
        "selectionRate": 0.6309226932668329,
        "wins": 195,
        "losses": 58,
        "draws": 0,
        "winRateWhenPlayed": 0.7707509881422925,
        "averageFlips": 0.8656126482213439,
        "failedImpactRate": 0.07983193277310924,
        "averageFlipMargin": 2.4383561643835616,
        "averageEffectAmount": 1.1067193675889329,
        "averageDamageDealt": 1.3201581027667983,
        "averageDamageTaken": 0.06324110671936758,
        "averageNetDamage": 1.2569169960474307,
        "lethalMoves": 9,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "champion",
            "played": 125,
            "winRate": 0.824
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.7358490566037735
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.5789473684210527
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
            "played": 253,
            "winRate": 0.7707509881422925
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
        "offered": 492,
        "played": 188,
        "ignored": 396,
        "selectionRate": 0.3821138211382114,
        "wins": 152,
        "losses": 36,
        "draws": 0,
        "winRateWhenPlayed": 0.8085106382978723,
        "averageFlips": 0.6382978723404256,
        "failedImpactRate": 0.22077922077922077,
        "averageFlipMargin": 2.566666666666667,
        "averageEffectAmount": 1.047872340425532,
        "averageDamageDealt": 4.452127659574468,
        "averageDamageTaken": 0.8936170212765957,
        "averageNetDamage": 3.5585106382978724,
        "lethalMoves": 28,
        "roundClosers": 44,
        "byModel": [
          {
            "modelId": "champion",
            "played": 101,
            "winRate": 0.8613861386138614
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.7971014492753623
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.5882352941176471
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
            "played": 188,
            "winRate": 0.8085106382978723
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
        "offered": 209,
        "played": 110,
        "ignored": 171,
        "selectionRate": 0.5263157894736842,
        "wins": 75,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.6818181818181818,
        "averageFlips": 0.4727272727272727,
        "failedImpactRate": 0.35,
        "averageFlipMargin": 2.1153846153846154,
        "averageEffectAmount": 1.690909090909091,
        "averageDamageDealt": 1.1090909090909091,
        "averageDamageTaken": 0.11818181818181818,
        "averageNetDamage": 0.990909090909091,
        "lethalMoves": 5,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.7804878048780488
          },
          {
            "modelId": "regular",
            "played": 22,
            "winRate": 0.6818181818181818
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.7692307692307693
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 110,
            "winRate": 0.6818181818181818
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
        "offered": 115,
        "played": 51,
        "ignored": 79,
        "selectionRate": 0.4434782608695652,
        "wins": 38,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.7450980392156863,
        "averageFlips": 0.21568627450980393,
        "failedImpactRate": 0.56,
        "averageFlipMargin": 2.8181818181818183,
        "averageEffectAmount": 1.588235294117647,
        "averageDamageDealt": 0.7647058823529411,
        "averageDamageTaken": 0.37254901960784315,
        "averageNetDamage": 0.392156862745098,
        "lethalMoves": 3,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.38095238095238093
          },
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
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
            "played": 51,
            "winRate": 0.7450980392156863
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
        "offered": 151,
        "played": 51,
        "ignored": 126,
        "selectionRate": 0.33774834437086093,
        "wins": 30,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.5882352941176471,
        "averageFlips": 0.4117647058823529,
        "failedImpactRate": 0.5625,
        "averageFlipMargin": 2.0476190476190474,
        "averageEffectAmount": 1.2156862745098038,
        "averageDamageDealt": 2.156862745098039,
        "averageDamageTaken": 0.8431372549019608,
        "averageNetDamage": 1.3137254901960782,
        "lethalMoves": 3,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.4117647058823529
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 0.6
          },
          {
            "modelId": "regular",
            "played": 9,
            "winRate": 0.6666666666666666
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
            "played": 51,
            "winRate": 0.5882352941176471
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
        "offered": 183,
        "played": 50,
        "ignored": 155,
        "selectionRate": 0.273224043715847,
        "wins": 33,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.66,
        "averageFlips": 0.24,
        "failedImpactRate": 0.7333333333333333,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 0.62,
        "averageDamageDealt": 1.98,
        "averageDamageTaken": 0.92,
        "averageNetDamage": 1.06,
        "lethalMoves": 2,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.7647058823529411
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.2
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
            "played": 50,
            "winRate": 0.66
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
        "offered": 76,
        "played": 44,
        "ignored": 52,
        "selectionRate": 0.5789473684210527,
        "wins": 36,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.8181818181818182,
        "averageFlips": 0.5227272727272727,
        "failedImpactRate": 0.3235294117647059,
        "averageFlipMargin": 1.6956521739130435,
        "averageEffectAmount": 1.3863636363636365,
        "averageDamageDealt": 1.4090909090909092,
        "averageDamageTaken": 0.09090909090909091,
        "averageNetDamage": 1.3181818181818183,
        "lethalMoves": 3,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 0.8571428571428571
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
            "played": 44,
            "winRate": 0.8181818181818182
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
        "offered": 72,
        "played": 35,
        "ignored": 57,
        "selectionRate": 0.4861111111111111,
        "wins": 28,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.5428571428571428,
        "failedImpactRate": 0.4411764705882353,
        "averageFlipMargin": 1.6842105263157894,
        "averageEffectAmount": 0.8571428571428571,
        "averageDamageDealt": 1.4,
        "averageDamageTaken": 0.34285714285714286,
        "averageNetDamage": 1.057142857142857,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.9130434782608695
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "beginner",
            "played": 2,
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
            "played": 35,
            "winRate": 0.8
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
        "offered": 61,
        "played": 29,
        "ignored": 48,
        "selectionRate": 0.47540983606557374,
        "wins": 22,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.7586206896551724,
        "averageFlips": 0.41379310344827586,
        "failedImpactRate": 0.45454545454545453,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 1.8275862068965518,
        "averageDamageDealt": 0.7586206896551724,
        "averageDamageTaken": 0.13793103448275862,
        "averageNetDamage": 0.6206896551724137,
        "lethalMoves": 3,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 0.6666666666666666
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
            "played": 29,
            "winRate": 0.7586206896551724
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
        "offered": 56,
        "played": 28,
        "ignored": 39,
        "selectionRate": 0.5,
        "wins": 21,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.21428571428571427,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.6071428571428572,
        "averageDamageDealt": 1.5357142857142858,
        "averageDamageTaken": 0.2857142857142857,
        "averageNetDamage": 1.25,
        "lethalMoves": 4,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.5
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
            "played": 28,
            "winRate": 0.75
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
        "offered": 41,
        "played": 27,
        "ignored": 30,
        "selectionRate": 0.6585365853658537,
        "wins": 16,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.5925925925925926,
        "averageFlips": 0.7407407407407407,
        "failedImpactRate": 0.16666666666666666,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.1111111111111112,
        "averageDamageDealt": 0.8518518518518519,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.8518518518518519,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.5882352941176471
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.6
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 27,
            "winRate": 0.5925925925925926
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
        "offered": 58,
        "played": 24,
        "ignored": 48,
        "selectionRate": 0.41379310344827586,
        "wins": 20,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 1.625,
        "averageEffectAmount": 2.375,
        "averageDamageDealt": 2.25,
        "averageDamageTaken": 0.7916666666666666,
        "averageNetDamage": 1.4583333333333335,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
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
        "offered": 43,
        "played": 24,
        "ignored": 29,
        "selectionRate": 0.5581395348837209,
        "wins": 15,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.20833333333333334,
        "failedImpactRate": 0.7222222222222222,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.9166666666666667,
        "averageDamageDealt": 0.25,
        "averageDamageTaken": 0.16666666666666666,
        "averageNetDamage": 0.08333333333333334,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.3076923076923077
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 24,
            "winRate": 0.625
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
        "offered": 77,
        "played": 21,
        "ignored": 62,
        "selectionRate": 0.2727272727272727,
        "wins": 12,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.38095238095238093,
        "failedImpactRate": 0.5555555555555556,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.0952380952380953,
        "averageDamageDealt": 1.0952380952380953,
        "averageDamageTaken": 0.09523809523809523,
        "averageNetDamage": 1,
        "lethalMoves": 2,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.875
          },
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.125
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.8
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 21,
            "winRate": 0.5714285714285714
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
        "offered": 52,
        "played": 20,
        "ignored": 39,
        "selectionRate": 0.38461538461538464,
        "wins": 16,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 1.8,
        "averageEffectAmount": 1.9,
        "averageDamageDealt": 1.1,
        "averageDamageTaken": 0.25,
        "averageNetDamage": 0.8500000000000001,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.8235294117647058
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
        "offered": 30,
        "played": 14,
        "ignored": 25,
        "selectionRate": 0.4666666666666667,
        "wins": 11,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.7857142857142857,
        "averageFlips": 0.2857142857142857,
        "failedImpactRate": 0.42857142857142855,
        "averageFlipMargin": 0.75,
        "averageEffectAmount": 0.9285714285714286,
        "averageDamageDealt": 0.14285714285714285,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.14285714285714285,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0.7
          },
          {
            "modelId": "regular",
            "played": 3,
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
            "played": 14,
            "winRate": 0.7857142857142857
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
        "offered": 46,
        "played": 12,
        "ignored": 37,
        "selectionRate": 0.2608695652173913,
        "wins": 8,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 2.75,
        "averageEffectAmount": 2,
        "averageDamageDealt": 1.6666666666666667,
        "averageDamageTaken": 0.75,
        "averageNetDamage": 0.9166666666666667,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.5
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
        "offered": 52,
        "played": 10,
        "ignored": 44,
        "selectionRate": 0.19230769230769232,
        "wins": 7,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.7,
        "averageFlips": 0.3,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 0.3,
        "averageDamageDealt": 3.1,
        "averageDamageTaken": 1.1,
        "averageNetDamage": 2,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "regular",
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
            "played": 10,
            "winRate": 0.7
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
        "offered": 10,
        "played": 8,
        "ignored": 7,
        "selectionRate": 0.8,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.625,
        "failedImpactRate": 0.375,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 1.75,
        "averageDamageDealt": 1,
        "averageDamageTaken": 0.25,
        "averageNetDamage": 0.75,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
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
        "offered": 20,
        "played": 4,
        "ignored": 16,
        "selectionRate": 0.2,
        "wins": 2,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.25,
        "failedImpactRate": 0.75,
        "averageFlipMargin": 3,
        "averageEffectAmount": 1.25,
        "averageDamageDealt": 3,
        "averageDamageTaken": 1.5,
        "averageNetDamage": 1.5,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
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
        "offered": 11,
        "played": 3,
        "ignored": 9,
        "selectionRate": 0.2727272727272727,
        "wins": 1,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0,
        "averageFlipMargin": 3.5,
        "averageEffectAmount": 1.3333333333333333,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
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
            "played": 3,
            "winRate": 0.3333333333333333
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
        "sourceType": "reward",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "behind-on-board",
          "common",
          "engine",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 6,
        "played": 3,
        "ignored": 4,
        "selectionRate": 0.5,
        "wins": 1,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.6666666666666667,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
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
            "played": 3,
            "winRate": 0.3333333333333333
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
        "sourceType": "enemy-upgrade",
        "sideTotal": 13,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "combo-2",
          "engine",
          "familiar",
          "uncommon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 4,
        "played": 2,
        "ignored": 3,
        "selectionRate": 0.5,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.5,
        "averageDamageDealt": 1.5,
        "averageDamageTaken": 2,
        "averageNetDamage": -0.5,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
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
            "played": 2,
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
        "offered": 3059,
        "played": 1545,
        "ignored": 2425,
        "selectionRate": 0.5050670153644982,
        "wins": 1132,
        "losses": 413,
        "draws": 0,
        "winRateWhenPlayed": 0.7326860841423948,
        "averageFlips": 0.3482200647249191,
        "averageDamageDealt": 0.8498381877022654,
        "averageNetDamage": 0.6381877022653721,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 434,
            "winRateWhenPlayed": 0.7096774193548387
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 413,
            "winRateWhenPlayed": 0.7239709443099274
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 353,
            "winRateWhenPlayed": 0.7280453257790368
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 315,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 21,
            "winRateWhenPlayed": 0.5714285714285714
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
        "offered": 2005,
        "played": 1091,
        "ignored": 1554,
        "selectionRate": 0.5441396508728179,
        "wins": 844,
        "losses": 247,
        "draws": 0,
        "winRateWhenPlayed": 0.773602199816682,
        "averageFlips": 0.7112740604949588,
        "averageDamageDealt": 2.1723189734188817,
        "averageNetDamage": 1.7891842346471127,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 297,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 285,
            "winRateWhenPlayed": 0.7719298245614035
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 253,
            "winRateWhenPlayed": 0.7707509881422925
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 188,
            "winRateWhenPlayed": 0.8085106382978723
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 35,
            "winRateWhenPlayed": 0.8
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
        "offered": 457,
        "played": 211,
        "ignored": 357,
        "selectionRate": 0.4617067833698031,
        "wins": 139,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.6587677725118484,
        "averageFlips": 0.4075829383886256,
        "averageDamageDealt": 1.2559241706161137,
        "averageNetDamage": 1.018957345971564,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 110,
            "winRateWhenPlayed": 0.6818181818181818
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 51,
            "winRateWhenPlayed": 0.7450980392156863
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 22,
            "winRateWhenPlayed": 0.4090909090909091
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 20,
            "winRateWhenPlayed": 0.55
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
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
        "id": "revenant",
        "label": "revenant",
        "offered": 368,
        "played": 135,
        "ignored": 295,
        "selectionRate": 0.36684782608695654,
        "wins": 93,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.6888888888888889,
        "averageFlips": 0.4148148148148148,
        "averageDamageDealt": 1.6962962962962962,
        "averageNetDamage": 1.1037037037037036,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 51,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 44,
            "winRateWhenPlayed": 0.8181818181818182
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 14,
            "winRateWhenPlayed": 0.7857142857142857
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 12,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 10,
            "winRateWhenPlayed": 0.7
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
        "offered": 237,
        "played": 126,
        "ignored": 175,
        "selectionRate": 0.5316455696202531,
        "wins": 72,
        "losses": 54,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.3888888888888889,
        "averageDamageDealt": 0.9047619047619048,
        "averageNetDamage": 0.6904761904761905,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 42,
            "winRateWhenPlayed": 0.5238095238095238
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 28,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 24,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 15,
            "winRateWhenPlayed": 0.26666666666666666
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 8,
            "winRateWhenPlayed": 0.75
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
        "offered": 356,
        "played": 123,
        "ignored": 292,
        "selectionRate": 0.3455056179775281,
        "wins": 91,
        "losses": 32,
        "draws": 0,
        "winRateWhenPlayed": 0.7398373983739838,
        "averageFlips": 0.3008130081300813,
        "averageDamageDealt": 1.6016260162601625,
        "averageNetDamage": 0.9999999999999999,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 50,
            "winRateWhenPlayed": 0.66
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 29,
            "winRateWhenPlayed": 0.7586206896551724
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 24,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.8
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
        "offered": 1418,
        "played": 951,
        "ignored": 1107,
        "selectionRate": 0.6706629055007052,
        "wins": 689,
        "losses": 262,
        "draws": 0,
        "winRateWhenPlayed": 0.7245005257623555,
        "averageFlips": 0.5110410094637224,
        "averageDamageDealt": 0.9221871713985279,
        "averageNetDamage": 0.786540483701367,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 429,
            "winRateWhenPlayed": 0.7062937062937062
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 297,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 110,
            "winRateWhenPlayed": 0.6818181818181818
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 44,
            "winRateWhenPlayed": 0.8181818181818182
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 42,
            "winRateWhenPlayed": 0.5238095238095238
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
        "offered": 1175,
        "played": 753,
        "ignored": 900,
        "selectionRate": 0.6408510638297872,
        "wins": 554,
        "losses": 199,
        "draws": 0,
        "winRateWhenPlayed": 0.7357237715803453,
        "averageFlips": 0.5683930942895087,
        "averageDamageDealt": 0.7768924302788844,
        "averageNetDamage": 0.6905710491367861,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 413,
            "winRateWhenPlayed": 0.7239709443099274
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 253,
            "winRateWhenPlayed": 0.7707509881422925
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 24,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 21,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 20,
            "winRateWhenPlayed": 0.55
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
        "offered": 1948,
        "played": 748,
        "ignored": 1529,
        "selectionRate": 0.3839835728952772,
        "wins": 579,
        "losses": 169,
        "draws": 0,
        "winRateWhenPlayed": 0.7740641711229946,
        "averageFlips": 0.4050802139037433,
        "averageDamageDealt": 2.229946524064171,
        "averageNetDamage": 1.7419786096256684,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 285,
            "winRateWhenPlayed": 0.8210526315789474
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 255,
            "winRateWhenPlayed": 0.807843137254902
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 51,
            "winRateWhenPlayed": 0.7450980392156863
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 51,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 50,
            "winRateWhenPlayed": 0.66
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
        "offered": 1494,
        "played": 650,
        "ignored": 1202,
        "selectionRate": 0.4350736278447122,
        "wins": 476,
        "losses": 174,
        "draws": 0,
        "winRateWhenPlayed": 0.7323076923076923,
        "averageFlips": 0.43538461538461537,
        "averageDamageDealt": 1.7876923076923077,
        "averageNetDamage": 1.4,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 350,
            "winRateWhenPlayed": 0.7342857142857143
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 188,
            "winRateWhenPlayed": 0.8085106382978723
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 35,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 22,
            "winRateWhenPlayed": 0.4090909090909091
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.8
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
        "offered": 255,
        "played": 77,
        "ignored": 197,
        "selectionRate": 0.30196078431372547,
        "wins": 44,
        "losses": 33,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.35064935064935066,
        "averageDamageDealt": 2.038961038961039,
        "averageNetDamage": 0.3896103896103895,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 30,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "ember-imp",
            "name": "Fusion sylvestre",
            "played": 30,
            "winRateWhenPlayed": 0.4666666666666667
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 9,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "wandering-glyph",
            "name": "Fusion sylvestre",
            "played": 5,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "star-witch",
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
        "offered": 44,
        "played": 25,
        "ignored": 29,
        "selectionRate": 0.5681818181818182,
        "wins": 16,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.64,
        "averageFlips": 0.2,
        "averageDamageDealt": 0.24,
        "averageNetDamage": 0.07999999999999999,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 24,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "reward-common-10",
            "name": "Carte commune 10",
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
        "id": "finisher",
        "label": "finisher",
        "offered": 129,
        "played": 19,
        "ignored": 118,
        "selectionRate": 0.14728682170542637,
        "wins": 9,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.47368421052631576,
        "averageFlips": 0.3684210526315789,
        "averageDamageDealt": 1.368421052631579,
        "averageNetDamage": 0.4736842105263158,
        "topCards": [
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 7,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 4,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 4,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 3,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
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
        "offered": 19,
        "played": 8,
        "ignored": 16,
        "selectionRate": 0.42105263157894735,
        "wins": 4,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.375,
        "averageDamageDealt": 0.875,
        "averageNetDamage": -1.25,
        "topCards": [
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 2,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
        ]
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 6009,
        "played": 3075,
        "ignored": 4708,
        "selectionRate": 0.5117324013979031,
        "wins": 2278,
        "losses": 797,
        "draws": 0,
        "winRateWhenPlayed": 0.7408130081300813,
        "averageFlips": 0.479349593495935,
        "averageDamageDealt": 1.4045528455284553,
        "averageNetDamage": 1.1082926829268294,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 434,
            "winRateWhenPlayed": 0.7096774193548387
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 413,
            "winRateWhenPlayed": 0.7239709443099274
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 352,
            "winRateWhenPlayed": 0.7301136363636364
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 315,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 297,
            "winRateWhenPlayed": 0.7777777777777778
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
        "offered": 299,
        "played": 128,
        "ignored": 235,
        "selectionRate": 0.4280936454849498,
        "wins": 77,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.6015625,
        "averageFlips": 0.453125,
        "averageDamageDealt": 0.875,
        "averageNetDamage": 0.5859375,
        "topCards": [
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 35,
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 27,
            "winRateWhenPlayed": 0.5925925925925926
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 24,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 21,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 15,
            "winRateWhenPlayed": 0.26666666666666666
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
        "offered": 174,
        "played": 28,
        "ignored": 155,
        "selectionRate": 0.16091954022988506,
        "wins": 16,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.35714285714285715,
        "averageDamageDealt": 2.0357142857142856,
        "averageNetDamage": 1.0357142857142856,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 10,
            "winRateWhenPlayed": 0.7
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 7,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 4,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 4,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 3,
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
        "count": 390,
        "wins": 290,
        "losses": 100,
        "draws": 0,
        "winRate": 0.7435897435897436,
        "averageFlips": 0.3769230769230769,
        "averageDamageDealt": 1.9820512820512821,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 344,
        "wins": 278,
        "losses": 66,
        "draws": 0,
        "winRate": 0.8081395348837209,
        "averageFlips": 0.25290697674418605,
        "averageDamageDealt": 3.822674418604651,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 283,
        "wins": 222,
        "losses": 61,
        "draws": 0,
        "winRate": 0.784452296819788,
        "averageFlips": 0.7491166077738516,
        "averageDamageDealt": 3.590106007067138,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 242,
        "wins": 182,
        "losses": 60,
        "draws": 0,
        "winRate": 0.7520661157024794,
        "averageFlips": 0.384297520661157,
        "averageDamageDealt": 0.12396694214876033,
        "averageEffectAmount": 1.3099173553719008,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 242,
        "wins": 182,
        "losses": 60,
        "draws": 0,
        "winRate": 0.7520661157024794,
        "averageFlips": 0.384297520661157,
        "averageDamageDealt": 0.12396694214876033,
        "averageEffectAmount": 1.0082644628099173,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 172,
        "wins": 135,
        "losses": 37,
        "draws": 0,
        "winRate": 0.7848837209302325,
        "averageFlips": 0.9534883720930233,
        "averageDamageDealt": 2.0348837209302326,
        "averageEffectAmount": 0.5813953488372093,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 135,
        "wins": 107,
        "losses": 28,
        "draws": 0,
        "winRate": 0.7925925925925926,
        "averageFlips": 0.42962962962962964,
        "averageDamageDealt": 0.7925925925925926,
        "averageEffectAmount": 1.2962962962962963,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 130,
        "wins": 110,
        "losses": 20,
        "draws": 0,
        "winRate": 0.8461538461538461,
        "averageFlips": 1.1,
        "averageDamageDealt": 2.0692307692307694,
        "averageEffectAmount": 1.2923076923076924,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 124,
        "wins": 90,
        "losses": 34,
        "draws": 0,
        "winRate": 0.7258064516129032,
        "averageFlips": 0.13709677419354838,
        "averageDamageDealt": 0.06451612903225806,
        "averageEffectAmount": 4.548387096774194,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 118,
        "wins": 111,
        "losses": 7,
        "draws": 0,
        "winRate": 0.940677966101695,
        "averageFlips": 0.4915254237288136,
        "averageDamageDealt": 7.533898305084746,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 98,
        "wins": 87,
        "losses": 11,
        "draws": 0,
        "winRate": 0.8877551020408163,
        "averageFlips": 1.153061224489796,
        "averageDamageDealt": 3.0918367346938775,
        "averageEffectAmount": 1.1938775510204083,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 78,
        "wins": 58,
        "losses": 20,
        "draws": 0,
        "winRate": 0.7435897435897436,
        "averageFlips": 0.34615384615384615,
        "averageDamageDealt": 1.3205128205128205,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 78,
        "wins": 56,
        "losses": 22,
        "draws": 0,
        "winRate": 0.717948717948718,
        "averageFlips": 0.20512820512820512,
        "averageDamageDealt": 4.166666666666667,
        "averageEffectAmount": 1.141025641025641,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+familiar",
        "kind": "stack-hybrid",
        "label": "arcane + familiar dans la pile",
        "count": 67,
        "wins": 50,
        "losses": 17,
        "draws": 0,
        "winRate": 0.746268656716418,
        "averageFlips": 0.3582089552238806,
        "averageDamageDealt": 0.4925373134328358,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 53,
        "wins": 30,
        "losses": 23,
        "draws": 0,
        "winRate": 0.5660377358490566,
        "averageFlips": 0.3018867924528302,
        "averageDamageDealt": 0.49056603773584906,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 41,
        "wins": 21,
        "losses": 20,
        "draws": 0,
        "winRate": 0.5121951219512195,
        "averageFlips": 0.2926829268292683,
        "averageDamageDealt": 1.4878048780487805,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->demon",
        "kind": "family-chain",
        "label": "arcane -> demon",
        "count": 40,
        "wins": 32,
        "losses": 8,
        "draws": 0,
        "winRate": 0.8,
        "averageFlips": 0.525,
        "averageDamageDealt": 2.375,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+demon",
        "kind": "friendly-adjacent",
        "label": "arcane allie + demon",
        "count": 39,
        "wins": 33,
        "losses": 6,
        "draws": 0,
        "winRate": 0.8461538461538461,
        "averageFlips": 0.5897435897435898,
        "averageDamageDealt": 3.5384615384615383,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->arcane",
        "kind": "family-chain",
        "label": "demon -> arcane",
        "count": 35,
        "wins": 27,
        "losses": 8,
        "draws": 0,
        "winRate": 0.7714285714285715,
        "averageFlips": 0.34285714285714286,
        "averageDamageDealt": 1.8857142857142857,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 34,
        "wins": 18,
        "losses": 16,
        "draws": 0,
        "winRate": 0.5294117647058824,
        "averageFlips": 0.6764705882352942,
        "averageDamageDealt": 1.2058823529411764,
        "averageEffectAmount": 1.1176470588235294,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "stack-hybrid:automaton+demon",
        "kind": "stack-hybrid",
        "label": "automaton + demon dans la pile",
        "count": 33,
        "wins": 21,
        "losses": 12,
        "draws": 0,
        "winRate": 0.6363636363636364,
        "averageFlips": 0.6363636363636364,
        "averageDamageDealt": 1.2424242424242424,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "stack-hybrid:demon+familiar",
        "kind": "stack-hybrid",
        "label": "demon + familiar dans la pile",
        "count": 30,
        "wins": 23,
        "losses": 7,
        "draws": 0,
        "winRate": 0.7666666666666667,
        "averageFlips": 0.4,
        "averageDamageDealt": 1.5666666666666667,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:demon+arcane",
        "kind": "friendly-adjacent",
        "label": "demon allie + arcane",
        "count": 29,
        "wins": 27,
        "losses": 2,
        "draws": 0,
        "winRate": 0.9310344827586207,
        "averageFlips": 0.1724137931034483,
        "averageDamageDealt": 7.482758620689655,
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
        "count": 29,
        "wins": 18,
        "losses": 11,
        "draws": 0,
        "winRate": 0.6206896551724138,
        "averageFlips": 0.27586206896551724,
        "averageDamageDealt": 4.0344827586206895,
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
        "sampleSize": 60,
        "id": "card-foxfire-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer sous-performe",
        "detail": "22 plays, 41% win, net PV 2.23.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 55,
        "id": "card-clock-sentinel-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Sentinelle d'horloge sous-performe",
        "detail": "42 plays, 52% win, net PV 0.86.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 40,
        "id": "card-heron-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume sous-performe",
        "detail": "20 plays, 55% win, net PV 1.50.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 40,
        "id": "card-reward-uncommon-04-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 04 sous-performe",
        "detail": "15 plays, 27% win, net PV 0.13.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 48,
        "id": "card-reward-rare-06-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 06 est ignoree par les bots",
        "detail": "48 offres, 15% selection, 57% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 27,
        "id": "card-reward-rare-01-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 01 est ignoree par les bots",
        "detail": "27 offres, 15% selection, 75% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 25,
        "id": "card-reward-rare-02-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 02 est ignoree par les bots",
        "detail": "25 offres, 12% selection, 0% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 390,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "390 occurrences, 74% win, 0.38 flips, 1.98 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 344,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "344 occurrences, 81% win, 0.25 flips, 3.82 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 283,
        "title": "demon -> demon ressort comme combo",
        "detail": "283 occurrences, 78% win, 0.75 flips, 3.59 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 237,
        "id": "family-automaton-buff",
        "severity": "watch",
        "action": "verify",
        "title": "automaton manque d'attraction",
        "detail": "237 offres, 53% selection, 57% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 174,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "174 offres, 16% selection, 57% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 172,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "172 occurrences, 78% win, 0.95 flips, 2.03 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 130,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "130 occurrences, 85% win, 1.10 flips, 2.07 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 129,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "129 offres, 15% selection, 47% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 118,
        "title": "demon allie + demon ressort comme combo",
        "detail": "118 occurrences, 94% win, 0.49 flips, 7.53 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 98,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "98 occurrences, 89% win, 1.15 flips, 3.09 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 78,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "78 occurrences, 72% win, 0.21 flips, 4.17 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "skill-inversion-current-family-start-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur Depart actuel - famille 12 cartes (62.5% contre 37.5%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-family-automaton-nerf",
      "severity": "problem",
      "title": "automaton domine l'echantillon",
      "detail": "1464 plays, 65% win, net PV 0.30. Confiance high, echantillon 2650.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-adventure-card-foxfire-buff",
      "severity": "problem",
      "title": "Run complet: Requin runefer sous-performe",
      "detail": "22 plays, 41% win, net PV 2.23. Confiance high, echantillon 60.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-clock-sentinel-buff",
      "severity": "problem",
      "title": "Run complet: Sentinelle d'horloge sous-performe",
      "detail": "42 plays, 52% win, net PV 0.86. Confiance high, echantillon 55.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-heron-buff",
      "severity": "problem",
      "title": "Run complet: Oiselle aubeplume sous-performe",
      "detail": "20 plays, 55% win, net PV 1.50. Confiance high, echantillon 40.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "champion-underperforms-current-family-start",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 37.5% contre Expert sur Depart actuel - famille 12 cartes.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:automaton+automaton",
      "severity": "watch",
      "title": "automaton allie + automaton ressort comme combo",
      "detail": "259 occurrences, 73% win, 0.26 flips, 1.99 degats. Confiance high, echantillon 259.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:revenant+revenant",
      "severity": "watch",
      "title": "revenant allie + revenant ressort comme combo",
      "detail": "210 occurrences, 40% win, 0.14 flips, 1.79 degats. Confiance high, echantillon 210.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260829-005235",
        "generatedAt": "2026-08-29T00:52:35.773Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5833333333333334
        },
        "familyWinRates": {
          "human": 0.4263261296660118,
          "automaton": 0.653997378768021,
          "arcane": 0.5260695187165776,
          "revenant": 0.3884476534296029,
          "familiar": 0.6052824651504035,
          "demon": 0.6813953488372093
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "demon-vs-revenant": 1,
          "arcane-vs-revenant": 0.875,
          "demon-vs-human": 0.875,
          "arcane-vs-human": 0.25,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.375,
          "automaton-vs-familiar": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-familiar": 0.5,
          "automaton-vs-revenant": 0.5,
          "demon-vs-familiar": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.375,
          "expert": 0.625,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7063829787234043
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7014925373134329
          }
        ]
      },
      {
        "reportId": "ai-lab-20260829-071254",
        "generatedAt": "2026-08-29T07:12:54.446Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.4166666666666667,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.5589005235602095,
          "automaton": 0.6402640264026402,
          "human": 0.5156037991858887,
          "familiar": 0.5550692924872356,
          "revenant": 0.3393939393939394,
          "demon": 0.6431095406360424
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "demon-vs-familiar": 1,
          "demon-vs-revenant": 1,
          "arcane-vs-familiar": 0.125,
          "demon-vs-human": 0.875,
          "automaton-vs-familiar": 0.75,
          "arcane-vs-automaton": 0.375,
          "automaton-vs-demon": 0.625,
          "automaton-vs-human": 0.625,
          "automaton-vs-revenant": 0.625,
          "familiar-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.25,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.25,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3342696629213483
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.30223880597014924
          }
        ]
      },
      {
        "reportId": "ai-lab-20260829-192121",
        "generatedAt": "2026-08-29T19:21:21.805Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.75,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.8183730715287517,
          "arcane": 0.4549929676511955,
          "human": 0.4749455337690632,
          "familiar": 0.587386018237082,
          "revenant": 0.30890464933018125,
          "demon": 0.701067615658363
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.125,
          "arcane-vs-revenant": 0.875,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-human": 0.875,
          "automaton-vs-revenant": 0.875,
          "arcane-vs-automaton": 0.25,
          "arcane-vs-demon": 0.25,
          "demon-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
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
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7069767441860465
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7307692307692307
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6881720430107527
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3020527859237537
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2958579881656805
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.33134328358208953
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3058823529411765
          }
        ]
      },
      {
        "reportId": "ai-lab-20260829-231043",
        "generatedAt": "2026-08-29T23:10:43.581Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.875,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.9583333333333334,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "arcane": 0.5239973701512163,
          "automaton": 0.7376271186440678,
          "familiar": 0.5339873861247372,
          "human": 0.4414931801866475,
          "revenant": 0.4715743440233236,
          "demon": 0.5651685393258427
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-revenant": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-familiar": 0.375,
          "automaton-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-human": 0.5,
          "familiar-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.25,
          "expert": 0.75,
          "champion": 0.875
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260830-023546",
        "generatedAt": "2026-08-30T02:35:46.897Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "automaton": 0.735254691689008,
          "arcane": 0.42252510760401724,
          "familiar": 0.5320088300220751,
          "human": 0.5281155015197568,
          "revenant": 0.4261904761904762,
          "demon": 0.6376470588235295
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-human": 0.25,
          "automaton-vs-human": 0.75,
          "demon-vs-familiar": 0.75,
          "arcane-vs-familiar": 0.375,
          "arcane-vs-revenant": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.375,
          "expert": 0.5,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6851851851851852
          }
        ]
      },
      {
        "reportId": "ai-lab-20260830-073630",
        "generatedAt": "2026-08-30T07:36:30.680Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.75,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.4583333333333333
        },
        "familyWinRates": {
          "automaton": 0.7056878306878307,
          "human": 0.5325697924123121,
          "arcane": 0.3645680819912152,
          "revenant": 0.47226386806596704,
          "familiar": 0.6248120300751879,
          "demon": 0.5686046511627907
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "arcane-vs-familiar": 0.125,
          "arcane-vs-human": 0.25,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-revenant": 0.375,
          "automaton-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-revenant": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.5,
          "expert": 0.625,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34564643799472294
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34173669467787116
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32848837209302323
          }
        ]
      },
      {
        "reportId": "ai-lab-20260830-184244",
        "generatedAt": "2026-08-30T18:42:44.748Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.4583333333333333
        },
        "familyWinRates": {
          "automaton": 0.687007874015748,
          "revenant": 0.48802190280629704,
          "arcane": 0.4484181568088033,
          "human": 0.5163535142658316,
          "familiar": 0.5668371073776479,
          "demon": 0.625
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0.125,
          "demon-vs-familiar": 0.875,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.625,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "automaton-vs-revenant": 0.625,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.375,
          "champion": 0.875
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260830-221355",
        "generatedAt": "2026-08-30T22:13:55.882Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.3333333333333333
        },
        "familyWinRates": {
          "automaton": 0.7207958921694481,
          "arcane": 0.5326666666666666,
          "revenant": 0.34593837535014005,
          "human": 0.5108619481429573,
          "familiar": 0.49923664122137407,
          "demon": 0.7005847953216374
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "arcane-vs-revenant": 0.875,
          "demon-vs-familiar": 0.875,
          "demon-vs-revenant": 0.875,
          "arcane-vs-automaton": 0.25,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-familiar": 0.375,
          "automaton-vs-demon": 0.375,
          "automaton-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-human": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.125,
          "expert": 0.375,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.680672268907563
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7075471698113207
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7121951219512195
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.705
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3076923076923077
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.339041095890411
          }
        ]
      },
      {
        "reportId": "ai-lab-20260831-013542",
        "generatedAt": "2026-08-31T01:35:42.830Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.4583333333333333
        },
        "familyWinRates": {
          "automaton": 0.7945659377070908,
          "human": 0.5142857142857142,
          "arcane": 0.37176799440950387,
          "familiar": 0.6745068285280729,
          "revenant": 0.2722433460076046,
          "demon": 0.6897767332549941
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "arcane-vs-revenant": 1,
          "demon-vs-human": 1,
          "arcane-vs-human": 0.125,
          "automaton-vs-revenant": 0.875,
          "demon-vs-familiar": 0.875,
          "arcane-vs-automaton": 0.25,
          "automaton-vs-demon": 0.75,
          "automaton-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "automaton-vs-human": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.5,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7013574660633484
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7004608294930875
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6902173913043478
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2804532577903683
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3125
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.29512893982808025
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.28530259365994237
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.21428571428571427
          }
        ]
      },
      {
        "reportId": "ai-lab-20260831-051326",
        "generatedAt": "2026-08-31T05:13:26.891Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "arcane": 0.5336721728081322,
          "human": 0.5006648936170213,
          "automaton": 0.7016238159675237,
          "revenant": 0.3316654753395282,
          "familiar": 0.5774647887323944,
          "demon": 0.5985489721886336
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-familiar": 0.375,
          "arcane-vs-human": 0.375,
          "arcane-vs-revenant": 0.625,
          "automaton-vs-human": 0.625,
          "demon-vs-familiar": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.25,
          "expert": 0.25,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3449197860962567
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32620320855614976
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.33692722371967654
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3142857142857143
          }
        ]
      },
      {
        "reportId": "ai-lab-20260831-093727",
        "generatedAt": "2026-08-31T09:37:27.298Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "human": 0.4524128686327078,
          "automaton": 0.7393397524071527,
          "arcane": 0.5512367491166078,
          "revenant": 0.36266855926188785,
          "familiar": 0.5756240822320118,
          "demon": 0.6126760563380281
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "arcane-vs-familiar": 0.125,
          "demon-vs-revenant": 0.875,
          "arcane-vs-demon": 0.25,
          "arcane-vs-human": 0.75,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "human-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "demon-vs-familiar": 0.375,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.5,
          "regular": 0.25,
          "expert": 0.625,
          "champion": 0.75
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260831-194359",
        "generatedAt": "2026-08-31T19:43:59.119Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.9166666666666666,
          "expert-vs-champion": 0.375
        },
        "familyWinRates": {
          "human": 0.5048732943469786,
          "arcane": 0.46112600536193027,
          "automaton": 0.6461748633879781,
          "familiar": 0.6188340807174888,
          "revenant": 0.43787878787878787,
          "demon": 0.5625
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0.125,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "automaton-vs-human": 0.625,
          "demon-vs-familiar": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-human": 0.5,
          "arcane-vs-revenant": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.125,
          "expert": 0.5,
          "champion": 0.75
        },
        "cardSignals": []
      }
    ],
    "signals": [
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "72% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.7150593544479383
      },
      {
        "id": "trend-starter-matchup-demon-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs human reste desequilibre",
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
        "detail": "La famille de gauche gagne 83% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.8333333333333334
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
        "averageRate": 0.3870992814231447
      },
      {
        "id": "trend-starter-matchup-arcane-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 73% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.7291666666666666
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 76% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.7604166666666666
      },
      {
        "id": "trend-starter-matchup-demon-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 74% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.7395833333333334
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 23% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.22916666666666666
      },
      {
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 74% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.7395833333333334
      },
      {
        "id": "trend-skill-expert-vs-champion",
        "kind": "skill",
        "severity": "watch",
        "title": "expert vs champion ne respecte pas la progression",
        "detail": "Le modele superieur gagne 45% en moyenne sur 12 rapports.",
        "recommendation": "Bloquer les promotions tant que le modele superieur ne depasse pas regulierement le niveau precedent.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.4513888888888889
      },
      {
        "id": "trend-family-demon",
        "kind": "family",
        "severity": "watch",
        "title": "demon reste trop forte",
        "detail": "63% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.6321732759622558
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 67% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.6666666666666666
      }
    ]
  }
};
