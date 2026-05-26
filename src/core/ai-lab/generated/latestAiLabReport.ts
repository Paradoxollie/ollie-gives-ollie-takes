import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260526-184735",
  "generatedAt": "2026-05-26T18:47:35.829Z",
  "config": {
    "matchesPerPairing": 4,
    "adventureRunsPerModel": 2,
    "seed": 260532,
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
      "skillLabel": "Profil entraine live",
      "rank": 5,
      "botId": "champion",
      "searchDepth": 3,
      "beamWidth": 14,
      "description": "Modele live qui garde une recherche profonde stable et n'accepte le profil promu qu'en net progres."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 4,
      "wins": 0,
      "losses": 4,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -24.25
    },
    {
      "modelId": "opportunist",
      "games": 8,
      "wins": 6,
      "losses": 2,
      "draws": 0,
      "winRate": 0.75,
      "averageHpEdge": 10.875
    },
    {
      "modelId": "regular",
      "games": 8,
      "wins": 2,
      "losses": 6,
      "draws": 0,
      "winRate": 0.25,
      "averageHpEdge": -5.375
    },
    {
      "modelId": "expert",
      "games": 8,
      "wins": 6,
      "losses": 2,
      "draws": 0,
      "winRate": 0.75,
      "averageHpEdge": 6
    },
    {
      "modelId": "champion",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 1.25
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "mirrorModelId": "regular",
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayerWinRate": 0.25,
      "averages": {
        "turns": 32.25,
        "rounds": 3.25,
        "flipsPerMatch": 5.75,
        "flipsPerTurn": 0.17829457364341086,
        "reshuffles": 4.5,
        "deadTurns": 3,
        "finalHpDifference": 15
      },
      "deadTurnFrequency": 0.09302325581395349,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a confirmer (25%).",
        "Tours morts a surveiller (9%).",
        "Peu de flips par tour (0.18)."
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
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 4,
          "wins": 0,
          "losses": 4,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -24.25
        },
        {
          "modelId": "opportunist",
          "games": 4,
          "wins": 4,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 24.25
        }
      ],
      "averages": {
        "turns": 19,
        "rounds": 2,
        "flipsPerMatch": 8,
        "flipsPerTurn": 0.42105263157894735,
        "reshuffles": 1.75,
        "deadTurns": 1,
        "finalHpDifference": 24.25
      },
      "deadTurnFrequency": 0.05263157894736842
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "enemy": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -2.5
        },
        {
          "modelId": "regular",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 2.5
        }
      ],
      "averages": {
        "turns": 25.5,
        "rounds": 2.5,
        "flipsPerMatch": 6,
        "flipsPerTurn": 0.23529411764705882,
        "reshuffles": 3,
        "deadTurns": 3,
        "finalHpDifference": 13.5
      },
      "deadTurnFrequency": 0.11764705882352941
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 4,
          "wins": 0,
          "losses": 4,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -13.25
        },
        {
          "modelId": "expert",
          "games": 4,
          "wins": 4,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 13.25
        }
      ],
      "averages": {
        "turns": 31.5,
        "rounds": 3.25,
        "flipsPerMatch": 7.5,
        "flipsPerTurn": 0.23809523809523808,
        "reshuffles": 4.5,
        "deadTurns": 2.25,
        "finalHpDifference": 13.25
      },
      "deadTurnFrequency": 0.07142857142857142
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 12 cartes",
      "startingDeckCardCount": 12,
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "enemy": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.25
        },
        {
          "modelId": "champion",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.25
        }
      ],
      "averages": {
        "turns": 36.25,
        "rounds": 4,
        "flipsPerMatch": 9,
        "flipsPerTurn": 0.2482758620689655,
        "reshuffles": 6,
        "deadTurns": 0.25,
        "finalHpDifference": 10.75
      },
      "deadTurnFrequency": 0.006896551724137931
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
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 22,
      "averageCombatFlips": 4.75,
      "averageDeadTurns": 4,
      "averageReshuffles": 2,
      "averageRewardsClaimed": 1,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "human": 0.5,
        "automaton": 0.5
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
      "modelId": "opportunist",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 3,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 26.25,
      "averageCombatFlips": 2.75,
      "averageDeadTurns": 6,
      "averageReshuffles": 3.5,
      "averageRewardsClaimed": 1.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0.5,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.6666666666666666,
        "elite": 0,
        "shop": 0.16666666666666666,
        "chest": 0.16666666666666666,
        "rest": 0,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "regular",
      "runs": 2,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 6.5,
      "averageFinalDeckSize": 15,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 26.833333333333332,
      "averageCombatFlips": 10,
      "averageDeadTurns": 5.833333333333333,
      "averageReshuffles": 2.3333333333333335,
      "averageRewardsClaimed": 4.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.5,
      "averageFusions": 1,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.2857142857142857,
        "elite": 0.07142857142857142,
        "shop": 0.14285714285714285,
        "chest": 0.35714285714285715,
        "rest": 0.07142857142857142,
        "boss": 0.07142857142857142
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 2,
      "victories": 0,
      "bossReached": 1,
      "victoryRate": 0,
      "bossReachRate": 0.5,
      "averageLocationsCleared": 7,
      "averageFinalDeckSize": 12,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 24.333333333333332,
      "averageCombatFlips": 9.5,
      "averageDeadTurns": 3.5,
      "averageReshuffles": 2.6666666666666665,
      "averageRewardsClaimed": 3,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0.5,
      "averageRemovals": 0.5,
      "averageFusions": 2.5,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.3333333333333333,
        "elite": 0,
        "shop": 0.3333333333333333,
        "chest": 0.13333333333333333,
        "rest": 0.13333333333333333,
        "boss": 0.06666666666666667
      },
      "notes": [
        "Flux complet: famille, deck 12 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 6,
      "averageFinalDeckSize": 15,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.8,
      "averageCombatTurns": 17,
      "averageCombatFlips": 4.3,
      "averageDeadTurns": 1.2,
      "averageReshuffles": 2.8,
      "averageRewardsClaimed": 4,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 1,
      "familyPickRates": {
        "revenant": 1
      },
      "nodeMix": {
        "combat": 0.6666666666666666,
        "elite": 0.16666666666666666,
        "shop": 0.16666666666666666,
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
      "seed": 2370473366,
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
      "totalCombatFlips": 5,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 24,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 2387250985,
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
      "totalCombatTurns": 64,
      "totalCombatFlips": 14,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 8,
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
      "modelId": "opportunist",
      "seed": 550217909,
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
      "totalCombatTurns": 56,
      "totalCombatFlips": 6,
      "totalDeadTurns": 13,
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
        "automaton": 12,
        "revenant": 0,
        "arcane": 1,
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
          "nodeId": "depth-2-lane-3",
          "depth": 2,
          "lane": 3,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 14,
          "combatWinner": "enemy",
          "combatTurns": 19,
          "combatFlips": 4,
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
      "seed": 533440290,
      "selectedFamily": "automaton",
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
      "totalCombatTurns": 49,
      "totalCombatFlips": 5,
      "totalDeadTurns": 11,
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 36,
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
          "combatTurns": 13,
          "combatFlips": 3,
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
      "modelId": "regular",
      "seed": 780153104,
      "selectedFamily": "arcane",
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
      "totalCombatTurns": 85,
      "totalCombatFlips": 23,
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
        "moss-dust"
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
          "nodeId": "depth-0-lane-0",
          "depth": 0,
          "lane": 0,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 30,
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
          "nodeId": "depth-2-lane-0",
          "depth": 2,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
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
          "nodeId": "depth-4-lane-0",
          "depth": 4,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 29,
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
      "seed": 796930723,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 18,
      "deckDelta": 6,
      "outcome": "defeat",
      "victory": false,
      "bossReached": true,
      "locationsCleared": 8,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 76,
      "totalCombatFlips": 37,
      "totalDeadTurns": 13,
      "totalReshuffles": 7,
      "rewardOffersSeen": 7,
      "rewardsClaimed": 7,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 4,
        "uncommon": 1,
        "rare": 2
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
        "elite": 0,
        "shop": 0,
        "chest": 5,
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
        "uncommon": 1,
        "rare": 2
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
          "combatTurns": 27,
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
          "nodeId": "depth-3-lane-2",
          "depth": 3,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
          "combatWinner": "player",
          "combatTurns": 22,
          "combatFlips": 11,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
          "lane": 4,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "rest",
          "title": "Feu de canopee",
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
          "kind": "chest",
          "title": "Coffre noueux",
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
          "combatWinner": "enemy",
          "combatTurns": 27,
          "combatFlips": 21,
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
      "modelId": "expert",
      "seed": 256610864,
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
      "totalCombatTurns": 64,
      "totalCombatFlips": 31,
      "totalDeadTurns": 10,
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
        "moss-dust"
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
          "nodeId": "depth-0-lane-2",
          "depth": 0,
          "lane": 2,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-5-lane-4",
          "depth": 5,
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
          "nodeId": "depth-6-lane-3",
          "depth": 6,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 21,
          "combatFlips": 11,
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
          "nodeId": "depth-7-lane-1",
          "depth": 7,
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
          "nodeId": "boss-final",
          "depth": 8,
          "lane": 2,
          "kind": "boss",
          "title": "Le Collecteur final",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
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
      "runIndex": 1,
      "modelId": "expert",
      "seed": 273388483,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 12,
      "deckDelta": 0,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 3,
      "combatWins": 2,
      "combatLosses": 1,
      "totalCombatTurns": 82,
      "totalCombatFlips": 26,
      "totalDeadTurns": 11,
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
      "campVisits": 1,
      "upgrades": 1,
      "removals": 0,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 26,
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
          "nodeId": "depth-4-lane-4",
          "depth": 4,
          "lane": 4,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 27,
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
          "nodeId": "depth-5-lane-2",
          "depth": 5,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 12,
          "combatWinner": "enemy",
          "combatTurns": 29,
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
      "runIndex": 0,
      "modelId": "champion",
      "seed": 3638384179,
      "selectedFamily": "revenant",
      "startingDeckCardCount": 12,
      "finalDeckCardCount": 17,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 8,
      "combatCount": 7,
      "combatWins": 6,
      "combatLosses": 1,
      "totalCombatTurns": 116,
      "totalCombatFlips": 34,
      "totalDeadTurns": 3,
      "totalReshuffles": 24,
      "rewardOffersSeen": 6,
      "rewardsClaimed": 6,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 1
      },
      "stealRewardsOffered": 24,
      "stealRewardsClaimed": 6,
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
        "combat": 5,
        "elite": 2,
        "shop": 1,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 1,
        "human": 2,
        "automaton": 1,
        "revenant": 12,
        "arcane": 1,
        "dragon": 0,
        "renegade": 0
      },
      "finalDeckRarities": {
        "common": 16,
        "uncommon": 0,
        "rare": 1
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
          "nodeId": "depth-1-lane-1",
          "depth": 1,
          "lane": 1,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 11,
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
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
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
          "nodeId": "depth-4-lane-3",
          "depth": 4,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 18,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 16,
          "combatWinner": "player",
          "combatTurns": 18,
          "combatFlips": 2,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 16,
          "playerDeckSizeAfter": 17,
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
          "nodeId": "depth-7-lane-0",
          "depth": 7,
          "lane": 0,
          "kind": "elite",
          "title": "Traqueur ancien",
          "playerDeckSizeBefore": 17,
          "playerDeckSizeAfter": 17,
          "combatWinner": "enemy",
          "combatTurns": 18,
          "combatFlips": 4,
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
      "modelId": "champion",
      "seed": 3621606560,
      "selectedFamily": "revenant",
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
      "totalCombatTurns": 54,
      "totalCombatFlips": 9,
      "totalDeadTurns": 9,
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
        "demon": 1,
        "human": 0,
        "automaton": 0,
        "revenant": 11,
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
          "title": "Duel des fougeres",
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 14,
          "combatWinner": "player",
          "combatTurns": 25,
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
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 13,
          "playerDeckSizeAfter": 13,
          "combatWinner": "enemy",
          "combatTurns": 18,
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
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
          "combo-1",
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [],
        "offered": 163,
        "played": 123,
        "ignored": 125,
        "selectionRate": 0.754601226993865,
        "wins": 63,
        "losses": 60,
        "draws": 0,
        "winRateWhenPlayed": 0.5121951219512195,
        "averageFlips": 0.3252032520325203,
        "failedImpactRate": 0.47368421052631576,
        "averageFlipMargin": 1.3,
        "averageEffectAmount": 5.276422764227642,
        "averageDamageDealt": 0.07317073170731707,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.07317073170731707,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 51,
            "winRate": 0.23529411764705882
          },
          {
            "modelId": "expert",
            "played": 33,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 18,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0
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
            "played": 123,
            "winRate": 0.5121951219512195
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
        "offered": 163,
        "played": 119,
        "ignored": 124,
        "selectionRate": 0.7300613496932515,
        "wins": 75,
        "losses": 44,
        "draws": 0,
        "winRateWhenPlayed": 0.6302521008403361,
        "averageFlips": 0.4369747899159664,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 2.519230769230769,
        "averageEffectAmount": 1.6638655462184875,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 46,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 15,
            "winRate": 0.8
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 119,
            "winRate": 0.6302521008403361
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
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 205,
        "played": 119,
        "ignored": 161,
        "selectionRate": 0.5804878048780487,
        "wins": 61,
        "losses": 58,
        "draws": 0,
        "winRateWhenPlayed": 0.5126050420168067,
        "averageFlips": 0.31092436974789917,
        "failedImpactRate": 0.45588235294117646,
        "averageFlipMargin": 0.8108108108108109,
        "averageEffectAmount": 4.176470588235294,
        "averageDamageDealt": 0.2689075630252101,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.2689075630252101,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 51,
            "winRate": 0.27450980392156865
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 15,
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
            "played": 119,
            "winRate": 0.5126050420168067
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
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 173,
        "played": 113,
        "ignored": 154,
        "selectionRate": 0.653179190751445,
        "wins": 63,
        "losses": 50,
        "draws": 0,
        "winRateWhenPlayed": 0.5575221238938053,
        "averageFlips": 0.37168141592920356,
        "failedImpactRate": 0.3,
        "averageFlipMargin": 2.261904761904762,
        "averageEffectAmount": 2.0707964601769913,
        "averageDamageDealt": 0.17699115044247787,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.17699115044247787,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 43,
            "winRate": 0.46511627906976744
          },
          {
            "modelId": "expert",
            "played": 34,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 1
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
            "played": 113,
            "winRate": 0.5575221238938053
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
          "combo-1",
          "edge",
          "human"
        ],
        "preferredPositions": [
          "edge"
        ],
        "offered": 246,
        "played": 112,
        "ignored": 192,
        "selectionRate": 0.45528455284552843,
        "wins": 78,
        "losses": 34,
        "draws": 0,
        "winRateWhenPlayed": 0.6964285714285714,
        "averageFlips": 0.11607142857142858,
        "failedImpactRate": 0.8243243243243243,
        "averageFlipMargin": 1.9230769230769231,
        "averageEffectAmount": 7.669642857142857,
        "averageDamageDealt": 0.7321428571428571,
        "averageDamageTaken": 0.08928571428571429,
        "averageNetDamage": 0.6428571428571428,
        "lethalMoves": 4,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 37,
            "winRate": 0.4864864864864865
          },
          {
            "modelId": "expert",
            "played": 35,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 25,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0
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
            "played": 112,
            "winRate": 0.6964285714285714
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
        "offered": 201,
        "played": 112,
        "ignored": 128,
        "selectionRate": 0.5572139303482587,
        "wins": 62,
        "losses": 50,
        "draws": 0,
        "winRateWhenPlayed": 0.5535714285714286,
        "averageFlips": 0.24107142857142858,
        "failedImpactRate": 0.6029411764705882,
        "averageFlipMargin": 1.7037037037037037,
        "averageEffectAmount": 1.5803571428571428,
        "averageDamageDealt": 0.7857142857142857,
        "averageDamageTaken": 0.14285714285714285,
        "averageNetDamage": 0.6428571428571428,
        "lethalMoves": 5,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 47,
            "winRate": 0.5106382978723404
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.43333333333333335
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.6923076923076923
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 112,
            "winRate": 0.5535714285714286
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
          "combo-1",
          "gain-shield",
          "human",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 283,
        "played": 106,
        "ignored": 230,
        "selectionRate": 0.3745583038869258,
        "wins": 53,
        "losses": 53,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.24528301886792453,
        "failedImpactRate": 0.74,
        "averageFlipMargin": 1,
        "averageEffectAmount": 4.254716981132075,
        "averageDamageDealt": 0.8962264150943396,
        "averageDamageTaken": 0.32075471698113206,
        "averageNetDamage": 0.5754716981132075,
        "lethalMoves": 3,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 44,
            "winRate": 0.22727272727272727
          },
          {
            "modelId": "expert",
            "played": 29,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 14,
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
            "played": 106,
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
        "offered": 268,
        "played": 98,
        "ignored": 219,
        "selectionRate": 0.3656716417910448,
        "wins": 54,
        "losses": 44,
        "draws": 0,
        "winRateWhenPlayed": 0.5510204081632653,
        "averageFlips": 0.336734693877551,
        "failedImpactRate": 0.5822784810126582,
        "averageFlipMargin": 2.3333333333333335,
        "averageEffectAmount": 0.9285714285714286,
        "averageDamageDealt": 0.4489795918367347,
        "averageDamageTaken": 0.40816326530612246,
        "averageNetDamage": 0.040816326530612235,
        "lethalMoves": 2,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 39,
            "winRate": 0.5128205128205128
          },
          {
            "modelId": "expert",
            "played": 25,
            "winRate": 0.44
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 11,
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 98,
            "winRate": 0.5510204081632653
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
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [],
        "offered": 106,
        "played": 82,
        "ignored": 80,
        "selectionRate": 0.7735849056603774,
        "wins": 42,
        "losses": 40,
        "draws": 0,
        "winRateWhenPlayed": 0.5121951219512195,
        "averageFlips": 0.12195121951219512,
        "failedImpactRate": 0.6551724137931034,
        "averageFlipMargin": 2.6,
        "averageEffectAmount": 3.0609756097560976,
        "averageDamageDealt": 0.1951219512195122,
        "averageDamageTaken": 0.1951219512195122,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 36,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 18,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 1
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
            "played": 82,
            "winRate": 0.5121951219512195
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
          "combo-1"
        ],
        "preferredPositions": [],
        "offered": 194,
        "played": 78,
        "ignored": 152,
        "selectionRate": 0.4020618556701031,
        "wins": 51,
        "losses": 27,
        "draws": 0,
        "winRateWhenPlayed": 0.6538461538461539,
        "averageFlips": 0.20512820512820512,
        "failedImpactRate": 0.8241758241758241,
        "averageFlipMargin": 1.375,
        "averageEffectAmount": 3.3846153846153846,
        "averageDamageDealt": 1.1538461538461537,
        "averageDamageTaken": 0.8974358974358975,
        "averageNetDamage": 0.2564102564102563,
        "lethalMoves": 4,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 41,
            "winRate": 0.6585365853658537
          },
          {
            "modelId": "expert",
            "played": 13,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.5555555555555556
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
            "played": 78,
            "winRate": 0.6538461538461539
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
          "boost-self"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "boost-self"
        ],
        "preferredPositions": [],
        "offered": 157,
        "played": 78,
        "ignored": 122,
        "selectionRate": 0.4968152866242038,
        "wins": 38,
        "losses": 40,
        "draws": 0,
        "winRateWhenPlayed": 0.48717948717948717,
        "averageFlips": 0.1794871794871795,
        "failedImpactRate": 0.6111111111111112,
        "averageFlipMargin": 0.7857142857142857,
        "averageEffectAmount": 2.448717948717949,
        "averageDamageDealt": 0.5897435897435898,
        "averageDamageTaken": 0.23076923076923078,
        "averageNetDamage": 0.358974358974359,
        "lethalMoves": 3,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 35,
            "winRate": 0.4857142857142857
          },
          {
            "modelId": "expert",
            "played": 18,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 78,
            "winRate": 0.48717948717948717
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
          "boost-self"
        ],
        "buildTags": [
          "automaton",
          "boost-self",
          "combo-1",
          "corner",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 153,
        "played": 72,
        "ignored": 130,
        "selectionRate": 0.47058823529411764,
        "wins": 34,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.4722222222222222,
        "averageFlips": 0.06944444444444445,
        "failedImpactRate": 0.8333333333333334,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 3.0972222222222223,
        "averageDamageDealt": 0.9444444444444444,
        "averageDamageTaken": 0.6111111111111112,
        "averageNetDamage": 0.33333333333333326,
        "lethalMoves": 2,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 28,
            "winRate": 0.39285714285714285
          },
          {
            "modelId": "opportunist",
            "played": 16,
            "winRate": 0.4375
          },
          {
            "modelId": "expert",
            "played": 15,
            "winRate": 0.4666666666666667
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 1
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
            "played": 72,
            "winRate": 0.4722222222222222
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
        "offered": 39,
        "played": 29,
        "ignored": 31,
        "selectionRate": 0.7435897435897436,
        "wins": 15,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.5172413793103449,
        "averageFlips": 0.9655172413793104,
        "failedImpactRate": 0.06666666666666667,
        "averageFlipMargin": 1.4642857142857142,
        "averageEffectAmount": 2.586206896551724,
        "averageDamageDealt": 3.0344827586206895,
        "averageDamageTaken": 0.13793103448275862,
        "averageNetDamage": 2.896551724137931,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 0.25
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0
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
            "played": 29,
            "winRate": 0.5172413793103449
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
        "offered": 43,
        "played": 28,
        "ignored": 33,
        "selectionRate": 0.6511627906976745,
        "wins": 15,
        "losses": 13,
        "draws": 0,
        "winRateWhenPlayed": 0.5357142857142857,
        "averageFlips": 0.8214285714285714,
        "failedImpactRate": 0.041666666666666664,
        "averageFlipMargin": 1.2173913043478262,
        "averageEffectAmount": 1.7142857142857142,
        "averageDamageDealt": 2.142857142857143,
        "averageDamageTaken": 0.14285714285714285,
        "averageNetDamage": 2,
        "lethalMoves": 1,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 0.25
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 3,
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
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 28,
            "winRate": 0.5357142857142857
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
        "offered": 61,
        "played": 26,
        "ignored": 46,
        "selectionRate": 0.4262295081967213,
        "wins": 14,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.5384615384615384,
        "averageFlips": 0.6923076923076923,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.3888888888888888,
        "averageEffectAmount": 2.1538461538461537,
        "averageDamageDealt": 3.6153846153846154,
        "averageDamageTaken": 1.3076923076923077,
        "averageNetDamage": 2.3076923076923075,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 10,
            "winRate": 0.3
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0
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
            "played": 26,
            "winRate": 0.5384615384615384
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
        "offered": 52,
        "played": 26,
        "ignored": 40,
        "selectionRate": 0.5,
        "wins": 14,
        "losses": 12,
        "draws": 0,
        "winRateWhenPlayed": 0.5384615384615384,
        "averageFlips": 0.6538461538461539,
        "failedImpactRate": 0.32,
        "averageFlipMargin": 1.8235294117647058,
        "averageEffectAmount": 1.8846153846153846,
        "averageDamageDealt": 1.8846153846153846,
        "averageDamageTaken": 0,
        "averageNetDamage": 1.8846153846153846,
        "lethalMoves": 0,
        "roundClosers": 0,
        "byModel": [
          {
            "modelId": "regular",
            "played": 9,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "expert",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 12 cartes",
            "startingDeckCardCount": 12,
            "played": 26,
            "winRate": 0.5384615384615384
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
        "offered": 897,
        "played": 460,
        "ignored": 708,
        "selectionRate": 0.5128205128205128,
        "wins": 255,
        "losses": 205,
        "draws": 0,
        "winRateWhenPlayed": 0.5543478260869565,
        "averageFlips": 0.25217391304347825,
        "averageDamageDealt": 0.47391304347826085,
        "averageNetDamage": 0.3782608695652174,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 123,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 119,
            "winRateWhenPlayed": 0.5126050420168067
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 112,
            "winRateWhenPlayed": 0.6964285714285714
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 106,
            "winRateWhenPlayed": 0.5
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
        "offered": 805,
        "played": 442,
        "ignored": 625,
        "selectionRate": 0.5490683229813664,
        "wins": 254,
        "losses": 188,
        "draws": 0,
        "winRateWhenPlayed": 0.5746606334841629,
        "averageFlips": 0.34841628959276016,
        "averageDamageDealt": 0.3438914027149321,
        "averageNetDamage": 0.2171945701357466,
        "topCards": [
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 119,
            "winRateWhenPlayed": 0.6302521008403361
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 113,
            "winRateWhenPlayed": 0.5575221238938053
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 112,
            "winRateWhenPlayed": 0.5535714285714286
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 98,
            "winRateWhenPlayed": 0.5510204081632653
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
        "offered": 610,
        "played": 310,
        "ignored": 484,
        "selectionRate": 0.5081967213114754,
        "wins": 165,
        "losses": 145,
        "draws": 0,
        "winRateWhenPlayed": 0.532258064516129,
        "averageFlips": 0.14516129032258066,
        "averageDamageDealt": 0.7096774193548387,
        "averageNetDamage": 0.23225806451612907,
        "topCards": [
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 82,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 78,
            "winRateWhenPlayed": 0.6538461538461539
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 78,
            "winRateWhenPlayed": 0.48717948717948717
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 72,
            "winRateWhenPlayed": 0.4722222222222222
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
        "offered": 195,
        "played": 109,
        "ignored": 150,
        "selectionRate": 0.558974358974359,
        "wins": 58,
        "losses": 51,
        "draws": 0,
        "winRateWhenPlayed": 0.5321100917431193,
        "averageFlips": 0.7889908256880734,
        "averageDamageDealt": 2.669724770642202,
        "averageNetDamage": 2.284403669724771,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 29,
            "winRateWhenPlayed": 0.5172413793103449
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 28,
            "winRateWhenPlayed": 0.5357142857142857
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 26,
            "winRateWhenPlayed": 0.5384615384615384
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 26,
            "winRateWhenPlayed": 0.5384615384615384
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
        "offered": 475,
        "played": 352,
        "ignored": 362,
        "selectionRate": 0.7410526315789474,
        "wins": 195,
        "losses": 157,
        "draws": 0,
        "winRateWhenPlayed": 0.5539772727272727,
        "averageFlips": 0.35511363636363635,
        "averageDamageDealt": 0.24147727272727273,
        "averageNetDamage": 0.1846590909090909,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 123,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 119,
            "winRateWhenPlayed": 0.6302521008403361
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 82,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 28,
            "winRateWhenPlayed": 0.5357142857142857
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
        "offered": 574,
        "played": 339,
        "ignored": 468,
        "selectionRate": 0.5905923344947736,
        "wins": 177,
        "losses": 162,
        "draws": 0,
        "winRateWhenPlayed": 0.5221238938053098,
        "averageFlips": 0.35693215339233036,
        "averageDamageDealt": 0.5486725663716814,
        "averageNetDamage": 0.48377581120943947,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 119,
            "winRateWhenPlayed": 0.5126050420168067
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 113,
            "winRateWhenPlayed": 0.5575221238938053
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 78,
            "winRateWhenPlayed": 0.48717948717948717
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 29,
            "winRateWhenPlayed": 0.5172413793103449
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
        "offered": 702,
        "played": 328,
        "ignored": 518,
        "selectionRate": 0.4672364672364672,
        "wins": 205,
        "losses": 123,
        "draws": 0,
        "winRateWhenPlayed": 0.625,
        "averageFlips": 0.22560975609756098,
        "averageDamageDealt": 1.079268292682927,
        "averageNetDamage": 0.6829268292682927,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 112,
            "winRateWhenPlayed": 0.6964285714285714
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 112,
            "winRateWhenPlayed": 0.5535714285714286
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 78,
            "winRateWhenPlayed": 0.6538461538461539
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 26,
            "winRateWhenPlayed": 0.5384615384615384
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
        "offered": 756,
        "played": 302,
        "ignored": 619,
        "selectionRate": 0.3994708994708995,
        "wins": 155,
        "losses": 147,
        "draws": 0,
        "winRateWhenPlayed": 0.5132450331125827,
        "averageFlips": 0.2682119205298013,
        "averageDamageDealt": 0.847682119205298,
        "averageNetDamage": 0.45695364238410596,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 106,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 98,
            "winRateWhenPlayed": 0.5510204081632653
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 72,
            "winRateWhenPlayed": 0.4722222222222222
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 26,
            "winRateWhenPlayed": 0.5384615384615384
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
        "offered": 2507,
        "played": 1321,
        "ignored": 1967,
        "selectionRate": 0.526924611088951,
        "wins": 732,
        "losses": 589,
        "draws": 0,
        "winRateWhenPlayed": 0.5541256623769871,
        "averageFlips": 0.303557910673732,
        "averageDamageDealt": 0.6669190007570023,
        "averageNetDamage": 0.44738834216502654,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 123,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 119,
            "winRateWhenPlayed": 0.6302521008403361
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 119,
            "winRateWhenPlayed": 0.5126050420168067
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 113,
            "winRateWhenPlayed": 0.5575221238938053
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 112,
            "winRateWhenPlayed": 0.6964285714285714
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
        "count": 147,
        "wins": 82,
        "losses": 65,
        "draws": 0,
        "winRate": 0.5578231292517006,
        "averageFlips": 0.2653061224489796,
        "averageDamageDealt": 0.9591836734693877,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 140,
        "wins": 79,
        "losses": 61,
        "draws": 0,
        "winRate": 0.5642857142857143,
        "averageFlips": 0.36428571428571427,
        "averageDamageDealt": 0.7714285714285715,
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
        "wins": 78,
        "losses": 34,
        "draws": 0,
        "winRate": 0.6964285714285714,
        "averageFlips": 0.3482142857142857,
        "averageDamageDealt": 2.4285714285714284,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 107,
        "wins": 69,
        "losses": 38,
        "draws": 0,
        "winRate": 0.6448598130841121,
        "averageFlips": 0.22429906542056074,
        "averageDamageDealt": 2.8598130841121496,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 98,
        "wins": 51,
        "losses": 47,
        "draws": 0,
        "winRate": 0.5204081632653061,
        "averageFlips": 0.15306122448979592,
        "averageDamageDealt": 1.3265306122448979,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 91,
        "wins": 50,
        "losses": 41,
        "draws": 0,
        "winRate": 0.5494505494505495,
        "averageFlips": 0.32967032967032966,
        "averageDamageDealt": 0.0989010989010989,
        "averageEffectAmount": 1.3516483516483517,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 87,
        "wins": 45,
        "losses": 42,
        "draws": 0,
        "winRate": 0.5172413793103449,
        "averageFlips": 0.27586206896551724,
        "averageDamageDealt": 0.3563218390804598,
        "averageEffectAmount": 2.0344827586206895,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 80,
        "wins": 48,
        "losses": 32,
        "draws": 0,
        "winRate": 0.6,
        "averageFlips": 0.15,
        "averageDamageDealt": 2.775,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:boost-self",
        "kind": "effect",
        "label": "Mage des runes -> boost-self",
        "count": 78,
        "wins": 44,
        "losses": 34,
        "draws": 0,
        "winRate": 0.5641025641025641,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0.11538461538461539,
        "averageEffectAmount": 1.8333333333333333,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 74,
        "wins": 46,
        "losses": 28,
        "draws": 0,
        "winRate": 0.6216216216216216,
        "averageFlips": 0.14864864864864866,
        "averageDamageDealt": 0.6081081081081081,
        "averageEffectAmount": 6.1891891891891895,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:draw-next-turn",
        "kind": "effect",
        "label": "Moine engrene -> draw-next-turn",
        "count": 60,
        "wins": 32,
        "losses": 28,
        "draws": 0,
        "winRate": 0.5333333333333333,
        "averageFlips": 0.11666666666666667,
        "averageDamageDealt": 0.26666666666666666,
        "averageEffectAmount": 1.3666666666666667,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:boost-self",
        "kind": "effect",
        "label": "Moine du seuil -> boost-self",
        "count": 57,
        "wins": 25,
        "losses": 32,
        "draws": 0,
        "winRate": 0.43859649122807015,
        "averageFlips": 0.3157894736842105,
        "averageDamageDealt": 0.40350877192982454,
        "averageEffectAmount": 1.9298245614035088,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 52,
        "wins": 32,
        "losses": 20,
        "draws": 0,
        "winRate": 0.6153846153846154,
        "averageFlips": 0.15384615384615385,
        "averageDamageDealt": 1.1538461538461537,
        "averageEffectAmount": 2.5384615384615383,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:boost-self",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> boost-self",
        "count": 48,
        "wins": 26,
        "losses": 22,
        "draws": 0,
        "winRate": 0.5416666666666666,
        "averageFlips": 0.020833333333333332,
        "averageDamageDealt": 0.2916666666666667,
        "averageEffectAmount": 2.1458333333333335,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:boost-self",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> boost-self",
        "count": 42,
        "wins": 18,
        "losses": 24,
        "draws": 0,
        "winRate": 0.42857142857142855,
        "averageFlips": 0.19047619047619047,
        "averageDamageDealt": 0.5238095238095238,
        "averageEffectAmount": 1.2857142857142858,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 39,
        "wins": 20,
        "losses": 19,
        "draws": 0,
        "winRate": 0.5128205128205128,
        "averageFlips": 0.05128205128205128,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2.1025641025641026,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:heron:draw-next-turn",
        "kind": "effect",
        "label": "Oiselle aubeplume -> draw-next-turn",
        "count": 37,
        "wins": 27,
        "losses": 10,
        "draws": 0,
        "winRate": 0.7297297297297297,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.4054054054054055,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 35,
        "wins": 18,
        "losses": 17,
        "draws": 0,
        "winRate": 0.5142857142857142,
        "averageFlips": 0.7714285714285715,
        "averageDamageDealt": 3.7714285714285714,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 35,
        "wins": 17,
        "losses": 18,
        "draws": 0,
        "winRate": 0.4857142857142857,
        "averageFlips": 0.14285714285714285,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2.342857142857143,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 19,
        "wins": 11,
        "losses": 8,
        "draws": 0,
        "winRate": 0.5789473684210527,
        "averageFlips": 0.8947368421052632,
        "averageDamageDealt": 3.263157894736842,
        "averageEffectAmount": 1.1578947368421053,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 16,
        "wins": 11,
        "losses": 5,
        "draws": 0,
        "winRate": 0.6875,
        "averageFlips": 0.5625,
        "averageDamageDealt": 8.375,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 14,
        "wins": 9,
        "losses": 5,
        "draws": 0,
        "winRate": 0.6428571428571429,
        "averageFlips": 1.1428571428571428,
        "averageDamageDealt": 3.357142857142857,
        "averageEffectAmount": 2.4285714285714284,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 14,
        "wins": 8,
        "losses": 6,
        "draws": 0,
        "winRate": 0.5714285714285714,
        "averageFlips": 1.0714285714285714,
        "averageDamageDealt": 2.857142857142857,
        "averageEffectAmount": 2,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:foxfire:gain-shield",
        "kind": "effect",
        "label": "Requin runefer -> gain-shield",
        "count": 11,
        "wins": 9,
        "losses": 2,
        "draws": 0,
        "winRate": 0.8181818181818182,
        "averageFlips": 1,
        "averageDamageDealt": 0,
        "averageEffectAmount": 2.727272727272727,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "id": "combo-friendly-adjacent:familiar+familiar",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 112,
        "title": "familiar allie + familiar ressort comme combo",
        "detail": "112 occurrences, 70% win, 0.35 flips, 2.43 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 107,
        "title": "human allie + human ressort comme combo",
        "detail": "107 occurrences, 64% win, 0.22 flips, 2.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:automaton+automaton",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 80,
        "title": "automaton allie + automaton ressort comme combo",
        "detail": "80 occurrences, 60% win, 0.15 flips, 2.77 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:heron:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 37,
        "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
        "detail": "37 occurrences, 73% win, 1.00 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 35,
        "title": "demon -> demon ressort comme combo",
        "detail": "35 occurrences, 51% win, 0.77 flips, 3.77 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 19,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "19 occurrences, 58% win, 0.89 flips, 3.26 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 16,
        "title": "demon allie + demon ressort comme combo",
        "detail": "16 occurrences, 69% win, 0.56 flips, 8.38 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 14,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "14 occurrences, 64% win, 1.14 flips, 3.36 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 14,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "14 occurrences, 57% win, 1.07 flips, 2.86 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:foxfire:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 11,
        "title": "Requin runefer -> gain-shield ressort comme combo",
        "detail": "11 occurrences, 82% win, 1.00 flips, 0.00 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 12 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a confirmer (25%). Tours morts a surveiller (9%). Peu de flips par tour (0.18).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:familiar+familiar",
      "severity": "watch",
      "title": "familiar allie + familiar ressort comme combo",
      "detail": "112 occurrences, 70% win, 0.35 flips, 2.43 degats. Confiance high, echantillon 112.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:human+human",
      "severity": "watch",
      "title": "human allie + human ressort comme combo",
      "detail": "107 occurrences, 64% win, 0.22 flips, 2.86 degats. Confiance high, echantillon 107.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:automaton+automaton",
      "severity": "watch",
      "title": "automaton allie + automaton ressort comme combo",
      "detail": "80 occurrences, 60% win, 0.15 flips, 2.77 degats. Confiance high, echantillon 80.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-effect:heron:draw-next-turn",
      "severity": "watch",
      "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
      "detail": "37 occurrences, 73% win, 1.00 flips, 0.00 degats. Confiance high, echantillon 37.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "adventure-boss-reach-champion",
      "severity": "watch",
      "title": "Champion atteint peu le boss en run complet",
      "detail": "Champion atteint le boss dans 0.0% des runs complets, avec 80.0% de combats gagnes.",
      "recommendation": "Comparer les chemins, recompenses et sites pris avant de toucher aux cartes de depart."
    }
  ]
};
