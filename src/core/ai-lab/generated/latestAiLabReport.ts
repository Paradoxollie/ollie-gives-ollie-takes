import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260703-163258",
  "generatedAt": "2026-07-03T16:32:58.811Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 299,
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
      "averageHpEdge": -21.375
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 28,
      "losses": 20,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 6.125
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 24,
      "losses": 24,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -0.4166666666666667
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 31,
      "losses": 17,
      "draws": 0,
      "winRate": 0.6458333333333334,
      "averageHpEdge": 4.375
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 12,
      "losses": 12,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 1.2083333333333333
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
        "turns": 35.25,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 6.583333333333333,
        "flipsPerTurn": 0.1867612293144208,
        "reshuffles": 5.666666666666667,
        "deadTurns": 1,
        "finalHpDifference": 11.583333333333334
      },
      "deadTurnFrequency": 0.028368794326241134,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a confirmer (67%).",
        "Peu de flips par tour (0.19)."
      ]
    }
  ],
  "starterFamilyMatchups": [
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
      "leftWins": 1,
      "rightWins": 7,
      "draws": 0,
      "leftWinRate": 0.125,
      "rightWinRate": 0.875
    },
    {
      "id": "arcane-vs-demon",
      "leftFamily": "arcane",
      "rightFamily": "demon",
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
      "id": "human-vs-revenant",
      "leftFamily": "human",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 6,
      "rightWins": 2,
      "draws": 0,
      "leftWinRate": 0.75,
      "rightWinRate": 0.25
    },
    {
      "id": "arcane-vs-revenant",
      "leftFamily": "arcane",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
    },
    {
      "id": "automaton-vs-revenant",
      "leftFamily": "automaton",
      "rightFamily": "revenant",
      "games": 8,
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
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
      "id": "automaton-vs-demon",
      "leftFamily": "automaton",
      "rightFamily": "demon",
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
          "averageHpEdge": -21.375
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 23,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9583333333333334,
          "averageHpEdge": 21.375
        }
      ],
      "averages": {
        "turns": 19.583333333333332,
        "rounds": 2.1666666666666665,
        "flipsPerMatch": 8.708333333333334,
        "flipsPerTurn": 0.44468085106382976,
        "reshuffles": 2.25,
        "deadTurns": 0.4583333333333333,
        "finalHpDifference": 21.458333333333332
      },
      "deadTurnFrequency": 0.023404255319148935
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
          "wins": 8,
          "winRate": 0.6666666666666666
        },
        "enemy": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 5,
          "losses": 19,
          "draws": 0,
          "winRate": 0.20833333333333334,
          "averageHpEdge": -9.125
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 9.125
        }
      ],
      "averages": {
        "turns": 29.708333333333332,
        "rounds": 3.0833333333333335,
        "flipsPerMatch": 9.541666666666666,
        "flipsPerTurn": 0.3211781206171108,
        "reshuffles": 4.166666666666667,
        "deadTurns": 2.3333333333333335,
        "finalHpDifference": 15.041666666666666
      },
      "deadTurnFrequency": 0.0785413744740533
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
          "modelId": "regular",
          "games": 24,
          "wins": 5,
          "losses": 19,
          "draws": 0,
          "winRate": 0.20833333333333334,
          "averageHpEdge": -9.958333333333334
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 9.958333333333334
        }
      ],
      "averages": {
        "turns": 27.041666666666668,
        "rounds": 2.9583333333333335,
        "flipsPerMatch": 6.875,
        "flipsPerTurn": 0.2542372881355932,
        "reshuffles": 3.9166666666666665,
        "deadTurns": 1,
        "finalHpDifference": 14.958333333333334
      },
      "deadTurnFrequency": 0.03697996918335902
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
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.2083333333333333
        },
        {
          "modelId": "champion",
          "games": 24,
          "wins": 12,
          "losses": 12,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.2083333333333333
        }
      ],
      "averages": {
        "turns": 31.75,
        "rounds": 3.5,
        "flipsPerMatch": 7.166666666666667,
        "flipsPerTurn": 0.22572178477690288,
        "reshuffles": 5,
        "deadTurns": 0.75,
        "finalHpDifference": 11.541666666666666
      },
      "deadTurnFrequency": 0.023622047244094488
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
      "averageLocationsCleared": 2.875,
      "averageFinalDeckSize": 13.25,
      "averageDeckDelta": 1.25,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 23.4375,
      "averageCombatFlips": 7.0625,
      "averageDeadTurns": 4.1875,
      "averageReshuffles": 2.8125,
      "averageRewardsClaimed": 1.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.375,
      "averageRemovals": 0,
      "averageFusions": 0.125,
      "familyPickRates": {
        "familiar": 0.25,
        "demon": 0.125,
        "automaton": 0.125,
        "revenant": 0.25,
        "arcane": 0.25
      },
      "nodeMix": {
        "combat": 0.5652173913043478,
        "elite": 0.13043478260869565,
        "shop": 0.043478260869565216,
        "chest": 0.13043478260869565,
        "rest": 0.13043478260869565,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "opportunist",
      "runs": 8,
      "victories": 1,
      "bossReached": 2,
      "victoryRate": 0.125,
      "bossReachRate": 0.25,
      "averageLocationsCleared": 5.125,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.7307692307692307,
      "averageCombatTurns": 13.923076923076923,
      "averageCombatFlips": 8.076923076923077,
      "averageDeadTurns": 0.8846153846153846,
      "averageReshuffles": 1.8846153846153846,
      "averageRewardsClaimed": 2.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 1,
      "averageFusions": 0.375,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.46511627906976744,
        "elite": 0.09302325581395349,
        "shop": 0.06976744186046512,
        "chest": 0.11627906976744186,
        "rest": 0.20930232558139536,
        "boss": 0.046511627906976744
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 0,
      "bossReached": 4,
      "victoryRate": 0,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 5.875,
      "averageFinalDeckSize": 14.375,
      "averageDeckDelta": 2.375,
      "averageCombatWinRate": 0.7333333333333333,
      "averageCombatTurns": 24.466666666666665,
      "averageCombatFlips": 5.9,
      "averageDeadTurns": 3.8,
      "averageReshuffles": 2.8666666666666667,
      "averageRewardsClaimed": 3.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.75,
      "averageFusions": 0.75,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.49019607843137253,
        "elite": 0.0196078431372549,
        "shop": 0.11764705882352941,
        "chest": 0.17647058823529413,
        "rest": 0.11764705882352941,
        "boss": 0.0784313725490196
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 3,
      "bossReached": 5,
      "victoryRate": 0.375,
      "bossReachRate": 0.625,
      "averageLocationsCleared": 7.125,
      "averageFinalDeckSize": 13.875,
      "averageDeckDelta": 1.875,
      "averageCombatWinRate": 0.8333333333333334,
      "averageCombatTurns": 23.466666666666665,
      "averageCombatFlips": 6.866666666666666,
      "averageDeadTurns": 3.3,
      "averageReshuffles": 3.3333333333333335,
      "averageRewardsClaimed": 3.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.875,
      "averageRemovals": 0.75,
      "averageFusions": 1.25,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.3387096774193548,
        "elite": 0.06451612903225806,
        "shop": 0.16129032258064516,
        "chest": 0.14516129032258066,
        "rest": 0.20967741935483872,
        "boss": 0.08064516129032258
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 5,
      "bossReached": 5,
      "victoryRate": 0.625,
      "bossReachRate": 0.625,
      "averageLocationsCleared": 6.5,
      "averageFinalDeckSize": 14.625,
      "averageDeckDelta": 2.625,
      "averageCombatWinRate": 0.88,
      "averageCombatTurns": 22.48,
      "averageCombatFlips": 5.68,
      "averageDeadTurns": 3.04,
      "averageReshuffles": 2.56,
      "averageRewardsClaimed": 3.625,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 1.5,
      "averageRemovals": 0,
      "averageFusions": 1,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.2807017543859649,
        "elite": 0.07017543859649122,
        "shop": 0.14035087719298245,
        "chest": 0.21052631578947367,
        "rest": 0.21052631578947367,
        "boss": 0.08771929824561403
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
      "seed": 1470585799,
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
      "totalCombatTurns": 29,
      "totalCombatFlips": 13,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 13,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 9,
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
      "modelId": "beginner",
      "seed": 1453808180,
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
      "totalCombatTurns": 68,
      "totalCombatFlips": 15,
      "totalDeadTurns": 14,
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
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 12,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 2,
      "modelId": "beginner",
      "seed": 1504141037,
      "selectedFamily": "revenant",
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
      "totalCombatTurns": 66,
      "totalCombatFlips": 22,
      "totalDeadTurns": 12,
      "totalReshuffles": 10,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 13,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
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
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1487363418,
      "selectedFamily": "demon",
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
      "totalCombatFlips": 16,
      "totalDeadTurns": 7,
      "totalReshuffles": 4,
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
        "chest": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 1403475323,
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
      "totalCombatTurns": 57,
      "totalCombatFlips": 12,
      "totalDeadTurns": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 57,
          "combatFlips": 12,
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
      "modelId": "beginner",
      "seed": 1386697704,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 36,
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
        "chest": 1,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 11,
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
      "seed": 1437030561,
      "selectedFamily": "familiar",
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
      "totalCombatTurns": 42,
      "totalCombatFlips": 17,
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
        "ancient-sap"
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
        "familiar": 11,
        "demon": 1,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1420252942,
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
      "totalCombatTurns": 34,
      "totalCombatFlips": 6,
      "totalDeadTurns": 7,
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
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 34,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 20663906,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 57,
      "totalCombatFlips": 37,
      "totalDeadTurns": 3,
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 14,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 1,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 10,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 37441525,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 39,
      "totalCombatFlips": 19,
      "totalDeadTurns": 4,
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
        "spring-tear"
      ],
      "campVisits": 4,
      "upgrades": 1,
      "removals": 3,
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
        "familiar": 1,
        "demon": 9,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 10,
        "uncommon": 1,
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
          "combatTurns": 21,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 4282075964,
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
      "totalCombatTurns": 23,
      "totalCombatFlips": 14,
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
        "watcher-stone"
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
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 10,
        "human": 0,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 9,
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
      "modelId": "opportunist",
      "seed": 3886287,
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
      "totalCombatTurns": 29,
      "totalCombatFlips": 14,
      "totalDeadTurns": 3,
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
        "demon": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 17,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 9,
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
      "modelId": "opportunist",
      "seed": 4248520726,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 48,
      "totalCombatFlips": 31,
      "totalDeadTurns": 3,
      "totalReshuffles": 4,
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
        "demon": 14,
        "human": 0,
        "automaton": 0,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
          "combatFlips": 6,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
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
      "runIndex": 5,
      "modelId": "opportunist",
      "seed": 4265298345,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 51,
      "totalCombatFlips": 27,
      "totalDeadTurns": 3,
      "totalReshuffles": 11,
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
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 2,
        "automaton": 1,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 13,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 6,
      "modelId": "opportunist",
      "seed": 4214965488,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 75,
      "totalCombatFlips": 45,
      "totalDeadTurns": 4,
      "totalReshuffles": 8,
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
        "ancient-sap"
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
        "familiar": 0,
        "demon": 11,
        "human": 0,
        "automaton": 1,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
          "combatFlips": 6,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 14,
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
          "combatTurns": 19,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 4231743107,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 40,
      "totalCombatFlips": 23,
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
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 13,
        "human": 0,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 9,
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
      "seed": 3241785875,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 52,
      "totalCombatFlips": 14,
      "totalDeadTurns": 7,
      "totalReshuffles": 4,
      "rewardOffersSeen": 4,
      "rewardsClaimed": 4,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 4,
      "upgrades": 0,
      "removals": 4,
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
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 3225008256,
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
      "totalCombatTurns": 86,
      "totalCombatFlips": 18,
      "totalDeadTurns": 14,
      "totalReshuffles": 17,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 2,
        "rare": 1
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
        "elite": 0,
        "shop": 1,
        "chest": 3,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 11,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 43,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
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
      "runIndex": 2,
      "modelId": "regular",
      "seed": 3275341113,
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
      "totalCombatTurns": 69,
      "totalCombatFlips": 18,
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
        "demon": 0,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 13,
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
      "seed": 3258563494,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 5,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 92,
      "totalCombatFlips": 31,
      "totalDeadTurns": 11,
      "totalReshuffles": 9,
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 2,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
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
          "combatTurns": 19,
          "combatFlips": 13,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 3308896351,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 53,
      "totalCombatFlips": 15,
      "totalDeadTurns": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "kind": "combat",
          "title": "Duel des fougeres",
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 14,
          "combatFlips": 11,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 3292118732,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 211,
      "totalCombatFlips": 51,
      "totalDeadTurns": 19,
      "totalReshuffles": 29,
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
        "ancient-sap"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 6,
        "elite": 0,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 1,
        "automaton": 2,
        "revenant": 0,
        "arcane": 14,
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
          "combatTurns": 25,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 48,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 12,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 37,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 21,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 3342451589,
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
      "totalCombatTurns": 84,
      "totalCombatFlips": 16,
      "totalDeadTurns": 12,
      "totalReshuffles": 8,
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
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 3,
        "chest": 2,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 2,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
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
      "seed": 3325673970,
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
      "totalCombatTurns": 87,
      "totalCombatFlips": 14,
      "totalDeadTurns": 24,
      "totalReshuffles": 9,
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
        "demon": 2,
        "human": 0,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 34,
          "combatFlips": 5,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 1977670661,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 138,
      "totalCombatFlips": 38,
      "totalDeadTurns": 22,
      "totalReshuffles": 29,
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
        "chest": 2,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 2,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 13,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 10,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 9,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
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
      "runIndex": 1,
      "modelId": "expert",
      "seed": 1960893042,
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
      "totalCombatTurns": 64,
      "totalCombatFlips": 14,
      "totalDeadTurns": 12,
      "totalReshuffles": 8,
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
        "moss-dust"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 3,
        "chest": 2,
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
        "common": 10,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "combatWinner": "player",
          "combatTurns": 27,
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
      "runIndex": 2,
      "modelId": "expert",
      "seed": 1944115423,
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
      "totalCombatTurns": 41,
      "totalCombatFlips": 8,
      "totalDeadTurns": 6,
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
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 4,
      "fusions": 4,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 4,
        "chest": 0,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 9,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 9,
          "combatWinner": "enemy",
          "combatTurns": 19,
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
      "runIndex": 3,
      "modelId": "expert",
      "seed": 1927337804,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 131,
      "totalCombatFlips": 42,
      "totalDeadTurns": 14,
      "totalReshuffles": 18,
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
        "old-bridge-stone"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 2,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 13,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 28,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 1910560185,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 53,
      "totalCombatFlips": 14,
      "totalDeadTurns": 10,
      "totalReshuffles": 11,
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
        "spring-tear"
      ],
      "campVisits": 4,
      "upgrades": 2,
      "removals": 2,
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
        "demon": 1,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 35,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "chest",
          "title": "Tresor des racines",
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
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
      "seed": 1893782566,
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
      "totalCombatTurns": 56,
      "totalCombatFlips": 11,
      "totalDeadTurns": 11,
      "totalReshuffles": 7,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 32,
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
      "runIndex": 6,
      "modelId": "expert",
      "seed": 1877004947,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 6,
      "combatLosses": 0,
      "totalCombatTurns": 108,
      "totalCombatFlips": 47,
      "totalDeadTurns": 9,
      "totalReshuffles": 10,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 0,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 2,
        "revenant": 1,
        "arcane": 14,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 2,
        "rare": 1
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 11,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 3,
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
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
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
      "runIndex": 7,
      "modelId": "expert",
      "seed": 1860227328,
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
      "totalCombatTurns": 113,
      "totalCombatFlips": 32,
      "totalDeadTurns": 15,
      "totalReshuffles": 13,
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
        "chest": 0,
        "rest": 1,
        "boss": 0
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 1745496062,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 78,
      "totalCombatFlips": 22,
      "totalDeadTurns": 6,
      "totalReshuffles": 10,
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
        "watcher-stone"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
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
        "familiar": 1,
        "demon": 0,
        "human": 1,
        "automaton": 12,
        "revenant": 0,
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
          "title": "Route des brindilles",
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 3,
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
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
      "modelId": "champion",
      "seed": 1762273681,
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
      "totalCombatTurns": 51,
      "totalCombatFlips": 12,
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
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 2,
      "modelId": "champion",
      "seed": 1711940824,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 2,
      "combatLosses": 0,
      "totalCombatTurns": 48,
      "totalCombatFlips": 22,
      "totalDeadTurns": 4,
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
        "old-bridge-stone"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
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
        "demon": 0,
        "human": 0,
        "automaton": 15,
        "revenant": 1,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 12,
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
          "combatTurns": 20,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "combatWinner": "player",
          "combatTurns": 28,
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
      "modelId": "champion",
      "seed": 1728718443,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 129,
      "totalCombatFlips": 26,
      "totalDeadTurns": 23,
      "totalReshuffles": 16,
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
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 13,
        "revenant": 1,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 30,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 43,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
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
          "combatTurns": 20,
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
      "seed": 1812606538,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 41,
      "totalCombatFlips": 9,
      "totalDeadTurns": 6,
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
        "automaton": 13,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 5,
      "modelId": "champion",
      "seed": 1829384157,
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
      "totalCombatTurns": 78,
      "totalCombatFlips": 18,
      "totalDeadTurns": 6,
      "totalReshuffles": 10,
      "rewardOffersSeen": 3,
      "rewardsClaimed": 3,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 8,
      "stealRewardsClaimed": 2,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 2,
        "shop": 0,
        "chest": 1,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 15,
        "revenant": 0,
        "arcane": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
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
      "runIndex": 6,
      "modelId": "champion",
      "seed": 1779051300,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 87,
      "totalCombatFlips": 13,
      "totalDeadTurns": 18,
      "totalReshuffles": 9,
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
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 3,
        "chest": 1,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 8,
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
      "seed": 1795828919,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 50,
      "totalCombatFlips": 20,
      "totalDeadTurns": 6,
      "totalReshuffles": 4,
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
        "watcher-stone"
      ],
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 13,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
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
        "offered": 600,
        "played": 417,
        "ignored": 442,
        "selectionRate": 0.695,
        "wins": 245,
        "losses": 172,
        "draws": 0,
        "winRateWhenPlayed": 0.5875299760191847,
        "averageFlips": 0.21103117505995203,
        "failedImpactRate": 0.5789473684210527,
        "averageFlipMargin": 1.7954545454545454,
        "averageEffectAmount": 4.810551558752998,
        "averageDamageDealt": 0.16786570743405277,
        "averageDamageTaken": 0.06474820143884892,
        "averageNetDamage": 0.10311750599520385,
        "lethalMoves": 2,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 190,
            "winRate": 0.5368421052631579
          },
          {
            "modelId": "expert",
            "played": 89,
            "winRate": 0.6629213483146067
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.6571428571428571
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.7169811320754716
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
            "played": 417,
            "winRate": 0.5875299760191847
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
        "offered": 524,
        "played": 417,
        "ignored": 367,
        "selectionRate": 0.7958015267175572,
        "wins": 237,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.5683453237410072,
        "averageFlips": 0.16546762589928057,
        "failedImpactRate": 0.5369127516778524,
        "averageFlipMargin": 2.028985507246377,
        "averageEffectAmount": 5.623501199040767,
        "averageDamageDealt": 0.18705035971223022,
        "averageDamageTaken": 0.03836930455635491,
        "averageNetDamage": 0.14868105515587532,
        "lethalMoves": 3,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 189,
            "winRate": 0.4973544973544973
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.6627906976744186
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.7169811320754716
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
            "played": 417,
            "winRate": 0.5683453237410072
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
        "offered": 592,
        "played": 397,
        "ignored": 431,
        "selectionRate": 0.6706081081081081,
        "wins": 173,
        "losses": 224,
        "draws": 0,
        "winRateWhenPlayed": 0.4357682619647355,
        "averageFlips": 0.34005037783375314,
        "failedImpactRate": 0.5454545454545454,
        "averageFlipMargin": 1.6444444444444444,
        "averageEffectAmount": 3.118387909319899,
        "averageDamageDealt": 0.16624685138539042,
        "averageDamageTaken": 0.15113350125944586,
        "averageNetDamage": 0.015113350125944558,
        "lethalMoves": 3,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 173,
            "winRate": 0.3988439306358382
          },
          {
            "modelId": "expert",
            "played": 84,
            "winRate": 0.5357142857142857
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.55
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.3333333333333333
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
            "played": 397,
            "winRate": 0.4357682619647355
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
        "offered": 468,
        "played": 388,
        "ignored": 352,
        "selectionRate": 0.8290598290598291,
        "wins": 173,
        "losses": 215,
        "draws": 0,
        "winRateWhenPlayed": 0.44587628865979384,
        "averageFlips": 0.3170103092783505,
        "failedImpactRate": 0.4765957446808511,
        "averageFlipMargin": 1.7560975609756098,
        "averageEffectAmount": 4.36340206185567,
        "averageDamageDealt": 0.14432989690721648,
        "averageDamageTaken": 0.041237113402061855,
        "averageNetDamage": 0.10309278350515463,
        "lethalMoves": 3,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 164,
            "winRate": 0.47560975609756095
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.43529411764705883
          },
          {
            "modelId": "opportunist",
            "played": 81,
            "winRate": 0.5925925925925926
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.10810810810810811
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
            "played": 388,
            "winRate": 0.44587628865979384
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
        "offered": 675,
        "played": 387,
        "ignored": 536,
        "selectionRate": 0.5733333333333334,
        "wins": 236,
        "losses": 151,
        "draws": 0,
        "winRateWhenPlayed": 0.6098191214470284,
        "averageFlips": 0.15503875968992248,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 2.4833333333333334,
        "averageEffectAmount": 5.542635658914729,
        "averageDamageDealt": 0.2713178294573643,
        "averageDamageTaken": 0.11886304909560723,
        "averageNetDamage": 0.15245478036175708,
        "lethalMoves": 6,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 181,
            "winRate": 0.5414364640883977
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.7105263157894737
          },
          {
            "modelId": "opportunist",
            "played": 64,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.72
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
            "played": 387,
            "winRate": 0.6098191214470284
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
        "offered": 515,
        "played": 386,
        "ignored": 390,
        "selectionRate": 0.7495145631067961,
        "wins": 170,
        "losses": 216,
        "draws": 0,
        "winRateWhenPlayed": 0.44041450777202074,
        "averageFlips": 0.3471502590673575,
        "failedImpactRate": 0.4530612244897959,
        "averageFlipMargin": 1.7761194029850746,
        "averageEffectAmount": 3.5595854922279795,
        "averageDamageDealt": 0.12694300518134716,
        "averageDamageTaken": 0.03367875647668394,
        "averageNetDamage": 0.09326424870466321,
        "lethalMoves": 4,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 162,
            "winRate": 0.46296296296296297
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.4666666666666667
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.5694444444444444
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.13157894736842105
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0.2916666666666667
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 386,
            "winRate": 0.44041450777202074
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
        "offered": 1129,
        "played": 383,
        "ignored": 947,
        "selectionRate": 0.3392382639503986,
        "wins": 218,
        "losses": 165,
        "draws": 0,
        "winRateWhenPlayed": 0.5691906005221932,
        "averageFlips": 0.25326370757180156,
        "failedImpactRate": 0.7493540051679587,
        "averageFlipMargin": 2.2989690721649483,
        "averageEffectAmount": 3.629242819843342,
        "averageDamageDealt": 0.9921671018276762,
        "averageDamageTaken": 0.3185378590078329,
        "averageNetDamage": 0.6736292428198434,
        "lethalMoves": 13,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.5112359550561798
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.6395348837209303
          },
          {
            "modelId": "opportunist",
            "played": 60,
            "winRate": 0.65
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.75
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
            "played": 383,
            "winRate": 0.5691906005221932
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
        "offered": 518,
        "played": 379,
        "ignored": 402,
        "selectionRate": 0.7316602316602316,
        "wins": 167,
        "losses": 212,
        "draws": 0,
        "winRateWhenPlayed": 0.44063324538258575,
        "averageFlips": 0.24274406332453827,
        "failedImpactRate": 0.4972677595628415,
        "averageFlipMargin": 2.25,
        "averageEffectAmount": 4.424802110817942,
        "averageDamageDealt": 0.09234828496042216,
        "averageDamageTaken": 0.026385224274406333,
        "averageNetDamage": 0.06596306068601583,
        "lethalMoves": 2,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.398876404494382
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.5844155844155844
          },
          {
            "modelId": "opportunist",
            "played": 62,
            "winRate": 0.532258064516129
          },
          {
            "modelId": "champion",
            "played": 46,
            "winRate": 0.391304347826087
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
            "played": 379,
            "winRate": 0.44063324538258575
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
        "offered": 497,
        "played": 375,
        "ignored": 334,
        "selectionRate": 0.7545271629778671,
        "wins": 199,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.5306666666666666,
        "averageFlips": 0.264,
        "failedImpactRate": 0.49746192893401014,
        "averageFlipMargin": 1.898989898989899,
        "averageEffectAmount": 3.224,
        "averageDamageDealt": 0.184,
        "averageDamageTaken": 0.06133333333333333,
        "averageNetDamage": 0.12266666666666667,
        "lethalMoves": 5,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.5030674846625767
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.6395348837209303
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.7843137254901961
          },
          {
            "modelId": "opportunist",
            "played": 51,
            "winRate": 0.43137254901960786
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
            "played": 375,
            "winRate": 0.5306666666666666
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
        "offered": 608,
        "played": 374,
        "ignored": 464,
        "selectionRate": 0.6151315789473685,
        "wins": 199,
        "losses": 175,
        "draws": 0,
        "winRateWhenPlayed": 0.5320855614973262,
        "averageFlips": 0.25668449197860965,
        "failedImpactRate": 0.5450236966824644,
        "averageFlipMargin": 2.125,
        "averageEffectAmount": 3.320855614973262,
        "averageDamageDealt": 0.3235294117647059,
        "averageDamageTaken": 0.08823529411764706,
        "averageNetDamage": 0.23529411764705882,
        "lethalMoves": 10,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 166,
            "winRate": 0.46987951807228917
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.6235294117647059
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.7647058823529411
          },
          {
            "modelId": "opportunist",
            "played": 50,
            "winRate": 0.52
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
            "played": 374,
            "winRate": 0.5320855614973262
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
        "played": 368,
        "ignored": 436,
        "selectionRate": 0.6490299823633157,
        "wins": 202,
        "losses": 166,
        "draws": 0,
        "winRateWhenPlayed": 0.5489130434782609,
        "averageFlips": 0.20380434782608695,
        "failedImpactRate": 0.5786516853932584,
        "averageFlipMargin": 1.6,
        "averageEffectAmount": 3.6032608695652173,
        "averageDamageDealt": 0.14945652173913043,
        "averageDamageTaken": 0.06521739130434782,
        "averageNetDamage": 0.08423913043478261,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.49404761904761907
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "opportunist",
            "played": 51,
            "winRate": 0.49019607843137253
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
            "played": 368,
            "winRate": 0.5489130434782609
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
        "played": 363,
        "ignored": 570,
        "selectionRate": 0.491869918699187,
        "wins": 161,
        "losses": 202,
        "draws": 0,
        "winRateWhenPlayed": 0.44352617079889806,
        "averageFlips": 0.2534435261707989,
        "failedImpactRate": 0.6605166051660517,
        "averageFlipMargin": 1.7065217391304348,
        "averageEffectAmount": 3.4573002754820936,
        "averageDamageDealt": 0.41046831955922863,
        "averageDamageTaken": 0.19008264462809918,
        "averageNetDamage": 0.22038567493112945,
        "lethalMoves": 7,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.45625
          },
          {
            "modelId": "expert",
            "played": 84,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "opportunist",
            "played": 67,
            "winRate": 0.6268656716417911
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.13157894736842105
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0.35714285714285715
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 363,
            "winRate": 0.44352617079889806
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
        "offered": 617,
        "played": 363,
        "ignored": 501,
        "selectionRate": 0.5883306320907618,
        "wins": 153,
        "losses": 210,
        "draws": 0,
        "winRateWhenPlayed": 0.4214876033057851,
        "averageFlips": 0.256198347107438,
        "failedImpactRate": 0.5528846153846154,
        "averageFlipMargin": 1.8709677419354838,
        "averageEffectAmount": 3.597796143250689,
        "averageDamageDealt": 0.19834710743801653,
        "averageDamageTaken": 0.11570247933884298,
        "averageNetDamage": 0.08264462809917356,
        "lethalMoves": 3,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.358974358974359
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.5657894736842105
          },
          {
            "modelId": "opportunist",
            "played": 74,
            "winRate": 0.5135135135135135
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.3902439024390244
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
            "played": 363,
            "winRate": 0.4214876033057851
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
        "offered": 448,
        "played": 355,
        "ignored": 364,
        "selectionRate": 0.7924107142857143,
        "wins": 230,
        "losses": 125,
        "draws": 0,
        "winRateWhenPlayed": 0.647887323943662,
        "averageFlips": 0.24788732394366197,
        "failedImpactRate": 0.5510204081632653,
        "averageFlipMargin": 1.8068181818181819,
        "averageEffectAmount": 3.0591549295774647,
        "averageDamageDealt": 0.15211267605633802,
        "averageDamageTaken": 0.03943661971830986,
        "averageNetDamage": 0.11267605633802816,
        "lethalMoves": 2,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 174,
            "winRate": 0.6954022988505747
          },
          {
            "modelId": "expert",
            "played": 71,
            "winRate": 0.7746478873239436
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.5263157894736842
          },
          {
            "modelId": "champion",
            "played": 33,
            "winRate": 0.7272727272727273
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
            "played": 355,
            "winRate": 0.647887323943662
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
        "offered": 565,
        "played": 344,
        "ignored": 454,
        "selectionRate": 0.6088495575221239,
        "wins": 221,
        "losses": 123,
        "draws": 0,
        "winRateWhenPlayed": 0.6424418604651163,
        "averageFlips": 0.3866279069767442,
        "failedImpactRate": 0.4267241379310345,
        "averageFlipMargin": 1.8796992481203008,
        "averageEffectAmount": 2.241279069767442,
        "averageDamageDealt": 0.29069767441860467,
        "averageDamageTaken": 0.12209302325581395,
        "averageNetDamage": 0.16860465116279072,
        "lethalMoves": 3,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 167,
            "winRate": 0.688622754491018
          },
          {
            "modelId": "expert",
            "played": 70,
            "winRate": 0.7428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.559322033898305
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.7
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
            "played": 344,
            "winRate": 0.6424418604651163
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
        "offered": 615,
        "played": 340,
        "ignored": 421,
        "selectionRate": 0.5528455284552846,
        "wins": 227,
        "losses": 113,
        "draws": 0,
        "winRateWhenPlayed": 0.6676470588235294,
        "averageFlips": 0.1588235294117647,
        "failedImpactRate": 0.7096774193548387,
        "averageFlipMargin": 2.2222222222222223,
        "averageEffectAmount": 1.9823529411764707,
        "averageDamageDealt": 0.6205882352941177,
        "averageDamageTaken": 0.07941176470588235,
        "averageNetDamage": 0.5411764705882354,
        "lethalMoves": 12,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 162,
            "winRate": 0.6790123456790124
          },
          {
            "modelId": "expert",
            "played": 63,
            "winRate": 0.873015873015873
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.5789473684210527
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.7631578947368421
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
            "played": 340,
            "winRate": 0.6676470588235294
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
        "offered": 993,
        "played": 307,
        "ignored": 831,
        "selectionRate": 0.30916414904330314,
        "wins": 140,
        "losses": 167,
        "draws": 0,
        "winRateWhenPlayed": 0.4560260586319218,
        "averageFlips": 0.16938110749185667,
        "failedImpactRate": 0.776824034334764,
        "averageFlipMargin": 1.8846153846153846,
        "averageEffectAmount": 1.208469055374593,
        "averageDamageDealt": 0.993485342019544,
        "averageDamageTaken": 0.46905537459283386,
        "averageNetDamage": 0.5244299674267101,
        "lethalMoves": 8,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 133,
            "winRate": 0.45864661654135336
          },
          {
            "modelId": "expert",
            "played": 62,
            "winRate": 0.4838709677419355
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.5964912280701754
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.24324324324324326
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 307,
            "winRate": 0.4560260586319218
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
        "offered": 1120,
        "played": 301,
        "ignored": 969,
        "selectionRate": 0.26875,
        "wins": 159,
        "losses": 142,
        "draws": 0,
        "winRateWhenPlayed": 0.5282392026578073,
        "averageFlips": 0.3023255813953488,
        "failedImpactRate": 0.7083333333333334,
        "averageFlipMargin": 2.5604395604395602,
        "averageEffectAmount": 0.9534883720930233,
        "averageDamageDealt": 1.5514950166112957,
        "averageDamageTaken": 0.6112956810631229,
        "averageNetDamage": 0.9401993355481728,
        "lethalMoves": 13,
        "roundClosers": 60,
        "byModel": [
          {
            "modelId": "regular",
            "played": 122,
            "winRate": 0.4344262295081967
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.6533333333333333
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.8292682926829268
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.05263157894736842
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 301,
            "winRate": 0.5282392026578073
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
        "played": 300,
        "ignored": 693,
        "selectionRate": 0.351288056206089,
        "wins": 193,
        "losses": 107,
        "draws": 0,
        "winRateWhenPlayed": 0.6433333333333333,
        "averageFlips": 0.38333333333333336,
        "failedImpactRate": 0.6217105263157895,
        "averageFlipMargin": 2.0521739130434784,
        "averageEffectAmount": 1.42,
        "averageDamageDealt": 1.3033333333333332,
        "averageDamageTaken": 0.30666666666666664,
        "averageNetDamage": 0.9966666666666666,
        "lethalMoves": 11,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "regular",
            "played": 137,
            "winRate": 0.708029197080292
          },
          {
            "modelId": "expert",
            "played": 58,
            "winRate": 0.7586206896551724
          },
          {
            "modelId": "opportunist",
            "played": 54,
            "winRate": 0.5370370370370371
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.6764705882352942
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
            "played": 300,
            "winRate": 0.6433333333333333
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
        "offered": 1149,
        "played": 287,
        "ignored": 937,
        "selectionRate": 0.24978241949521324,
        "wins": 145,
        "losses": 142,
        "draws": 0,
        "winRateWhenPlayed": 0.5052264808362369,
        "averageFlips": 0.22996515679442509,
        "failedImpactRate": 0.7857142857142857,
        "averageFlipMargin": 1.878787878787879,
        "averageEffectAmount": 0.8257839721254355,
        "averageDamageDealt": 1.4878048780487805,
        "averageDamageTaken": 0.7560975609756098,
        "averageNetDamage": 0.7317073170731707,
        "lethalMoves": 19,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 126,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 68,
            "winRate": 0.5588235294117647
          },
          {
            "modelId": "opportunist",
            "played": 47,
            "winRate": 0.5319148936170213
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.3333333333333333
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
            "played": 287,
            "winRate": 0.5052264808362369
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
        "offered": 330,
        "played": 232,
        "ignored": 266,
        "selectionRate": 0.703030303030303,
        "wins": 143,
        "losses": 89,
        "draws": 0,
        "winRateWhenPlayed": 0.6163793103448276,
        "averageFlips": 0.8017241379310345,
        "failedImpactRate": 0.11848341232227488,
        "averageFlipMargin": 2.0053763440860215,
        "averageEffectAmount": 1.125,
        "averageDamageDealt": 1.0129310344827587,
        "averageDamageTaken": 0.19827586206896552,
        "averageNetDamage": 0.8146551724137931,
        "lethalMoves": 8,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 97,
            "winRate": 0.6494845360824743
          },
          {
            "modelId": "expert",
            "played": 54,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "opportunist",
            "played": 40,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.5384615384615384
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
            "played": 232,
            "winRate": 0.6163793103448276
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
        "offered": 376,
        "played": 225,
        "ignored": 295,
        "selectionRate": 0.598404255319149,
        "wins": 140,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.6222222222222222,
        "averageFlips": 0.84,
        "failedImpactRate": 0.09134615384615384,
        "averageFlipMargin": 1.6507936507936507,
        "averageEffectAmount": 1.1022222222222222,
        "averageDamageDealt": 1.0444444444444445,
        "averageDamageTaken": 0.17333333333333334,
        "averageNetDamage": 0.8711111111111112,
        "lethalMoves": 7,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 97,
            "winRate": 0.6391752577319587
          },
          {
            "modelId": "expert",
            "played": 51,
            "winRate": 0.8235294117647058
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.5789473684210527
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.56
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
            "played": 225,
            "winRate": 0.6222222222222222
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
        "offered": 444,
        "played": 209,
        "ignored": 350,
        "selectionRate": 0.47072072072072074,
        "wins": 124,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.5933014354066986,
        "averageFlips": 0.7033492822966507,
        "failedImpactRate": 0.33783783783783783,
        "averageFlipMargin": 1.8231292517006803,
        "averageEffectAmount": 1.167464114832536,
        "averageDamageDealt": 1.4162679425837321,
        "averageDamageTaken": 0.3444976076555024,
        "averageNetDamage": 1.0717703349282297,
        "lethalMoves": 9,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 94,
            "winRate": 0.6170212765957447
          },
          {
            "modelId": "expert",
            "played": 45,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.6052631578947368
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.3888888888888889
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
            "played": 209,
            "winRate": 0.5933014354066986
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
        "offered": 511,
        "played": 200,
        "ignored": 395,
        "selectionRate": 0.3913894324853229,
        "wins": 120,
        "losses": 80,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.675,
        "failedImpactRate": 0.38073394495412843,
        "averageFlipMargin": 2.1481481481481484,
        "averageEffectAmount": 0.84,
        "averageDamageDealt": 1.955,
        "averageDamageTaken": 1.215,
        "averageNetDamage": 0.74,
        "lethalMoves": 13,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 87,
            "winRate": 0.5977011494252874
          },
          {
            "modelId": "expert",
            "played": 40,
            "winRate": 0.85
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.6216216216216216
          },
          {
            "modelId": "champion",
            "played": 22,
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
            "played": 200,
            "winRate": 0.6
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
        "offered": 2928,
        "played": 1604,
        "ignored": 2292,
        "selectionRate": 0.5478142076502732,
        "wins": 936,
        "losses": 668,
        "draws": 0,
        "winRateWhenPlayed": 0.5835411471321695,
        "averageFlips": 0.19576059850374064,
        "averageDamageDealt": 0.3946384039900249,
        "averageNetDamage": 0.2630922693266833,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 417,
            "winRateWhenPlayed": 0.5875299760191847
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.5683453237410072
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 387,
            "winRateWhenPlayed": 0.6098191214470284
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 383,
            "winRateWhenPlayed": 0.5691906005221932
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
        "offered": 2714,
        "played": 1444,
        "ignored": 2143,
        "selectionRate": 0.5320560058953574,
        "wins": 644,
        "losses": 800,
        "draws": 0,
        "winRateWhenPlayed": 0.44598337950138506,
        "averageFlips": 0.27770083102493076,
        "averageDamageDealt": 0.3871191135734072,
        "averageNetDamage": 0.2195290858725762,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 388,
            "winRateWhenPlayed": 0.44587628865979384
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 386,
            "winRateWhenPlayed": 0.44041450777202074
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 363,
            "winRateWhenPlayed": 0.44352617079889806
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 307,
            "winRateWhenPlayed": 0.4560260586319218
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
        "offered": 2876,
        "played": 1426,
        "ignored": 2271,
        "selectionRate": 0.4958275382475661,
        "wins": 638,
        "losses": 788,
        "draws": 0,
        "winRateWhenPlayed": 0.4474053295932679,
        "averageFlips": 0.270687237026648,
        "averageDamageDealt": 0.42075736325385693,
        "averageNetDamage": 0.19004207573632537,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 397,
            "winRateWhenPlayed": 0.4357682619647355
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 379,
            "winRateWhenPlayed": 0.44063324538258575
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 363,
            "winRateWhenPlayed": 0.4214876033057851
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 287,
            "winRateWhenPlayed": 0.5052264808362369
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
        "offered": 2792,
        "played": 1418,
        "ignored": 2203,
        "selectionRate": 0.5078796561604585,
        "wins": 759,
        "losses": 659,
        "draws": 0,
        "winRateWhenPlayed": 0.5352609308885754,
        "averageFlips": 0.2545839210155148,
        "averageDamageDealt": 0.5021156558533145,
        "averageNetDamage": 0.3159379407616361,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 375,
            "winRateWhenPlayed": 0.5306666666666666
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 374,
            "winRateWhenPlayed": 0.5320855614973262
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 368,
            "winRateWhenPlayed": 0.5489130434782609
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 301,
            "winRateWhenPlayed": 0.5282392026578073
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
        "offered": 2482,
        "played": 1339,
        "ignored": 1932,
        "selectionRate": 0.5394842868654312,
        "wins": 871,
        "losses": 468,
        "draws": 0,
        "winRateWhenPlayed": 0.6504854368932039,
        "averageFlips": 0.2912621359223301,
        "averageDamageDealt": 0.5646004480955937,
        "averageNetDamage": 0.4339058999253174,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 355,
            "winRateWhenPlayed": 0.647887323943662
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 344,
            "winRateWhenPlayed": 0.6424418604651163
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 340,
            "winRateWhenPlayed": 0.6676470588235294
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 300,
            "winRateWhenPlayed": 0.6433333333333333
          }
        ],
        "status": "overperformer",
        "notes": [
          "La famille gagne trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "demon",
        "label": "demon",
        "offered": 1661,
        "played": 866,
        "ignored": 1306,
        "selectionRate": 0.5213726670680313,
        "wins": 527,
        "losses": 339,
        "draws": 0,
        "winRateWhenPlayed": 0.6085450346420324,
        "averageFlips": 0.7586605080831409,
        "averageDamageDealt": 1.336027713625866,
        "averageNetDamage": 0.874133949191686,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 232,
            "winRateWhenPlayed": 0.6163793103448276
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 225,
            "winRateWhenPlayed": 0.6222222222222222
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 209,
            "winRateWhenPlayed": 0.5933014354066986
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 200,
            "winRateWhenPlayed": 0.6
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
        "offered": 3098,
        "played": 2146,
        "ignored": 2308,
        "selectionRate": 0.6927049709489993,
        "wins": 1151,
        "losses": 995,
        "draws": 0,
        "winRateWhenPlayed": 0.5363466915191053,
        "averageFlips": 0.3574091332712022,
        "averageDamageDealt": 0.2777260018639329,
        "averageNetDamage": 0.18126747437092267,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 417,
            "winRateWhenPlayed": 0.5875299760191847
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 397,
            "winRateWhenPlayed": 0.4357682619647355
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 388,
            "winRateWhenPlayed": 0.44587628865979384
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 375,
            "winRateWhenPlayed": 0.5306666666666666
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 344,
            "winRateWhenPlayed": 0.6424418604651163
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
        "offered": 2943,
        "played": 2143,
        "ignored": 2253,
        "selectionRate": 0.7281685355079851,
        "wins": 1146,
        "losses": 997,
        "draws": 0,
        "winRateWhenPlayed": 0.5347643490433971,
        "averageFlips": 0.31031264582361173,
        "averageDamageDealt": 0.26691553896406905,
        "averageNetDamage": 0.2053196453569762,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.5683453237410072
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 386,
            "winRateWhenPlayed": 0.44041450777202074
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 379,
            "winRateWhenPlayed": 0.44063324538258575
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 374,
            "winRateWhenPlayed": 0.5320855614973262
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 355,
            "winRateWhenPlayed": 0.647887323943662
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
        "offered": 3962,
        "played": 1981,
        "ignored": 3131,
        "selectionRate": 0.5,
        "wins": 1065,
        "losses": 916,
        "draws": 0,
        "winRateWhenPlayed": 0.5376072690560323,
        "averageFlips": 0.2877334679454821,
        "averageDamageDealt": 0.5870772337203433,
        "averageNetDamage": 0.32660272589601214,
        "topCards": [
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 387,
            "winRateWhenPlayed": 0.6098191214470284
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 368,
            "winRateWhenPlayed": 0.5489130434782609
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 363,
            "winRateWhenPlayed": 0.44352617079889806
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 363,
            "winRateWhenPlayed": 0.4214876033057851
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 300,
            "winRateWhenPlayed": 0.6433333333333333
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
        "offered": 5450,
        "played": 1827,
        "ignored": 4455,
        "selectionRate": 0.33522935779816515,
        "wins": 1013,
        "losses": 814,
        "draws": 0,
        "winRateWhenPlayed": 0.5544608648056923,
        "averageFlips": 0.277504105090312,
        "averageDamageDealt": 1.1417624521072798,
        "averageNetDamage": 0.722495894909688,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 383,
            "winRateWhenPlayed": 0.5691906005221932
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 340,
            "winRateWhenPlayed": 0.6676470588235294
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 307,
            "winRateWhenPlayed": 0.4560260586319218
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 301,
            "winRateWhenPlayed": 0.5282392026578073
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 287,
            "winRateWhenPlayed": 0.5052264808362369
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
        "offered": 15453,
        "played": 8097,
        "ignored": 12147,
        "selectionRate": 0.5239759270044652,
        "wins": 4375,
        "losses": 3722,
        "draws": 0,
        "winRateWhenPlayed": 0.540323576633321,
        "averageFlips": 0.30986785229097197,
        "averageDamageDealt": 0.5455106829690008,
        "averageNetDamage": 0.3453130789181178,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 417,
            "winRateWhenPlayed": 0.5875299760191847
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 417,
            "winRateWhenPlayed": 0.5683453237410072
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 397,
            "winRateWhenPlayed": 0.4357682619647355
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 388,
            "winRateWhenPlayed": 0.44587628865979384
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 387,
            "winRateWhenPlayed": 0.6098191214470284
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
        "wins": 242,
        "losses": 193,
        "draws": 0,
        "winRate": 0.5563218390804597,
        "averageFlips": 0.21379310344827587,
        "averageDamageDealt": 0.7448275862068966,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 396,
        "wins": 162,
        "losses": 234,
        "draws": 0,
        "winRate": 0.4090909090909091,
        "averageFlips": 0.2474747474747475,
        "averageDamageDealt": 0.7878787878787878,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 394,
        "wins": 202,
        "losses": 192,
        "draws": 0,
        "winRate": 0.5126903553299492,
        "averageFlips": 0.2715736040609137,
        "averageDamageDealt": 0.9289340101522843,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 371,
        "wins": 148,
        "losses": 223,
        "draws": 0,
        "winRate": 0.39892183288409705,
        "averageFlips": 0.2776280323450135,
        "averageDamageDealt": 0.6684636118598383,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 350,
        "wins": 202,
        "losses": 148,
        "draws": 0,
        "winRate": 0.5771428571428572,
        "averageFlips": 0.21142857142857144,
        "averageDamageDealt": 0.2,
        "averageEffectAmount": 1.1914285714285715,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 335,
        "wins": 180,
        "losses": 155,
        "draws": 0,
        "winRate": 0.5373134328358209,
        "averageFlips": 0.20597014925373133,
        "averageDamageDealt": 0.1373134328358209,
        "averageEffectAmount": 1.0925373134328358,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 334,
        "wins": 213,
        "losses": 121,
        "draws": 0,
        "winRate": 0.6377245508982036,
        "averageFlips": 0.31137724550898205,
        "averageDamageDealt": 0.9940119760479041,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 321,
        "wins": 161,
        "losses": 160,
        "draws": 0,
        "winRate": 0.5015576323987538,
        "averageFlips": 0.17133956386292834,
        "averageDamageDealt": 1.308411214953271,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 310,
        "wins": 163,
        "losses": 147,
        "draws": 0,
        "winRate": 0.5258064516129032,
        "averageFlips": 0.1935483870967742,
        "averageDamageDealt": 0.054838709677419356,
        "averageEffectAmount": 1.0935483870967742,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 307,
        "wins": 135,
        "losses": 172,
        "draws": 0,
        "winRate": 0.43973941368078173,
        "averageFlips": 0.2768729641693811,
        "averageDamageDealt": 0.23127035830618892,
        "averageEffectAmount": 1.710097719869707,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 302,
        "wins": 139,
        "losses": 163,
        "draws": 0,
        "winRate": 0.4602649006622517,
        "averageFlips": 0.32450331125827814,
        "averageDamageDealt": 0.11920529801324503,
        "averageEffectAmount": 1.2582781456953642,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 301,
        "wins": 139,
        "losses": 162,
        "draws": 0,
        "winRate": 0.46179401993355484,
        "averageFlips": 0.3222591362126246,
        "averageDamageDealt": 0.11960132890365449,
        "averageEffectAmount": 1.2524916943521596,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 300,
        "wins": 176,
        "losses": 124,
        "draws": 0,
        "winRate": 0.5866666666666667,
        "averageFlips": 0.16,
        "averageDamageDealt": 1.5666666666666667,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 296,
        "wins": 129,
        "losses": 167,
        "draws": 0,
        "winRate": 0.4358108108108108,
        "averageFlips": 0.2668918918918919,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.2466216216216217,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 296,
        "wins": 129,
        "losses": 167,
        "draws": 0,
        "winRate": 0.4358108108108108,
        "averageFlips": 0.2668918918918919,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 287,
        "wins": 157,
        "losses": 130,
        "draws": 0,
        "winRate": 0.5470383275261324,
        "averageFlips": 0.24041811846689895,
        "averageDamageDealt": 0.23344947735191637,
        "averageEffectAmount": 1.2439024390243902,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 282,
        "wins": 127,
        "losses": 155,
        "draws": 0,
        "winRate": 0.450354609929078,
        "averageFlips": 0.31560283687943264,
        "averageDamageDealt": 0.14184397163120568,
        "averageEffectAmount": 1.2163120567375887,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 277,
        "wins": 164,
        "losses": 113,
        "draws": 0,
        "winRate": 0.592057761732852,
        "averageFlips": 0.11552346570397112,
        "averageDamageDealt": 1.8086642599277978,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 259,
        "wins": 136,
        "losses": 123,
        "draws": 0,
        "winRate": 0.525096525096525,
        "averageFlips": 0.22007722007722008,
        "averageDamageDealt": 0.09266409266409266,
        "averageEffectAmount": 1.335907335907336,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 256,
        "wins": 147,
        "losses": 109,
        "draws": 0,
        "winRate": 0.57421875,
        "averageFlips": 0.20703125,
        "averageDamageDealt": 0.1640625,
        "averageEffectAmount": 1.46875,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 252,
        "wins": 104,
        "losses": 148,
        "draws": 0,
        "winRate": 0.4126984126984127,
        "averageFlips": 0.17857142857142858,
        "averageDamageDealt": 1.5515873015873016,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 246,
        "wins": 140,
        "losses": 106,
        "draws": 0,
        "winRate": 0.5691056910569106,
        "averageFlips": 0.23170731707317074,
        "averageDamageDealt": 1.2560975609756098,
        "averageEffectAmount": 2.451219512195122,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 231,
        "wins": 165,
        "losses": 66,
        "draws": 0,
        "winRate": 0.7142857142857143,
        "averageFlips": 0.22510822510822512,
        "averageDamageDealt": 2,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:tin-oracle:gain-mana-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> gain-mana-next-turn",
        "count": 229,
        "wins": 144,
        "losses": 85,
        "draws": 0,
        "winRate": 0.62882096069869,
        "averageFlips": 0.07860262008733625,
        "averageDamageDealt": 0.11353711790393013,
        "averageEffectAmount": 1.2489082969432315,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2482,
        "id": "family-familiar-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "familiar domine l'echantillon",
        "detail": "1339 plays, 65% win, net PV 0.43.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 277,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "277 occurrences, 59% win, 0.12 flips, 1.81 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 231,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "231 occurrences, 71% win, 0.23 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7924937965260546,
    "cardAnalytics": [
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
        "offered": 23,
        "played": 2,
        "ignored": 21,
        "selectionRate": 0.08695652173913043,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 1.5,
        "failedImpactRate": 0.4,
        "averageFlipMargin": 1,
        "averageEffectAmount": 0,
        "averageDamageDealt": 5,
        "averageDamageTaken": 1.5,
        "averageNetDamage": 3.5,
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
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 174,
        "played": 92,
        "ignored": 138,
        "selectionRate": 0.5287356321839081,
        "wins": 53,
        "losses": 39,
        "draws": 0,
        "winRateWhenPlayed": 0.5760869565217391,
        "averageFlips": 0.3804347826086957,
        "failedImpactRate": 0.4927536231884058,
        "averageFlipMargin": 1.9428571428571428,
        "averageEffectAmount": 2.119565217391304,
        "averageDamageDealt": 0.30434782608695654,
        "averageDamageTaken": 0.13043478260869565,
        "averageNetDamage": 0.1739130434782609,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0.25806451612903225
          },
          {
            "modelId": "regular",
            "played": 19,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.7272727272727273
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 92,
            "winRate": 0.5760869565217391
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 42,
        "played": 24,
        "ignored": 26,
        "selectionRate": 0.5714285714285714,
        "wins": 13,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.5416666666666666,
        "averageFlips": 0.20833333333333334,
        "failedImpactRate": 0.7058823529411765,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0.9583333333333334,
        "averageDamageDealt": 0.4166666666666667,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.4166666666666667,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.35294117647058826
          },
          {
            "modelId": "regular",
            "played": 6,
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
            "played": 24,
            "winRate": 0.5416666666666666
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 44,
        "played": 23,
        "ignored": 34,
        "selectionRate": 0.5227272727272727,
        "wins": 9,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.391304347826087,
        "averageFlips": 0.30434782608695654,
        "failedImpactRate": 0.4166666666666667,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.7826086956521738,
        "averageDamageDealt": 0.391304347826087,
        "averageDamageTaken": 0.17391304347826086,
        "averageNetDamage": 0.2173913043478261,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 2,
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
            "played": 23,
            "winRate": 0.391304347826087
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 16,
        "played": 12,
        "ignored": 10,
        "selectionRate": 0.75,
        "wins": 7,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.5833333333333334,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 1.75,
        "averageDamageDealt": 0.16666666666666666,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.16666666666666666,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 1,
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
            "played": 12,
            "winRate": 0.5833333333333334
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 18,
        "played": 10,
        "ignored": 12,
        "selectionRate": 0.5555555555555556,
        "wins": 6,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.6,
        "failedImpactRate": 0.4,
        "averageFlipMargin": 3.1666666666666665,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.8,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.8,
        "lethalMoves": 1,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.5714285714285714
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
            "played": 10,
            "winRate": 0.6
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 534,
        "played": 413,
        "ignored": 401,
        "selectionRate": 0.7734082397003745,
        "wins": 332,
        "losses": 81,
        "draws": 0,
        "winRateWhenPlayed": 0.8038740920096852,
        "averageFlips": 0.3583535108958838,
        "failedImpactRate": 0.3148148148148148,
        "averageFlipMargin": 2.02027027027027,
        "averageEffectAmount": 3.6876513317191284,
        "averageDamageDealt": 0.24455205811138014,
        "averageDamageTaken": 0.048426150121065374,
        "averageNetDamage": 0.19612590799031476,
        "lethalMoves": 4,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 193,
            "winRate": 0.8290155440414507
          },
          {
            "modelId": "expert",
            "played": 185,
            "winRate": 0.8432432432432433
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.2857142857142857
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.8
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
            "played": 413,
            "winRate": 0.8038740920096852
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
        "offered": 538,
        "played": 384,
        "ignored": 395,
        "selectionRate": 0.7137546468401487,
        "wins": 311,
        "losses": 73,
        "draws": 0,
        "winRateWhenPlayed": 0.8098958333333334,
        "averageFlips": 0.4036458333333333,
        "failedImpactRate": 0.44642857142857145,
        "averageFlipMargin": 2.141935483870968,
        "averageEffectAmount": 2.640625,
        "averageDamageDealt": 0.2682291666666667,
        "averageDamageTaken": 0.0546875,
        "averageNetDamage": 0.21354166666666669,
        "lethalMoves": 4,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 186,
            "winRate": 0.8118279569892473
          },
          {
            "modelId": "expert",
            "played": 184,
            "winRate": 0.842391304347826
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0.35714285714285715
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 384,
            "winRate": 0.8098958333333334
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
        "offered": 711,
        "played": 355,
        "ignored": 577,
        "selectionRate": 0.49929676511954996,
        "wins": 288,
        "losses": 67,
        "draws": 0,
        "winRateWhenPlayed": 0.8112676056338028,
        "averageFlips": 0.352112676056338,
        "failedImpactRate": 0.4158878504672897,
        "averageFlipMargin": 2.328,
        "averageEffectAmount": 3.067605633802817,
        "averageDamageDealt": 0.6140845070422535,
        "averageDamageTaken": 0.1352112676056338,
        "averageNetDamage": 0.4788732394366197,
        "lethalMoves": 9,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 172,
            "winRate": 0.8372093023255814
          },
          {
            "modelId": "expert",
            "played": 164,
            "winRate": 0.8414634146341463
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0.4
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 355,
            "winRate": 0.8112676056338028
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
        "offered": 1013,
        "played": 289,
        "ignored": 835,
        "selectionRate": 0.28529121421520237,
        "wins": 246,
        "losses": 43,
        "draws": 0,
        "winRateWhenPlayed": 0.8512110726643599,
        "averageFlips": 0.28027681660899656,
        "failedImpactRate": 0.6197183098591549,
        "averageFlipMargin": 2.0617283950617282,
        "averageEffectAmount": 0.6851211072664359,
        "averageDamageDealt": 3.1937716262975777,
        "averageDamageTaken": 0.7439446366782007,
        "averageNetDamage": 2.449826989619377,
        "lethalMoves": 34,
        "roundClosers": 88,
        "byModel": [
          {
            "modelId": "regular",
            "played": 140,
            "winRate": 0.8428571428571429
          },
          {
            "modelId": "expert",
            "played": 130,
            "winRate": 0.9153846153846154
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.4375
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
            "played": 289,
            "winRate": 0.8512110726643599
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
        "offered": 412,
        "played": 260,
        "ignored": 307,
        "selectionRate": 0.6310679611650486,
        "wins": 226,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.8692307692307693,
        "averageFlips": 0.3153846153846154,
        "failedImpactRate": 0.3787878787878788,
        "averageFlipMargin": 1.9634146341463414,
        "averageEffectAmount": 4.207692307692308,
        "averageDamageDealt": 0.6576923076923077,
        "averageDamageTaken": 0.17692307692307693,
        "averageNetDamage": 0.4807692307692307,
        "lethalMoves": 5,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "champion",
            "played": 165,
            "winRate": 0.8848484848484849
          },
          {
            "modelId": "regular",
            "played": 40,
            "winRate": 0.9
          },
          {
            "modelId": "expert",
            "played": 26,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.75
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
            "played": 260,
            "winRate": 0.8692307692307693
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
        "offered": 453,
        "played": 179,
        "ignored": 360,
        "selectionRate": 0.39514348785871967,
        "wins": 161,
        "losses": 18,
        "draws": 0,
        "winRateWhenPlayed": 0.8994413407821229,
        "averageFlips": 0.36312849162011174,
        "failedImpactRate": 0.5255474452554745,
        "averageFlipMargin": 2.5384615384615383,
        "averageEffectAmount": 3.340782122905028,
        "averageDamageDealt": 1.9497206703910615,
        "averageDamageTaken": 0.2011173184357542,
        "averageNetDamage": 1.7486033519553073,
        "lethalMoves": 14,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "champion",
            "played": 143,
            "winRate": 0.8951048951048951
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 10,
            "winRate": 1
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
            "played": 179,
            "winRate": 0.8994413407821229
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
        "offered": 317,
        "played": 169,
        "ignored": 239,
        "selectionRate": 0.5331230283911672,
        "wins": 120,
        "losses": 49,
        "draws": 0,
        "winRateWhenPlayed": 0.7100591715976331,
        "averageFlips": 0.6449704142011834,
        "failedImpactRate": 0.31446540880503143,
        "averageFlipMargin": 2.5137614678899083,
        "averageEffectAmount": 1.3372781065088757,
        "averageDamageDealt": 2.242603550295858,
        "averageDamageTaken": 0.4970414201183432,
        "averageNetDamage": 1.745562130177515,
        "lethalMoves": 12,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 103,
            "winRate": 0.7184466019417476
          },
          {
            "modelId": "expert",
            "played": 26,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "regular",
            "played": 22,
            "winRate": 0.6818181818181818
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.6
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 169,
            "winRate": 0.7100591715976331
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
        "offered": 246,
        "played": 168,
        "ignored": 193,
        "selectionRate": 0.6829268292682927,
        "wins": 145,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.8630952380952381,
        "averageFlips": 0.5119047619047619,
        "failedImpactRate": 0.3064516129032258,
        "averageFlipMargin": 2.4651162790697674,
        "averageEffectAmount": 4.220238095238095,
        "averageDamageDealt": 0.3392857142857143,
        "averageDamageTaken": 0.09523809523809523,
        "averageNetDamage": 0.24404761904761907,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "champion",
            "played": 155,
            "winRate": 0.8709677419354839
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.7692307692307693
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 168,
            "winRate": 0.8630952380952381
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
        "offered": 266,
        "played": 164,
        "ignored": 195,
        "selectionRate": 0.6165413533834586,
        "wins": 143,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.8719512195121951,
        "averageFlips": 0.2865853658536585,
        "failedImpactRate": 0.29850746268656714,
        "averageFlipMargin": 2.148936170212766,
        "averageEffectAmount": 5.420731707317073,
        "averageDamageDealt": 1.0304878048780488,
        "averageDamageTaken": 0.20121951219512196,
        "averageNetDamage": 0.8292682926829269,
        "lethalMoves": 6,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "champion",
            "played": 151,
            "winRate": 0.8741721854304636
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0.8461538461538461
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 164,
            "winRate": 0.8719512195121951
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
        "offered": 201,
        "played": 155,
        "ignored": 149,
        "selectionRate": 0.7711442786069652,
        "wins": 116,
        "losses": 39,
        "draws": 0,
        "winRateWhenPlayed": 0.7483870967741936,
        "averageFlips": 0.7806451612903226,
        "failedImpactRate": 0.14184397163120568,
        "averageFlipMargin": 2.4049586776859506,
        "averageEffectAmount": 1.4387096774193548,
        "averageDamageDealt": 1.4645161290322581,
        "averageDamageTaken": 0.12258064516129032,
        "averageNetDamage": 1.3419354838709678,
        "lethalMoves": 6,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 95,
            "winRate": 0.7263157894736842
          },
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.9523809523809523
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "regular",
            "played": 15,
            "winRate": 0.8
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 155,
            "winRate": 0.7483870967741936
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
        "offered": 174,
        "played": 118,
        "ignored": 140,
        "selectionRate": 0.6781609195402298,
        "wins": 82,
        "losses": 36,
        "draws": 0,
        "winRateWhenPlayed": 0.6949152542372882,
        "averageFlips": 0.788135593220339,
        "failedImpactRate": 0.11428571428571428,
        "averageFlipMargin": 2.3870967741935485,
        "averageEffectAmount": 1.2372881355932204,
        "averageDamageDealt": 1.1694915254237288,
        "averageDamageTaken": 0.15254237288135594,
        "averageNetDamage": 1.0169491525423728,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 97,
            "winRate": 0.6804123711340206
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.75
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
            "played": 118,
            "winRate": 0.6949152542372882
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
        "offered": 287,
        "played": 78,
        "ignored": 239,
        "selectionRate": 0.27177700348432055,
        "wins": 57,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.7307692307692307,
        "averageFlips": 0.48717948717948717,
        "failedImpactRate": 0.40625,
        "averageFlipMargin": 2.526315789473684,
        "averageEffectAmount": 0.8717948717948718,
        "averageDamageDealt": 6.153846153846154,
        "averageDamageTaken": 2.2435897435897436,
        "averageNetDamage": 3.9102564102564106,
        "lethalMoves": 18,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.7246376811594203
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0.75
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
            "played": 78,
            "winRate": 0.7307692307692307
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
        "offered": 214,
        "played": 61,
        "ignored": 181,
        "selectionRate": 0.2850467289719626,
        "wins": 49,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.8032786885245902,
        "averageFlips": 0.19672131147540983,
        "failedImpactRate": 0.625,
        "averageFlipMargin": 2.8333333333333335,
        "averageEffectAmount": 0.9836065573770492,
        "averageDamageDealt": 2.4918032786885247,
        "averageDamageTaken": 0.5901639344262295,
        "averageNetDamage": 1.9016393442622952,
        "lethalMoves": 8,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.6086956521739131
          },
          {
            "modelId": "expert",
            "played": 15,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 9,
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
            "played": 61,
            "winRate": 0.8032786885245902
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
        "played": 48,
        "ignored": 92,
        "selectionRate": 0.41739130434782606,
        "wins": 34,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.7083333333333334,
        "averageFlips": 0.20833333333333334,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 3.1,
        "averageEffectAmount": 2.1041666666666665,
        "averageDamageDealt": 2,
        "averageDamageTaken": 0.125,
        "averageNetDamage": 1.875,
        "lethalMoves": 6,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.4
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.9333333333333333
          },
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.8
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 48,
            "winRate": 0.7083333333333334
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
        "offered": 92,
        "played": 46,
        "ignored": 74,
        "selectionRate": 0.5,
        "wins": 32,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.6956521739130435,
        "averageFlips": 0.5,
        "failedImpactRate": 0.25806451612903225,
        "averageFlipMargin": 3.0434782608695654,
        "averageEffectAmount": 1.7391304347826086,
        "averageDamageDealt": 0.9565217391304348,
        "averageDamageTaken": 0.4782608695652174,
        "averageNetDamage": 0.4782608695652174,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.5769230769230769
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
            "winRate": 0.4
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
            "played": 46,
            "winRate": 0.6956521739130435
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
        "offered": 56,
        "played": 29,
        "ignored": 39,
        "selectionRate": 0.5178571428571429,
        "wins": 20,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.6896551724137931,
        "averageFlips": 0.3793103448275862,
        "failedImpactRate": 0.42105263157894735,
        "averageFlipMargin": 3,
        "averageEffectAmount": 1.6206896551724137,
        "averageDamageDealt": 1.7586206896551724,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.7586206896551724,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 1,
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
            "played": 29,
            "winRate": 0.6896551724137931
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
        "offered": 80,
        "played": 28,
        "ignored": 64,
        "selectionRate": 0.35,
        "wins": 22,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.7857142857142857,
        "averageFlips": 0.32142857142857145,
        "failedImpactRate": 0.6086956521739131,
        "averageFlipMargin": 3.888888888888889,
        "averageEffectAmount": 1.9285714285714286,
        "averageDamageDealt": 2.2857142857142856,
        "averageDamageTaken": 0.5357142857142857,
        "averageNetDamage": 1.75,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 28,
            "winRate": 0.7857142857142857
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
        "offered": 56,
        "played": 25,
        "ignored": 43,
        "selectionRate": 0.44642857142857145,
        "wins": 19,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.76,
        "averageFlips": 0.32,
        "failedImpactRate": 0.5294117647058824,
        "averageFlipMargin": 1.625,
        "averageEffectAmount": 3.6,
        "averageDamageDealt": 0.16,
        "averageDamageTaken": 0.36,
        "averageNetDamage": -0.19999999999999998,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.6
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
        "offered": 132,
        "played": 24,
        "ignored": 121,
        "selectionRate": 0.18181818181818182,
        "wins": 21,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.875,
        "averageFlips": 0.375,
        "failedImpactRate": 0.5909090909090909,
        "averageFlipMargin": 1.4444444444444444,
        "averageEffectAmount": 1.625,
        "averageDamageDealt": 1.2083333333333333,
        "averageDamageTaken": 0.16666666666666666,
        "averageNetDamage": 1.0416666666666665,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "expert",
            "played": 16,
            "winRate": 0.9375
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0.8571428571428571
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
            "played": 24,
            "winRate": 0.875
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
        "offered": 80,
        "played": 20,
        "ignored": 71,
        "selectionRate": 0.25,
        "wins": 13,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.65,
        "averageFlips": 0.2,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 1.75,
        "averageEffectAmount": 1.25,
        "averageDamageDealt": 3.35,
        "averageDamageTaken": 1.05,
        "averageNetDamage": 2.3,
        "lethalMoves": 3,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 0.6666666666666666
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
            "played": 20,
            "winRate": 0.65
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
        "offered": 22,
        "played": 8,
        "ignored": 19,
        "selectionRate": 0.36363636363636365,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.875,
        "failedImpactRate": 0,
        "averageFlipMargin": 1.7142857142857142,
        "averageEffectAmount": 0.625,
        "averageDamageDealt": 5.125,
        "averageDamageTaken": 0.375,
        "averageNetDamage": 4.75,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
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
        "offered": 26,
        "played": 8,
        "ignored": 26,
        "selectionRate": 0.3076923076923077,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.25,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 0.5,
        "averageEffectAmount": 0.75,
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
            "played": 3,
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
        "offered": 21,
        "played": 6,
        "ignored": 18,
        "selectionRate": 0.2857142857142857,
        "wins": 4,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2.25,
        "averageEffectAmount": 0.6666666666666666,
        "averageDamageDealt": 3.8333333333333335,
        "averageDamageTaken": 1.3333333333333333,
        "averageNetDamage": 2.5,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.8
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
        "played": 5,
        "ignored": 17,
        "selectionRate": 0.25,
        "wins": 3,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.2,
        "failedImpactRate": 0.75,
        "averageFlipMargin": 1,
        "averageEffectAmount": 2.8,
        "averageDamageDealt": 1.2,
        "averageDamageTaken": 1.8,
        "averageNetDamage": -0.6000000000000001,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.5
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
        "cardId": "reward-rare-05",
        "name": "Fusion sylvestre",
        "family": "revenant",
        "rarity": "rare",
        "sourceType": "fusion",
        "sideTotal": 21,
        "maxSide": 6,
        "minSide": 5,
        "effectKinds": [
          "apply-poison",
          "draw-next-turn"
        ],
        "buildTags": [],
        "preferredPositions": [],
        "offered": 20,
        "played": 4,
        "ignored": 18,
        "selectionRate": 0.2,
        "wins": 2,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0.5,
        "averageDamageDealt": 0.75,
        "averageDamageTaken": 4.75,
        "averageNetDamage": -4,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 0.5
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
        "offered": 10,
        "played": 4,
        "ignored": 7,
        "selectionRate": 0.4,
        "wins": 1,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.25,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 3,
        "averageEffectAmount": 0.75,
        "averageDamageDealt": 0.5,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.5,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
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
        "cardId": "reward-common-04",
        "name": "Carte commune 04",
        "family": "automaton",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "enemy-upgrade",
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
        "offered": 14,
        "played": 3,
        "ignored": 13,
        "selectionRate": 0.21428571428571427,
        "wins": 3,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 1.3333333333333333,
        "averageDamageDealt": 6,
        "averageDamageTaken": 0,
        "averageNetDamage": 6,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 2,
            "winRate": 1
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
        "cardId": "reward-uncommon-03",
        "name": "Carte inhabituelle 03",
        "family": "human",
        "rarity": "uncommon",
        "role": "connector",
        "sourceType": "reward",
        "sideTotal": 13,
        "maxSide": 6,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "combo-2",
          "connector",
          "draw-next-turn",
          "human",
          "uncommon"
        ],
        "preferredPositions": [
          "line"
        ],
        "offered": 5,
        "played": 3,
        "ignored": 4,
        "selectionRate": 0.6,
        "wins": 0,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0,
        "averageFlipMargin": 1,
        "averageEffectAmount": 0,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
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
            "played": 3,
            "winRate": 0
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
        "offered": 6,
        "played": 2,
        "ignored": 4,
        "selectionRate": 0.3333333333333333,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 3,
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
        "cardId": "reward-rare-03",
        "name": "Carte rare 03",
        "family": "human",
        "rarity": "rare",
        "role": "finisher",
        "sourceType": "enemy-upgrade",
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
        "offered": 4,
        "played": 1,
        "ignored": 3,
        "selectionRate": 0.25,
        "wins": 1,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0,
        "averageDamageDealt": 12,
        "averageDamageTaken": 5,
        "averageNetDamage": 7,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
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
        "offered": 2951,
        "played": 1467,
        "ignored": 2350,
        "selectionRate": 0.4971196204676381,
        "wins": 1200,
        "losses": 267,
        "draws": 0,
        "winRateWhenPlayed": 0.8179959100204499,
        "averageFlips": 0.3551465576005453,
        "averageDamageDealt": 0.9434219495569189,
        "averageNetDamage": 0.7314246762099523,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 413,
            "winRateWhenPlayed": 0.8038740920096852
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 384,
            "winRateWhenPlayed": 0.8098958333333334
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 355,
            "winRateWhenPlayed": 0.8112676056338028
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 289,
            "winRateWhenPlayed": 0.8512110726643599
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 24,
            "winRateWhenPlayed": 0.875
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
        "offered": 1473,
        "played": 806,
        "ignored": 1132,
        "selectionRate": 0.5471826205023761,
        "wins": 702,
        "losses": 104,
        "draws": 0,
        "winRateWhenPlayed": 0.8709677419354839,
        "averageFlips": 0.358560794044665,
        "averageDamageDealt": 0.9602977667493796,
        "averageNetDamage": 0.7754342431761786,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 260,
            "winRateWhenPlayed": 0.8692307692307693
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 179,
            "winRateWhenPlayed": 0.8994413407821229
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 168,
            "winRateWhenPlayed": 0.8630952380952381
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 164,
            "winRateWhenPlayed": 0.8719512195121951
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
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
        "id": "demon",
        "label": "demon",
        "offered": 1053,
        "played": 549,
        "ignored": 825,
        "selectionRate": 0.5213675213675214,
        "wins": 392,
        "losses": 157,
        "draws": 0,
        "winRateWhenPlayed": 0.7140255009107468,
        "averageFlips": 0.692167577413479,
        "averageDamageDealt": 2.3752276867030964,
        "averageNetDamage": 1.7941712204007283,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 169,
            "winRateWhenPlayed": 0.7100591715976331
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 155,
            "winRateWhenPlayed": 0.7483870967741936
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 118,
            "winRateWhenPlayed": 0.6949152542372882
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 78,
            "winRateWhenPlayed": 0.7307692307692307
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 10,
            "winRateWhenPlayed": 0.6
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
        "offered": 377,
        "played": 188,
        "ignored": 292,
        "selectionRate": 0.4986737400530504,
        "wins": 109,
        "losses": 79,
        "draws": 0,
        "winRateWhenPlayed": 0.5797872340425532,
        "averageFlips": 0.30851063829787234,
        "averageDamageDealt": 0.7606382978723404,
        "averageNetDamage": 0.6436170212765957,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 92,
            "winRateWhenPlayed": 0.5760869565217391
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 48,
            "winRateWhenPlayed": 0.7083333333333334
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 24,
            "winRateWhenPlayed": 0.5416666666666666
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 23,
            "winRateWhenPlayed": 0.391304347826087
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 1,
            "winRateWhenPlayed": 0
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
        "offered": 488,
        "played": 176,
        "ignored": 402,
        "selectionRate": 0.36065573770491804,
        "wins": 131,
        "losses": 45,
        "draws": 0,
        "winRateWhenPlayed": 0.7443181818181818,
        "averageFlips": 0.3352272727272727,
        "averageDamageDealt": 1.7840909090909092,
        "averageNetDamage": 1.2613636363636365,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 61,
            "winRateWhenPlayed": 0.8032786885245902
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 46,
            "winRateWhenPlayed": 0.6956521739130435
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 29,
            "winRateWhenPlayed": 0.6896551724137931
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 28,
            "winRateWhenPlayed": 0.7857142857142857
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 8,
            "winRateWhenPlayed": 0.75
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
        "offered": 111,
        "played": 38,
        "ignored": 94,
        "selectionRate": 0.34234234234234234,
        "wins": 21,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.5526315789473685,
        "averageFlips": 0.2631578947368421,
        "averageDamageDealt": 2.3947368421052633,
        "averageNetDamage": 1.3947368421052633,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 20,
            "winRateWhenPlayed": 0.65
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 12,
            "winRateWhenPlayed": 0.5833333333333334
          },
          {
            "cardId": "reward-uncommon-03",
            "name": "Carte inhabituelle 03",
            "played": 3,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 1,
            "winRateWhenPlayed": 0
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
        "offered": 1364,
        "played": 952,
        "ignored": 1025,
        "selectionRate": 0.6979472140762464,
        "wins": 742,
        "losses": 210,
        "draws": 0,
        "winRateWhenPlayed": 0.7794117647058824,
        "averageFlips": 0.4180672268907563,
        "averageDamageDealt": 0.5493697478991597,
        "averageNetDamage": 0.4296218487394958,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 413,
            "winRateWhenPlayed": 0.8038740920096852
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 236,
            "winRateWhenPlayed": 0.8559322033898306
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 155,
            "winRateWhenPlayed": 0.7483870967741936
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 90,
            "winRateWhenPlayed": 0.5888888888888889
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 46,
            "winRateWhenPlayed": 0.6956521739130435
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
        "offered": 2108,
        "played": 751,
        "ignored": 1705,
        "selectionRate": 0.3562618595825427,
        "wins": 615,
        "losses": 136,
        "draws": 0,
        "winRateWhenPlayed": 0.8189081225033289,
        "averageFlips": 0.3715046604527297,
        "averageDamageDealt": 2.5219707057256993,
        "averageNetDamage": 2.0505992010652463,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 266,
            "winRateWhenPlayed": 0.8759398496240601
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 179,
            "winRateWhenPlayed": 0.8994413407821229
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 166,
            "winRateWhenPlayed": 0.7168674698795181
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 61,
            "winRateWhenPlayed": 0.8032786885245902
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 48,
            "winRateWhenPlayed": 0.7083333333333334
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
        "offered": 1199,
        "played": 750,
        "ignored": 930,
        "selectionRate": 0.6255212677231026,
        "wins": 588,
        "losses": 162,
        "draws": 0,
        "winRateWhenPlayed": 0.784,
        "averageFlips": 0.484,
        "averageDamageDealt": 0.516,
        "averageNetDamage": 0.432,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 384,
            "winRateWhenPlayed": 0.8098958333333334
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 168,
            "winRateWhenPlayed": 0.8630952380952381
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 118,
            "winRateWhenPlayed": 0.6949152542372882
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 29,
            "winRateWhenPlayed": 0.6896551724137931
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 24,
            "winRateWhenPlayed": 0.875
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
        "offered": 1498,
        "played": 687,
        "ignored": 1196,
        "selectionRate": 0.45861148197596796,
        "wins": 555,
        "losses": 132,
        "draws": 0,
        "winRateWhenPlayed": 0.8078602620087336,
        "averageFlips": 0.3522561863173217,
        "averageDamageDealt": 1.5065502183406114,
        "averageNetDamage": 1.069868995633188,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 348,
            "winRateWhenPlayed": 0.8218390804597702
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 164,
            "winRateWhenPlayed": 0.8719512195121951
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 78,
            "winRateWhenPlayed": 0.7307692307692307
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 28,
            "winRateWhenPlayed": 0.7857142857142857
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
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
        "id": "sans-role",
        "label": "sans role",
        "offered": 206,
        "played": 63,
        "ignored": 170,
        "selectionRate": 0.3058252427184466,
        "wins": 42,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.4603174603174603,
        "averageDamageDealt": 2.3968253968253967,
        "averageNetDamage": 1.0317460317460316,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Fusion sylvestre",
            "played": 24,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 23,
            "winRateWhenPlayed": 0.5652173913043478
          },
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 7,
            "winRateWhenPlayed": 0.2857142857142857
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 4,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "ember-imp",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 0.3333333333333333
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
        "offered": 46,
        "played": 11,
        "ignored": 39,
        "selectionRate": 0.2391304347826087,
        "wins": 5,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.45454545454545453,
        "averageFlips": 0.36363636363636365,
        "averageDamageDealt": 1.8181818181818181,
        "averageNetDamage": 0.5454545454545454,
        "topCards": [
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 5,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
        ]
      },
      {
        "id": "engine",
        "label": "engine",
        "offered": 26,
        "played": 8,
        "ignored": 26,
        "selectionRate": 0.3076923076923077,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.25,
        "averageDamageDealt": 0,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 8,
            "winRateWhenPlayed": 0.75
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
        "offered": 6,
        "played": 2,
        "ignored": 4,
        "selectionRate": 0.3333333333333333,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "averageDamageDealt": 0,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 2,
            "winRateWhenPlayed": 1
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
        "offered": 6095,
        "played": 3125,
        "ignored": 4786,
        "selectionRate": 0.5127153404429861,
        "wins": 2484,
        "losses": 641,
        "draws": 0,
        "winRateWhenPlayed": 0.79488,
        "averageFlips": 0.40832,
        "averageDamageDealt": 1.24384,
        "averageNetDamage": 0.96512,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 413,
            "winRateWhenPlayed": 0.8038740920096852
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 384,
            "winRateWhenPlayed": 0.8098958333333334
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 354,
            "winRateWhenPlayed": 0.8107344632768362
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 289,
            "winRateWhenPlayed": 0.8512110726643599
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 257,
            "winRateWhenPlayed": 0.867704280155642
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
        "offered": 302,
        "played": 84,
        "ignored": 262,
        "selectionRate": 0.2781456953642384,
        "wins": 64,
        "losses": 20,
        "draws": 0,
        "winRateWhenPlayed": 0.7619047619047619,
        "averageFlips": 0.4166666666666667,
        "averageDamageDealt": 1.1904761904761905,
        "averageNetDamage": 0.8690476190476191,
        "topCards": [
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 25,
            "winRateWhenPlayed": 0.76
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 24,
            "winRateWhenPlayed": 0.875
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 10,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 8,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 6,
            "winRateWhenPlayed": 0.6666666666666666
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
        "offered": 56,
        "played": 15,
        "ignored": 47,
        "selectionRate": 0.26785714285714285,
        "wins": 7,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.4666666666666667,
        "averageFlips": 0.4,
        "averageDamageDealt": 1.5333333333333334,
        "averageNetDamage": -0.6666666666666667,
        "topCards": [
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 5,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 4,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "reward-rare-03",
            "name": "Carte rare 03",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 1,
            "winRateWhenPlayed": 0
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
        ]
      }
    ],
    "comboAnalytics": [
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 377,
        "wins": 322,
        "losses": 55,
        "draws": 0,
        "winRate": 0.8541114058355438,
        "averageFlips": 0.376657824933687,
        "averageDamageDealt": 2.1618037135278514,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 341,
        "wins": 307,
        "losses": 34,
        "draws": 0,
        "winRate": 0.9002932551319648,
        "averageFlips": 0.25219941348973607,
        "averageDamageDealt": 3.873900293255132,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 242,
        "wins": 206,
        "losses": 36,
        "draws": 0,
        "winRate": 0.8512396694214877,
        "averageFlips": 0.3677685950413223,
        "averageDamageDealt": 0.1115702479338843,
        "averageEffectAmount": 1.2933884297520661,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 238,
        "wins": 205,
        "losses": 33,
        "draws": 0,
        "winRate": 0.8613445378151261,
        "averageFlips": 0.36554621848739494,
        "averageDamageDealt": 0.1134453781512605,
        "averageEffectAmount": 1.0210084033613445,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 210,
        "wins": 186,
        "losses": 24,
        "draws": 0,
        "winRate": 0.8857142857142857,
        "averageFlips": 0.42857142857142855,
        "averageDamageDealt": 1.8761904761904762,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 173,
        "wins": 148,
        "losses": 25,
        "draws": 0,
        "winRate": 0.8554913294797688,
        "averageFlips": 0.3236994219653179,
        "averageDamageDealt": 0.9653179190751445,
        "averageEffectAmount": 1.2138728323699421,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 170,
        "wins": 157,
        "losses": 13,
        "draws": 0,
        "winRate": 0.9235294117647059,
        "averageFlips": 0.36470588235294116,
        "averageDamageDealt": 4.152941176470589,
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
        "count": 148,
        "wins": 130,
        "losses": 18,
        "draws": 0,
        "winRate": 0.8783783783783784,
        "averageFlips": 0.42567567567567566,
        "averageDamageDealt": 0.6013513513513513,
        "averageEffectAmount": 1.2837837837837838,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 134,
        "wins": 113,
        "losses": 21,
        "draws": 0,
        "winRate": 0.8432835820895522,
        "averageFlips": 0.4925373134328358,
        "averageDamageDealt": 0.4253731343283582,
        "averageEffectAmount": 1.2537313432835822,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 130,
        "wins": 116,
        "losses": 14,
        "draws": 0,
        "winRate": 0.8923076923076924,
        "averageFlips": 0.3384615384615385,
        "averageDamageDealt": 2.169230769230769,
        "averageEffectAmount": 1.8692307692307693,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 124,
        "wins": 90,
        "losses": 34,
        "draws": 0,
        "winRate": 0.7258064516129032,
        "averageFlips": 0.6774193548387096,
        "averageDamageDealt": 4.088709677419355,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 116,
        "wins": 97,
        "losses": 19,
        "draws": 0,
        "winRate": 0.8362068965517241,
        "averageFlips": 0.11206896551724138,
        "averageDamageDealt": 0.1896551724137931,
        "averageEffectAmount": 2.3275862068965516,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 102,
        "wins": 81,
        "losses": 21,
        "draws": 0,
        "winRate": 0.7941176470588235,
        "averageFlips": 0.09803921568627451,
        "averageDamageDealt": 0.00980392156862745,
        "averageEffectAmount": 4.794117647058823,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 95,
        "wins": 70,
        "losses": 25,
        "draws": 0,
        "winRate": 0.7368421052631579,
        "averageFlips": 0.9578947368421052,
        "averageDamageDealt": 1.8105263157894738,
        "averageEffectAmount": 0.5789473684210527,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 92,
        "wins": 68,
        "losses": 24,
        "draws": 0,
        "winRate": 0.7391304347826086,
        "averageFlips": 1.0434782608695652,
        "averageDamageDealt": 2.6739130434782608,
        "averageEffectAmount": 1.3369565217391304,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:tin-oracle:gain-mana-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> gain-mana-next-turn",
        "count": 91,
        "wins": 81,
        "losses": 10,
        "draws": 0,
        "winRate": 0.8901098901098901,
        "averageFlips": 0.0989010989010989,
        "averageDamageDealt": 0.4945054945054945,
        "averageEffectAmount": 1.1758241758241759,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 91,
        "wins": 76,
        "losses": 15,
        "draws": 0,
        "winRate": 0.8351648351648352,
        "averageFlips": 0.5494505494505495,
        "averageDamageDealt": 0.31868131868131866,
        "averageEffectAmount": 1.4945054945054945,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 85,
        "wins": 71,
        "losses": 14,
        "draws": 0,
        "winRate": 0.8352941176470589,
        "averageFlips": 0.23529411764705882,
        "averageDamageDealt": 0.09411764705882353,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:boost-self",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> boost-self",
        "count": 71,
        "wins": 62,
        "losses": 9,
        "draws": 0,
        "winRate": 0.8732394366197183,
        "averageFlips": 0.08450704225352113,
        "averageDamageDealt": 0.6901408450704225,
        "averageEffectAmount": 3.816901408450704,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 60,
        "wins": 50,
        "losses": 10,
        "draws": 0,
        "winRate": 0.8333333333333334,
        "averageFlips": 0.1,
        "averageDamageDealt": 6.783333333333333,
        "averageEffectAmount": 1.1,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 54,
        "wins": 37,
        "losses": 17,
        "draws": 0,
        "winRate": 0.6851851851851852,
        "averageFlips": 0.5740740740740741,
        "averageDamageDealt": 1.7222222222222223,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 50,
        "wins": 43,
        "losses": 7,
        "draws": 0,
        "winRate": 0.86,
        "averageFlips": 0.4,
        "averageDamageDealt": 8.74,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:automaton->arcane",
        "kind": "family-chain",
        "label": "automaton -> arcane",
        "count": 42,
        "wins": 35,
        "losses": 7,
        "draws": 0,
        "winRate": 0.8333333333333334,
        "averageFlips": 0.4523809523809524,
        "averageDamageDealt": 2.261904761904762,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:arcane->automaton",
        "kind": "family-chain",
        "label": "arcane -> automaton",
        "count": 40,
        "wins": 34,
        "losses": 6,
        "draws": 0,
        "winRate": 0.85,
        "averageFlips": 0.2,
        "averageDamageDealt": 0.85,
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
        "sampleSize": 174,
        "id": "card-sapling-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Floramie toxique sous-performe",
        "detail": "92 plays, 58% win, net PV 0.17.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 44,
        "id": "card-heron-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume sous-performe",
        "detail": "23 plays, 39% win, net PV 0.22.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 42,
        "id": "card-foxfire-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer sous-performe",
        "detail": "24 plays, 54% win, net PV 0.42.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "medium",
        "sampleSize": 18,
        "id": "card-reward-uncommon-02-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 02 sous-performe",
        "detail": "10 plays, 60% win, net PV 0.80.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "medium",
        "sampleSize": 16,
        "id": "card-quiet-monk-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil sous-performe",
        "detail": "12 plays, 58% win, net PV 0.17.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 377,
        "id": "family-familiar-buff",
        "severity": "watch",
        "action": "verify",
        "title": "familiar manque d'attraction",
        "detail": "377 offres, 50% selection, 58% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 377,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "377 occurrences, 85% win, 0.38 flips, 2.16 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 341,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "341 occurrences, 90% win, 0.25 flips, 3.87 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:automaton->automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 210,
        "title": "automaton -> automaton ressort comme combo",
        "detail": "210 occurrences, 89% win, 0.43 flips, 1.88 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 170,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "170 occurrences, 92% win, 0.36 flips, 4.15 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:brass-rook:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 130,
        "title": "Tour de laiton -> boost-self ressort comme combo",
        "detail": "130 occurrences, 89% win, 0.34 flips, 2.17 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 124,
        "title": "demon -> demon ressort comme combo",
        "detail": "124 occurrences, 73% win, 0.68 flips, 4.09 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 111,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "111 offres, 34% selection, 55% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 95,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "95 occurrences, 74% win, 0.96 flips, 1.81 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 92,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "92 occurrences, 74% win, 1.04 flips, 2.67 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 60,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "60 occurrences, 83% win, 0.10 flips, 6.78 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 56,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "56 offres, 27% selection, 47% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 50,
        "title": "demon allie + demon ressort comme combo",
        "detail": "50 occurrences, 86% win, 0.40 flips, 8.74 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-family-familiar-nerf",
      "severity": "problem",
      "title": "familiar domine l'echantillon",
      "detail": "1339 plays, 65% win, net PV 0.43. Confiance high, echantillon 2482.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-adventure-card-sapling-buff",
      "severity": "problem",
      "title": "Run complet: Floramie toxique sous-performe",
      "detail": "92 plays, 58% win, net PV 0.17. Confiance high, echantillon 174.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-heron-buff",
      "severity": "problem",
      "title": "Run complet: Oiselle aubeplume sous-performe",
      "detail": "23 plays, 39% win, net PV 0.22. Confiance high, echantillon 44.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-foxfire-buff",
      "severity": "problem",
      "title": "Run complet: Requin runefer sous-performe",
      "detail": "24 plays, 54% win, net PV 0.42. Confiance high, echantillon 42.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 12 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a confirmer (67%). Peu de flips par tour (0.19).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:revenant+revenant",
      "severity": "watch",
      "title": "revenant allie + revenant ressort comme combo",
      "detail": "277 occurrences, 59% win, 0.12 flips, 1.81 degats. Confiance high, echantillon 277.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:familiar+familiar",
      "severity": "watch",
      "title": "familiar allie + familiar ressort comme combo",
      "detail": "231 occurrences, 71% win, 0.23 flips, 2.00 degats. Confiance high, echantillon 231.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260629-004303",
        "generatedAt": "2026-06-29T00:43:03.178Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.5416666666666666
        },
        "familyWinRates": {
          "arcane": 0.31841432225063937,
          "automaton": 0.7528696826468603,
          "human": 0.4961884961884962,
          "revenant": 0.5091441111923921,
          "familiar": 0.5755071374906086,
          "demon": 0.6509988249118684
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-human": 1,
          "demon-vs-familiar": 1,
          "arcane-vs-human": 0.125,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-demon": 0.25,
          "demon-vs-human": 0.75,
          "automaton-vs-demon": 0.625,
          "automaton-vs-revenant": 0.625,
          "demon-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-revenant": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.5,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.308584686774942
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.28841607565011823
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.29620253164556964
          }
        ]
      },
      {
        "reportId": "ai-lab-20260629-164913",
        "generatedAt": "2026-06-29T16:49:13.552Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "arcane": 0.35826771653543305,
          "automaton": 0.6111842105263158,
          "human": 0.5130609511051574,
          "revenant": 0.5875432525951557,
          "familiar": 0.605643994211288,
          "demon": 0.6251526251526252
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0.125,
          "arcane-vs-demon": 0.25,
          "arcane-vs-human": 0.25,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-revenant": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-revenant": 0.5,
          "demon-vs-familiar": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.375,
          "expert": 0.625,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3381294964028777
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32360742705570295
          }
        ]
      },
      {
        "reportId": "ai-lab-20260630-032030",
        "generatedAt": "2026-06-30T03:20:30.249Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.3333333333333333,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.5833333333333334
        },
        "familyWinRates": {
          "automaton": 0.6798722044728435,
          "human": 0.5763384005287508,
          "arcane": 0.5471571906354515,
          "familiar": 0.5459110473457676,
          "revenant": 0.29133284777858703,
          "demon": 0.6097271648873073
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "automaton-vs-familiar": 1,
          "arcane-vs-familiar": 0.125,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "demon-vs-familiar": 0.625,
          "demon-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-human": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0,
          "regular": 0.25,
          "expert": 0.25,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2695417789757412
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3005464480874317
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.29201101928374656
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3076923076923077
          }
        ]
      },
      {
        "reportId": "ai-lab-20260630-091226",
        "generatedAt": "2026-06-30T09:12:26.804Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.75,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5416666666666666
        },
        "familyWinRates": {
          "automaton": 0.7448229792919172,
          "human": 0.4085733422638982,
          "arcane": 0.503790489317712,
          "familiar": 0.5983086680761099,
          "revenant": 0.389894419306184,
          "demon": 0.6480836236933798
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "demon-vs-revenant": 0.875,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-familiar": 0.375,
          "arcane-vs-human": 0.375,
          "arcane-vs-revenant": 0.625,
          "demon-vs-familiar": 0.625,
          "familiar-vs-human": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.375,
          "expert": 0.75,
          "champion": 1
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6902654867256637
          }
        ]
      },
      {
        "reportId": "ai-lab-20260701-013826",
        "generatedAt": "2026-07-01T01:38:26.489Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.25,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "automaton": 0.7414829659318637,
          "familiar": 0.5431578947368421,
          "arcane": 0.6067094932191291,
          "human": 0.4662212323682257,
          "revenant": 0.34565050038491146,
          "demon": 0.5657142857142857
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-human": 0.875,
          "automaton-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "demon-vs-familiar": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-familiar": 0.5,
          "demon-vs-human": 0.5,
          "demon-vs-revenant": 0.5,
          "familiar-vs-human": 0.5,
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
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3391812865497076
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32456140350877194
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3246268656716418
          }
        ]
      },
      {
        "reportId": "ai-lab-20260701-063806",
        "generatedAt": "2026-07-01T06:38:06.484Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.6666666666666666
        },
        "familyWinRates": {
          "familiar": 0.43919388464211256,
          "arcane": 0.5038814396612562,
          "automaton": 0.75177304964539,
          "human": 0.5919583023082651,
          "revenant": 0.4128787878787879,
          "demon": 0.6255707762557078
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-human": 0,
          "automaton-vs-familiar": 1,
          "demon-vs-familiar": 1,
          "arcane-vs-revenant": 0.875,
          "automaton-vs-revenant": 0.875,
          "automaton-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "arcane-vs-familiar": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-human": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.25,
          "expert": 0.75,
          "champion": 0.75
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260702-100942",
        "generatedAt": "2026-07-02T10:09:42.967Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "arcane": 0.5157894736842106,
          "automaton": 0.7510259917920656,
          "human": 0.35490753911806544,
          "revenant": 0.46957766642806015,
          "familiar": 0.5304080061585835,
          "demon": 0.6557377049180327
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-automaton": 0.25,
          "arcane-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "familiar-vs-human": 0.75,
          "arcane-vs-human": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-familiar": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.5,
          "expert": 0.625,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3492063492063492
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3407202216066482
          }
        ]
      },
      {
        "reportId": "ai-lab-20260702-153753",
        "generatedAt": "2026-07-02T15:37:53.028Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.4166666666666667
        },
        "familyWinRates": {
          "arcane": 0.3623942745608328,
          "automaton": 0.8241106719367589,
          "human": 0.4957983193277311,
          "revenant": 0.38287331917905165,
          "familiar": 0.574585635359116,
          "demon": 0.6686674669867947
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-familiar": 1,
          "arcane-vs-familiar": 0.125,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-human": 0.875,
          "demon-vs-human": 0.875,
          "arcane-vs-automaton": 0.25,
          "arcane-vs-human": 0.25,
          "automaton-vs-revenant": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.625,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6901408450704225
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3493975903614458
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34025974025974026
          }
        ]
      },
      {
        "reportId": "ai-lab-20260702-204617",
        "generatedAt": "2026-07-02T20:46:17.668Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.3333333333333333,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.4543596730245232,
          "human": 0.44543582704186685,
          "automaton": 0.6873259052924791,
          "familiar": 0.6795338674435543,
          "revenant": 0.44477836213373406,
          "demon": 0.5978391356542617
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "demon-vs-revenant": 0.875,
          "arcane-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-human": 0.375,
          "familiar-vs-human": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-revenant": 0.5,
          "demon-vs-familiar": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 1
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260703-014715",
        "generatedAt": "2026-07-03T01:47:15.148Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.75,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5833333333333334
        },
        "familyWinRates": {
          "human": 0.5016414970453054,
          "automaton": 0.7469470827679783,
          "arcane": 0.47262247838616717,
          "revenant": 0.29896142433234424,
          "familiar": 0.6262245666917859,
          "demon": 0.6556213017751479
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-revenant": 1,
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.125,
          "automaton-vs-revenant": 0.875,
          "arcane-vs-human": 0.25,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-human": 0.625,
          "arcane-vs-automaton": 0.5,
          "demon-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.5,
          "regular": 0.5,
          "expert": 0.25,
          "champion": 1
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.27900552486187846
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2801120448179272
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.32857142857142857
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3118279569892473
          }
        ]
      },
      {
        "reportId": "ai-lab-20260703-070349",
        "generatedAt": "2026-07-03T07:03:49.354Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.875,
          "expert-vs-champion": 0.5416666666666666
        },
        "familyWinRates": {
          "human": 0.5482093663911846,
          "automaton": 0.6680469289164941,
          "arcane": 0.46628407460545196,
          "revenant": 0.3956941351150705,
          "familiar": 0.6392830470500374,
          "demon": 0.5159010600706714
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.25,
          "demon-vs-revenant": 0.75,
          "arcane-vs-demon": 0.625,
          "arcane-vs-human": 0.375,
          "automaton-vs-human": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-human": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.625,
          "expert": 0.875,
          "champion": 0.875
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260703-163258",
        "generatedAt": "2026-07-03T16:32:58.811Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.5835411471321695,
          "human": 0.44598337950138506,
          "arcane": 0.4474053295932679,
          "revenant": 0.5352609308885754,
          "familiar": 0.6504854368932039,
          "demon": 0.6085450346420324
        },
        "starterFamilyMatchupWinRates": {
          "demon-vs-human": 1,
          "arcane-vs-familiar": 0.125,
          "arcane-vs-demon": 0.25,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "human-vs-revenant": 0.75,
          "arcane-vs-revenant": 0.375,
          "automaton-vs-revenant": 0.375,
          "demon-vs-familiar": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.5,
          "expert": 0.625,
          "champion": 0.625
        },
        "cardSignals": []
      }
    ],
    "signals": [
      {
        "id": "trend-starter-matchup-automaton-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 85% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.8541666666666666
      },
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "71% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.7119169016960947
      },
      {
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 82% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.8229166666666666
      },
      {
        "id": "trend-starter-matchup-demon-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs human reste desequilibre",
        "detail": "La famille de gauche gagne 76% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.7604166666666666
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 21% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.20833333333333334
      },
      {
        "id": "trend-family-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "revenant reste trop faible",
        "detail": "42% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.42196581310107123
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 67% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.6666666666666666
      },
      {
        "id": "trend-starter-matchup-arcane-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "arcane vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 72% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.71875
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 69% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.6875
      }
    ]
  }
};
