import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260702-100942",
  "generatedAt": "2026-07-02T10:09:42.967Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 290,
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
      "averageHpEdge": -17.5
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 31,
      "losses": 17,
      "draws": 0,
      "winRate": 0.6458333333333334,
      "averageHpEdge": 7.5
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 20,
      "losses": 28,
      "draws": 0,
      "winRate": 0.4166666666666667,
      "averageHpEdge": -3.375
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 33,
      "losses": 15,
      "draws": 0,
      "winRate": 0.6875,
      "averageHpEdge": 5.625
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 10,
      "losses": 14,
      "draws": 0,
      "winRate": 0.4166666666666667,
      "averageHpEdge": -2
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
        "turns": 30.083333333333332,
        "rounds": 3.25,
        "flipsPerMatch": 7.916666666666667,
        "flipsPerTurn": 0.2631578947368421,
        "reshuffles": 4.5,
        "deadTurns": 0.8333333333333334,
        "finalHpDifference": 13.5
      },
      "deadTurnFrequency": 0.027700831024930747,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce depart."
      ]
    }
  ],
  "starterFamilyMatchups": [
    {
      "id": "automaton-vs-human",
      "leftFamily": "automaton",
      "rightFamily": "human",
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
      "id": "arcane-vs-revenant",
      "leftFamily": "arcane",
      "rightFamily": "revenant",
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
      "id": "automaton-vs-revenant",
      "leftFamily": "automaton",
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
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "enemy": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 24,
          "wins": 2,
          "losses": 22,
          "draws": 0,
          "winRate": 0.08333333333333333,
          "averageHpEdge": -17.5
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 22,
          "losses": 2,
          "draws": 0,
          "winRate": 0.9166666666666666,
          "averageHpEdge": 17.5
        }
      ],
      "averages": {
        "turns": 20.333333333333332,
        "rounds": 2.2083333333333335,
        "flipsPerMatch": 9.208333333333334,
        "flipsPerTurn": 0.45286885245901637,
        "reshuffles": 2.375,
        "deadTurns": 0.5,
        "finalHpDifference": 18.916666666666668
      },
      "deadTurnFrequency": 0.02459016393442623
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
          "wins": 3,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.375
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 9,
          "losses": 15,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -2.5
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 15,
          "losses": 9,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 2.5
        }
      ],
      "averages": {
        "turns": 30.125,
        "rounds": 3.125,
        "flipsPerMatch": 8.833333333333334,
        "flipsPerTurn": 0.29322268326417705,
        "reshuffles": 4.25,
        "deadTurns": 2,
        "finalHpDifference": 13.916666666666666
      },
      "deadTurnFrequency": 0.06639004149377593
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
          "wins": 5,
          "winRate": 0.4166666666666667
        },
        "enemy": {
          "games": 12,
          "wins": 8,
          "winRate": 0.6666666666666666
        },
        "overallStartingPlayerWinRate": 0.5416666666666666
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 24,
          "wins": 5,
          "losses": 19,
          "draws": 0,
          "winRate": 0.20833333333333334,
          "averageHpEdge": -9.25
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 19,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7916666666666666,
          "averageHpEdge": 9.25
        }
      ],
      "averages": {
        "turns": 29,
        "rounds": 3.0833333333333335,
        "flipsPerMatch": 7.291666666666667,
        "flipsPerTurn": 0.2514367816091954,
        "reshuffles": 4.166666666666667,
        "deadTurns": 1.25,
        "finalHpDifference": 13.833333333333334
      },
      "deadTurnFrequency": 0.04310344827586207
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
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "enemy": {
          "games": 12,
          "wins": 7,
          "winRate": 0.5833333333333334
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 24,
          "wins": 14,
          "losses": 10,
          "draws": 0,
          "winRate": 0.5833333333333334,
          "averageHpEdge": 2
        },
        {
          "modelId": "champion",
          "games": 24,
          "wins": 10,
          "losses": 14,
          "draws": 0,
          "winRate": 0.4166666666666667,
          "averageHpEdge": -2
        }
      ],
      "averages": {
        "turns": 31.75,
        "rounds": 3.4583333333333335,
        "flipsPerMatch": 8.125,
        "flipsPerTurn": 0.2559055118110236,
        "reshuffles": 4.916666666666667,
        "deadTurns": 0.625,
        "finalHpDifference": 13.416666666666666
      },
      "deadTurnFrequency": 0.01968503937007874
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
      "averageLocationsCleared": 3,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 24.125,
      "averageCombatFlips": 6.8125,
      "averageDeadTurns": 4.6875,
      "averageReshuffles": 3.125,
      "averageRewardsClaimed": 1.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.25,
      "averageRemovals": 0,
      "averageFusions": 0.375,
      "familyPickRates": {
        "familiar": 0.125,
        "demon": 0.25,
        "human": 0.375,
        "arcane": 0.25
      },
      "nodeMix": {
        "combat": 0.625,
        "elite": 0.041666666666666664,
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
      "modelId": "opportunist",
      "runs": 8,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.125,
      "averageLocationsCleared": 5.875,
      "averageFinalDeckSize": 13.375,
      "averageDeckDelta": 1.375,
      "averageCombatWinRate": 0.7142857142857143,
      "averageCombatTurns": 14.928571428571429,
      "averageCombatFlips": 8.392857142857142,
      "averageDeadTurns": 1.2857142857142858,
      "averageReshuffles": 1.8571428571428572,
      "averageRewardsClaimed": 3.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 1.375,
      "averageFusions": 0.375,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.5,
        "elite": 0.0625,
        "shop": 0.0625,
        "chest": 0.10416666666666667,
        "rest": 0.25,
        "boss": 0.020833333333333332
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 1,
      "bossReached": 4,
      "victoryRate": 0.125,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 6.625,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.7666666666666667,
      "averageCombatTurns": 26.6,
      "averageCombatFlips": 5.633333333333334,
      "averageDeadTurns": 3.9,
      "averageReshuffles": 3.1,
      "averageRewardsClaimed": 3.75,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 1.5,
      "averageFusions": 0.75,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.38596491228070173,
        "elite": 0.07017543859649122,
        "shop": 0.10526315789473684,
        "chest": 0.14035087719298245,
        "rest": 0.22807017543859648,
        "boss": 0.07017543859649122
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 2,
      "bossReached": 5,
      "victoryRate": 0.25,
      "bossReachRate": 0.625,
      "averageLocationsCleared": 6.75,
      "averageFinalDeckSize": 13.875,
      "averageDeckDelta": 1.875,
      "averageCombatWinRate": 0.8064516129032258,
      "averageCombatTurns": 24.870967741935484,
      "averageCombatFlips": 6.258064516129032,
      "averageDeadTurns": 3,
      "averageReshuffles": 3.2903225806451615,
      "averageRewardsClaimed": 4,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.125,
      "averageUpgrades": 0.125,
      "averageRemovals": 1.125,
      "averageFusions": 1.125,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.3898305084745763,
        "elite": 0.05084745762711865,
        "shop": 0.15254237288135594,
        "chest": 0.15254237288135594,
        "rest": 0.1694915254237288,
        "boss": 0.0847457627118644
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 8,
      "victories": 4,
      "bossReached": 7,
      "victoryRate": 0.5,
      "bossReachRate": 0.875,
      "averageLocationsCleared": 7.75,
      "averageFinalDeckSize": 15.625,
      "averageDeckDelta": 3.625,
      "averageCombatWinRate": 0.8947368421052632,
      "averageCombatTurns": 23.842105263157894,
      "averageCombatFlips": 6.131578947368421,
      "averageDeadTurns": 2.763157894736842,
      "averageReshuffles": 2.8947368421052633,
      "averageRewardsClaimed": 4.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.25,
      "averageUpgrades": 1.5,
      "averageRemovals": 0,
      "averageFusions": 1.25,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.36231884057971014,
        "elite": 0.08695652173913043,
        "shop": 0.14492753623188406,
        "chest": 0.13043478260869565,
        "rest": 0.17391304347826086,
        "boss": 0.10144927536231885
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
      "seed": 1305407516,
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
      "totalCombatTurns": 32,
      "totalCombatFlips": 8,
      "totalDeadTurns": 5,
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
          "combatTurns": 32,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1322185135,
      "selectedFamily": "human",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 3,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 46,
      "totalCombatFlips": 11,
      "totalDeadTurns": 10,
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
      "upgrades": 1,
      "removals": 0,
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
        "human": 12,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 28,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 2,
      "modelId": "beginner",
      "seed": 1338962754,
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
      "totalCombatTurns": 26,
      "totalCombatFlips": 12,
      "totalDeadTurns": 3,
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
        "watcher-stone"
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 14,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1355740373,
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
      "totalCombatTurns": 33,
      "totalCombatFlips": 9,
      "totalDeadTurns": 6,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 33,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 1238297040,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 68,
      "totalCombatFlips": 24,
      "totalDeadTurns": 14,
      "totalReshuffles": 13,
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
        "spring-tear"
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
        "chest": 2,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 14,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
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
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
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
      "runIndex": 5,
      "modelId": "beginner",
      "seed": 1255074659,
      "selectedFamily": "human",
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
      "totalCombatTurns": 46,
      "totalCombatFlips": 13,
      "totalDeadTurns": 10,
      "totalReshuffles": 9,
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
        "demon": 0,
        "human": 11,
        "automaton": 0,
        "revenant": 0,
        "arcane": 1,
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
          "combatTurns": 27,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 7,
          "enemyProfileId": "swarm",
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
      "seed": 1271852278,
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
      "totalCombatTurns": 78,
      "totalCombatFlips": 18,
      "totalDeadTurns": 15,
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
        "ancient-sap"
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
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1288629897,
      "selectedFamily": "familiar",
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
      "totalCombatTurns": 57,
      "totalCombatFlips": 14,
      "totalDeadTurns": 12,
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
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 13,
        "demon": 1,
        "human": 0,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 30,
          "combatFlips": 12,
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
      "seed": 2838900727,
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
      "totalCombatTurns": 41,
      "totalCombatFlips": 20,
      "totalDeadTurns": 5,
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
        "chest": 0,
        "rest": 2,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 22,
          "combatFlips": 7,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 2822123108,
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
      "totalCombatTurns": 57,
      "totalCombatFlips": 28,
      "totalDeadTurns": 8,
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
        "familiar": 1,
        "demon": 11,
        "human": 0,
        "automaton": 1,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 14,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 14,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 2872455965,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 54,
      "totalCombatFlips": 33,
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
        "moss-dust"
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
        "demon": 10,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
      "seed": 2855678346,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 29,
      "totalCombatFlips": 16,
      "totalDeadTurns": 2,
      "totalReshuffles": 2,
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
      "campVisits": 3,
      "upgrades": 1,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 11,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
        "arcane": 0,
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
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
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
      "runIndex": 4,
      "modelId": "opportunist",
      "seed": 2771790251,
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
      "totalCombatTurns": 68,
      "totalCombatFlips": 42,
      "totalDeadTurns": 5,
      "totalReshuffles": 19,
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
      "campVisits": 4,
      "upgrades": 0,
      "removals": 4,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 1,
        "rest": 4,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
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
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 12,
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
          "combatTurns": 19,
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
      "runIndex": 5,
      "modelId": "opportunist",
      "seed": 2755012632,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 80,
      "totalCombatFlips": 51,
      "totalDeadTurns": 5,
      "totalReshuffles": 9,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 12,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
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
      "runIndex": 6,
      "modelId": "opportunist",
      "seed": 2805345489,
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
      "totalCombatTurns": 40,
      "totalCombatFlips": 23,
      "totalDeadTurns": 4,
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
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 2788567870,
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
      "totalCombatTurns": 49,
      "totalCombatFlips": 22,
      "totalDeadTurns": 4,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 29,
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
      "modelId": "regular",
      "seed": 2157572370,
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
      "totalCombatTurns": 163,
      "totalCombatFlips": 42,
      "totalDeadTurns": 28,
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
        "moss-dust"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 2,
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
        "revenant": 1,
        "arcane": 12,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 15,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 12,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 2174349989,
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
      "totalCombatTurns": 130,
      "totalCombatFlips": 36,
      "totalDeadTurns": 13,
      "totalReshuffles": 16,
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
        "moss-dust"
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
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
      "runIndex": 2,
      "modelId": "regular",
      "seed": 2124017132,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 9,
      "deckDelta": -3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 61,
      "totalCombatFlips": 7,
      "totalDeadTurns": 7,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 9,
          "combatWinner": "enemy",
          "combatTurns": 39,
          "combatFlips": 1,
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
      "modelId": "regular",
      "seed": 2140794751,
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
      "totalCombatTurns": 94,
      "totalCombatFlips": 14,
      "totalDeadTurns": 13,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "combatTurns": 27,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 28,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 2090461894,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 4,
      "combatLosses": 0,
      "totalCombatTurns": 84,
      "totalCombatFlips": 20,
      "totalDeadTurns": 12,
      "totalReshuffles": 9,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 12,
      "stealRewardsClaimed": 3,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "watcher-stone"
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
        "chest": 2,
        "rest": 2,
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
        "common": 11,
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
          "combatTurns": 25,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 2107239513,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 93,
      "totalCombatFlips": 20,
      "totalDeadTurns": 15,
      "totalReshuffles": 11,
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
        "moss-dust"
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
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 9,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 9,
        "uncommon": 1,
        "rare": 1
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
          "combatTurns": 35,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 40,
          "combatFlips": 10,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 2056906656,
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
      "totalCombatTurns": 129,
      "totalCombatFlips": 25,
      "totalDeadTurns": 21,
      "totalReshuffles": 14,
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
          "title": "Duel des fougeres",
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 30,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "combatTurns": 18,
          "combatFlips": 0,
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
      "seed": 2073684275,
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 5,
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
        "chest": 1,
        "rest": 0,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 4238036070,
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
      "totalCombatTurns": 78,
      "totalCombatFlips": 26,
      "totalDeadTurns": 6,
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
        "moss-dust"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 2,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 2,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
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
      "seed": 4254813689,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 121,
      "totalCombatFlips": 26,
      "totalDeadTurns": 24,
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
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
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
        "demon": 0,
        "human": 1,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 7,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "modelId": "expert",
      "seed": 4204480832,
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
      "totalCombatTurns": 68,
      "totalCombatFlips": 6,
      "totalDeadTurns": 5,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 0,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 2,
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
      "modelId": "expert",
      "seed": 4221258451,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 6,
      "combatLosses": 0,
      "totalCombatTurns": 163,
      "totalCombatFlips": 45,
      "totalDeadTurns": 19,
      "totalReshuffles": 24,
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
        "familiar": 0,
        "demon": 1,
        "human": 1,
        "automaton": 1,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 41,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
      "runIndex": 4,
      "modelId": "expert",
      "seed": 10179250,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 87,
      "totalCombatFlips": 7,
      "totalDeadTurns": 7,
      "totalReshuffles": 13,
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
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 2,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 37,
          "combatFlips": 0,
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
      "modelId": "expert",
      "seed": 26956869,
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
      "totalCombatTurns": 96,
      "totalCombatFlips": 39,
      "totalDeadTurns": 7,
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
        "moss-dust"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 2,
        "chest": 2,
        "rest": 1,
        "boss": 1
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 29,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 14,
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
      "runIndex": 6,
      "modelId": "expert",
      "seed": 4271591308,
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
      "totalCombatTurns": 32,
      "totalCombatFlips": 6,
      "totalDeadTurns": 6,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 7,
      "modelId": "expert",
      "seed": 4288368927,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 19,
      "deckDelta": 7,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 5,
      "combatLosses": 0,
      "totalCombatTurns": 126,
      "totalCombatFlips": 39,
      "totalDeadTurns": 19,
      "totalReshuffles": 14,
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
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "moss-dust",
        "split-hazelnut"
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
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 1,
        "human": 0,
        "automaton": 3,
        "revenant": 1,
        "arcane": 12,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 2,
        "rare": 2
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
          "combatTurns": 26,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 35,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 28,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 11,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "split-hazelnut",
          "siteAction": "none"
        },
        {
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 19,
          "playerDeckSizeAfter": 19,
          "combatWinner": "player",
          "combatTurns": 19,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 3257873009,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 61,
      "totalCombatFlips": 23,
      "totalDeadTurns": 7,
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
        "watcher-stone"
      ],
      "campVisits": 3,
      "upgrades": 3,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 3,
        "chest": 0,
        "rest": 3,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 9,
        "revenant": 0,
        "arcane": 2,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 29,
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
      "runIndex": 1,
      "modelId": "champion",
      "seed": 3241095390,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 5,
      "combatWins": 4,
      "combatLosses": 1,
      "totalCombatTurns": 137,
      "totalCombatFlips": 28,
      "totalDeadTurns": 22,
      "totalReshuffles": 17,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
        "uncommon": 2,
        "rare": 1
      },
      "stealRewardsOffered": 16,
      "stealRewardsClaimed": 4,
      "charmOffersSeen": 1,
      "charmsClaimed": [
        "ancient-sap"
      ],
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 1,
        "shop": 1,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 15,
        "revenant": 1,
        "arcane": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 19,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 30,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 4,
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
      "seed": 3224317771,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 115,
      "totalCombatFlips": 30,
      "totalDeadTurns": 17,
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
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
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
        "demon": 1,
        "human": 0,
        "automaton": 14,
        "revenant": 1,
        "arcane": 0,
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
          "title": "Duel des fougeres",
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
      "runIndex": 3,
      "modelId": "champion",
      "seed": 3207540152,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 65,
      "totalCombatFlips": 25,
      "totalDeadTurns": 2,
      "totalReshuffles": 6,
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
        "old-bridge-stone"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 3,
        "chest": 0,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 9,
        "revenant": 2,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 11,
        "uncommon": 0,
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
          "combatTurns": 10,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 10,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 4,
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
      "seed": 3324983485,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 134,
      "totalCombatFlips": 47,
      "totalDeadTurns": 9,
      "totalReshuffles": 15,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
        "uncommon": 2,
        "rare": 3
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
        "combat": 3,
        "elite": 2,
        "shop": 1,
        "chest": 2,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 13,
        "revenant": 3,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 13,
        "uncommon": 2,
        "rare": 3
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 28,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "shop",
          "title": "Echoppe de brindilles",
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 13,
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
          "combatTurns": 18,
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
      "runIndex": 5,
      "modelId": "champion",
      "seed": 3308205866,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 123,
      "totalCombatFlips": 19,
      "totalDeadTurns": 25,
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
        "ancient-sap"
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
        "chest": 2,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 2,
        "automaton": 14,
        "revenant": 1,
        "arcane": 0,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 38,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 30,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 31,
          "combatFlips": 7,
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
      "runIndex": 6,
      "modelId": "champion",
      "seed": 3291428247,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 138,
      "totalCombatFlips": 32,
      "totalDeadTurns": 15,
      "totalReshuffles": 16,
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
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "old-bridge-stone",
        "ancient-sap"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 14,
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
          "combatTurns": 24,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 5,
          "enemyProfileId": "shaper",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "ancient-sap",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "rest",
          "title": "Repos du sous-bois",
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 16,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
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
      "runIndex": 7,
      "modelId": "champion",
      "seed": 3274650628,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 133,
      "totalCombatFlips": 29,
      "totalDeadTurns": 8,
      "totalReshuffles": 18,
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
      "charmOffersSeen": 2,
      "charmsClaimed": [
        "old-bridge-stone",
        "clearing-eye"
      ],
      "campVisits": 2,
      "upgrades": 2,
      "removals": 0,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 2,
        "shop": 1,
        "chest": 1,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 13,
        "revenant": 1,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 14,
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
          "combatTurns": 23,
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
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 7,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 4,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "clearing-eye",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "chest",
          "title": "Coffre noueux",
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
          "combatTurns": 27,
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
        "offered": 520,
        "played": 378,
        "ignored": 407,
        "selectionRate": 0.7269230769230769,
        "wins": 132,
        "losses": 246,
        "draws": 0,
        "winRateWhenPlayed": 0.3492063492063492,
        "averageFlips": 0.2830687830687831,
        "failedImpactRate": 0.4830917874396135,
        "averageFlipMargin": 1.8878504672897196,
        "averageEffectAmount": 3.4576719576719577,
        "averageDamageDealt": 0.07142857142857142,
        "averageDamageTaken": 0.042328042328042326,
        "averageNetDamage": 0.0291005291005291,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 142,
            "winRate": 0.29577464788732394
          },
          {
            "modelId": "opportunist",
            "played": 88,
            "winRate": 0.5681818181818182
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.41379310344827586
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.07692307692307693
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.045454545454545456
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 378,
            "winRate": 0.3492063492063492
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 50%."
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
        "offered": 755,
        "played": 361,
        "ignored": 581,
        "selectionRate": 0.4781456953642384,
        "wins": 123,
        "losses": 238,
        "draws": 0,
        "winRateWhenPlayed": 0.3407202216066482,
        "averageFlips": 0.23268698060941828,
        "failedImpactRate": 0.7052631578947368,
        "averageFlipMargin": 1.8214285714285714,
        "averageEffectAmount": 3.1634349030470914,
        "averageDamageDealt": 0.5678670360110804,
        "averageDamageTaken": 0.2299168975069252,
        "averageNetDamage": 0.3379501385041551,
        "lethalMoves": 9,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 135,
            "winRate": 0.2740740740740741
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.5057471264367817
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.4418604651162791
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.05555555555555555
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
            "played": 361,
            "winRate": 0.3407202216066482
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 50%."
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
        "offered": 581,
        "played": 418,
        "ignored": 411,
        "selectionRate": 0.7194492254733219,
        "wins": 228,
        "losses": 190,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.3157894736842105,
        "failedImpactRate": 0.5525423728813559,
        "averageFlipMargin": 1.6742424242424243,
        "averageEffectAmount": 3.110047846889952,
        "averageDamageDealt": 0.15789473684210525,
        "averageDamageTaken": 0.0861244019138756,
        "averageNetDamage": 0.07177033492822965,
        "lethalMoves": 3,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 188,
            "winRate": 0.6542553191489362
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 76,
            "winRate": 0.6578947368421053
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.2222222222222222
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
            "played": 418,
            "winRate": 0.5454545454545454
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
        "offered": 565,
        "played": 395,
        "ignored": 441,
        "selectionRate": 0.6991150442477876,
        "wins": 190,
        "losses": 205,
        "draws": 0,
        "winRateWhenPlayed": 0.4810126582278481,
        "averageFlips": 0.23544303797468355,
        "failedImpactRate": 0.5053191489361702,
        "averageFlipMargin": 2,
        "averageEffectAmount": 4.1645569620253164,
        "averageDamageDealt": 0.1569620253164557,
        "averageDamageTaken": 0.10126582278481013,
        "averageNetDamage": 0.055696202531645575,
        "lethalMoves": 3,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 183,
            "winRate": 0.5300546448087432
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.5060240963855421
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.547945205479452
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.2682926829268293
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
            "played": 395,
            "winRate": 0.4810126582278481
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
        "offered": 576,
        "played": 381,
        "ignored": 422,
        "selectionRate": 0.6614583333333334,
        "wins": 298,
        "losses": 83,
        "draws": 0,
        "winRateWhenPlayed": 0.7821522309711286,
        "averageFlips": 0.3569553805774278,
        "failedImpactRate": 0.43333333333333335,
        "averageFlipMargin": 2.375,
        "averageEffectAmount": 4.766404199475065,
        "averageDamageDealt": 0.31496062992125984,
        "averageDamageTaken": 0.12598425196850394,
        "averageNetDamage": 0.1889763779527559,
        "lethalMoves": 2,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 158,
            "winRate": 0.6392405063291139
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 63,
            "winRate": 0.873015873015873
          },
          {
            "modelId": "champion",
            "played": 56,
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
            "played": 381,
            "winRate": 0.7821522309711286
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
        "played": 377,
        "ignored": 346,
        "selectionRate": 0.8055555555555556,
        "wins": 137,
        "losses": 240,
        "draws": 0,
        "winRateWhenPlayed": 0.363395225464191,
        "averageFlips": 0.26790450928381965,
        "failedImpactRate": 0.5388127853881278,
        "averageFlipMargin": 1.9306930693069306,
        "averageEffectAmount": 4.289124668435013,
        "averageDamageDealt": 0.14058355437665782,
        "averageDamageTaken": 0.08488063660477453,
        "averageNetDamage": 0.055702917771883284,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 144,
            "winRate": 0.3125
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.45054945054945056
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.5517241379310345
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.08571428571428572
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
            "played": 377,
            "winRate": 0.363395225464191
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
        "offered": 504,
        "played": 373,
        "ignored": 368,
        "selectionRate": 0.7400793650793651,
        "wins": 288,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.7721179624664879,
        "averageFlips": 0.21179624664879357,
        "failedImpactRate": 0.5380116959064327,
        "averageFlipMargin": 2.367088607594937,
        "averageEffectAmount": 5.589812332439679,
        "averageDamageDealt": 0.4959785522788204,
        "averageDamageTaken": 0.12064343163538874,
        "averageNetDamage": 0.37533512064343166,
        "lethalMoves": 5,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.63125
          },
          {
            "modelId": "expert",
            "played": 79,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 61,
            "winRate": 0.8524590163934426
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 1
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
            "played": 373,
            "winRate": 0.7721179624664879
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
        "offered": 603,
        "played": 372,
        "ignored": 445,
        "selectionRate": 0.6169154228855721,
        "wins": 183,
        "losses": 189,
        "draws": 0,
        "winRateWhenPlayed": 0.49193548387096775,
        "averageFlips": 0.27956989247311825,
        "failedImpactRate": 0.4926829268292683,
        "averageFlipMargin": 1.7980769230769231,
        "averageEffectAmount": 3.14247311827957,
        "averageDamageDealt": 0.2903225806451613,
        "averageDamageTaken": 0.06451612903225806,
        "averageNetDamage": 0.22580645161290325,
        "lethalMoves": 5,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 147,
            "winRate": 0.4557823129251701
          },
          {
            "modelId": "expert",
            "played": 104,
            "winRate": 0.7884615384615384
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5192307692307693
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.046511627906976744
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.19230769230769232
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 372,
            "winRate": 0.49193548387096775
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
        "played": 372,
        "ignored": 330,
        "selectionRate": 0.7815126050420168,
        "wins": 169,
        "losses": 203,
        "draws": 0,
        "winRateWhenPlayed": 0.4543010752688172,
        "averageFlips": 0.2903225806451613,
        "failedImpactRate": 0.47317073170731705,
        "averageFlipMargin": 1.8425925925925926,
        "averageEffectAmount": 3.282258064516129,
        "averageDamageDealt": 0.1989247311827957,
        "averageDamageTaken": 0.09408602150537634,
        "averageNetDamage": 0.10483870967741934,
        "lethalMoves": 2,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 149,
            "winRate": 0.40939597315436244
          },
          {
            "modelId": "expert",
            "played": 103,
            "winRate": 0.7766990291262136
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.4909090909090909
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.022222222222222223
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
            "played": 372,
            "winRate": 0.4543010752688172
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
        "offered": 683,
        "played": 369,
        "ignored": 550,
        "selectionRate": 0.5402635431918009,
        "wins": 185,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.5013550135501355,
        "averageFlips": 0.24119241192411925,
        "failedImpactRate": 0.555,
        "averageFlipMargin": 1.7191011235955056,
        "averageEffectAmount": 3.5176151761517613,
        "averageDamageDealt": 0.21680216802168023,
        "averageDamageTaken": 0.10840108401084012,
        "averageNetDamage": 0.10840108401084012,
        "lethalMoves": 3,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 165,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.47560975609756095
          },
          {
            "modelId": "opportunist",
            "played": 67,
            "winRate": 0.5223880597014925
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.2926829268292683
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
            "played": 369,
            "winRate": 0.5013550135501355
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
        "offered": 607,
        "played": 367,
        "ignored": 476,
        "selectionRate": 0.6046128500823723,
        "wins": 173,
        "losses": 194,
        "draws": 0,
        "winRateWhenPlayed": 0.4713896457765668,
        "averageFlips": 0.2098092643051771,
        "failedImpactRate": 0.615,
        "averageFlipMargin": 1.9090909090909092,
        "averageEffectAmount": 3.446866485013624,
        "averageDamageDealt": 0.1907356948228883,
        "averageDamageTaken": 0.051771117166212535,
        "averageNetDamage": 0.13896457765667575,
        "lethalMoves": 4,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.3717948717948718
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.8068181818181818
          },
          {
            "modelId": "opportunist",
            "played": 58,
            "winRate": 0.5862068965517241
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.1276595744680851
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.2222222222222222
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 367,
            "winRate": 0.4713896457765668
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
        "offered": 429,
        "played": 360,
        "ignored": 322,
        "selectionRate": 0.8391608391608392,
        "wins": 200,
        "losses": 160,
        "draws": 0,
        "winRateWhenPlayed": 0.5555555555555556,
        "averageFlips": 0.31666666666666665,
        "failedImpactRate": 0.43,
        "averageFlipMargin": 2.0789473684210527,
        "averageEffectAmount": 3.1222222222222222,
        "averageDamageDealt": 0.2777777777777778,
        "averageDamageTaken": 0.041666666666666664,
        "averageNetDamage": 0.23611111111111113,
        "lethalMoves": 7,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.44785276073619634
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.5285714285714286
          },
          {
            "modelId": "expert",
            "played": 67,
            "winRate": 0.7761194029850746
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.5675675675675675
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.7391304347826086
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 360,
            "winRate": 0.5555555555555556
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
        "offered": 977,
        "played": 359,
        "ignored": 794,
        "selectionRate": 0.36745138178096215,
        "wins": 266,
        "losses": 93,
        "draws": 0,
        "winRateWhenPlayed": 0.7409470752089137,
        "averageFlips": 0.44846796657381616,
        "failedImpactRate": 0.5861182519280206,
        "averageFlipMargin": 2.1801242236024843,
        "averageEffectAmount": 3.67966573816156,
        "averageDamageDealt": 0.9777158774373259,
        "averageDamageTaken": 0.26740947075208915,
        "averageNetDamage": 0.7103064066852367,
        "lethalMoves": 17,
        "roundClosers": 46,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.6451612903225806
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.9390243902439024
          },
          {
            "modelId": "opportunist",
            "played": 51,
            "winRate": 0.803921568627451
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 1
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
            "played": 359,
            "winRate": 0.7409470752089137
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
        "offered": 599,
        "played": 349,
        "ignored": 487,
        "selectionRate": 0.5826377295492488,
        "wins": 246,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.7048710601719198,
        "averageFlips": 0.1977077363896848,
        "failedImpactRate": 0.5460526315789473,
        "averageFlipMargin": 2.8115942028985508,
        "averageEffectAmount": 5.856733524355301,
        "averageDamageDealt": 0.27507163323782235,
        "averageDamageTaken": 0.07736389684813753,
        "averageNetDamage": 0.1977077363896848,
        "lethalMoves": 1,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 143,
            "winRate": 0.6013986013986014
          },
          {
            "modelId": "expert",
            "played": 79,
            "winRate": 0.8607594936708861
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.8
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.9411764705882353
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
            "played": 349,
            "winRate": 0.7048710601719198
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
        "offered": 1198,
        "played": 338,
        "ignored": 976,
        "selectionRate": 0.28213689482470783,
        "wins": 181,
        "losses": 157,
        "draws": 0,
        "winRateWhenPlayed": 0.5355029585798816,
        "averageFlips": 0.23668639053254437,
        "failedImpactRate": 0.756838905775076,
        "averageFlipMargin": 1.45,
        "averageEffectAmount": 0.7544378698224852,
        "averageDamageDealt": 1.6449704142011834,
        "averageDamageTaken": 0.7366863905325444,
        "averageNetDamage": 0.908284023668639,
        "lethalMoves": 21,
        "roundClosers": 86,
        "byModel": [
          {
            "modelId": "regular",
            "played": 146,
            "winRate": 0.5958904109589042
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.5697674418604651
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.6842105263157895
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.17647058823529413
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
            "played": 338,
            "winRate": 0.5355029585798816
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
        "offered": 588,
        "played": 337,
        "ignored": 478,
        "selectionRate": 0.5731292517006803,
        "wins": 167,
        "losses": 170,
        "draws": 0,
        "winRateWhenPlayed": 0.49554896142433236,
        "averageFlips": 0.4540059347181009,
        "failedImpactRate": 0.41379310344827586,
        "averageFlipMargin": 1.8366013071895424,
        "averageEffectAmount": 2.1097922848664687,
        "averageDamageDealt": 0.3857566765578635,
        "averageDamageTaken": 0.11572700296735905,
        "averageNetDamage": 0.27002967359050445,
        "lethalMoves": 4,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 142,
            "winRate": 0.4295774647887324
          },
          {
            "modelId": "expert",
            "played": 68,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.4461538461538462
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.4
          },
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0.5555555555555556
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 337,
            "winRate": 0.49554896142433236
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
        "offered": 649,
        "played": 317,
        "ignored": 469,
        "selectionRate": 0.4884437596302003,
        "wins": 167,
        "losses": 150,
        "draws": 0,
        "winRateWhenPlayed": 0.526813880126183,
        "averageFlips": 0.17981072555205047,
        "failedImpactRate": 0.6885245901639344,
        "averageFlipMargin": 2.210526315789474,
        "averageEffectAmount": 2.0441640378548898,
        "averageDamageDealt": 0.5930599369085173,
        "averageDamageTaken": 0.13249211356466878,
        "averageNetDamage": 0.46056782334384855,
        "lethalMoves": 9,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "regular",
            "played": 148,
            "winRate": 0.47297297297297297
          },
          {
            "modelId": "expert",
            "played": 66,
            "winRate": 0.7121212121212122
          },
          {
            "modelId": "opportunist",
            "played": 50,
            "winRate": 0.48
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.43333333333333335
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.5652173913043478
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 317,
            "winRate": 0.526813880126183
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
        "offered": 975,
        "played": 290,
        "ignored": 814,
        "selectionRate": 0.29743589743589743,
        "wins": 107,
        "losses": 183,
        "draws": 0,
        "winRateWhenPlayed": 0.3689655172413793,
        "averageFlips": 0.15517241379310345,
        "failedImpactRate": 0.8125,
        "averageFlipMargin": 1.8444444444444446,
        "averageEffectAmount": 1.3275862068965518,
        "averageDamageDealt": 0.9896551724137931,
        "averageDamageTaken": 0.5137931034482759,
        "averageNetDamage": 0.4758620689655172,
        "lethalMoves": 9,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 105,
            "winRate": 0.3142857142857143
          },
          {
            "modelId": "expert",
            "played": 69,
            "winRate": 0.4492753623188406
          },
          {
            "modelId": "opportunist",
            "played": 61,
            "winRate": 0.5901639344262295
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.16666666666666666
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
            "played": 290,
            "winRate": 0.3689655172413793
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
        "offered": 1103,
        "played": 286,
        "ignored": 958,
        "selectionRate": 0.25929283771532186,
        "wins": 131,
        "losses": 155,
        "draws": 0,
        "winRateWhenPlayed": 0.458041958041958,
        "averageFlips": 0.3076923076923077,
        "failedImpactRate": 0.7292307692307692,
        "averageFlipMargin": 2.1363636363636362,
        "averageEffectAmount": 0.9090909090909091,
        "averageDamageDealt": 1.5244755244755244,
        "averageDamageTaken": 0.9370629370629371,
        "averageNetDamage": 0.5874125874125873,
        "lethalMoves": 9,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 113,
            "winRate": 0.4247787610619469
          },
          {
            "modelId": "expert",
            "played": 72,
            "winRate": 0.7361111111111112
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.6190476190476191
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.18181818181818182
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 286,
            "winRate": 0.458041958041958
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
        "offered": 810,
        "played": 285,
        "ignored": 675,
        "selectionRate": 0.35185185185185186,
        "wins": 155,
        "losses": 130,
        "draws": 0,
        "winRateWhenPlayed": 0.543859649122807,
        "averageFlips": 0.4280701754385965,
        "failedImpactRate": 0.5579710144927537,
        "averageFlipMargin": 1.8114754098360655,
        "averageEffectAmount": 1.6245614035087719,
        "averageDamageDealt": 0.8842105263157894,
        "averageDamageTaken": 0.24912280701754386,
        "averageNetDamage": 0.6350877192982456,
        "lethalMoves": 8,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "regular",
            "played": 122,
            "winRate": 0.47540983606557374
          },
          {
            "modelId": "expert",
            "played": 58,
            "winRate": 0.7586206896551724
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.47368421052631576
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.48148148148148145
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.6190476190476191
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 285,
            "winRate": 0.543859649122807
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
        "offered": 319,
        "played": 231,
        "ignored": 235,
        "selectionRate": 0.7241379310344828,
        "wins": 151,
        "losses": 80,
        "draws": 0,
        "winRateWhenPlayed": 0.6536796536796536,
        "averageFlips": 0.7878787878787878,
        "failedImpactRate": 0.13744075829383887,
        "averageFlipMargin": 1.89010989010989,
        "averageEffectAmount": 1.3376623376623376,
        "averageDamageDealt": 1.6233766233766234,
        "averageDamageTaken": 0.18614718614718614,
        "averageNetDamage": 1.4372294372294372,
        "lethalMoves": 9,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 98,
            "winRate": 0.5816326530612245
          },
          {
            "modelId": "expert",
            "played": 51,
            "winRate": 0.803921568627451
          },
          {
            "modelId": "opportunist",
            "played": 43,
            "winRate": 0.7906976744186046
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.8260869565217391
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
            "played": 231,
            "winRate": 0.6536796536796536
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
        "offered": 377,
        "played": 225,
        "ignored": 312,
        "selectionRate": 0.596816976127321,
        "wins": 152,
        "losses": 73,
        "draws": 0,
        "winRateWhenPlayed": 0.6755555555555556,
        "averageFlips": 0.9022222222222223,
        "failedImpactRate": 0.11739130434782609,
        "averageFlipMargin": 1.9704433497536946,
        "averageEffectAmount": 0.8488888888888889,
        "averageDamageDealt": 0.7377777777777778,
        "averageDamageTaken": 0.1111111111111111,
        "averageNetDamage": 0.6266666666666667,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 101,
            "winRate": 0.6534653465346535
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.8409090909090909
          },
          {
            "modelId": "opportunist",
            "played": 40,
            "winRate": 0.725
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.8
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
            "played": 225,
            "winRate": 0.6755555555555556
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
        "offered": 418,
        "played": 214,
        "ignored": 314,
        "selectionRate": 0.5119617224880383,
        "wins": 145,
        "losses": 69,
        "draws": 0,
        "winRateWhenPlayed": 0.677570093457944,
        "averageFlips": 0.7149532710280374,
        "failedImpactRate": 0.28837209302325584,
        "averageFlipMargin": 2.0130718954248366,
        "averageEffectAmount": 1.266355140186916,
        "averageDamageDealt": 1.3925233644859814,
        "averageDamageTaken": 0.3925233644859813,
        "averageNetDamage": 1,
        "lethalMoves": 3,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 94,
            "winRate": 0.5957446808510638
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.8780487804878049
          },
          {
            "modelId": "opportunist",
            "played": 41,
            "winRate": 0.7804878048780488
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 1
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
            "played": 214,
            "winRate": 0.677570093457944
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
        "offered": 529,
        "played": 184,
        "ignored": 432,
        "selectionRate": 0.34782608695652173,
        "wins": 112,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.6086956521739131,
        "averageFlips": 0.6902173913043478,
        "failedImpactRate": 0.3712871287128713,
        "averageFlipMargin": 2.236220472440945,
        "averageEffectAmount": 0.8858695652173914,
        "averageDamageDealt": 2.114130434782609,
        "averageDamageTaken": 0.8478260869565217,
        "averageNetDamage": 1.2663043478260871,
        "lethalMoves": 10,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.5375
          },
          {
            "modelId": "expert",
            "played": 38,
            "winRate": 0.8157894736842105
          },
          {
            "modelId": "opportunist",
            "played": 30,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.8571428571428571
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
            "played": 184,
            "winRate": 0.6086956521739131
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
        "offered": 3027,
        "played": 1520,
        "ignored": 2378,
        "selectionRate": 0.5021473406012553,
        "wins": 784,
        "losses": 736,
        "draws": 0,
        "winRateWhenPlayed": 0.5157894736842106,
        "averageFlips": 0.25921052631578945,
        "averageDamageDealt": 0.5026315789473684,
        "averageNetDamage": 0.2625,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 418,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 395,
            "winRateWhenPlayed": 0.4810126582278481
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 369,
            "winRateWhenPlayed": 0.5013550135501355
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 338,
            "winRateWhenPlayed": 0.5355029585798816
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
        "offered": 2656,
        "played": 1462,
        "ignored": 2071,
        "selectionRate": 0.5504518072289156,
        "wins": 1098,
        "losses": 364,
        "draws": 0,
        "winRateWhenPlayed": 0.7510259917920656,
        "averageFlips": 0.30437756497948015,
        "averageDamageDealt": 0.5143638850889193,
        "averageNetDamage": 0.36662106703146374,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.7821522309711286
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 373,
            "winRateWhenPlayed": 0.7721179624664879
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 359,
            "winRateWhenPlayed": 0.7409470752089137
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 349,
            "winRateWhenPlayed": 0.7048710601719198
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
        "offered": 2718,
        "played": 1406,
        "ignored": 2148,
        "selectionRate": 0.5172921265636498,
        "wins": 499,
        "losses": 907,
        "draws": 0,
        "winRateWhenPlayed": 0.35490753911806544,
        "averageFlips": 0.23968705547652916,
        "averageDamageDealt": 0.406827880512091,
        "averageNetDamage": 0.2076813655761024,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 378,
            "winRateWhenPlayed": 0.3492063492063492
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.363395225464191
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 361,
            "winRateWhenPlayed": 0.3407202216066482
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 290,
            "winRateWhenPlayed": 0.3689655172413793
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
        "offered": 2789,
        "played": 1397,
        "ignored": 2209,
        "selectionRate": 0.5008963786303334,
        "wins": 656,
        "losses": 741,
        "draws": 0,
        "winRateWhenPlayed": 0.46957766642806015,
        "averageFlips": 0.2698639942734431,
        "averageDamageDealt": 0.4924838940586972,
        "averageNetDamage": 0.24481030780243376,
        "topCards": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 372,
            "winRateWhenPlayed": 0.49193548387096775
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 372,
            "winRateWhenPlayed": 0.4543010752688172
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 367,
            "winRateWhenPlayed": 0.4713896457765668
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 286,
            "winRateWhenPlayed": 0.458041958041958
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
        "offered": 2476,
        "played": 1299,
        "ignored": 1944,
        "selectionRate": 0.5246365105008077,
        "wins": 689,
        "losses": 610,
        "draws": 0,
        "winRateWhenPlayed": 0.5304080061585835,
        "averageFlips": 0.3433410315627406,
        "averageDamageDealt": 0.5157813702848345,
        "averageNetDamage": 0.3872209391839877,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 360,
            "winRateWhenPlayed": 0.5555555555555556
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 337,
            "winRateWhenPlayed": 0.49554896142433236
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 317,
            "winRateWhenPlayed": 0.526813880126183
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 285,
            "winRateWhenPlayed": 0.543859649122807
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
        "offered": 1643,
        "played": 854,
        "ignored": 1293,
        "selectionRate": 0.519780888618381,
        "wins": 560,
        "losses": 294,
        "draws": 0,
        "winRateWhenPlayed": 0.6557377049180327,
        "averageFlips": 0.7786885245901639,
        "averageDamageDealt": 1.4379391100702577,
        "averageNetDamage": 1.0772833723653397,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 231,
            "winRateWhenPlayed": 0.6536796536796536
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 225,
            "winRateWhenPlayed": 0.6755555555555556
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 214,
            "winRateWhenPlayed": 0.677570093457944
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 184,
            "winRateWhenPlayed": 0.6086956521739131
          }
        ],
        "status": "overperformer",
        "notes": [
          "La famille gagne trop souvent sur cet echantillon."
        ]
      }
    ],
    "roleAnalytics": [
      {
        "id": "connector",
        "label": "connector",
        "offered": 3066,
        "played": 2110,
        "ignored": 2299,
        "selectionRate": 0.6881930854533594,
        "wins": 1151,
        "losses": 959,
        "draws": 0,
        "winRateWhenPlayed": 0.5454976303317536,
        "averageFlips": 0.39478672985781993,
        "averageDamageDealt": 0.2886255924170616,
        "averageNetDamage": 0.1867298578199052,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 418,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.7821522309711286
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.363395225464191
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 372,
            "winRateWhenPlayed": 0.4543010752688172
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 337,
            "winRateWhenPlayed": 0.49554896142433236
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
        "offered": 2940,
        "played": 2109,
        "ignored": 2218,
        "selectionRate": 0.7173469387755103,
        "wins": 1144,
        "losses": 965,
        "draws": 0,
        "winRateWhenPlayed": 0.5424371740161213,
        "averageFlips": 0.32195353247984826,
        "averageDamageDealt": 0.4063537221431958,
        "averageNetDamage": 0.3195827406353722,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 395,
            "winRateWhenPlayed": 0.4810126582278481
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 378,
            "winRateWhenPlayed": 0.3492063492063492
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 373,
            "winRateWhenPlayed": 0.7721179624664879
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 372,
            "winRateWhenPlayed": 0.49193548387096775
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 360,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 3983,
        "played": 1915,
        "ignored": 3201,
        "selectionRate": 0.4807933718302787,
        "wins": 994,
        "losses": 921,
        "draws": 0,
        "winRateWhenPlayed": 0.5190600522193212,
        "averageFlips": 0.29660574412532636,
        "averageDamageDealt": 0.5702349869451697,
        "averageNetDamage": 0.36344647519582246,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 369,
            "winRateWhenPlayed": 0.5013550135501355
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 367,
            "winRateWhenPlayed": 0.4713896457765668
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 361,
            "winRateWhenPlayed": 0.3407202216066482
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 349,
            "winRateWhenPlayed": 0.7048710601719198
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 285,
            "winRateWhenPlayed": 0.543859649122807
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
        "offered": 5320,
        "played": 1804,
        "ignored": 4325,
        "selectionRate": 0.33909774436090223,
        "wins": 997,
        "losses": 807,
        "draws": 0,
        "winRateWhenPlayed": 0.552660753880266,
        "averageFlips": 0.3237250554323725,
        "averageDamageDealt": 1.1729490022172948,
        "averageNetDamage": 0.6807095343680709,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 359,
            "winRateWhenPlayed": 0.7409470752089137
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 338,
            "winRateWhenPlayed": 0.5355029585798816
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 317,
            "winRateWhenPlayed": 0.526813880126183
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 290,
            "winRateWhenPlayed": 0.3689655172413793
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 286,
            "winRateWhenPlayed": 0.458041958041958
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
        "offered": 15309,
        "played": 7938,
        "ignored": 12043,
        "selectionRate": 0.5185185185185185,
        "wins": 4286,
        "losses": 3652,
        "draws": 0,
        "winRateWhenPlayed": 0.5399344923154447,
        "averageFlips": 0.3356009070294785,
        "averageDamageDealt": 0.5888133030990174,
        "averageNetDamage": 0.3769211388259007,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 418,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 395,
            "winRateWhenPlayed": 0.4810126582278481
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.7821522309711286
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 378,
            "winRateWhenPlayed": 0.3492063492063492
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 377,
            "winRateWhenPlayed": 0.363395225464191
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
        "count": 414,
        "wins": 196,
        "losses": 218,
        "draws": 0,
        "winRate": 0.47342995169082125,
        "averageFlips": 0.2560386473429952,
        "averageDamageDealt": 0.8913043478260869,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 405,
        "wins": 303,
        "losses": 102,
        "draws": 0,
        "winRate": 0.7481481481481481,
        "averageFlips": 0.35802469135802467,
        "averageDamageDealt": 0.9925925925925926,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 380,
        "wins": 104,
        "losses": 276,
        "draws": 0,
        "winRate": 0.2736842105263158,
        "averageFlips": 0.22631578947368422,
        "averageDamageDealt": 0.6631578947368421,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 373,
        "wins": 159,
        "losses": 214,
        "draws": 0,
        "winRate": 0.4262734584450402,
        "averageFlips": 0.2680965147453083,
        "averageDamageDealt": 0.7908847184986595,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 348,
        "wins": 187,
        "losses": 161,
        "draws": 0,
        "winRate": 0.5373563218390804,
        "averageFlips": 0.19827586206896552,
        "averageDamageDealt": 1.6925287356321839,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 333,
        "wins": 157,
        "losses": 176,
        "draws": 0,
        "winRate": 0.47147147147147145,
        "averageFlips": 0.2072072072072072,
        "averageDamageDealt": 0.21021021021021022,
        "averageEffectAmount": 1.078078078078078,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 324,
        "wins": 168,
        "losses": 156,
        "draws": 0,
        "winRate": 0.5185185185185185,
        "averageFlips": 0.37037037037037035,
        "averageDamageDealt": 0.8672839506172839,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 320,
        "wins": 251,
        "losses": 69,
        "draws": 0,
        "winRate": 0.784375,
        "averageFlips": 0.31875,
        "averageDamageDealt": 0.28125,
        "averageEffectAmount": 1.190625,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 296,
        "wins": 133,
        "losses": 163,
        "draws": 0,
        "winRate": 0.44932432432432434,
        "averageFlips": 0.18243243243243243,
        "averageDamageDealt": 0.06418918918918919,
        "averageEffectAmount": 1.0844594594594594,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 293,
        "wins": 223,
        "losses": 70,
        "draws": 0,
        "winRate": 0.7610921501706485,
        "averageFlips": 0.3378839590443686,
        "averageDamageDealt": 2.092150170648464,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 285,
        "wins": 145,
        "losses": 140,
        "draws": 0,
        "winRate": 0.5087719298245614,
        "averageFlips": 0.23859649122807017,
        "averageDamageDealt": 0.031578947368421054,
        "averageEffectAmount": 1.0035087719298246,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 284,
        "wins": 145,
        "losses": 139,
        "draws": 0,
        "winRate": 0.5105633802816901,
        "averageFlips": 0.23943661971830985,
        "averageDamageDealt": 0.03169014084507042,
        "averageEffectAmount": 1.25,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 284,
        "wins": 106,
        "losses": 178,
        "draws": 0,
        "winRate": 0.3732394366197183,
        "averageFlips": 0.24647887323943662,
        "averageDamageDealt": 0.15140845070422534,
        "averageEffectAmount": 1.2922535211267605,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 284,
        "wins": 91,
        "losses": 193,
        "draws": 0,
        "winRate": 0.3204225352112676,
        "averageFlips": 0.23943661971830985,
        "averageDamageDealt": 0.2992957746478873,
        "averageEffectAmount": 1.7077464788732395,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 281,
        "wins": 104,
        "losses": 177,
        "draws": 0,
        "winRate": 0.3701067615658363,
        "averageFlips": 0.24555160142348753,
        "averageDamageDealt": 0.15302491103202848,
        "averageEffectAmount": 1.295373665480427,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 280,
        "wins": 98,
        "losses": 182,
        "draws": 0,
        "winRate": 0.35,
        "averageFlips": 0.24642857142857144,
        "averageDamageDealt": 0.03571428571428571,
        "averageEffectAmount": 1.225,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 274,
        "wins": 126,
        "losses": 148,
        "draws": 0,
        "winRate": 0.45985401459854014,
        "averageFlips": 0.25547445255474455,
        "averageDamageDealt": 0.145985401459854,
        "averageEffectAmount": 1.22992700729927,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 267,
        "wins": 120,
        "losses": 147,
        "draws": 0,
        "winRate": 0.449438202247191,
        "averageFlips": 0.25842696629213485,
        "averageDamageDealt": 0.18352059925093633,
        "averageEffectAmount": 1.3108614232209739,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 252,
        "wins": 126,
        "losses": 126,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.1349206349206349,
        "averageDamageDealt": 2.003968253968254,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 244,
        "wins": 193,
        "losses": 51,
        "draws": 0,
        "winRate": 0.7909836065573771,
        "averageFlips": 0.32786885245901637,
        "averageDamageDealt": 0.22131147540983606,
        "averageEffectAmount": 1.430327868852459,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 232,
        "wins": 75,
        "losses": 157,
        "draws": 0,
        "winRate": 0.3232758620689655,
        "averageFlips": 0.10775862068965517,
        "averageDamageDealt": 1.5172413793103448,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 228,
        "wins": 164,
        "losses": 64,
        "draws": 0,
        "winRate": 0.7192982456140351,
        "averageFlips": 0.43859649122807015,
        "averageDamageDealt": 1.1228070175438596,
        "averageEffectAmount": 2.4473684210526314,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 205,
        "wins": 128,
        "losses": 77,
        "draws": 0,
        "winRate": 0.624390243902439,
        "averageFlips": 0.2146341463414634,
        "averageDamageDealt": 2.1658536585365855,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 203,
        "wins": 159,
        "losses": 44,
        "draws": 0,
        "winRate": 0.7832512315270936,
        "averageFlips": 0.23645320197044334,
        "averageDamageDealt": 0.8374384236453202,
        "averageEffectAmount": 1.2561576354679802,
        "notes": [
          "Combo gagnant frequent."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 755,
        "id": "card-field-knight-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Chevaliere des champs sous-performe",
        "detail": "361 plays, 34% win, net PV 0.34.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 520,
        "id": "card-quiet-monk-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil sous-performe",
        "detail": "378 plays, 35% win, net PV 0.03.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2656,
        "id": "family-automaton-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "automaton domine l'echantillon",
        "detail": "1462 plays, 75% win, net PV 0.37.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 1643,
        "id": "family-demon-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "demon domine l'echantillon",
        "detail": "854 plays, 66% win, net PV 1.08.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2718,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "2718 offres, 52% selection, 35% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:automaton->automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 405,
        "title": "automaton -> automaton ressort comme combo",
        "detail": "405 occurrences, 75% win, 0.36 flips, 0.99 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gear-monk:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 320,
        "title": "Moine engrene -> draw-next-turn ressort comme combo",
        "detail": "320 occurrences, 78% win, 0.32 flips, 0.28 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 293,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "293 occurrences, 76% win, 0.34 flips, 2.09 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:revenant+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 252,
        "title": "revenant allie + revenant ressort comme combo",
        "detail": "252 occurrences, 50% win, 0.13 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gear-monk:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 244,
        "title": "Moine engrene -> boost-self ressort comme combo",
        "detail": "244 occurrences, 79% win, 0.33 flips, 0.22 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 205,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "205 occurrences, 62% win, 0.21 flips, 2.17 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:clock-sentinel:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 203,
        "title": "Sentinelle d'horloge -> boost-self ressort comme combo",
        "detail": "203 occurrences, 78% win, 0.24 flips, 0.84 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7994328435163702,
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
          "apply-poison",
          "draw-next-turn"
        ],
        "buildTags": [],
        "preferredPositions": [],
        "offered": 118,
        "played": 9,
        "ignored": 114,
        "selectionRate": 0.07627118644067797,
        "wins": 6,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.625,
        "averageFlipMargin": 3.3333333333333335,
        "averageEffectAmount": 0.7777777777777778,
        "averageDamageDealt": 5.777777777777778,
        "averageDamageTaken": 3.5555555555555554,
        "averageNetDamage": 2.2222222222222223,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.75
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 9,
            "winRate": 0.6666666666666666
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
        "offered": 29,
        "played": 2,
        "ignored": 29,
        "selectionRate": 0.06896551724137931,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 1,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 2.5,
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
        "sourceType": "enemy-upgrade",
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
        "offered": 14,
        "played": 2,
        "ignored": 13,
        "selectionRate": 0.14285714285714285,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 1,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 4,
        "averageEffectAmount": 0,
        "averageDamageDealt": 5,
        "averageDamageTaken": 4,
        "averageNetDamage": 1,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
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
        "offered": 63,
        "played": 39,
        "ignored": 46,
        "selectionRate": 0.6190476190476191,
        "wins": 23,
        "losses": 16,
        "draws": 0,
        "winRateWhenPlayed": 0.5897435897435898,
        "averageFlips": 0.3076923076923077,
        "failedImpactRate": 0.3684210526315789,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 3.923076923076923,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "expert",
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
            "played": 39,
            "winRate": 0.5897435897435898
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "offered": 71,
        "played": 30,
        "ignored": 55,
        "selectionRate": 0.4225352112676056,
        "wins": 14,
        "losses": 16,
        "draws": 0,
        "winRateWhenPlayed": 0.4666666666666667,
        "averageFlips": 0.2,
        "failedImpactRate": 0.7692307692307693,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.6333333333333333,
        "averageDamageDealt": 1.6666666666666667,
        "averageDamageTaken": 0.06666666666666667,
        "averageNetDamage": 1.6,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 28,
            "winRate": 0.42857142857142855
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
            "played": 30,
            "winRate": 0.4666666666666667
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "offered": 61,
        "played": 29,
        "ignored": 51,
        "selectionRate": 0.47540983606557374,
        "wins": 14,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.4827586206896552,
        "averageFlips": 0.3448275862068966,
        "failedImpactRate": 0.5454545454545454,
        "averageFlipMargin": 1.4,
        "averageEffectAmount": 2.7241379310344827,
        "averageDamageDealt": 0.10344827586206896,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.10344827586206896,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0.4583333333333333
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.6
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 29,
            "winRate": 0.4827586206896552
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "offered": 25,
        "played": 12,
        "ignored": 19,
        "selectionRate": 0.48,
        "wins": 5,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.4166666666666667,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.42857142857142855,
        "averageFlipMargin": 1.25,
        "averageEffectAmount": 0.6666666666666666,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.2857142857142857
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0.75
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
            "played": 12,
            "winRate": 0.4166666666666667
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 80%."
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
        "offered": 9,
        "played": 7,
        "ignored": 9,
        "selectionRate": 0.7777777777777778,
        "wins": 4,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.8571428571428571,
        "failedImpactRate": 0.14285714285714285,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 3.142857142857143,
        "averageDamageDealt": 1.1428571428571428,
        "averageDamageTaken": 1,
        "averageNetDamage": 0.1428571428571428,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "regular",
            "played": 2,
            "winRate": 0.5
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
        "offered": 749,
        "played": 500,
        "ignored": 590,
        "selectionRate": 0.6675567423230975,
        "wins": 401,
        "losses": 99,
        "draws": 0,
        "winRateWhenPlayed": 0.802,
        "averageFlips": 0.32,
        "failedImpactRate": 0.41818181818181815,
        "averageFlipMargin": 2.2625,
        "averageEffectAmount": 3.434,
        "averageDamageDealt": 0.354,
        "averageDamageTaken": 0.102,
        "averageNetDamage": 0.252,
        "lethalMoves": 7,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "expert",
            "played": 216,
            "winRate": 0.8379629629629629
          },
          {
            "modelId": "regular",
            "played": 213,
            "winRate": 0.7981220657276995
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.9166666666666666
          },
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0.5483870967741935
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
            "played": 500,
            "winRate": 0.802
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
        "offered": 622,
        "played": 455,
        "ignored": 462,
        "selectionRate": 0.7315112540192926,
        "wins": 359,
        "losses": 96,
        "draws": 0,
        "winRateWhenPlayed": 0.789010989010989,
        "averageFlips": 0.3274725274725275,
        "failedImpactRate": 0.4716312056737589,
        "averageFlipMargin": 2.033557046979866,
        "averageEffectAmount": 2.654945054945055,
        "averageDamageDealt": 0.23296703296703297,
        "averageDamageTaken": 0.07472527472527472,
        "averageNetDamage": 0.15824175824175823,
        "lethalMoves": 5,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 219,
            "winRate": 0.7853881278538812
          },
          {
            "modelId": "expert",
            "played": 213,
            "winRate": 0.8262910798122066
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0.4782608695652174
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 455,
            "winRate": 0.789010989010989
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
        "offered": 749,
        "played": 423,
        "ignored": 580,
        "selectionRate": 0.5647530040053405,
        "wins": 335,
        "losses": 88,
        "draws": 0,
        "winRateWhenPlayed": 0.7919621749408984,
        "averageFlips": 0.3262411347517731,
        "failedImpactRate": 0.46511627906976744,
        "averageFlipMargin": 1.9420289855072463,
        "averageEffectAmount": 3,
        "averageDamageDealt": 0.5531914893617021,
        "averageDamageTaken": 0.14893617021276595,
        "averageNetDamage": 0.4042553191489362,
        "lethalMoves": 10,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "expert",
            "played": 201,
            "winRate": 0.845771144278607
          },
          {
            "modelId": "regular",
            "played": 197,
            "winRate": 0.7868020304568528
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.4
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 423,
            "winRate": 0.7919621749408984
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
        "played": 348,
        "ignored": 925,
        "selectionRate": 0.3028720626631854,
        "wins": 298,
        "losses": 50,
        "draws": 0,
        "winRateWhenPlayed": 0.8563218390804598,
        "averageFlips": 0.2959770114942529,
        "failedImpactRate": 0.6254545454545455,
        "averageFlipMargin": 2.2524271844660193,
        "averageEffectAmount": 0.6724137931034483,
        "averageDamageDealt": 2.7988505747126435,
        "averageDamageTaken": 0.5086206896551724,
        "averageNetDamage": 2.290229885057471,
        "lethalMoves": 37,
        "roundClosers": 93,
        "byModel": [
          {
            "modelId": "expert",
            "played": 149,
            "winRate": 0.8993288590604027
          },
          {
            "modelId": "regular",
            "played": 144,
            "winRate": 0.8958333333333334
          },
          {
            "modelId": "beginner",
            "played": 35,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 348,
            "winRate": 0.8563218390804598
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
        "offered": 409,
        "played": 287,
        "ignored": 285,
        "selectionRate": 0.7017114914425427,
        "wins": 248,
        "losses": 39,
        "draws": 0,
        "winRateWhenPlayed": 0.8641114982578397,
        "averageFlips": 0.2961672473867596,
        "failedImpactRate": 0.4178082191780822,
        "averageFlipMargin": 2.1176470588235294,
        "averageEffectAmount": 4.944250871080139,
        "averageDamageDealt": 0.42857142857142855,
        "averageDamageTaken": 0.1602787456445993,
        "averageNetDamage": 0.2682926829268293,
        "lethalMoves": 2,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "champion",
            "played": 261,
            "winRate": 0.8697318007662835
          },
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.8888888888888888
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
            "played": 287,
            "winRate": 0.8641114982578397
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
        "offered": 358,
        "played": 249,
        "ignored": 283,
        "selectionRate": 0.6955307262569832,
        "wins": 222,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.891566265060241,
        "averageFlips": 0.46987951807228917,
        "failedImpactRate": 0.3641304347826087,
        "averageFlipMargin": 2.341880341880342,
        "averageEffectAmount": 4.152610441767068,
        "averageDamageDealt": 0.6626506024096386,
        "averageDamageTaken": 0.1646586345381526,
        "averageNetDamage": 0.497991967871486,
        "lethalMoves": 6,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "champion",
            "played": 247,
            "winRate": 0.8906882591093117
          },
          {
            "modelId": "opportunist",
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
            "played": 249,
            "winRate": 0.891566265060241
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
        "offered": 371,
        "played": 233,
        "ignored": 285,
        "selectionRate": 0.628032345013477,
        "wins": 210,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.9012875536480687,
        "averageFlips": 0.2703862660944206,
        "failedImpactRate": 0.38235294117647056,
        "averageFlipMargin": 2.5555555555555554,
        "averageEffectAmount": 6.0257510729613735,
        "averageDamageDealt": 1.0343347639484979,
        "averageDamageTaken": 0.15879828326180256,
        "averageNetDamage": 0.8755364806866953,
        "lethalMoves": 10,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "champion",
            "played": 231,
            "winRate": 0.9004329004329005
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 233,
            "winRate": 0.9012875536480687
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
        "offered": 571,
        "played": 231,
        "ignored": 464,
        "selectionRate": 0.404553415061296,
        "wins": 209,
        "losses": 22,
        "draws": 0,
        "winRateWhenPlayed": 0.9047619047619048,
        "averageFlips": 0.38095238095238093,
        "failedImpactRate": 0.5510204081632653,
        "averageFlipMargin": 3.0795454545454546,
        "averageEffectAmount": 3.406926406926407,
        "averageDamageDealt": 2.121212121212121,
        "averageDamageTaken": 0.37662337662337664,
        "averageNetDamage": 1.7445887445887445,
        "lethalMoves": 16,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "champion",
            "played": 214,
            "winRate": 0.9112149532710281
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 7,
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
            "played": 231,
            "winRate": 0.9047619047619048
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
        "offered": 273,
        "played": 197,
        "ignored": 200,
        "selectionRate": 0.7216117216117216,
        "wins": 136,
        "losses": 61,
        "draws": 0,
        "winRateWhenPlayed": 0.6903553299492385,
        "averageFlips": 0.7055837563451777,
        "failedImpactRate": 0.18235294117647058,
        "averageFlipMargin": 2.58273381294964,
        "averageEffectAmount": 1.3604060913705585,
        "averageDamageDealt": 1.3248730964467006,
        "averageDamageTaken": 0.03553299492385787,
        "averageNetDamage": 1.2893401015228427,
        "lethalMoves": 6,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.6548672566371682
          },
          {
            "modelId": "regular",
            "played": 24,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.6956521739130435
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.9473684210526315
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 197,
            "winRate": 0.6903553299492385
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
        "offered": 368,
        "played": 186,
        "ignored": 277,
        "selectionRate": 0.5054347826086957,
        "wins": 131,
        "losses": 55,
        "draws": 0,
        "winRateWhenPlayed": 0.7043010752688172,
        "averageFlips": 0.5860215053763441,
        "failedImpactRate": 0.2781456953642384,
        "averageFlipMargin": 2.7155963302752295,
        "averageEffectAmount": 1.0376344086021505,
        "averageDamageDealt": 2.204301075268817,
        "averageDamageTaken": 0.510752688172043,
        "averageNetDamage": 1.693548387096774,
        "lethalMoves": 14,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 118,
            "winRate": 0.652542372881356
          },
          {
            "modelId": "regular",
            "played": 19,
            "winRate": 0.8421052631578947
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 17,
            "winRate": 0.8823529411764706
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.7857142857142857
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 186,
            "winRate": 0.7043010752688172
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
        "offered": 217,
        "played": 128,
        "ignored": 172,
        "selectionRate": 0.5898617511520737,
        "wins": 92,
        "losses": 36,
        "draws": 0,
        "winRateWhenPlayed": 0.71875,
        "averageFlips": 0.828125,
        "failedImpactRate": 0.11666666666666667,
        "averageFlipMargin": 2.6226415094339623,
        "averageEffectAmount": 1.0390625,
        "averageDamageDealt": 1.2734375,
        "averageDamageTaken": 0.109375,
        "averageNetDamage": 1.1640625,
        "lethalMoves": 5,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 97,
            "winRate": 0.7010309278350515
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.65
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 1
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
            "played": 128,
            "winRate": 0.71875
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
        "offered": 309,
        "played": 90,
        "ignored": 263,
        "selectionRate": 0.2912621359223301,
        "wins": 69,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.7666666666666667,
        "averageFlips": 0.6111111111111112,
        "failedImpactRate": 0.36046511627906974,
        "averageFlipMargin": 2.8363636363636364,
        "averageEffectAmount": 1.0222222222222221,
        "averageDamageDealt": 6.2,
        "averageDamageTaken": 1.2222222222222223,
        "averageNetDamage": 4.977777777777778,
        "lethalMoves": 19,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 74,
            "winRate": 0.7567567567567568
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.8125
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 90,
            "winRate": 0.7666666666666667
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
        "offered": 149,
        "played": 70,
        "ignored": 119,
        "selectionRate": 0.4697986577181208,
        "wins": 53,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.7571428571428571,
        "averageFlips": 0.34285714285714286,
        "failedImpactRate": 0.42857142857142855,
        "averageFlipMargin": 1.3333333333333333,
        "averageEffectAmount": 1.7428571428571429,
        "averageDamageDealt": 0.9571428571428572,
        "averageDamageTaken": 0.17142857142857143,
        "averageNetDamage": 0.7857142857142858,
        "lethalMoves": 5,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 28,
            "winRate": 0.8928571428571429
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 15,
            "winRate": 0.7333333333333333
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          },
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
            "played": 70,
            "winRate": 0.7571428571428571
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
        "offered": 245,
        "played": 62,
        "ignored": 213,
        "selectionRate": 0.2530612244897959,
        "wins": 41,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.6612903225806451,
        "averageFlips": 0.20967741935483872,
        "failedImpactRate": 0.6829268292682927,
        "averageFlipMargin": 3.3846153846153846,
        "averageEffectAmount": 1.064516129032258,
        "averageDamageDealt": 2.274193548387097,
        "averageDamageTaken": 0.5483870967741935,
        "averageNetDamage": 1.7258064516129035,
        "lethalMoves": 4,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.782608695652174
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.8
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 62,
            "winRate": 0.6612903225806451
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
        "offered": 117,
        "played": 52,
        "ignored": 90,
        "selectionRate": 0.4444444444444444,
        "wins": 44,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.8461538461538461,
        "averageFlips": 0.07692307692307693,
        "failedImpactRate": 0.7894736842105263,
        "averageFlipMargin": 1.75,
        "averageEffectAmount": 1.7692307692307692,
        "averageDamageDealt": 0.15384615384615385,
        "averageDamageTaken": 0.3269230769230769,
        "averageNetDamage": -0.17307692307692307,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.5625
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 10,
            "winRate": 0.9
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 52,
            "winRate": 0.8461538461538461
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
        "offered": 224,
        "played": 51,
        "ignored": 193,
        "selectionRate": 0.22767857142857142,
        "wins": 42,
        "losses": 9,
        "draws": 0,
        "winRateWhenPlayed": 0.8235294117647058,
        "averageFlips": 0.27450980392156865,
        "failedImpactRate": 0.5483870967741935,
        "averageFlipMargin": 3.0714285714285716,
        "averageEffectAmount": 0.6274509803921569,
        "averageDamageDealt": 5.098039215686274,
        "averageDamageTaken": 0.6274509803921569,
        "averageNetDamage": 4.470588235294118,
        "lethalMoves": 13,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 1
          },
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
            "played": 51,
            "winRate": 0.8235294117647058
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
        "offered": 53,
        "played": 32,
        "ignored": 41,
        "selectionRate": 0.6037735849056604,
        "wins": 28,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.875,
        "averageFlips": 0.3125,
        "failedImpactRate": 0.2857142857142857,
        "averageFlipMargin": 1.7,
        "averageEffectAmount": 1.78125,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
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
            "played": 32,
            "winRate": 0.875
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
        "offered": 54,
        "played": 30,
        "ignored": 38,
        "selectionRate": 0.5555555555555556,
        "wins": 20,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.5454545454545454,
        "averageFlipMargin": 2.9,
        "averageEffectAmount": 1.7666666666666666,
        "averageDamageDealt": 0.6666666666666666,
        "averageDamageTaken": 0.5666666666666667,
        "averageNetDamage": 0.09999999999999998,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 1
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
            "played": 30,
            "winRate": 0.6666666666666666
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
        "offered": 56,
        "played": 23,
        "ignored": 48,
        "selectionRate": 0.4107142857142857,
        "wins": 19,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.8260869565217391,
        "averageFlips": 0.34782608695652173,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1.125,
        "averageEffectAmount": 2.217391304347826,
        "averageDamageDealt": 0.9565217391304348,
        "averageDamageTaken": 0.8695652173913043,
        "averageNetDamage": 0.08695652173913049,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0.3333333333333333
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 23,
            "winRate": 0.8260869565217391
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
        "played": 17,
        "ignored": 37,
        "selectionRate": 0.3541666666666667,
        "wins": 11,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.6470588235294118,
        "averageFlips": 0.4117647058823529,
        "failedImpactRate": 0.46153846153846156,
        "averageFlipMargin": 1.2857142857142858,
        "averageEffectAmount": 1.9411764705882353,
        "averageDamageDealt": 3.6470588235294117,
        "averageDamageTaken": 1.411764705882353,
        "averageNetDamage": 2.235294117647059,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.75
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 17,
            "winRate": 0.6470588235294118
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
        "offered": 39,
        "played": 16,
        "ignored": 30,
        "selectionRate": 0.41025641025641024,
        "wins": 13,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.8125,
        "averageFlips": 0.25,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 0.75,
        "averageEffectAmount": 1.9375,
        "averageDamageDealt": 1.5625,
        "averageDamageTaken": 0.125,
        "averageNetDamage": 1.4375,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.25
          },
          {
            "modelId": "champion",
            "played": 3,
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
            "played": 16,
            "winRate": 0.8125
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
        "offered": 44,
        "played": 16,
        "ignored": 33,
        "selectionRate": 0.36363636363636365,
        "wins": 13,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.8125,
        "averageFlips": 0.25,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 0.9375,
        "averageDamageDealt": 2.125,
        "averageDamageTaken": 0,
        "averageNetDamage": 2.125,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 16,
            "winRate": 0.8125
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
        "offered": 23,
        "played": 16,
        "ignored": 17,
        "selectionRate": 0.6956521739130435,
        "wins": 12,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.25,
        "failedImpactRate": 0,
        "averageFlipMargin": 2.75,
        "averageEffectAmount": 1.1875,
        "averageDamageDealt": 0.5625,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.5625,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0.6
          },
          {
            "modelId": "regular",
            "played": 3,
            "winRate": 1
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
            "played": 16,
            "winRate": 0.75
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
        "offered": 17,
        "played": 11,
        "ignored": 10,
        "selectionRate": 0.6470588235294118,
        "wins": 9,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.8181818181818182,
        "averageFlips": 0.36363636363636365,
        "failedImpactRate": 0.5555555555555556,
        "averageFlipMargin": 1.75,
        "averageEffectAmount": 3.4545454545454546,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 1
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
            "played": 11,
            "winRate": 0.8181818181818182
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
        "offered": 18,
        "played": 6,
        "ignored": 15,
        "selectionRate": 0.3333333333333333,
        "wins": 5,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.8333333333333334,
        "averageFlips": 0.5,
        "failedImpactRate": 0.6666666666666666,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 1.3333333333333333,
        "averageDamageDealt": 3.8333333333333335,
        "averageDamageTaken": 1.5,
        "averageNetDamage": 2.3333333333333335,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
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
        "offered": 22,
        "played": 5,
        "ignored": 21,
        "selectionRate": 0.22727272727272727,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0.8,
        "averageDamageDealt": 0.2,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.2,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 4,
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
        "offered": 9,
        "played": 4,
        "ignored": 7,
        "selectionRate": 0.4444444444444444,
        "wins": 1,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.25,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0.75,
        "averageDamageDealt": 0.5,
        "averageDamageTaken": 2.5,
        "averageNetDamage": -2,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0
          },
          {
            "modelId": "regular",
            "played": 1,
            "winRate": 1
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
        "cardId": "generated-4288368927-2",
        "name": "Brindille fragile",
        "family": "familiar",
        "rarity": "common",
        "role": "stabilizer",
        "sourceType": "charm",
        "sideTotal": 5,
        "maxSide": 2,
        "minSide": 1,
        "effectKinds": [],
        "buildTags": [
          "fragile",
          "penalty"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 2,
        "played": 2,
        "ignored": 0,
        "selectionRate": 1,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.5,
        "failedImpactRate": 0,
        "averageFlipMargin": 1,
        "averageEffectAmount": 4,
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
        "offered": 3320,
        "played": 1745,
        "ignored": 2597,
        "selectionRate": 0.5256024096385542,
        "wins": 1405,
        "losses": 340,
        "draws": 0,
        "winRateWhenPlayed": 0.8051575931232091,
        "averageFlips": 0.3197707736389685,
        "averageDamageDealt": 0.8899713467048711,
        "averageNetDamage": 0.6899713467048711,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 500,
            "winRateWhenPlayed": 0.802
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 455,
            "winRateWhenPlayed": 0.789010989010989
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 423,
            "winRateWhenPlayed": 0.7919621749408984
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 348,
            "winRateWhenPlayed": 0.8563218390804598
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 17,
            "winRateWhenPlayed": 0.6470588235294118
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
        "offered": 1839,
        "played": 1067,
        "ignored": 1419,
        "selectionRate": 0.5802066340402393,
        "wins": 933,
        "losses": 134,
        "draws": 0,
        "winRateWhenPlayed": 0.8744142455482662,
        "averageFlips": 0.34957825679475163,
        "averageDamageDealt": 0.9878163074039362,
        "averageNetDamage": 0.7600749765698218,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 287,
            "winRateWhenPlayed": 0.8641114982578397
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 249,
            "winRateWhenPlayed": 0.891566265060241
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 233,
            "winRateWhenPlayed": 0.9012875536480687
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 231,
            "winRateWhenPlayed": 0.9047619047619048
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 39,
            "winRateWhenPlayed": 0.5897435897435898
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
        "offered": 1248,
        "played": 628,
        "ignored": 981,
        "selectionRate": 0.5032051282051282,
        "wins": 444,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.7070063694267515,
        "averageFlips": 0.6687898089171974,
        "averageDamageDealt": 2.270700636942675,
        "averageNetDamage": 1.8837579617834395,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 197,
            "winRateWhenPlayed": 0.6903553299492385
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 186,
            "winRateWhenPlayed": 0.7043010752688172
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 128,
            "winRateWhenPlayed": 0.71875
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 90,
            "winRateWhenPlayed": 0.7666666666666667
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 12,
            "winRateWhenPlayed": 0.4166666666666667
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
        "offered": 365,
        "played": 159,
        "ignored": 289,
        "selectionRate": 0.43561643835616437,
        "wins": 127,
        "losses": 32,
        "draws": 0,
        "winRateWhenPlayed": 0.7987421383647799,
        "averageFlips": 0.25157232704402516,
        "averageDamageDealt": 0.7421383647798742,
        "averageNetDamage": 0.559748427672956,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 70,
            "winRateWhenPlayed": 0.7571428571428571
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 52,
            "winRateWhenPlayed": 0.8461538461538461
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 16,
            "winRateWhenPlayed": 0.8125
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 16,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "generated-4288368927-2",
            "name": "Brindille fragile",
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
        "id": "human",
        "label": "human",
        "offered": 446,
        "played": 154,
        "ignored": 371,
        "selectionRate": 0.3452914798206278,
        "wins": 90,
        "losses": 64,
        "draws": 0,
        "winRateWhenPlayed": 0.5844155844155844,
        "averageFlips": 0.2662337662337662,
        "averageDamageDealt": 1.3896103896103895,
        "averageNetDamage": 1.0454545454545454,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 62,
            "winRateWhenPlayed": 0.6612903225806451
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 30,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 30,
            "winRateWhenPlayed": 0.4666666666666667
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "reward-common-09",
            "name": "Carte commune 09",
            "played": 2,
            "winRateWhenPlayed": 0.5
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
        "offered": 460,
        "played": 126,
        "ignored": 397,
        "selectionRate": 0.27391304347826084,
        "wins": 102,
        "losses": 24,
        "draws": 0,
        "winRateWhenPlayed": 0.8095238095238095,
        "averageFlips": 0.3253968253968254,
        "averageDamageDealt": 2.738095238095238,
        "averageNetDamage": 2.1587301587301586,
        "topCards": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 51,
            "winRateWhenPlayed": 0.8235294117647058
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 32,
            "winRateWhenPlayed": 0.875
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 16,
            "winRateWhenPlayed": 0.8125
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 11,
            "winRateWhenPlayed": 0.8181818181818182
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 9,
            "winRateWhenPlayed": 0.6666666666666666
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
        "offered": 1576,
        "played": 1072,
        "ignored": 1182,
        "selectionRate": 0.6802030456852792,
        "wins": 859,
        "losses": 213,
        "draws": 0,
        "winRateWhenPlayed": 0.8013059701492538,
        "averageFlips": 0.38152985074626866,
        "averageDamageDealt": 0.5774253731343284,
        "averageNetDamage": 0.46641791044776126,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 482,
            "winRateWhenPlayed": 0.8153526970954357
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 263,
            "winRateWhenPlayed": 0.870722433460076
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 196,
            "winRateWhenPlayed": 0.6938775510204082
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 70,
            "winRateWhenPlayed": 0.7571428571428571
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 32,
            "winRateWhenPlayed": 0.875
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
        "offered": 1381,
        "played": 913,
        "ignored": 1064,
        "selectionRate": 0.6611151339608979,
        "wins": 724,
        "losses": 189,
        "draws": 0,
        "winRateWhenPlayed": 0.7929901423877328,
        "averageFlips": 0.4370208105147864,
        "averageDamageDealt": 0.583789704271632,
        "averageNetDamage": 0.45783132530120485,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 455,
            "winRateWhenPlayed": 0.789010989010989
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 249,
            "winRateWhenPlayed": 0.891566265060241
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 128,
            "winRateWhenPlayed": 0.71875
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 17,
            "winRateWhenPlayed": 0.6470588235294118
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
        "offered": 2568,
        "played": 908,
        "ignored": 2075,
        "selectionRate": 0.35358255451713394,
        "wins": 747,
        "losses": 161,
        "draws": 0,
        "winRateWhenPlayed": 0.8226872246696035,
        "averageFlips": 0.3513215859030837,
        "averageDamageDealt": 2.3623348017621146,
        "averageNetDamage": 1.9394273127753305,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 318,
            "winRateWhenPlayed": 0.8710691823899371
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 231,
            "winRateWhenPlayed": 0.9047619047619048
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 180,
            "winRateWhenPlayed": 0.7055555555555556
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 62,
            "winRateWhenPlayed": 0.6612903225806451
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 52,
            "winRateWhenPlayed": 0.8461538461538461
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
        "offered": 1661,
        "played": 852,
        "ignored": 1306,
        "selectionRate": 0.5129440096327513,
        "wins": 681,
        "losses": 171,
        "draws": 0,
        "winRateWhenPlayed": 0.7992957746478874,
        "averageFlips": 0.3345070422535211,
        "averageDamageDealt": 1.352112676056338,
        "averageNetDamage": 1.09037558685446,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 421,
            "winRateWhenPlayed": 0.7957244655581948
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 233,
            "winRateWhenPlayed": 0.9012875536480687
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 90,
            "winRateWhenPlayed": 0.7666666666666667
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 39,
            "winRateWhenPlayed": 0.5897435897435898
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 30,
            "winRateWhenPlayed": 0.4666666666666667
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
        "offered": 359,
        "played": 90,
        "ignored": 308,
        "selectionRate": 0.25069637883008355,
        "wins": 58,
        "losses": 32,
        "draws": 0,
        "winRateWhenPlayed": 0.6444444444444445,
        "averageFlips": 0.4444444444444444,
        "averageDamageDealt": 2.3444444444444446,
        "averageNetDamage": 1.3222222222222224,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 30,
            "winRateWhenPlayed": 0.7
          },
          {
            "cardId": "clock-sentinel",
            "name": "Fusion sylvestre",
            "played": 24,
            "winRateWhenPlayed": 0.7916666666666666
          },
          {
            "cardId": "wandering-glyph",
            "name": "Fusion sylvestre",
            "played": 18,
            "winRateWhenPlayed": 0.4444444444444444
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 8,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "ember-imp",
            "name": "Fusion sylvestre",
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
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 58,
        "played": 25,
        "ignored": 48,
        "selectionRate": 0.43103448275862066,
        "wins": 21,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.84,
        "averageFlips": 0.36,
        "averageDamageDealt": 0.88,
        "averageNetDamage": 0.07999999999999996,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 23,
            "winRateWhenPlayed": 0.8260869565217391
          },
          {
            "cardId": "generated-4288368927-2",
            "name": "Brindille fragile",
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
        "id": "finisher",
        "label": "finisher",
        "offered": 65,
        "played": 11,
        "ignored": 61,
        "selectionRate": 0.16923076923076924,
        "wins": 6,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.45454545454545453,
        "averageDamageDealt": 1.8181818181818181,
        "averageNetDamage": -0.909090909090909,
        "topCards": [
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
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
      },
      {
        "id": "engine",
        "label": "engine",
        "offered": 10,
        "played": 8,
        "ignored": 10,
        "selectionRate": 0.8,
        "wins": 5,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.875,
        "averageDamageDealt": 1,
        "averageNetDamage": 0.125,
        "topCards": [
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
            "played": 7,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 1,
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
        "offered": 7281,
        "played": 3763,
        "ignored": 5708,
        "selectionRate": 0.5168246120038457,
        "wins": 3029,
        "losses": 734,
        "draws": 0,
        "winRateWhenPlayed": 0.8049428647355833,
        "averageFlips": 0.38081318097262823,
        "averageDamageDealt": 1.2120648418814775,
        "averageNetDamage": 0.9739569492426254,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 500,
            "winRateWhenPlayed": 0.802
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 455,
            "winRateWhenPlayed": 0.789010989010989
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 423,
            "winRateWhenPlayed": 0.7919621749408984
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 348,
            "winRateWhenPlayed": 0.8563218390804598
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 287,
            "winRateWhenPlayed": 0.8641114982578397
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
        "offered": 222,
        "played": 97,
        "ignored": 178,
        "selectionRate": 0.4369369369369369,
        "wins": 60,
        "losses": 37,
        "draws": 0,
        "winRateWhenPlayed": 0.6185567010309279,
        "averageFlips": 0.32989690721649484,
        "averageDamageDealt": 0.8762886597938144,
        "averageNetDamage": 0.422680412371134,
        "topCards": [
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 39,
            "winRateWhenPlayed": 0.5897435897435898
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 23,
            "winRateWhenPlayed": 0.8260869565217391
          },
          {
            "cardId": "reward-uncommon-06",
            "name": "Carte inhabituelle 06",
            "played": 17,
            "winRateWhenPlayed": 0.6470588235294118
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 12,
            "winRateWhenPlayed": 0.4166666666666667
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 5,
            "winRateWhenPlayed": 0.4
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
        "offered": 175,
        "played": 19,
        "ignored": 168,
        "selectionRate": 0.10857142857142857,
        "wins": 12,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.631578947368421,
        "averageFlips": 0.42105263157894735,
        "averageDamageDealt": 3.3684210526315788,
        "averageNetDamage": 0.7368421052631575,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 9,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "reward-rare-02",
            "name": "Carte rare 02",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-01",
            "name": "Carte rare 01",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
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
        "count": 469,
        "wins": 377,
        "losses": 92,
        "draws": 0,
        "winRate": 0.8038379530916845,
        "averageFlips": 0.34754797441364604,
        "averageDamageDealt": 1.88272921108742,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 414,
        "wins": 348,
        "losses": 66,
        "draws": 0,
        "winRate": 0.8405797101449275,
        "averageFlips": 0.22705314009661837,
        "averageDamageDealt": 3.6884057971014492,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 297,
        "wins": 238,
        "losses": 59,
        "draws": 0,
        "winRate": 0.8013468013468014,
        "averageFlips": 0.3468013468013468,
        "averageDamageDealt": 0.13804713804713806,
        "averageEffectAmount": 1.0134680134680134,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 296,
        "wins": 237,
        "losses": 59,
        "draws": 0,
        "winRate": 0.8006756756756757,
        "averageFlips": 0.34797297297297297,
        "averageDamageDealt": 0.11824324324324324,
        "averageEffectAmount": 1.3074324324324325,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 276,
        "wins": 242,
        "losses": 34,
        "draws": 0,
        "winRate": 0.8768115942028986,
        "averageFlips": 0.43478260869565216,
        "averageDamageDealt": 1.6920289855072463,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 205,
        "wins": 184,
        "losses": 21,
        "draws": 0,
        "winRate": 0.8975609756097561,
        "averageFlips": 0.45365853658536587,
        "averageDamageDealt": 0.697560975609756,
        "averageEffectAmount": 1.2146341463414634,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 205,
        "wins": 180,
        "losses": 25,
        "draws": 0,
        "winRate": 0.8780487804878049,
        "averageFlips": 0.35121951219512193,
        "averageDamageDealt": 4.2682926829268295,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 181,
        "wins": 156,
        "losses": 25,
        "draws": 0,
        "winRate": 0.861878453038674,
        "averageFlips": 0.3149171270718232,
        "averageDamageDealt": 0.6464088397790055,
        "averageEffectAmount": 1.2430939226519337,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 171,
        "wins": 141,
        "losses": 30,
        "draws": 0,
        "winRate": 0.8245614035087719,
        "averageFlips": 0.3157894736842105,
        "averageDamageDealt": 0.5380116959064327,
        "averageEffectAmount": 1.3391812865497077,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 164,
        "wins": 147,
        "losses": 17,
        "draws": 0,
        "winRate": 0.8963414634146342,
        "averageFlips": 0.38414634146341464,
        "averageDamageDealt": 2.5,
        "averageEffectAmount": 1.951219512195122,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 152,
        "wins": 108,
        "losses": 44,
        "draws": 0,
        "winRate": 0.7105263157894737,
        "averageFlips": 0.743421052631579,
        "averageDamageDealt": 3.6184210526315788,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:tin-oracle:gain-mana-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> gain-mana-next-turn",
        "count": 137,
        "wins": 120,
        "losses": 17,
        "draws": 0,
        "winRate": 0.8759124087591241,
        "averageFlips": 0.11678832116788321,
        "averageDamageDealt": 0.27007299270072993,
        "averageEffectAmount": 1.1751824817518248,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 129,
        "wins": 114,
        "losses": 15,
        "draws": 0,
        "winRate": 0.8837209302325582,
        "averageFlips": 0.4806201550387597,
        "averageDamageDealt": 0.5271317829457365,
        "averageEffectAmount": 1.3488372093023255,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 127,
        "wins": 109,
        "losses": 18,
        "draws": 0,
        "winRate": 0.8582677165354331,
        "averageFlips": 0.11811023622047244,
        "averageDamageDealt": 0.007874015748031496,
        "averageEffectAmount": 2.5354330708661417,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 114,
        "wins": 93,
        "losses": 21,
        "draws": 0,
        "winRate": 0.8157894736842105,
        "averageFlips": 0.08771929824561403,
        "averageDamageDealt": 0.2543859649122807,
        "averageEffectAmount": 4.56140350877193,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:boost-self",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> boost-self",
        "count": 108,
        "wins": 93,
        "losses": 15,
        "draws": 0,
        "winRate": 0.8611111111111112,
        "averageFlips": 0.12037037037037036,
        "averageDamageDealt": 0.4166666666666667,
        "averageEffectAmount": 4.592592592592593,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 101,
        "wins": 75,
        "losses": 26,
        "draws": 0,
        "winRate": 0.7425742574257426,
        "averageFlips": 0.9306930693069307,
        "averageDamageDealt": 1.7227722772277227,
        "averageEffectAmount": 0.594059405940594,
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
        "wins": 70,
        "losses": 22,
        "draws": 0,
        "winRate": 0.7608695652173914,
        "averageFlips": 1.076086956521739,
        "averageDamageDealt": 2.347826086956522,
        "averageEffectAmount": 1.0326086956521738,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 87,
        "wins": 74,
        "losses": 13,
        "draws": 0,
        "winRate": 0.8505747126436781,
        "averageFlips": 0.3563218390804598,
        "averageDamageDealt": 0.7471264367816092,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 80,
        "wins": 71,
        "losses": 9,
        "draws": 0,
        "winRate": 0.8875,
        "averageFlips": 0.125,
        "averageDamageDealt": 5.125,
        "averageEffectAmount": 1.1,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 74,
        "wins": 60,
        "losses": 14,
        "draws": 0,
        "winRate": 0.8108108108108109,
        "averageFlips": 0.40540540540540543,
        "averageDamageDealt": 1.3108108108108107,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 60,
        "wins": 53,
        "losses": 7,
        "draws": 0,
        "winRate": 0.8833333333333333,
        "averageFlips": 0.48333333333333334,
        "averageDamageDealt": 8.416666666666666,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+familiar",
        "kind": "stack-hybrid",
        "label": "arcane + familiar dans la pile",
        "count": 44,
        "wins": 40,
        "losses": 4,
        "draws": 0,
        "winRate": 0.9090909090909091,
        "averageFlips": 0.38636363636363635,
        "averageDamageDealt": 0.7272727272727273,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 39,
        "wins": 32,
        "losses": 7,
        "draws": 0,
        "winRate": 0.8205128205128205,
        "averageFlips": 1.1794871794871795,
        "averageDamageDealt": 3.5641025641025643,
        "averageEffectAmount": 1.205128205128205,
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
        "sampleSize": 71,
        "id": "card-field-knight-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Chevaliere des champs sous-performe",
        "detail": "30 plays, 47% win, net PV 1.60.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 63,
        "id": "card-reward-uncommon-04-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 04 sous-performe",
        "detail": "39 plays, 59% win, net PV 0.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 61,
        "id": "card-rune-mage-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Mage des runes sous-performe",
        "detail": "29 plays, 48% win, net PV 0.10.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 25,
        "id": "card-reward-uncommon-02-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 02 sous-performe",
        "detail": "12 plays, 42% win, net PV 0.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 118,
        "id": "card-reward-rare-05-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Fusion sylvestre est ignoree par les bots",
        "detail": "118 offres, 8% selection, 67% win quand jouee, role sans role.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 29,
        "id": "card-reward-rare-01-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 01 est ignoree par les bots",
        "detail": "29 offres, 7% selection, 100% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 469,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "469 occurrences, 80% win, 0.35 flips, 1.88 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 446,
        "id": "family-human-buff",
        "severity": "watch",
        "action": "verify",
        "title": "human manque d'attraction",
        "detail": "446 offres, 35% selection, 58% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 414,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "414 occurrences, 84% win, 0.23 flips, 3.69 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 222,
        "id": "rarity-uncommon-buff",
        "severity": "watch",
        "action": "verify",
        "title": "uncommon manque d'attraction",
        "detail": "222 offres, 44% selection, 62% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 205,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "205 occurrences, 88% win, 0.35 flips, 4.27 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 175,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "175 offres, 11% selection, 63% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:brass-rook:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 164,
        "title": "Tour de laiton -> boost-self ressort comme combo",
        "detail": "164 occurrences, 90% win, 0.38 flips, 2.50 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 152,
        "title": "demon -> demon ressort comme combo",
        "detail": "152 occurrences, 71% win, 0.74 flips, 3.62 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 101,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "101 occurrences, 74% win, 0.93 flips, 1.72 degats.",
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
        "detail": "92 occurrences, 76% win, 1.08 flips, 2.35 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 80,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "80 occurrences, 89% win, 0.13 flips, 5.13 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 65,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "65 offres, 17% selection, 55% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      }
    ]
  },
  "insights": [
    {
      "id": "skill-inversion-current-family-start-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur Depart actuel - famille 12 cartes (58.3% contre 41.7%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-card-field-knight-buff",
      "severity": "problem",
      "title": "Chevaliere des champs sous-performe",
      "detail": "361 plays, 34% win, net PV 0.34. Confiance high, echantillon 755.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-card-quiet-monk-buff",
      "severity": "problem",
      "title": "Moine du seuil sous-performe",
      "detail": "378 plays, 35% win, net PV 0.03. Confiance high, echantillon 520.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-family-automaton-nerf",
      "severity": "problem",
      "title": "automaton domine l'echantillon",
      "detail": "1462 plays, 75% win, net PV 0.37. Confiance high, echantillon 2656.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-family-demon-nerf",
      "severity": "problem",
      "title": "demon domine l'echantillon",
      "detail": "854 plays, 66% win, net PV 1.08. Confiance high, echantillon 1643.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-adventure-card-field-knight-buff",
      "severity": "problem",
      "title": "Run complet: Chevaliere des champs sous-performe",
      "detail": "30 plays, 47% win, net PV 1.60. Confiance high, echantillon 71.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-reward-uncommon-04-buff",
      "severity": "problem",
      "title": "Run complet: Carte inhabituelle 04 sous-performe",
      "detail": "39 plays, 59% win, net PV 0.00. Confiance high, echantillon 63.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-rune-mage-buff",
      "severity": "problem",
      "title": "Run complet: Mage des runes sous-performe",
      "detail": "29 plays, 48% win, net PV 0.10. Confiance high, echantillon 61.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "champion-underperforms-current-family-start",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 41.7% contre Expert sur Depart actuel - famille 12 cartes.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260627-231720",
        "generatedAt": "2026-06-27T23:17:20.163Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.43919793014230274,
          "human": 0.3510150622134905,
          "automaton": 0.8027981345769487,
          "familiar": 0.5965034965034965,
          "revenant": 0.41514726507713884,
          "demon": 0.68
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-familiar": 1,
          "automaton-vs-revenant": 1,
          "demon-vs-familiar": 1,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "human-vs-revenant": 0.375,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0,
          "regular": 0.25,
          "expert": 0.375,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6808510638297872
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6919642857142857
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34782608695652173
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34541062801932365
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3391959798994975
          }
        ]
      },
      {
        "reportId": "ai-lab-20260628-043920",
        "generatedAt": "2026-06-28T04:39:20.696Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.7053291536050157,
          "arcane": 0.4,
          "human": 0.5925384052670081,
          "familiar": 0.6276758409785933,
          "revenant": 0.29568627450980395,
          "demon": 0.6486161251504212
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "arcane-vs-revenant": 1,
          "automaton-vs-revenant": 1,
          "arcane-vs-human": 0.125,
          "automaton-vs-familiar": 0.875,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5,
          "automaton-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.125
        },
        "cardSignals": [
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34124629080118696
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.26706231454005935
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.311178247734139
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.25555555555555554
          }
        ]
      },
      {
        "reportId": "ai-lab-20260628-100534",
        "generatedAt": "2026-06-28T10:05:34.311Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.8333333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.8030513176144244,
          "familiar": 0.4745011086474501,
          "human": 0.4634146341463415,
          "arcane": 0.5624521072796935,
          "revenant": 0.3238993710691824,
          "demon": 0.6696935300794552
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "arcane-vs-demon": 0.75,
          "arcane-vs-human": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-familiar": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.25,
          "regular": 0,
          "expert": 0.25,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.748898678414097
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.30701754385964913
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.35
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.30149253731343284
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3411764705882353
          }
        ]
      },
      {
        "reportId": "ai-lab-20260628-145715",
        "generatedAt": "2026-06-28T14:57:15.268Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7083333333333334,
          "regular-vs-expert": 0.75,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.9063912201420271,
          "arcane": 0.43636363636363634,
          "human": 0.3160112359550562,
          "familiar": 0.6057479734708917,
          "revenant": 0.31762917933130697,
          "demon": 0.6817625458996328
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "arcane-vs-automaton": 0.25,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.375,
          "automaton-vs-demon": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.25,
          "expert": 0.125,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6923076923076923
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.702020202020202
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3230769230769231
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "status": "underperformer",
            "winRateWhenPlayed": 0.31362467866323906
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "status": "underperformer",
            "winRateWhenPlayed": 0.33516483516483514
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.307909604519774
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.30857142857142855
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2846975088967972
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2857142857142857
          }
        ]
      },
      {
        "reportId": "ai-lab-20260628-194456",
        "generatedAt": "2026-06-28T19:44:56.974Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.554002541296061,
          "automaton": 0.6679815910585142,
          "familiar": 0.6282871357498223,
          "human": 0.47113328581610836,
          "revenant": 0.2753623188405797,
          "demon": 0.65
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "arcane-vs-revenant": 1,
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-revenant": 0.75,
          "familiar-vs-revenant": 0.75,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "automaton-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.125,
          "expert": 0.375,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.25935828877005346
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2802197802197802
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.27977839335180055
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2846975088967972
          }
        ]
      },
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
      }
    ],
    "signals": [
      {
        "id": "trend-starter-matchup-automaton-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 89% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.8854166666666666
      },
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "74% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.7432152084420155
      },
      {
        "id": "trend-starter-matchup-demon-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs human reste desequilibre",
        "detail": "La famille de gauche gagne 79% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.7916666666666666
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
        "averageRate": 0.38614549953267413
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 77% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.7708333333333334
      },
      {
        "id": "trend-starter-matchup-arcane-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 78% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.78125
      },
      {
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 80% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.8020833333333334
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 80% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 8,
        "averageRate": 0.8020833333333334
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 24% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.23958333333333334
      },
      {
        "id": "trend-family-demon",
        "kind": "family",
        "severity": "watch",
        "title": "demon reste trop forte",
        "detail": "64% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.6425881005552263
      },
      {
        "id": "trend-starter-matchup-demon-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 67% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.6666666666666666
      },
      {
        "id": "trend-card-grave-child",
        "kind": "card",
        "severity": "watch",
        "title": "Enfant des tombes reste trop faible",
        "detail": "Signal present dans 6/12 rapports, avec 30% de victoire moyenne.",
        "recommendation": "Faire un ajustement cible et mesurer sa disparition sur plusieurs rapports.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.3015730099043484
      },
      {
        "id": "trend-card-widow-knight",
        "kind": "card",
        "severity": "watch",
        "title": "Chevalier veuf reste trop faible",
        "detail": "Signal present dans 6/12 rapports, avec 30% de victoire moyenne.",
        "recommendation": "Faire un ajustement cible et mesurer sa disparition sur plusieurs rapports.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.2999104990198039
      }
    ]
  }
};
