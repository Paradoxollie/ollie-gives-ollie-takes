import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20261009-184845",
  "generatedAt": "2026-10-09T18:48:45.291Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 942,
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
      "wins": 2,
      "losses": 22,
      "draws": 0,
      "winRate": 0.08333333333333333,
      "averageHpEdge": -17.833333333333332
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 34,
      "losses": 14,
      "draws": 0,
      "winRate": 0.7083333333333334,
      "averageHpEdge": 8.041666666666666
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 17,
      "losses": 31,
      "draws": 0,
      "winRate": 0.3541666666666667,
      "averageHpEdge": -3.4583333333333335
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 31,
      "losses": 17,
      "draws": 0,
      "winRate": 0.6458333333333334,
      "averageHpEdge": 3.8333333333333335
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 12,
      "losses": 12,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 1
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
      "startingPlayerWinRate": 0.4166666666666667,
      "averages": {
        "turns": 33,
        "rounds": 3.5833333333333335,
        "flipsPerMatch": 6.416666666666667,
        "flipsPerTurn": 0.19444444444444445,
        "reshuffles": 5.166666666666667,
        "deadTurns": 0.75,
        "finalHpDifference": 10.916666666666666
      },
      "deadTurnFrequency": 0.022727272727272728,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (42%).",
        "Peu de flips par tour (0.19)."
      ]
    }
  ],
  "starterFamilyMatchups": [
    {
      "id": "automaton-vs-revenant",
      "leftFamily": "automaton",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 8,
      "rightWins": 0,
      "draws": 0,
      "leftWinRate": 1,
      "rightWinRate": 0
    },
    {
      "id": "automaton-vs-familiar",
      "leftFamily": "automaton",
      "rightFamily": "familiar",
      "games": 8,
      "leftWins": 7,
      "rightWins": 1,
      "draws": 0,
      "leftWinRate": 0.875,
      "rightWinRate": 0.125
    },
    {
      "id": "arcane-vs-automaton",
      "leftFamily": "arcane",
      "rightFamily": "automaton",
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
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
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
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
    },
    {
      "id": "familiar-vs-human",
      "leftFamily": "familiar",
      "rightFamily": "human",
      "games": 8,
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
    },
    {
      "id": "arcane-vs-human",
      "leftFamily": "arcane",
      "rightFamily": "human",
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
      "id": "arcane-vs-demon",
      "leftFamily": "arcane",
      "rightFamily": "demon",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
    },
    {
      "id": "arcane-vs-familiar",
      "leftFamily": "arcane",
      "rightFamily": "familiar",
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
      "id": "familiar-vs-revenant",
      "leftFamily": "familiar",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 4,
      "rightWins": 4,
      "draws": 0,
      "leftWinRate": 0.5,
      "rightWinRate": 0.5
    },
    {
      "id": "human-vs-revenant",
      "leftFamily": "human",
      "rightFamily": "revenant",
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
          "wins": 2,
          "losses": 22,
          "draws": 0,
          "winRate": 0.08333333333333333,
          "averageHpEdge": -17.833333333333332
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 22,
          "losses": 2,
          "draws": 0,
          "winRate": 0.9166666666666666,
          "averageHpEdge": 17.833333333333332
        }
      ],
      "averages": {
        "turns": 19.208333333333332,
        "rounds": 2.0833333333333335,
        "flipsPerMatch": 8.75,
        "flipsPerTurn": 0.455531453362256,
        "reshuffles": 2.1666666666666665,
        "deadTurns": 0.4583333333333333,
        "finalHpDifference": 19.75
      },
      "deadTurnFrequency": 0.02386117136659436
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
          "wins": 9,
          "winRate": 0.75
        },
        "enemy": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.75
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.75
        }
      ],
      "averages": {
        "turns": 31.333333333333332,
        "rounds": 3.2916666666666665,
        "flipsPerMatch": 8.416666666666666,
        "flipsPerTurn": 0.26861702127659576,
        "reshuffles": 4.583333333333333,
        "deadTurns": 2.125,
        "finalHpDifference": 13.583333333333334
      },
      "deadTurnFrequency": 0.0678191489361702
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
          "wins": 4,
          "winRate": 0.3333333333333333
        },
        "enemy": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
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
          "averageHpEdge": -8.666666666666666
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 8.666666666666666
        }
      ],
      "averages": {
        "turns": 30.458333333333332,
        "rounds": 3.25,
        "flipsPerMatch": 7.041666666666667,
        "flipsPerTurn": 0.23119015047879618,
        "reshuffles": 4.5,
        "deadTurns": 1.2083333333333333,
        "finalHpDifference": 12.416666666666666
      },
      "deadTurnFrequency": 0.03967168262653899
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
          "wins": 4,
          "winRate": 0.3333333333333333
        },
        "enemy": {
          "games": 12,
          "wins": 4,
          "winRate": 0.3333333333333333
        },
        "overallStartingPlayerWinRate": 0.3333333333333333
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1
        },
        {
          "modelId": "champion",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1
        }
      ],
      "averages": {
        "turns": 34.333333333333336,
        "rounds": 3.7083333333333335,
        "flipsPerMatch": 8.583333333333334,
        "flipsPerTurn": 0.25,
        "reshuffles": 5.416666666666667,
        "deadTurns": 1.3333333333333333,
        "finalHpDifference": 12.416666666666666
      },
      "deadTurnFrequency": 0.038834951456310676
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
      "averageLocationsCleared": 3.375,
      "averageFinalDeckSize": 13.375,
      "averageDeckDelta": 1.375,
      "averageCombatWinRate": 0.5294117647058824,
      "averageCombatTurns": 23.470588235294116,
      "averageCombatFlips": 6.882352941176471,
      "averageDeadTurns": 4.411764705882353,
      "averageReshuffles": 2.5294117647058822,
      "averageRewardsClaimed": 1.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.75,
      "averageRemovals": 0,
      "averageFusions": 0.125,
      "familyPickRates": {
        "familiar": 0.125,
        "demon": 0.25,
        "automaton": 0.125,
        "revenant": 0.375,
        "arcane": 0.125
      },
      "nodeMix": {
        "combat": 0.6296296296296297,
        "elite": 0,
        "shop": 0.037037037037037035,
        "chest": 0.1111111111111111,
        "rest": 0.2222222222222222,
        "boss": 0
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
      "averageLocationsCleared": 5.375,
      "averageFinalDeckSize": 13.375,
      "averageDeckDelta": 1.375,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 14.208333333333334,
      "averageCombatFlips": 7,
      "averageDeadTurns": 1.5416666666666667,
      "averageReshuffles": 1.125,
      "averageRewardsClaimed": 2.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.375,
      "averageRemovals": 1,
      "averageFusions": 0.5,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.43478260869565216,
        "elite": 0.021739130434782608,
        "shop": 0.08695652173913043,
        "chest": 0.15217391304347827,
        "rest": 0.2391304347826087,
        "boss": 0.06521739130434782
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
      "averageLocationsCleared": 5.875,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.6923076923076923,
      "averageCombatTurns": 26.884615384615383,
      "averageCombatFlips": 5.576923076923077,
      "averageDeadTurns": 3.6923076923076925,
      "averageReshuffles": 4,
      "averageRewardsClaimed": 3.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 0.625,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4375,
        "elite": 0.08333333333333333,
        "shop": 0.10416666666666667,
        "chest": 0.16666666666666666,
        "rest": 0.1875,
        "boss": 0.020833333333333332
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 1,
      "bossReached": 3,
      "victoryRate": 0.125,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 6.375,
      "averageFinalDeckSize": 12.75,
      "averageDeckDelta": 0.75,
      "averageCombatWinRate": 0.7083333333333334,
      "averageCombatTurns": 27.166666666666668,
      "averageCombatFlips": 4.791666666666667,
      "averageDeadTurns": 4.625,
      "averageReshuffles": 4.291666666666667,
      "averageRewardsClaimed": 3.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.25,
      "averageRemovals": 1.125,
      "averageFusions": 1.25,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.35185185185185186,
        "elite": 0.037037037037037035,
        "shop": 0.18518518518518517,
        "chest": 0.16666666666666666,
        "rest": 0.2037037037037037,
        "boss": 0.05555555555555555
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 1,
      "bossReached": 3,
      "victoryRate": 0.125,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 7.25,
      "averageFinalDeckSize": 13.625,
      "averageDeckDelta": 1.625,
      "averageCombatWinRate": 0.8,
      "averageCombatTurns": 14.657142857142857,
      "averageCombatFlips": 7.457142857142857,
      "averageDeadTurns": 1.3428571428571427,
      "averageReshuffles": 1.457142857142857,
      "averageRewardsClaimed": 4.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 1.375,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.45901639344262296,
        "elite": 0.06557377049180328,
        "shop": 0.18032786885245902,
        "chest": 0.09836065573770492,
        "rest": 0.14754098360655737,
        "boss": 0.04918032786885246
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
      "seed": 1314029000,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 42,
      "totalCombatFlips": 16,
      "totalDeadTurns": 6,
      "totalReshuffles": 5,
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
        "watcher-stone"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1330806619,
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
      "totalCombatTurns": 28,
      "totalCombatFlips": 2,
      "totalDeadTurns": 10,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 28,
          "combatFlips": 2,
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
      "seed": 1347584238,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 58,
      "totalCombatFlips": 17,
      "totalDeadTurns": 13,
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
        "watcher-stone"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
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
        "familiar": 2,
        "demon": 12,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1364361857,
      "selectedFamily": "revenant",
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
      "totalCombatFlips": 23,
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
        "lantern-mushroom"
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
        "automaton": 0,
        "revenant": 13,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 6,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 1381139476,
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
      "totalCombatTurns": 43,
      "totalCombatFlips": 14,
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
        "ancient-sap"
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 7,
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
      "seed": 1397917095,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 44,
      "totalCombatFlips": 13,
      "totalDeadTurns": 8,
      "totalReshuffles": 5,
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
        "moss-dust"
      ],
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 3,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 15,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 7,
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
      "modelId": "beginner",
      "seed": 1414694714,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 89,
      "totalCombatFlips": 23,
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
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 12,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 39,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 8,
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
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 28,
          "combatFlips": 12,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1431472333,
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
      "totalCombatTurns": 31,
      "totalCombatFlips": 9,
      "totalDeadTurns": 4,
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
          "combatTurns": 31,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 4277260211,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 49,
      "totalCombatFlips": 26,
      "totalDeadTurns": 6,
      "totalReshuffles": 2,
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
        "elite": 0,
        "shop": 1,
        "chest": 3,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 4,
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
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
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
          "title": "Repos du sous-bois",
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
          "combatTurns": 16,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 4260482592,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 10,
      "deckDelta": -2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 44,
      "totalCombatFlips": 17,
      "totalDeadTurns": 6,
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
      "campVisits": 4,
      "upgrades": 2,
      "removals": 2,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 2,
        "chest": 0,
        "rest": 4,
        "boss": 1
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 11,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 15848153,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 88,
      "totalCombatFlips": 43,
      "totalDeadTurns": 9,
      "totalReshuffles": 12,
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
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 14,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 15,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 25,
          "combatFlips": 18,
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
      "seed": 4294037830,
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
      "totalCombatTurns": 24,
      "totalCombatFlips": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 4,
      "modelId": "opportunist",
      "seed": 49403391,
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
      "totalCombatTurns": 33,
      "totalCombatFlips": 21,
      "totalDeadTurns": 3,
      "totalReshuffles": 2,
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
        "demon": 13,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 14,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 10,
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
      "modelId": "opportunist",
      "seed": 32625772,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 43,
      "totalCombatFlips": 17,
      "totalDeadTurns": 7,
      "totalReshuffles": 2,
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
      "upgrades": 1,
      "removals": 3,
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
        "familiar": 0,
        "demon": 9,
        "human": 1,
        "automaton": 1,
        "revenant": 2,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "seed": 82958629,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 22,
      "totalCombatFlips": 15,
      "totalDeadTurns": 2,
      "totalReshuffles": 1,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 12,
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 66181010,
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
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 2,
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
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "modelId": "regular",
      "seed": 602518830,
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
      "totalCombatTurns": 98,
      "totalCombatFlips": 29,
      "totalDeadTurns": 8,
      "totalReshuffles": 20,
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
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 619296449,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 124,
      "totalCombatFlips": 28,
      "totalDeadTurns": 16,
      "totalReshuffles": 13,
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
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 12,
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
          "combatTurns": 27,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 28,
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
      "runIndex": 2,
      "modelId": "regular",
      "seed": 568963592,
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
      "totalCombatTurns": 98,
      "totalCombatFlips": 24,
      "totalDeadTurns": 17,
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
        "old-bridge-stone"
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 30,
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
      "runIndex": 3,
      "modelId": "regular",
      "seed": 585741211,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 82,
      "totalCombatFlips": 12,
      "totalDeadTurns": 19,
      "totalReshuffles": 8,
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
        "combat": 2,
        "elite": 1,
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
        "arcane": 14,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 41,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 669629306,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 96,
      "totalCombatFlips": 10,
      "totalDeadTurns": 6,
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
        "ancient-sap"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 46,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 28,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 686406925,
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
      "totalCombatTurns": 72,
      "totalCombatFlips": 7,
      "totalDeadTurns": 9,
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
        "ancient-sap"
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 47,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 636074068,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 86,
      "totalCombatFlips": 20,
      "totalDeadTurns": 14,
      "totalReshuffles": 15,
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
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 12,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 41,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 7,
      "modelId": "regular",
      "seed": 652851687,
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
      "totalCombatFlips": 15,
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 1081781202,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 2,
      "combatLosses": 0,
      "totalCombatTurns": 67,
      "totalCombatFlips": 12,
      "totalDeadTurns": 14,
      "totalReshuffles": 13,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
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
        "elite": 0,
        "shop": 1,
        "chest": 4,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 3,
        "revenant": 0,
        "arcane": 11,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
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
          "combatTurns": 38,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 29,
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
      "modelId": "expert",
      "seed": 1098558821,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 10,
      "deckDelta": -2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 57,
      "totalCombatFlips": 13,
      "totalDeadTurns": 14,
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
        "ancient-sap"
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
        "chest": 1,
        "rest": 2,
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
        "common": 9,
        "uncommon": 1,
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
          "combatTurns": 36,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 21,
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
      "runIndex": 2,
      "modelId": "expert",
      "seed": 1048225964,
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
      "totalCombatTurns": 36,
      "totalCombatFlips": 12,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 14,
          "combatFlips": 9,
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
      "modelId": "expert",
      "seed": 1065003583,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 56,
      "totalCombatFlips": 11,
      "totalDeadTurns": 12,
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
      "campVisits": 2,
      "upgrades": 1,
      "removals": 1,
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
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 8,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "shop",
          "title": "Comptoir des runes",
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 9,
          "combatWinner": "enemy",
          "combatTurns": 19,
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 1014670726,
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
      "totalCombatTurns": 105,
      "totalCombatFlips": 17,
      "totalDeadTurns": 15,
      "totalReshuffles": 12,
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
        "moss-dust"
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
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 11,
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
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 0,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 19,
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
      "runIndex": 5,
      "modelId": "expert",
      "seed": 1031448345,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 76,
      "totalCombatFlips": 16,
      "totalDeadTurns": 7,
      "totalReshuffles": 8,
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
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 16,
          "combatFlips": 10,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 1,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 0,
          "enemyProfileId": "bastion",
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
      "seed": 981115488,
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
      "totalCombatTurns": 89,
      "totalCombatFlips": 8,
      "totalDeadTurns": 9,
      "totalReshuffles": 13,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 63,
          "combatFlips": 5,
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
      "modelId": "expert",
      "seed": 997893107,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 166,
      "totalCombatFlips": 26,
      "totalDeadTurns": 35,
      "totalReshuffles": 36,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 2,
        "rare": 0
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
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
        "combat": 4,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 2,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 12,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 34,
          "combatFlips": 3,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 2979524061,
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
      "totalCombatTurns": 51,
      "totalCombatFlips": 30,
      "totalDeadTurns": 4,
      "totalReshuffles": 5,
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
        "demon": 12,
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
          "title": "Duel des fougeres",
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
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
      "runIndex": 1,
      "modelId": "champion",
      "seed": 2962746442,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 83,
      "totalCombatFlips": 37,
      "totalDeadTurns": 11,
      "totalReshuffles": 18,
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
        "spring-tear"
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 13,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
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
          "combatTurns": 19,
          "combatFlips": 7,
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
          "combatFlips": 13,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 8,
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
      "modelId": "champion",
      "seed": 2945968823,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 66,
      "totalCombatFlips": 37,
      "totalDeadTurns": 3,
      "totalReshuffles": 5,
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
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 2,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
      "runIndex": 3,
      "modelId": "champion",
      "seed": 2929191204,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 47,
      "totalCombatFlips": 24,
      "totalDeadTurns": 2,
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
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 0,
        "automaton": 0,
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
          "title": "Route des brindilles",
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 9,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 10,
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
      "modelId": "champion",
      "seed": 2912413585,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 60,
      "totalCombatFlips": 34,
      "totalDeadTurns": 6,
      "totalReshuffles": 3,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 0,
        "rare": 1
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "first-breath"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
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
        "revenant": 3,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 8,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 8,
          "enemyProfileId": "bastion",
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
      "seed": 2895635966,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 81,
      "totalCombatFlips": 32,
      "totalDeadTurns": 10,
      "totalReshuffles": 8,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 0,
        "rare": 1
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
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 10,
        "human": 2,
        "automaton": 0,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
        "uncommon": 0,
        "rare": 1
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
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 6,
      "modelId": "champion",
      "seed": 2878858347,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 67,
      "totalCombatFlips": 43,
      "totalDeadTurns": 4,
      "totalReshuffles": 4,
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
        "demon": 13,
        "human": 1,
        "automaton": 2,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
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
          "title": "Clairiere des songes",
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
      "runIndex": 7,
      "modelId": "champion",
      "seed": 2862080728,
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
      "totalCombatTurns": 58,
      "totalCombatFlips": 24,
      "totalDeadTurns": 7,
      "totalReshuffles": 4,
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
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 2,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 12,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "combatTurns": 9,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 16,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 9,
          "combatFlips": 7,
          "enemyProfileId": "bastion",
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
        "offered": 594,
        "played": 427,
        "ignored": 477,
        "selectionRate": 0.7188552188552189,
        "wins": 360,
        "losses": 67,
        "draws": 0,
        "winRateWhenPlayed": 0.8430913348946136,
        "averageFlips": 0.34894613583138173,
        "failedImpactRate": 0.45018450184501846,
        "averageFlipMargin": 2.0201342281879193,
        "averageEffectAmount": 4.613583138173302,
        "averageDamageDealt": 0.16393442622950818,
        "averageDamageTaken": 0.08430913348946135,
        "averageNetDamage": 0.07962529274004683,
        "lethalMoves": 2,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 190,
            "winRate": 0.7263157894736842
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 68,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.21052631578947367
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 427,
            "winRate": 0.8430913348946136
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
        "offered": 594,
        "played": 424,
        "ignored": 428,
        "selectionRate": 0.7138047138047138,
        "wins": 186,
        "losses": 238,
        "draws": 0,
        "winRateWhenPlayed": 0.4386792452830189,
        "averageFlips": 0.30424528301886794,
        "failedImpactRate": 0.5150375939849624,
        "averageFlipMargin": 1.5891472868217054,
        "averageEffectAmount": 3.1839622641509435,
        "averageDamageDealt": 0.10613207547169812,
        "averageDamageTaken": 0.06367924528301887,
        "averageNetDamage": 0.04245283018867925,
        "lethalMoves": 0,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 193,
            "winRate": 0.22797927461139897
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.5176470588235295
          },
          {
            "modelId": "opportunist",
            "played": 81,
            "winRate": 0.7654320987654321
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.7058823529411765
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
            "played": 424,
            "winRate": 0.4386792452830189
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
        "offered": 529,
        "played": 417,
        "ignored": 362,
        "selectionRate": 0.7882797731568998,
        "wins": 355,
        "losses": 62,
        "draws": 0,
        "winRateWhenPlayed": 0.8513189448441247,
        "averageFlips": 0.21103117505995203,
        "failedImpactRate": 0.4358974358974359,
        "averageFlipMargin": 2.375,
        "averageEffectAmount": 5.657074340527578,
        "averageDamageDealt": 0.16786570743405277,
        "averageDamageTaken": 0.06235011990407674,
        "averageNetDamage": 0.10551558752997603,
        "lethalMoves": 4,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 187,
            "winRate": 0.7379679144385026
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.23529411764705882
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 417,
            "winRate": 0.8513189448441247
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
        "offered": 511,
        "played": 415,
        "ignored": 393,
        "selectionRate": 0.812133072407045,
        "wins": 175,
        "losses": 240,
        "draws": 0,
        "winRateWhenPlayed": 0.42168674698795183,
        "averageFlips": 0.2746987951807229,
        "failedImpactRate": 0.4519230769230769,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 4.337349397590361,
        "averageDamageDealt": 0.09156626506024096,
        "averageDamageTaken": 0.09156626506024096,
        "averageNetDamage": 0,
        "lethalMoves": 5,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.40476190476190477
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.24742268041237114
          },
          {
            "modelId": "opportunist",
            "played": 84,
            "winRate": 0.8452380952380952
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.14285714285714285
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0.25
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 415,
            "winRate": 0.42168674698795183
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
        "offered": 537,
        "played": 409,
        "ignored": 406,
        "selectionRate": 0.7616387337057728,
        "wins": 175,
        "losses": 234,
        "draws": 0,
        "winRateWhenPlayed": 0.4278728606356968,
        "averageFlips": 0.31295843520782396,
        "failedImpactRate": 0.452991452991453,
        "averageFlipMargin": 2.765625,
        "averageEffectAmount": 3.452322738386308,
        "averageDamageDealt": 0.1466992665036675,
        "averageDamageTaken": 0.06845965770171149,
        "averageNetDamage": 0.078239608801956,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.3875
          },
          {
            "modelId": "expert",
            "played": 95,
            "winRate": 0.25263157894736843
          },
          {
            "modelId": "opportunist",
            "played": 91,
            "winRate": 0.8351648351648352
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.16666666666666666
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.2857142857142857
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 409,
            "winRate": 0.4278728606356968
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
        "offered": 563,
        "played": 405,
        "ignored": 440,
        "selectionRate": 0.7193605683836589,
        "wins": 194,
        "losses": 211,
        "draws": 0,
        "winRateWhenPlayed": 0.47901234567901235,
        "averageFlips": 0.2814814814814815,
        "failedImpactRate": 0.40625,
        "averageFlipMargin": 1.4824561403508771,
        "averageEffectAmount": 4.288888888888889,
        "averageDamageDealt": 0.11851851851851852,
        "averageDamageTaken": 0.019753086419753086,
        "averageNetDamage": 0.09876543209876544,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 177,
            "winRate": 0.2598870056497175
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.825
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.7083333333333334
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
            "played": 405,
            "winRate": 0.47901234567901235
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
        "offered": 803,
        "played": 389,
        "ignored": 586,
        "selectionRate": 0.48443337484433374,
        "wins": 156,
        "losses": 233,
        "draws": 0,
        "winRateWhenPlayed": 0.40102827763496146,
        "averageFlips": 0.20822622107969152,
        "failedImpactRate": 0.7032967032967034,
        "averageFlipMargin": 2.3950617283950617,
        "averageEffectAmount": 3.236503856041131,
        "averageDamageDealt": 0.17994858611825193,
        "averageDamageTaken": 0.16709511568123395,
        "averageNetDamage": 0.012853470437017983,
        "lethalMoves": 4,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 159,
            "winRate": 0.39622641509433965
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.21978021978021978
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.09090909090909091
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.16666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 389,
            "winRate": 0.40102827763496146
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
        "offered": 709,
        "played": 379,
        "ignored": 547,
        "selectionRate": 0.5345557122708039,
        "wins": 316,
        "losses": 63,
        "draws": 0,
        "winRateWhenPlayed": 0.8337730870712401,
        "averageFlips": 0.19261213720316622,
        "failedImpactRate": 0.546583850931677,
        "averageFlipMargin": 2.6027397260273974,
        "averageEffectAmount": 6.005277044854881,
        "averageDamageDealt": 0.41424802110817943,
        "averageDamageTaken": 0.17150395778364116,
        "averageNetDamage": 0.24274406332453827,
        "lethalMoves": 4,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "regular",
            "played": 148,
            "winRate": 0.7432432432432432
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.9139784946236559
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.9166666666666666
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.3125
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 379,
            "winRate": 0.8337730870712401
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
        "offered": 685,
        "played": 379,
        "ignored": 557,
        "selectionRate": 0.5532846715328467,
        "wins": 162,
        "losses": 217,
        "draws": 0,
        "winRateWhenPlayed": 0.42744063324538256,
        "averageFlips": 0.24802110817941952,
        "failedImpactRate": 0.5545023696682464,
        "averageFlipMargin": 1.5638297872340425,
        "averageEffectAmount": 3.588390501319261,
        "averageDamageDealt": 0.06596306068601583,
        "averageDamageTaken": 0.10554089709762533,
        "averageNetDamage": -0.0395778364116095,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 164,
            "winRate": 0.18902439024390244
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.49411764705882355
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.7916666666666666
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.6808510638297872
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
            "played": 379,
            "winRate": 0.42744063324538256
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
        "offered": 452,
        "played": 377,
        "ignored": 330,
        "selectionRate": 0.834070796460177,
        "wins": 191,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.506631299734748,
        "averageFlips": 0.2838196286472148,
        "failedImpactRate": 0.5201793721973094,
        "averageFlipMargin": 2.149532710280374,
        "averageEffectAmount": 2.9920424403183024,
        "averageDamageDealt": 0.1830238726790451,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.1830238726790451,
        "lethalMoves": 3,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 169,
            "winRate": 0.3668639053254438
          },
          {
            "modelId": "expert",
            "played": 79,
            "winRate": 0.7468354430379747
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.7
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.5121951219512195
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
        "offered": 486,
        "played": 377,
        "ignored": 325,
        "selectionRate": 0.7757201646090535,
        "wins": 158,
        "losses": 219,
        "draws": 0,
        "winRateWhenPlayed": 0.41909814323607425,
        "averageFlips": 0.2572944297082228,
        "failedImpactRate": 0.436046511627907,
        "averageFlipMargin": 2.0309278350515463,
        "averageEffectAmount": 3.206896551724138,
        "averageDamageDealt": 0.2493368700265252,
        "averageDamageTaken": 0.05570291777188329,
        "averageNetDamage": 0.1936339522546419,
        "lethalMoves": 4,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 176,
            "winRate": 0.4318181818181818
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.5625
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.06818181818181818
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.058823529411764705
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 377,
            "winRate": 0.41909814323607425
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
        "offered": 577,
        "played": 373,
        "ignored": 424,
        "selectionRate": 0.6464471403812825,
        "wins": 163,
        "losses": 210,
        "draws": 0,
        "winRateWhenPlayed": 0.43699731903485256,
        "averageFlips": 0.16890080428954424,
        "failedImpactRate": 0.6519337016574586,
        "averageFlipMargin": 2.015873015873016,
        "averageEffectAmount": 3.4772117962466487,
        "averageDamageDealt": 0.17158176943699732,
        "averageDamageTaken": 0.03485254691689008,
        "averageNetDamage": 0.13672922252010725,
        "lethalMoves": 3,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 175,
            "winRate": 0.4514285714285714
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.574468085106383
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.11363636363636363
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
            "played": 373,
            "winRate": 0.43699731903485256
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
        "offered": 1126,
        "played": 371,
        "ignored": 929,
        "selectionRate": 0.32948490230905864,
        "wins": 286,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.77088948787062,
        "averageFlips": 0.29649595687331537,
        "failedImpactRate": 0.7002724795640327,
        "averageFlipMargin": 2.3363636363636364,
        "averageEffectAmount": 3.5417789757412397,
        "averageDamageDealt": 0.954177897574124,
        "averageDamageTaken": 0.3611859838274933,
        "averageNetDamage": 0.5929919137466306,
        "lethalMoves": 13,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 166,
            "winRate": 0.6445783132530121
          },
          {
            "modelId": "expert",
            "played": 80,
            "winRate": 0.9375
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.8823529411764706
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.21052631578947367
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 371,
            "winRate": 0.77088948787062
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
        "offered": 584,
        "played": 366,
        "ignored": 464,
        "selectionRate": 0.6267123287671232,
        "wins": 144,
        "losses": 222,
        "draws": 0,
        "winRateWhenPlayed": 0.39344262295081966,
        "averageFlips": 0.27049180327868855,
        "failedImpactRate": 0.47058823529411764,
        "averageFlipMargin": 2.3838383838383836,
        "averageEffectAmount": 3.2131147540983607,
        "averageDamageDealt": 0.27049180327868855,
        "averageDamageTaken": 0.09016393442622951,
        "averageNetDamage": 0.18032786885245905,
        "lethalMoves": 4,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 173,
            "winRate": 0.43352601156069365
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.5340909090909091
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.0851063829787234
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.46153846153846156
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
            "played": 366,
            "winRate": 0.39344262295081966
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
        "offered": 631,
        "played": 358,
        "ignored": 528,
        "selectionRate": 0.5673534072900158,
        "wins": 183,
        "losses": 175,
        "draws": 0,
        "winRateWhenPlayed": 0.5111731843575419,
        "averageFlips": 0.4776536312849162,
        "failedImpactRate": 0.4337748344370861,
        "averageFlipMargin": 2.2280701754385963,
        "averageEffectAmount": 2.477653631284916,
        "averageDamageDealt": 0.10614525139664804,
        "averageDamageTaken": 0.05027932960893855,
        "averageNetDamage": 0.055865921787709494,
        "lethalMoves": 1,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 152,
            "winRate": 0.32894736842105265
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.8051948051948052
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.5777777777777777
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
            "played": 358,
            "winRate": 0.5111731843575419
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
        "offered": 675,
        "played": 348,
        "ignored": 486,
        "selectionRate": 0.5155555555555555,
        "wins": 179,
        "losses": 169,
        "draws": 0,
        "winRateWhenPlayed": 0.514367816091954,
        "averageFlips": 0.1867816091954023,
        "failedImpactRate": 0.6813725490196079,
        "averageFlipMargin": 1.8461538461538463,
        "averageEffectAmount": 2.043103448275862,
        "averageDamageDealt": 0.6637931034482759,
        "averageDamageTaken": 0.20402298850574713,
        "averageNetDamage": 0.4597701149425288,
        "lethalMoves": 10,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 149,
            "winRate": 0.38926174496644295
          },
          {
            "modelId": "expert",
            "played": 80,
            "winRate": 0.7375
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.4722222222222222
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
            "played": 348,
            "winRate": 0.514367816091954
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
        "offered": 1105,
        "played": 323,
        "ignored": 935,
        "selectionRate": 0.2923076923076923,
        "wins": 139,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.43034055727554177,
        "averageFlips": 0.21052631578947367,
        "failedImpactRate": 0.7614035087719299,
        "averageFlipMargin": 2.9558823529411766,
        "averageEffectAmount": 1.1578947368421053,
        "averageDamageDealt": 1.2817337461300309,
        "averageDamageTaken": 0.7739938080495357,
        "averageNetDamage": 0.5077399380804952,
        "lethalMoves": 15,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "regular",
            "played": 126,
            "winRate": 0.40476190476190477
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.273972602739726
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.21052631578947367
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.25
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 323,
            "winRate": 0.43034055727554177
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
        "offered": 884,
        "played": 310,
        "ignored": 717,
        "selectionRate": 0.3506787330316742,
        "wins": 165,
        "losses": 145,
        "draws": 0,
        "winRateWhenPlayed": 0.532258064516129,
        "averageFlips": 0.3193548387096774,
        "failedImpactRate": 0.660958904109589,
        "averageFlipMargin": 2.0303030303030303,
        "averageEffectAmount": 1.4419354838709677,
        "averageDamageDealt": 0.9419354838709677,
        "averageDamageTaken": 0.35161290322580646,
        "averageNetDamage": 0.5903225806451613,
        "lethalMoves": 9,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 124,
            "winRate": 0.3629032258064516
          },
          {
            "modelId": "expert",
            "played": 65,
            "winRate": 0.7846153846153846
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.7384615384615385
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.5
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
            "played": 310,
            "winRate": 0.532258064516129
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
        "offered": 1216,
        "played": 309,
        "ignored": 999,
        "selectionRate": 0.25411184210526316,
        "wins": 163,
        "losses": 146,
        "draws": 0,
        "winRateWhenPlayed": 0.5275080906148867,
        "averageFlips": 0.20711974110032363,
        "failedImpactRate": 0.7830508474576271,
        "averageFlipMargin": 1.71875,
        "averageEffectAmount": 1.006472491909385,
        "averageDamageDealt": 1.4692556634304208,
        "averageDamageTaken": 0.7313915857605178,
        "averageNetDamage": 0.737864077669903,
        "lethalMoves": 17,
        "roundClosers": 75,
        "byModel": [
          {
            "modelId": "regular",
            "played": 131,
            "winRate": 0.366412213740458
          },
          {
            "modelId": "expert",
            "played": 74,
            "winRate": 0.5945945945945946
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.7678571428571429
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.7567567567567568
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
            "played": 309,
            "winRate": 0.5275080906148867
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
        "offered": 1141,
        "played": 283,
        "ignored": 1003,
        "selectionRate": 0.24802804557405783,
        "wins": 107,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.37809187279151946,
        "averageFlips": 0.29328621908127206,
        "failedImpactRate": 0.7438271604938271,
        "averageFlipMargin": 2.2650602409638556,
        "averageEffectAmount": 1,
        "averageDamageDealt": 1.2685512367491165,
        "averageDamageTaken": 0.6890459363957597,
        "averageNetDamage": 0.5795053003533568,
        "lethalMoves": 11,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 137,
            "winRate": 0.3795620437956204
          },
          {
            "modelId": "expert",
            "played": 61,
            "winRate": 0.5737704918032787
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.14285714285714285
          },
          {
            "modelId": "opportunist",
            "played": 33,
            "winRate": 0.42424242424242425
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.058823529411764705
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 283,
            "winRate": 0.37809187279151946
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
        "offered": 325,
        "played": 225,
        "ignored": 259,
        "selectionRate": 0.6923076923076923,
        "wins": 138,
        "losses": 87,
        "draws": 0,
        "winRateWhenPlayed": 0.6133333333333333,
        "averageFlips": 0.7422222222222222,
        "failedImpactRate": 0.165,
        "averageFlipMargin": 1.7664670658682635,
        "averageEffectAmount": 1.2133333333333334,
        "averageDamageDealt": 1.24,
        "averageDamageTaken": 0.4088888888888889,
        "averageNetDamage": 0.8311111111111111,
        "lethalMoves": 6,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 91,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.8936170212765957
          },
          {
            "modelId": "opportunist",
            "played": 43,
            "winRate": 0.5581395348837209
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.72
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.10526315789473684
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 225,
            "winRate": 0.6133333333333333
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
        "offered": 342,
        "played": 220,
        "ignored": 281,
        "selectionRate": 0.6432748538011696,
        "wins": 141,
        "losses": 79,
        "draws": 0,
        "winRateWhenPlayed": 0.6409090909090909,
        "averageFlips": 0.8090909090909091,
        "failedImpactRate": 0.19090909090909092,
        "averageFlipMargin": 2.044943820224719,
        "averageEffectAmount": 0.9181818181818182,
        "averageDamageDealt": 0.8636363636363636,
        "averageDamageTaken": 0.19545454545454546,
        "averageNetDamage": 0.6681818181818182,
        "lethalMoves": 4,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 81,
            "winRate": 0.6419753086419753
          },
          {
            "modelId": "expert",
            "played": 56,
            "winRate": 0.8928571428571429
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.6052631578947368
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.043478260869565216
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.6818181818181818
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 220,
            "winRate": 0.6409090909090909
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
        "offered": 425,
        "played": 212,
        "ignored": 317,
        "selectionRate": 0.4988235294117647,
        "wins": 124,
        "losses": 88,
        "draws": 0,
        "winRateWhenPlayed": 0.5849056603773585,
        "averageFlips": 0.5849056603773585,
        "failedImpactRate": 0.3641025641025641,
        "averageFlipMargin": 1.846774193548387,
        "averageEffectAmount": 1.0754716981132075,
        "averageDamageDealt": 1.5849056603773586,
        "averageDamageTaken": 0.5094339622641509,
        "averageNetDamage": 1.0754716981132075,
        "lethalMoves": 10,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 95,
            "winRate": 0.5789473684210527
          },
          {
            "modelId": "expert",
            "played": 38,
            "winRate": 0.7894736842105263
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.6216216216216216
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.047619047619047616
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 212,
            "winRate": 0.5849056603773585
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
        "offered": 505,
        "played": 182,
        "ignored": 387,
        "selectionRate": 0.3603960396039604,
        "wins": 110,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.6043956043956044,
        "averageFlips": 0.6043956043956044,
        "failedImpactRate": 0.37142857142857144,
        "averageFlipMargin": 2.172727272727273,
        "averageEffectAmount": 0.8956043956043956,
        "averageDamageDealt": 1.8681318681318682,
        "averageDamageTaken": 0.5384615384615384,
        "averageNetDamage": 1.3296703296703298,
        "lethalMoves": 9,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.8863636363636364
          },
          {
            "modelId": "opportunist",
            "played": 26,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 17,
            "winRate": 0.5882352941176471
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
            "played": 182,
            "winRate": 0.6043956043956044
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
        "offered": 2958,
        "played": 1594,
        "ignored": 2315,
        "selectionRate": 0.5388776200135227,
        "wins": 1317,
        "losses": 277,
        "draws": 0,
        "winRateWhenPlayed": 0.8262233375156838,
        "averageFlips": 0.26348808030112925,
        "averageDamageDealt": 0.4084065244667503,
        "averageNetDamage": 0.24466750313676283,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 427,
            "winRateWhenPlayed": 0.8430913348946136
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.8513189448441247
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 379,
            "winRateWhenPlayed": 0.8337730870712401
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 371,
            "winRateWhenPlayed": 0.77088948787062
          }
        ],
        "status": "overperformer",
        "notes": [
          "La famille gagne trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "human",
        "label": "human",
        "offered": 2956,
        "played": 1536,
        "ignored": 2320,
        "selectionRate": 0.5196211096075778,
        "wins": 645,
        "losses": 891,
        "draws": 0,
        "winRateWhenPlayed": 0.419921875,
        "averageFlips": 0.2545572916666667,
        "averageDamageDealt": 0.37890625,
        "averageNetDamage": 0.130859375,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 415,
            "winRateWhenPlayed": 0.42168674698795183
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 409,
            "winRateWhenPlayed": 0.4278728606356968
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 389,
            "winRateWhenPlayed": 0.40102827763496146
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 323,
            "winRateWhenPlayed": 0.43034055727554177
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "arcane",
        "label": "arcane",
        "offered": 3058,
        "played": 1517,
        "ignored": 2424,
        "selectionRate": 0.4960758665794637,
        "wins": 705,
        "losses": 812,
        "draws": 0,
        "winRateWhenPlayed": 0.46473302570863545,
        "averageFlips": 0.2643375082399473,
        "averageDamageDealt": 0.3770599868160844,
        "averageNetDamage": 0.1786420566908372,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 424,
            "winRateWhenPlayed": 0.4386792452830189
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 405,
            "winRateWhenPlayed": 0.47901234567901235
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 379,
            "winRateWhenPlayed": 0.42744063324538256
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 309,
            "winRateWhenPlayed": 0.5275080906148867
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
        "offered": 2788,
        "played": 1399,
        "ignored": 2216,
        "selectionRate": 0.5017934002869441,
        "wins": 572,
        "losses": 827,
        "draws": 0,
        "winRateWhenPlayed": 0.40886347390993566,
        "averageFlips": 0.2444603288062902,
        "averageDamageDealt": 0.4403145103645461,
        "averageNetDamage": 0.25303788420300216,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 377,
            "winRateWhenPlayed": 0.41909814323607425
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 373,
            "winRateWhenPlayed": 0.43699731903485256
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 366,
            "winRateWhenPlayed": 0.39344262295081966
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 283,
            "winRateWhenPlayed": 0.37809187279151946
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
        "offered": 2642,
        "played": 1393,
        "ignored": 2061,
        "selectionRate": 0.5272520817562453,
        "wins": 718,
        "losses": 675,
        "draws": 0,
        "winRateWhenPlayed": 0.5154343144292893,
        "averageFlips": 0.3173007896625987,
        "averageDamageDealt": 0.45226130653266333,
        "averageNetDamage": 0.31012203876525485,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 377,
            "winRateWhenPlayed": 0.506631299734748
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 358,
            "winRateWhenPlayed": 0.5111731843575419
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 348,
            "winRateWhenPlayed": 0.514367816091954
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 310,
            "winRateWhenPlayed": 0.532258064516129
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
        "offered": 1597,
        "played": 839,
        "ignored": 1244,
        "selectionRate": 0.5253600500939261,
        "wins": 513,
        "losses": 326,
        "draws": 0,
        "winRateWhenPlayed": 0.6114421930870083,
        "averageFlips": 0.6901072705601907,
        "averageDamageDealt": 1.3647199046483909,
        "averageNetDamage": 0.9582836710369487,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 225,
            "winRateWhenPlayed": 0.6133333333333333
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 220,
            "winRateWhenPlayed": 0.6409090909090909
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 212,
            "winRateWhenPlayed": 0.5849056603773585
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 182,
            "winRateWhenPlayed": 0.6043956043956044
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
        "offered": 3158,
        "played": 2221,
        "ignored": 2432,
        "selectionRate": 0.7032932235592146,
        "wins": 1203,
        "losses": 1018,
        "draws": 0,
        "winRateWhenPlayed": 0.5416479063484917,
        "averageFlips": 0.3773075191355245,
        "averageDamageDealt": 0.21386762719495722,
        "averageNetDamage": 0.13147230977037372,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 427,
            "winRateWhenPlayed": 0.8430913348946136
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 424,
            "winRateWhenPlayed": 0.4386792452830189
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 415,
            "winRateWhenPlayed": 0.42168674698795183
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 377,
            "winRateWhenPlayed": 0.41909814323607425
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 358,
            "winRateWhenPlayed": 0.5111731843575419
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
        "offered": 2990,
        "played": 2199,
        "ignored": 2261,
        "selectionRate": 0.7354515050167224,
        "wins": 1197,
        "losses": 1002,
        "draws": 0,
        "winRateWhenPlayed": 0.5443383356070941,
        "averageFlips": 0.3196907685311505,
        "averageDamageDealt": 0.2842201000454752,
        "averageNetDamage": 0.19918144611186903,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.8513189448441247
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 409,
            "winRateWhenPlayed": 0.4278728606356968
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 405,
            "winRateWhenPlayed": 0.47901234567901235
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 377,
            "winRateWhenPlayed": 0.506631299734748
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 366,
            "winRateWhenPlayed": 0.39344262295081966
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
        "offered": 4163,
        "played": 2012,
        "ignored": 3218,
        "selectionRate": 0.483305308671631,
        "wins": 1072,
        "losses": 940,
        "draws": 0,
        "winRateWhenPlayed": 0.532803180914513,
        "averageFlips": 0.2584493041749503,
        "averageDamageDealt": 0.4711729622266402,
        "averageNetDamage": 0.2773359840954275,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 389,
            "winRateWhenPlayed": 0.40102827763496146
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 379,
            "winRateWhenPlayed": 0.8337730870712401
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 379,
            "winRateWhenPlayed": 0.42744063324538256
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 373,
            "winRateWhenPlayed": 0.43699731903485256
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 310,
            "winRateWhenPlayed": 0.532258064516129
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
        "offered": 5688,
        "played": 1846,
        "ignored": 4669,
        "selectionRate": 0.32454289732770747,
        "wins": 998,
        "losses": 848,
        "draws": 0,
        "winRateWhenPlayed": 0.5406283856988082,
        "averageFlips": 0.27843986998916576,
        "averageDamageDealt": 1.163596966413868,
        "averageNetDamage": 0.6305525460455038,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 371,
            "winRateWhenPlayed": 0.77088948787062
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 348,
            "winRateWhenPlayed": 0.514367816091954
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 323,
            "winRateWhenPlayed": 0.43034055727554177
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 309,
            "winRateWhenPlayed": 0.5275080906148867
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 283,
            "winRateWhenPlayed": 0.37809187279151946
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
        "offered": 15999,
        "played": 8278,
        "ignored": 12580,
        "selectionRate": 0.5174073379586224,
        "wins": 4470,
        "losses": 3808,
        "draws": 0,
        "winRateWhenPlayed": 0.5399855037448659,
        "averageFlips": 0.31106547475235563,
        "averageDamageDealt": 0.5068857211886929,
        "averageNetDamage": 0.29620681323991305,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 427,
            "winRateWhenPlayed": 0.8430913348946136
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 424,
            "winRateWhenPlayed": 0.4386792452830189
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.8513189448441247
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 415,
            "winRateWhenPlayed": 0.42168674698795183
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 409,
            "winRateWhenPlayed": 0.4278728606356968
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
        "count": 435,
        "wins": 360,
        "losses": 75,
        "draws": 0,
        "winRate": 0.8275862068965517,
        "averageFlips": 0.28045977011494255,
        "averageDamageDealt": 0.7793103448275862,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 418,
        "wins": 165,
        "losses": 253,
        "draws": 0,
        "winRate": 0.39473684210526316,
        "averageFlips": 0.24162679425837322,
        "averageDamageDealt": 0.7631578947368421,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 414,
        "wins": 173,
        "losses": 241,
        "draws": 0,
        "winRate": 0.4178743961352657,
        "averageFlips": 0.26570048309178745,
        "averageDamageDealt": 0.7874396135265701,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 383,
        "wins": 137,
        "losses": 246,
        "draws": 0,
        "winRate": 0.3577023498694517,
        "averageFlips": 0.2349869451697128,
        "averageDamageDealt": 0.7310704960835509,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 368,
        "wins": 171,
        "losses": 197,
        "draws": 0,
        "winRate": 0.46467391304347827,
        "averageFlips": 0.31521739130434784,
        "averageDamageDealt": 0.9728260869565217,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 350,
        "wins": 168,
        "losses": 182,
        "draws": 0,
        "winRate": 0.48,
        "averageFlips": 0.20857142857142857,
        "averageDamageDealt": 1.4714285714285715,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 340,
        "wins": 283,
        "losses": 57,
        "draws": 0,
        "winRate": 0.8323529411764706,
        "averageFlips": 0.3323529411764706,
        "averageDamageDealt": 0.20588235294117646,
        "averageEffectAmount": 1.2558823529411764,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 337,
        "wins": 289,
        "losses": 48,
        "draws": 0,
        "winRate": 0.857566765578635,
        "averageFlips": 0.21364985163204747,
        "averageDamageDealt": 1.6735905044510386,
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
        "count": 332,
        "wins": 142,
        "losses": 190,
        "draws": 0,
        "winRate": 0.42771084337349397,
        "averageFlips": 0.1536144578313253,
        "averageDamageDealt": 0.1927710843373494,
        "averageEffectAmount": 1.108433734939759,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 317,
        "wins": 127,
        "losses": 190,
        "draws": 0,
        "winRate": 0.40063091482649843,
        "averageFlips": 0.277602523659306,
        "averageDamageDealt": 0.03785488958990536,
        "averageEffectAmount": 1.1545741324921135,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 315,
        "wins": 124,
        "losses": 191,
        "draws": 0,
        "winRate": 0.39365079365079364,
        "averageFlips": 0.2761904761904762,
        "averageDamageDealt": 0.08571428571428572,
        "averageEffectAmount": 1.2603174603174603,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 313,
        "wins": 124,
        "losses": 189,
        "draws": 0,
        "winRate": 0.3961661341853035,
        "averageFlips": 0.2779552715654952,
        "averageDamageDealt": 0.08626198083067092,
        "averageEffectAmount": 1.2619808306709266,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 311,
        "wins": 124,
        "losses": 187,
        "draws": 0,
        "winRate": 0.3987138263665595,
        "averageFlips": 0.22186495176848875,
        "averageDamageDealt": 0.1414790996784566,
        "averageEffectAmount": 1.7170418006430868,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 308,
        "wins": 126,
        "losses": 182,
        "draws": 0,
        "winRate": 0.4090909090909091,
        "averageFlips": 0.15584415584415584,
        "averageDamageDealt": 0.04220779220779221,
        "averageEffectAmount": 1.1103896103896105,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 307,
        "wins": 134,
        "losses": 173,
        "draws": 0,
        "winRate": 0.4364820846905538,
        "averageFlips": 0.250814332247557,
        "averageDamageDealt": 0.019543973941368076,
        "averageEffectAmount": 1.296416938110749,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 307,
        "wins": 134,
        "losses": 173,
        "draws": 0,
        "winRate": 0.4364820846905538,
        "averageFlips": 0.250814332247557,
        "averageDamageDealt": 0.019543973941368076,
        "averageEffectAmount": 1.003257328990228,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 287,
        "wins": 133,
        "losses": 154,
        "draws": 0,
        "winRate": 0.4634146341463415,
        "averageFlips": 0.13240418118466898,
        "averageDamageDealt": 1.2961672473867596,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 276,
        "wins": 97,
        "losses": 179,
        "draws": 0,
        "winRate": 0.35144927536231885,
        "averageFlips": 0.23550724637681159,
        "averageDamageDealt": 0.13405797101449277,
        "averageEffectAmount": 1.2427536231884058,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 270,
        "wins": 106,
        "losses": 164,
        "draws": 0,
        "winRate": 0.3925925925925926,
        "averageFlips": 0.23703703703703705,
        "averageDamageDealt": 0.1,
        "averageEffectAmount": 1.2925925925925925,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 259,
        "wins": 213,
        "losses": 46,
        "draws": 0,
        "winRate": 0.8223938223938224,
        "averageFlips": 0.3590733590733591,
        "averageDamageDealt": 0.18532818532818532,
        "averageEffectAmount": 1.4092664092664093,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 258,
        "wins": 99,
        "losses": 159,
        "draws": 0,
        "winRate": 0.38372093023255816,
        "averageFlips": 0.1434108527131783,
        "averageDamageDealt": 1.573643410852713,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 250,
        "wins": 193,
        "losses": 57,
        "draws": 0,
        "winRate": 0.772,
        "averageFlips": 0.268,
        "averageDamageDealt": 1.136,
        "averageEffectAmount": 2.312,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 235,
        "wins": 139,
        "losses": 96,
        "draws": 0,
        "winRate": 0.5914893617021276,
        "averageFlips": 0.23404255319148937,
        "averageDamageDealt": 2.3957446808510636,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 233,
        "wins": 197,
        "losses": 36,
        "draws": 0,
        "winRate": 0.8454935622317596,
        "averageFlips": 0.2145922746781116,
        "averageDamageDealt": 0.26609442060085836,
        "averageEffectAmount": 1.261802575107296,
        "notes": [
          "Combo gagnant frequent."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2958,
        "id": "family-automaton-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "automaton domine l'echantillon",
        "detail": "1594 plays, 83% win, net PV 0.24.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "id": "combo-effect:gear-monk:draw-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 340,
        "title": "Moine engrene -> draw-next-turn ressort comme combo",
        "detail": "340 occurrences, 83% win, 0.33 flips, 0.21 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gear-monk:boost-self",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 259,
        "title": "Moine engrene -> boost-self ressort comme combo",
        "detail": "259 occurrences, 82% win, 0.36 flips, 0.19 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:clock-sentinel:boost-self",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 233,
        "title": "Sentinelle d'horloge -> boost-self ressort comme combo",
        "detail": "233 occurrences, 85% win, 0.21 flips, 0.27 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2956,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "2956 offres, 52% selection, 42% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2788,
        "id": "family-revenant-buff",
        "severity": "watch",
        "action": "verify",
        "title": "revenant manque d'attraction",
        "detail": "2788 offres, 50% selection, 41% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:automaton->automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 435,
        "title": "automaton -> automaton ressort comme combo",
        "detail": "435 occurrences, 83% win, 0.28 flips, 0.78 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 337,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "337 occurrences, 86% win, 0.21 flips, 1.67 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:brass-rook:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 250,
        "title": "Tour de laiton -> boost-self ressort comme combo",
        "detail": "250 occurrences, 77% win, 0.27 flips, 1.14 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 235,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "235 occurrences, 59% win, 0.23 flips, 2.40 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7256815886906766,
    "cardAnalytics": [
      {
        "cardId": "reward-rare-03",
        "name": "Carte rare 03",
        "family": "human",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "reward",
        "sideTotal": 14,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "combo-3",
          "draw-next-turn",
          "finisher",
          "human",
          "rare"
        ],
        "preferredPositions": [
          "line"
        ],
        "offered": 18,
        "played": 3,
        "ignored": 15,
        "selectionRate": 0.16666666666666666,
        "wins": 1,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 2,
        "averageEffectAmount": 0,
        "averageDamageDealt": 6,
        "averageDamageTaken": 7,
        "averageNetDamage": -1,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 0.5
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
            "played": 3,
            "winRate": 0.3333333333333333
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
        "offered": 13,
        "played": 2,
        "ignored": 12,
        "selectionRate": 0.15384615384615385,
        "wins": 1,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
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
            "played": 2,
            "winRate": 0.5
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 80,
        "played": 37,
        "ignored": 62,
        "selectionRate": 0.4625,
        "wins": 20,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.5405405405405406,
        "averageFlips": 0.3783783783783784,
        "failedImpactRate": 0.5483870967741935,
        "averageFlipMargin": 3.2857142857142856,
        "averageEffectAmount": 1.4594594594594594,
        "averageDamageDealt": 0.5945945945945946,
        "averageDamageTaken": 1.027027027027027,
        "averageNetDamage": -0.43243243243243235,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 29,
            "winRate": 0.5517241379310345
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.5
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
            "played": 37,
            "winRate": 0.5405405405405406
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
        "offered": 22,
        "played": 10,
        "ignored": 18,
        "selectionRate": 0.45454545454545453,
        "wins": 1,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.1,
        "averageFlips": 0.3,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 0.3333333333333333,
        "averageEffectAmount": 1.9,
        "averageDamageDealt": 0.8,
        "averageDamageTaken": 0.8,
        "averageNetDamage": 0,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 9,
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
            "played": 10,
            "winRate": 0.1
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
        "offered": 18,
        "played": 6,
        "ignored": 13,
        "selectionRate": 0.3333333333333333,
        "wins": 0,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.16666666666666666,
        "failedImpactRate": 0.75,
        "averageFlipMargin": 0,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.6666666666666666,
        "averageDamageTaken": 1.6666666666666667,
        "averageNetDamage": -1,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 6,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 6,
            "winRate": 0
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
        "offered": 507,
        "played": 390,
        "ignored": 383,
        "selectionRate": 0.7692307692307693,
        "wins": 273,
        "losses": 117,
        "draws": 0,
        "winRateWhenPlayed": 0.7,
        "averageFlips": 0.258974358974359,
        "failedImpactRate": 0.4127906976744186,
        "averageFlipMargin": 2.1386138613861387,
        "averageEffectAmount": 4.0717948717948715,
        "averageDamageDealt": 0.1358974358974359,
        "averageDamageTaken": 0.046153846153846156,
        "averageNetDamage": 0.08974358974358973,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 189,
            "winRate": 0.7037037037037037
          },
          {
            "modelId": "expert",
            "played": 179,
            "winRate": 0.7262569832402235
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.25
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 390,
            "winRate": 0.7
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
        "offered": 519,
        "played": 378,
        "ignored": 381,
        "selectionRate": 0.7283236994219653,
        "wins": 266,
        "losses": 112,
        "draws": 0,
        "winRateWhenPlayed": 0.7037037037037037,
        "averageFlips": 0.30952380952380953,
        "failedImpactRate": 0.4583333333333333,
        "averageFlipMargin": 2.324786324786325,
        "averageEffectAmount": 2.984126984126984,
        "averageDamageDealt": 0.25396825396825395,
        "averageDamageTaken": 0.021164021164021163,
        "averageNetDamage": 0.2328042328042328,
        "lethalMoves": 3,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 190,
            "winRate": 0.6736842105263158
          },
          {
            "modelId": "expert",
            "played": 176,
            "winRate": 0.7386363636363636
          },
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0.6
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
            "played": 378,
            "winRate": 0.7037037037037037
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
        "offered": 612,
        "played": 350,
        "ignored": 481,
        "selectionRate": 0.5718954248366013,
        "wins": 247,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.7057142857142857,
        "averageFlips": 0.24571428571428572,
        "failedImpactRate": 0.4591194968553459,
        "averageFlipMargin": 2.313953488372093,
        "averageEffectAmount": 3.454285714285714,
        "averageDamageDealt": 0.7257142857142858,
        "averageDamageTaken": 0.12285714285714286,
        "averageNetDamage": 0.6028571428571429,
        "lethalMoves": 10,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.6797752808988764
          },
          {
            "modelId": "expert",
            "played": 165,
            "winRate": 0.7393939393939394
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
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 350,
            "winRate": 0.7057142857142857
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
        "offered": 372,
        "played": 275,
        "ignored": 274,
        "selectionRate": 0.739247311827957,
        "wins": 206,
        "losses": 69,
        "draws": 0,
        "winRateWhenPlayed": 0.7490909090909091,
        "averageFlips": 0.7418181818181818,
        "failedImpactRate": 0.17408906882591094,
        "averageFlipMargin": 2.303921568627451,
        "averageEffectAmount": 1.3854545454545455,
        "averageDamageDealt": 1.1927272727272726,
        "averageDamageTaken": 0.04727272727272727,
        "averageNetDamage": 1.1454545454545453,
        "lethalMoves": 3,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 144,
            "winRate": 0.8125
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.6823529411764706
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.782608695652174
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.45454545454545453
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 275,
            "winRate": 0.7490909090909091
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
        "offered": 930,
        "played": 268,
        "ignored": 756,
        "selectionRate": 0.28817204301075267,
        "wins": 213,
        "losses": 55,
        "draws": 0,
        "winRateWhenPlayed": 0.7947761194029851,
        "averageFlips": 0.22761194029850745,
        "failedImpactRate": 0.6919191919191919,
        "averageFlipMargin": 2.3114754098360657,
        "averageEffectAmount": 0.7014925373134329,
        "averageDamageDealt": 2.611940298507463,
        "averageDamageTaken": 0.5746268656716418,
        "averageNetDamage": 2.037313432835821,
        "lethalMoves": 25,
        "roundClosers": 72,
        "byModel": [
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.84251968503937
          },
          {
            "modelId": "regular",
            "played": 113,
            "winRate": 0.8141592920353983
          },
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.1111111111111111
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
            "played": 268,
            "winRate": 0.7947761194029851
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
        "offered": 527,
        "played": 253,
        "ignored": 403,
        "selectionRate": 0.48007590132827327,
        "wins": 196,
        "losses": 57,
        "draws": 0,
        "winRateWhenPlayed": 0.7747035573122529,
        "averageFlips": 0.5652173913043478,
        "failedImpactRate": 0.2185792349726776,
        "averageFlipMargin": 2.3496503496503496,
        "averageEffectAmount": 1.158102766798419,
        "averageDamageDealt": 2.16600790513834,
        "averageDamageTaken": 0.3241106719367589,
        "averageNetDamage": 1.841897233201581,
        "lethalMoves": 17,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "champion",
            "played": 129,
            "winRate": 0.8062015503875969
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.7411764705882353
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.9090909090909091
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 253,
            "winRate": 0.7747035573122529
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
        "offered": 424,
        "played": 253,
        "ignored": 342,
        "selectionRate": 0.5966981132075472,
        "wins": 191,
        "losses": 62,
        "draws": 0,
        "winRateWhenPlayed": 0.7549407114624506,
        "averageFlips": 0.7114624505928854,
        "failedImpactRate": 0.1743119266055046,
        "averageFlipMargin": 2.5166666666666666,
        "averageEffectAmount": 0.9920948616600791,
        "averageDamageDealt": 1.9525691699604744,
        "averageDamageTaken": 0.541501976284585,
        "averageNetDamage": 1.4110671936758894,
        "lethalMoves": 14,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "champion",
            "played": 136,
            "winRate": 0.8161764705882353
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.6777777777777778
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.782608695652174
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 0.5
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
            "played": 253,
            "winRate": 0.7549407114624506
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
        "offered": 491,
        "played": 191,
        "ignored": 391,
        "selectionRate": 0.3890020366598778,
        "wins": 160,
        "losses": 31,
        "draws": 0,
        "winRateWhenPlayed": 0.837696335078534,
        "averageFlips": 0.5759162303664922,
        "failedImpactRate": 0.2948717948717949,
        "averageFlipMargin": 2.5636363636363635,
        "averageEffectAmount": 0.9842931937172775,
        "averageDamageDealt": 4.5811518324607325,
        "averageDamageTaken": 1.0523560209424083,
        "averageNetDamage": 3.528795811518324,
        "lethalMoves": 28,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "champion",
            "played": 99,
            "winRate": 0.898989898989899
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.7857142857142857
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 0.5
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 191,
            "winRate": 0.837696335078534
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
        "offered": 171,
        "played": 66,
        "ignored": 144,
        "selectionRate": 0.38596491228070173,
        "wins": 45,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.6818181818181818,
        "averageFlips": 0.3939393939393939,
        "failedImpactRate": 0.4222222222222222,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0.9242424242424242,
        "averageDamageDealt": 1.7121212121212122,
        "averageDamageTaken": 0.6212121212121212,
        "averageNetDamage": 1.0909090909090908,
        "lethalMoves": 5,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 30,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 66,
            "winRate": 0.6818181818181818
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
        "offered": 125,
        "played": 66,
        "ignored": 94,
        "selectionRate": 0.528,
        "wins": 41,
        "losses": 25,
        "draws": 0,
        "winRateWhenPlayed": 0.6212121212121212,
        "averageFlips": 0.42424242424242425,
        "failedImpactRate": 0.391304347826087,
        "averageFlipMargin": 2.857142857142857,
        "averageEffectAmount": 1.4696969696969697,
        "averageDamageDealt": 0.6818181818181818,
        "averageDamageTaken": 0.3333333333333333,
        "averageNetDamage": 0.34848484848484845,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 35,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.875
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 66,
            "winRate": 0.6212121212121212
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
        "offered": 103,
        "played": 65,
        "ignored": 72,
        "selectionRate": 0.6310679611650486,
        "wins": 46,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.7076923076923077,
        "averageFlips": 0.4307692307692308,
        "failedImpactRate": 0.37777777777777777,
        "averageFlipMargin": 2.142857142857143,
        "averageEffectAmount": 3.3076923076923075,
        "averageDamageDealt": 1.1538461538461537,
        "averageDamageTaken": 0.2153846153846154,
        "averageNetDamage": 0.9384615384615383,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.6111111111111112
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.7647058823529411
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.5714285714285714
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 65,
            "winRate": 0.7076923076923077
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
        "offered": 126,
        "played": 57,
        "ignored": 107,
        "selectionRate": 0.4523809523809524,
        "wins": 37,
        "losses": 20,
        "draws": 0,
        "winRateWhenPlayed": 0.6491228070175439,
        "averageFlips": 0.38596491228070173,
        "failedImpactRate": 0.40540540540540543,
        "averageFlipMargin": 3.3181818181818183,
        "averageEffectAmount": 2.1228070175438596,
        "averageDamageDealt": 0.631578947368421,
        "averageDamageTaken": 0.12280701754385964,
        "averageNetDamage": 0.5087719298245614,
        "lethalMoves": 7,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 17,
            "winRate": 0.6470588235294118
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.9166666666666666
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.25
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 57,
            "winRate": 0.6491228070175439
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
        "offered": 131,
        "played": 54,
        "ignored": 105,
        "selectionRate": 0.4122137404580153,
        "wins": 45,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.14814814814814814,
        "failedImpactRate": 0.7575757575757576,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 2.5,
        "averageDamageDealt": 0.9814814814814815,
        "averageDamageTaken": 0.9444444444444444,
        "averageNetDamage": 0.03703703703703709,
        "lethalMoves": 3,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 18,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
            "played": 5,
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
            "played": 54,
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
        "offered": 88,
        "played": 39,
        "ignored": 65,
        "selectionRate": 0.4431818181818182,
        "wins": 30,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.7692307692307693,
        "averageFlips": 0.05128205128205128,
        "failedImpactRate": 0.8,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1.6666666666666667,
        "averageDamageDealt": 0.9743589743589743,
        "averageDamageTaken": 0.02564102564102564,
        "averageNetDamage": 0.9487179487179487,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0.35714285714285715
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 39,
            "winRate": 0.7692307692307693
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
        "offered": 70,
        "played": 27,
        "ignored": 51,
        "selectionRate": 0.38571428571428573,
        "wins": 16,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.5925925925925926,
        "averageFlips": 0.2962962962962963,
        "failedImpactRate": 0.5789473684210527,
        "averageFlipMargin": 4.25,
        "averageEffectAmount": 2.111111111111111,
        "averageDamageDealt": 0.8148148148148148,
        "averageDamageTaken": 1.6666666666666667,
        "averageNetDamage": -0.851851851851852,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.56
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
        "offered": 56,
        "played": 25,
        "ignored": 38,
        "selectionRate": 0.44642857142857145,
        "wins": 19,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.76,
        "averageFlips": 0.4,
        "failedImpactRate": 0.6153846153846154,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 1.16,
        "averageDamageDealt": 0.88,
        "averageDamageTaken": 0.44,
        "averageNetDamage": 0.44,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.8888888888888888
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
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
            "played": 25,
            "winRate": 0.76
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
        "offered": 57,
        "played": 25,
        "ignored": 45,
        "selectionRate": 0.43859649122807015,
        "wins": 16,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.64,
        "averageFlips": 0.56,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0.8,
        "averageDamageDealt": 1.08,
        "averageDamageTaken": 0.4,
        "averageNetDamage": 0.68,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.75
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
        "offered": 85,
        "played": 22,
        "ignored": 72,
        "selectionRate": 0.25882352941176473,
        "wins": 13,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.5909090909090909,
        "averageFlips": 0.09090909090909091,
        "failedImpactRate": 0.8571428571428571,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0.4090909090909091,
        "averageDamageDealt": 2.772727272727273,
        "averageDamageTaken": 0.9090909090909091,
        "averageNetDamage": 1.8636363636363638,
        "lethalMoves": 3,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.25
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 22,
            "winRate": 0.5909090909090909
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
        "offered": 42,
        "played": 20,
        "ignored": 31,
        "selectionRate": 0.47619047619047616,
        "wins": 15,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.35,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 3,
        "averageEffectAmount": 3.55,
        "averageDamageDealt": 0.4,
        "averageDamageTaken": 0.3,
        "averageNetDamage": 0.10000000000000003,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.7777777777777778
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
            "played": 20,
            "winRate": 0.75
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
        "offered": 52,
        "played": 19,
        "ignored": 41,
        "selectionRate": 0.36538461538461536,
        "wins": 14,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.7368421052631579,
        "averageFlips": 0.10526315789473684,
        "failedImpactRate": 0.8181818181818182,
        "averageFlipMargin": 5.5,
        "averageEffectAmount": 3,
        "averageDamageDealt": 0.42105263157894735,
        "averageDamageTaken": 0.21052631578947367,
        "averageNetDamage": 0.21052631578947367,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.7222222222222222
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
            "winRate": 0.7368421052631579
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
        "offered": 19,
        "played": 15,
        "ignored": 9,
        "selectionRate": 0.7894736842105263,
        "wins": 11,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.7333333333333333,
        "averageFlips": 0.4666666666666667,
        "failedImpactRate": 0.2222222222222222,
        "averageFlipMargin": 1.4285714285714286,
        "averageEffectAmount": 1.2666666666666666,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 3,
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
        "offered": 48,
        "played": 14,
        "ignored": 39,
        "selectionRate": 0.2916666666666667,
        "wins": 9,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.6428571428571429,
        "averageFlips": 0.14285714285714285,
        "failedImpactRate": 0.8181818181818182,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.7857142857142858,
        "averageDamageDealt": 1.9285714285714286,
        "averageDamageTaken": 0.6428571428571429,
        "averageNetDamage": 1.2857142857142856,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.6428571428571429
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 14,
            "winRate": 0.6428571428571429
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
        "offered": 12,
        "played": 6,
        "ignored": 11,
        "selectionRate": 0.5,
        "wins": 5,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1,
        "averageEffectAmount": 3.3333333333333335,
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
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 6,
            "winRate": 0.8333333333333334
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
        "offered": 8,
        "played": 5,
        "ignored": 5,
        "selectionRate": 0.625,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0.4,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.5
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
            "winRate": 0.4
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
        "offered": 9,
        "played": 4,
        "ignored": 9,
        "selectionRate": 0.4444444444444444,
        "wins": 1,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.25,
        "averageFlips": 0.25,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.5,
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
            "modelId": "champion",
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
            "played": 4,
            "winRate": 0.25
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
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "behind-on-board",
          "combo-2",
          "engine",
          "revenant",
          "uncommon"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 10,
        "played": 4,
        "ignored": 9,
        "selectionRate": 0.4,
        "wins": 0,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.25,
        "failedImpactRate": 0.75,
        "averageFlipMargin": 0,
        "averageEffectAmount": 1,
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
            "modelId": "opportunist",
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
        "cardId": "reward-common-01",
        "name": "Carte commune 01",
        "family": "familiar",
        "rarity": "common",
        "role": "engine",
        "sourceType": "enemy-upgrade",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "apply-poison"
        ],
        "buildTags": [
          "apply-poison",
          "common",
          "engine",
          "familiar"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 5,
        "played": 3,
        "ignored": 3,
        "selectionRate": 0.6,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 1,
        "failedImpactRate": 0,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.3333333333333333,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.3333333333333333,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
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
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "reward-uncommon-12",
        "name": "Carte inhabituelle 12",
        "family": "arcane",
        "rarity": "uncommon",
        "role": "payoff",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "center",
          "combo-2",
          "hybrid-familiar",
          "payoff",
          "uncommon"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 11,
        "played": 3,
        "ignored": 9,
        "selectionRate": 0.2727272727272727,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 3,
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
        "name": "Fusion sylvestre",
        "family": "revenant",
        "rarity": "rare",
        "sourceType": "fusion",
        "sideTotal": 20,
        "maxSide": 6,
        "minSide": 4,
        "effectKinds": [
          "apply-poison",
          "draw-next-turn"
        ],
        "buildTags": [],
        "preferredPositions": [],
        "offered": 12,
        "played": 3,
        "ignored": 9,
        "selectionRate": 0.25,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0,
        "averageDamageDealt": 4.666666666666667,
        "averageDamageTaken": 1.3333333333333333,
        "averageNetDamage": 3.333333333333334,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 1,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 1,
            "winRate": 1
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
            "played": 3,
            "winRate": 0.6666666666666666
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
        "offered": 4,
        "played": 3,
        "ignored": 1,
        "selectionRate": 0.75,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0.6666666666666666,
        "averageDamageDealt": 5.333333333333333,
        "averageDamageTaken": 0,
        "averageNetDamage": 5.333333333333333,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
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
            "played": 3,
            "winRate": 0.6666666666666666
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
        "ignored": 3,
        "selectionRate": 0.5,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 3,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
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
        "offered": 2630,
        "played": 1403,
        "ignored": 2052,
        "selectionRate": 0.5334600760456274,
        "wins": 1010,
        "losses": 393,
        "draws": 0,
        "winRateWhenPlayed": 0.7198859586600143,
        "averageFlips": 0.2615823235923022,
        "averageDamageDealt": 0.8054169636493229,
        "averageNetDamage": 0.6400570206699929,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 390,
            "winRateWhenPlayed": 0.7
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 378,
            "winRateWhenPlayed": 0.7037037037037037
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 350,
            "winRateWhenPlayed": 0.7057142857142857
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 268,
            "winRateWhenPlayed": 0.7947761194029851
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 14,
            "winRateWhenPlayed": 0.6428571428571429
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
        "offered": 1948,
        "played": 1028,
        "ignored": 1511,
        "selectionRate": 0.5277207392197125,
        "wins": 791,
        "losses": 237,
        "draws": 0,
        "winRateWhenPlayed": 0.769455252918288,
        "averageFlips": 0.6439688715953308,
        "averageDamageDealt": 2.2315175097276265,
        "averageNetDamage": 1.7898832684824904,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 275,
            "winRateWhenPlayed": 0.7490909090909091
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 253,
            "winRateWhenPlayed": 0.7747035573122529
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 253,
            "winRateWhenPlayed": 0.7549407114624506
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 191,
            "winRateWhenPlayed": 0.837696335078534
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 25,
            "winRateWhenPlayed": 0.76
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
        "offered": 469,
        "played": 204,
        "ignored": 370,
        "selectionRate": 0.4349680170575693,
        "wins": 125,
        "losses": 79,
        "draws": 0,
        "winRateWhenPlayed": 0.6127450980392157,
        "averageFlips": 0.3872549019607843,
        "averageDamageDealt": 1.0686274509803921,
        "averageNetDamage": 0.33333333333333326,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 66,
            "winRateWhenPlayed": 0.6818181818181818
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 66,
            "winRateWhenPlayed": 0.6212121212121212
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 37,
            "winRateWhenPlayed": 0.5405405405405406
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 27,
            "winRateWhenPlayed": 0.5925925925925926
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
      },
      {
        "id": "automaton",
        "label": "automaton",
        "offered": 355,
        "played": 173,
        "ignored": 270,
        "selectionRate": 0.48732394366197185,
        "wins": 131,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.7572254335260116,
        "averageFlips": 0.28901734104046245,
        "averageDamageDealt": 0.838150289017341,
        "averageNetDamage": 0.40462427745664736,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 65,
            "winRateWhenPlayed": 0.7076923076923077
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 54,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 20,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 19,
            "winRateWhenPlayed": 0.7368421052631579
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 6,
            "winRateWhenPlayed": 0.8333333333333334
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
        "offered": 266,
        "played": 115,
        "ignored": 213,
        "selectionRate": 0.4323308270676692,
        "wins": 70,
        "losses": 45,
        "draws": 0,
        "winRateWhenPlayed": 0.6086956521739131,
        "averageFlips": 0.26956521739130435,
        "averageDamageDealt": 0.7565217391304347,
        "averageNetDamage": 0.5304347826086956,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 57,
            "winRateWhenPlayed": 0.6491228070175439
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 39,
            "winRateWhenPlayed": 0.7692307692307693
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 10,
            "winRateWhenPlayed": 0.1
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 6,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 3,
            "winRateWhenPlayed": 0.6666666666666666
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
        "offered": 141,
        "played": 48,
        "ignored": 111,
        "selectionRate": 0.3404255319148936,
        "wins": 29,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.6041666666666666,
        "averageFlips": 0.2708333333333333,
        "averageDamageDealt": 2.0416666666666665,
        "averageNetDamage": 1.1875,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 22,
            "winRateWhenPlayed": 0.5909090909090909
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 15,
            "winRateWhenPlayed": 0.7333333333333333
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 3,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      }
    ],
    "roleAnalytics": [
      {
        "id": "anchor",
        "label": "anchor",
        "offered": 1227,
        "played": 859,
        "ignored": 922,
        "selectionRate": 0.700081499592502,
        "wins": 609,
        "losses": 250,
        "draws": 0,
        "winRateWhenPlayed": 0.7089639115250291,
        "averageFlips": 0.4540162980209546,
        "averageDamageDealt": 0.6251455180442375,
        "averageNetDamage": 0.5389988358556461,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 382,
            "winRateWhenPlayed": 0.7015706806282722
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 274,
            "winRateWhenPlayed": 0.7518248175182481
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 66,
            "winRateWhenPlayed": 0.6212121212121212
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 65,
            "winRateWhenPlayed": 0.7076923076923077
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 57,
            "winRateWhenPlayed": 0.6491228070175439
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
        "offered": 1145,
        "played": 716,
        "ignored": 879,
        "selectionRate": 0.6253275109170305,
        "wins": 505,
        "losses": 211,
        "draws": 0,
        "winRateWhenPlayed": 0.7053072625698324,
        "averageFlips": 0.45391061452513964,
        "averageDamageDealt": 0.9413407821229051,
        "averageNetDamage": 0.6536312849162011,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 378,
            "winRateWhenPlayed": 0.7037037037037037
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 253,
            "winRateWhenPlayed": 0.7549407114624506
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 37,
            "winRateWhenPlayed": 0.5405405405405406
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 20,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 14,
            "winRateWhenPlayed": 0.6428571428571429
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
        "offered": 1800,
        "played": 673,
        "ignored": 1441,
        "selectionRate": 0.3738888888888889,
        "wins": 523,
        "losses": 150,
        "draws": 0,
        "winRateWhenPlayed": 0.7771173848439822,
        "averageFlips": 0.3387815750371471,
        "averageDamageDealt": 1.9836552748885588,
        "averageNetDamage": 1.549777117384844,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 241,
            "winRateWhenPlayed": 0.8091286307053942
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 224,
            "winRateWhenPlayed": 0.7946428571428571
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 66,
            "winRateWhenPlayed": 0.6818181818181818
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 54,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 39,
            "winRateWhenPlayed": 0.7692307692307693
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
        "offered": 1323,
        "played": 631,
        "ignored": 1034,
        "selectionRate": 0.47694633408919124,
        "wins": 464,
        "losses": 167,
        "draws": 0,
        "winRateWhenPlayed": 0.7353407290015848,
        "averageFlips": 0.347068145800317,
        "averageDamageDealt": 1.87797147385103,
        "averageNetDamage": 1.380348652931854,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 347,
            "winRateWhenPlayed": 0.7118155619596542
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 191,
            "winRateWhenPlayed": 0.837696335078534
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 27,
            "winRateWhenPlayed": 0.5925925925925926
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 25,
            "winRateWhenPlayed": 0.76
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 19,
            "winRateWhenPlayed": 0.7368421052631579
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
        "offered": 238,
        "played": 70,
        "ignored": 185,
        "selectionRate": 0.29411764705882354,
        "wins": 43,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.6142857142857143,
        "averageFlips": 0.4142857142857143,
        "averageDamageDealt": 3.1285714285714286,
        "averageNetDamage": 2.1142857142857143,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Fusion sylvestre",
            "played": 29,
            "winRateWhenPlayed": 0.6206896551724138
          },
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 27,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "wandering-glyph",
            "name": "Fusion sylvestre",
            "played": 8,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 2,
            "winRateWhenPlayed": 1
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
        "offered": 15,
        "played": 8,
        "ignored": 13,
        "selectionRate": 0.5333333333333333,
        "wins": 7,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.875,
        "averageFlips": 0.375,
        "averageDamageDealt": 0.125,
        "averageNetDamage": 0.125,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 6,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "reward-common-10",
            "name": "Carte commune 10",
            "played": 2,
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
        "offered": 16,
        "played": 8,
        "ignored": 13,
        "selectionRate": 0.5,
        "wins": 3,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.375,
        "averageFlips": 0.75,
        "averageDamageDealt": 0.375,
        "averageNetDamage": 0.375,
        "topCards": [
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 4,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 3,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
            "played": 1,
            "winRateWhenPlayed": 1
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 73%."
        ]
      },
      {
        "id": "finisher",
        "label": "finisher",
        "offered": 45,
        "played": 6,
        "ignored": 40,
        "selectionRate": 0.13333333333333333,
        "wins": 2,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.3333333333333333,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 3,
        "averageNetDamage": -0.5,
        "topCards": [
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 0.5
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
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 5545,
        "played": 2880,
        "ignored": 4317,
        "selectionRate": 0.5193868349864743,
        "wins": 2099,
        "losses": 781,
        "draws": 0,
        "winRateWhenPlayed": 0.7288194444444445,
        "averageFlips": 0.4059027777777778,
        "averageDamageDealt": 1.3416666666666666,
        "averageNetDamage": 1.0211805555555555,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 390,
            "winRateWhenPlayed": 0.7
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 378,
            "winRateWhenPlayed": 0.7037037037037037
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 349,
            "winRateWhenPlayed": 0.7077363896848138
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 275,
            "winRateWhenPlayed": 0.7490909090909091
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 268,
            "winRateWhenPlayed": 0.7947761194029851
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
        "offered": 211,
        "played": 83,
        "ignored": 164,
        "selectionRate": 0.3933649289099526,
        "wins": 53,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.6385542168674698,
        "averageFlips": 0.37349397590361444,
        "averageDamageDealt": 0.9156626506024096,
        "averageNetDamage": 0.5542168674698795,
        "topCards": [
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 25,
            "winRateWhenPlayed": 0.76
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 25,
            "winRateWhenPlayed": 0.64
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 14,
            "winRateWhenPlayed": 0.6428571428571429
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 6,
            "winRateWhenPlayed": 0.8333333333333334
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 5,
            "winRateWhenPlayed": 0.4
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
        "offered": 53,
        "played": 8,
        "ignored": 46,
        "selectionRate": 0.1509433962264151,
        "wins": 4,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.25,
        "averageDamageDealt": 4,
        "averageNetDamage": 0.875,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 0.5
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
        "count": 380,
        "wins": 283,
        "losses": 97,
        "draws": 0,
        "winRate": 0.7447368421052631,
        "averageFlips": 0.2657894736842105,
        "averageDamageDealt": 1.855263157894737,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 376,
        "wins": 307,
        "losses": 69,
        "draws": 0,
        "winRate": 0.8164893617021277,
        "averageFlips": 0.14095744680851063,
        "averageDamageDealt": 3.654255319148936,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 281,
        "wins": 225,
        "losses": 56,
        "draws": 0,
        "winRate": 0.800711743772242,
        "averageFlips": 0.6761565836298933,
        "averageDamageDealt": 3.683274021352313,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 272,
        "wins": 195,
        "losses": 77,
        "draws": 0,
        "winRate": 0.7169117647058824,
        "averageFlips": 0.2610294117647059,
        "averageDamageDealt": 0.16176470588235295,
        "averageEffectAmount": 1.0073529411764706,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 272,
        "wins": 194,
        "losses": 78,
        "draws": 0,
        "winRate": 0.7132352941176471,
        "averageFlips": 0.25735294117647056,
        "averageDamageDealt": 0.16176470588235295,
        "averageEffectAmount": 1.3014705882352942,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 162,
        "wins": 121,
        "losses": 41,
        "draws": 0,
        "winRate": 0.7469135802469136,
        "averageFlips": 0.9135802469135802,
        "averageDamageDealt": 1.3703703703703705,
        "averageEffectAmount": 0.5493827160493827,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 155,
        "wins": 135,
        "losses": 20,
        "draws": 0,
        "winRate": 0.8709677419354839,
        "averageFlips": 0.36774193548387096,
        "averageDamageDealt": 7.348387096774194,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 150,
        "wins": 114,
        "losses": 36,
        "draws": 0,
        "winRate": 0.76,
        "averageFlips": 0.3,
        "averageDamageDealt": 0.4266666666666667,
        "averageEffectAmount": 1.3466666666666667,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 110,
        "wins": 86,
        "losses": 24,
        "draws": 0,
        "winRate": 0.7818181818181819,
        "averageFlips": 1.1,
        "averageDamageDealt": 2.2181818181818183,
        "averageEffectAmount": 1.4090909090909092,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 107,
        "wins": 73,
        "losses": 34,
        "draws": 0,
        "winRate": 0.6822429906542056,
        "averageFlips": 0.09345794392523364,
        "averageDamageDealt": 0.009345794392523364,
        "averageEffectAmount": 4.775700934579439,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 93,
        "wins": 76,
        "losses": 17,
        "draws": 0,
        "winRate": 0.8172043010752689,
        "averageFlips": 1.096774193548387,
        "averageDamageDealt": 2.3333333333333335,
        "averageEffectAmount": 1.1397849462365592,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 78,
        "wins": 54,
        "losses": 24,
        "draws": 0,
        "winRate": 0.6923076923076923,
        "averageFlips": 0.1282051282051282,
        "averageDamageDealt": 3.9615384615384617,
        "averageEffectAmount": 1.0897435897435896,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 76,
        "wins": 47,
        "losses": 29,
        "draws": 0,
        "winRate": 0.618421052631579,
        "averageFlips": 0.39473684210526316,
        "averageDamageDealt": 0.8289473684210527,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 61,
        "wins": 44,
        "losses": 17,
        "draws": 0,
        "winRate": 0.7213114754098361,
        "averageFlips": 0.4262295081967213,
        "averageDamageDealt": 1.2295081967213115,
        "averageEffectAmount": 1.0491803278688525,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 58,
        "wins": 32,
        "losses": 26,
        "draws": 0,
        "winRate": 0.5517241379310345,
        "averageFlips": 0.3275862068965517,
        "averageDamageDealt": 1.793103448275862,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 52,
        "wins": 30,
        "losses": 22,
        "draws": 0,
        "winRate": 0.5769230769230769,
        "averageFlips": 0.17307692307692307,
        "averageDamageDealt": 4.1923076923076925,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+demon",
        "kind": "friendly-adjacent",
        "label": "arcane allie + demon",
        "count": 40,
        "wins": 33,
        "losses": 7,
        "draws": 0,
        "winRate": 0.825,
        "averageFlips": 0.3,
        "averageDamageDealt": 4.45,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 40,
        "wins": 33,
        "losses": 7,
        "draws": 0,
        "winRate": 0.825,
        "averageFlips": 0.175,
        "averageDamageDealt": 1.2,
        "averageEffectAmount": 1.9,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 38,
        "wins": 28,
        "losses": 10,
        "draws": 0,
        "winRate": 0.7368421052631579,
        "averageFlips": 0.21052631578947367,
        "averageDamageDealt": 0.5,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 38,
        "wins": 22,
        "losses": 16,
        "draws": 0,
        "winRate": 0.5789473684210527,
        "averageFlips": 0.5,
        "averageDamageDealt": 0.42105263157894735,
        "averageEffectAmount": 1.1842105263157894,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 36,
        "wins": 28,
        "losses": 8,
        "draws": 0,
        "winRate": 0.7777777777777778,
        "averageFlips": 0.2222222222222222,
        "averageDamageDealt": 1.3055555555555556,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:automaton+demon",
        "kind": "stack-hybrid",
        "label": "automaton + demon dans la pile",
        "count": 36,
        "wins": 27,
        "losses": 9,
        "draws": 0,
        "winRate": 0.75,
        "averageFlips": 0.5277777777777778,
        "averageDamageDealt": 0.9722222222222222,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->demon",
        "kind": "family-chain",
        "label": "arcane -> demon",
        "count": 34,
        "wins": 21,
        "losses": 13,
        "draws": 0,
        "winRate": 0.6176470588235294,
        "averageFlips": 0.38235294117647056,
        "averageDamageDealt": 1.8823529411764706,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+familiar",
        "kind": "stack-hybrid",
        "label": "arcane + familiar dans la pile",
        "count": 32,
        "wins": 24,
        "losses": 8,
        "draws": 0,
        "winRate": 0.75,
        "averageFlips": 0.28125,
        "averageDamageDealt": 0.875,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 80,
        "id": "card-grave-child-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Enfant des tombes sous-performe",
        "detail": "37 plays, 54% win, net PV -0.43.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "medium",
        "sampleSize": 22,
        "id": "card-heron-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume sous-performe",
        "detail": "10 plays, 10% win, net PV 0.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 380,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "380 occurrences, 74% win, 0.27 flips, 1.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 376,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "376 occurrences, 82% win, 0.14 flips, 3.65 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 281,
        "title": "demon -> demon ressort comme combo",
        "detail": "281 occurrences, 80% win, 0.68 flips, 3.68 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 162,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "162 occurrences, 75% win, 0.91 flips, 1.37 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 155,
        "title": "demon allie + demon ressort comme combo",
        "detail": "155 occurrences, 87% win, 0.37 flips, 7.35 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 141,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "141 offres, 34% selection, 60% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 110,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "110 occurrences, 78% win, 1.10 flips, 2.22 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 93,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "93 occurrences, 82% win, 1.10 flips, 2.33 degats.",
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
        "detail": "78 occurrences, 69% win, 0.13 flips, 3.96 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:revenant->revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 58,
        "title": "revenant -> revenant ressort comme combo",
        "detail": "58 occurrences, 55% win, 0.33 flips, 1.79 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 53,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "53 offres, 15% selection, 50% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 52,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "52 occurrences, 58% win, 0.17 flips, 4.19 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 45,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "45 offres, 13% selection, 33% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:arcane+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 40,
        "title": "arcane allie + demon ressort comme combo",
        "detail": "40 occurrences, 83% win, 0.30 flips, 4.45 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:arcane->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 34,
        "title": "arcane -> demon ressort comme combo",
        "detail": "34 occurrences, 62% win, 0.38 flips, 1.88 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "card",
        "confidence": "medium",
        "sampleSize": 18,
        "id": "card-reward-rare-03-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 03 est ignoree par les bots",
        "detail": "18 offres, 17% selection, 33% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-family-automaton-nerf",
      "severity": "problem",
      "title": "automaton domine l'echantillon",
      "detail": "1594 plays, 83% win, net PV 0.24. Confiance high, echantillon 2958.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-combo-effect:gear-monk:draw-next-turn",
      "severity": "problem",
      "title": "Moine engrene -> draw-next-turn ressort comme combo",
      "detail": "340 occurrences, 83% win, 0.33 flips, 0.21 degats. Confiance high, echantillon 340.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:gear-monk:boost-self",
      "severity": "problem",
      "title": "Moine engrene -> boost-self ressort comme combo",
      "detail": "259 occurrences, 82% win, 0.36 flips, 0.19 degats. Confiance high, echantillon 259.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:clock-sentinel:boost-self",
      "severity": "problem",
      "title": "Sentinelle d'horloge -> boost-self ressort comme combo",
      "detail": "233 occurrences, 85% win, 0.21 flips, 0.27 degats. Confiance high, echantillon 233.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-adventure-card-grave-child-buff",
      "severity": "problem",
      "title": "Run complet: Enfant des tombes sous-performe",
      "detail": "37 plays, 54% win, net PV -0.43. Confiance high, echantillon 80.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-heron-buff",
      "severity": "problem",
      "title": "Run complet: Oiselle aubeplume sous-performe",
      "detail": "10 plays, 10% win, net PV 0.00. Confiance medium, echantillon 22.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 12 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (42%). Peu de flips par tour (0.19).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-adventure-combo-family-chain:arcane->arcane",
      "severity": "watch",
      "title": "Run complet: arcane -> arcane ressort comme combo",
      "detail": "380 occurrences, 74% win, 0.27 flips, 1.86 degats. Confiance high, echantillon 380.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 37.5% des runs complets, avec 70.8% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 37.5% des runs complets, avec 80.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20261006-105916",
        "generatedAt": "2026-10-06T10:59:16.150Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.6666666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.822875816993464,
          "human": 0.5592766242464836,
          "arcane": 0.37131367292225204,
          "revenant": 0.323996971990916,
          "familiar": 0.6010802469135802,
          "demon": 0.5894988066825776
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.125,
          "arcane-vs-human": 0.125,
          "arcane-vs-revenant": 0.875,
          "automaton-vs-demon": 0.875,
          "automaton-vs-human": 0.875,
          "automaton-vs-revenant": 0.875,
          "arcane-vs-automaton": 0.25,
          "automaton-vs-familiar": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.625,
          "demon-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.375,
          "expert": 0.375,
          "champion": 0.625
        },
        "cardSignals": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3156498673740053
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3371757925072046
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3206997084548105
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3489736070381232
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2827586206896552
          }
        ]
      },
      {
        "reportId": "ai-lab-20261006-215409",
        "generatedAt": "2026-10-06T21:54:09.695Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5416666666666666
        },
        "familyWinRates": {
          "automaton": 0.6075866579463701,
          "human": 0.606353591160221,
          "revenant": 0.590782122905028,
          "arcane": 0.3039832285115304,
          "familiar": 0.5826086956521739,
          "demon": 0.5740112994350283
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 0.875,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-human": 0.25,
          "arcane-vs-revenant": 0.25,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.625,
          "demon-vs-familiar": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "automaton-vs-human": 0.5,
          "automaton-vs-revenant": 0.5,
          "demon-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0,
          "expert": 0.5,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.28428927680798005
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3020304568527919
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.29201101928374656
          }
        ]
      },
      {
        "reportId": "ai-lab-20261007-020826",
        "generatedAt": "2026-10-07T02:08:26.661Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5833333333333334
        },
        "familyWinRates": {
          "arcane": 0.657967032967033,
          "automaton": 0.6596931659693166,
          "human": 0.527603074772886,
          "familiar": 0.42200452147701584,
          "revenant": 0.3716881150643452,
          "demon": 0.6372997711670481
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 1,
          "automaton-vs-familiar": 0.875,
          "demon-vs-familiar": 0.875,
          "arcane-vs-human": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "automaton-vs-demon": 0.375,
          "automaton-vs-human": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.125,
          "regular": 0.125,
          "expert": 0.625,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6844444444444444
          }
        ]
      },
      {
        "reportId": "ai-lab-20261007-083353",
        "generatedAt": "2026-10-07T08:33:53.075Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.4583333333333333
        },
        "familyWinRates": {
          "arcane": 0.6245538900785154,
          "automaton": 0.7645788336933045,
          "human": 0.41824817518248175,
          "revenant": 0.31488406881077036,
          "familiar": 0.5260067114093959,
          "demon": 0.6754716981132075
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "arcane-vs-revenant": 0.875,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-human": 0.875,
          "automaton-vs-revenant": 0.875,
          "arcane-vs-familiar": 0.25,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.625,
          "familiar-vs-human": 0.375,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.5,
          "expert": 0.75,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "status": "overperformer",
            "winRateWhenPlayed": 0.8
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.693069306930693
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2966101694915254
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32558139534883723
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2768166089965398
          }
        ]
      },
      {
        "reportId": "ai-lab-20261007-193104",
        "generatedAt": "2026-10-07T19:31:04.735Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.625
        },
        "familyWinRates": {
          "automaton": 0.8478401031592521,
          "human": 0.38358905937291526,
          "arcane": 0.46482758620689657,
          "revenant": 0.36615811373092927,
          "familiar": 0.6110671936758894,
          "demon": 0.5843714609286523
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-revenant": 1,
          "automaton-vs-human": 0.875,
          "arcane-vs-familiar": 0.25,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-revenant": 0.375,
          "demon-vs-familiar": 0.625,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.125,
          "expert": 0.375,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34464751958224543
          }
        ]
      },
      {
        "reportId": "ai-lab-20261008-005547",
        "generatedAt": "2026-10-08T00:55:47.529Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.75,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5416666666666666
        },
        "familyWinRates": {
          "human": 0.38669301712779974,
          "automaton": 0.7401055408970977,
          "arcane": 0.567842605156038,
          "familiar": 0.5850986121256392,
          "revenant": 0.3444272445820433,
          "demon": 0.6525529265255293
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "arcane-vs-revenant": 0.875,
          "demon-vs-revenant": 0.875,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-human": 0.75,
          "automaton-vs-familiar": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.625,
          "automaton-vs-human": 0.625,
          "demon-vs-familiar": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.375,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.25,
          "expert": 0.875,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34011627906976744
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.31086142322097376
          }
        ]
      },
      {
        "reportId": "ai-lab-20261008-061722",
        "generatedAt": "2026-10-08T06:17:22.866Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.8849315068493151,
          "arcane": 0.5024288688410826,
          "familiar": 0.5664089950808152,
          "human": 0.42746478873239435,
          "revenant": 0.2082089552238806,
          "demon": 0.7096385542168675
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "automaton-vs-revenant": 1,
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "familiar-vs-revenant": 0.875,
          "arcane-vs-familiar": 0.25,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.125,
          "expert": 0.625,
          "champion": 0.625
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6828193832599119
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7102803738317757
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7357512953367875
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.21787709497206703
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.24929971988795518
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.17415730337078653
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.18587360594795538
          }
        ]
      },
      {
        "reportId": "ai-lab-20261008-135135",
        "generatedAt": "2026-10-08T13:51:35.239Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8958333333333334,
          "expert-vs-champion": 0.4791666666666667
        },
        "familyWinRates": {
          "automaton": 0.7243296272073251,
          "arcane": 0.5654303708887334,
          "human": 0.416813225466057,
          "familiar": 0.4610670511896179,
          "revenant": 0.5255744996293551,
          "demon": 0.5921361502347418
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.8125,
          "arcane-vs-familiar": 0.625,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "automaton-vs-revenant": 0.625,
          "demon-vs-familiar": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5625,
          "arcane-vs-revenant": 0.4375,
          "demon-vs-revenant": 0.4375,
          "familiar-vs-human": 0.5625,
          "familiar-vs-revenant": 0.5625,
          "arcane-vs-automaton": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.375,
          "expert": 0.5625,
          "champion": 0.625
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20261008-170603",
        "generatedAt": "2026-10-08T17:06:03.481Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.3333333333333333,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.356084996780425,
          "human": 0.5934515688949522,
          "automaton": 0.7817543859649123,
          "familiar": 0.5656272661348803,
          "revenant": 0.36014760147601477,
          "demon": 0.6371359223300971
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "demon-vs-familiar": 0.875,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-human": 0.25,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "automaton-vs-demon": 0.625,
          "automaton-vs-human": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-revenant": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.375,
          "expert": 0.75,
          "champion": 0.625
        },
        "cardSignals": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7855072463768116
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2967581047381546
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34269662921348315
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3345323741007194
          }
        ]
      },
      {
        "reportId": "ai-lab-20261009-012536",
        "generatedAt": "2026-10-09T01:25:36.946Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5833333333333334
        },
        "familyWinRates": {
          "automaton": 0.712890625,
          "arcane": 0.39601328903654487,
          "human": 0.44686648501362397,
          "familiar": 0.590057636887608,
          "revenant": 0.49122807017543857,
          "demon": 0.6265895953757226
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 0.875,
          "arcane-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "automaton-vs-revenant": 0.375,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.375,
          "expert": 0.375,
          "champion": 0.75
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20261009-062710",
        "generatedAt": "2026-10-09T06:27:10.625Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.7083333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.3720765414599575,
          "automaton": 0.802158273381295,
          "familiar": 0.6089508437270726,
          "human": 0.5051470588235294,
          "revenant": 0.4036764705882353,
          "demon": 0.593010146561443
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "arcane-vs-familiar": 0.125,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-human": 0.25,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "demon-vs-familiar": 0.625,
          "demon-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-revenant": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3407202216066482
          }
        ]
      },
      {
        "reportId": "ai-lab-20261009-184845",
        "generatedAt": "2026-10-09T18:48:45.291Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.5,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.8262233375156838,
          "human": 0.419921875,
          "arcane": 0.46473302570863545,
          "revenant": 0.40886347390993566,
          "familiar": 0.5154343144292893,
          "demon": 0.6114421930870083
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-automaton": 0.25,
          "automaton-vs-human": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-human": 0.75,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-familiar": 0.5,
          "arcane-vs-revenant": 0.5,
          "familiar-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.125,
          "expert": 0.375,
          "champion": 0.375
        },
        "cardSignals": []
      }
    ],
    "signals": [
      {
        "id": "trend-starter-matchup-demon-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs human reste desequilibre",
        "detail": "La famille de gauche gagne 88% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.875
      },
      {
        "id": "trend-starter-matchup-automaton-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 88% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.8802083333333334
      },
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "76% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.764580656214778
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
        "averageRate": 0.39246964234057424
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 81% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.8125
      },
      {
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 80% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.8020833333333334
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 78% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.78125
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 32% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.3229166666666667
      },
      {
        "id": "trend-starter-matchup-familiar-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "familiar vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 68% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.6822916666666666
      },
      {
        "id": "trend-family-demon",
        "kind": "family",
        "severity": "watch",
        "title": "demon reste trop forte",
        "detail": "62% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.6235965437214936
      },
      {
        "id": "trend-starter-matchup-demon-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 66% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.6614583333333334
      },
      {
        "id": "trend-card-lantern-shade",
        "kind": "card",
        "severity": "watch",
        "title": "Ombre a lanterne reste trop faible",
        "detail": "Signal present dans 6/12 rapports, avec 30% de victoire moyenne.",
        "recommendation": "Faire un ajustement cible et mesurer sa disparition sur plusieurs rapports.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.30315460153043644
      }
    ]
  }
};
