import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260520-113826",
  "generatedAt": "2026-05-20T11:38:26.360Z",
  "config": {
    "matchesPerPairing": 4,
    "adventureRunsPerModel": 2,
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
      "games": 4,
      "wins": 0,
      "losses": 4,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -22.25
    },
    {
      "modelId": "opportunist",
      "games": 8,
      "wins": 4,
      "losses": 4,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -0.625
    },
    {
      "modelId": "regular",
      "games": 8,
      "wins": 5,
      "losses": 3,
      "draws": 0,
      "winRate": 0.625,
      "averageHpEdge": 7.75
    },
    {
      "modelId": "expert",
      "games": 8,
      "wins": 5,
      "losses": 3,
      "draws": 0,
      "winRate": 0.625,
      "averageHpEdge": 3.875
    },
    {
      "modelId": "champion",
      "games": 4,
      "wins": 2,
      "losses": 2,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": 0.25
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "mirrorModelId": "regular",
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayerWinRate": 0.25,
      "averages": {
        "turns": 99.75,
        "rounds": 10.5,
        "flipsPerMatch": 16.25,
        "flipsPerTurn": 0.16290726817042606,
        "reshuffles": 16.25,
        "deadTurns": 5.25,
        "finalHpDifference": 16.75
      },
      "deadTurnFrequency": 0.05263157894736842,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a confirmer (25%).",
        "Peu de flips par tour (0.16)."
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
          "averageHpEdge": -22.25
        },
        {
          "modelId": "opportunist",
          "games": 4,
          "wins": 4,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.25
        }
      ],
      "averages": {
        "turns": 40.5,
        "rounds": 4,
        "flipsPerMatch": 16.25,
        "flipsPerTurn": 0.4012345679012346,
        "reshuffles": 4.75,
        "deadTurns": 4.5,
        "finalHpDifference": 22.25
      },
      "deadTurnFrequency": 0.1111111111111111
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "opportunist",
        "regular"
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
          "modelId": "opportunist",
          "games": 4,
          "wins": 0,
          "losses": 4,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -23.5
        },
        {
          "modelId": "regular",
          "games": 4,
          "wins": 4,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.5
        }
      ],
      "averages": {
        "turns": 54.75,
        "rounds": 5.25,
        "flipsPerMatch": 20.75,
        "flipsPerTurn": 0.3789954337899543,
        "reshuffles": 7,
        "deadTurns": 7.5,
        "finalHpDifference": 23.5
      },
      "deadTurnFrequency": 0.136986301369863
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "wins": 2,
          "winRate": 1
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 4,
          "wins": 1,
          "losses": 3,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -8
        },
        {
          "modelId": "expert",
          "games": 4,
          "wins": 3,
          "losses": 1,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 8
        }
      ],
      "averages": {
        "turns": 109.75,
        "rounds": 12,
        "flipsPerMatch": 28,
        "flipsPerTurn": 0.255125284738041,
        "reshuffles": 19.75,
        "deadTurns": 2.5,
        "finalHpDifference": 10
      },
      "deadTurnFrequency": 0.022779043280182234
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 4,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 2,
          "wins": 2,
          "winRate": 1
        },
        "enemy": {
          "games": 2,
          "wins": 2,
          "winRate": 1
        },
        "overallStartingPlayerWinRate": 1
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.25
        },
        {
          "modelId": "champion",
          "games": 4,
          "wins": 2,
          "losses": 2,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0.25
        }
      ],
      "averages": {
        "turns": 94,
        "rounds": 9.75,
        "flipsPerMatch": 26.25,
        "flipsPerTurn": 0.27925531914893614,
        "reshuffles": 15.5,
        "deadTurns": 6.25,
        "finalHpDifference": 14.25
      },
      "deadTurnFrequency": 0.06648936170212766
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
      "averageLocationsCleared": 1,
      "averageFinalDeckSize": 10,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 50,
      "averageCombatFlips": 23,
      "averageDeadTurns": 5,
      "averageReshuffles": 11,
      "averageRewardsClaimed": 0,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0,
      "averageFusions": 0,
      "familyPickRates": {
        "familiar": 0.5,
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
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss.",
        "Les combats bloquent souvent la progression; verifier ennemis, recompenses et lisibilite des flips."
      ]
    },
    {
      "modelId": "opportunist",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 1,
      "averageFinalDeckSize": 10,
      "averageDeckDelta": 0,
      "averageCombatWinRate": 0,
      "averageCombatTurns": 36,
      "averageCombatFlips": 29.5,
      "averageDeadTurns": 0,
      "averageReshuffles": 5.5,
      "averageRewardsClaimed": 0,
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
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 4,
      "averageFinalDeckSize": 11,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.6666666666666666,
      "averageCombatTurns": 58.5,
      "averageCombatFlips": 22.833333333333332,
      "averageDeadTurns": 0,
      "averageReshuffles": 14.166666666666666,
      "averageRewardsClaimed": 2,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 1,
      "averageFusions": 0,
      "familyPickRates": {
        "arcane": 1
      },
      "nodeMix": {
        "combat": 0.75,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0.25,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "expert",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 5,
      "averageFinalDeckSize": 13,
      "averageDeckDelta": 3,
      "averageCombatWinRate": 0.7777777777777778,
      "averageCombatTurns": 70,
      "averageCombatFlips": 22.77777777777778,
      "averageDeadTurns": 4,
      "averageReshuffles": 11.222222222222221,
      "averageRewardsClaimed": 3.5,
      "averageRewardsSkipped": 0,
      "averageCharms": 1,
      "averageUpgrades": 0,
      "averageRemovals": 0.5,
      "averageFusions": 0,
      "familyPickRates": {
        "automaton": 1
      },
      "nodeMix": {
        "combat": 0.8,
        "elite": 0.1,
        "shop": 0,
        "chest": 0,
        "rest": 0.1,
        "boss": 0
      },
      "notes": [
        "Flux complet: famille, deck 10 cartes, route, combats, recompenses, charmes, camp, forge et boss."
      ]
    },
    {
      "modelId": "champion",
      "runs": 2,
      "victories": 0,
      "bossReached": 0,
      "victoryRate": 0,
      "bossReachRate": 0,
      "averageLocationsCleared": 2,
      "averageFinalDeckSize": 11,
      "averageDeckDelta": 1,
      "averageCombatWinRate": 0.5,
      "averageCombatTurns": 64,
      "averageCombatFlips": 24.5,
      "averageDeadTurns": 1,
      "averageReshuffles": 9.5,
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
        "combat": 0.75,
        "elite": 0.25,
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
      "totalCombatTurns": 58,
      "totalCombatFlips": 28,
      "totalDeadTurns": 4,
      "totalReshuffles": 17,
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
          "combatTurns": 58,
          "combatFlips": 28,
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
      "runIndex": 1,
      "modelId": "beginner",
      "seed": 709999389,
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
      "totalCombatTurns": 42,
      "totalCombatFlips": 18,
      "totalDeadTurns": 6,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 42,
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
      "runIndex": 0,
      "modelId": "opportunist",
      "seed": 1596824857,
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
      "totalCombatFlips": 26,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 26,
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
      "seed": 1580047238,
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
      "totalCombatFlips": 33,
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
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 10,
          "combatWinner": "enemy",
          "combatTurns": 36,
          "combatFlips": 33,
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
      "runIndex": 0,
      "modelId": "regular",
      "seed": 3544591524,
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
      "totalCombatTurns": 135,
      "totalCombatFlips": 56,
      "totalDeadTurns": 0,
      "totalReshuffles": 43,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 54,
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
          "nodeId": "depth-1-lane-3",
          "depth": 1,
          "lane": 3,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 81,
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
      "runIndex": 1,
      "modelId": "regular",
      "seed": 3561369143,
      "selectedFamily": "arcane",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 11,
      "deckDelta": 1,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 4,
      "combatWins": 3,
      "combatLosses": 1,
      "totalCombatTurns": 216,
      "totalCombatFlips": 81,
      "totalDeadTurns": 0,
      "totalReshuffles": 42,
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
        "watcher-stone"
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
        "human": 1,
        "automaton": 0,
        "revenant": 1,
        "arcane": 8,
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
          "combatFlips": 21,
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
          "nodeId": "depth-2-lane-1",
          "depth": 2,
          "lane": 1,
          "kind": "rest",
          "title": "Clairiere des songes",
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
          "siteAction": "camp-remove"
        },
        {
          "nodeId": "depth-3-lane-0",
          "depth": 3,
          "lane": 0,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 9,
          "playerDeckSizeAfter": 10,
          "combatWinner": "player",
          "combatTurns": 54,
          "combatFlips": 17,
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
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 72,
          "combatFlips": 17,
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
          "nodeId": "depth-5-lane-1",
          "depth": 5,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 54,
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
      "runIndex": 0,
      "modelId": "expert",
      "seed": 778319476,
      "selectedFamily": "automaton",
      "startingDeckCardCount": 10,
      "finalDeckCardCount": 15,
      "deckDelta": 5,
      "outcome": "defeat",
      "victory": false,
      "bossReached": false,
      "locationsCleared": 6,
      "combatCount": 6,
      "combatWins": 5,
      "combatLosses": 1,
      "totalCombatTurns": 371,
      "totalCombatFlips": 108,
      "totalDeadTurns": 2,
      "totalReshuffles": 61,
      "rewardOffersSeen": 5,
      "rewardsClaimed": 5,
      "rewardsSkipped": 0,
      "rewardsClaimedByRarity": {
        "common": 5,
        "uncommon": 0,
        "rare": 0
      },
      "stealRewardsOffered": 15,
      "stealRewardsClaimed": 5,
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
        "combat": 6,
        "elite": 0,
        "shop": 0,
        "chest": 0,
        "rest": 0,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 2,
        "demon": 2,
        "human": 0,
        "automaton": 10,
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
          "nodeId": "depth-0-lane-4",
          "depth": 0,
          "lane": 4,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 56,
          "combatFlips": 28,
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
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 12,
          "combatWinner": "player",
          "combatTurns": 45,
          "combatFlips": 2,
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
          "title": "Route des brindilles",
          "playerDeckSizeBefore": 12,
          "playerDeckSizeAfter": 13,
          "combatWinner": "player",
          "combatTurns": 63,
          "combatFlips": 20,
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
          "combatTurns": 27,
          "combatFlips": 9,
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
          "nodeId": "depth-4-lane-2",
          "depth": 4,
          "lane": 2,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 14,
          "playerDeckSizeAfter": 15,
          "combatWinner": "player",
          "combatTurns": 117,
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
          "nodeId": "depth-5-lane-3",
          "depth": 5,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 15,
          "playerDeckSizeAfter": 15,
          "combatWinner": "enemy",
          "combatTurns": 63,
          "combatFlips": 15,
          "enemyProfileId": "fortress",
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
      "seed": 795097095,
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
      "totalCombatTurns": 259,
      "totalCombatFlips": 97,
      "totalDeadTurns": 34,
      "totalReshuffles": 40,
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
        "combat": 2,
        "elite": 1,
        "shop": 0,
        "chest": 0,
        "rest": 1,
        "boss": 0
      },
      "finalDeckFamilies": {
        "familiar": 0,
        "demon": 0,
        "human": 0,
        "automaton": 10,
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
          "nodeId": "depth-0-lane-1",
          "depth": 0,
          "lane": 1,
          "kind": "combat",
          "title": "Duel des fougeres",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 76,
          "combatFlips": 34,
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
          "kind": "rest",
          "title": "Halte aux fougeres",
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
          "nodeId": "depth-2-lane-2",
          "depth": 2,
          "lane": 2,
          "kind": "combat",
          "title": "Escarmouche de mousse",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 59,
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
          "kind": "elite",
          "title": "Predateur runique",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 124,
          "combatFlips": 45,
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
      "totalCombatTurns": 121,
      "totalCombatFlips": 58,
      "totalDeadTurns": 4,
      "totalReshuffles": 17,
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
          "combatTurns": 67,
          "combatFlips": 36,
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
          "combatTurns": 54,
          "combatFlips": 22,
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
      "modelId": "champion",
      "seed": 2452410468,
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
      "totalCombatTurns": 135,
      "totalCombatFlips": 40,
      "totalDeadTurns": 0,
      "totalReshuffles": 21,
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
          "nodeId": "depth-0-lane-3",
          "depth": 0,
          "lane": 3,
          "kind": "combat",
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 10,
          "playerDeckSizeAfter": 11,
          "combatWinner": "player",
          "combatTurns": 36,
          "combatFlips": 22,
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
          "title": "Sentier des griffes",
          "playerDeckSizeBefore": 11,
          "playerDeckSizeAfter": 11,
          "combatWinner": "enemy",
          "combatTurns": 99,
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
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 404,
        "played": 65,
        "ignored": 339,
        "selectionRate": 0.1608910891089109,
        "wins": 28,
        "losses": 37,
        "draws": 0,
        "winRateWhenPlayed": 0.4307692307692308,
        "averageFlips": 0.46153846153846156,
        "failedImpactRate": 0.5384615384615384,
        "averageFlipMargin": 1.7666666666666666,
        "averageEffectAmount": 0.8307692307692308,
        "averageDamageDealt": 0.5538461538461539,
        "averageDamageTaken": 0.15384615384615385,
        "averageNetDamage": 0.4,
        "lethalMoves": 3,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 25,
            "winRate": 0.4
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 1
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
            "played": 65,
            "winRate": 0.4307692307692308
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 828,
        "played": 223,
        "ignored": 605,
        "selectionRate": 0.2693236714975845,
        "wins": 136,
        "losses": 87,
        "draws": 0,
        "winRateWhenPlayed": 0.6098654708520179,
        "averageFlips": 0.42152466367713004,
        "failedImpactRate": 0.36054421768707484,
        "averageFlipMargin": 1.7446808510638299,
        "averageEffectAmount": 0.757847533632287,
        "averageDamageDealt": 0.23766816143497757,
        "averageDamageTaken": 0.04484304932735426,
        "averageNetDamage": 0.19282511210762332,
        "lethalMoves": 2,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 123,
            "winRate": 0.8373983739837398
          },
          {
            "modelId": "expert",
            "played": 58,
            "winRate": 0.46551724137931033
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 16,
            "winRate": 0.375
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
            "played": 223,
            "winRate": 0.6098654708520179
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
        "offered": 890,
        "played": 210,
        "ignored": 680,
        "selectionRate": 0.23595505617977527,
        "wins": 111,
        "losses": 99,
        "draws": 0,
        "winRateWhenPlayed": 0.5285714285714286,
        "averageFlips": 0.2,
        "failedImpactRate": 0.7375,
        "averageFlipMargin": 1.4047619047619047,
        "averageEffectAmount": 1.9428571428571428,
        "averageDamageDealt": 0.11904761904761904,
        "averageDamageTaken": 0.09523809523809523,
        "averageNetDamage": 0.023809523809523808,
        "lethalMoves": 1,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 103,
            "winRate": 0.7669902912621359
          },
          {
            "modelId": "expert",
            "played": 62,
            "winRate": 0.4032258064516129
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 20,
            "winRate": 0.35
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
            "played": 210,
            "winRate": 0.5285714285714286
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
        "offered": 422,
        "played": 145,
        "ignored": 277,
        "selectionRate": 0.34360189573459715,
        "wins": 77,
        "losses": 68,
        "draws": 0,
        "winRateWhenPlayed": 0.5310344827586206,
        "averageFlips": 0.15172413793103448,
        "failedImpactRate": 0.7441860465116279,
        "averageFlipMargin": 1.3636363636363635,
        "averageEffectAmount": 1.2,
        "averageDamageDealt": 0.2206896551724138,
        "averageDamageTaken": 0.12413793103448276,
        "averageNetDamage": 0.09655172413793103,
        "lethalMoves": 1,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 66,
            "winRate": 0.4696969696969697
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.5833333333333334
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 145,
            "winRate": 0.5310344827586206
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
        "offered": 658,
        "played": 123,
        "ignored": 535,
        "selectionRate": 0.18693009118541035,
        "wins": 51,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.4146341463414634,
        "averageFlips": 0.12195121951219512,
        "failedImpactRate": 0.84375,
        "averageFlipMargin": 1.0666666666666667,
        "averageEffectAmount": 1.8780487804878048,
        "averageDamageDealt": 0.12195121951219512,
        "averageDamageTaken": 0.04878048780487805,
        "averageNetDamage": 0.07317073170731707,
        "lethalMoves": 0,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 61,
            "winRate": 0.5573770491803278
          },
          {
            "modelId": "expert",
            "played": 31,
            "winRate": 0.4838709677419355
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.25
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
            "played": 123,
            "winRate": 0.4146341463414634
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
        "offered": 588,
        "played": 119,
        "ignored": 469,
        "selectionRate": 0.20238095238095238,
        "wins": 64,
        "losses": 55,
        "draws": 0,
        "winRateWhenPlayed": 0.5378151260504201,
        "averageFlips": 0.15126050420168066,
        "failedImpactRate": 0.8144329896907216,
        "averageFlipMargin": 1.7777777777777777,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.35294117647058826,
        "averageDamageTaken": 0.01680672268907563,
        "averageNetDamage": 0.33613445378151263,
        "lethalMoves": 1,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 53,
            "winRate": 0.7358490566037735
          },
          {
            "modelId": "expert",
            "played": 36,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0
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
            "played": 119,
            "winRate": 0.5378151260504201
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
        "offered": 555,
        "played": 115,
        "ignored": 440,
        "selectionRate": 0.2072072072072072,
        "wins": 53,
        "losses": 62,
        "draws": 0,
        "winRateWhenPlayed": 0.4608695652173913,
        "averageFlips": 0.09565217391304348,
        "failedImpactRate": 0.8842105263157894,
        "averageFlipMargin": 2.6363636363636362,
        "averageEffectAmount": 0.6782608695652174,
        "averageDamageDealt": 0.3739130434782609,
        "averageDamageTaken": 0.1391304347826087,
        "averageNetDamage": 0.23478260869565218,
        "lethalMoves": 1,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 51,
            "winRate": 0.3137254901960784
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.38461538461538464
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 115,
            "winRate": 0.4608695652173913
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
          "human"
        ],
        "preferredPositions": [],
        "offered": 409,
        "played": 86,
        "ignored": 323,
        "selectionRate": 0.21026894865525672,
        "wins": 57,
        "losses": 29,
        "draws": 0,
        "winRateWhenPlayed": 0.6627906976744186,
        "averageFlips": 0.36046511627906974,
        "failedImpactRate": 0.41509433962264153,
        "averageFlipMargin": 1.6451612903225807,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.6744186046511628,
        "averageDamageTaken": 0.03488372093023256,
        "averageNetDamage": 0.6395348837209303,
        "lethalMoves": 3,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 30,
            "winRate": 0.5666666666666667
          },
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.7391304347826086
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.5882352941176471
          },
          {
            "modelId": "champion",
            "played": 13,
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
            "played": 86,
            "winRate": 0.6627906976744186
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
        "offered": 353,
        "played": 80,
        "ignored": 273,
        "selectionRate": 0.22662889518413598,
        "wins": 45,
        "losses": 35,
        "draws": 0,
        "winRateWhenPlayed": 0.5625,
        "averageFlips": 0.375,
        "failedImpactRate": 0.5588235294117647,
        "averageFlipMargin": 1.5333333333333334,
        "averageEffectAmount": 0.6,
        "averageDamageDealt": 0.3875,
        "averageDamageTaken": 0.0625,
        "averageNetDamage": 0.325,
        "lethalMoves": 0,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 31,
            "winRate": 0.3870967741935484
          },
          {
            "modelId": "expert",
            "played": 28,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 9,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0
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
            "played": 80,
            "winRate": 0.5625
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
        "offered": 419,
        "played": 76,
        "ignored": 343,
        "selectionRate": 0.18138424821002386,
        "wins": 45,
        "losses": 31,
        "draws": 0,
        "winRateWhenPlayed": 0.5921052631578947,
        "averageFlips": 0.15789473684210525,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 1.7894736842105263,
        "averageDamageDealt": 0.10526315789473684,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.10526315789473684,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 38,
            "winRate": 0.5789473684210527
          },
          {
            "modelId": "expert",
            "played": 19,
            "winRate": 0.631578947368421
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.42857142857142855
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
            "played": 76,
            "winRate": 0.5921052631578947
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
        "offered": 219,
        "played": 69,
        "ignored": 150,
        "selectionRate": 0.3150684931506849,
        "wins": 41,
        "losses": 28,
        "draws": 0,
        "winRateWhenPlayed": 0.5942028985507246,
        "averageFlips": 0.3333333333333333,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 2.260869565217391,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.6376811594202898,
        "averageDamageTaken": 0.10144927536231885,
        "averageNetDamage": 0.536231884057971,
        "lethalMoves": 2,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 38,
            "winRate": 0.42105263157894735
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "expert",
            "played": 10,
            "winRate": 0.8
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 69,
            "winRate": 0.5942028985507246
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
        "offered": 246,
        "played": 66,
        "ignored": 180,
        "selectionRate": 0.2682926829268293,
        "wins": 38,
        "losses": 28,
        "draws": 0,
        "winRateWhenPlayed": 0.5757575757575758,
        "averageFlips": 0.42424242424242425,
        "failedImpactRate": 0.46153846153846156,
        "averageFlipMargin": 1.4642857142857142,
        "averageEffectAmount": 2.272727272727273,
        "averageDamageDealt": 0.30303030303030304,
        "averageDamageTaken": 0,
        "averageNetDamage": 0.30303030303030304,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 32,
            "winRate": 0.53125
          },
          {
            "modelId": "expert",
            "played": 17,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 7,
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
            "played": 66,
            "winRate": 0.5757575757575758
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
        "offered": 138,
        "played": 33,
        "ignored": 105,
        "selectionRate": 0.2391304347826087,
        "wins": 18,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.5454545454545454,
        "averageFlips": 0.6060606060606061,
        "failedImpactRate": 0.3103448275862069,
        "averageFlipMargin": 1.15,
        "averageEffectAmount": 0.6060606060606061,
        "averageDamageDealt": 1.4242424242424243,
        "averageDamageTaken": 0.36363636363636365,
        "averageNetDamage": 1.0606060606060606,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 18,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
          },
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 33,
            "winRate": 0.5454545454545454
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
        "offered": 146,
        "played": 32,
        "ignored": 114,
        "selectionRate": 0.2191780821917808,
        "wins": 17,
        "losses": 15,
        "draws": 0,
        "winRateWhenPlayed": 0.53125,
        "averageFlips": 0.6875,
        "failedImpactRate": 0.15384615384615385,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.1875,
        "averageDamageDealt": 1.53125,
        "averageDamageTaken": 0.28125,
        "averageNetDamage": 1.25,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 12,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 32,
            "winRate": 0.53125
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
        "offered": 97,
        "played": 26,
        "ignored": 71,
        "selectionRate": 0.26804123711340205,
        "wins": 15,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.5769230769230769,
        "averageFlips": 0.8461538461538461,
        "failedImpactRate": 0.08333333333333333,
        "averageFlipMargin": 1.9090909090909092,
        "averageEffectAmount": 1.5,
        "averageDamageDealt": 2.3846153846153846,
        "averageDamageTaken": 0.2692307692307692,
        "averageNetDamage": 2.1153846153846154,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "expert",
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
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 26,
            "winRate": 0.5769230769230769
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
        "offered": 100,
        "played": 23,
        "ignored": 77,
        "selectionRate": 0.23,
        "wins": 9,
        "losses": 14,
        "draws": 0,
        "winRateWhenPlayed": 0.391304347826087,
        "averageFlips": 0.43478260869565216,
        "failedImpactRate": 0.4117647058823529,
        "averageFlipMargin": 2.2,
        "averageEffectAmount": 0.6956521739130435,
        "averageDamageDealt": 0.7391304347826086,
        "averageDamageTaken": 0.5217391304347826,
        "averageNetDamage": 0.21739130434782605,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.25
          },
          {
            "modelId": "regular",
            "played": 7,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "opportunist",
            "played": 4,
            "winRate": 0.5
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
            "played": 23,
            "winRate": 0.391304347826087
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
        "offered": 2964,
        "played": 675,
        "ignored": 2289,
        "selectionRate": 0.22773279352226722,
        "wins": 362,
        "losses": 313,
        "draws": 0,
        "winRateWhenPlayed": 0.5362962962962963,
        "averageFlips": 0.25037037037037035,
        "averageDamageDealt": 0.2,
        "averageNetDamage": 0.14370370370370372,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 223,
            "winRateWhenPlayed": 0.6098654708520179
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 210,
            "winRateWhenPlayed": 0.5285714285714286
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 123,
            "winRateWhenPlayed": 0.4146341463414634
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 119,
            "winRateWhenPlayed": 0.5378151260504201
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
        "offered": 1734,
        "played": 405,
        "ignored": 1329,
        "selectionRate": 0.23356401384083045,
        "wins": 203,
        "losses": 202,
        "draws": 0,
        "winRateWhenPlayed": 0.5012345679012346,
        "averageFlips": 0.22962962962962963,
        "averageDamageDealt": 0.3506172839506173,
        "averageNetDamage": 0.22962962962962966,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 145,
            "winRateWhenPlayed": 0.5310344827586206
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 115,
            "winRateWhenPlayed": 0.4608695652173913
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 80,
            "winRateWhenPlayed": 0.5625
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 65,
            "winRateWhenPlayed": 0.4307692307692308
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
        "offered": 1293,
        "played": 297,
        "ignored": 996,
        "selectionRate": 0.2296983758700696,
        "wins": 181,
        "losses": 116,
        "draws": 0,
        "winRateWhenPlayed": 0.6094276094276094,
        "averageFlips": 0.3164983164983165,
        "averageDamageDealt": 0.4377104377104377,
        "averageNetDamage": 0.40404040404040403,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 86,
            "winRateWhenPlayed": 0.6627906976744186
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 76,
            "winRateWhenPlayed": 0.5921052631578947
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 69,
            "winRateWhenPlayed": 0.5942028985507246
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 66,
            "winRateWhenPlayed": 0.5757575757575758
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
        "offered": 481,
        "played": 114,
        "ignored": 367,
        "selectionRate": 0.23700623700623702,
        "wins": 59,
        "losses": 55,
        "draws": 0,
        "winRateWhenPlayed": 0.5175438596491229,
        "averageFlips": 0.6491228070175439,
        "averageDamageDealt": 1.5350877192982457,
        "averageNetDamage": 1.1842105263157896,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 33,
            "winRateWhenPlayed": 0.5454545454545454
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 32,
            "winRateWhenPlayed": 0.53125
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 26,
            "winRateWhenPlayed": 0.5769230769230769
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 23,
            "winRateWhenPlayed": 0.391304347826087
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
        "offered": 4628,
        "played": 1115,
        "ignored": 3513,
        "selectionRate": 0.2409248055315471,
        "wins": 620,
        "losses": 495,
        "draws": 0,
        "winRateWhenPlayed": 0.5560538116591929,
        "averageFlips": 0.24663677130044842,
        "averageDamageDealt": 0.3757847533632287,
        "averageNetDamage": 0.27623318385650225,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 194,
            "winRateWhenPlayed": 0.6288659793814433
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 180,
            "winRateWhenPlayed": 0.5333333333333333
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 115,
            "winRateWhenPlayed": 0.5391304347826087
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 104,
            "winRateWhenPlayed": 0.40384615384615385
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 99,
            "winRateWhenPlayed": 0.5454545454545454
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
        "offered": 561,
        "played": 113,
        "ignored": 448,
        "selectionRate": 0.2014260249554367,
        "wins": 56,
        "losses": 57,
        "draws": 0,
        "winRateWhenPlayed": 0.49557522123893805,
        "averageFlips": 0.39823008849557523,
        "averageDamageDealt": 0.4778761061946903,
        "averageNetDamage": 0.4778761061946903,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 25,
            "winRateWhenPlayed": 0.52
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
        "offered": 504,
        "played": 109,
        "ignored": 395,
        "selectionRate": 0.21626984126984128,
        "wins": 51,
        "losses": 58,
        "draws": 0,
        "winRateWhenPlayed": 0.46788990825688076,
        "averageFlips": 0.30275229357798167,
        "averageDamageDealt": 0.28440366972477066,
        "averageNetDamage": 0.21100917431192662,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 21,
            "winRateWhenPlayed": 0.38095238095238093
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
        "offered": 385,
        "played": 78,
        "ignored": 307,
        "selectionRate": 0.2025974025974026,
        "wins": 40,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.5128205128205128,
        "averageFlips": 0.5384615384615384,
        "averageDamageDealt": 0.8333333333333334,
        "averageNetDamage": 0.7051282051282052,
        "topCards": [
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 18,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 394,
        "played": 76,
        "ignored": 318,
        "selectionRate": 0.19289340101522842,
        "wins": 38,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.4605263157894737,
        "averageDamageDealt": 0.17105263157894737,
        "averageNetDamage": 0.06578947368421054,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 19,
            "winRateWhenPlayed": 0.5263157894736842
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 19,
            "winRateWhenPlayed": 0.47368421052631576
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 18,
            "winRateWhenPlayed": 0.5
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
        "offered": 6472,
        "played": 1491,
        "ignored": 4981,
        "selectionRate": 0.2303770086526576,
        "wins": 805,
        "losses": 686,
        "draws": 0,
        "winRateWhenPlayed": 0.539906103286385,
        "averageFlips": 0.2883970489604292,
        "averageDamageDealt": 0.3903420523138833,
        "averageNetDamage": 0.29845741113346747,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 223,
            "winRateWhenPlayed": 0.6098654708520179
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 210,
            "winRateWhenPlayed": 0.5285714285714286
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 145,
            "winRateWhenPlayed": 0.5310344827586206
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 123,
            "winRateWhenPlayed": 0.4146341463414634
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 119,
            "winRateWhenPlayed": 0.5378151260504201
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
        "count": 527,
        "wins": 287,
        "losses": 240,
        "draws": 0,
        "winRate": 0.5445920303605313,
        "averageFlips": 0.24667931688804554,
        "averageDamageDealt": 0.25616698292220114,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 400,
        "wins": 252,
        "losses": 148,
        "draws": 0,
        "winRate": 0.63,
        "averageFlips": 0.1825,
        "averageDamageDealt": 0.7375,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 315,
        "wins": 158,
        "losses": 157,
        "draws": 0,
        "winRate": 0.5015873015873016,
        "averageFlips": 0.2698412698412698,
        "averageDamageDealt": 0.4507936507936508,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 235,
        "wins": 148,
        "losses": 87,
        "draws": 0,
        "winRate": 0.6297872340425532,
        "averageFlips": 0.3872340425531915,
        "averageDamageDealt": 0.5531914893617021,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 226,
        "wins": 131,
        "losses": 95,
        "draws": 0,
        "winRate": 0.5796460176991151,
        "averageFlips": 0.27876106194690264,
        "averageDamageDealt": 0.9867256637168141,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 209,
        "wins": 111,
        "losses": 98,
        "draws": 0,
        "winRate": 0.5311004784688995,
        "averageFlips": 0.20095693779904306,
        "averageDamageDealt": 0.11004784688995216,
        "averageEffectAmount": 1.9521531100478469,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 205,
        "wins": 172,
        "losses": 33,
        "draws": 0,
        "winRate": 0.8390243902439024,
        "averageFlips": 0.3902439024390244,
        "averageDamageDealt": 1.9024390243902438,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gear-monk:gain-shield",
        "kind": "effect",
        "label": "Moine engrene -> gain-shield",
        "count": 121,
        "wins": 50,
        "losses": 71,
        "draws": 0,
        "winRate": 0.4132231404958678,
        "averageFlips": 0.11570247933884298,
        "averageDamageDealt": 0.05785123966942149,
        "averageEffectAmount": 1.9090909090909092,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:draw-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> draw-next-turn",
        "count": 119,
        "wins": 64,
        "losses": 55,
        "draws": 0,
        "winRate": 0.5378151260504201,
        "averageFlips": 0.15126050420168066,
        "averageDamageDealt": 0.35294117647058826,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 109,
        "wins": 68,
        "losses": 41,
        "draws": 0,
        "winRate": 0.6238532110091743,
        "averageFlips": 0.10091743119266056,
        "averageDamageDealt": 0.1651376146788991,
        "averageEffectAmount": 1.5504587155963303,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 88,
        "wins": 46,
        "losses": 42,
        "draws": 0,
        "winRate": 0.5227272727272727,
        "averageFlips": 0.7272727272727273,
        "averageDamageDealt": 1.8863636363636365,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 88,
        "wins": 46,
        "losses": 42,
        "draws": 0,
        "winRate": 0.5227272727272727,
        "averageFlips": 0.06818181818181818,
        "averageDamageDealt": 0.17045454545454544,
        "averageEffectAmount": 1.9772727272727273,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 86,
        "wins": 57,
        "losses": 29,
        "draws": 0,
        "winRate": 0.6627906976744186,
        "averageFlips": 0.36046511627906974,
        "averageDamageDealt": 0.6744186046511628,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 78,
        "wins": 40,
        "losses": 38,
        "draws": 0,
        "winRate": 0.5128205128205128,
        "averageFlips": 0.07692307692307693,
        "averageDamageDealt": 0.5,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 69,
        "wins": 41,
        "losses": 28,
        "draws": 0,
        "winRate": 0.5942028985507246,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0.6376811594202898,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 69,
        "wins": 39,
        "losses": 30,
        "draws": 0,
        "winRate": 0.5652173913043478,
        "averageFlips": 0.11594202898550725,
        "averageDamageDealt": 0.057971014492753624,
        "averageEffectAmount": 1.9710144927536233,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 58,
        "wins": 36,
        "losses": 22,
        "draws": 0,
        "winRate": 0.6206896551724138,
        "averageFlips": 0.46551724137931033,
        "averageDamageDealt": 0.27586206896551724,
        "averageEffectAmount": 2.586206896551724,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 54,
        "wins": 31,
        "losses": 23,
        "draws": 0,
        "winRate": 0.5740740740740741,
        "averageFlips": 0.5185185185185185,
        "averageDamageDealt": 3.259259259259259,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:heron:draw-next-turn",
        "kind": "effect",
        "label": "Oiselle aubeplume -> draw-next-turn",
        "count": 30,
        "wins": 17,
        "losses": 13,
        "draws": 0,
        "winRate": 0.5666666666666667,
        "averageFlips": 1,
        "averageDamageDealt": 0.4666666666666667,
        "averageEffectAmount": 1.8,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:foxfire:gain-shield",
        "kind": "effect",
        "label": "Requin runefer -> gain-shield",
        "count": 27,
        "wins": 20,
        "losses": 7,
        "draws": 0,
        "winRate": 0.7407407407407407,
        "averageFlips": 1.0740740740740742,
        "averageDamageDealt": 0.48148148148148145,
        "averageEffectAmount": 1.7777777777777777,
        "notes": [
          "Combo gagnant frequent.",
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 25,
        "wins": 13,
        "losses": 12,
        "draws": 0,
        "winRate": 0.52,
        "averageFlips": 0.8,
        "averageDamageDealt": 1.88,
        "averageEffectAmount": 0.8,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:cinder-grin:deal-damage",
        "kind": "effect",
        "label": "Sourire de suie -> deal-damage",
        "count": 22,
        "wins": 14,
        "losses": 8,
        "draws": 0,
        "winRate": 0.6363636363636364,
        "averageFlips": 1,
        "averageDamageDealt": 2.5,
        "averageEffectAmount": 1.7727272727272727,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 21,
        "wins": 13,
        "losses": 8,
        "draws": 0,
        "winRate": 0.6190476190476191,
        "averageFlips": 1.0476190476190477,
        "averageDamageDealt": 2.3333333333333335,
        "averageEffectAmount": 1.8095238095238095,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 16,
        "wins": 5,
        "losses": 11,
        "draws": 0,
        "winRate": 0.3125,
        "averageFlips": 0.625,
        "averageDamageDealt": 1.0625,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 404,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "404 offres, 16% selection, 43% win quand jouee, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 205,
        "title": "human allie + human ressort comme combo",
        "detail": "205 occurrences, 84% win, 0.39 flips, 1.90 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 88,
        "title": "demon -> demon ressort comme combo",
        "detail": "88 occurrences, 52% win, 0.73 flips, 1.89 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:demon+demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 54,
        "title": "demon allie + demon ressort comme combo",
        "detail": "54 occurrences, 57% win, 0.52 flips, 3.26 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:heron:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 30,
        "title": "Oiselle aubeplume -> draw-next-turn ressort comme combo",
        "detail": "30 occurrences, 57% win, 1.00 flips, 0.47 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:foxfire:gain-shield",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 27,
        "title": "Requin runefer -> gain-shield ressort comme combo",
        "detail": "27 occurrences, 74% win, 1.07 flips, 0.48 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:hornling:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 25,
        "title": "Cornu farceur -> deal-damage ressort comme combo",
        "detail": "25 occurrences, 52% win, 0.80 flips, 1.88 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:cinder-grin:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 22,
        "title": "Sourire de suie -> deal-damage ressort comme combo",
        "detail": "22 occurrences, 64% win, 1.00 flips, 2.50 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "medium",
        "sampleSize": 21,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "21 occurrences, 62% win, 1.05 flips, 2.33 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "404 offres, 16% selection, 43% win quand jouee, role connector. Confiance high, echantillon 404.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 10 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a confirmer (25%). Peu de flips par tour (0.16).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:human+human",
      "severity": "watch",
      "title": "human allie + human ressort comme combo",
      "detail": "205 occurrences, 84% win, 0.39 flips, 1.90 degats. Confiance high, echantillon 205.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-family-chain:demon->demon",
      "severity": "watch",
      "title": "demon -> demon ressort comme combo",
      "detail": "88 occurrences, 52% win, 0.73 flips, 1.89 degats. Confiance high, echantillon 88.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "diagnostic-combo-friendly-adjacent:demon+demon",
      "severity": "watch",
      "title": "demon allie + demon ressort comme combo",
      "detail": "54 occurrences, 57% win, 0.52 flips, 3.26 degats. Confiance high, echantillon 54.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    },
    {
      "id": "adventure-boss-reach-expert",
      "severity": "watch",
      "title": "Expert atteint peu le boss en run complet",
      "detail": "Expert atteint le boss dans 0.0% des runs complets, avec 77.8% de combats gagnes.",
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
