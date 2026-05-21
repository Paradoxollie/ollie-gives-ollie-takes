import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260521-175421",
  "generatedAt": "2026-05-21T17:54:21.482Z",
  "config": {
    "matchesPerPairing": 2,
    "adventureRunsPerModel": 1,
    "seed": 20260521,
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
      "averageHpEdge": -24.5
    },
    {
      "modelId": "opportunist",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 3.75
    },
    {
      "modelId": "regular",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -1
    },
    {
      "modelId": "expert",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 0
    },
    {
      "modelId": "champion",
      "games": 2,
      "wins": 2,
      "losses": 0,
      "draws": 0,
      "winRate": 1,
      "averageHpEdge": 19
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
        "turns": 63.5,
        "rounds": 6.5,
        "flipsPerMatch": 13.5,
        "flipsPerTurn": 0.2125984251968504,
        "reshuffles": 10.5,
        "deadTurns": 8,
        "finalHpDifference": 16.5
      },
      "deadTurnFrequency": 0.12598425196850394,
      "status": "problem",
      "notes": [
        "Ouverture stable sur ce depart.",
        "Tours morts frequents (13%).",
        "Peu de flips par tour (0.21)."
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
          "averageHpEdge": -24.5
        },
        {
          "modelId": "opportunist",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 24.5
        }
      ],
      "averages": {
        "turns": 31.5,
        "rounds": 3,
        "flipsPerMatch": 10,
        "flipsPerTurn": 0.31746031746031744,
        "reshuffles": 3,
        "deadTurns": 6.5,
        "finalHpDifference": 24.5
      },
      "deadTurnFrequency": 0.20634920634920634
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
          "averageHpEdge": -17
        },
        {
          "modelId": "regular",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 17
        }
      ],
      "averages": {
        "turns": 47.5,
        "rounds": 4.5,
        "flipsPerMatch": 13.5,
        "flipsPerTurn": 0.28421052631578947,
        "reshuffles": 7,
        "deadTurns": 9,
        "finalHpDifference": 17
      },
      "deadTurnFrequency": 0.18947368421052632
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
          "modelId": "regular",
          "games": 2,
          "wins": 0,
          "losses": 2,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -19
        },
        {
          "modelId": "expert",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19
        }
      ],
      "averages": {
        "turns": 46,
        "rounds": 4,
        "flipsPerMatch": 11.5,
        "flipsPerTurn": 0.25,
        "reshuffles": 5,
        "deadTurns": 10.5,
        "finalHpDifference": 19
      },
      "deadTurnFrequency": 0.22826086956521738
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
          "averageHpEdge": -19
        },
        {
          "modelId": "champion",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19
        }
      ],
      "averages": {
        "turns": 47,
        "rounds": 4.5,
        "flipsPerMatch": 10.5,
        "flipsPerTurn": 0.22340425531914893,
        "reshuffles": 6,
        "deadTurns": 9,
        "finalHpDifference": 19
      },
      "deadTurnFrequency": 0.19148936170212766
    }
  ],
  "adventureSummaries": [
    {
      "modelId": "beginner",
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 1,
      "averageFinalDeckSize": 12,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 56,
      "averageCombatFlips": 16,
      "averageDeadTurns": 11,
      "averageReshuffles": 18,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "revenant": 1
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
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 39,
      "averageCombatFlips": 17,
      "averageDeadTurns": 5.5,
      "averageReshuffles": 5.5,
      "averageRewardsClaimed": 1,
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
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3,
      "averageFinalDeckSize": 14,
      "averageDeckDelta": 2,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 48.666666666666664,
      "averageCombatFlips": 17,
      "averageDeadTurns": 3.6666666666666665,
      "averageReshuffles": 9,
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
        "combat": 1,
        "elite": 0,
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
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 33,
      "averageCombatFlips": 12.5,
      "averageDeadTurns": 2,
      "averageReshuffles": 7.5,
      "averageRewardsClaimed": 1,
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
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 38.5,
      "averageCombatFlips": 8,
      "averageDeadTurns": 2.5,
      "averageReshuffles": 6,
      "averageRewardsClaimed": 1,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.5,
        "elite": 0.5,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
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
      "seed": 3298303221,
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
      "totalCombatTurns": 56,
      "totalCombatFlips": 16,
      "totalDeadTurns": 11,
      "totalReshuffles": 18,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 56,
          "combatFlips": 16,
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
      "seed": 1584944868,
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
      "totalCombatTurns": 78,
      "totalCombatFlips": 34,
      "totalDeadTurns": 11,
      "totalReshuffles": 11,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 31,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 47,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 1092635653,
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
      "totalCombatTurns": 146,
      "totalCombatFlips": 51,
      "totalDeadTurns": 11,
      "totalReshuffles": 27,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 44,
          "combatFlips": 15,
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
          "nodeId": "depth-1-lane-0",
          "depth": 1,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 48,
          "combatFlips": 13,
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
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 54,
          "combatFlips": 23,
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
      "modelId": "expert",
      "seed": 264224979,
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
      "totalCombatTurns": 66,
      "totalCombatFlips": 25,
      "totalDeadTurns": 4,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 40,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 26,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 3750007948,
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
      "totalCombatTurns": 77,
      "totalCombatFlips": 16,
      "totalDeadTurns": 5,
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
        "automaton": 13,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 29,
          "combatFlips": 8,
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
          "nodeId": "depth-1-lane-2",
          "depth": 1,
          "lane": 2,
          "kind": "elite",
          "title": "Champion des lianes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 48,
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
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 499,
        "played": 75,
        "ignored": 424,
        "selectionRate": 0.15030060120240482,
        "wins": 43,
        "losses": 32,
        "draws": 0,
        "winRateWhenPlayed": 0.5733333333333334,
        "averageFlips": 0.25333333333333335,
        "failedImpactRate": 0.6885245901639344,
        "averageFlipMargin": 2.9473684210526314,
        "averageEffectAmount": 0.6666666666666666,
        "averageDamageDealt": 1.0133333333333334,
        "averageDamageTaken": 0.14666666666666667,
        "averageNetDamage": 0.8666666666666667,
        "lethalMoves": 4,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 35,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 9,
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
            "played": 75,
            "winRate": 0.5733333333333334
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
        "offered": 272,
        "played": 48,
        "ignored": 224,
        "selectionRate": 0.17647058823529413,
        "wins": 33,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.6875,
        "averageFlips": 0.4166666666666667,
        "failedImpactRate": 0.25925925925925924,
        "averageFlipMargin": 4.25,
        "averageEffectAmount": 1.0208333333333333,
        "averageDamageDealt": 0.3125,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.3125,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 21,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 14,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
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
            "played": 48,
            "winRate": 0.6875
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
        "offered": 166,
        "played": 28,
        "ignored": 138,
        "selectionRate": 0.1686746987951807,
        "wins": 14,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.35714285714285715,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 2.6,
        "averageEffectAmount": 0.9642857142857143,
        "averageDamageDealt": 1.5714285714285714,
        "averageDamageTaken": 0.4642857142857143,
        "averageNetDamage": 1.1071428571428572,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.25
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
            "played": 28,
            "winRate": 0.5
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 169,
        "played": 23,
        "ignored": 146,
        "selectionRate": 0.13609467455621302,
        "wins": 11,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.4782608695652174,
        "averageFlips": 0.34782608695652173,
        "failedImpactRate": 0.5555555555555556,
        "averageFlipMargin": 3.875,
        "averageEffectAmount": 1.1304347826086956,
        "averageDamageDealt": 1.391304347826087,
        "averageDamageTaken": 0.6521739130434783,
        "averageNetDamage": 0.7391304347826086,
        "lethalMoves": 3,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 9,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.2857142857142857
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.8333333333333334
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
            "played": 23,
            "winRate": 0.4782608695652174
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
        "offered": 381,
        "played": 89,
        "ignored": 292,
        "selectionRate": 0.2335958005249344,
        "wins": 61,
        "losses": 28,
        "draws": 0,
        "winRateWhenPlayed": 0.6853932584269663,
        "averageFlips": 0.10112359550561797,
        "failedImpactRate": 0.7272727272727273,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 1.3370786516853932,
        "averageDamageDealt": 0.3258426966292135,
        "averageDamageTaken": 0.06741573033707865,
        "averageNetDamage": 0.25842696629213485,
        "lethalMoves": 1,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 47,
            "winRate": 0.7021276595744681
          },
          {
            "modelId": "expert",
            "played": 16,
            "winRate": 0.6875
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 10,
            "winRate": 0.5
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 89,
            "winRate": 0.6853932584269663
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
        "offered": 228,
        "played": 67,
        "ignored": 161,
        "selectionRate": 0.29385964912280704,
        "wins": 48,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.7164179104477612,
        "averageFlips": 0.26865671641791045,
        "failedImpactRate": 0.47058823529411764,
        "averageFlipMargin": 4.222222222222222,
        "averageEffectAmount": 1.0149253731343284,
        "averageDamageDealt": 0.014925373134328358,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.014925373134328358,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 33,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 14,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
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
            "played": 67,
            "winRate": 0.7164179104477612
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
        "offered": 96,
        "played": 30,
        "ignored": 66,
        "selectionRate": 0.3125,
        "wins": 16,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5333333333333333,
        "averageFlips": 0.5333333333333333,
        "failedImpactRate": 0.38461538461538464,
        "averageFlipMargin": 2.75,
        "averageEffectAmount": 1.5666666666666667,
        "averageDamageDealt": 1.5,
        "averageDamageTaken": 0.2,
        "averageNetDamage": 1.3,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.35714285714285715
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 4,
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
            "played": 30,
            "winRate": 0.5333333333333333
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
        "offered": 102,
        "played": 25,
        "ignored": 77,
        "selectionRate": 0.24509803921568626,
        "wins": 14,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.56,
        "averageFlips": 0.72,
        "failedImpactRate": 0.21739130434782608,
        "averageFlipMargin": 3.888888888888889,
        "averageEffectAmount": 1.8,
        "averageDamageDealt": 1.24,
        "averageDamageTaken": 0.16,
        "averageNetDamage": 1.08,
        "lethalMoves": 2,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.25
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.6666666666666666
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
            "played": 25,
            "winRate": 0.56
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
        "offered": 1380,
        "played": 279,
        "ignored": 1101,
        "selectionRate": 0.20217391304347826,
        "wins": 185,
        "losses": 94,
        "draws": 0,
        "winRateWhenPlayed": 0.6630824372759857,
        "averageFlips": 0.23655913978494625,
        "averageDamageDealt": 0.4336917562724014,
        "averageNetDamage": 0.37275985663082434,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 89,
            "winRateWhenPlayed": 0.6853932584269663
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 75,
            "winRateWhenPlayed": 0.5733333333333334
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 67,
            "winRateWhenPlayed": 0.7164179104477612
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 48,
            "winRateWhenPlayed": 0.6875
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
        "offered": 533,
        "played": 106,
        "ignored": 427,
        "selectionRate": 0.19887429643527205,
        "wins": 55,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.5188679245283019,
        "averageFlips": 0.49056603773584906,
        "averageDamageDealt": 1.4339622641509433,
        "averageNetDamage": 1.0754716981132075,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 30,
            "winRateWhenPlayed": 0.5333333333333333
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 28,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 25,
            "winRateWhenPlayed": 0.56
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 23,
            "winRateWhenPlayed": 0.4782608695652174
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
        "offered": 547,
        "played": 117,
        "ignored": 430,
        "selectionRate": 0.21389396709323583,
        "wins": 75,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.6410256410256411,
        "averageFlips": 0.1623931623931624,
        "averageDamageDealt": 0.6239316239316239,
        "averageNetDamage": 0.46153846153846156,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 89,
            "winRateWhenPlayed": 0.6853932584269663
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 28,
            "winRateWhenPlayed": 0.5
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
        "offered": 668,
        "played": 98,
        "ignored": 570,
        "selectionRate": 0.1467065868263473,
        "wins": 54,
        "losses": 44,
        "draws": 0,
        "winRateWhenPlayed": 0.5510204081632653,
        "averageFlips": 0.2755102040816326,
        "averageDamageDealt": 1.1020408163265305,
        "averageNetDamage": 0.8367346938775508,
        "topCards": [
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 75,
            "winRateWhenPlayed": 0.5733333333333334
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 23,
            "winRateWhenPlayed": 0.4782608695652174
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
        "offered": 330,
        "played": 92,
        "ignored": 238,
        "selectionRate": 0.2787878787878788,
        "wins": 62,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.6739130434782609,
        "averageFlips": 0.391304347826087,
        "averageDamageDealt": 0.34782608695652173,
        "averageNetDamage": 0.30434782608695654,
        "topCards": [
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 67,
            "winRateWhenPlayed": 0.7164179104477612
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 25,
            "winRateWhenPlayed": 0.56
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
        "offered": 368,
        "played": 78,
        "ignored": 290,
        "selectionRate": 0.21195652173913043,
        "wins": 49,
        "losses": 29,
        "draws": 0,
        "winRateWhenPlayed": 0.6282051282051282,
        "averageFlips": 0.46153846153846156,
        "averageDamageDealt": 0.7692307692307693,
        "averageNetDamage": 0.6923076923076923,
        "topCards": [
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 48,
            "winRateWhenPlayed": 0.6875
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 30,
            "winRateWhenPlayed": 0.5333333333333333
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
        "offered": 1913,
        "played": 385,
        "ignored": 1528,
        "selectionRate": 0.20125457396759017,
        "wins": 240,
        "losses": 145,
        "draws": 0,
        "winRateWhenPlayed": 0.6233766233766234,
        "averageFlips": 0.3064935064935065,
        "averageDamageDealt": 0.7090909090909091,
        "averageNetDamage": 0.5662337662337662,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 89,
            "winRateWhenPlayed": 0.6853932584269663
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 75,
            "winRateWhenPlayed": 0.5733333333333334
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 67,
            "winRateWhenPlayed": 0.7164179104477612
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 48,
            "winRateWhenPlayed": 0.6875
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 30,
            "winRateWhenPlayed": 0.5333333333333333
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
        "count": 222,
        "wins": 154,
        "losses": 68,
        "draws": 0,
        "winRate": 0.6936936936936937,
        "averageFlips": 0.28378378378378377,
        "averageDamageDealt": 0.545045045045045,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 217,
        "wins": 183,
        "losses": 34,
        "draws": 0,
        "winRate": 0.8433179723502304,
        "averageFlips": 0.2119815668202765,
        "averageDamageDealt": 1.7096774193548387,
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
        "count": 78,
        "wins": 41,
        "losses": 37,
        "draws": 0,
        "winRate": 0.5256410256410257,
        "averageFlips": 0.5897435897435898,
        "averageDamageDealt": 1.8333333333333333,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 58,
        "wins": 36,
        "losses": 22,
        "draws": 0,
        "winRate": 0.6206896551724138,
        "averageFlips": 0.034482758620689655,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.9482758620689655,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 39,
        "wins": 27,
        "losses": 12,
        "draws": 0,
        "winRate": 0.6923076923076923,
        "averageFlips": 0.5128205128205128,
        "averageDamageDealt": 2.58974358974359,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:heron:gain-shield",
        "kind": "effect",
        "label": "Oiselle aubeplume -> gain-shield",
        "count": 26,
        "wins": 20,
        "losses": 6,
        "draws": 0,
        "winRate": 0.7692307692307693,
        "averageFlips": 0.3076923076923077,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.6538461538461537,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:foxfire:gain-shield",
        "kind": "effect",
        "label": "Requin runefer -> gain-shield",
        "count": 23,
        "wins": 17,
        "losses": 6,
        "draws": 0,
        "winRate": 0.7391304347826086,
        "averageFlips": 0.782608695652174,
        "averageDamageDealt": 0.17391304347826086,
        "averageEffectAmount": 1.9130434782608696,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 21,
        "wins": 11,
        "losses": 10,
        "draws": 0,
        "winRate": 0.5238095238095238,
        "averageFlips": 0.7619047619047619,
        "averageDamageDealt": 2.142857142857143,
        "averageEffectAmount": 2,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:heron:draw-next-turn",
        "kind": "effect",
        "label": "Oiselle aubeplume -> draw-next-turn",
        "count": 18,
        "wins": 16,
        "losses": 2,
        "draws": 0,
        "winRate": 0.8888888888888888,
        "averageFlips": 1,
        "averageDamageDealt": 0.05555555555555555,
        "averageEffectAmount": 1.3888888888888888,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 18,
        "wins": 10,
        "losses": 8,
        "draws": 0,
        "winRate": 0.5555555555555556,
        "averageFlips": 0.7777777777777778,
        "averageDamageDealt": 1.6111111111111112,
        "averageEffectAmount": 1.0555555555555556,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 17,
        "wins": 13,
        "losses": 4,
        "draws": 0,
        "winRate": 0.7647058823529411,
        "averageFlips": 0.47058823529411764,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Combo gagnant frequent."
        ]
      },
      {
        "id": "effect:pact-sprite:deal-damage",
        "kind": "effect",
        "label": "Lutin a pacte -> deal-damage",
        "count": 16,
        "wins": 11,
        "losses": 5,
        "draws": 0,
        "winRate": 0.6875,
        "averageFlips": 1,
        "averageDamageDealt": 1.625,
        "averageEffectAmount": 1.625,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 10,
        "wins": 8,
        "losses": 2,
        "draws": 0,
        "winRate": 0.8,
        "averageFlips": 0.8,
        "averageDamageDealt": 2,
        "averageEffectAmount": 2,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:sapling:draw-next-turn",
        "kind": "effect",
        "label": "Floramie toxique -> draw-next-turn",
        "count": 9,
        "wins": 8,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8888888888888888,
        "averageFlips": 1.1111111111111112,
        "averageDamageDealt": 0.5555555555555556,
        "averageEffectAmount": 1.6666666666666667,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 9,
        "wins": 5,
        "losses": 4,
        "draws": 0,
        "winRate": 0.5555555555555556,
        "averageFlips": 1.1111111111111112,
        "averageDamageDealt": 3.3333333333333335,
        "averageEffectAmount": 2.3333333333333335,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:foxfire:draw-next-turn",
        "kind": "effect",
        "label": "Requin runefer -> draw-next-turn",
        "count": 6,
        "wins": 5,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8333333333333334,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:cinder-grin:boost-self",
        "kind": "effect",
        "label": "Sourire de suie -> boost-self",
        "count": 6,
        "wins": 5,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8333333333333334,
        "averageFlips": 0.8333333333333334,
        "averageDamageDealt": 1.5,
        "averageEffectAmount": 1,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:draw-next-turn",
        "kind": "effect",
        "label": "Poney runique -> draw-next-turn",
        "count": 6,
        "wins": 4,
        "losses": 2,
        "draws": 0,
        "winRate": 0.6666666666666666,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:ember-imp:boost-self",
        "kind": "effect",
        "label": "Diablotin braise -> boost-self",
        "count": 6,
        "wins": 3,
        "losses": 3,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.8333333333333334,
        "averageDamageDealt": 3,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:boost-self",
        "kind": "effect",
        "label": "Cornu farceur -> boost-self",
        "count": 5,
        "wins": 4,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8,
        "averageFlips": 0.8,
        "averageDamageDealt": 1.4,
        "averageEffectAmount": 1,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
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
        "sampleSize": 18,
        "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
        "detail": "18 occurrences, 89% win, 1.00 flips, 0.06 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 10,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "10 occurrences, 80% win, 0.80 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:sapling:draw-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 9,
        "title": "Floramie toxique -> draw-next-turn ressort comme combo",
        "detail": "9 occurrences, 89% win, 1.11 flips, 0.56 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 499,
        "id": "card-foxfire-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "499 offres, 15% selection, 57% win quand jouee, role payoff.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 272,
        "id": "card-sapling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Floramie toxique est ignoree par les bots",
        "detail": "272 offres, 18% selection, 69% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 169,
        "id": "card-cinder-grin-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Sourire de suie est ignoree par les bots",
        "detail": "169 offres, 14% selection, 48% win quand jouee, role payoff.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 166,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "166 offres, 17% selection, 50% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 668,
        "id": "role-payoff-buff",
        "severity": "watch",
        "action": "verify",
        "title": "payoff manque d'attraction",
        "detail": "668 offres, 15% selection, 55% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 217,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "217 occurrences, 84% win, 0.21 flips, 1.71 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 78,
        "title": "demon -> demon ressort comme combo",
        "detail": "78 occurrences, 53% win, 0.59 flips, 1.83 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 39,
        "title": "demon allie + demon ressort comme combo",
        "detail": "39 occurrences, 69% win, 0.51 flips, 2.59 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:heron:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 26,
        "title": "Oiselle aubeplume -> gain-shield ressort comme combo",
        "detail": "26 occurrences, 77% win, 0.31 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:foxfire:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 23,
        "title": "Requin runefer -> gain-shield ressort comme combo",
        "detail": "23 occurrences, 74% win, 0.78 flips, 0.17 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 21,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "21 occurrences, 52% win, 0.76 flips, 2.14 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 18,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "18 occurrences, 56% win, 0.78 flips, 1.61 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:sapling:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 17,
        "title": "Floramie toxique -> gain-shield ressort comme combo",
        "detail": "17 occurrences, 76% win, 0.47 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:pact-sprite:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 16,
        "title": "Lutin a pacte -> deal-damage ressort comme combo",
        "detail": "16 occurrences, 69% win, 1.00 flips, 1.63 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 9,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "9 occurrences, 56% win, 1.11 flips, 3.33 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-problem",
      "severity": "problem",
      "title": "Depart actuel - famille 12 cartes sort de la zone saine",
      "detail": "Ouverture stable sur ce depart. Tours morts frequents (13%). Peu de flips par tour (0.21).",
      "recommendation": "Tester ce depart avec plus de matchs, puis ajuster familles, pioche ou valeurs faibles."
    },
    {
      "id": "diagnostic-combo-effect:heron:draw-next-turn",
      "severity": "problem",
      "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
      "detail": "18 occurrences, 89% win, 1.00 flips, 0.06 degats. Confiance medium, echantillon 18.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:cinder-grin:deal-damage",
      "severity": "problem",
      "title": "Sourire de suie -> deal-damage ressort comme combo",
      "detail": "10 occurrences, 80% win, 0.80 flips, 2.00 degats. Confiance medium, echantillon 10.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:sapling:draw-next-turn",
      "severity": "problem",
      "title": "Floramie toxique -> draw-next-turn ressort comme combo",
      "detail": "9 occurrences, 89% win, 1.11 flips, 0.56 degats. Confiance low, echantillon 9.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "watch",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "499 offres, 15% selection, 57% win quand jouee, role payoff. Confiance high, echantillon 499.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 0.0% des runs complets, avec 50.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 0.0% des runs complets, avec 50.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ]
};
