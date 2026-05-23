import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260523-143846",
  "generatedAt": "2026-05-23T14:38:46.235Z",
  "config": {
    "matchesPerPairing": 2,
    "adventureRunsPerModel": 2,
    "seed": 20260523,
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
      "games": 2,
      "wins": 0,
      "losses": 2,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -19
    },
    {
      "modelId": "opportunist",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -0.25
    },
    {
      "modelId": "regular",
      "games": 4,
      "wins": 3,
      "losses": 1,
      "draws": 0,
      "winRate": 0.75,
      "averageHpEdge": 3.25
    },
    {
      "modelId": "expert",
      "games": 4,
      "wins": 1,
      "losses": 3,
      "draws": 0,
      "winRate": 0.25,
      "averageHpEdge": 0.75
    },
    {
      "modelId": "champion",
      "games": 2,
      "wins": 2,
      "losses": 0,
      "draws": 0,
      "winRate": 1,
      "averageHpEdge": 11.5
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "mirrorModelId": "regular",
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 31,
        "rounds": 3.5,
        "flipsPerMatch": 7,
        "flipsPerTurn": 0.22580645161290322,
        "reshuffles": 5,
        "deadTurns": 0.5,
        "finalHpDifference": 16
      },
      "deadTurnFrequency": 0.016129032258064516,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce depart."
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
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "enemy": {
          "games": 0,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 2,
          "wins": 0,
          "losses": 2,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -19
        },
        {
          "modelId": "opportunist",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19
        }
      ],
      "averages": {
        "turns": 13.5,
        "rounds": 1.5,
        "flipsPerMatch": 7,
        "flipsPerTurn": 0.5185185185185185,
        "reshuffles": 1,
        "deadTurns": 0,
        "finalHpDifference": 19
      },
      "deadTurnFrequency": 0
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "enemy": {
          "games": 0,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 2,
          "wins": 0,
          "losses": 2,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -19.5
        },
        {
          "modelId": "regular",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19.5
        }
      ],
      "averages": {
        "turns": 16.5,
        "rounds": 1.5,
        "flipsPerMatch": 4.5,
        "flipsPerTurn": 0.2727272727272727,
        "reshuffles": 1,
        "deadTurns": 3,
        "finalHpDifference": 19.5
      },
      "deadTurnFrequency": 0.18181818181818182
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "enemy": {
          "games": 0,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 2,
          "wins": 1,
          "losses": 1,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -13
        },
        {
          "modelId": "expert",
          "games": 2,
          "wins": 1,
          "losses": 1,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 13
        }
      ],
      "averages": {
        "turns": 24.5,
        "rounds": 2.5,
        "flipsPerMatch": 7,
        "flipsPerTurn": 0.2857142857142857,
        "reshuffles": 2.5,
        "deadTurns": 4.5,
        "finalHpDifference": 19
      },
      "deadTurnFrequency": 0.1836734693877551
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "enemy": {
          "games": 0,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 2,
          "wins": 0,
          "losses": 2,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -11.5
        },
        {
          "modelId": "champion",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 11.5
        }
      ],
      "averages": {
        "turns": 32,
        "rounds": 3.5,
        "flipsPerMatch": 9,
        "flipsPerTurn": 0.28125,
        "reshuffles": 5,
        "deadTurns": 1.5,
        "finalHpDifference": 11.5
      },
      "deadTurnFrequency": 0.046875
    }
  ],
  "adventureSummaries": [
    {
      "modelId": "beginner",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 1.5,
      "averageFinalDeckSize": 12.5,
      "averageDeckDelta": 0.5,
      "averageCombatWinRate": 0.3333333333333333,
      "averageCombatTurns": 18.666666666666668,
      "averageCombatFlips": 4,
      "averageDeadTurns": 3.6666666666666665,
      "averageReshuffles": 2.6666666666666665,
      "averageRewardsClaimed": 0.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.5,
        "demon": 0.5
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
      "runs": 2,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 8,
      "averageFinalDeckSize": 14.5,
      "averageDeckDelta": 2.5,
      "averageCombatWinRate": 0.8333333333333334,
      "averageCombatTurns": 15.083333333333334,
      "averageCombatFlips": 6.583333333333333,
      "averageDeadTurns": 1.0833333333333333,
      "averageReshuffles": 1.5,
      "averageRewardsClaimed": 5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 2.5,
      "averageFusions": 0,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.5294117647058824,
        "elite": 0.11764705882352941,
        "shop": 0,
        "chest": 0,
        "rest": 0.29411764705882354,
        "boss": 0.058823529411764705
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3,
      "averageFinalDeckSize": 14,
      "averageDeckDelta": 2,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 26.166666666666668,
      "averageCombatFlips": 6,
      "averageDeadTurns": 5.166666666666667,
      "averageReshuffles": 2.8333333333333335,
      "averageRewardsClaimed": 2,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.6666666666666666,
        "elite": 0.3333333333333333,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 2,
      "victories": 1,
      "bossReached": 1,
      "victoryRate": 0.5,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 7.5,
      "averageFinalDeckSize": 15,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.9090909090909091,
      "averageCombatTurns": 15,
      "averageCombatFlips": 5.454545454545454,
      "averageDeadTurns": 1.3636363636363635,
      "averageReshuffles": 1.9090909090909092,
      "averageRewardsClaimed": 5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 2,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.625,
        "elite": 0,
        "shop": 0.25,
        "chest": 0.0625,
        "rest": 0,
        "boss": 0.0625
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 2,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 5.5,
      "averageFinalDeckSize": 15,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.7142857142857143,
      "averageCombatTurns": 16.428571428571427,
      "averageCombatFlips": 6.714285714285714,
      "averageDeadTurns": 2,
      "averageReshuffles": 1.7142857142857142,
      "averageRewardsClaimed": 4,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1,
      "averageFusions": 0,
      "familyPickRates": {
        "demon": 1
      },
      "nodeMix": {
        "combat": 0.4166666666666667,
        "elite": 0.08333333333333333,
        "shop": 0,
        "chest": 0.25,
        "rest": 0.16666666666666666,
        "boss": 0.08333333333333333
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
      "seed": 1892750407,
      "selectedFamily": "familiar",
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 8,
      "totalDeadTurns": 8,
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
        "combat": 2,
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
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 22,
          "combatFlips": 5,
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
      "seed": 1875972788,
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
      "totalCombatTurns": 12,
      "totalCombatFlips": 4,
      "totalDeadTurns": 3,
      "totalReshuffles": 0,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 12,
          "combatFlips": 4,
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
      "seed": 1333124066,
      "selectedFamily": "demon",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 16,
      "deckDelta": 4,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 94,
      "totalCombatFlips": 41,
      "totalDeadTurns": 7,
      "totalReshuffles": 8,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 6,
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
        "combat": 5,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 10,
        "human": 1,
        "automaton": 2,
        "revenant": 0,
        "arcane": 2,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 9,
          "combatFlips": 6,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 6,
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
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 18,
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
          "nodeId": "depth-7-lane-4",
          "depth": 7,
          "lane": 4,
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
      "modelId": "opportunist",
      "seed": 1349901685,
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
      "totalCombatTurns": 87,
      "totalCombatFlips": 38,
      "totalDeadTurns": 6,
      "totalReshuffles": 10,
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
        "first-breath"
      ],
      "campVisits": 3,
      "upgrades": 0,
      "removals": 3,
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 4,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 3,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 9,
        "human": 0,
        "automaton": 0,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 16,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 20,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
          "lane": 2,
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 8286099,
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
      "totalCombatTurns": 44,
      "totalCombatFlips": 8,
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
        "automaton": 1,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 24,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 20,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 4286475776,
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
      "totalCombatTurns": 113,
      "totalCombatFlips": 28,
      "totalDeadTurns": 23,
      "totalReshuffles": 13,
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
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 1,
        "human": 1,
        "automaton": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 37,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 32,
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
          "nodeId": "depth-3-lane-4",
          "depth": 3,
          "lane": 4,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 514900101,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 81,
      "totalCombatFlips": 26,
      "totalDeadTurns": 9,
      "totalReshuffles": 9,
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
        "first-breath"
      ],
      "campVisits": 0,
      "upgrades": 0,
      "removals": 0,
      "forgeVisits": 2,
      "fusions": 2,
      "treasures": 0,
      "nodeCounts": {
        "combat": 5,
        "elite": 0,
        "shop": 2,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
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
          "nodeId": "depth-3-lane-3",
          "depth": 3,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 6,
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
          "nodeId": "depth-6-lane-2",
          "depth": 6,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 7,
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
      "seed": 498122482,
      "selectedFamily": "demon",
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
      "totalCombatTurns": 84,
      "totalCombatFlips": 34,
      "totalDeadTurns": 6,
      "totalReshuffles": 12,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 6,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 20,
      "stealRewardsClaimed": 5,
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
        "combat": 5,
        "elite": 0,
        "shop": 2,
        "chest": 1,
        "rest": 0,
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
          "nodeId": "depth-1-lane-4",
          "depth": 1,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 15,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 10,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 13,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 2167660670,
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
      "totalCombatTurns": 55,
      "totalCombatFlips": 28,
      "totalDeadTurns": 3,
      "totalReshuffles": 6,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
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
      "forgeVisits": 0,
      "fusions": 0,
      "treasures": 0,
      "nodeCounts": {
        "combat": 3,
        "elite": 0,
        "shop": 0,
        "chest": 3,
        "rest": 2,
        "boss": 1
      },
      "finalDeckFamilies": {
        "familiar": 1,
        "demon": 12,
        "human": 0,
        "automaton": 3,
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
          "combatTurns": 18,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 9,
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
          "nodeId": "depth-3-lane-1",
          "depth": 3,
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
          "nodeId": "depth-7-lane-2",
          "depth": 7,
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
      "seed": 2184438289,
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
      "totalCombatTurns": 60,
      "totalCombatFlips": 19,
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
        "familiar": 1,
        "demon": 12,
        "human": 0,
        "automaton": 0,
        "revenant": 1,
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
          "combatTurns": 21,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 13,
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
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 170,
        "played": 30,
        "ignored": 140,
        "selectionRate": 0.17647058823529413,
        "wins": 18,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.23333333333333334,
        "failedImpactRate": 0.46153846153846156,
        "averageFlipMargin": 2.7142857142857144,
        "averageEffectAmount": 1.5,
        "averageDamageDealt": 0.5,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.5,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.5
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
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 30,
            "winRate": 0.6
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 62,
        "played": 10,
        "ignored": 52,
        "selectionRate": 0.16129032258064516,
        "wins": 5,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.4,
        "failedImpactRate": 0.42857142857142855,
        "averageFlipMargin": 2.75,
        "averageEffectAmount": 1.8,
        "averageDamageDealt": 1.6,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.6,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0
          },
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 10,
            "winRate": 0.5
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
        "maxSide": 4,
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
        "offered": 56,
        "played": 9,
        "ignored": 47,
        "selectionRate": 0.16071428571428573,
        "wins": 4,
        "losses": 5,
        "draws": 0,
        "winRateWhenPlayed": 0.4444444444444444,
        "averageFlips": 0.2222222222222222,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1,
        "averageEffectAmount": 1.2222222222222223,
        "averageDamageDealt": 0.5555555555555556,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.5555555555555556,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 3,
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 9,
            "winRate": 0.4444444444444444
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 182,
        "played": 45,
        "ignored": 137,
        "selectionRate": 0.24725274725274726,
        "wins": 22,
        "losses": 23,
        "draws": 0,
        "winRateWhenPlayed": 0.4888888888888889,
        "averageFlips": 0.2,
        "failedImpactRate": 0.5714285714285714,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 1.4222222222222223,
        "averageDamageDealt": 0.6666666666666666,
        "averageDamageTaken": 0.4222222222222222,
        "averageNetDamage": 0.2444444444444444,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 19,
            "winRate": 0.3684210526315789
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 0.4166666666666667
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 45,
            "winRate": 0.4888888888888889
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
        "offered": 241,
        "played": 44,
        "ignored": 197,
        "selectionRate": 0.1825726141078838,
        "wins": 27,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.6136363636363636,
        "averageFlips": 0.38636363636363635,
        "failedImpactRate": 0.6136363636363636,
        "averageFlipMargin": 2.411764705882353,
        "averageEffectAmount": 0.8181818181818182,
        "averageDamageDealt": 1.8863636363636365,
        "averageDamageTaken": 0.5227272727272727,
        "averageNetDamage": 1.3636363636363638,
        "lethalMoves": 3,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 20,
            "winRate": 0.65
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.4
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 44,
            "winRate": 0.6136363636363636
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
        "offered": 126,
        "played": 34,
        "ignored": 92,
        "selectionRate": 0.2698412698412698,
        "wins": 20,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5882352941176471,
        "averageFlips": 0.3235294117647059,
        "failedImpactRate": 0.21428571428571427,
        "averageFlipMargin": 5.7272727272727275,
        "averageEffectAmount": 1.6176470588235294,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 34,
            "winRate": 0.5882352941176471
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
        "offered": 88,
        "played": 22,
        "ignored": 66,
        "selectionRate": 0.25,
        "wins": 12,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.45454545454545453,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 3.1,
        "averageEffectAmount": 1.5,
        "averageDamageDealt": 2.090909090909091,
        "averageDamageTaken": 0.6363636363636364,
        "averageNetDamage": 1.4545454545454546,
        "lethalMoves": 2,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 10,
            "winRate": 0.7
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "champion",
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 22,
            "winRate": 0.5454545454545454
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
        "offered": 90,
        "played": 22,
        "ignored": 68,
        "selectionRate": 0.24444444444444444,
        "wins": 12,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.4090909090909091,
        "failedImpactRate": 0.5909090909090909,
        "averageFlipMargin": 1.5555555555555556,
        "averageEffectAmount": 1.3181818181818181,
        "averageDamageDealt": 2.590909090909091,
        "averageDamageTaken": 1.0909090909090908,
        "averageNetDamage": 1.5,
        "lethalMoves": 3,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 9,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.6666666666666666
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 22,
            "winRate": 0.5454545454545454
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
        "id": "familiar",
        "label": "familiar",
        "offered": 719,
        "played": 153,
        "ignored": 566,
        "selectionRate": 0.21279554937413073,
        "wins": 87,
        "losses": 66,
        "draws": 0,
        "winRateWhenPlayed": 0.5686274509803921,
        "averageFlips": 0.2875816993464052,
        "averageDamageDealt": 0.8366013071895425,
        "averageNetDamage": 0.5620915032679739,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 45,
            "winRateWhenPlayed": 0.4888888888888889
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 44,
            "winRateWhenPlayed": 0.6136363636363636
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 34,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 30,
            "winRateWhenPlayed": 0.6
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
        "offered": 296,
        "played": 63,
        "ignored": 233,
        "selectionRate": 0.21283783783783783,
        "wins": 33,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.5238095238095238,
        "averageFlips": 0.3968253968253968,
        "averageDamageDealt": 1.9682539682539681,
        "averageNetDamage": 1.3650793650793651,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 22,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 22,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 10,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 9,
            "winRateWhenPlayed": 0.4444444444444444
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
        "offered": 270,
        "played": 67,
        "ignored": 203,
        "selectionRate": 0.24814814814814815,
        "wins": 34,
        "losses": 33,
        "draws": 0,
        "winRateWhenPlayed": 0.5074626865671642,
        "averageFlips": 0.2835820895522388,
        "averageDamageDealt": 1.1343283582089552,
        "averageNetDamage": 0.6417910447761194,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 45,
            "winRateWhenPlayed": 0.4888888888888889
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 22,
            "winRateWhenPlayed": 0.5454545454545454
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
        "offered": 331,
        "played": 66,
        "ignored": 265,
        "selectionRate": 0.19939577039274925,
        "wins": 39,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.5909090909090909,
        "averageFlips": 0.3939393939393939,
        "averageDamageDealt": 2.121212121212121,
        "averageNetDamage": 1.409090909090909,
        "topCards": [
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 44,
            "winRateWhenPlayed": 0.6136363636363636
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 22,
            "winRateWhenPlayed": 0.5454545454545454
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
        "offered": 182,
        "played": 43,
        "ignored": 139,
        "selectionRate": 0.23626373626373626,
        "wins": 24,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.5581395348837209,
        "averageFlips": 0.3023255813953488,
        "averageDamageDealt": 0.11627906976744186,
        "averageNetDamage": 0.11627906976744186,
        "topCards": [
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 34,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 9,
            "winRateWhenPlayed": 0.4444444444444444
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
        "offered": 232,
        "played": 40,
        "ignored": 192,
        "selectionRate": 0.1724137931034483,
        "wins": 23,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.575,
        "averageFlips": 0.275,
        "averageDamageDealt": 0.775,
        "averageNetDamage": 0.775,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 30,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 10,
            "winRateWhenPlayed": 0.5
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
        "offered": 1015,
        "played": 216,
        "ignored": 799,
        "selectionRate": 0.21280788177339902,
        "wins": 120,
        "losses": 96,
        "draws": 0,
        "winRateWhenPlayed": 0.5555555555555556,
        "averageFlips": 0.3194444444444444,
        "averageDamageDealt": 1.1666666666666667,
        "averageNetDamage": 0.7962962962962964,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 45,
            "winRateWhenPlayed": 0.4888888888888889
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 44,
            "winRateWhenPlayed": 0.6136363636363636
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 34,
            "winRateWhenPlayed": 0.5882352941176471
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 30,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 22,
            "winRateWhenPlayed": 0.5454545454545454
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
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 120,
        "wins": 70,
        "losses": 50,
        "draws": 0,
        "winRate": 0.5833333333333334,
        "averageFlips": 0.35833333333333334,
        "averageDamageDealt": 1.0666666666666667,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 112,
        "wins": 80,
        "losses": 32,
        "draws": 0,
        "winRate": 0.7142857142857143,
        "averageFlips": 0.35714285714285715,
        "averageDamageDealt": 3.2232142857142856,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 47,
        "wins": 25,
        "losses": 22,
        "draws": 0,
        "winRate": 0.5319148936170213,
        "averageFlips": 0.5319148936170213,
        "averageDamageDealt": 2.6382978723404253,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 28,
        "wins": 15,
        "losses": 13,
        "draws": 0,
        "winRate": 0.5357142857142857,
        "averageFlips": 0.07142857142857142,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2.107142857142857,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 27,
        "wins": 19,
        "losses": 8,
        "draws": 0,
        "winRate": 0.7037037037037037,
        "averageFlips": 0.5185185185185185,
        "averageDamageDealt": 4,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 21,
        "wins": 12,
        "losses": 9,
        "draws": 0,
        "winRate": 0.5714285714285714,
        "averageFlips": 0.14285714285714285,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.9523809523809523,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:heron:gain-shield",
        "kind": "effect",
        "label": "Oiselle aubeplume -> gain-shield",
        "count": 19,
        "wins": 11,
        "losses": 8,
        "draws": 0,
        "winRate": 0.5789473684210527,
        "averageFlips": 0.3684210526315789,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.8421052631578947,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:foxfire:gain-shield",
        "kind": "effect",
        "label": "Requin runefer -> gain-shield",
        "count": 14,
        "wins": 8,
        "losses": 6,
        "draws": 0,
        "winRate": 0.5714285714285714,
        "averageFlips": 0.7142857142857143,
        "averageDamageDealt": 0.2857142857142857,
        "averageEffectAmount": 1.8571428571428572,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 11,
        "wins": 7,
        "losses": 4,
        "draws": 0,
        "winRate": 0.6363636363636364,
        "averageFlips": 0.9090909090909091,
        "averageDamageDealt": 3.4545454545454546,
        "averageEffectAmount": 2.1818181818181817,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:heron:draw-next-turn",
        "kind": "effect",
        "label": "Oiselle aubeplume -> draw-next-turn",
        "count": 10,
        "wins": 10,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 1.1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:foxfire:draw-next-turn",
        "kind": "effect",
        "label": "Requin runefer -> draw-next-turn",
        "count": 9,
        "wins": 6,
        "losses": 3,
        "draws": 0,
        "winRate": 0.6666666666666666,
        "averageFlips": 1,
        "averageDamageDealt": 0.4444444444444444,
        "averageEffectAmount": 1.1111111111111112,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 8,
        "wins": 6,
        "losses": 2,
        "draws": 0,
        "winRate": 0.75,
        "averageFlips": 1.125,
        "averageDamageDealt": 3.375,
        "averageEffectAmount": 3.375,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:ember-imp:boost-self",
        "kind": "effect",
        "label": "Diablotin braise -> boost-self",
        "count": 7,
        "wins": 5,
        "losses": 2,
        "draws": 0,
        "winRate": 0.7142857142857143,
        "averageFlips": 0.8571428571428571,
        "averageDamageDealt": 1.8571428571428572,
        "averageEffectAmount": 1.2857142857142858,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 6,
        "wins": 2,
        "losses": 4,
        "draws": 0,
        "winRate": 0.3333333333333333,
        "averageFlips": 0.6666666666666666,
        "averageDamageDealt": 2.6666666666666665,
        "averageEffectAmount": 2.6666666666666665,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:draw-next-turn",
        "kind": "effect",
        "label": "Poney runique -> draw-next-turn",
        "count": 4,
        "wins": 4,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.25,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 4,
        "wins": 2,
        "losses": 2,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.5,
        "averageDamageDealt": 1.25,
        "averageEffectAmount": 1.5,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:draw-next-turn",
        "kind": "effect",
        "label": "Floramie toxique -> draw-next-turn",
        "count": 3,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRate": 0.6666666666666666,
        "averageFlips": 1.3333333333333333,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.3333333333333333,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:deal-damage",
        "kind": "effect",
        "label": "Lutin a pacte -> deal-damage",
        "count": 3,
        "wins": 2,
        "losses": 1,
        "draws": 0,
        "winRate": 0.6666666666666666,
        "averageFlips": 0.6666666666666666,
        "averageDamageDealt": 1.6666666666666667,
        "averageEffectAmount": 1.6666666666666667,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:cinder-grin:boost-self",
        "kind": "effect",
        "label": "Sourire de suie -> boost-self",
        "count": 2,
        "wins": 2,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 1.5,
        "averageDamageDealt": 3,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:boost-self",
        "kind": "effect",
        "label": "Cornu farceur -> boost-self",
        "count": 2,
        "wins": 1,
        "losses": 1,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.5,
        "averageDamageDealt": 1,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "id": "combo-effect:heron:draw-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 10,
        "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
        "detail": "10 occurrences, 100% win, 1.10 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 170,
        "id": "card-sapling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Floramie toxique est ignoree par les bots",
        "detail": "170 offres, 18% selection, 60% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 62,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "62 offres, 16% selection, 50% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 56,
        "id": "card-pact-sprite-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Lutin a pacte est ignoree par les bots",
        "detail": "56 offres, 16% selection, 44% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 232,
        "id": "role-anchor-buff",
        "severity": "watch",
        "action": "verify",
        "title": "anchor manque d'attraction",
        "detail": "232 offres, 17% selection, 57% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 112,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "112 occurrences, 71% win, 0.36 flips, 3.22 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 47,
        "title": "demon -> demon ressort comme combo",
        "detail": "47 occurrences, 53% win, 0.53 flips, 2.64 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 27,
        "title": "demon allie + demon ressort comme combo",
        "detail": "27 occurrences, 70% win, 0.52 flips, 4.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 11,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "11 occurrences, 64% win, 0.91 flips, 3.45 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:foxfire:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 9,
        "title": "Requin runefer -> draw-next-turn ressort comme combo",
        "detail": "9 occurrences, 67% win, 1.00 flips, 0.44 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 8,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "8 occurrences, 75% win, 1.13 flips, 3.38 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 7,
        "title": "Diablotin braise -> boost-self ressort comme combo",
        "detail": "7 occurrences, 71% win, 0.86 flips, 1.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 6,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "6 occurrences, 33% win, 0.67 flips, 2.67 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:badger:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 4,
        "title": "Poney runique -> draw-next-turn ressort comme combo",
        "detail": "4 occurrences, 100% win, 1.00 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-combo-effect:heron:draw-next-turn",
      "severity": "problem",
      "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
      "detail": "10 occurrences, 100% win, 1.10 flips, 0.00 degats. Confiance medium, echantillon 10.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-card-sapling-ignored",
      "severity": "watch",
      "title": "Floramie toxique est ignoree par les bots",
      "detail": "170 offres, 18% selection, 60% win quand jouee, role anchor. Confiance high, echantillon 170.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "62 offres, 16% selection, 50% win quand jouee, role anchor. Confiance high, echantillon 62.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-pact-sprite-ignored",
      "severity": "watch",
      "title": "Lutin a pacte est ignoree par les bots",
      "detail": "56 offres, 16% selection, 44% win quand jouee, role connector. Confiance high, echantillon 56.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    }
  ]
};
