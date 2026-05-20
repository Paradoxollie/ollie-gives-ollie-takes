import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260520-203200",
  "generatedAt": "2026-05-20T20:32:00.253Z",
  "config": {
    "matchesPerPairing": 2,
    "adventureRunsPerModel": 1,
    "seed": 20260520,
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
      "averageHpEdge": -7.5
    },
    {
      "modelId": "opportunist",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -1
    },
    {
      "modelId": "regular",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 3.25
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
      "averageHpEdge": 3
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "mirrorModelId": "regular",
      "totalGames": 2,
      "drawRate": 0,
      "startingPlayerWinRate": 0,
      "averages": {
        "turns": 15.5,
        "rounds": 1.5,
        "flipsPerMatch": 3.5,
        "flipsPerTurn": 0.22580645161290322,
        "reshuffles": 1,
        "deadTurns": 2.5,
        "finalHpDifference": 12.5
      },
      "deadTurnFrequency": 0.16129032258064516,
      "status": "problem",
      "notes": [
        "Avantage premier joueur a confirmer (0%).",
        "Tours morts frequents (16%)."
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
          "averageHpEdge": -7.5
        },
        {
          "modelId": "opportunist",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 7.5
        }
      ],
      "averages": {
        "turns": 23.5,
        "rounds": 2.5,
        "flipsPerMatch": 9,
        "flipsPerTurn": 0.3829787234042553,
        "reshuffles": 3,
        "deadTurns": 1.5,
        "finalHpDifference": 7.5
      },
      "deadTurnFrequency": 0.06382978723404255
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "averageHpEdge": -9.5
        },
        {
          "modelId": "regular",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 9.5
        }
      ],
      "averages": {
        "turns": 14,
        "rounds": 1.5,
        "flipsPerMatch": 6.5,
        "flipsPerTurn": 0.4642857142857143,
        "reshuffles": 1,
        "deadTurns": 1,
        "finalHpDifference": 9.5
      },
      "deadTurnFrequency": 0.07142857142857142
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "averageHpEdge": -3
        },
        {
          "modelId": "expert",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 3
        }
      ],
      "averages": {
        "turns": 14,
        "rounds": 1.5,
        "flipsPerMatch": 6,
        "flipsPerTurn": 0.42857142857142855,
        "reshuffles": 1,
        "deadTurns": 1,
        "finalHpDifference": 3
      },
      "deadTurnFrequency": 0.07142857142857142
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "averageHpEdge": -3
        },
        {
          "modelId": "champion",
          "games": 2,
          "wins": 2,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 3
        }
      ],
      "averages": {
        "turns": 21,
        "rounds": 2.5,
        "flipsPerMatch": 6,
        "flipsPerTurn": 0.2857142857142857,
        "reshuffles": 3,
        "deadTurns": 1,
        "finalHpDifference": 3
      },
      "deadTurnFrequency": 0.047619047619047616
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
      "averageFinalDeckSize": 10,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 50,
      "averageCombatFlips": 10,
      "averageDeadTurns": 14,
      "averageReshuffles": 14,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "automaton": 1
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
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 11,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 25.5,
      "averageCombatFlips": 11,
      "averageDeadTurns": 3.5,
      "averageReshuffles": 3,
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
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
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
      "averageFinalDeckSize": 12,
      "averageDeckDelta": 2,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 43.666666666666664,
      "averageCombatFlips": 8.333333333333334,
      "averageDeadTurns": 11,
      "averageReshuffles": 6.333333333333333,
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
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 1,
      "averageFinalDeckSize": 10,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 83,
      "averageCombatFlips": 8,
      "averageDeadTurns": 29,
      "averageReshuffles": 7,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "automaton": 1
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
      "modelId": "champion",
      "runs": 1,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 11,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 47.5,
      "averageCombatFlips": 9.5,
      "averageDeadTurns": 7,
      "averageReshuffles": 7,
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
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
        "Le champion atteint trop rarement le boss sur cet echantillon; augmenter les runs et analyser les noeuds de defaite."
      ]
    }
  ],
  "adventureRuns": [
    {
      "runIndex": 0,
      "modelId": "beginner",
      "seed": 693221770,
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
      "totalCombatTurns": 50,
      "totalCombatFlips": 10,
      "totalDeadTurns": 14,
      "totalReshuffles": 14,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 50,
          "combatFlips": 10,
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
      "seed": 1596824857,
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
      "totalCombatTurns": 51,
      "totalCombatFlips": 22,
      "totalDeadTurns": 7,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 10,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 31,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 3544591524,
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
      "totalCombatTurns": 131,
      "totalCombatFlips": 25,
      "totalDeadTurns": 33,
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
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 0,
        "revenant": 2,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 20,
          "combatFlips": 7,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 38,
          "combatFlips": 6,
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
          "nodeId": "depth-2-lane-4",
          "depth": 2,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 73,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 778319476,
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
      "totalCombatTurns": 83,
      "totalCombatFlips": 8,
      "totalDeadTurns": 29,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 83,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 2469188087,
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
      "totalCombatTurns": 95,
      "totalCombatFlips": 19,
      "totalDeadTurns": 14,
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
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
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
          "combatTurns": 59,
          "combatFlips": 11,
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
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 36,
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
        "offered": 107,
        "played": 17,
        "ignored": 90,
        "selectionRate": 0.1588785046728972,
        "wins": 6,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.35294117647058826,
        "averageFlips": 0.35294117647058826,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 3.6666666666666665,
        "averageEffectAmount": 0.47058823529411764,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.2
          },
          {
            "modelId": "regular",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 3,
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 17,
            "winRate": 0.35294117647058826
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
        "offered": 176,
        "played": 41,
        "ignored": 135,
        "selectionRate": 0.23295454545454544,
        "wins": 22,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.5365853658536586,
        "averageFlips": 0.3170731707317073,
        "failedImpactRate": 0.6578947368421053,
        "averageFlipMargin": 2.8461538461538463,
        "averageEffectAmount": 1.024390243902439,
        "averageDamageDealt": 1.5365853658536586,
        "averageDamageTaken": 0.43902439024390244,
        "averageNetDamage": 1.0975609756097562,
        "lethalMoves": 2,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 15,
            "winRate": 0.5333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "champion",
            "played": 5,
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 41,
            "winRate": 0.5365853658536586
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
        "played": 20,
        "ignored": 41,
        "selectionRate": 0.32786885245901637,
        "wins": 9,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.45,
        "averageFlips": 0.15,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 2.6666666666666665,
        "averageEffectAmount": 2.6,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.4
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0.6666666666666666
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 20,
            "winRate": 0.45
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
        "offered": 77,
        "played": 19,
        "ignored": 58,
        "selectionRate": 0.24675324675324675,
        "wins": 11,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.5789473684210527,
        "averageFlips": 0.3157894736842105,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2.8333333333333335,
        "averageEffectAmount": 1.1578947368421053,
        "averageDamageDealt": 1.736842105263158,
        "averageDamageTaken": 0.3157894736842105,
        "averageNetDamage": 1.4210526315789473,
        "lethalMoves": 2,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 19,
            "winRate": 0.5789473684210527
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
        "offered": 63,
        "played": 18,
        "ignored": 45,
        "selectionRate": 0.2857142857142857,
        "wins": 11,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.6111111111111112,
        "averageFlips": 0.5,
        "failedImpactRate": 0.25,
        "averageFlipMargin": 3.4444444444444446,
        "averageEffectAmount": 1.8333333333333333,
        "averageDamageDealt": 2.0555555555555554,
        "averageDamageTaken": 0.2222222222222222,
        "averageNetDamage": 1.833333333333333,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.4
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 18,
            "winRate": 0.6111111111111112
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
        "offered": 92,
        "played": 17,
        "ignored": 75,
        "selectionRate": 0.18478260869565216,
        "wins": 9,
        "losses": 8,
        "draws": 0,
        "winRateWhenPlayed": 0.5294117647058824,
        "averageFlips": 0.5882352941176471,
        "failedImpactRate": 0.23076923076923078,
        "averageFlipMargin": 3.7,
        "averageEffectAmount": 1.7647058823529411,
        "averageDamageDealt": 1.8823529411764706,
        "averageDamageTaken": 0.23529411764705882,
        "averageNetDamage": 1.6470588235294117,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 6,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0.75
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 17,
            "winRate": 0.5294117647058824
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
          "combo-1",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 56,
        "played": 15,
        "ignored": 41,
        "selectionRate": 0.26785714285714285,
        "wins": 9,
        "losses": 6,
        "draws": 0,
        "winRateWhenPlayed": 0.6,
        "averageFlips": 0.6,
        "failedImpactRate": 0.3076923076923077,
        "averageFlipMargin": 3.3333333333333335,
        "averageEffectAmount": 1.8666666666666667,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 15,
            "winRate": 0.6
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
        "offered": 52,
        "played": 15,
        "ignored": 37,
        "selectionRate": 0.28846153846153844,
        "wins": 8,
        "losses": 7,
        "draws": 0,
        "winRateWhenPlayed": 0.5333333333333333,
        "averageFlips": 0.4,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 3.3333333333333335,
        "averageEffectAmount": 1.4666666666666666,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 5,
            "winRate": 0.4
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 2,
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 15,
            "winRate": 0.5333333333333333
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
        "id": "demon",
        "label": "demon",
        "offered": 408,
        "played": 95,
        "ignored": 313,
        "selectionRate": 0.23284313725490197,
        "wins": 53,
        "losses": 42,
        "draws": 0,
        "winRateWhenPlayed": 0.5578947368421052,
        "averageFlips": 0.4,
        "averageDamageDealt": 1.736842105263158,
        "averageNetDamage": 1.4000000000000001,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 41,
            "winRateWhenPlayed": 0.5365853658536586
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 19,
            "winRateWhenPlayed": 0.5789473684210527
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 18,
            "winRateWhenPlayed": 0.6111111111111112
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 17,
            "winRateWhenPlayed": 0.5294117647058824
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
        "offered": 276,
        "played": 67,
        "ignored": 209,
        "selectionRate": 0.2427536231884058,
        "wins": 32,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.47761194029850745,
        "averageFlips": 0.3582089552238806,
        "averageDamageDealt": 0,
        "averageNetDamage": 0,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 20,
            "winRateWhenPlayed": 0.45
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 17,
            "winRateWhenPlayed": 0.35294117647058826
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 15,
            "winRateWhenPlayed": 0.6
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 15,
            "winRateWhenPlayed": 0.5333333333333333
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
        "offered": 237,
        "played": 61,
        "ignored": 176,
        "selectionRate": 0.25738396624472576,
        "wins": 31,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.5081967213114754,
        "averageFlips": 0.26229508196721313,
        "averageDamageDealt": 1.0327868852459017,
        "averageNetDamage": 0.7377049180327869,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 41,
            "winRateWhenPlayed": 0.5365853658536586
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 20,
            "winRateWhenPlayed": 0.45
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
        "offered": 133,
        "played": 34,
        "ignored": 99,
        "selectionRate": 0.2556390977443609,
        "wins": 20,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5882352941176471,
        "averageFlips": 0.4411764705882353,
        "averageDamageDealt": 0.9705882352941176,
        "averageNetDamage": 0.7941176470588235,
        "topCards": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 19,
            "winRateWhenPlayed": 0.5789473684210527
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 15,
            "winRateWhenPlayed": 0.6
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
        "offered": 199,
        "played": 34,
        "ignored": 165,
        "selectionRate": 0.1708542713567839,
        "wins": 15,
        "losses": 19,
        "draws": 0,
        "winRateWhenPlayed": 0.4411764705882353,
        "averageFlips": 0.47058823529411764,
        "averageDamageDealt": 0.9411764705882353,
        "averageNetDamage": 0.8235294117647058,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 17,
            "winRateWhenPlayed": 0.5294117647058824
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 17,
            "winRateWhenPlayed": 0.35294117647058826
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "payoff",
        "label": "payoff",
        "offered": 115,
        "played": 33,
        "ignored": 82,
        "selectionRate": 0.28695652173913044,
        "wins": 19,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5757575757575758,
        "averageFlips": 0.45454545454545453,
        "averageDamageDealt": 1.121212121212121,
        "averageNetDamage": 0.9999999999999999,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 18,
            "winRateWhenPlayed": 0.6111111111111112
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 15,
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
        "offered": 684,
        "played": 162,
        "ignored": 522,
        "selectionRate": 0.23684210526315788,
        "wins": 85,
        "losses": 77,
        "draws": 0,
        "winRateWhenPlayed": 0.5246913580246914,
        "averageFlips": 0.38271604938271603,
        "averageDamageDealt": 1.0185185185185186,
        "averageNetDamage": 0.8209876543209877,
        "topCards": [
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 41,
            "winRateWhenPlayed": 0.5365853658536586
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 20,
            "winRateWhenPlayed": 0.45
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 19,
            "winRateWhenPlayed": 0.5789473684210527
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 18,
            "winRateWhenPlayed": 0.6111111111111112
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 17,
            "winRateWhenPlayed": 0.5294117647058824
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
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 73,
        "wins": 42,
        "losses": 31,
        "draws": 0,
        "winRate": 0.5753424657534246,
        "averageFlips": 0.4794520547945205,
        "averageDamageDealt": 2.1232876712328768,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 51,
        "wins": 24,
        "losses": 27,
        "draws": 0,
        "winRate": 0.47058823529411764,
        "averageFlips": 0.47058823529411764,
        "averageDamageDealt": 0,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 49,
        "wins": 40,
        "losses": 9,
        "draws": 0,
        "winRate": 0.8163265306122449,
        "averageFlips": 0.3469387755102041,
        "averageDamageDealt": 3.0816326530612246,
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
        "wins": 11,
        "losses": 18,
        "draws": 0,
        "winRate": 0.3793103448275862,
        "averageFlips": 0.4827586206896552,
        "averageDamageDealt": 0,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 16,
        "wins": 8,
        "losses": 8,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.125,
        "averageDamageDealt": 0,
        "averageEffectAmount": 3,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 13,
        "wins": 10,
        "losses": 3,
        "draws": 0,
        "winRate": 0.7692307692307693,
        "averageFlips": 1,
        "averageDamageDealt": 2.769230769230769,
        "averageEffectAmount": 2.769230769230769,
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
        "count": 11,
        "wins": 4,
        "losses": 7,
        "draws": 0,
        "winRate": 0.36363636363636365,
        "averageFlips": 0.9090909090909091,
        "averageDamageDealt": 2.4545454545454546,
        "averageEffectAmount": 2.4545454545454546,
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
        "averageFlips": 0.9,
        "averageDamageDealt": 3.2,
        "averageEffectAmount": 3.2,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 10,
        "wins": 7,
        "losses": 3,
        "draws": 0,
        "winRate": 0.7,
        "averageFlips": 0.4,
        "averageDamageDealt": 2.5,
        "averageEffectAmount": 1,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:heron:draw-next-turn",
        "kind": "effect",
        "label": "Oiselle aubeplume -> draw-next-turn",
        "count": 8,
        "wins": 7,
        "losses": 1,
        "draws": 0,
        "winRate": 0.875,
        "averageFlips": 1.125,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:foxfire:gain-shield",
        "kind": "effect",
        "label": "Requin runefer -> gain-shield",
        "count": 8,
        "wins": 2,
        "losses": 6,
        "draws": 0,
        "winRate": 0.25,
        "averageFlips": 0.375,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2.25,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:heron:gain-shield",
        "kind": "effect",
        "label": "Oiselle aubeplume -> gain-shield",
        "count": 7,
        "wins": 6,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8571428571428571,
        "averageFlips": 0.7142857142857143,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.7142857142857142,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:pact-sprite:deal-damage",
        "kind": "effect",
        "label": "Lutin a pacte -> deal-damage",
        "count": 7,
        "wins": 5,
        "losses": 2,
        "draws": 0,
        "winRate": 0.7142857142857143,
        "averageFlips": 0.7142857142857143,
        "averageDamageDealt": 1.7142857142857142,
        "averageEffectAmount": 1.7142857142857142,
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
        "count": 6,
        "wins": 5,
        "losses": 1,
        "draws": 0,
        "winRate": 0.8333333333333334,
        "averageFlips": 1,
        "averageDamageDealt": 2,
        "averageEffectAmount": 1,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:hornling:boost-self",
        "kind": "effect",
        "label": "Cornu farceur -> boost-self",
        "count": 3,
        "wins": 1,
        "losses": 2,
        "draws": 0,
        "winRate": 0.3333333333333333,
        "averageFlips": 1.3333333333333333,
        "averageDamageDealt": 2.3333333333333335,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 3,
        "wins": 0,
        "losses": 3,
        "draws": 0,
        "winRate": 0,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:draw-next-turn",
        "kind": "effect",
        "label": "Poney runique -> draw-next-turn",
        "count": 2,
        "wins": 1,
        "losses": 1,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:foxfire:draw-next-turn",
        "kind": "effect",
        "label": "Requin runefer -> draw-next-turn",
        "count": 2,
        "wins": 1,
        "losses": 1,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:cinder-grin:boost-self",
        "kind": "effect",
        "label": "Sourire de suie -> boost-self",
        "count": 1,
        "wins": 1,
        "losses": 0,
        "draws": 0,
        "winRate": 1,
        "averageFlips": 1,
        "averageDamageDealt": 3,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:draw-next-turn",
        "kind": "effect",
        "label": "Floramie toxique -> draw-next-turn",
        "count": 1,
        "wins": 0,
        "losses": 1,
        "draws": 0,
        "winRate": 0,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 107,
        "id": "card-sapling-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Floramie toxique est ignoree par les bots",
        "detail": "107 offres, 16% selection, 35% win quand jouee, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 10,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "10 occurrences, 80% win, 0.90 flips, 3.20 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:heron:draw-next-turn",
        "severity": "problem",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 8,
        "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
        "detail": "8 occurrences, 88% win, 1.13 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 199,
        "id": "role-anchor-buff",
        "severity": "watch",
        "action": "verify",
        "title": "anchor manque d'attraction",
        "detail": "199 offres, 17% selection, 44% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 73,
        "title": "demon -> demon ressort comme combo",
        "detail": "73 occurrences, 58% win, 0.48 flips, 2.12 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 49,
        "title": "demon allie + demon ressort comme combo",
        "detail": "49 occurrences, 82% win, 0.35 flips, 3.08 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 13,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "13 occurrences, 77% win, 1.00 flips, 2.77 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 11,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "11 occurrences, 36% win, 0.91 flips, 2.45 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 10,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "10 occurrences, 70% win, 0.40 flips, 2.50 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:heron:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 7,
        "title": "Oiselle aubeplume -> gain-shield ressort comme combo",
        "detail": "7 occurrences, 86% win, 0.71 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "low",
        "sampleSize": 6,
        "title": "Diablotin braise -> boost-self ressort comme combo",
        "detail": "6 occurrences, 83% win, 1.00 flips, 2.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-problem",
      "severity": "problem",
      "title": "Depart actuel - famille 10 cartes sort de la zone saine",
      "detail": "Avantage premier joueur a confirmer (0%). Tours morts frequents (16%).",
      "recommendation": "Tester ce depart avec plus de matchs, puis ajuster familles, pioche ou valeurs faibles."
    },
    {
      "id": "diagnostic-card-sapling-ignored",
      "severity": "problem",
      "title": "Floramie toxique est ignoree par les bots",
      "detail": "107 offres, 16% selection, 35% win quand jouee, role anchor. Confiance high, echantillon 107.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-combo-effect:cinder-grin:deal-damage",
      "severity": "problem",
      "title": "Sourire de suie -> deal-damage ressort comme combo",
      "detail": "10 occurrences, 80% win, 0.90 flips, 3.20 degats. Confiance medium, echantillon 10.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:heron:draw-next-turn",
      "severity": "problem",
      "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
      "detail": "8 occurrences, 88% win, 1.13 flips, 0.00 degats. Confiance low, echantillon 8.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-role-anchor-buff",
      "severity": "watch",
      "title": "anchor manque d'attraction",
      "detail": "199 offres, 17% selection, 44% win. Confiance high, echantillon 199.",
      "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 0.0% des runs complets, avec 0.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    },
    {
      "id": "adventure-combat-wall-expert",
      "severity": "watch",
      "title": "Expert se heurte aux combats de run",
      "detail": "Win rate combat 0.0% sur les runs complets.",
      "recommendation": "Verifier la difficulte des ennemis du chemin et les recompenses avant boss."
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
