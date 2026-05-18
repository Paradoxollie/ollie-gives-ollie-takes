import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260518-070157",
  "generatedAt": "2026-05-18T07:01:57.193Z",
  "config": {
    "matchesPerPairing": 8,
    "seed": 1701,
    "deckPresetIds": [
      "starter10",
      "starter12",
      "starter14"
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
      "beamWidth": 12,
      "description": "Modele de joueur moyen qui valorise les coins, le controle et les fins de round."
    },
    {
      "id": "expert",
      "label": "Expert",
      "skillLabel": "Anticipe les reponses",
      "rank": 4,
      "botId": "heuristic",
      "searchDepth": 2,
      "beamWidth": 10,
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
      "description": "Modele promu par l'apprentissage self-play, avec fallback heuristique si aucun profil n'est valide."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 24,
      "wins": 0,
      "losses": 24,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -20.916666666666668
    },
    {
      "modelId": "opportunist",
      "games": 48,
      "wins": 27,
      "losses": 21,
      "draws": 0,
      "winRate": 0.5625,
      "averageHpEdge": 6
    },
    {
      "modelId": "regular",
      "games": 48,
      "wins": 28,
      "losses": 20,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 1.375
    },
    {
      "modelId": "expert",
      "games": 48,
      "wins": 28,
      "losses": 20,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 2.6875
    },
    {
      "modelId": "champion",
      "games": 24,
      "wins": 13,
      "losses": 11,
      "draws": 0,
      "winRate": 0.5416666666666666,
      "averageHpEdge": 0.7916666666666666
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayerWinRate": 0.875,
      "averages": {
        "turns": 48,
        "rounds": 5.5,
        "flipsPerMatch": 16.625,
        "flipsPerTurn": 0.3463541666666667,
        "reshuffles": 8,
        "deadTurns": 0,
        "finalHpDifference": 7.25
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (88%)."
      ]
    },
    {
      "deckPresetId": "starter12",
      "mirrorModelId": "regular",
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayerWinRate": 0.625,
      "averages": {
        "turns": 50.625,
        "rounds": 5.625,
        "flipsPerMatch": 16.75,
        "flipsPerTurn": 0.3308641975308642,
        "reshuffles": 5.5,
        "deadTurns": 0,
        "finalHpDifference": 7.875
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (63%)."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayerWinRate": 0.75,
      "averages": {
        "turns": 51.5,
        "rounds": 5.875,
        "flipsPerMatch": 18,
        "flipsPerTurn": 0.34951456310679613,
        "reshuffles": 4.375,
        "deadTurns": 0,
        "finalHpDifference": 7.75
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (75%)."
      ]
    }
  ],
  "ladderPairings": [
    {
      "deckPresetId": "starter10",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 8,
          "wins": 0,
          "losses": 8,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -22.875
        },
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 8,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.875
        }
      ],
      "averages": {
        "turns": 33.75,
        "rounds": 3.75,
        "flipsPerMatch": 18.75,
        "flipsPerTurn": 0.5555555555555556,
        "reshuffles": 4.5,
        "deadTurns": 0,
        "finalHpDifference": 22.875
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 0,
          "losses": 8,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -10.875
        },
        {
          "modelId": "regular",
          "games": 8,
          "wins": 8,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 10.875
        }
      ],
      "averages": {
        "turns": 45.375,
        "rounds": 5,
        "flipsPerMatch": 29.375,
        "flipsPerTurn": 0.6473829201101928,
        "reshuffles": 7.125,
        "deadTurns": 0.375,
        "finalHpDifference": 10.875
      },
      "deadTurnFrequency": 0.008264462809917356
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 8,
          "wins": 1,
          "losses": 7,
          "draws": 0,
          "winRate": 0.125,
          "averageHpEdge": -8.625
        },
        {
          "modelId": "expert",
          "games": 8,
          "wins": 7,
          "losses": 1,
          "draws": 0,
          "winRate": 0.875,
          "averageHpEdge": 8.625
        }
      ],
      "averages": {
        "turns": 47.25,
        "rounds": 5.25,
        "flipsPerMatch": 19,
        "flipsPerTurn": 0.4021164021164021,
        "reshuffles": 7.875,
        "deadTurns": 0,
        "finalHpDifference": 8.875
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "enemy": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 8,
          "wins": 2,
          "losses": 6,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -2.25
        },
        {
          "modelId": "champion",
          "games": 8,
          "wins": 6,
          "losses": 2,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 2.25
        }
      ],
      "averages": {
        "turns": 43.875,
        "rounds": 4.875,
        "flipsPerMatch": 25.875,
        "flipsPerTurn": 0.5897435897435898,
        "reshuffles": 7,
        "deadTurns": 0,
        "finalHpDifference": 8.25
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 8,
          "wins": 0,
          "losses": 8,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -19.25
        },
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 8,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19.25
        }
      ],
      "averages": {
        "turns": 37,
        "rounds": 4.125,
        "flipsPerMatch": 22.5,
        "flipsPerTurn": 0.6081081081081081,
        "reshuffles": 3.75,
        "deadTurns": 0,
        "finalHpDifference": 19.25
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "enemy": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 2,
          "losses": 6,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -7.625
        },
        {
          "modelId": "regular",
          "games": 8,
          "wins": 6,
          "losses": 2,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 7.625
        }
      ],
      "averages": {
        "turns": 47.625,
        "rounds": 5.375,
        "flipsPerMatch": 28.25,
        "flipsPerTurn": 0.5931758530183727,
        "reshuffles": 5.75,
        "deadTurns": 0,
        "finalHpDifference": 10.625
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 4,
          "winRate": 1
        },
        "enemy": {
          "games": 4,
          "wins": 1,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 8,
          "wins": 3,
          "losses": 5,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -5.25
        },
        {
          "modelId": "expert",
          "games": 8,
          "wins": 5,
          "losses": 3,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 5.25
        }
      ],
      "averages": {
        "turns": 49.5,
        "rounds": 5.5,
        "flipsPerMatch": 19.875,
        "flipsPerTurn": 0.4015151515151515,
        "reshuffles": 5.125,
        "deadTurns": 0,
        "finalHpDifference": 8
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 4,
          "winRate": 1
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 8,
          "wins": 4,
          "losses": 4,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -2
        },
        {
          "modelId": "champion",
          "games": 8,
          "wins": 4,
          "losses": 4,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 2
        }
      ],
      "averages": {
        "turns": 48.5,
        "rounds": 5.5,
        "flipsPerMatch": 25.875,
        "flipsPerTurn": 0.5335051546391752,
        "reshuffles": 5.25,
        "deadTurns": 0,
        "finalHpDifference": 7.75
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 8,
          "wins": 0,
          "losses": 8,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.625
        },
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 8,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.625
        }
      ],
      "averages": {
        "turns": 34.875,
        "rounds": 3.875,
        "flipsPerMatch": 20.125,
        "flipsPerTurn": 0.5770609318996416,
        "reshuffles": 2.75,
        "deadTurns": 0,
        "finalHpDifference": 20.625
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 8,
          "wins": 1,
          "losses": 7,
          "draws": 0,
          "winRate": 0.125,
          "averageHpEdge": -8.25
        },
        {
          "modelId": "regular",
          "games": 8,
          "wins": 7,
          "losses": 1,
          "draws": 0,
          "winRate": 0.875,
          "averageHpEdge": 8.25
        }
      ],
      "averages": {
        "turns": 48.75,
        "rounds": 5.625,
        "flipsPerMatch": 28.5,
        "flipsPerTurn": 0.5846153846153846,
        "reshuffles": 4.625,
        "deadTurns": 0,
        "finalHpDifference": 9.25
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.625
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 8,
          "wins": 3,
          "losses": 5,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -4.625
        },
        {
          "modelId": "expert",
          "games": 8,
          "wins": 5,
          "losses": 3,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 4.625
        }
      ],
      "averages": {
        "turns": 47.375,
        "rounds": 5.375,
        "flipsPerMatch": 19.75,
        "flipsPerTurn": 0.41688654353562005,
        "reshuffles": 4,
        "deadTurns": 0,
        "finalHpDifference": 6.125
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 8,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 4,
          "wins": 1,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.375
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 8,
          "wins": 5,
          "losses": 3,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 1.875
        },
        {
          "modelId": "champion",
          "games": 8,
          "wins": 3,
          "losses": 5,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -1.875
        }
      ],
      "averages": {
        "turns": 51.125,
        "rounds": 5.75,
        "flipsPerMatch": 28,
        "flipsPerTurn": 0.5476772616136919,
        "reshuffles": 4,
        "deadTurns": 0,
        "finalHpDifference": 8.375
      },
      "deadTurnFrequency": 0
    }
  ],
  "insights": [
    {
      "id": "deck-starter10-problem",
      "severity": "problem",
      "title": "starter10 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (88%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "deck-starter12-problem",
      "severity": "problem",
      "title": "starter12 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (63%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "deck-starter14-problem",
      "severity": "problem",
      "title": "starter14 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (75%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "skill-inversion-starter14-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur starter14 (62.5% contre 37.5%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "champion-underperforms-starter14",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 37.5% contre Expert sur starter14.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    }
  ]
}
;
