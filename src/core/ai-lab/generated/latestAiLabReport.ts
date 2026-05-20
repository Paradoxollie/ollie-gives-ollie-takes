import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260520-183401",
  "generatedAt": "2026-05-20T18:34:01.773Z",
  "config": {
    "matchesPerPairing": 18,
    "adventureRunsPerModel": 8,
    "seed": 16,
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
      "averageHpEdge": -21.61111111111111
    },
    {
      "modelId": "opportunist",
      "games": 36,
      "wins": 19,
      "losses": 17,
      "draws": 0,
      "winRate": 0.5277777777777778,
      "averageHpEdge": 1.8888888888888888
    },
    {
      "modelId": "regular",
      "games": 36,
      "wins": 24,
      "losses": 12,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 7.027777777777778
    },
    {
      "modelId": "expert",
      "games": 36,
      "wins": 16,
      "losses": 20,
      "draws": 0,
      "winRate": 0.4444444444444444,
      "averageHpEdge": -0.5555555555555556
    },
    {
      "modelId": "champion",
      "games": 18,
      "wins": 13,
      "losses": 5,
      "draws": 0,
      "winRate": 0.7222222222222222,
      "averageHpEdge": 4.888888888888889
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
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 109,
        "rounds": 11.88888888888889,
        "flipsPerMatch": 34.22222222222222,
        "flipsPerTurn": 0.31396534148827726,
        "reshuffles": 19.27777777777778,
        "deadTurns": 2.111111111111111,
        "finalHpDifference": 10.055555555555555
      },
      "deadTurnFrequency": 0.019367991845056064,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce depart."
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
          "averageHpEdge": -21.61111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.61111111111111
        }
      ],
      "averages": {
        "turns": 41.111111111111114,
        "rounds": 4.388888888888889,
        "flipsPerMatch": 19.944444444444443,
        "flipsPerTurn": 0.4851351351351351,
        "reshuffles": 5.444444444444445,
        "deadTurns": 2.5555555555555554,
        "finalHpDifference": 21.61111111111111
      },
      "deadTurnFrequency": 0.062162162162162166
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
          "modelId": "opportunist",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -17.833333333333332
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 17.833333333333332
        }
      ],
      "averages": {
        "turns": 67.88888888888889,
        "rounds": 7,
        "flipsPerMatch": 34.5,
        "flipsPerTurn": 0.5081833060556464,
        "reshuffles": 9.944444444444445,
        "deadTurns": 5.611111111111111,
        "finalHpDifference": 20.61111111111111
      },
      "deadTurnFrequency": 0.08265139116202946
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
          "wins": 6,
          "winRate": 0.6
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 7,
          "losses": 11,
          "draws": 0,
          "winRate": 0.3888888888888889,
          "averageHpEdge": -3.7777777777777777
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 3.7777777777777777
        }
      ],
      "averages": {
        "turns": 95.22222222222223,
        "rounds": 10.277777777777779,
        "flipsPerMatch": 30.22222222222222,
        "flipsPerTurn": 0.31738623103850644,
        "reshuffles": 16.5,
        "deadTurns": 3,
        "finalHpDifference": 14.555555555555555
      },
      "deadTurnFrequency": 0.03150525087514586
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
          "modelId": "expert",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -4.888888888888889
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 4.888888888888889
        }
      ],
      "averages": {
        "turns": 90.27777777777777,
        "rounds": 9.722222222222221,
        "flipsPerMatch": 34.22222222222222,
        "flipsPerTurn": 0.3790769230769231,
        "reshuffles": 15.38888888888889,
        "deadTurns": 2.888888888888889,
        "finalHpDifference": 13.555555555555555
      },
      "deadTurnFrequency": 0.032
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
      "averageCombatTurns": 35.75,
      "averageCombatFlips": 15.375,
      "averageDeadTurns": 3.375,
      "averageReshuffles": 6,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.375,
        "demon": 0.25,
        "human": 0.125,
        "automaton": 0.125,
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
      "averageLocationsCleared": 1.375,
      "averageFinalDeckSize": 10.375,
      "averageDeckDelta": 0.375,
      "averageCombatWinRate": 0.2727272727272727,
      "averageCombatTurns": 31,
      "averageCombatFlips": 24.363636363636363,
      "averageDeadTurns": 0,
      "averageReshuffles": 4.909090909090909,
      "averageRewardsClaimed": 0.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "demon": 1
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
      "modelId": "regular",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3.25,
      "averageFinalDeckSize": 11.75,
      "averageDeckDelta": 1.75,
      "averageCombatWinRate": 0.6190476190476191,
      "averageCombatTurns": 54.19047619047619,
      "averageCombatFlips": 21.428571428571427,
      "averageDeadTurns": 2.3333333333333335,
      "averageReshuffles": 8.857142857142858,
      "averageRewardsClaimed": 2,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.25,
      "averageFusions": 0,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.6538461538461539,
        "elite": 0.15384615384615385,
        "shop": 0,
        "chest": 0.11538461538461539,
        "rest": 0.07692307692307693,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 8,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 6.25,
      "averageFinalDeckSize": 13.5,
      "averageDeckDelta": 3.5,
      "averageCombatWinRate": 0.8048780487804879,
      "averageCombatTurns": 116.58536585365853,
      "averageCombatFlips": 34.951219512195124,
      "averageDeadTurns": 2.3902439024390243,
      "averageReshuffles": 18.317073170731707,
      "averageRewardsClaimed": 4.375,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.5,
      "averageFusions": 0.375,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.72,
        "elite": 0.1,
        "shop": 0.06,
        "chest": 0.04,
        "rest": 0.08,
        "boss": 0
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
      "averageLocationsCleared": 4.5,
      "averageFinalDeckSize": 13.125,
      "averageDeckDelta": 3.125,
      "averageCombatWinRate": 0.75,
      "averageCombatTurns": 81.28125,
      "averageCombatFlips": 31.625,
      "averageDeadTurns": 0.84375,
      "averageReshuffles": 13.625,
      "averageRewardsClaimed": 3.25,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.125,
      "averageRemovals": 0,
      "averageFusions": 0.125,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.6944444444444444,
        "elite": 0.19444444444444445,
        "shop": 0.027777777777777776,
        "chest": 0.05555555555555555,
        "rest": 0.027777777777777776,
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
      "seed": 1673480978,
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
      "totalCombatTurns": 18,
      "totalCombatFlips": 10,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 1690258597,
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
      "totalCombatTurns": 54,
      "totalCombatFlips": 22,
      "totalDeadTurns": 9,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 22,
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
      "seed": 1639925740,
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
      "totalCombatTurns": 21,
      "totalCombatFlips": 13,
      "totalDeadTurns": 0,
      "totalReshuffles": 3,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 21,
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
      "runIndex": 3,
      "modelId": "beginner",
      "seed": 1656703359,
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
      "totalCombatTurns": 39,
      "totalCombatFlips": 20,
      "totalDeadTurns": 3,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 39,
          "combatFlips": 20,
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
      "seed": 1606370502,
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
      "totalCombatTurns": 13,
      "totalCombatFlips": 10,
      "totalDeadTurns": 0,
      "totalReshuffles": 1,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 13,
          "combatFlips": 10,
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
      "seed": 1623148121,
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
      "totalCombatTurns": 36,
      "totalCombatFlips": 11,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 36,
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
      "runIndex": 6,
      "modelId": "beginner",
      "seed": 1572815264,
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
      "totalCombatTurns": 60,
      "totalCombatFlips": 14,
      "totalDeadTurns": 15,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 60,
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
      "runIndex": 7,
      "modelId": "beginner",
      "seed": 1589592883,
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
      "totalCombatTurns": 45,
      "totalCombatFlips": 23,
      "totalDeadTurns": 0,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 23,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 698097537,
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
      "totalCombatTurns": 18,
      "totalCombatFlips": 18,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 18,
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
      "seed": 681319918,
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
      "totalCombatTurns": 36,
      "totalCombatFlips": 34,
      "totalDeadTurns": 0,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 34,
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
      "seed": 664542299,
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
      "totalCombatTurns": 52,
      "totalCombatFlips": 37,
      "totalDeadTurns": 0,
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
        "chest": 0,
        "rest": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 25,
          "combatFlips": 22,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 3,
      "modelId": "opportunist",
      "seed": 647764680,
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
      "totalCombatTurns": 65,
      "totalCombatFlips": 39,
      "totalDeadTurns": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 38,
          "combatFlips": 28,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 27,
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
      "runIndex": 4,
      "modelId": "opportunist",
      "seed": 765208013,
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
      "totalCombatTurns": 45,
      "totalCombatFlips": 34,
      "totalDeadTurns": 0,
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
          "combatTurns": 45,
          "combatFlips": 34,
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
      "runIndex": 5,
      "modelId": "opportunist",
      "seed": 748430394,
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
      "totalCombatTurns": 27,
      "totalCombatFlips": 24,
      "totalDeadTurns": 0,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 24,
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
      "modelId": "opportunist",
      "seed": 731652775,
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
      "totalCombatTurns": 36,
      "totalCombatFlips": 31,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 31,
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
      "modelId": "opportunist",
      "seed": 714875156,
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
      "totalCombatTurns": 62,
      "totalCombatFlips": 51,
      "totalDeadTurns": 0,
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
        "chest": 0,
        "rest": 0,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 44,
          "combatFlips": 38,
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
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 13,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 1570678364,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 75,
      "totalCombatFlips": 31,
      "totalDeadTurns": 3,
      "totalReshuffles": 13,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
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
        "revenant": 1,
        "arcane": 10,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 39,
          "combatFlips": 22,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 36,
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
      "modelId": "regular",
      "seed": 1587455983,
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
      "totalCombatTurns": 82,
      "totalCombatFlips": 42,
      "totalDeadTurns": 1,
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
        "revenant": 1,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 37,
          "combatFlips": 25,
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
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 17,
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
      "modelId": "regular",
      "seed": 1604233602,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 13,
      "deckDelta": 3,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 4,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 231,
      "totalCombatFlips": 96,
      "totalDeadTurns": 6,
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
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 60,
          "combatFlips": 26,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 81,
          "combatFlips": 26,
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
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 18,
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
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 54,
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
      "runIndex": 3,
      "modelId": "regular",
      "seed": 1621011221,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 254,
      "totalCombatFlips": 91,
      "totalDeadTurns": 20,
      "totalReshuffles": 38,
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
        "familiar": 1,
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
        "arcane": 9,
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
          "combatTurns": 56,
          "combatFlips": 20,
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
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 10,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 90,
          "combatFlips": 24,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 72,
          "combatFlips": 37,
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
      "modelId": "regular",
      "seed": 1503567888,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 126,
      "totalCombatFlips": 35,
      "totalDeadTurns": 0,
      "totalReshuffles": 19,
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
        "arcane": 10,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 45,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 10,
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
      "modelId": "regular",
      "seed": 1520345507,
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
      "totalCombatTurns": 96,
      "totalCombatFlips": 41,
      "totalDeadTurns": 6,
      "totalReshuffles": 19,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 60,
          "combatFlips": 28,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 36,
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
      "runIndex": 6,
      "modelId": "regular",
      "seed": 1537123126,
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
      "totalCombatTurns": 128,
      "totalCombatFlips": 48,
      "totalDeadTurns": 11,
      "totalReshuffles": 18,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 56,
          "combatFlips": 22,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 72,
          "combatFlips": 26,
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
      "modelId": "regular",
      "seed": 1553900745,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 146,
      "totalCombatFlips": 66,
      "totalDeadTurns": 2,
      "totalReshuffles": 20,
      "rewardOffersSeen": 2,
      "rewardsClaimed": 2,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 2,
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
        "arcane": 10,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 56,
          "combatFlips": 28,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 90,
          "combatFlips": 38,
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
      "modelId": "expert",
      "seed": 1684432572,
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
      "totalCombatTurns": 366,
      "totalCombatFlips": 102,
      "totalDeadTurns": 24,
      "totalReshuffles": 65,
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
        "familiar": 1,
        "demon": 0,
        "human": 0,
        "automaton": 9,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 62,
          "combatFlips": 24,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 188,
          "combatFlips": 45,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 116,
          "combatFlips": 33,
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
      "modelId": "expert",
      "seed": 1701210191,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 18,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 11,
      "combatCount": 9,
      "combatWins": 8,
      "combatLosses": 1,
      "totalCombatTurns": 931,
      "totalCombatFlips": 275,
      "totalDeadTurns": 22,
      "totalReshuffles": 123,
      "rewardOffersSeen": 9,
      "rewardsClaimed": 9,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 9,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 8,
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
        "combat": 8,
        "elite": 1,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 4,
        "demon": 2,
        "human": 0,
        "automaton": 11,
        "revenant": 1,
        "arcane": 0,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 81,
          "combatFlips": 24,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 15,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 81,
          "combatFlips": 14,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 72,
          "combatFlips": 21,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 105,
          "combatFlips": 30,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 133,
          "combatFlips": 36,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
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
          "nodeId": "depth-8-lane-0",
          "depth": 8,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 171,
          "combatFlips": 57,
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
          "nodeId": "depth-9-lane-0",
          "depth": 9,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 153,
          "combatFlips": 50,
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
          "nodeId": "depth-10-lane-0",
          "depth": 10,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 90,
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
      "modelId": "expert",
      "seed": 1717987810,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 144,
      "totalCombatFlips": 60,
      "totalDeadTurns": 0,
      "totalReshuffles": 42,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 63,
          "combatFlips": 39,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 81,
          "combatFlips": 21,
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
      "modelId": "expert",
      "seed": 1734765429,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 441,
      "totalCombatFlips": 178,
      "totalDeadTurns": 0,
      "totalReshuffles": 69,
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
        "demon": 1,
        "human": 0,
        "automaton": 10,
        "revenant": 1,
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 27,
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
          "combatTurns": 99,
          "combatFlips": 20,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 99,
          "combatFlips": 45,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 135,
          "combatFlips": 60,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 63,
          "combatFlips": 26,
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
      "modelId": "expert",
      "seed": 1617322096,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 17,
      "deckDelta": 7,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 1180,
      "totalCombatFlips": 300,
      "totalDeadTurns": 17,
      "totalReshuffles": 184,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 7,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
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
        "combat": 6,
        "elite": 2,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 13,
        "revenant": 3,
        "arcane": 0,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 17,
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
          "combatTurns": 68,
          "combatFlips": 22,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 279,
          "combatFlips": 68,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 264,
          "combatFlips": 64,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 19,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 47,
          "combatFlips": 16,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 81,
          "combatFlips": 13,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 351,
          "combatFlips": 83,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 15,
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
      "modelId": "expert",
      "seed": 1634099715,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 511,
      "totalCombatFlips": 155,
      "totalDeadTurns": 7,
      "totalReshuffles": 76,
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
        "combat": 2,
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
        "automaton": 11,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 52,
          "combatFlips": 22,
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
          "kind": "chest",
          "title": "Malle de clairiere",
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 243,
          "combatFlips": 80,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 216,
          "combatFlips": 53,
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
      "runIndex": 6,
      "modelId": "expert",
      "seed": 1650877334,
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
      "totalCombatTurns": 345,
      "totalCombatFlips": 105,
      "totalDeadTurns": 3,
      "totalReshuffles": 57,
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
        "combat": 2,
        "elite": 1,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 1,
        "automaton": 10,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 82,
          "combatFlips": 50,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 117,
          "combatFlips": 26,
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
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 146,
          "combatFlips": 29,
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
      "modelId": "expert",
      "seed": 1667654953,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 14,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 11,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 862,
      "totalCombatFlips": 258,
      "totalDeadTurns": 25,
      "totalReshuffles": 135,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 7,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
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
        "combat": 8,
        "elite": 0,
        "shop": 2,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 0,
        "human": 0,
        "automaton": 9,
        "revenant": 2,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 51,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 10,
          "combatWinner": "player",
          "combatTurns": 75,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 54,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 82,
          "combatFlips": 29,
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
          "nodeId": "depth-6-lane-1",
          "depth": 6,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 84,
          "combatFlips": 27,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
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
          "nodeId": "depth-8-lane-2",
          "depth": 8,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 99,
          "combatFlips": 27,
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
          "nodeId": "depth-9-lane-2",
          "depth": 9,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 99,
          "combatFlips": 39,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 318,
          "combatFlips": 100,
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
      "seed": 1411026591,
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
      "totalCombatTurns": 214,
      "totalCombatFlips": 108,
      "totalDeadTurns": 16,
      "totalReshuffles": 35,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 214,
          "combatFlips": 108,
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
      "modelId": "champion",
      "seed": 1394248972,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 433,
      "totalCombatFlips": 168,
      "totalDeadTurns": 1,
      "totalReshuffles": 72,
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
        "spring-tear"
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
        "demon": 2,
        "human": 0,
        "automaton": 11,
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
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 144,
          "combatFlips": 77,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 72,
          "combatFlips": 25,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 118,
          "combatFlips": 34,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 54,
          "combatFlips": 18,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 14,
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
      "seed": 1444581829,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 162,
      "totalCombatFlips": 69,
      "totalDeadTurns": 0,
      "totalReshuffles": 34,
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
        "combat": 2,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 10,
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
          "combatTurns": 36,
          "combatFlips": 26,
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
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 126,
          "combatFlips": 43,
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
      "modelId": "champion",
      "seed": 1427804210,
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
      "totalCombatTurns": 257,
      "totalCombatFlips": 96,
      "totalDeadTurns": 5,
      "totalReshuffles": 51,
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
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 0,
        "automaton": 9,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 30,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 90,
          "combatFlips": 27,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 131,
          "combatFlips": 39,
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
      "modelId": "champion",
      "seed": 1343916115,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 190,
      "totalCombatFlips": 64,
      "totalDeadTurns": 1,
      "totalReshuffles": 39,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 22,
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
          "combatTurns": 63,
          "combatFlips": 24,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 100,
          "combatFlips": 18,
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
      "modelId": "champion",
      "seed": 1327138496,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 18,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 9,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 459,
      "totalCombatFlips": 161,
      "totalDeadTurns": 0,
      "totalReshuffles": 63,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
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
        "combat": 5,
        "elite": 3,
        "shop": 0,
        "chest": 1,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 2,
        "human": 0,
        "automaton": 14,
        "revenant": 2,
        "arcane": 0,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 27,
          "combatFlips": 15,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 63,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 11,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 72,
          "combatFlips": 25,
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
          "nodeId": "depth-6-lane-4",
          "depth": 6,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 117,
          "combatFlips": 41,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
          "kind": "elite",
          "title": "Veilleur creux",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 18,
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
          "nodeId": "depth-8-lane-1",
          "depth": 8,
          "lane": 1,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 72,
          "combatFlips": 34,
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
      "modelId": "champion",
      "seed": 1377471353,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 18,
      "deckDelta": 8,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 10,
      "combatCount": 8,
      "combatWins": 7,
      "combatLosses": 1,
      "totalCombatTurns": 652,
      "totalCombatFlips": 246,
      "totalDeadTurns": 4,
      "totalReshuffles": 102,
      "rewardOffersSeen": 8,
      "rewardsClaimed": 8,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 1,
        "rare": 1
      },
      "stealRewardsOffered": 21,
      "stealRewardsClaimed": 7,
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
        "combat": 6,
        "elite": 2,
        "shop": 0,
        "chest": 1,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 3,
        "demon": 0,
        "human": 0,
        "automaton": 11,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 76,
          "combatFlips": 40,
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
          "title": "Predateur runique",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 90,
          "combatFlips": 32,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 63,
          "combatFlips": 30,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 135,
          "combatFlips": 25,
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
          "nodeId": "depth-5-lane-0",
          "depth": 5,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 63,
          "combatFlips": 15,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 26,
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
          "nodeId": "depth-8-lane-1",
          "depth": 8,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
          "combatWinner": "player",
          "combatTurns": 135,
          "combatFlips": 56,
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
          "nodeId": "depth-9-lane-1",
          "depth": 9,
          "lane": 1,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 18,
          "playerDeckSizeAfter": 18,
          "combatWinner": "enemy",
          "combatTurns": 45,
          "combatFlips": 22,
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
      "runIndex": 7,
      "modelId": "champion",
      "seed": 1360693734,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 234,
      "totalCombatFlips": 100,
      "totalDeadTurns": 0,
      "totalReshuffles": 40,
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
        "automaton": 10,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 126,
          "combatFlips": 84,
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
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 108,
          "combatFlips": 16,
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
    }
  ],
  "diagnostics": {
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
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "deal-damage",
          "flip-1",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 2024,
        "played": 268,
        "ignored": 1756,
        "selectionRate": 0.1324110671936759,
        "wins": 139,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5186567164179104,
        "averageFlips": 0.5597014925373134,
        "failedImpactRate": 0.4423791821561338,
        "averageFlipMargin": 2.42,
        "averageEffectAmount": 0.3283582089552239,
        "averageDamageDealt": 0.6082089552238806,
        "averageDamageTaken": 0.1828358208955224,
        "averageNetDamage": 0.4253731343283582,
        "lethalMoves": 4,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.6296296296296297
          },
          {
            "modelId": "expert",
            "played": 65,
            "winRate": 0.4461538461538462
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 268,
            "winRate": 0.5186567164179104
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1225,
        "played": 209,
        "ignored": 1016,
        "selectionRate": 0.17061224489795918,
        "wins": 109,
        "losses": 100,
        "draws": 0,
        "winRateWhenPlayed": 0.5215311004784688,
        "averageFlips": 0.5167464114832536,
        "failedImpactRate": 0.3609467455621302,
        "averageFlipMargin": 1.1018518518518519,
        "averageEffectAmount": 0.7559808612440191,
        "averageDamageDealt": 0.19138755980861244,
        "averageDamageTaken": 0.09090909090909091,
        "averageNetDamage": 0.10047846889952153,
        "lethalMoves": 2,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 92,
            "winRate": 0.6195652173913043
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.5106382978723404
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.40625
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.5555555555555556
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 209,
            "winRate": 0.5215311004784688
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1099,
        "played": 182,
        "ignored": 917,
        "selectionRate": 0.16560509554140126,
        "wins": 68,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.37362637362637363,
        "averageFlips": 0.510989010989011,
        "failedImpactRate": 0.4945652173913043,
        "averageFlipMargin": 1.89247311827957,
        "averageEffectAmount": 0.8351648351648352,
        "averageDamageDealt": 0.42857142857142855,
        "averageDamageTaken": 0.11538461538461539,
        "averageNetDamage": 0.3131868131868132,
        "lethalMoves": 3,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 78,
            "winRate": 0.358974358974359
          },
          {
            "modelId": "expert",
            "played": 38,
            "winRate": 0.42105263157894735
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.5925925925925926
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.34782608695652173
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
            "played": 182,
            "winRate": 0.37362637362637363
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
        "offered": 977,
        "played": 154,
        "ignored": 823,
        "selectionRate": 0.15762538382804503,
        "wins": 88,
        "losses": 66,
        "draws": 0,
        "winRateWhenPlayed": 0.5714285714285714,
        "averageFlips": 0.6168831168831169,
        "failedImpactRate": 0.3448275862068966,
        "averageFlipMargin": 2.1157894736842104,
        "averageEffectAmount": 0.6038961038961039,
        "averageDamageDealt": 1.1103896103896105,
        "averageDamageTaken": 0.34415584415584416,
        "averageNetDamage": 0.7662337662337664,
        "lethalMoves": 2,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 66,
            "winRate": 0.6515151515151515
          },
          {
            "modelId": "expert",
            "played": 31,
            "winRate": 0.2903225806451613
          },
          {
            "modelId": "opportunist",
            "played": 25,
            "winRate": 0.76
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.7083333333333334
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 154,
            "winRate": 0.5714285714285714
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
        "offered": 1771,
        "played": 525,
        "ignored": 1246,
        "selectionRate": 0.2964426877470356,
        "wins": 325,
        "losses": 200,
        "draws": 0,
        "winRateWhenPlayed": 0.6190476190476191,
        "averageFlips": 0.5695238095238095,
        "failedImpactRate": 0.30465116279069765,
        "averageFlipMargin": 1.6588628762541806,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.35428571428571426,
        "averageDamageTaken": 0.02857142857142857,
        "averageNetDamage": 0.3257142857142857,
        "lethalMoves": 6,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 260,
            "winRate": 0.7346153846153847
          },
          {
            "modelId": "expert",
            "played": 107,
            "winRate": 0.19626168224299065
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.7
          },
          {
            "modelId": "champion",
            "played": 57,
            "winRate": 1
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 525,
            "winRate": 0.6190476190476191
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
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 1851,
        "played": 492,
        "ignored": 1359,
        "selectionRate": 0.26580226904376014,
        "wins": 286,
        "losses": 206,
        "draws": 0,
        "winRateWhenPlayed": 0.5813008130081301,
        "averageFlips": 0.2784552845528455,
        "failedImpactRate": 0.6531645569620254,
        "averageFlipMargin": 1.5255474452554745,
        "averageEffectAmount": 1.9268292682926829,
        "averageDamageDealt": 0.24796747967479674,
        "averageDamageTaken": 0.052845528455284556,
        "averageNetDamage": 0.19512195121951217,
        "lethalMoves": 4,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 228,
            "winRate": 0.6622807017543859
          },
          {
            "modelId": "expert",
            "played": 146,
            "winRate": 0.5684931506849316
          },
          {
            "modelId": "champion",
            "played": 58,
            "winRate": 0.46551724137931033
          },
          {
            "modelId": "opportunist",
            "played": 50,
            "winRate": 0.5
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
            "played": 492,
            "winRate": 0.5813008130081301
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
        "offered": 1539,
        "played": 474,
        "ignored": 1065,
        "selectionRate": 0.3079922027290448,
        "wins": 253,
        "losses": 221,
        "draws": 0,
        "winRateWhenPlayed": 0.5337552742616034,
        "averageFlips": 0.37130801687763715,
        "failedImpactRate": 0.5124653739612188,
        "averageFlipMargin": 1.3125,
        "averageEffectAmount": 1.9240506329113924,
        "averageDamageDealt": 0.2320675105485232,
        "averageDamageTaken": 0.1160337552742616,
        "averageNetDamage": 0.1160337552742616,
        "lethalMoves": 4,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 245,
            "winRate": 0.6326530612244898
          },
          {
            "modelId": "expert",
            "played": 109,
            "winRate": 0.43119266055045874
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.19298245614035087
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.9523809523809523
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 474,
            "winRate": 0.5337552742616034
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
        "offered": 1839,
        "played": 447,
        "ignored": 1392,
        "selectionRate": 0.24306688417618272,
        "wins": 262,
        "losses": 185,
        "draws": 0,
        "winRateWhenPlayed": 0.5861297539149888,
        "averageFlips": 0.4116331096196868,
        "failedImpactRate": 0.3475177304964539,
        "averageFlipMargin": 1.565217391304348,
        "averageEffectAmount": 0.9552572706935123,
        "averageDamageDealt": 0.17225950782997762,
        "averageDamageTaken": 0.03131991051454139,
        "averageNetDamage": 0.14093959731543623,
        "lethalMoves": 3,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "regular",
            "played": 238,
            "winRate": 0.5546218487394958
          },
          {
            "modelId": "expert",
            "played": 95,
            "winRate": 0.7473684210526316
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.625
          },
          {
            "modelId": "opportunist",
            "played": 47,
            "winRate": 0.5106382978723404
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 447,
            "winRate": 0.5861297539149888
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
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [],
        "offered": 1897,
        "played": 426,
        "ignored": 1471,
        "selectionRate": 0.22456510279388509,
        "wins": 222,
        "losses": 204,
        "draws": 0,
        "winRateWhenPlayed": 0.5211267605633803,
        "averageFlips": 0.28169014084507044,
        "failedImpactRate": 0.5683453237410072,
        "averageFlipMargin": 1.3,
        "averageEffectAmount": 1.8967136150234742,
        "averageDamageDealt": 0.13145539906103287,
        "averageDamageTaken": 0.025821596244131457,
        "averageNetDamage": 0.10563380281690142,
        "lethalMoves": 2,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 215,
            "winRate": 0.5720930232558139
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.12643678160919541
          },
          {
            "modelId": "opportunist",
            "played": 54,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 52,
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 426,
            "winRate": 0.5211267605633803
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
        "offered": 1149,
        "played": 407,
        "ignored": 742,
        "selectionRate": 0.35422106179286333,
        "wins": 199,
        "losses": 208,
        "draws": 0,
        "winRateWhenPlayed": 0.48894348894348894,
        "averageFlips": 0.20638820638820637,
        "failedImpactRate": 0.6626506024096386,
        "averageFlipMargin": 1.7261904761904763,
        "averageEffectAmount": 1.3562653562653562,
        "averageDamageDealt": 0.2285012285012285,
        "averageDamageTaken": 0.08845208845208845,
        "averageNetDamage": 0.14004914004914004,
        "lethalMoves": 6,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 195,
            "winRate": 0.5230769230769231
          },
          {
            "modelId": "expert",
            "played": 106,
            "winRate": 0.5566037735849056
          },
          {
            "modelId": "champion",
            "played": 40,
            "winRate": 0.55
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.41025641025641024
          },
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 407,
            "winRate": 0.48894348894348894
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
        "offered": 999,
        "played": 327,
        "ignored": 672,
        "selectionRate": 0.32732732732732733,
        "wins": 186,
        "losses": 141,
        "draws": 0,
        "winRateWhenPlayed": 0.5688073394495413,
        "averageFlips": 0.43119266055045874,
        "failedImpactRate": 0.3411214953271028,
        "averageFlipMargin": 1.9078014184397163,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.23547400611620795,
        "averageDamageTaken": 0.03363914373088685,
        "averageNetDamage": 0.2018348623853211,
        "lethalMoves": 3,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 182,
            "winRate": 0.6373626373626373
          },
          {
            "modelId": "expert",
            "played": 53,
            "winRate": 0.4528301886792453
          },
          {
            "modelId": "opportunist",
            "played": 41,
            "winRate": 0.3170731707317073
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.9705882352941176
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
            "played": 327,
            "winRate": 0.5688073394495413
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
        "offered": 1424,
        "played": 325,
        "ignored": 1099,
        "selectionRate": 0.22823033707865167,
        "wins": 142,
        "losses": 183,
        "draws": 0,
        "winRateWhenPlayed": 0.4369230769230769,
        "averageFlips": 0.3415384615384615,
        "failedImpactRate": 0.6007194244604317,
        "averageFlipMargin": 1.4504504504504505,
        "averageEffectAmount": 2.329230769230769,
        "averageDamageDealt": 0.27692307692307694,
        "averageDamageTaken": 0.09230769230769231,
        "averageNetDamage": 0.18461538461538463,
        "lethalMoves": 2,
        "roundClosers": 44,
        "byModel": [
          {
            "modelId": "regular",
            "played": 160,
            "winRate": 0.475
          },
          {
            "modelId": "expert",
            "played": 84,
            "winRate": 0.09523809523809523
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.7105263157894737
          },
          {
            "modelId": "champion",
            "played": 31,
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 325,
            "winRate": 0.4369230769230769
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
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "connector",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 1171,
        "played": 320,
        "ignored": 851,
        "selectionRate": 0.27327070879590093,
        "wins": 184,
        "losses": 136,
        "draws": 0,
        "winRateWhenPlayed": 0.575,
        "averageFlips": 0.221875,
        "failedImpactRate": 0.702928870292887,
        "averageFlipMargin": 1.1971830985915493,
        "averageEffectAmount": 1.94375,
        "averageDamageDealt": 0.190625,
        "averageDamageTaken": 0.065625,
        "averageNetDamage": 0.12499999999999999,
        "lethalMoves": 3,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 171,
            "winRate": 0.5730994152046783
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.691358024691358
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.5238095238095238
          },
          {
            "modelId": "opportunist",
            "played": 22,
            "winRate": 0.36363636363636365
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
            "played": 320,
            "winRate": 0.575
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
        "offered": 1600,
        "played": 314,
        "ignored": 1286,
        "selectionRate": 0.19625,
        "wins": 126,
        "losses": 188,
        "draws": 0,
        "winRateWhenPlayed": 0.4012738853503185,
        "averageFlips": 0.22611464968152867,
        "failedImpactRate": 0.7418181818181818,
        "averageFlipMargin": 1.971830985915493,
        "averageEffectAmount": 0.6496815286624203,
        "averageDamageDealt": 0.42038216560509556,
        "averageDamageTaken": 0.12738853503184713,
        "averageNetDamage": 0.29299363057324845,
        "lethalMoves": 3,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 157,
            "winRate": 0.3885350318471338
          },
          {
            "modelId": "expert",
            "played": 69,
            "winRate": 0.5072463768115942
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.5666666666666667
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 314,
            "winRate": 0.4012738853503185
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
        "offered": 1341,
        "played": 303,
        "ignored": 1038,
        "selectionRate": 0.22595078299776286,
        "wins": 156,
        "losses": 147,
        "draws": 0,
        "winRateWhenPlayed": 0.5148514851485149,
        "averageFlips": 0.24422442244224424,
        "failedImpactRate": 0.6851063829787234,
        "averageFlipMargin": 1.837837837837838,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.3333333333333333,
        "averageDamageTaken": 0.07260726072607261,
        "averageNetDamage": 0.2607260726072607,
        "lethalMoves": 3,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 143,
            "winRate": 0.5874125874125874
          },
          {
            "modelId": "expert",
            "played": 63,
            "winRate": 0.12698412698412698
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 1
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 303,
            "winRate": 0.5148514851485149
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
        "offered": 1326,
        "played": 298,
        "ignored": 1028,
        "selectionRate": 0.22473604826546004,
        "wins": 168,
        "losses": 130,
        "draws": 0,
        "winRateWhenPlayed": 0.5637583892617449,
        "averageFlips": 0.22483221476510068,
        "failedImpactRate": 0.7184873949579832,
        "averageFlipMargin": 1.9104477611940298,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.23154362416107382,
        "averageDamageTaken": 0.12080536912751678,
        "averageNetDamage": 0.11073825503355704,
        "lethalMoves": 1,
        "roundClosers": 44,
        "byModel": [
          {
            "modelId": "regular",
            "played": 144,
            "winRate": 0.5694444444444444
          },
          {
            "modelId": "expert",
            "played": 66,
            "winRate": 0.5606060606060606
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.44
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.7714285714285715
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
            "played": 298,
            "winRate": 0.5637583892617449
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
        "offered": 1149,
        "played": 257,
        "ignored": 892,
        "selectionRate": 0.22367275892080069,
        "wins": 136,
        "losses": 121,
        "draws": 0,
        "winRateWhenPlayed": 0.5291828793774319,
        "averageFlips": 0.5797665369649806,
        "failedImpactRate": 0.3817427385892116,
        "averageFlipMargin": 1.4697986577181208,
        "averageEffectAmount": 0.054474708171206226,
        "averageDamageDealt": 0.5291828793774319,
        "averageDamageTaken": 0.36964980544747084,
        "averageNetDamage": 0.15953307392996108,
        "lethalMoves": 5,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 118,
            "winRate": 0.6101694915254238
          },
          {
            "modelId": "expert",
            "played": 55,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "opportunist",
            "played": 43,
            "winRate": 0.5116279069767442
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.6538461538461539
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 257,
            "winRate": 0.5291828793774319
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
        "offered": 1197,
        "played": 226,
        "ignored": 971,
        "selectionRate": 0.18880534670008353,
        "wins": 118,
        "losses": 108,
        "draws": 0,
        "winRateWhenPlayed": 0.5221238938053098,
        "averageFlips": 0.29646017699115046,
        "failedImpactRate": 0.6149425287356322,
        "averageFlipMargin": 1.4328358208955223,
        "averageEffectAmount": 1.4646017699115044,
        "averageDamageDealt": 0.17256637168141592,
        "averageDamageTaken": 0.12389380530973451,
        "averageNetDamage": 0.04867256637168141,
        "lethalMoves": 2,
        "roundClosers": 26,
        "byModel": [
          {
            "modelId": "regular",
            "played": 111,
            "winRate": 0.6216216216216216
          },
          {
            "modelId": "expert",
            "played": 57,
            "winRate": 0.3508771929824561
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.92
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.2857142857142857
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 226,
            "winRate": 0.5221238938053098
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
        "offered": 943,
        "played": 222,
        "ignored": 721,
        "selectionRate": 0.2354188759278897,
        "wins": 98,
        "losses": 124,
        "draws": 0,
        "winRateWhenPlayed": 0.44144144144144143,
        "averageFlips": 0.49099099099099097,
        "failedImpactRate": 0.41711229946524064,
        "averageFlipMargin": 1.4954128440366972,
        "averageEffectAmount": 0.8333333333333334,
        "averageDamageDealt": 0.36486486486486486,
        "averageDamageTaken": 0.0945945945945946,
        "averageNetDamage": 0.2702702702702703,
        "lethalMoves": 1,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 103,
            "winRate": 0.4563106796116505
          },
          {
            "modelId": "expert",
            "played": 54,
            "winRate": 0.5740740740740741
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.34375
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.45
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 222,
            "winRate": 0.44144144144144143
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
        "offered": 832,
        "played": 184,
        "ignored": 648,
        "selectionRate": 0.22115384615384615,
        "wins": 99,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.5380434782608695,
        "averageFlips": 0.44565217391304346,
        "failedImpactRate": 0.5418994413407822,
        "averageFlipMargin": 1.2317073170731707,
        "averageEffectAmount": 0.3858695652173913,
        "averageDamageDealt": 0.9565217391304348,
        "averageDamageTaken": 0.3641304347826087,
        "averageNetDamage": 0.5923913043478262,
        "lethalMoves": 10,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 78,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.4146341463414634
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.7
          },
          {
            "modelId": "opportunist",
            "played": 26,
            "winRate": 0.5
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
            "played": 184,
            "winRate": 0.5380434782608695
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
        "offered": 779,
        "played": 182,
        "ignored": 597,
        "selectionRate": 0.2336328626444159,
        "wins": 95,
        "losses": 87,
        "draws": 0,
        "winRateWhenPlayed": 0.521978021978022,
        "averageFlips": 0.5604395604395604,
        "failedImpactRate": 0.3584905660377358,
        "averageFlipMargin": 1.2450980392156863,
        "averageEffectAmount": 0.15934065934065933,
        "averageDamageDealt": 0.489010989010989,
        "averageDamageTaken": 0.2802197802197802,
        "averageNetDamage": 0.20879120879120877,
        "lethalMoves": 2,
        "roundClosers": 23,
        "byModel": [
          {
            "modelId": "regular",
            "played": 72,
            "winRate": 0.5972222222222222
          },
          {
            "modelId": "expert",
            "played": 42,
            "winRate": 0.47619047619047616
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.6363636363636364
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 182,
            "winRate": 0.521978021978022
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
        "offered": 802,
        "played": 176,
        "ignored": 626,
        "selectionRate": 0.2194513715710723,
        "wins": 87,
        "losses": 89,
        "draws": 0,
        "winRateWhenPlayed": 0.4943181818181818,
        "averageFlips": 0.5909090909090909,
        "failedImpactRate": 0.3202614379084967,
        "averageFlipMargin": 1.1826923076923077,
        "averageEffectAmount": 0.07386363636363637,
        "averageDamageDealt": 0.5397727272727273,
        "averageDamageTaken": 0.2727272727272727,
        "averageNetDamage": 0.2670454545454546,
        "lethalMoves": 2,
        "roundClosers": 24,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.625
          },
          {
            "modelId": "expert",
            "played": 35,
            "winRate": 0.2571428571428571
          },
          {
            "modelId": "opportunist",
            "played": 31,
            "winRate": 0.4838709677419355
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.5652173913043478
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 176,
            "winRate": 0.4943181818181818
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
        "offered": 544,
        "played": 140,
        "ignored": 404,
        "selectionRate": 0.25735294117647056,
        "wins": 68,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.4857142857142857,
        "averageFlips": 0.6928571428571428,
        "failedImpactRate": 0.2867647058823529,
        "averageFlipMargin": 3.0618556701030926,
        "averageEffectAmount": 0.6928571428571428,
        "averageDamageDealt": 0.8428571428571429,
        "averageDamageTaken": 0.4357142857142857,
        "averageNetDamage": 0.40714285714285714,
        "lethalMoves": 1,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 64,
            "winRate": 0.546875
          },
          {
            "modelId": "expert",
            "played": 35,
            "winRate": 0.2857142857142857
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.8421052631578947
          },
          {
            "modelId": "opportunist",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "beginner",
            "played": 6,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 140,
            "winRate": 0.4857142857142857
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
        "offered": 582,
        "played": 114,
        "ignored": 468,
        "selectionRate": 0.1958762886597938,
        "wins": 57,
        "losses": 57,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5701754385964912,
        "failedImpactRate": 0.3564356435643564,
        "averageFlipMargin": 1.7846153846153847,
        "averageEffectAmount": 0.43859649122807015,
        "averageDamageDealt": 0.7280701754385965,
        "averageDamageTaken": 0.21052631578947367,
        "averageNetDamage": 0.5175438596491229,
        "lethalMoves": 0,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 50,
            "winRate": 0.52
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.6190476190476191
          },
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.6875
          },
          {
            "modelId": "beginner",
            "played": 6,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 114,
            "winRate": 0.5
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
        "offered": 6433,
        "played": 1579,
        "ignored": 4854,
        "selectionRate": 0.24545313228664697,
        "wins": 845,
        "losses": 734,
        "draws": 0,
        "winRateWhenPlayed": 0.5351488283723876,
        "averageFlips": 0.3825205826472451,
        "averageDamageDealt": 0.27422419252691577,
        "averageNetDamage": 0.22482583913869536,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 525,
            "winRateWhenPlayed": 0.6190476190476191
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 426,
            "winRateWhenPlayed": 0.5211267605633803
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 325,
            "winRateWhenPlayed": 0.4369230769230769
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 303,
            "winRateWhenPlayed": 0.5148514851485149
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
        "offered": 6187,
        "played": 1557,
        "ignored": 4630,
        "selectionRate": 0.25165669953127523,
        "wins": 900,
        "losses": 657,
        "draws": 0,
        "winRateWhenPlayed": 0.5780346820809249,
        "averageFlips": 0.2947976878612717,
        "averageDamageDealt": 0.2113037893384714,
        "averageNetDamage": 0.14900449582530506,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 492,
            "winRateWhenPlayed": 0.5813008130081301
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 447,
            "winRateWhenPlayed": 0.5861297539149888
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 320,
            "winRateWhenPlayed": 0.575
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 298,
            "winRateWhenPlayed": 0.5637583892617449
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
        "offered": 5759,
        "played": 1295,
        "ignored": 4464,
        "selectionRate": 0.2248654280256989,
        "wins": 696,
        "losses": 599,
        "draws": 0,
        "winRateWhenPlayed": 0.5374517374517375,
        "averageFlips": 0.41235521235521233,
        "averageDamageDealt": 0.30038610038610036,
        "averageNetDamage": 0.18996138996138995,
        "topCards": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 474,
            "winRateWhenPlayed": 0.5337552742616034
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 327,
            "winRateWhenPlayed": 0.5688073394495413
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 268,
            "winRateWhenPlayed": 0.5186567164179104
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 226,
            "winRateWhenPlayed": 0.5221238938053098
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
        "offered": 4791,
        "played": 1125,
        "ignored": 3666,
        "selectionRate": 0.234815278647464,
        "wins": 491,
        "losses": 634,
        "draws": 0,
        "winRateWhenPlayed": 0.43644444444444447,
        "averageFlips": 0.31733333333333336,
        "averageDamageDealt": 0.3413333333333333,
        "averageNetDamage": 0.23644444444444443,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 407,
            "winRateWhenPlayed": 0.48894348894348894
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 314,
            "winRateWhenPlayed": 0.4012738853503185
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 222,
            "winRateWhenPlayed": 0.44144144144144143
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 182,
            "winRateWhenPlayed": 0.37362637362637363
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
        "offered": 3955,
        "played": 824,
        "ignored": 3131,
        "selectionRate": 0.20834386852085968,
        "wins": 427,
        "losses": 397,
        "draws": 0,
        "winRateWhenPlayed": 0.5182038834951457,
        "averageFlips": 0.5618932038834952,
        "averageDamageDealt": 0.4368932038834951,
        "averageNetDamage": 0.17839805825242716,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 257,
            "winRateWhenPlayed": 0.5291828793774319
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 209,
            "winRateWhenPlayed": 0.5215311004784688
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 182,
            "winRateWhenPlayed": 0.521978021978022
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 176,
            "winRateWhenPlayed": 0.4943181818181818
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
        "offered": 2935,
        "played": 592,
        "ignored": 2343,
        "selectionRate": 0.20170357751277684,
        "wins": 312,
        "losses": 280,
        "draws": 0,
        "winRateWhenPlayed": 0.527027027027027,
        "averageFlips": 0.5726351351351351,
        "averageDamageDealt": 0.9256756756756757,
        "averageNetDamage": 0.5793918918918919,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 184,
            "winRateWhenPlayed": 0.5380434782608695
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 154,
            "winRateWhenPlayed": 0.5714285714285714
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 140,
            "winRateWhenPlayed": 0.4857142857142857
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 114,
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
        "id": "sans-role",
        "label": "sans role",
        "offered": 21139,
        "played": 5240,
        "ignored": 15899,
        "selectionRate": 0.24788305974738634,
        "wins": 2817,
        "losses": 2423,
        "draws": 0,
        "winRateWhenPlayed": 0.5375954198473283,
        "averageFlips": 0.3711832061068702,
        "averageDamageDealt": 0.3469465648854962,
        "averageNetDamage": 0.2433206106870229,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 436,
            "winRateWhenPlayed": 0.658256880733945
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 403,
            "winRateWhenPlayed": 0.5707196029776674
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 385,
            "winRateWhenPlayed": 0.5428571428571428
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 359,
            "winRateWhenPlayed": 0.5766016713091922
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 338,
            "winRateWhenPlayed": 0.5443786982248521
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
        "offered": 3067,
        "played": 517,
        "ignored": 2550,
        "selectionRate": 0.1685686338441474,
        "wins": 257,
        "losses": 260,
        "draws": 0,
        "winRateWhenPlayed": 0.49709864603481624,
        "averageFlips": 0.5299806576402321,
        "averageDamageDealt": 0.4932301740812379,
        "averageNetDamage": 0.28046421663442944,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 90,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 89,
            "winRateWhenPlayed": 0.42696629213483145
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 88,
            "winRateWhenPlayed": 0.625
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 86,
            "winRateWhenPlayed": 0.5116279069767442
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 82,
            "winRateWhenPlayed": 0.5609756097560976
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "anchor",
        "label": "anchor",
        "offered": 2467,
        "played": 513,
        "ignored": 1954,
        "selectionRate": 0.20794487231455208,
        "wins": 250,
        "losses": 263,
        "draws": 0,
        "winRateWhenPlayed": 0.4873294346978557,
        "averageFlips": 0.3762183235867446,
        "averageDamageDealt": 0.28654970760233917,
        "averageNetDamage": 0.1364522417153996,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 89,
            "winRateWhenPlayed": 0.6292134831460674
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 89,
            "winRateWhenPlayed": 0.4943820224719101
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 88,
            "winRateWhenPlayed": 0.4318181818181818
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 84,
            "winRateWhenPlayed": 0.3333333333333333
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 82,
            "winRateWhenPlayed": 0.5365853658536586
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
        "offered": 1651,
        "played": 356,
        "ignored": 1295,
        "selectionRate": 0.21562689279224712,
        "wins": 178,
        "losses": 178,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5056179775280899,
        "averageDamageDealt": 0.34269662921348315,
        "averageNetDamage": 0.14887640449438203,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 60,
            "winRateWhenPlayed": 0.5333333333333333
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 60,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 60,
            "winRateWhenPlayed": 0.43333333333333335
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 59,
            "winRateWhenPlayed": 0.6440677966101694
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 59,
            "winRateWhenPlayed": 0.3389830508474576
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
        "offered": 1736,
        "played": 346,
        "ignored": 1390,
        "selectionRate": 0.19930875576036866,
        "wins": 169,
        "losses": 177,
        "draws": 0,
        "winRateWhenPlayed": 0.4884393063583815,
        "averageFlips": 0.47398843930635837,
        "averageDamageDealt": 0.29190751445086704,
        "averageNetDamage": 0.1329479768786127,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 60,
            "winRateWhenPlayed": 0.43333333333333335
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 59,
            "winRateWhenPlayed": 0.559322033898305
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 58,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 58,
            "winRateWhenPlayed": 0.3275862068965517
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 57,
            "winRateWhenPlayed": 0.6140350877192983
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
        "offered": 30060,
        "played": 6972,
        "ignored": 23088,
        "selectionRate": 0.23193612774451097,
        "wins": 3671,
        "losses": 3301,
        "draws": 0,
        "winRateWhenPlayed": 0.52653471026965,
        "averageFlips": 0.3952954675846242,
        "averageDamageDealt": 0.35040160642570284,
        "averageNetDamage": 0.2279116465863454,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 525,
            "winRateWhenPlayed": 0.6190476190476191
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 492,
            "winRateWhenPlayed": 0.5813008130081301
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 474,
            "winRateWhenPlayed": 0.5337552742616034
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 447,
            "winRateWhenPlayed": 0.5861297539149888
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 426,
            "winRateWhenPlayed": 0.5211267605633803
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
        "count": 1019,
        "wins": 550,
        "losses": 469,
        "draws": 0,
        "winRate": 0.5397448478900884,
        "averageFlips": 0.46123650637880276,
        "averageDamageDealt": 0.31894013738959764,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 978,
        "wins": 587,
        "losses": 391,
        "draws": 0,
        "winRate": 0.6002044989775052,
        "averageFlips": 0.30368098159509205,
        "averageDamageDealt": 0.26278118609406953,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 752,
        "wins": 412,
        "losses": 340,
        "draws": 0,
        "winRate": 0.5478723404255319,
        "averageFlips": 0.4720744680851064,
        "averageDamageDealt": 0.40824468085106386,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 693,
        "wins": 461,
        "losses": 232,
        "draws": 0,
        "winRate": 0.6652236652236653,
        "averageFlips": 0.3823953823953824,
        "averageDamageDealt": 1.0894660894660895,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 672,
        "wins": 282,
        "losses": 390,
        "draws": 0,
        "winRate": 0.41964285714285715,
        "averageFlips": 0.3586309523809524,
        "averageDamageDealt": 0.46279761904761907,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 670,
        "wins": 448,
        "losses": 222,
        "draws": 0,
        "winRate": 0.6686567164179105,
        "averageFlips": 0.19701492537313434,
        "averageDamageDealt": 0.5940298507462687,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 525,
        "wins": 325,
        "losses": 200,
        "draws": 0,
        "winRate": 0.6190476190476191,
        "averageFlips": 0.5695238095238095,
        "averageDamageDealt": 0.35428571428571426,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 486,
        "wins": 281,
        "losses": 205,
        "draws": 0,
        "winRate": 0.5781893004115226,
        "averageFlips": 0.2777777777777778,
        "averageDamageDealt": 0.22839506172839505,
        "averageEffectAmount": 1.9506172839506173,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 473,
        "wins": 251,
        "losses": 222,
        "draws": 0,
        "winRate": 0.5306553911205074,
        "averageFlips": 0.693446088794926,
        "averageDamageDealt": 0.5391120507399577,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 471,
        "wins": 293,
        "losses": 178,
        "draws": 0,
        "winRate": 0.6220806794055201,
        "averageFlips": 0.35456475583864117,
        "averageDamageDealt": 0.7346072186836518,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 458,
        "wins": 243,
        "losses": 215,
        "draws": 0,
        "winRate": 0.5305676855895196,
        "averageFlips": 0.38209606986899564,
        "averageDamageDealt": 0.20305676855895197,
        "averageEffectAmount": 1.9912663755458515,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 433,
        "wins": 223,
        "losses": 210,
        "draws": 0,
        "winRate": 0.5150115473441108,
        "averageFlips": 0.4110854503464203,
        "averageDamageDealt": 1.1247113163972287,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 414,
        "wins": 213,
        "losses": 201,
        "draws": 0,
        "winRate": 0.5144927536231884,
        "averageFlips": 0.2826086956521739,
        "averageDamageDealt": 0.07246376811594203,
        "averageEffectAmount": 1.9516908212560387,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 329,
        "wins": 170,
        "losses": 159,
        "draws": 0,
        "winRate": 0.5167173252279635,
        "averageFlips": 0.6048632218844985,
        "averageDamageDealt": 1.148936170212766,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 327,
        "wins": 186,
        "losses": 141,
        "draws": 0,
        "winRate": 0.5688073394495413,
        "averageFlips": 0.43119266055045874,
        "averageDamageDealt": 0.23547400611620795,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:gain-shield",
        "kind": "effect",
        "label": "Moine engrene -> gain-shield",
        "count": 316,
        "wins": 180,
        "losses": 136,
        "draws": 0,
        "winRate": 0.569620253164557,
        "averageFlips": 0.22151898734177214,
        "averageDamageDealt": 0.189873417721519,
        "averageEffectAmount": 1.9683544303797469,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 303,
        "wins": 156,
        "losses": 147,
        "draws": 0,
        "winRate": 0.5148514851485149,
        "averageFlips": 0.24422442244224424,
        "averageDamageDealt": 0.3333333333333333,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:draw-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> draw-next-turn",
        "count": 298,
        "wins": 168,
        "losses": 130,
        "draws": 0,
        "winRate": 0.5637583892617449,
        "averageFlips": 0.22483221476510068,
        "averageDamageDealt": 0.23154362416107382,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 290,
        "wins": 184,
        "losses": 106,
        "draws": 0,
        "winRate": 0.6344827586206897,
        "averageFlips": 0.6551724137931034,
        "averageDamageDealt": 1.3620689655172413,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 278,
        "wins": 134,
        "losses": 144,
        "draws": 0,
        "winRate": 0.48201438848920863,
        "averageFlips": 0.3381294964028777,
        "averageDamageDealt": 0.2841726618705036,
        "averageEffectAmount": 2.723021582733813,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 277,
        "wins": 139,
        "losses": 138,
        "draws": 0,
        "winRate": 0.5018050541516246,
        "averageFlips": 0.08664259927797834,
        "averageDamageDealt": 0.09747292418772563,
        "averageEffectAmount": 1.9927797833935017,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 266,
        "wins": 148,
        "losses": 118,
        "draws": 0,
        "winRate": 0.556390977443609,
        "averageFlips": 0.13157894736842105,
        "averageDamageDealt": 0.16917293233082706,
        "averageEffectAmount": 1.605263157894737,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:grave-child:draw-next-turn",
        "kind": "effect",
        "label": "Enfant des tombes -> draw-next-turn",
        "count": 205,
        "wins": 102,
        "losses": 103,
        "draws": 0,
        "winRate": 0.4975609756097561,
        "averageFlips": 0.3024390243902439,
        "averageDamageDealt": 0.09268292682926829,
        "averageEffectAmount": 1.6146341463414635,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 204,
        "wins": 91,
        "losses": 113,
        "draws": 0,
        "winRate": 0.44607843137254904,
        "averageFlips": 0.2549019607843137,
        "averageDamageDealt": 0.6225490196078431,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1099,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "1099 offres, 17% selection, 37% win quand jouee, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2024,
        "id": "card-widow-knight-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Chevalier veuf est ignoree par les bots",
        "detail": "2024 offres, 13% selection, 52% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1225,
        "id": "card-wandering-glyph-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Glyphe errant est ignoree par les bots",
        "detail": "1225 offres, 17% selection, 52% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 977,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "977 offres, 16% selection, 57% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 3067,
        "id": "role-attacker-buff",
        "severity": "watch",
        "action": "verify",
        "title": "attacker manque d'attraction",
        "detail": "3067 offres, 17% selection, 50% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "1099 offres, 17% selection, 37% win quand jouee, role connector. Confiance high, echantillon 1099.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-widow-knight-ignored",
      "severity": "watch",
      "title": "Chevalier veuf est ignoree par les bots",
      "detail": "2024 offres, 13% selection, 52% win quand jouee, role attacker. Confiance high, echantillon 2024.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-wandering-glyph-ignored",
      "severity": "watch",
      "title": "Glyphe errant est ignoree par les bots",
      "detail": "1225 offres, 17% selection, 52% win quand jouee, role anchor. Confiance high, echantillon 1225.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "watch",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "977 offres, 16% selection, 57% win quand jouee, role attacker. Confiance high, echantillon 977.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 0.0% des runs complets, avec 80.5% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 0.0% des runs complets, avec 75.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ]
};
