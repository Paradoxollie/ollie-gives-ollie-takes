import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260617-192441",
  "generatedAt": "2026-06-17T19:24:41.762Z",
  "config": {
    "matchesPerPairing": 24,
    "adventureRunsPerModel": 8,
    "seed": 193,
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
      "averageHpEdge": -19.583333333333332
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 30,
      "losses": 18,
      "draws": 0,
      "winRate": 0.625,
      "averageHpEdge": 6.666666666666667
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 20,
      "losses": 28,
      "draws": 0,
      "winRate": 0.4166666666666667,
      "averageHpEdge": -2.3958333333333335
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 33,
      "losses": 15,
      "draws": 0,
      "winRate": 0.6875,
      "averageHpEdge": 5.520833333333333
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
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 31.833333333333332,
        "rounds": 3.5,
        "flipsPerMatch": 8,
        "flipsPerTurn": 0.2513089005235602,
        "reshuffles": 5,
        "deadTurns": 0.9166666666666666,
        "finalHpDifference": 12.333333333333334
      },
      "deadTurnFrequency": 0.028795811518324606,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce depart."
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
      "leftWins": 3,
      "rightWins": 5,
      "draws": 0,
      "leftWinRate": 0.375,
      "rightWinRate": 0.625
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
          "averageHpEdge": -19.583333333333332
        },
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 23,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9583333333333334,
          "averageHpEdge": 19.583333333333332
        }
      ],
      "averages": {
        "turns": 21.125,
        "rounds": 2.2916666666666665,
        "flipsPerMatch": 9.333333333333334,
        "flipsPerTurn": 0.4418145956607495,
        "reshuffles": 2.5833333333333335,
        "deadTurns": 0.75,
        "finalHpDifference": 20.416666666666668
      },
      "deadTurnFrequency": 0.03550295857988166
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
          "wins": 6,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 24,
          "wins": 7,
          "losses": 17,
          "draws": 0,
          "winRate": 0.2916666666666667,
          "averageHpEdge": -6.25
        },
        {
          "modelId": "regular",
          "games": 24,
          "wins": 17,
          "losses": 7,
          "draws": 0,
          "winRate": 0.7083333333333334,
          "averageHpEdge": 6.25
        }
      ],
      "averages": {
        "turns": 31.25,
        "rounds": 3.25,
        "flipsPerMatch": 8,
        "flipsPerTurn": 0.256,
        "reshuffles": 4.5,
        "deadTurns": 2.2916666666666665,
        "finalHpDifference": 14.5
      },
      "deadTurnFrequency": 0.07333333333333333
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
          "wins": 3,
          "losses": 21,
          "draws": 0,
          "winRate": 0.125,
          "averageHpEdge": -11.041666666666666
        },
        {
          "modelId": "expert",
          "games": 24,
          "wins": 21,
          "losses": 3,
          "draws": 0,
          "winRate": 0.875,
          "averageHpEdge": 11.041666666666666
        }
      ],
      "averages": {
        "turns": 30,
        "rounds": 3.25,
        "flipsPerMatch": 7.041666666666667,
        "flipsPerTurn": 0.23472222222222222,
        "reshuffles": 4.5,
        "deadTurns": 1,
        "finalHpDifference": 11.625
      },
      "deadTurnFrequency": 0.03333333333333333
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
          "wins": 2,
          "winRate": 0.16666666666666666
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
        "turns": 33.166666666666664,
        "rounds": 3.5833333333333335,
        "flipsPerMatch": 8.25,
        "flipsPerTurn": 0.24874371859296482,
        "reshuffles": 5.166666666666667,
        "deadTurns": 0.9166666666666666,
        "finalHpDifference": 13.333333333333334
      },
      "deadTurnFrequency": 0.02763819095477387
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
      "averageLocationsCleared": 3.5,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 1.5,
      "averageCombatWinRate": 0.6,
      "averageCombatTurns": 23.75,
      "averageCombatFlips": 7.1,
      "averageDeadTurns": 4.4,
      "averageReshuffles": 2.9,
      "averageRewardsClaimed": 1.75,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.5,
      "averageRemovals": 0,
      "averageFusions": 0.25,
      "familyPickRates": {
        "familiar": 0.125,
        "demon": 0.25,
        "human": 0.25,
        "automaton": 0.25,
        "revenant": 0.125
      },
      "nodeMix": {
        "combat": 0.7142857142857143,
        "elite": 0,
        "shop": 0.07142857142857142,
        "chest": 0.07142857142857142,
        "rest": 0.14285714285714285,
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
      "averageLocationsCleared": 5.375,
      "averageFinalDeckSize": 12.625,
      "averageDeckDelta": 0.625,
      "averageCombatWinRate": 0.65,
      "averageCombatTurns": 13.6,
      "averageCombatFlips": 6.65,
      "averageDeadTurns": 1.5,
      "averageReshuffles": 1.15,
      "averageRewardsClaimed": 2.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.5,
      "averageRemovals": 1.125,
      "averageFusions": 0.625,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.37777777777777777,
        "elite": 0.022222222222222223,
        "shop": 0.1111111111111111,
        "chest": 0.15555555555555556,
        "rest": 0.28888888888888886,
        "boss": 0.044444444444444446
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 8,
      "victories": 1,
      "bossReached": 3,
      "victoryRate": 0.125,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 5.25,
      "averageFinalDeckSize": 13.125,
      "averageDeckDelta": 1.125,
      "averageCombatWinRate": 0.7083333333333334,
      "averageCombatTurns": 26.458333333333332,
      "averageCombatFlips": 5.083333333333333,
      "averageDeadTurns": 4.25,
      "averageReshuffles": 3.7083333333333335,
      "averageRewardsClaimed": 2.875,
      "averageRewardsSkipped": 0,
      "averageCharms": 1.125,
      "averageUpgrades": 0,
      "averageRemovals": 0.875,
      "averageFusions": 0.875,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.4222222222222222,
        "elite": 0.044444444444444446,
        "shop": 0.15555555555555556,
        "chest": 0.15555555555555556,
        "rest": 0.15555555555555556,
        "boss": 0.06666666666666667
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 2,
      "bossReached": 3,
      "victoryRate": 0.25,
      "bossReachRate": 0.375,
      "averageLocationsCleared": 6.375,
      "averageFinalDeckSize": 14.75,
      "averageDeckDelta": 2.75,
      "averageCombatWinRate": 0.8064516129032258,
      "averageCombatTurns": 29.70967741935484,
      "averageCombatFlips": 5.741935483870968,
      "averageDeadTurns": 4.645161290322581,
      "averageReshuffles": 4.580645161290323,
      "averageRewardsClaimed": 4.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1.125,
      "averageFusions": 0.375,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.46296296296296297,
        "elite": 0.05555555555555555,
        "shop": 0.05555555555555555,
        "chest": 0.2037037037037037,
        "rest": 0.16666666666666666,
        "boss": 0.05555555555555555
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
      "averageFinalDeckSize": 13.125,
      "averageDeckDelta": 1.125,
      "averageCombatWinRate": 0.8571428571428571,
      "averageCombatTurns": 23.75,
      "averageCombatFlips": 6.535714285714286,
      "averageDeadTurns": 3.857142857142857,
      "averageReshuffles": 2.7142857142857144,
      "averageRewardsClaimed": 4.125,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.5,
      "averageRemovals": 0.875,
      "averageFusions": 2.125,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.2898550724637681,
        "elite": 0.014492753623188406,
        "shop": 0.2463768115942029,
        "chest": 0.18840579710144928,
        "rest": 0.15942028985507245,
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
      "seed": 1827579245,
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
      "totalCombatTurns": 65,
      "totalCombatFlips": 18,
      "totalDeadTurns": 11,
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
        "human": 12,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1810801626,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 51,
      "totalCombatFlips": 21,
      "totalDeadTurns": 6,
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
      "upgrades": 2,
      "removals": 0,
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
        "demon": 11,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "chest",
          "title": "Tresor des racines",
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
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
      "runIndex": 2,
      "modelId": "beginner",
      "seed": 1794024007,
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
      "totalCombatTurns": 85,
      "totalCombatFlips": 19,
      "totalDeadTurns": 22,
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
        "demon": 1,
        "human": 12,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 38,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1777246388,
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
      "totalCombatTurns": 66,
      "totalCombatFlips": 18,
      "totalDeadTurns": 12,
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
        "demon": 13,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "title": "Duel des fougeres",
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
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
      "runIndex": 4,
      "modelId": "beginner",
      "seed": 1760468769,
      "selectedFamily": "familiar",
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
      "totalCombatTurns": 77,
      "totalCombatFlips": 26,
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
        "first-breath"
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
          "combatTurns": 23,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 5,
      "modelId": "beginner",
      "seed": 1743691150,
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
      "totalCombatTurns": 24,
      "totalCombatFlips": 3,
      "totalDeadTurns": 6,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 24,
          "combatFlips": 3,
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
      "modelId": "beginner",
      "seed": 1726913531,
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
      "totalCombatTurns": 63,
      "totalCombatFlips": 23,
      "totalDeadTurns": 9,
      "totalReshuffles": 10,
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
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 14,
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
          "combatTurns": 27,
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
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 9,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1710135912,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 14,
      "totalDeadTurns": 8,
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
        "old-bridge-stone"
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 11,
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
      "seed": 4023798588,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 31,
      "totalCombatFlips": 16,
      "totalDeadTurns": 4,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 9,
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
      "runIndex": 1,
      "modelId": "opportunist",
      "seed": 4040576207,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 11,
      "deckDelta": -1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 28,
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
        "old-bridge-stone"
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
        "chest": 1,
        "rest": 3,
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
        "common": 10,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 2,
      "modelId": "opportunist",
      "seed": 4057353826,
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
      "totalCombatTurns": 32,
      "totalCombatFlips": 12,
      "totalDeadTurns": 5,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 21,
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
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 4074131445,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 44,
      "totalCombatFlips": 13,
      "totalDeadTurns": 8,
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
        "moss-dust"
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
        "chest": 2,
        "rest": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "seed": 3956688112,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 24,
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
        "moss-dust"
      ],
      "campVisits": 6,
      "upgrades": 4,
      "removals": 2,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 1,
        "chest": 0,
        "rest": 6,
        "boss": 1
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 14,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 10,
          "combatFlips": 5,
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
      "modelId": "opportunist",
      "seed": 3973465731,
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
      "totalCombatTurns": 58,
      "totalCombatFlips": 31,
      "totalDeadTurns": 6,
      "totalReshuffles": 3,
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
        "demon": 14,
        "human": 2,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 17,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
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
      "runIndex": 6,
      "modelId": "opportunist",
      "seed": 3990243350,
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
      "totalCombatFlips": 20,
      "totalDeadTurns": 3,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 12,
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
      "runIndex": 7,
      "modelId": "opportunist",
      "seed": 4007020969,
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
      "totalCombatTurns": 22,
      "totalCombatFlips": 14,
      "totalDeadTurns": 1,
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
        "spring-tear"
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
        "demon": 12,
        "human": 0,
        "automaton": 2,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 12,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 2087886605,
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
      "totalCombatTurns": 58,
      "totalCombatFlips": 11,
      "totalDeadTurns": 8,
      "totalReshuffles": 7,
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
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 3,
        "chest": 2,
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
        "common": 10,
        "uncommon": 2,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
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
          "combatTurns": 14,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 2071108986,
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
      "totalCombatTurns": 78,
      "totalCombatFlips": 9,
      "totalDeadTurns": 15,
      "totalReshuffles": 11,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 40,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 38,
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
      "runIndex": 2,
      "modelId": "regular",
      "seed": 2054331367,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 63,
      "totalCombatFlips": 19,
      "totalDeadTurns": 9,
      "totalReshuffles": 9,
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
        "old-bridge-stone"
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
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "combatWinner": "player",
          "combatTurns": 18,
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
      "runIndex": 3,
      "modelId": "regular",
      "seed": 2037553748,
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
      "totalCombatTurns": 32,
      "totalCombatFlips": 10,
      "totalDeadTurns": 5,
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
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 4,
      "modelId": "regular",
      "seed": 2020776129,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 59,
      "totalCombatFlips": 14,
      "totalDeadTurns": 14,
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
        "moss-dust"
      ],
      "campVisits": 2,
      "upgrades": 0,
      "removals": 2,
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
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 9,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 28,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "chest",
          "title": "Tresor des racines",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 10,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
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
      "runIndex": 5,
      "modelId": "regular",
      "seed": 2003998510,
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
      "totalCombatTurns": 86,
      "totalCombatFlips": 13,
      "totalDeadTurns": 14,
      "totalReshuffles": 18,
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
        "demon": 0,
        "human": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 37,
          "combatFlips": 3,
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
      "modelId": "regular",
      "seed": 1987220891,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 149,
      "totalCombatFlips": 33,
      "totalDeadTurns": 17,
      "totalReshuffles": 24,
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
        "ancient-sap",
        "reflection-ring"
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
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 15,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 1,
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
          "combatTurns": 23,
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
          "combatTurns": 35,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 10,
          "enemyProfileId": "executioner",
          "enemyBotId": "champion",
          "rewardOffered": 4,
          "rewardClaimed": true,
          "rewardSkipped": false,
          "charmOffered": 3,
          "charmClaimed": "reflection-ring",
          "siteAction": "none"
        },
        {
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 28,
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
      "runIndex": 7,
      "modelId": "regular",
      "seed": 1970443272,
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
      "totalCombatTurns": 110,
      "totalCombatFlips": 13,
      "totalDeadTurns": 20,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 40,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 45,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 316254923,
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
      "totalCombatTurns": 64,
      "totalCombatFlips": 15,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 41,
          "combatFlips": 13,
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
      "modelId": "expert",
      "seed": 299477304,
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
      "totalCombatTurns": 72,
      "totalCombatFlips": 17,
      "totalDeadTurns": 10,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "combatTurns": 22,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 8,
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
      "seed": 349810161,
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
      "totalCombatTurns": 136,
      "totalCombatFlips": 34,
      "totalDeadTurns": 19,
      "totalReshuffles": 24,
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
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 4,
        "revenant": 0,
        "arcane": 11,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 33,
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
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 32,
          "combatFlips": 7,
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
          "nodeId": "depth-6-lane-0",
          "depth": 6,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 34,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 16,
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
      "runIndex": 3,
      "modelId": "expert",
      "seed": 333032542,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 193,
      "totalCombatFlips": 24,
      "totalDeadTurns": 33,
      "totalReshuffles": 25,
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
        "moss-dust"
      ],
      "campVisits": 1,
      "upgrades": 0,
      "removals": 1,
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 1,
        "shop": 1,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 2,
        "automaton": 1,
        "revenant": 0,
        "arcane": 12,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 23,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 37,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 34,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 4,
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
      "seed": 383365399,
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
      "totalCombatTurns": 195,
      "totalCombatFlips": 32,
      "totalDeadTurns": 31,
      "totalReshuffles": 41,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 3,
        "rare": 0
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
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
        "combat": 5,
        "elite": 0,
        "shop": 0,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
        "revenant": 1,
        "arcane": 15,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 15,
        "uncommon": 3,
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
          "combatTurns": 38,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 42,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 44,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "combatTurns": 28,
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
      "runIndex": 5,
      "modelId": "expert",
      "seed": 366587780,
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
      "totalCombatTurns": 144,
      "totalCombatFlips": 24,
      "totalDeadTurns": 20,
      "totalReshuffles": 20,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 2,
        "arcane": 12,
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
          "title": "Sentier des griffes",
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 45,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 37,
          "combatFlips": 14,
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
      "modelId": "expert",
      "seed": 416920637,
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
      "totalCombatTurns": 74,
      "totalCombatFlips": 24,
      "totalDeadTurns": 13,
      "totalReshuffles": 8,
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
        "elite": 0,
        "shop": 1,
        "chest": 3,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 2,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 34,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
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
      "seed": 400143018,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 7,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 43,
      "totalCombatFlips": 8,
      "totalDeadTurns": 7,
      "totalReshuffles": 8,
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
        "spring-tear"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 1,
        "shop": 0,
        "chest": 2,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 4,
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
      "modelId": "champion",
      "seed": 282450884,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 15,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 77,
      "totalCombatFlips": 13,
      "totalDeadTurns": 15,
      "totalReshuffles": 14,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 1,
        "uncommon": 2,
        "rare": 2
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
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 2,
        "chest": 3,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
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
        "rare": 2
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 37,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
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
      "modelId": "champion",
      "seed": 299228503,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 91,
      "totalCombatFlips": 20,
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
      "upgrades": 1,
      "removals": 1,
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
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 12,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 39,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "nodeId": "depth-7-lane-3",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 28,
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
      "modelId": "champion",
      "seed": 316006122,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 63,
      "totalCombatFlips": 19,
      "totalDeadTurns": 11,
      "totalReshuffles": 6,
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
      "forgeVisits": 1,
      "fusions": 1,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 21,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 3,
      "modelId": "champion",
      "seed": 332783741,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 13,
      "deckDelta": 1,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 3,
      "combatLosses": 0,
      "totalCombatTurns": 89,
      "totalCombatFlips": 24,
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
      "campVisits": 3,
      "upgrades": 1,
      "removals": 2,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 35,
          "combatFlips": 9,
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
      "runIndex": 4,
      "modelId": "champion",
      "seed": 215340408,
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
      "totalCombatTurns": 130,
      "totalCombatFlips": 48,
      "totalDeadTurns": 15,
      "totalReshuffles": 16,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 1,
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
        "combat": 4,
        "elite": 0,
        "shop": 1,
        "chest": 2,
        "rest": 1,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 2,
        "revenant": 0,
        "arcane": 13,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 17,
          "combatFlips": 11,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 31,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 34,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "combatWinner": "player",
          "combatTurns": 29,
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
      "runIndex": 5,
      "modelId": "champion",
      "seed": 232118027,
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
      "totalCombatTurns": 59,
      "totalCombatFlips": 20,
      "totalDeadTurns": 5,
      "totalReshuffles": 6,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 3,
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
      "forgeVisits": 3,
      "fusions": 3,
      "treasures": 0,
      "nodeCounts": {
        "combat": 2,
        "elite": 0,
        "shop": 3,
        "chest": 3,
        "rest": 0,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 1,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 19,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
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
          "combatFlips": 10,
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
      "seed": 248895646,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 7,
      "deckDelta": -5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 2,
      "combatWins": 1,
      "combatLosses": 1,
      "totalCombatTurns": 51,
      "totalCombatFlips": 6,
      "totalDeadTurns": 15,
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
      "campVisits": 2,
      "upgrades": 1,
      "removals": 1,
      "forgeVisits": 5,
      "fusions": 5,
      "treasures": 0,
      "nodeCounts": {
        "combat": 1,
        "elite": 0,
        "shop": 5,
        "chest": 0,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 0,
        "arcane": 7,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 7,
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
          "combatTurns": 39,
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
          "lane": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "shop",
          "title": "Bazaar des souches",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 8,
          "combatWinner": null,
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
          "playerDeckSizeBefore": 8,
          "playerDeckSizeAfter": 8,
          "combatWinner": null,
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
          "playerDeckSizeBefore": 8,
          "playerDeckSizeAfter": 7,
          "combatWinner": null,
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
          "playerDeckSizeBefore": 7,
          "playerDeckSizeAfter": 7,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 1,
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
      "modelId": "champion",
      "seed": 265673265,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 14,
      "deckDelta": 2,
      "outcome": "victory",
      "victory": true,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 6,
      "combatWins": 6,
      "combatLosses": 0,
      "totalCombatTurns": 105,
      "totalCombatFlips": 33,
      "totalDeadTurns": 9,
      "totalReshuffles": 10,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-4-lane-1",
          "depth": 4,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 22,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 17,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
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
          "combo-2",
          "deal-damage",
          "flip-1",
          "gain-shield",
          "hybrid-demon",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 1059,
        "played": 274,
        "ignored": 935,
        "selectionRate": 0.2587346553352219,
        "wins": 92,
        "losses": 182,
        "draws": 0,
        "winRateWhenPlayed": 0.3357664233576642,
        "averageFlips": 0.3467153284671533,
        "failedImpactRate": 0.6864686468646864,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 1,
        "averageDamageDealt": 1.4124087591240877,
        "averageDamageTaken": 0.8065693430656934,
        "averageNetDamage": 0.6058394160583943,
        "lethalMoves": 11,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 101,
            "winRate": 0.15841584158415842
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.5342465753424658
          },
          {
            "modelId": "opportunist",
            "played": 40,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.3235294117647059
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
            "played": 274,
            "winRate": 0.3357664233576642
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
        "offered": 621,
        "played": 440,
        "ignored": 440,
        "selectionRate": 0.7085346215780999,
        "wins": 223,
        "losses": 217,
        "draws": 0,
        "winRateWhenPlayed": 0.5068181818181818,
        "averageFlips": 0.2681818181818182,
        "failedImpactRate": 0.562962962962963,
        "averageFlipMargin": 1.8644067796610169,
        "averageEffectAmount": 3.081818181818182,
        "averageDamageDealt": 0.16136363636363638,
        "averageDamageTaken": 0.022727272727272728,
        "averageNetDamage": 0.13863636363636364,
        "lethalMoves": 8,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 213,
            "winRate": 0.6338028169014085
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.3711340206185567
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.4142857142857143
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.5111111111111111
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
            "played": 440,
            "winRate": 0.5068181818181818
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
        "offered": 560,
        "played": 426,
        "ignored": 437,
        "selectionRate": 0.7607142857142857,
        "wins": 212,
        "losses": 214,
        "draws": 0,
        "winRateWhenPlayed": 0.49765258215962443,
        "averageFlips": 0.2652582159624413,
        "failedImpactRate": 0.4405940594059406,
        "averageFlipMargin": 1.9292035398230087,
        "averageEffectAmount": 4.267605633802817,
        "averageDamageDealt": 0.06572769953051644,
        "averageDamageTaken": 0.035211267605633804,
        "averageNetDamage": 0.030516431924882632,
        "lethalMoves": 4,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 213,
            "winRate": 0.6431924882629108
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.42105263157894735
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.4318181818181818
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
            "played": 426,
            "winRate": 0.49765258215962443
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
        "offered": 505,
        "played": 413,
        "ignored": 392,
        "selectionRate": 0.8178217821782178,
        "wins": 199,
        "losses": 214,
        "draws": 0,
        "winRateWhenPlayed": 0.48184019370460046,
        "averageFlips": 0.29539951573849876,
        "failedImpactRate": 0.45535714285714285,
        "averageFlipMargin": 1.860655737704918,
        "averageEffectAmount": 4.600484261501211,
        "averageDamageDealt": 0.08232445520581114,
        "averageDamageTaken": 0.06537530266343826,
        "averageNetDamage": 0.016949152542372878,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 162,
            "winRate": 0.5740740740740741
          },
          {
            "modelId": "opportunist",
            "played": 102,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.524390243902439
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.04878048780487805
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.2692307692307692
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 413,
            "winRate": 0.48184019370460046
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
        "offered": 557,
        "played": 410,
        "ignored": 428,
        "selectionRate": 0.7360861759425493,
        "wins": 203,
        "losses": 207,
        "draws": 0,
        "winRateWhenPlayed": 0.4951219512195122,
        "averageFlips": 0.28780487804878047,
        "failedImpactRate": 0.49572649572649574,
        "averageFlipMargin": 2.2966101694915255,
        "averageEffectAmount": 3.524390243902439,
        "averageDamageDealt": 0.16585365853658537,
        "averageDamageTaken": 0.02195121951219512,
        "averageNetDamage": 0.14390243902439026,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 157,
            "winRate": 0.5796178343949044
          },
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.55
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.5348837209302325
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.09523809523809523
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.28
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 410,
            "winRate": 0.4951219512195122
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
        "offered": 568,
        "played": 408,
        "ignored": 408,
        "selectionRate": 0.7183098591549296,
        "wins": 326,
        "losses": 82,
        "draws": 0,
        "winRateWhenPlayed": 0.7990196078431373,
        "averageFlips": 0.32107843137254904,
        "failedImpactRate": 0.46530612244897956,
        "averageFlipMargin": 2.099236641221374,
        "averageEffectAmount": 4.514705882352941,
        "averageDamageDealt": 0.12990196078431374,
        "averageDamageTaken": 0.05392156862745098,
        "averageNetDamage": 0.07598039215686275,
        "lethalMoves": 0,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 177,
            "winRate": 0.7966101694915254
          },
          {
            "modelId": "expert",
            "played": 92,
            "winRate": 0.8804347826086957
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.8714285714285714
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.7962962962962963
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
            "played": 408,
            "winRate": 0.7990196078431373
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
        "played": 401,
        "ignored": 592,
        "selectionRate": 0.49937733499377335,
        "wins": 194,
        "losses": 207,
        "draws": 0,
        "winRateWhenPlayed": 0.4837905236907731,
        "averageFlips": 0.23192019950124687,
        "failedImpactRate": 0.640926640926641,
        "averageFlipMargin": 2.21505376344086,
        "averageEffectAmount": 3.3017456359102244,
        "averageDamageDealt": 0.3915211970074813,
        "averageDamageTaken": 0.0399002493765586,
        "averageNetDamage": 0.35162094763092266,
        "lethalMoves": 9,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 151,
            "winRate": 0.5894039735099338
          },
          {
            "modelId": "opportunist",
            "played": 101,
            "winRate": 0.504950495049505
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.5465116279069767
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.07142857142857142
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
            "played": 401,
            "winRate": 0.4837905236907731
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
        "offered": 513,
        "played": 400,
        "ignored": 363,
        "selectionRate": 0.7797270955165692,
        "wins": 321,
        "losses": 79,
        "draws": 0,
        "winRateWhenPlayed": 0.8025,
        "averageFlips": 0.2075,
        "failedImpactRate": 0.5059523809523809,
        "averageFlipMargin": 2.2650602409638556,
        "averageEffectAmount": 5.44,
        "averageDamageDealt": 0.275,
        "averageDamageTaken": 0.105,
        "averageNetDamage": 0.17000000000000004,
        "lethalMoves": 3,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 174,
            "winRate": 0.8045977011494253
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.9
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.8769230769230769
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.8269230769230769
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
            "played": 400,
            "winRate": 0.8025
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
        "offered": 700,
        "played": 395,
        "ignored": 557,
        "selectionRate": 0.5642857142857143,
        "wins": 185,
        "losses": 210,
        "draws": 0,
        "winRateWhenPlayed": 0.46835443037974683,
        "averageFlips": 0.23544303797468355,
        "failedImpactRate": 0.5753424657534246,
        "averageFlipMargin": 1.946236559139785,
        "averageEffectAmount": 3.850632911392405,
        "averageDamageDealt": 0.25316455696202533,
        "averageDamageTaken": 0.07088607594936709,
        "averageNetDamage": 0.18227848101265826,
        "lethalMoves": 7,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 185,
            "winRate": 0.6054054054054054
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.34444444444444444
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.3484848484848485
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.4634146341463415
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
            "played": 395,
            "winRate": 0.46835443037974683
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
        "offered": 472,
        "played": 387,
        "ignored": 359,
        "selectionRate": 0.8199152542372882,
        "wins": 228,
        "losses": 159,
        "draws": 0,
        "winRateWhenPlayed": 0.5891472868217055,
        "averageFlips": 0.32558139534883723,
        "failedImpactRate": 0.45217391304347826,
        "averageFlipMargin": 2.119047619047619,
        "averageEffectAmount": 3.10077519379845,
        "averageDamageDealt": 0.21963824289405684,
        "averageDamageTaken": 0.05167958656330749,
        "averageNetDamage": 0.16795865633074936,
        "lethalMoves": 5,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 167,
            "winRate": 0.4311377245508982
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.9156626506024096
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.5974025974025974
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.8292682926829268
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
            "played": 387,
            "winRate": 0.5891472868217055
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
        "offered": 617,
        "played": 380,
        "ignored": 499,
        "selectionRate": 0.6158833063209076,
        "wins": 306,
        "losses": 74,
        "draws": 0,
        "winRateWhenPlayed": 0.8052631578947368,
        "averageFlips": 0.17105263157894737,
        "failedImpactRate": 0.5486111111111112,
        "averageFlipMargin": 2.5384615384615383,
        "averageEffectAmount": 5.510526315789473,
        "averageDamageDealt": 0.2657894736842105,
        "averageDamageTaken": 0.08947368421052632,
        "averageNetDamage": 0.1763157894736842,
        "lethalMoves": 1,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.7888198757763976
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.9
          },
          {
            "modelId": "opportunist",
            "played": 62,
            "winRate": 0.8548387096774194
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.8333333333333334
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
            "played": 380,
            "winRate": 0.8052631578947368
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
        "offered": 589,
        "played": 372,
        "ignored": 475,
        "selectionRate": 0.631578947368421,
        "wins": 186,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.3790322580645161,
        "failedImpactRate": 0.4149377593360996,
        "averageFlipMargin": 2.3120567375886525,
        "averageEffectAmount": 2.196236559139785,
        "averageDamageDealt": 0.04838709677419355,
        "averageDamageTaken": 0.03763440860215054,
        "averageNetDamage": 0.010752688172043008,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.27976190476190477
          },
          {
            "modelId": "expert",
            "played": 76,
            "winRate": 0.881578947368421
          },
          {
            "modelId": "opportunist",
            "played": 67,
            "winRate": 0.6268656716417911
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 372,
            "winRate": 0.5
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
        "offered": 1104,
        "played": 364,
        "ignored": 921,
        "selectionRate": 0.32971014492753625,
        "wins": 287,
        "losses": 77,
        "draws": 0,
        "winRateWhenPlayed": 0.7884615384615384,
        "averageFlips": 0.3021978021978022,
        "failedImpactRate": 0.6636085626911316,
        "averageFlipMargin": 2.1363636363636362,
        "averageEffectAmount": 3.7362637362637363,
        "averageDamageDealt": 1.2857142857142858,
        "averageDamageTaken": 0.33516483516483514,
        "averageNetDamage": 0.9505494505494507,
        "lethalMoves": 24,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 162,
            "winRate": 0.7962962962962963
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.8554216867469879
          },
          {
            "modelId": "opportunist",
            "played": 58,
            "winRate": 0.8793103448275862
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
            "played": 364,
            "winRate": 0.7884615384615384
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
        "offered": 682,
        "played": 357,
        "ignored": 501,
        "selectionRate": 0.5234604105571847,
        "wins": 177,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.4957983193277311,
        "averageFlips": 0.17086834733893558,
        "failedImpactRate": 0.695,
        "averageFlipMargin": 2.262295081967213,
        "averageEffectAmount": 2.081232492997199,
        "averageDamageDealt": 0.5574229691876751,
        "averageDamageTaken": 0.17366946778711484,
        "averageNetDamage": 0.38375350140056025,
        "lethalMoves": 12,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 159,
            "winRate": 0.29559748427672955
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.8181818181818182
          },
          {
            "modelId": "opportunist",
            "played": 61,
            "winRate": 0.6557377049180327
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.6585365853658537
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
            "played": 357,
            "winRate": 0.4957983193277311
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
        "offered": 503,
        "played": 353,
        "ignored": 342,
        "selectionRate": 0.7017892644135189,
        "wins": 149,
        "losses": 204,
        "draws": 0,
        "winRateWhenPlayed": 0.42209631728045327,
        "averageFlips": 0.29178470254957506,
        "failedImpactRate": 0.46632124352331605,
        "averageFlipMargin": 2.2233009708737863,
        "averageEffectAmount": 3.0254957507082154,
        "averageDamageDealt": 0.3031161473087819,
        "averageDamageTaken": 0.09915014164305949,
        "averageNetDamage": 0.2039660056657224,
        "lethalMoves": 3,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 131,
            "winRate": 0.1984732824427481
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.6354166666666666
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.7090909090909091
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.4222222222222222
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.15384615384615385
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 353,
            "winRate": 0.42209631728045327
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
        "offered": 569,
        "played": 347,
        "ignored": 425,
        "selectionRate": 0.6098418277680141,
        "wins": 131,
        "losses": 216,
        "draws": 0,
        "winRateWhenPlayed": 0.37752161383285304,
        "averageFlips": 0.2680115273775216,
        "failedImpactRate": 0.5230769230769231,
        "averageFlipMargin": 2.5806451612903225,
        "averageEffectAmount": 3.360230547550432,
        "averageDamageDealt": 0.3025936599423631,
        "averageDamageTaken": 0.09510086455331412,
        "averageNetDamage": 0.20749279538904897,
        "lethalMoves": 5,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 141,
            "winRate": 0.1773049645390071
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.6129032258064516
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.4
          },
          {
            "modelId": "opportunist",
            "played": 43,
            "winRate": 0.6744186046511628
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.08
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 347,
            "winRate": 0.37752161383285304
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
        "offered": 579,
        "played": 347,
        "ignored": 449,
        "selectionRate": 0.5993091537132987,
        "wins": 130,
        "losses": 217,
        "draws": 0,
        "winRateWhenPlayed": 0.3746397694524496,
        "averageFlips": 0.25936599423631124,
        "failedImpactRate": 0.5734597156398105,
        "averageFlipMargin": 2.3444444444444446,
        "averageEffectAmount": 3.080691642651297,
        "averageDamageDealt": 0.3400576368876081,
        "averageDamageTaken": 0.0893371757925072,
        "averageNetDamage": 0.2507204610951009,
        "lethalMoves": 3,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 134,
            "winRate": 0.20149253731343283
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.5824175824175825
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.6415094339622641
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.35555555555555557
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
            "played": 347,
            "winRate": 0.3746397694524496
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
        "offered": 1204,
        "played": 316,
        "ignored": 991,
        "selectionRate": 0.26245847176079734,
        "wins": 158,
        "losses": 158,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.22468354430379747,
        "failedImpactRate": 0.7641196013289037,
        "averageFlipMargin": 1.7183098591549295,
        "averageEffectAmount": 0.7689873417721519,
        "averageDamageDealt": 1.5601265822784811,
        "averageDamageTaken": 0.6139240506329114,
        "averageNetDamage": 0.9462025316455697,
        "lethalMoves": 15,
        "roundClosers": 74,
        "byModel": [
          {
            "modelId": "regular",
            "played": 147,
            "winRate": 0.6054421768707483
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.4266666666666667
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.4318181818181818
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.5142857142857142
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
            "played": 316,
            "winRate": 0.5
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
        "offered": 926,
        "played": 316,
        "ignored": 761,
        "selectionRate": 0.3412526997840173,
        "wins": 155,
        "losses": 161,
        "draws": 0,
        "winRateWhenPlayed": 0.49050632911392406,
        "averageFlips": 0.3259493670886076,
        "failedImpactRate": 0.6578073089700996,
        "averageFlipMargin": 2.174757281553398,
        "averageEffectAmount": 1.4303797468354431,
        "averageDamageDealt": 0.990506329113924,
        "averageDamageTaken": 0.37658227848101267,
        "averageNetDamage": 0.6139240506329113,
        "lethalMoves": 6,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 142,
            "winRate": 0.3028169014084507
          },
          {
            "modelId": "expert",
            "played": 63,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.5636363636363636
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.75
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
            "played": 316,
            "winRate": 0.49050632911392406
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
        "offered": 1073,
        "played": 312,
        "ignored": 900,
        "selectionRate": 0.2907735321528425,
        "wins": 128,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.41025641025641024,
        "averageFlips": 0.14423076923076922,
        "failedImpactRate": 0.8345588235294118,
        "averageFlipMargin": 2.088888888888889,
        "averageEffectAmount": 1.0416666666666667,
        "averageDamageDealt": 1.1666666666666667,
        "averageDamageTaken": 0.6282051282051282,
        "averageNetDamage": 0.5384615384615385,
        "lethalMoves": 11,
        "roundClosers": 66,
        "byModel": [
          {
            "modelId": "regular",
            "played": 118,
            "winRate": 0.5254237288135594
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.4430379746835443
          },
          {
            "modelId": "expert",
            "played": 62,
            "winRate": 0.41935483870967744
          },
          {
            "modelId": "champion",
            "played": 33,
            "winRate": 0
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
            "played": 312,
            "winRate": 0.41025641025641024
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
        "offered": 311,
        "played": 233,
        "ignored": 228,
        "selectionRate": 0.7491961414790996,
        "wins": 145,
        "losses": 88,
        "draws": 0,
        "winRateWhenPlayed": 0.6223175965665236,
        "averageFlips": 0.8283261802575107,
        "failedImpactRate": 0.12272727272727273,
        "averageFlipMargin": 1.9585492227979275,
        "averageEffectAmount": 1.1072961373390557,
        "averageDamageDealt": 1.0686695278969958,
        "averageDamageTaken": 0.1459227467811159,
        "averageNetDamage": 0.9227467811158798,
        "lethalMoves": 5,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 93,
            "winRate": 0.5698924731182796
          },
          {
            "modelId": "expert",
            "played": 53,
            "winRate": 0.8301886792452831
          },
          {
            "modelId": "opportunist",
            "played": 41,
            "winRate": 0.6585365853658537
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.7
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
            "played": 233,
            "winRate": 0.6223175965665236
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
        "offered": 460,
        "played": 225,
        "ignored": 356,
        "selectionRate": 0.4891304347826087,
        "wins": 131,
        "losses": 94,
        "draws": 0,
        "winRateWhenPlayed": 0.5822222222222222,
        "averageFlips": 0.6577777777777778,
        "failedImpactRate": 0.28846153846153844,
        "averageFlipMargin": 1.9864864864864864,
        "averageEffectAmount": 1.2622222222222221,
        "averageDamageDealt": 1.768888888888889,
        "averageDamageTaken": 0.5466666666666666,
        "averageNetDamage": 1.2222222222222223,
        "lethalMoves": 8,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 91,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 50,
            "winRate": 0.76
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.6410256410256411
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.5714285714285714
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
            "played": 225,
            "winRate": 0.5822222222222222
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
        "offered": 388,
        "played": 221,
        "ignored": 315,
        "selectionRate": 0.5695876288659794,
        "wins": 132,
        "losses": 89,
        "draws": 0,
        "winRateWhenPlayed": 0.5972850678733032,
        "averageFlips": 0.8280542986425339,
        "failedImpactRate": 0.1201923076923077,
        "averageFlipMargin": 2.1475409836065573,
        "averageEffectAmount": 0.9909502262443439,
        "averageDamageDealt": 1,
        "averageDamageTaken": 0.19457013574660634,
        "averageNetDamage": 0.8054298642533937,
        "lethalMoves": 8,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 98,
            "winRate": 0.5510204081632653
          },
          {
            "modelId": "opportunist",
            "played": 41,
            "winRate": 0.6341463414634146
          },
          {
            "modelId": "expert",
            "played": 40,
            "winRate": 0.85
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.75
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
            "played": 221,
            "winRate": 0.5972850678733032
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
        "offered": 487,
        "played": 196,
        "ignored": 382,
        "selectionRate": 0.4024640657084189,
        "wins": 121,
        "losses": 75,
        "draws": 0,
        "winRateWhenPlayed": 0.6173469387755102,
        "averageFlips": 0.6887755102040817,
        "failedImpactRate": 0.325,
        "averageFlipMargin": 1.9555555555555555,
        "averageEffectAmount": 0.7193877551020408,
        "averageDamageDealt": 2.1122448979591835,
        "averageDamageTaken": 0.8163265306122449,
        "averageNetDamage": 1.2959183673469385,
        "lethalMoves": 15,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 82,
            "winRate": 0.5853658536585366
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.8181818181818182
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.6785714285714286
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.6923076923076923
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
            "played": 196,
            "winRate": 0.6173469387755102
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
        "offered": 3085,
        "played": 1577,
        "ignored": 2425,
        "selectionRate": 0.5111831442463534,
        "wins": 778,
        "losses": 799,
        "draws": 0,
        "winRateWhenPlayed": 0.4933417882054534,
        "averageFlips": 0.25047558655675334,
        "averageDamageDealt": 0.43880786303107167,
        "averageNetDamage": 0.2821813570069753,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 440,
            "winRateWhenPlayed": 0.5068181818181818
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 426,
            "winRateWhenPlayed": 0.49765258215962443
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 395,
            "winRateWhenPlayed": 0.46835443037974683
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 316,
            "winRateWhenPlayed": 0.5
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
        "offered": 2802,
        "played": 1552,
        "ignored": 2191,
        "selectionRate": 0.5538900785153462,
        "wins": 1240,
        "losses": 312,
        "draws": 0,
        "winRateWhenPlayed": 0.7989690721649485,
        "averageFlips": 0.2506443298969072,
        "averageDamageDealt": 0.47164948453608246,
        "averageNetDamage": 0.32989690721649484,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 408,
            "winRateWhenPlayed": 0.7990196078431373
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 400,
            "winRateWhenPlayed": 0.8025
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 380,
            "winRateWhenPlayed": 0.8052631578947368
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 364,
            "winRateWhenPlayed": 0.7884615384615384
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
        "offered": 2938,
        "played": 1536,
        "ignored": 2312,
        "selectionRate": 0.5228046289993192,
        "wins": 724,
        "losses": 812,
        "draws": 0,
        "winRateWhenPlayed": 0.4713541666666667,
        "averageFlips": 0.24609375,
        "averageDamageDealt": 0.4055989583333333,
        "averageNetDamage": 0.24414062499999997,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.48184019370460046
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 410,
            "winRateWhenPlayed": 0.4951219512195122
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 401,
            "winRateWhenPlayed": 0.4837905236907731
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 312,
            "winRateWhenPlayed": 0.41025641025641024
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
        "offered": 2669,
        "played": 1432,
        "ignored": 2096,
        "selectionRate": 0.5365305357811915,
        "wins": 746,
        "losses": 686,
        "draws": 0,
        "winRateWhenPlayed": 0.520949720670391,
        "averageFlips": 0.3009776536312849,
        "averageDamageDealt": 0.42946927374301674,
        "averageNetDamage": 0.27932960893854747,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 387,
            "winRateWhenPlayed": 0.5891472868217055
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 372,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 357,
            "winRateWhenPlayed": 0.4957983193277311
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 316,
            "winRateWhenPlayed": 0.49050632911392406
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
        "offered": 2710,
        "played": 1321,
        "ignored": 2151,
        "selectionRate": 0.4874538745387454,
        "wins": 502,
        "losses": 819,
        "draws": 0,
        "winRateWhenPlayed": 0.38001514004542014,
        "averageFlips": 0.28841786525359575,
        "averageDamageDealt": 0.5427706283118849,
        "averageNetDamage": 0.3005299015897048,
        "topCards": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 353,
            "winRateWhenPlayed": 0.42209631728045327
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 347,
            "winRateWhenPlayed": 0.37752161383285304
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 347,
            "winRateWhenPlayed": 0.3746397694524496
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 274,
            "winRateWhenPlayed": 0.3357664233576642
          }
        ],
        "status": "underperformer",
        "notes": [
          "La famille perd trop souvent sur cet echantillon."
        ]
      },
      {
        "id": "demon",
        "label": "demon",
        "offered": 1646,
        "played": 875,
        "ignored": 1281,
        "selectionRate": 0.531591737545565,
        "wins": 529,
        "losses": 346,
        "draws": 0,
        "winRateWhenPlayed": 0.6045714285714285,
        "averageFlips": 0.7531428571428571,
        "averageDamageDealt": 1.465142857142857,
        "averageNetDamage": 1.0537142857142856,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 233,
            "winRateWhenPlayed": 0.6223175965665236
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 225,
            "winRateWhenPlayed": 0.5822222222222222
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 221,
            "winRateWhenPlayed": 0.5972850678733032
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 196,
            "winRateWhenPlayed": 0.6173469387755102
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
        "offered": 3174,
        "played": 2207,
        "ignored": 2372,
        "selectionRate": 0.6953371140516699,
        "wins": 1215,
        "losses": 992,
        "draws": 0,
        "winRateWhenPlayed": 0.5505210693248754,
        "averageFlips": 0.36157680108744905,
        "averageDamageDealt": 0.22836429542365203,
        "averageNetDamage": 0.15994562754870867,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 440,
            "winRateWhenPlayed": 0.5068181818181818
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.48184019370460046
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 408,
            "winRateWhenPlayed": 0.7990196078431373
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 372,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 353,
            "winRateWhenPlayed": 0.42209631728045327
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
        "offered": 2992,
        "played": 2203,
        "ignored": 2264,
        "selectionRate": 0.7362967914438503,
        "wins": 1239,
        "losses": 964,
        "draws": 0,
        "winRateWhenPlayed": 0.5624148887880164,
        "averageFlips": 0.32818883340898775,
        "averageDamageDealt": 0.29868361325465276,
        "averageNetDamage": 0.230140717203813,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 426,
            "winRateWhenPlayed": 0.49765258215962443
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 410,
            "winRateWhenPlayed": 0.4951219512195122
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 400,
            "winRateWhenPlayed": 0.8025
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 387,
            "winRateWhenPlayed": 0.5891472868217055
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 347,
            "winRateWhenPlayed": 0.3746397694524496
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
        "offered": 4102,
        "played": 2035,
        "ignored": 3216,
        "selectionRate": 0.49609946367625546,
        "wins": 1092,
        "losses": 943,
        "draws": 0,
        "winRateWhenPlayed": 0.5366093366093366,
        "averageFlips": 0.285995085995086,
        "averageDamageDealt": 0.5847665847665847,
        "averageNetDamage": 0.39312039312039304,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 401,
            "winRateWhenPlayed": 0.4837905236907731
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 395,
            "winRateWhenPlayed": 0.46835443037974683
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 380,
            "winRateWhenPlayed": 0.8052631578947368
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 347,
            "winRateWhenPlayed": 0.37752161383285304
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 316,
            "winRateWhenPlayed": 0.49050632911392406
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
        "offered": 5582,
        "played": 1848,
        "ignored": 4604,
        "selectionRate": 0.3310641347187388,
        "wins": 973,
        "losses": 875,
        "draws": 0,
        "winRateWhenPlayed": 0.5265151515151515,
        "averageFlips": 0.28679653679653677,
        "averageDamageDealt": 1.2494588744588744,
        "averageNetDamage": 0.7527056277056277,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 364,
            "winRateWhenPlayed": 0.7884615384615384
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 357,
            "winRateWhenPlayed": 0.4957983193277311
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 316,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 312,
            "winRateWhenPlayed": 0.41025641025641024
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 274,
            "winRateWhenPlayed": 0.3357664233576642
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
        "offered": 15850,
        "played": 8293,
        "ignored": 12456,
        "selectionRate": 0.5232176656151419,
        "wins": 4519,
        "losses": 3774,
        "draws": 0,
        "winRateWhenPlayed": 0.5449174002170505,
        "averageFlips": 0.31749668395031955,
        "averageDamageDealt": 0.5620402749306644,
        "averageNetDamage": 0.36790063909321113,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 440,
            "winRateWhenPlayed": 0.5068181818181818
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 426,
            "winRateWhenPlayed": 0.49765258215962443
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 413,
            "winRateWhenPlayed": 0.48184019370460046
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 410,
            "winRateWhenPlayed": 0.4951219512195122
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 408,
            "winRateWhenPlayed": 0.7990196078431373
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
        "wins": 340,
        "losses": 95,
        "draws": 0,
        "winRate": 0.7816091954022989,
        "averageFlips": 0.27816091954022987,
        "averageDamageDealt": 0.8988505747126436,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 427,
        "wins": 190,
        "losses": 237,
        "draws": 0,
        "winRate": 0.4449648711943794,
        "averageFlips": 0.2716627634660422,
        "averageDamageDealt": 0.667447306791569,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 417,
        "wins": 181,
        "losses": 236,
        "draws": 0,
        "winRate": 0.434052757793765,
        "averageFlips": 0.24940047961630696,
        "averageDamageDealt": 0.6714628297362111,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 367,
        "wins": 176,
        "losses": 191,
        "draws": 0,
        "winRate": 0.47956403269754766,
        "averageFlips": 0.16348773841961853,
        "averageDamageDealt": 1.348773841961853,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 360,
        "wins": 109,
        "losses": 251,
        "draws": 0,
        "winRate": 0.30277777777777776,
        "averageFlips": 0.33055555555555555,
        "averageDamageDealt": 0.8694444444444445,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 351,
        "wins": 167,
        "losses": 184,
        "draws": 0,
        "winRate": 0.4757834757834758,
        "averageFlips": 0.3646723646723647,
        "averageDamageDealt": 0.8746438746438746,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 344,
        "wins": 276,
        "losses": 68,
        "draws": 0,
        "winRate": 0.8023255813953488,
        "averageFlips": 0.3023255813953488,
        "averageDamageDealt": 0.15406976744186046,
        "averageEffectAmount": 1.186046511627907,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 335,
        "wins": 274,
        "losses": 61,
        "draws": 0,
        "winRate": 0.817910447761194,
        "averageFlips": 0.21194029850746268,
        "averageDamageDealt": 2.002985074626866,
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
        "count": 329,
        "wins": 150,
        "losses": 179,
        "draws": 0,
        "winRate": 0.45592705167173253,
        "averageFlips": 0.24012158054711247,
        "averageDamageDealt": 0.2066869300911854,
        "averageEffectAmount": 1.6930091185410334,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 322,
        "wins": 157,
        "losses": 165,
        "draws": 0,
        "winRate": 0.48757763975155277,
        "averageFlips": 0.2484472049689441,
        "averageDamageDealt": 0.10559006211180125,
        "averageEffectAmount": 1.2763975155279503,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 322,
        "wins": 157,
        "losses": 165,
        "draws": 0,
        "winRate": 0.48757763975155277,
        "averageFlips": 0.2484472049689441,
        "averageDamageDealt": 0.10559006211180125,
        "averageEffectAmount": 1.0031055900621118,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 307,
        "wins": 153,
        "losses": 154,
        "draws": 0,
        "winRate": 0.498371335504886,
        "averageFlips": 0.2964169381107492,
        "averageDamageDealt": 0.09446254071661238,
        "averageEffectAmount": 1.3224755700325732,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 306,
        "wins": 114,
        "losses": 192,
        "draws": 0,
        "winRate": 0.37254901960784315,
        "averageFlips": 0.27124183006535946,
        "averageDamageDealt": 0.29411764705882354,
        "averageEffectAmount": 1.1111111111111112,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 305,
        "wins": 155,
        "losses": 150,
        "draws": 0,
        "winRate": 0.5081967213114754,
        "averageFlips": 0.24918032786885247,
        "averageDamageDealt": 0.19672131147540983,
        "averageEffectAmount": 1.1770491803278689,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 305,
        "wins": 151,
        "losses": 154,
        "draws": 0,
        "winRate": 0.49508196721311476,
        "averageFlips": 0.2983606557377049,
        "averageDamageDealt": 0.09508196721311475,
        "averageEffectAmount": 1.3245901639344262,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 295,
        "wins": 139,
        "losses": 156,
        "draws": 0,
        "winRate": 0.4711864406779661,
        "averageFlips": 0.13898305084745763,
        "averageDamageDealt": 1.5084745762711864,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:moth-ghost:draw-next-turn",
        "kind": "effect",
        "label": "Fantome phalene -> draw-next-turn",
        "count": 270,
        "wins": 97,
        "losses": 173,
        "draws": 0,
        "winRate": 0.3592592592592593,
        "averageFlips": 0.26296296296296295,
        "averageDamageDealt": 0.07777777777777778,
        "averageEffectAmount": 1.1111111111111112,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 256,
        "wins": 96,
        "losses": 160,
        "draws": 0,
        "winRate": 0.375,
        "averageFlips": 0.23828125,
        "averageDamageDealt": 0.14453125,
        "averageEffectAmount": 1.25,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:boost-self",
        "kind": "effect",
        "label": "Moine engrene -> boost-self",
        "count": 243,
        "wins": 194,
        "losses": 49,
        "draws": 0,
        "winRate": 0.7983539094650206,
        "averageFlips": 0.3045267489711934,
        "averageDamageDealt": 0.09876543209876543,
        "averageEffectAmount": 1.48559670781893,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 242,
        "wins": 75,
        "losses": 167,
        "draws": 0,
        "winRate": 0.30991735537190085,
        "averageFlips": 0.2231404958677686,
        "averageDamageDealt": 0.15702479338842976,
        "averageEffectAmount": 1.3099173553719008,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:gain-mana-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> gain-mana-next-turn",
        "count": 232,
        "wins": 190,
        "losses": 42,
        "draws": 0,
        "winRate": 0.8189655172413793,
        "averageFlips": 0.06465517241379311,
        "averageDamageDealt": 0.06896551724137931,
        "averageEffectAmount": 1.206896551724138,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 227,
        "wins": 180,
        "losses": 47,
        "draws": 0,
        "winRate": 0.7929515418502202,
        "averageFlips": 0.2775330396475771,
        "averageDamageDealt": 1.4361233480176212,
        "averageEffectAmount": 2.4537444933920707,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 227,
        "wins": 90,
        "losses": 137,
        "draws": 0,
        "winRate": 0.3964757709251101,
        "averageFlips": 0.21585903083700442,
        "averageDamageDealt": 1.7004405286343611,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 217,
        "wins": 131,
        "losses": 86,
        "draws": 0,
        "winRate": 0.6036866359447005,
        "averageFlips": 0.695852534562212,
        "averageDamageDealt": 2.4009216589861753,
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
        "sampleSize": 1059,
        "id": "card-widow-knight-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Chevalier veuf sous-performe",
        "detail": "274 plays, 34% win, net PV 0.61.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2802,
        "id": "family-automaton-nerf",
        "severity": "problem",
        "action": "watch",
        "title": "automaton domine l'echantillon",
        "detail": "1552 plays, 80% win, net PV 0.33.",
        "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
      },
      {
        "id": "combo-effect:gear-monk:draw-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 344,
        "title": "Moine engrene -> draw-next-turn ressort comme combo",
        "detail": "344 occurrences, 80% win, 0.30 flips, 0.15 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:tin-oracle:gain-mana-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 232,
        "title": "Oracle de fer-blanc -> gain-mana-next-turn ressort comme combo",
        "detail": "232 occurrences, 82% win, 0.06 flips, 0.07 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "family",
        "confidence": "high",
        "sampleSize": 2710,
        "id": "family-revenant-buff",
        "severity": "watch",
        "action": "verify",
        "title": "revenant manque d'attraction",
        "detail": "2710 offres, 49% selection, 38% win.",
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
        "detail": "435 occurrences, 78% win, 0.28 flips, 0.90 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 335,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "335 occurrences, 82% win, 0.21 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gear-monk:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 243,
        "title": "Moine engrene -> boost-self ressort comme combo",
        "detail": "243 occurrences, 80% win, 0.30 flips, 0.10 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:brass-rook:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 227,
        "title": "Tour de laiton -> boost-self ressort comme combo",
        "detail": "227 occurrences, 79% win, 0.28 flips, 1.44 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 217,
        "title": "demon -> demon ressort comme combo",
        "detail": "217 occurrences, 60% win, 0.70 flips, 2.40 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "adventureDiagnostics": {
    "baselineWinRate": 0.7855705662546709,
    "cardAnalytics": [
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
        "offered": 14,
        "played": 6,
        "ignored": 12,
        "selectionRate": 0.42857142857142855,
        "wins": 6,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.5,
        "failedImpactRate": 0.5714285714285714,
        "averageFlipMargin": 0.6666666666666666,
        "averageEffectAmount": 2.1666666666666665,
        "averageDamageDealt": 0.16666666666666666,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.16666666666666666,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 6,
            "winRate": 1
          }
        ],
        "status": "overperformer",
        "notes": [
          "Surperforme en victoire et impact immediat face a une base de 79%."
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
        "offered": 43,
        "played": 4,
        "ignored": 40,
        "selectionRate": 0.09302325581395349,
        "wins": 3,
        "losses": 1,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0,
        "failedImpactRate": 1,
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
        "offered": 15,
        "played": 2,
        "ignored": 13,
        "selectionRate": 0.13333333333333333,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0,
        "failedImpactRate": 0,
        "averageFlipMargin": 0,
        "averageEffectAmount": 5,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
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
        "offered": 49,
        "played": 19,
        "ignored": 40,
        "selectionRate": 0.3877551020408163,
        "wins": 5,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.2631578947368421,
        "averageFlips": 0.15789473684210525,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 4.2105263157894735,
        "averageDamageDealt": 0.3157894736842105,
        "averageDamageTaken": 0.9473684210526315,
        "averageNetDamage": -0.631578947368421,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.4166666666666667
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 19,
            "winRate": 0.2631578947368421
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 44,
        "played": 18,
        "ignored": 35,
        "selectionRate": 0.4090909090909091,
        "wins": 8,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.4444444444444444,
        "averageFlips": 0.3888888888888889,
        "failedImpactRate": 0.5882352941176471,
        "averageFlipMargin": 3.2857142857142856,
        "averageEffectAmount": 3.111111111111111,
        "averageDamageDealt": 1.7777777777777777,
        "averageDamageTaken": 2.111111111111111,
        "averageNetDamage": -0.3333333333333335,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.375
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
            "winRate": 0.4444444444444444
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 33,
        "played": 13,
        "ignored": 29,
        "selectionRate": 0.3939393939393939,
        "wins": 7,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.5384615384615384,
        "averageFlips": 0.38461538461538464,
        "failedImpactRate": 0.5833333333333334,
        "averageFlipMargin": 1.6,
        "averageEffectAmount": 1.0769230769230769,
        "averageDamageDealt": 1.2307692307692308,
        "averageDamageTaken": 0.23076923076923078,
        "averageNetDamage": 1,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 2,
            "winRate": 0
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
            "played": 13,
            "winRate": 0.5384615384615384
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
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
        "offered": 12,
        "played": 9,
        "ignored": 8,
        "selectionRate": 0.75,
        "wins": 5,
        "losses": 4,
        "draws": 0,
        "winRateWhenPlayed": 0.5555555555555556,
        "averageFlips": 0.1111111111111111,
        "failedImpactRate": 0.875,
        "averageFlipMargin": 0,
        "averageEffectAmount": 3.111111111111111,
        "averageDamageDealt": 0.1111111111111111,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.1111111111111111,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.5
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
            "played": 9,
            "winRate": 0.5555555555555556
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
        "offered": 899,
        "played": 654,
        "ignored": 706,
        "selectionRate": 0.7274749721913237,
        "wins": 528,
        "losses": 126,
        "draws": 0,
        "winRateWhenPlayed": 0.8073394495412844,
        "averageFlips": 0.3103975535168196,
        "failedImpactRate": 0.38484848484848483,
        "averageFlipMargin": 2.2167487684729066,
        "averageEffectAmount": 3.6314984709480123,
        "averageDamageDealt": 0.23394495412844038,
        "averageDamageTaken": 0.03211009174311927,
        "averageNetDamage": 0.2018348623853211,
        "lethalMoves": 8,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "expert",
            "played": 291,
            "winRate": 0.8281786941580757
          },
          {
            "modelId": "champion",
            "played": 185,
            "winRate": 0.8864864864864865
          },
          {
            "modelId": "regular",
            "played": 177,
            "winRate": 0.6949152542372882
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
            "played": 654,
            "winRate": 0.8073394495412844
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
        "offered": 808,
        "played": 586,
        "ignored": 592,
        "selectionRate": 0.7252475247524752,
        "wins": 472,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.8054607508532423,
        "averageFlips": 0.3822525597269625,
        "failedImpactRate": 0.4766355140186916,
        "averageFlipMargin": 2.236607142857143,
        "averageEffectAmount": 2.6552901023890785,
        "averageDamageDealt": 0.19283276450511946,
        "averageDamageTaken": 0.04948805460750853,
        "averageNetDamage": 0.14334470989761094,
        "lethalMoves": 5,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "expert",
            "played": 251,
            "winRate": 0.8047808764940239
          },
          {
            "modelId": "champion",
            "played": 175,
            "winRate": 0.9028571428571428
          },
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.7
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 586,
            "winRate": 0.8054607508532423
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
        "offered": 976,
        "played": 543,
        "ignored": 767,
        "selectionRate": 0.5563524590163934,
        "wins": 443,
        "losses": 100,
        "draws": 0,
        "winRateWhenPlayed": 0.8158379373848987,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.4447852760736196,
        "averageFlipMargin": 2.1712707182320443,
        "averageEffectAmount": 3.165745856353591,
        "averageDamageDealt": 0.3278084714548803,
        "averageDamageTaken": 0.0718232044198895,
        "averageNetDamage": 0.2559852670349908,
        "lethalMoves": 7,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "expert",
            "played": 238,
            "winRate": 0.8151260504201681
          },
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.7051282051282052
          },
          {
            "modelId": "champion",
            "played": 149,
            "winRate": 0.9328859060402684
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 543,
            "winRate": 0.8158379373848987
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
        "offered": 1523,
        "played": 440,
        "ignored": 1248,
        "selectionRate": 0.28890347997373605,
        "wins": 380,
        "losses": 60,
        "draws": 0,
        "winRateWhenPlayed": 0.8636363636363636,
        "averageFlips": 0.24772727272727274,
        "failedImpactRate": 0.660436137071651,
        "averageFlipMargin": 2.311926605504587,
        "averageEffectAmount": 0.6704545454545454,
        "averageDamageDealt": 3.340909090909091,
        "averageDamageTaken": 0.4068181818181818,
        "averageNetDamage": 2.934090909090909,
        "lethalMoves": 58,
        "roundClosers": 142,
        "byModel": [
          {
            "modelId": "expert",
            "played": 177,
            "winRate": 0.8813559322033898
          },
          {
            "modelId": "regular",
            "played": 137,
            "winRate": 0.7737226277372263
          },
          {
            "modelId": "champion",
            "played": 124,
            "winRate": 0.9435483870967742
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
            "played": 440,
            "winRate": 0.8636363636363636
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
        "played": 144,
        "ignored": 162,
        "selectionRate": 0.6575342465753424,
        "wins": 96,
        "losses": 48,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.6111111111111112,
        "failedImpactRate": 0.3125,
        "averageFlipMargin": 2.5681818181818183,
        "averageEffectAmount": 1.2291666666666667,
        "averageDamageDealt": 1.3402777777777777,
        "averageDamageTaken": 0.09722222222222222,
        "averageNetDamage": 1.2430555555555554,
        "lethalMoves": 7,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.647887323943662
          },
          {
            "modelId": "beginner",
            "played": 37,
            "winRate": 0.7837837837837838
          },
          {
            "modelId": "champion",
            "played": 17,
            "winRate": 0.8235294117647058
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.36363636363636365
          },
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.375
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 144,
            "winRate": 0.6666666666666666
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
        "offered": 239,
        "played": 123,
        "ignored": 175,
        "selectionRate": 0.5146443514644351,
        "wins": 85,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.6910569105691057,
        "averageFlips": 0.4634146341463415,
        "failedImpactRate": 0.32142857142857145,
        "averageFlipMargin": 2.3157894736842106,
        "averageEffectAmount": 1.1951219512195121,
        "averageDamageDealt": 1.5203252032520325,
        "averageDamageTaken": 0.2682926829268293,
        "averageNetDamage": 1.2520325203252032,
        "lethalMoves": 9,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.6571428571428571
          },
          {
            "modelId": "beginner",
            "played": 33,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 0.8181818181818182
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.5
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
            "played": 123,
            "winRate": 0.6910569105691057
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
        "offered": 187,
        "played": 104,
        "ignored": 153,
        "selectionRate": 0.5561497326203209,
        "wins": 70,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.6730769230769231,
        "averageFlips": 0.6826923076923077,
        "failedImpactRate": 0.23655913978494625,
        "averageFlipMargin": 2.4507042253521125,
        "averageEffectAmount": 1.0961538461538463,
        "averageDamageDealt": 1.7211538461538463,
        "averageDamageTaken": 0.3557692307692308,
        "averageNetDamage": 1.3653846153846154,
        "lethalMoves": 3,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.6301369863013698
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0.72
          },
          {
            "modelId": "champion",
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
            "played": 104,
            "winRate": 0.6730769230769231
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
        "offered": 168,
        "played": 81,
        "ignored": 145,
        "selectionRate": 0.48214285714285715,
        "wins": 63,
        "losses": 18,
        "draws": 0,
        "winRateWhenPlayed": 0.7777777777777778,
        "averageFlips": 0.16049382716049382,
        "failedImpactRate": 0.717391304347826,
        "averageFlipMargin": 2.230769230769231,
        "averageEffectAmount": 1.4197530864197532,
        "averageDamageDealt": 0.18518518518518517,
        "averageDamageTaken": 0.09876543209876543,
        "averageNetDamage": 0.08641975308641975,
        "lethalMoves": 3,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.8695652173913043
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "regular",
            "played": 19,
            "winRate": 0.631578947368421
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 1
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
            "played": 81,
            "winRate": 0.7777777777777778
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
        "offered": 231,
        "played": 80,
        "ignored": 187,
        "selectionRate": 0.3463203463203463,
        "wins": 58,
        "losses": 22,
        "draws": 0,
        "winRateWhenPlayed": 0.725,
        "averageFlips": 0.5,
        "failedImpactRate": 0.3939393939393939,
        "averageFlipMargin": 3.2,
        "averageEffectAmount": 0.6375,
        "averageDamageDealt": 4.2375,
        "averageDamageTaken": 1.1,
        "averageNetDamage": 3.1374999999999997,
        "lethalMoves": 12,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 54,
            "winRate": 0.7592592592592593
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0.6538461538461539
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 80,
            "winRate": 0.725
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
        "offered": 150,
        "played": 60,
        "ignored": 109,
        "selectionRate": 0.4,
        "wins": 53,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.8833333333333333,
        "averageFlips": 0.13333333333333333,
        "failedImpactRate": 0.6923076923076923,
        "averageFlipMargin": 2.5,
        "averageEffectAmount": 1.3166666666666667,
        "averageDamageDealt": 0.9333333333333333,
        "averageDamageTaken": 0.3,
        "averageNetDamage": 0.6333333333333333,
        "lethalMoves": 3,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "expert",
            "played": 15,
            "winRate": 0.8
          },
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 8,
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
            "played": 60,
            "winRate": 0.8833333333333333
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
        "offered": 128,
        "played": 58,
        "ignored": 97,
        "selectionRate": 0.453125,
        "wins": 45,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.7758620689655172,
        "averageFlips": 0.1206896551724138,
        "failedImpactRate": 0.7941176470588235,
        "averageFlipMargin": 2.2857142857142856,
        "averageEffectAmount": 2.6206896551724137,
        "averageDamageDealt": 1.3103448275862069,
        "averageDamageTaken": 0.3620689655172414,
        "averageNetDamage": 0.9482758620689655,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0.5238095238095238
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.7692307692307693
          },
          {
            "modelId": "champion",
            "played": 8,
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
            "played": 58,
            "winRate": 0.7758620689655172
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
        "offered": 179,
        "played": 54,
        "ignored": 145,
        "selectionRate": 0.3016759776536313,
        "wins": 42,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.7777777777777778,
        "averageFlips": 0.2222222222222222,
        "failedImpactRate": 0.6470588235294118,
        "averageFlipMargin": 2.3333333333333335,
        "averageEffectAmount": 0.5740740740740741,
        "averageDamageDealt": 2.8518518518518516,
        "averageDamageTaken": 0.5555555555555556,
        "averageNetDamage": 2.296296296296296,
        "lethalMoves": 7,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 29,
            "winRate": 0.8620689655172413
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 54,
            "winRate": 0.7777777777777778
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
        "offered": 100,
        "played": 51,
        "ignored": 82,
        "selectionRate": 0.51,
        "wins": 37,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.7254901960784313,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.5952380952380952,
        "averageFlipMargin": 2.764705882352941,
        "averageEffectAmount": 2.9019607843137254,
        "averageDamageDealt": 1.0980392156862746,
        "averageDamageTaken": 0.2549019607843137,
        "averageNetDamage": 0.8431372549019609,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 4,
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
            "played": 51,
            "winRate": 0.7254901960784313
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
        "offered": 78,
        "played": 49,
        "ignored": 55,
        "selectionRate": 0.6282051282051282,
        "wins": 38,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.7755102040816326,
        "averageFlips": 0.3469387755102041,
        "failedImpactRate": 0.5277777777777778,
        "averageFlipMargin": 2.411764705882353,
        "averageEffectAmount": 1.7755102040816326,
        "averageDamageDealt": 0.3469387755102041,
        "averageDamageTaken": 0.08163265306122448,
        "averageNetDamage": 0.2653061224489796,
        "lethalMoves": 1,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0.7741935483870968
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 4,
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
            "played": 49,
            "winRate": 0.7755102040816326
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
        "offered": 95,
        "played": 44,
        "ignored": 79,
        "selectionRate": 0.4631578947368421,
        "wins": 34,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.7727272727272727,
        "averageFlips": 0.3409090909090909,
        "failedImpactRate": 0.5454545454545454,
        "averageFlipMargin": 3.4,
        "averageEffectAmount": 3.409090909090909,
        "averageDamageDealt": 1.1136363636363635,
        "averageDamageTaken": 0.4318181818181818,
        "averageNetDamage": 0.6818181818181817,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 32,
            "winRate": 0.8125
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.6666666666666666
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
            "played": 44,
            "winRate": 0.7727272727272727
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
        "played": 43,
        "ignored": 57,
        "selectionRate": 0.5657894736842105,
        "wins": 33,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.7674418604651163,
        "averageFlips": 0.46511627906976744,
        "failedImpactRate": 0.3548387096774194,
        "averageFlipMargin": 2.3,
        "averageEffectAmount": 1.5348837209302326,
        "averageDamageDealt": 1.4883720930232558,
        "averageDamageTaken": 0.3488372093023256,
        "averageNetDamage": 1.1395348837209303,
        "lethalMoves": 3,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 5,
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
            "played": 43,
            "winRate": 0.7674418604651163
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
        "offered": 184,
        "played": 41,
        "ignored": 159,
        "selectionRate": 0.22282608695652173,
        "wins": 34,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.8292682926829268,
        "averageFlips": 0.17073170731707318,
        "failedImpactRate": 0.72,
        "averageFlipMargin": 1.5714285714285714,
        "averageEffectAmount": 0.8292682926829268,
        "averageDamageDealt": 2.682926829268293,
        "averageDamageTaken": 0.21951219512195122,
        "averageNetDamage": 2.4634146341463414,
        "lethalMoves": 5,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "expert",
            "played": 22,
            "winRate": 0.8636363636363636
          },
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0.8181818181818182
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
            "played": 41,
            "winRate": 0.8292682926829268
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
        "offered": 58,
        "played": 34,
        "ignored": 48,
        "selectionRate": 0.5862068965517241,
        "wins": 29,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.8529411764705882,
        "averageFlips": 0.29411764705882354,
        "failedImpactRate": 0.5833333333333334,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 2.0588235294117645,
        "averageDamageDealt": 0.5294117647058824,
        "averageDamageTaken": 0.17647058823529413,
        "averageNetDamage": 0.3529411764705882,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.8
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.9230769230769231
          },
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.8333333333333334
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 34,
            "winRate": 0.8529411764705882
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
        "offered": 47,
        "played": 32,
        "ignored": 35,
        "selectionRate": 0.6808510638297872,
        "wins": 21,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.65625,
        "averageFlips": 0.46875,
        "failedImpactRate": 0.4,
        "averageFlipMargin": 1.9333333333333333,
        "averageEffectAmount": 2.125,
        "averageDamageDealt": 1.15625,
        "averageDamageTaken": 0.1875,
        "averageNetDamage": 0.96875,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "expert",
            "played": 17,
            "winRate": 0.6470588235294118
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.8333333333333334
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
            "played": 32,
            "winRate": 0.65625
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
        "offered": 87,
        "played": 29,
        "ignored": 73,
        "selectionRate": 0.3333333333333333,
        "wins": 22,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.7586206896551724,
        "averageFlips": 0.1724137931034483,
        "failedImpactRate": 0.6428571428571429,
        "averageFlipMargin": 2.8,
        "averageEffectAmount": 1.8620689655172413,
        "averageDamageDealt": 1.2758620689655173,
        "averageDamageTaken": 0.06896551724137931,
        "averageNetDamage": 1.2068965517241381,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 29,
            "winRate": 0.7586206896551724
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
        "offered": 47,
        "played": 28,
        "ignored": 38,
        "selectionRate": 0.5957446808510638,
        "wins": 20,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.7142857142857143,
        "averageFlips": 0.32142857142857145,
        "failedImpactRate": 0.5909090909090909,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 1.8571428571428572,
        "averageDamageDealt": 1.6785714285714286,
        "averageDamageTaken": 0.9285714285714286,
        "averageNetDamage": 0.75,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 7,
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
            "played": 28,
            "winRate": 0.7142857142857143
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
        "offered": 38,
        "played": 23,
        "ignored": 25,
        "selectionRate": 0.6052631578947368,
        "wins": 17,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.7391304347826086,
        "averageFlips": 0.5217391304347826,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.5833333333333333,
        "averageEffectAmount": 0.34782608695652173,
        "averageDamageDealt": 2.0869565217391304,
        "averageDamageTaken": 1.1304347826086956,
        "averageNetDamage": 0.9565217391304348,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.7142857142857143
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
            "played": 23,
            "winRate": 0.7391304347826086
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
        "played": 23,
        "ignored": 57,
        "selectionRate": 0.32857142857142857,
        "wins": 17,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.7391304347826086,
        "averageFlips": 0.34782608695652173,
        "failedImpactRate": 0.6363636363636364,
        "averageFlipMargin": 2,
        "averageEffectAmount": 2.6956521739130435,
        "averageDamageDealt": 1.173913043478261,
        "averageDamageTaken": 0.391304347826087,
        "averageNetDamage": 0.7826086956521741,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0.8333333333333334
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 23,
            "winRate": 0.7391304347826086
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
        "offered": 35,
        "played": 21,
        "ignored": 23,
        "selectionRate": 0.6,
        "wins": 15,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.7142857142857143,
        "averageFlips": 0.14285714285714285,
        "failedImpactRate": 0.7272727272727273,
        "averageFlipMargin": 4,
        "averageEffectAmount": 1.0476190476190477,
        "averageDamageDealt": 0.23809523809523808,
        "averageDamageTaken": 0.8571428571428571,
        "averageNetDamage": -0.6190476190476191,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
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
        "offered": 62,
        "played": 21,
        "ignored": 47,
        "selectionRate": 0.3387096774193548,
        "wins": 14,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.6666666666666666,
        "averageFlips": 0.2857142857142857,
        "failedImpactRate": 0.5384615384615384,
        "averageFlipMargin": 2.3333333333333335,
        "averageEffectAmount": 0.9047619047619048,
        "averageDamageDealt": 0.5714285714285714,
        "averageDamageTaken": 0.23809523809523808,
        "averageNetDamage": 0.3333333333333333,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0
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
        "cardId": "reward-common-06",
        "name": "Carte commune 06",
        "family": "arcane",
        "rarity": "common",
        "role": "connector",
        "sourceType": "enemy-upgrade",
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
          "common",
          "connector"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 16,
        "played": 12,
        "ignored": 11,
        "selectionRate": 0.75,
        "wins": 9,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.25,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.6666666666666667,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0.6666666666666666
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Combats de run complet apres deckbuilding",
            "startingDeckCardCount": 12,
            "played": 12,
            "winRate": 0.75
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
        "played": 10,
        "ignored": 10,
        "selectionRate": 0.7142857142857143,
        "wins": 10,
        "losses": 0,
        "draws": 0,
        "winRateWhenPlayed": 1,
        "averageFlips": 0.4,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.25,
        "averageEffectAmount": 1.3,
        "averageDamageDealt": 1,
        "averageDamageTaken": 0,
        "averageNetDamage": 1,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 9,
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
            "played": 10,
            "winRate": 1
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
        "offered": 13,
        "played": 7,
        "ignored": 7,
        "selectionRate": 0.5384615384615384,
        "wins": 5,
        "losses": 2,
        "draws": 0,
        "winRateWhenPlayed": 0.7142857142857143,
        "averageFlips": 0,
        "failedImpactRate": 1,
        "averageFlipMargin": 0,
        "averageEffectAmount": 0.42857142857142855,
        "averageDamageDealt": 2.2857142857142856,
        "averageDamageTaken": 1.4285714285714286,
        "averageNetDamage": 0.857142857142857,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
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
            "played": 7,
            "winRate": 0.7142857142857143
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
        "offered": 11,
        "played": 4,
        "ignored": 11,
        "selectionRate": 0.36363636363636365,
        "wins": 1,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.25,
        "averageFlips": 1,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.75,
        "averageEffectAmount": 3,
        "averageDamageDealt": 2,
        "averageDamageTaken": 2.25,
        "averageNetDamage": -0.25,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0.3333333333333333
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
      }
    ],
    "familyAnalytics": [
      {
        "id": "arcane",
        "label": "arcane",
        "offered": 4266,
        "played": 2247,
        "ignored": 3359,
        "selectionRate": 0.5267229254571026,
        "wins": 1841,
        "losses": 406,
        "draws": 0,
        "winRateWhenPlayed": 0.8193146417445483,
        "averageFlips": 0.32176234979973295,
        "averageDamageDealt": 0.8589230084557188,
        "averageNetDamage": 0.7352024922118381,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 654,
            "winRateWhenPlayed": 0.8073394495412844
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 586,
            "winRateWhenPlayed": 0.8054607508532423
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 543,
            "winRateWhenPlayed": 0.8158379373848987
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 440,
            "winRateWhenPlayed": 0.8636363636363636
          },
          {
            "cardId": "reward-common-06",
            "name": "Carte commune 06",
            "played": 12,
            "winRateWhenPlayed": 0.75
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
        "offered": 955,
        "played": 488,
        "ignored": 739,
        "selectionRate": 0.5109947643979058,
        "wins": 334,
        "losses": 154,
        "draws": 0,
        "winRateWhenPlayed": 0.6844262295081968,
        "averageFlips": 0.5614754098360656,
        "averageDamageDealt": 1.9774590163934427,
        "averageNetDamage": 1.5655737704918034,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 144,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 123,
            "winRateWhenPlayed": 0.6910569105691057
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 104,
            "winRateWhenPlayed": 0.6730769230769231
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 80,
            "winRateWhenPlayed": 0.725
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 23,
            "winRateWhenPlayed": 0.7391304347826086
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
        "offered": 446,
        "played": 224,
        "ignored": 353,
        "selectionRate": 0.5022421524663677,
        "wins": 156,
        "losses": 68,
        "draws": 0,
        "winRateWhenPlayed": 0.6964285714285714,
        "averageFlips": 0.28125,
        "averageDamageDealt": 1.0491071428571428,
        "averageNetDamage": 0.59375,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 58,
            "winRateWhenPlayed": 0.7758620689655172
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 51,
            "winRateWhenPlayed": 0.7254901960784313
          },
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 34,
            "winRateWhenPlayed": 0.8529411764705882
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 32,
            "winRateWhenPlayed": 0.65625
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 19,
            "winRateWhenPlayed": 0.2631578947368421
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
        "offered": 437,
        "played": 191,
        "ignored": 342,
        "selectionRate": 0.43707093821510296,
        "wins": 152,
        "losses": 39,
        "draws": 0,
        "winRateWhenPlayed": 0.7958115183246073,
        "averageFlips": 0.17277486910994763,
        "averageDamageDealt": 0.5026178010471204,
        "averageNetDamage": 0.1832460732984293,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 81,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 60,
            "winRateWhenPlayed": 0.8833333333333333
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 21,
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 21,
            "winRateWhenPlayed": 0.6666666666666666
          },
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 6,
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
        "offered": 457,
        "played": 185,
        "ignored": 366,
        "selectionRate": 0.4048140043763676,
        "wins": 141,
        "losses": 44,
        "draws": 0,
        "winRateWhenPlayed": 0.7621621621621621,
        "averageFlips": 0.2702702702702703,
        "averageDamageDealt": 1.3945945945945946,
        "averageNetDamage": 1.0972972972972972,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 54,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 49,
            "winRateWhenPlayed": 0.7755102040816326
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 44,
            "winRateWhenPlayed": 0.7727272727272727
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 29,
            "winRateWhenPlayed": 0.7586206896551724
          },
          {
            "cardId": "reward-common-09",
            "name": "Carte commune 09",
            "played": 9,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 432,
        "played": 144,
        "ignored": 363,
        "selectionRate": 0.3333333333333333,
        "wins": 109,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.7569444444444444,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 1.7777777777777777,
        "averageNetDamage": 1.3055555555555554,
        "topCards": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 43,
            "winRateWhenPlayed": 0.7674418604651163
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 41,
            "winRateWhenPlayed": 0.8292682926829268
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 28,
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 23,
            "winRateWhenPlayed": 0.7391304347826086
          },
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 4,
            "winRateWhenPlayed": 0.75
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
        "offered": 1511,
        "played": 1010,
        "ignored": 1182,
        "selectionRate": 0.6684315023163467,
        "wins": 788,
        "losses": 222,
        "draws": 0,
        "winRateWhenPlayed": 0.7801980198019802,
        "averageFlips": 0.3504950495049505,
        "averageDamageDealt": 0.49207920792079207,
        "averageNetDamage": 0.4178217821782178,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 644,
            "winRateWhenPlayed": 0.8090062111801242
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 142,
            "winRateWhenPlayed": 0.676056338028169
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 81,
            "winRateWhenPlayed": 0.7777777777777778
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 51,
            "winRateWhenPlayed": 0.7254901960784313
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 49,
            "winRateWhenPlayed": 0.7755102040816326
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
        "offered": 1260,
        "played": 825,
        "ignored": 954,
        "selectionRate": 0.6547619047619048,
        "wins": 635,
        "losses": 190,
        "draws": 0,
        "winRateWhenPlayed": 0.7696969696969697,
        "averageFlips": 0.4072727272727273,
        "averageDamageDealt": 0.5163636363636364,
        "averageNetDamage": 0.31393939393939396,
        "topCards": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 586,
            "winRateWhenPlayed": 0.8054607508532423
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 104,
            "winRateWhenPlayed": 0.6730769230769231
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 44,
            "winRateWhenPlayed": 0.7727272727272727
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 28,
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 21,
            "winRateWhenPlayed": 0.7142857142857143
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
        "offered": 1572,
        "played": 772,
        "ignored": 1245,
        "selectionRate": 0.4910941475826972,
        "wins": 602,
        "losses": 170,
        "draws": 0,
        "winRateWhenPlayed": 0.7797927461139896,
        "averageFlips": 0.3432642487046632,
        "averageDamageDealt": 0.8782383419689119,
        "averageNetDamage": 0.645077720207254,
        "topCards": [
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 538,
            "winRateWhenPlayed": 0.8234200743494424
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 80,
            "winRateWhenPlayed": 0.725
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 32,
            "winRateWhenPlayed": 0.65625
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 29,
            "winRateWhenPlayed": 0.7586206896551724
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 23,
            "winRateWhenPlayed": 0.7391304347826086
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
        "offered": 2241,
        "played": 748,
        "ignored": 1796,
        "selectionRate": 0.33377956269522535,
        "wins": 628,
        "losses": 120,
        "draws": 0,
        "winRateWhenPlayed": 0.839572192513369,
        "averageFlips": 0.2606951871657754,
        "averageDamageDealt": 2.5828877005347595,
        "averageNetDamage": 2.2633689839572195,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 395,
            "winRateWhenPlayed": 0.8911392405063291
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 116,
            "winRateWhenPlayed": 0.7241379310344828
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 60,
            "winRateWhenPlayed": 0.8833333333333333
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 58,
            "winRateWhenPlayed": 0.7758620689655172
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 54,
            "winRateWhenPlayed": 0.7777777777777778
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
        "offered": 260,
        "played": 72,
        "ignored": 213,
        "selectionRate": 0.27692307692307694,
        "wins": 39,
        "losses": 33,
        "draws": 0,
        "winRateWhenPlayed": 0.5416666666666666,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 2.4027777777777777,
        "averageNetDamage": 1.3333333333333333,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Fusion sylvestre",
            "played": 45,
            "winRateWhenPlayed": 0.6222222222222222
          },
          {
            "cardId": "wandering-glyph",
            "name": "Fusion sylvestre",
            "played": 10,
            "winRateWhenPlayed": 0.7
          },
          {
            "cardId": "ember-imp",
            "name": "Fusion sylvestre",
            "played": 7,
            "winRateWhenPlayed": 0.14285714285714285
          },
          {
            "cardId": "star-witch",
            "name": "Fusion sylvestre",
            "played": 5,
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-05",
            "name": "Fusion sylvestre",
            "played": 3,
            "winRateWhenPlayed": 1
          }
        ],
        "status": "underperformer",
        "notes": [
          "Perd trop souvent face a une base de 79%."
        ]
      },
      {
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 59,
        "played": 35,
        "ignored": 49,
        "selectionRate": 0.5932203389830508,
        "wins": 30,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.8571428571428571,
        "averageFlips": 0.2857142857142857,
        "averageDamageDealt": 0.5142857142857142,
        "averageNetDamage": 0.3428571428571428,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 34,
            "winRateWhenPlayed": 0.8529411764705882
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
        "id": "engine",
        "label": "engine",
        "offered": 28,
        "played": 12,
        "ignored": 25,
        "selectionRate": 0.42857142857142855,
        "wins": 9,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.75,
        "averageFlips": 0.5833333333333334,
        "averageDamageDealt": 0.75,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "reward-common-01",
            "name": "Carte commune 01",
            "played": 6,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-uncommon-05",
            "name": "Carte inhabituelle 05",
            "played": 4,
            "winRateWhenPlayed": 0.25
          },
          {
            "cardId": "reward-uncommon-01",
            "name": "Carte inhabituelle 01",
            "played": 1,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-common-11",
            "name": "Carte commune 11",
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
        "offered": 62,
        "played": 5,
        "ignored": 58,
        "selectionRate": 0.08064516129032258,
        "wins": 2,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.4,
        "averageFlips": 0,
        "averageDamageDealt": 1.4,
        "averageNetDamage": -1,
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
            "winRateWhenPlayed": 0
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
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
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 6697,
        "played": 3354,
        "ignored": 5279,
        "selectionRate": 0.5008212632522024,
        "wins": 2645,
        "losses": 709,
        "draws": 0,
        "winRateWhenPlayed": 0.7886106141920095,
        "averageFlips": 0.3404889683959451,
        "averageDamageDealt": 1.0703637447823495,
        "averageNetDamage": 0.8637447823494336,
        "topCards": [
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 654,
            "winRateWhenPlayed": 0.8073394495412844
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 586,
            "winRateWhenPlayed": 0.8054607508532423
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 543,
            "winRateWhenPlayed": 0.8158379373848987
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 440,
            "winRateWhenPlayed": 0.8636363636363636
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 144,
            "winRateWhenPlayed": 0.6666666666666666
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
        "offered": 218,
        "played": 117,
        "ignored": 171,
        "selectionRate": 0.536697247706422,
        "wins": 83,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.7094017094017094,
        "averageFlips": 0.4188034188034188,
        "averageDamageDealt": 1.2222222222222223,
        "averageNetDamage": 0.7094017094017095,
        "topCards": [
          {
            "cardId": "reward-uncommon-10",
            "name": "Carte inhabituelle 10",
            "played": 34,
            "winRateWhenPlayed": 0.8529411764705882
          },
          {
            "cardId": "reward-uncommon-04",
            "name": "Carte inhabituelle 04",
            "played": 32,
            "winRateWhenPlayed": 0.65625
          },
          {
            "cardId": "reward-uncommon-02",
            "name": "Carte inhabituelle 02",
            "played": 23,
            "winRateWhenPlayed": 0.7391304347826086
          },
          {
            "cardId": "reward-uncommon-08",
            "name": "Carte inhabituelle 08",
            "played": 13,
            "winRateWhenPlayed": 0.5384615384615384
          },
          {
            "cardId": "reward-uncommon-12",
            "name": "Carte inhabituelle 12",
            "played": 7,
            "winRateWhenPlayed": 0.7142857142857143
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
        "offered": 78,
        "played": 8,
        "ignored": 72,
        "selectionRate": 0.10256410256410256,
        "wins": 5,
        "losses": 3,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0,
        "averageDamageDealt": 0.875,
        "averageNetDamage": -0.625,
        "topCards": [
          {
            "cardId": "reward-rare-05",
            "name": "Carte rare 05",
            "played": 4,
            "winRateWhenPlayed": 0.75
          },
          {
            "cardId": "reward-rare-06",
            "name": "Carte rare 06",
            "played": 2,
            "winRateWhenPlayed": 1
          },
          {
            "cardId": "reward-rare-04",
            "name": "Carte rare 04",
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
      }
    ],
    "comboAnalytics": [
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 600,
        "wins": 501,
        "losses": 99,
        "draws": 0,
        "winRate": 0.835,
        "averageFlips": 0.3466666666666667,
        "averageDamageDealt": 1.97,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 560,
        "wins": 490,
        "losses": 70,
        "draws": 0,
        "winRate": 0.875,
        "averageFlips": 0.19107142857142856,
        "averageDamageDealt": 3.976785714285714,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:star-witch:draw-next-turn",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> draw-next-turn",
        "count": 395,
        "wins": 321,
        "losses": 74,
        "draws": 0,
        "winRate": 0.8126582278481013,
        "averageFlips": 0.3569620253164557,
        "averageDamageDealt": 0.07848101265822785,
        "averageEffectAmount": 1.030379746835443,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:star-witch:boost-self",
        "kind": "effect",
        "label": "Sorciere d'etoiles -> boost-self",
        "count": 390,
        "wins": 314,
        "losses": 76,
        "draws": 0,
        "winRate": 0.8051282051282052,
        "averageFlips": 0.36153846153846153,
        "averageDamageDealt": 0.07948717948717948,
        "averageEffectAmount": 1.3307692307692307,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-adept:draw-next-turn",
        "kind": "effect",
        "label": "Adepte sigillaire -> draw-next-turn",
        "count": 231,
        "wins": 193,
        "losses": 38,
        "draws": 0,
        "winRate": 0.8354978354978355,
        "averageFlips": 0.30303030303030304,
        "averageDamageDealt": 0.4329004329004329,
        "averageEffectAmount": 1.29004329004329,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:wandering-glyph:gain-shield",
        "kind": "effect",
        "label": "Glyphe errant -> gain-shield",
        "count": 153,
        "wins": 121,
        "losses": 32,
        "draws": 0,
        "winRate": 0.7908496732026143,
        "averageFlips": 0.09803921568627451,
        "averageDamageDealt": 0.026143790849673203,
        "averageEffectAmount": 4.745098039215686,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 138,
        "wins": 98,
        "losses": 40,
        "draws": 0,
        "winRate": 0.7101449275362319,
        "averageFlips": 0.5579710144927537,
        "averageDamageDealt": 2.920289855072464,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+automaton",
        "kind": "stack-hybrid",
        "label": "arcane + automaton dans la pile",
        "count": 104,
        "wins": 89,
        "losses": 15,
        "draws": 0,
        "winRate": 0.8557692307692307,
        "averageFlips": 0.2692307692307692,
        "averageDamageDealt": 0.8365384615384616,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moon-scribe:boost-self",
        "kind": "effect",
        "label": "Scribe lunaire -> boost-self",
        "count": 89,
        "wins": 73,
        "losses": 16,
        "draws": 0,
        "winRate": 0.8202247191011236,
        "averageFlips": 0.056179775280898875,
        "averageDamageDealt": 6.022471910112359,
        "averageEffectAmount": 1.1348314606741574,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 77,
        "wins": 52,
        "losses": 25,
        "draws": 0,
        "winRate": 0.6753246753246753,
        "averageFlips": 0.8051948051948052,
        "averageDamageDealt": 1.7142857142857142,
        "averageEffectAmount": 0.6233766233766234,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+familiar",
        "kind": "stack-hybrid",
        "label": "arcane + familiar dans la pile",
        "count": 74,
        "wins": 63,
        "losses": 11,
        "draws": 0,
        "winRate": 0.8513513513513513,
        "averageFlips": 0.16216216216216217,
        "averageDamageDealt": 0.20270270270270271,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 69,
        "wins": 59,
        "losses": 10,
        "draws": 0,
        "winRate": 0.855072463768116,
        "averageFlips": 0.3188405797101449,
        "averageDamageDealt": 6.942028985507246,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 52,
        "wins": 39,
        "losses": 13,
        "draws": 0,
        "winRate": 0.75,
        "averageFlips": 0.1346153846153846,
        "averageDamageDealt": 1.4615384615384615,
        "averageEffectAmount": 1.4807692307692308,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "stack-hybrid:arcane+demon",
        "kind": "stack-hybrid",
        "label": "arcane + demon dans la pile",
        "count": 48,
        "wins": 35,
        "losses": 13,
        "draws": 0,
        "winRate": 0.7291666666666666,
        "averageFlips": 0.4375,
        "averageDamageDealt": 1.8333333333333333,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 46,
        "wins": 37,
        "losses": 9,
        "draws": 0,
        "winRate": 0.8043478260869565,
        "averageFlips": 0.3695652173913043,
        "averageDamageDealt": 1.0217391304347827,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 46,
        "wins": 31,
        "losses": 15,
        "draws": 0,
        "winRate": 0.6739130434782609,
        "averageFlips": 1.0869565217391304,
        "averageDamageDealt": 2.5652173913043477,
        "averageEffectAmount": 1.673913043478261,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "stack-hybrid:arcane+revenant",
        "kind": "stack-hybrid",
        "label": "arcane + revenant dans la pile",
        "count": 45,
        "wins": 41,
        "losses": 4,
        "draws": 0,
        "winRate": 0.9111111111111111,
        "averageFlips": 0.2222222222222222,
        "averageDamageDealt": 1.4,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 41,
        "wins": 32,
        "losses": 9,
        "draws": 0,
        "winRate": 0.7804878048780488,
        "averageFlips": 0.34146341463414637,
        "averageDamageDealt": 1.3658536585365855,
        "averageEffectAmount": 1.048780487804878,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->arcane",
        "kind": "family-chain",
        "label": "automaton -> arcane",
        "count": 40,
        "wins": 33,
        "losses": 7,
        "draws": 0,
        "winRate": 0.825,
        "averageFlips": 0.425,
        "averageDamageDealt": 1.1,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+arcane",
        "kind": "friendly-adjacent",
        "label": "familiar allie + arcane",
        "count": 38,
        "wins": 37,
        "losses": 1,
        "draws": 0,
        "winRate": 0.9736842105263158,
        "averageFlips": 0.07894736842105263,
        "averageDamageDealt": 3.6842105263157894,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:arcane->automaton",
        "kind": "family-chain",
        "label": "arcane -> automaton",
        "count": 37,
        "wins": 28,
        "losses": 9,
        "draws": 0,
        "winRate": 0.7567567567567568,
        "averageFlips": 0.2702702702702703,
        "averageDamageDealt": 1.837837837837838,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:familiar->arcane",
        "kind": "family-chain",
        "label": "familiar -> arcane",
        "count": 35,
        "wins": 34,
        "losses": 1,
        "draws": 0,
        "winRate": 0.9714285714285714,
        "averageFlips": 0.4,
        "averageDamageDealt": 1,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 35,
        "wins": 31,
        "losses": 4,
        "draws": 0,
        "winRate": 0.8857142857142857,
        "averageFlips": 0.14285714285714285,
        "averageDamageDealt": 2.7142857142857144,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+revenant",
        "kind": "friendly-adjacent",
        "label": "arcane allie + revenant",
        "count": 34,
        "wins": 27,
        "losses": 7,
        "draws": 0,
        "winRate": 0.7941176470588235,
        "averageFlips": 0.08823529411764706,
        "averageDamageDealt": 3.323529411764706,
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
        "sampleSize": 49,
        "id": "card-tin-oracle-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc sous-performe",
        "detail": "19 plays, 26% win, net PV -0.63.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 44,
        "id": "card-gear-monk-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Moine engrene sous-performe",
        "detail": "18 plays, 44% win, net PV -0.33.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 33,
        "id": "card-reward-uncommon-08-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Carte inhabituelle 08 sous-performe",
        "detail": "13 plays, 54% win, net PV 1.00.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 43,
        "id": "card-reward-rare-05-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Carte rare 05 est ignoree par les bots",
        "detail": "43 offres, 9% selection, 75% win quand jouee, role finisher.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 600,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "600 occurrences, 84% win, 0.35 flips, 1.97 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 560,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "560 occurrences, 88% win, 0.19 flips, 3.98 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 260,
        "id": "role-sans-role-buff",
        "severity": "watch",
        "action": "verify",
        "title": "sans role manque d'attraction",
        "detail": "260 offres, 28% selection, 54% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 138,
        "title": "demon -> demon ressort comme combo",
        "detail": "138 occurrences, 71% win, 0.56 flips, 2.92 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:moon-scribe:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 89,
        "title": "Scribe lunaire -> boost-self ressort comme combo",
        "detail": "89 occurrences, 82% win, 0.06 flips, 6.02 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "rarity",
        "confidence": "high",
        "sampleSize": 78,
        "id": "rarity-rare-buff",
        "severity": "watch",
        "action": "verify",
        "title": "rare manque d'attraction",
        "detail": "78 offres, 10% selection, 63% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 77,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "77 occurrences, 68% win, 0.81 flips, 1.71 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 69,
        "title": "demon allie + demon ressort comme combo",
        "detail": "69 occurrences, 86% win, 0.32 flips, 6.94 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 62,
        "id": "role-finisher-buff",
        "severity": "watch",
        "action": "verify",
        "title": "finisher manque d'attraction",
        "detail": "62 offres, 8% selection, 40% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-stack-hybrid:arcane+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 48,
        "title": "arcane + demon dans la pile ressort comme combo",
        "detail": "48 occurrences, 73% win, 0.44 flips, 1.83 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 46,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "46 occurrences, 67% win, 1.09 flips, 2.57 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-stack-hybrid:arcane+revenant",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 45,
        "title": "arcane + revenant dans la pile ressort comme combo",
        "detail": "45 occurrences, 91% win, 0.22 flips, 1.40 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:familiar+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 38,
        "title": "familiar allie + arcane ressort comme combo",
        "detail": "38 occurrences, 97% win, 0.08 flips, 3.68 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:arcane->automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 37,
        "title": "arcane -> automaton ressort comme combo",
        "detail": "37 occurrences, 76% win, 0.27 flips, 1.84 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-widow-knight-buff",
      "severity": "problem",
      "title": "Chevalier veuf sous-performe",
      "detail": "274 plays, 34% win, net PV 0.61. Confiance high, echantillon 1059.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-family-automaton-nerf",
      "severity": "problem",
      "title": "automaton domine l'echantillon",
      "detail": "1552 plays, 80% win, net PV 0.33. Confiance high, echantillon 2802.",
      "recommendation": "Comparer ses meilleures cartes avant de nerfer toute la famille ou tout le role."
    },
    {
      "id": "diagnostic-combo-effect:gear-monk:draw-next-turn",
      "severity": "problem",
      "title": "Moine engrene -> draw-next-turn ressort comme combo",
      "detail": "344 occurrences, 80% win, 0.30 flips, 0.15 degats. Confiance high, echantillon 344.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:tin-oracle:gain-mana-next-turn",
      "severity": "problem",
      "title": "Oracle de fer-blanc -> gain-mana-next-turn ressort comme combo",
      "detail": "232 occurrences, 82% win, 0.06 flips, 0.07 degats. Confiance high, echantillon 232.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-adventure-card-tin-oracle-buff",
      "severity": "problem",
      "title": "Run complet: Oracle de fer-blanc sous-performe",
      "detail": "19 plays, 26% win, net PV -0.63. Confiance high, echantillon 49.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-gear-monk-buff",
      "severity": "problem",
      "title": "Run complet: Moine engrene sous-performe",
      "detail": "18 plays, 44% win, net PV -0.33. Confiance high, echantillon 44.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "diagnostic-adventure-card-reward-uncommon-08-buff",
      "severity": "problem",
      "title": "Run complet: Carte inhabituelle 08 sous-performe",
      "detail": "13 plays, 54% win, net PV 1.00. Confiance high, echantillon 33.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 37.5% des runs complets, avec 80.6% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ],
  "trend": {
    "windowSize": 12,
    "snapshots": [
      {
        "reportId": "ai-lab-20260614-231344",
        "generatedAt": "2026-06-14T23:13:44.450Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.758957654723127,
          "arcane": 0.5649263721552878,
          "human": 0.4708771929824561,
          "familiar": 0.5480905233380481,
          "revenant": 0.35518731988472624,
          "demon": 0.562358276643991
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-demon": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "arcane-vs-familiar": 0.5,
          "arcane-vs-human": 0.5,
          "arcane-vs-revenant": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-revenant": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.375,
          "expert": 0.625,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3442622950819672
          }
        ]
      },
      {
        "reportId": "ai-lab-20260615-034613",
        "generatedAt": "2026-06-15T03:46:13.083Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.875,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.9583333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.451393609789259,
          "automaton": 0.774081774081774,
          "human": 0.5066018068102849,
          "familiar": 0.48283261802575106,
          "revenant": 0.39001447178002896,
          "demon": 0.6851851851851852
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "demon-vs-familiar": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.5,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.875
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6808510638297872
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6846846846846847
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6948356807511737
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6804123711340206
          }
        ]
      },
      {
        "reportId": "ai-lab-20260615-100100",
        "generatedAt": "2026-06-15T10:01:00.557Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.4166666666666667,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.7916666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "human": 0.4553275976174719,
          "automaton": 0.7320307048150733,
          "arcane": 0.49067431850789095,
          "familiar": 0.6490963855421686,
          "revenant": 0.3834988540870894,
          "demon": 0.5739910313901345
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "arcane-vs-revenant": 1,
          "automaton-vs-familiar": 0.875,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-demon": 0.5,
          "arcane-vs-human": 0.5,
          "demon-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0,
          "regular": 0.25,
          "expert": 0.5,
          "champion": 0.375
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260615-204912",
        "generatedAt": "2026-06-15T20:49:12.969Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5833333333333334,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.6690741956664478,
          "human": 0.4524128686327078,
          "arcane": 0.29411764705882354,
          "revenant": 0.6289529163738581,
          "familiar": 0.5822994210090985,
          "demon": 0.6861642294713161
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-familiar": 1,
          "demon-vs-familiar": 1,
          "demon-vs-human": 1,
          "demon-vs-revenant": 0.875,
          "arcane-vs-revenant": 0.25,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-human": 0.625,
          "human-vs-revenant": 0.375,
          "arcane-vs-demon": 0.5,
          "automaton-vs-human": 0.5,
          "automaton-vs-revenant": 0.5,
          "familiar-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.25,
          "regular": 0.25,
          "expert": 0.625,
          "champion": 0.5
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.6844262295081968
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7048458149779736
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.705
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.27832512315270935
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.26649746192893403
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.24725274725274726
          }
        ]
      },
      {
        "reportId": "ai-lab-20260616-015552",
        "generatedAt": "2026-06-16T01:55:52.359Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "human": 0.40179186767746383,
          "automaton": 0.8455114822546973,
          "arcane": 0.5453885257806826,
          "revenant": 0.36714610143830434,
          "familiar": 0.5431512272367379,
          "demon": 0.6359338061465721
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-human": 1,
          "automaton-vs-revenant": 1,
          "demon-vs-revenant": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-demon": 0.25,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-demon": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "familiar-vs-human": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.25,
          "expert": 0.75,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3175182481751825
          }
        ]
      },
      {
        "reportId": "ai-lab-20260616-065513",
        "generatedAt": "2026-06-16T06:55:13.354Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.9166666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.5284552845528455,
          "automaton": 0.8162124388539483,
          "revenant": 0.408929836995039,
          "familiar": 0.5438988095238095,
          "human": 0.39570552147239263,
          "demon": 0.5709534368070953
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.25,
          "demon-vs-human": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "demon-vs-revenant": 0.625,
          "arcane-vs-human": 0.5,
          "automaton-vs-demon": 0.5,
          "familiar-vs-human": 0.5,
          "familiar-vs-revenant": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.625,
          "champion": 0.625
        },
        "cardSignals": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "status": "overperformer",
            "winRateWhenPlayed": 0.8106508875739645
          }
        ]
      },
      {
        "reportId": "ai-lab-20260616-120254",
        "generatedAt": "2026-06-16T12:02:54.872Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.6666666666666666,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5416666666666666,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.7038801906058543,
          "arcane": 0.6142857142857143,
          "human": 0.4356223175965665,
          "familiar": 0.5469774217042972,
          "revenant": 0.36472346786248133,
          "demon": 0.6069767441860465
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "demon-vs-revenant": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-human": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "demon-vs-familiar": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.125,
          "expert": 0.75,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "status": "underperformer",
            "winRateWhenPlayed": 0.35
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.3463687150837989
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34831460674157305
          }
        ]
      },
      {
        "reportId": "ai-lab-20260616-165911",
        "generatedAt": "2026-06-16T16:59:11.260Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "healthy",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9166666666666666,
          "opportunist-vs-regular": 0.625,
          "regular-vs-expert": 0.7916666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.7496688741721854,
          "human": 0.4153116531165312,
          "familiar": 0.6211180124223602,
          "arcane": 0.4111198120595145,
          "revenant": 0.40723270440251574,
          "demon": 0.7233250620347395
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-familiar": 1,
          "demon-vs-human": 1,
          "arcane-vs-demon": 0.25,
          "automaton-vs-human": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "human-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-human": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-revenant": 0.5,
          "automaton-vs-demon": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0.125,
          "opportunist": 0.375,
          "regular": 0.25,
          "expert": 0.625,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7361111111111112
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7142857142857143
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7222222222222222
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "status": "overperformer",
            "winRateWhenPlayed": 0.7195767195767195
          }
        ]
      },
      {
        "reportId": "ai-lab-20260616-221201",
        "generatedAt": "2026-06-16T22:12:01.483Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.75,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 1,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.8333333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.4980519480519481,
          "automaton": 0.7615937295885042,
          "human": 0.4420836189170665,
          "familiar": 0.5352727272727272,
          "revenant": 0.429096252755327,
          "demon": 0.6197530864197531
        },
        "starterFamilyMatchupWinRates": {
          "automaton-vs-familiar": 1,
          "automaton-vs-human": 1,
          "arcane-vs-familiar": 0.25,
          "arcane-vs-revenant": 0.75,
          "automaton-vs-revenant": 0.75,
          "demon-vs-familiar": 0.75,
          "demon-vs-human": 0.75,
          "arcane-vs-human": 0.375,
          "demon-vs-revenant": 0.625,
          "familiar-vs-human": 0.625,
          "familiar-vs-revenant": 0.625,
          "arcane-vs-automaton": 0.5,
          "arcane-vs-demon": 0.5,
          "automaton-vs-demon": 0.5,
          "human-vs-revenant": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.25,
          "regular": 0.375,
          "expert": 0.375,
          "champion": 0.625
        },
        "cardSignals": []
      },
      {
        "reportId": "ai-lab-20260617-032250",
        "generatedAt": "2026-06-17T03:22:50.021Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.5,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.5833333333333334,
          "regular-vs-expert": 0.7083333333333334,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "automaton": 0.86328125,
          "arcane": 0.28764348413234303,
          "human": 0.386001386001386,
          "revenant": 0.39703808180535965,
          "familiar": 0.6746203904555315,
          "demon": 0.6593533487297921
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "automaton-vs-human": 1,
          "automaton-vs-revenant": 1,
          "demon-vs-human": 1,
          "automaton-vs-familiar": 0.875,
          "arcane-vs-revenant": 0.25,
          "demon-vs-familiar": 0.75,
          "demon-vs-revenant": 0.75,
          "familiar-vs-human": 0.75,
          "human-vs-revenant": 0.75,
          "arcane-vs-automaton": 0.375,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "automaton-vs-demon": 0.625,
          "familiar-vs-revenant": 0.625
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.125,
          "regular": 0.25,
          "expert": 0.25,
          "champion": 0.75
        },
        "cardSignals": [
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.30787589498806683
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2787286063569682
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "status": "underperformer",
            "winRateWhenPlayed": 0.2526041666666667
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "status": "underperformer",
            "winRateWhenPlayed": 0.31970260223048325
          }
        ]
      },
      {
        "reportId": "ai-lab-20260617-085241",
        "generatedAt": "2026-06-17T08:52:41.467Z",
        "rulesetVersion": "v8-2026-06-07-poison-mana-counterplay",
        "startingPlayerWinRate": 0.3333333333333333,
        "deckStatus": "watch",
        "higherModelWinRates": {
          "beginner-vs-opportunist": 0.9583333333333334,
          "opportunist-vs-regular": 0.6666666666666666,
          "regular-vs-expert": 0.6666666666666666,
          "expert-vs-champion": 0.5
        },
        "familyWinRates": {
          "arcane": 0.4425363276089828,
          "automaton": 0.7506702412868632,
          "human": 0.3848797250859107,
          "revenant": 0.3730385164051355,
          "familiar": 0.7094594594594594,
          "demon": 0.5956937799043063
        },
        "starterFamilyMatchupWinRates": {
          "arcane-vs-familiar": 0,
          "arcane-vs-revenant": 1,
          "automaton-vs-human": 1,
          "demon-vs-revenant": 0.875,
          "arcane-vs-automaton": 0.25,
          "automaton-vs-familiar": 0.75,
          "familiar-vs-human": 0.75,
          "arcane-vs-demon": 0.375,
          "arcane-vs-human": 0.375,
          "familiar-vs-revenant": 0.625,
          "human-vs-revenant": 0.625,
          "automaton-vs-demon": 0.5,
          "automaton-vs-revenant": 0.5,
          "demon-vs-familiar": 0.5,
          "demon-vs-human": 0.5
        },
        "adventureBossReachRates": {
          "beginner": 0,
          "opportunist": 0.375,
          "regular": 0.375,
          "expert": 0.5,
          "champion": 0.375
        },
        "cardSignals": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "status": "underperformer",
            "winRateWhenPlayed": 0.34408602150537637
          }
        ]
      },
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
      }
    ],
    "signals": [
      {
        "id": "trend-family-automaton",
        "kind": "family",
        "severity": "problem",
        "title": "automaton reste trop forte",
        "detail": "77% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.7686609673511188
      },
      {
        "id": "trend-starter-matchup-automaton-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 92% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 12,
        "averageRate": 0.9166666666666666
      },
      {
        "id": "trend-family-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "revenant reste trop faible",
        "detail": "41% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.40707280531960716
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
        "id": "trend-starter-matchup-automaton-vs-human",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs human reste desequilibre",
        "detail": "La famille de gauche gagne 83% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.8333333333333334
      },
      {
        "id": "trend-starter-matchup-arcane-vs-familiar",
        "kind": "family",
        "severity": "problem",
        "title": "arcane vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 17% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 11,
        "averageRate": 0.16666666666666666
      },
      {
        "id": "trend-starter-matchup-automaton-vs-revenant",
        "kind": "family",
        "severity": "problem",
        "title": "automaton vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 77% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.7708333333333334
      },
      {
        "id": "trend-starter-matchup-arcane-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "arcane vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 69% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 10,
        "averageRate": 0.6875
      },
      {
        "id": "trend-starter-matchup-demon-vs-familiar",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs familiar reste desequilibre",
        "detail": "La famille de gauche gagne 69% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 9,
        "averageRate": 0.6875
      },
      {
        "id": "trend-family-human",
        "kind": "family",
        "severity": "watch",
        "title": "human reste trop faible",
        "detail": "43% de victoire moyenne quand ses cartes sont jouees sur 12 rapports.",
        "recommendation": "Corriger d'abord les cartes recurrentes de cette famille, puis relancer les rapports avant une refonte globale.",
        "reports": 12,
        "occurrences": 7,
        "averageRate": 0.43483081021474207
      },
      {
        "id": "trend-starter-matchup-demon-vs-revenant",
        "kind": "family",
        "severity": "watch",
        "title": "demon vs revenant reste desequilibre",
        "detail": "La famille de gauche gagne 71% en moyenne sur 12 rapports.",
        "recommendation": "Ajuster les cartes qui expliquent ce matchup, puis verifier les autres duels avant un changement global.",
        "reports": 12,
        "occurrences": 6,
        "averageRate": 0.7083333333333334
      }
    ]
  }
};
